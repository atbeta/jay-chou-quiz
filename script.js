// Game State
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 10;
let isAnswered = false;
let audioPlayer = null;

// DOM Elements
const pages = {
    home: document.getElementById('home-page'),
    quiz: document.getElementById('quiz-page'),
    explanation: document.getElementById('explanation-page'),
    result: document.getElementById('result-page'),
    leaderboard: document.getElementById('leaderboard-page')
};

// Quiz Elements
const difficultyBadgeEl = document.getElementById('difficulty-badge');
const questionNumEl = document.getElementById('current-question-num');
const scoreEl = document.getElementById('current-score');
const timerFillEl = document.getElementById('timer-fill');
const timeLeftEl = document.getElementById('time-left');
const mediaAreaEl = document.getElementById('media-area');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');

// Explanation Elements
const resultIconEl = document.getElementById('result-icon');
const resultTitleEl = document.getElementById('result-title');
const correctAnswerTextEl = document.getElementById('correct-answer-text');
const explanationTextEl = document.getElementById('explanation-text');
const nextCountdownEl = document.getElementById('next-countdown');

// Result Elements
const finalScoreNumEl = document.getElementById('final-score-num');
const fanLevelTitleEl = document.getElementById('fan-level-title');
const fanLevelDescEl = document.getElementById('fan-level-desc');
const nicknameInputEl = document.getElementById('nickname-input');

// Audio
const bgmPlayer = document.getElementById('bgm-player');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadLeaderboard();
});

function setupEventListeners() {
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('rank-btn-home').addEventListener('click', () => showPage('leaderboard'));
    document.getElementById('quit-btn').addEventListener('click', confirmQuit);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('submit-score-btn').addEventListener('click', submitScore);
    document.getElementById('restart-btn').addEventListener('click', () => showPage('home'));
    document.getElementById('back-home-btn').addEventListener('click', () => showPage('home'));
}

function showPage(pageName) {
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    pages[pageName].classList.remove('hidden');
    pages[pageName].classList.add('active');
}

function startGame() {
    // Reset State
    score = 0;
    currentQuestionIndex = 0;

    // Select 10 random questions
    currentQuestions = getRandomQuestions(10);

    showPage('quiz');
    loadQuestion();
}

function getRandomQuestions(count) {
    // Use the full bank from questions.js
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    isAnswered = false;

    // Update UI
    questionNumEl.textContent = currentQuestionIndex + 1;
    scoreEl.textContent = score;
    questionTextEl.textContent = q.question;
    optionsContainerEl.innerHTML = '';
    mediaAreaEl.innerHTML = '';
    mediaAreaEl.classList.add('hidden');

    // Update difficulty badge
    const difficultyText = {
        'easy': '简单',
        'medium': '中等',
        'hard': '困难'
    };
    difficultyBadgeEl.textContent = difficultyText[q.difficulty] || '中等';
    difficultyBadgeEl.className = 'difficulty-badge ' + q.difficulty;

    // Handle Media
    if (q.type === 'image' && q.media) {
        mediaAreaEl.classList.remove('hidden');
        const img = document.createElement('img');
        img.src = q.media;
        mediaAreaEl.appendChild(img);
    } else if (q.type === 'audio' && q.media) {
        mediaAreaEl.classList.remove('hidden');
        const playBtn = document.createElement('div');
        playBtn.className = 'audio-control';
        playBtn.innerHTML = '▶';
        playBtn.onclick = () => toggleAudio(q.media, playBtn);
        mediaAreaEl.appendChild(playBtn);

        // Auto play audio
        playAudio(q.media, playBtn);
    }

    // Render Options
    q.options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(index, btn);
        optionsContainerEl.appendChild(btn);
    });

    // Start Timer
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    updateTimerUI();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerUI() {
    timeLeftEl.textContent = timeLeft;
    const percentage = (timeLeft / 10) * 100;
    timerFillEl.style.width = `${percentage}%`;

    if (timeLeft <= 3) {
        timerFillEl.style.backgroundColor = '#f44336';
    } else {
        timerFillEl.style.backgroundColor = '#00e5ff';
    }
}

function stopAudio() {
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer = null;
    }
}

function playAudio(src, btn) {
    stopAudio();
    audioPlayer = new Audio(src);
    audioPlayer.play().catch(e => console.log("Audio play failed (interaction needed)", e));
    audioPlayer.onended = () => {
        btn.innerHTML = '▶';
    };
    btn.innerHTML = '⏸';
}

function toggleAudio(src, btn) {
    if (audioPlayer && !audioPlayer.paused) {
        audioPlayer.pause();
        btn.innerHTML = '▶';
    } else {
        playAudio(src, btn);
    }
}

function handleAnswer(selectedIndex, btnElement) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timerInterval);
    stopAudio();

    const currentQ = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQ.answer;

    if (isCorrect) {
        score += 10;
        btnElement.classList.add('correct');
        showExplanation(true);
    } else {
        btnElement.classList.add('wrong');
        // Highlight correct answer
        const options = optionsContainerEl.children;
        options[currentQ.answer].classList.add('correct');
        showExplanation(false);
    }
}

function handleTimeout() {
    if (isAnswered) return;
    isAnswered = true;
    stopAudio();

    // Highlight correct answer
    const currentQ = currentQuestions[currentQuestionIndex];
    const options = optionsContainerEl.children;
    if (options[currentQ.answer]) {
        options[currentQ.answer].classList.add('correct');
    }

    showExplanation(false, true);
}

let nextTimerInterval;

function showExplanation(isCorrect, isTimeout = false) {
    setTimeout(() => {
        showPage('explanation');

        const currentQ = currentQuestions[currentQuestionIndex];

        if (isCorrect) {
            resultIconEl.textContent = '✅';
            resultTitleEl.textContent = '回答正确!';
            resultTitleEl.style.color = '#4caf50';
        } else {
            resultIconEl.textContent = '❌';
            resultTitleEl.textContent = isTimeout ? '时间到!' : '回答错误!';
            resultTitleEl.style.color = '#f44336';
        }

        correctAnswerTextEl.textContent = currentQ.options[currentQ.answer];
        explanationTextEl.textContent = currentQ.explanation;

        // Auto jump countdown
        let jumpTime = 5;
        nextCountdownEl.textContent = jumpTime;

        clearInterval(nextTimerInterval);
        nextTimerInterval = setInterval(() => {
            jumpTime--;
            nextCountdownEl.textContent = jumpTime;
            if (jumpTime <= 0) {
                clearInterval(nextTimerInterval);
                nextQuestion();
            }
        }, 1000);

    }, 1000); // Small delay to see the button color
}

function nextQuestion() {
    clearInterval(nextTimerInterval);
    currentQuestionIndex++;
    showPage('quiz');
    loadQuestion();
}

function confirmQuit() {
    if (confirm("确定要退出游戏返回首页吗？当前进度将丢失。")) {
        clearInterval(timerInterval);
        clearInterval(nextTimerInterval);
        stopAudio();
        showPage('home');
    }
}

function endGame() {
    showPage('result');
    finalScoreNumEl.textContent = score;

    let level = '';
    let desc = '';

    if (score >= 100) {
        level = '钻粉';
        desc = '无与伦比！你就是周杰伦本人吧？';
    } else if (score >= 90) {
        level = '金粉';
        desc = '哎哟，不错哦！绝对的资深杰迷！';
    } else if (score >= 80) {
        level = '银粉';
        desc = '很强！大部分歌都难不倒你。';
    } else if (score >= 70) {
        level = '铜粉';
        desc = '还可以，继续加油！';
    } else if (score >= 60) {
        level = '铁粉';
        desc = '及格了，多听听歌吧！';
    } else {
        level = '路人粉';
        desc = '看来你需要去补补课了~';
    }

    fanLevelTitleEl.textContent = level;
    fanLevelDescEl.textContent = desc;
}

// Leaderboard Logic
function submitScore() {
    const nickname = nicknameInputEl.value.trim();
    if (!nickname) {
        alert("请输入昵称！");
        return;
    }

    const record = {
        name: nickname,
        score: score,
        date: new Date().toISOString()
    };

    let leaderboard = JSON.parse(localStorage.getItem('jayQuizLeaderboard') || '[]');
    leaderboard.push(record);
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 50); // Keep top 50

    localStorage.setItem('jayQuizLeaderboard', JSON.stringify(leaderboard));

    showPage('leaderboard');
    renderLeaderboard();
}

function loadLeaderboard() {
    renderLeaderboard();
}

function renderLeaderboard() {
    const listEl = document.getElementById('leaderboard-list');
    const leaderboard = JSON.parse(localStorage.getItem('jayQuizLeaderboard') || '[]');

    listEl.innerHTML = '';

    if (leaderboard.length === 0) {
        listEl.innerHTML = '<div style="padding:20px;text-align:center;color:#666;">暂无数据，快来挑战吧！</div>';
        return;
    }

    leaderboard.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'rank-item';
        div.innerHTML = `
            <span class="rank-num">${index + 1}</span>
            <span class="rank-name">${item.name}</span>
            <span class="rank-score">${item.score}分</span>
        `;
        listEl.appendChild(div);
    });
}
