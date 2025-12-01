const questionBank = [
    // --- 文本题 (Text Questions) [1-40] ---
    {
        id: 1,
        type: 'text',
        question: "周杰伦的处女作专辑是哪一张？",
        options: ["范特西", "Jay", "八度空间", "叶惠美"],
        answer: 1,
        explanation: "周杰伦的首张专辑《Jay》于2000年11月7日发行。",
        media: null
    },
    {
        id: 2,
        type: 'text',
        question: "歌曲《七里香》收录在同名专辑中，该专辑发行于哪一年？",
        options: ["2002", "2003", "2004", "2005"],
        answer: 2,
        explanation: "《七里香》专辑发行于2004年8月3日。",
        media: null
    },
    {
        id: 3,
        type: 'text',
        question: "“天青色等烟雨，而我在等你”出自哪首歌曲？",
        options: ["发如雪", "青花瓷", "兰亭序", "东风破"],
        answer: 1,
        explanation: "这句经典的歌词出自《青花瓷》。",
        media: null
    },
    {
        id: 4,
        type: 'text',
        question: "周杰伦自导自演的第一部电影是？",
        options: ["头文字D", "大灌篮", "不能说的秘密", "天台爱情"],
        answer: 2,
        explanation: "《不能说的秘密》是周杰伦自导自演的首部电影作品，于2007年上映。",
        media: null
    },
    {
        id: 5,
        type: 'text',
        question: "歌曲《听妈妈的话》中，周杰伦提到了哪位好莱坞巨星？",
        options: ["汤姆·克鲁斯", "威尔·史密斯", "周润发", "成龙"],
        answer: 2,
        explanation: "歌词中提到：“赌神未来是你爸爸”，指周润发。",
        media: null
    },
    {
        id: 6,
        type: 'text',
        question: "《夜曲》这首歌是为了纪念哪位音乐家？",
        options: ["莫扎特", "贝多芬", "肖邦", "巴赫"],
        answer: 2,
        explanation: "《夜曲》收录于《十一月的萧邦》，整张专辑都充满了对肖邦的致敬。",
        media: null
    },
    {
        id: 7,
        type: 'text',
        question: "周杰伦的御用作词人是？",
        options: ["林夕", "黄伟文", "方文山", "姚谦"],
        answer: 2,
        explanation: "方文山是周杰伦的黄金搭档，创作了无数经典歌词。",
        media: null
    },
    {
        id: 8,
        type: 'text',
        question: "“快使用双截棍，哼哼哈兮”出自哪首歌？",
        options: ["龙拳", "双截棍", "霍元甲", "忍者"],
        answer: 1,
        explanation: "这句歌词出自《双截棍》。",
        media: null
    },
    {
        id: 9,
        type: 'text',
        question: "《稻香》这首歌的创作初衷是为了什么？",
        options: ["纪念童年", "鼓励汶川地震受灾人民", "宣传环保", "描写乡村生活"],
        answer: 1,
        explanation: "周杰伦表示《稻香》是为汶川地震创作的，希望用音乐疗伤。",
        media: null
    },
    {
        id: 10,
        type: 'text',
        question: "周杰伦与费玉清合唱的歌曲是？",
        options: ["千里之外", "菊花台", "本草纲目", "红模仿"],
        answer: 0,
        explanation: "两人合唱了经典的《千里之外》。",
        media: null
    },
    {
        id: 11,
        type: 'text',
        question: "周杰伦的英文名是？",
        options: ["Jay Chou", "Jacky Chou", "Jason Chou", "Jimmy Chou"],
        answer: 0,
        explanation: "周杰伦的英文名是 Jay Chou。",
        media: null
    },
    {
        id: 12,
        type: 'text',
        question: "电影《头文字D》中，周杰伦饰演的角色是？",
        options: ["高桥凉介", "中里毅", "藤原拓海", "须藤京一"],
        answer: 2,
        explanation: "周杰伦饰演主角藤原拓海。",
        media: null
    },
    {
        id: 13,
        type: 'text',
        question: "歌曲《简单爱》收录在哪张专辑？",
        options: ["Jay", "范特西", "八度空间", "叶惠美"],
        answer: 1,
        explanation: "《简单爱》收录于2001年的专辑《范特西》。",
        media: null
    },
    {
        id: 14,
        type: 'text',
        question: "“小朋友 你是否有很多问号”出自哪首歌？",
        options: ["听妈妈的话", "稻香", "外婆", "爷爷泡的茶"],
        answer: 0,
        explanation: "这句歌词出自《听妈妈的话》。",
        media: null
    },
    {
        id: 15,
        type: 'text',
        question: "周杰伦在2015年与哪位女星结婚？",
        options: ["蔡依林", "侯佩岑", "昆凌", "林志玲"],
        answer: 2,
        explanation: "周杰伦与昆凌于2015年结婚。",
        media: null
    },
    {
        id: 16,
        type: 'text',
        question: "歌曲《以父之名》的MV拍摄地点是？",
        options: ["巴黎", "伦敦", "罗马", "威尼斯"],
        answer: 2,
        explanation: "《以父之名》的MV在意大利罗马拍摄。",
        media: null
    },
    {
        id: 17,
        type: 'text',
        question: "周杰伦凭借哪首歌获得了第15届金曲奖最佳作词人奖（方文山作词）？",
        options: ["东风破", "七里香", "梯田", "威廉古堡"],
        answer: 2,
        explanation: "方文山凭借《东风破》获得最佳作词人，但周杰伦凭借《梯田》入围。",
        media: null
    },
    {
        id: 18,
        type: 'text',
        question: "“最美的不是下雨天，是曾与你躲过雨的屋檐”出自？",
        options: ["晴天", "不能说的秘密", "彩虹", "蒲公英的约定"],
        answer: 1,
        explanation: "这句歌词出自《不能说的秘密》。",
        media: null
    },
    {
        id: 19,
        type: 'text',
        question: "周杰伦的粉丝名称通常被称为？",
        options: ["杰迷", "伦粉", "双截棍", "杰伦党"],
        answer: 0,
        explanation: "周杰伦的粉丝通常自称为“杰迷”。",
        media: null
    },
    {
        id: 20,
        type: 'text',
        question: "《牛仔很忙》这首歌的曲风是？",
        options: ["R&B", "中国风", "乡村民谣", "爵士"],
        answer: 2,
        explanation: "《牛仔很忙》是一首美国乡村民谣风格的歌曲。",
        media: null
    },
    {
        id: 21,
        type: 'text',
        question: "周杰伦在哪一年登上了美国《时代》周刊封面？",
        options: ["2001", "2003", "2005", "2008"],
        answer: 1,
        explanation: "周杰伦在2003年成为《时代》周刊亚洲版的封面人物。",
        media: null
    },
    {
        id: 22,
        type: 'text',
        question: "歌曲《本草纲目》中提到了哪位古代医学家？",
        options: ["华佗", "扁鹊", "李时珍", "孙思邈"],
        answer: 2,
        explanation: "《本草纲目》是李时珍的著作，歌名即致敬。",
        media: null
    },
    {
        id: 23,
        type: 'text',
        question: "周杰伦执导的第二部电影是？",
        options: ["天台爱情", "大灌篮", "逆战", "刺陵"],
        answer: 0,
        explanation: "《天台爱情》是周杰伦执导的第二部电影。",
        media: null
    },
    {
        id: 24,
        type: 'text',
        question: "“菊花残 满地伤 你的笑容已泛黄”出自？",
        options: ["菊花台", "黄金甲", "霍元甲", "兰亭序"],
        answer: 0,
        explanation: "这句歌词出自《菊花台》。",
        media: null
    },
    {
        id: 25,
        type: 'text',
        question: "周杰伦的哪张专辑封面是他穿着红色卫衣？",
        options: ["Jay", "范特西", "八度空间", "叶惠美"],
        answer: 1,
        explanation: "《范特西》的封面是周杰伦穿着红色卫衣的特写。",
        media: null
    },
    {
        id: 26,
        type: 'text',
        question: "歌曲《告白气球》收录在哪张专辑？",
        options: ["周杰伦的床边故事", "哎呦，不错哦", "十二新作", "惊叹号"],
        answer: 0,
        explanation: "《告白气球》收录于2016年的专辑《周杰伦的床边故事》。",
        media: null
    },
    {
        id: 27,
        type: 'text',
        question: "周杰伦在《满城尽带黄金甲》中饰演的角色是？",
        options: ["元杰", "元祥", "元成", "元吉"],
        answer: 0,
        explanation: "周杰伦饰演二王子元杰。",
        media: null
    },
    {
        id: 28,
        type: 'text',
        question: "“海鸟跟鱼相爱 只是一场意外”出自？",
        options: ["珊瑚海", "美人鱼", "搁浅", "一路向北"],
        answer: 0,
        explanation: "这句歌词出自《珊瑚海》。",
        media: null
    },
    {
        id: 29,
        type: 'text',
        question: "周杰伦的哪首歌被选为2008年北京奥运会歌曲之一？",
        options: ["千山万水", "霍元甲", "黄金甲", "龙拳"],
        answer: 0,
        explanation: "《千山万水》是周杰伦为北京奥运会创作的歌曲。",
        media: null
    },
    {
        id: 30,
        type: 'text',
        question: "歌曲《可爱女人》是周杰伦写给谁的？",
        options: ["徐若瑄", "蔡依林", "温岚", "侯佩岑"],
        answer: 0,
        explanation: "《可爱女人》由徐若瑄作词，并出演MV。",
        media: null
    },
    {
        id: 31,
        type: 'text',
        question: "周杰伦在好莱坞电影《青蜂侠》中饰演的角色是？",
        options: ["Kato", "Bruce", "Lee", "Chan"],
        answer: 0,
        explanation: "周杰伦饰演青蜂侠的助手Kato。",
        media: null
    },
    {
        id: 32,
        type: 'text',
        question: "“窗外的麻雀 在电线杆上多嘴”出自？",
        options: ["七里香", "稻香", "暗号", "园游会"],
        answer: 0,
        explanation: "这句歌词出自《七里香》。",
        media: null
    },
    {
        id: 33,
        type: 'text',
        question: "周杰伦的哪首歌MV邀请了林志玲出演？",
        options: ["兰亭序", "青花瓷", "千里之外", "红尘客栈"],
        answer: 0,
        explanation: "林志玲出演了《兰亭序》的MV。",
        media: null
    },
    {
        id: 34,
        type: 'text',
        question: "歌曲《双截棍》原本是写给谁的？",
        options: ["张惠妹", "李玟", "陈小春", "吴宗宪"],
        answer: 0,
        explanation: "《双截棍》原本是写给张惠妹的，但被退稿。",
        media: null
    },
    {
        id: 35,
        type: 'text',
        question: "周杰伦的哪张专辑以他的母亲名字命名？",
        options: ["叶惠美", "依然范特西", "十一月的萧邦", "摩羯座"],
        answer: 0,
        explanation: "《叶惠美》专辑以周杰伦母亲的名字命名。",
        media: null
    },
    {
        id: 36,
        type: 'text',
        question: "“我想我是太过依赖 在挂电话的刚才”出自？",
        options: ["彩虹", "倒带", "搁浅", "退后"],
        answer: 0,
        explanation: "这句歌词出自《彩虹》。",
        media: null
    },
    {
        id: 37,
        type: 'text',
        question: "周杰伦的哪首歌是《魔兽争霸3》的推广曲？",
        options: ["半兽人", "龙拳", "无双", "乱舞春秋"],
        answer: 0,
        explanation: "《半兽人》是《魔兽争霸3》的中文推广曲。",
        media: null
    },
    {
        id: 38,
        type: 'text',
        question: "歌曲《烟花易冷》的歌词灵感来源于哪部古籍？",
        options: ["洛阳伽蓝记", "搜神记", "山海经", "聊斋志异"],
        answer: 0,
        explanation: "方文山根据《洛阳伽蓝记》创作了《烟花易冷》的歌词。",
        media: null
    },
    {
        id: 39,
        type: 'text',
        question: "周杰伦的哪首歌MV是在法国巴黎拍摄的？",
        options: ["告白气球", "最伟大的作品", "爱情废柴", "以上都是"],
        answer: 3,
        explanation: "《告白气球》、《最伟大的作品》、《爱情废柴》的MV都在巴黎取景。",
        media: null
    },
    {
        id: 40,
        type: 'text',
        question: "“雨下整夜 我的爱溢出就像雨水”出自？",
        options: ["七里香", "晴天", "雨下一整晚", "心雨"],
        answer: 0,
        explanation: "这句歌词出自《七里香》。",
        media: null
    },

    // --- 音乐题 (Audio Questions) [41-80] ---
    {
        id: 41,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["七里香", "搁浅", "止战之殇", "园游会"],
        answer: 0,
        explanation: "这是《七里香》的前奏。",
        media: "songs/七里香/周杰伦 - 七里香.mp3"
    },
    {
        id: 42,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["晴天", "三年二班", "东风破", "以父之名"],
        answer: 2,
        explanation: "这是《东风破》的前奏。",
        media: "songs/叶惠美/周杰伦 - 东风破.mp3"
    },
    {
        id: 43,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["简单爱", "双截棍", "爱在西元前", "安静"],
        answer: 1,
        explanation: "这是《双截棍》的前奏。",
        media: "songs/范特西/周杰伦 - 双截棍.mp3"
    },
    {
        id: 44,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["夜曲", "发如雪", "黑色毛衣", "枫"],
        answer: 0,
        explanation: "这是《夜曲》的前奏。",
        media: "songs/十一月的萧邦/周杰伦 - 夜曲.mp3"
    },
    {
        id: 45,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["听妈妈的话", "千里之外", "本草纲目", "退后"],
        answer: 0,
        explanation: "这是《听妈妈的话》的前奏。",
        media: "songs/依然范特西/周杰伦 - 听妈妈的话.mp3"
    },
    {
        id: 46,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["稻香", "给我一首歌的时间", "说好的幸福呢", "兰亭序"],
        answer: 0,
        explanation: "这是《稻香》的前奏。",
        media: "songs/魔杰座/周杰伦 - 稻香.mp3"
    },
    {
        id: 47,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["牛仔很忙", "彩虹", "青花瓷", "最长的电影"],
        answer: 0,
        explanation: "这是《牛仔很忙》的前奏。",
        media: "songs/我很忙/周杰伦 - 牛仔很忙.mp3"
    },
    {
        id: 48,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["以父之名", "懦夫", "晴天", "三年二班"],
        answer: 0,
        explanation: "这是《以父之名》的前奏。",
        media: "songs/叶惠美/周杰伦 - 以父之名.mp3"
    },
    {
        id: 49,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["安静", "黑色幽默", "龙卷风", "星晴"],
        answer: 0,
        explanation: "这是《安静》的前奏。",
        media: "songs/范特西/周杰伦 - 安静.mp3"
    },
    {
        id: 50,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["搁浅", "借口", "外婆", "将军"],
        answer: 0,
        explanation: "这是《搁浅》的前奏。",
        media: "songs/七里香/周杰伦 - 搁浅.mp3"
    },
    {
        id: 51,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["半兽人", "半岛铁盒", "暗号", "回到过去"],
        answer: 0,
        explanation: "这是《半兽人》的前奏。",
        media: "songs/八度空间/周杰伦 - 半兽人.mp3"
    },
    {
        id: 52,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["轨迹", "断了的弦", "晴天", "退后"],
        answer: 0,
        explanation: "这是《轨迹》的前奏。",
        media: "songs/寻找周杰伦EP/周杰伦 - 軌跡.mp3"
    },
    {
        id: 53,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["发如雪", "枫", "珊瑚海", "一路向北"],
        answer: 0,
        explanation: "这是《发如雪》的前奏。",
        media: "songs/十一月的萧邦/周杰伦 - 发如雪.mp3"
    },
    {
        id: 54,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["本草纲目", "红模仿", "迷迭香", "心雨"],
        answer: 0,
        explanation: "这是《本草纲目》的前奏。",
        media: "songs/依然范特西/周杰伦 - 本草纲目.mp3"
    },
    {
        id: 55,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["青花瓷", "彩虹", "蒲公英的约定", "无双"],
        answer: 0,
        explanation: "这是《青花瓷》的前奏。",
        media: "songs/我很忙/周杰伦 - 青花瓷.mp3"
    },
    {
        id: 56,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["给我一首歌的时间", "花海", "说好的幸福呢", "龙骑战士"],
        answer: 0,
        explanation: "这是《给我一首歌的时间》的前奏。",
        media: "songs/魔杰座/周杰伦 - 给我一首歌的时间.mp3"
    },
    {
        id: 57,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["爱在西元前", "简单爱", "忍者", "爸我回来了"],
        answer: 0,
        explanation: "这是《爱在西元前》的前奏。",
        media: "songs/范特西/周杰伦 - 爱在西元前.mp3"
    },
    {
        id: 58,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["晴天", "梯田", "双刀", "懦夫"],
        answer: 0,
        explanation: "这是《晴天》的前奏。",
        media: "songs/叶惠美/周杰伦 - 晴天.mp3"
    },
    {
        id: 59,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["止战之殇", "乱舞春秋", "困兽之斗", "外婆"],
        answer: 0,
        explanation: "这是《止战之殇》的前奏。",
        media: "songs/七里香/周杰伦 - 止战之殇.mp3"
    },
    {
        id: 60,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["半岛铁盒", "暗号", "分裂", "爷爷泡的茶"],
        answer: 0,
        explanation: "这是《半岛铁盒》的前奏。",
        media: "songs/八度空间/周杰伦 - 半岛铁盒.mp3"
    },
    {
        id: 61,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["黑色毛衣", "麦芽糖", "浪漫手机", "逆鳞"],
        answer: 0,
        explanation: "这是《黑色毛衣》的前奏。",
        media: "songs/十一月的萧邦/周杰伦 - 黑色毛衣.mp3"
    },
    {
        id: 62,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["千里之外", "退后", "白色风车", "夜的第七章"],
        answer: 0,
        explanation: "这是《千里之外》的前奏。",
        media: "songs/依然范特西/周杰伦、费玉清 - 千里之外.mp3"
    },
    {
        id: 63,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["彩虹", "甜甜的", "阳光宅男", "我不配"],
        answer: 0,
        explanation: "这是《彩虹》的前奏。",
        media: "songs/我很忙/周杰伦 - 彩虹.mp3"
    },
    {
        id: 64,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["兰亭序", "流浪诗人", "魔术先生", "乔克先生"],
        answer: 0,
        explanation: "这是《兰亭序》的前奏。",
        media: "songs/魔杰座/周杰伦 - 兰亭序.mp3"
    },
    {
        id: 65,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["简单爱", "开不了口", "上海一九四三", "对不起"],
        answer: 0,
        explanation: "这是《简单爱》的前奏。",
        media: "songs/范特西/周杰伦 - 简单爱.mp3"
    },
    {
        id: 66,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["三年二班", "她的睫毛", "爱情悬崖", "同一种调调"],
        answer: 0,
        explanation: "这是《三年二班》的前奏。",
        media: "songs/叶惠美/周杰伦 - 三年二班.mp3"
    },
    {
        id: 67,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["园游会", "借口", "将军", "乱舞春秋"],
        answer: 0,
        explanation: "这是《园游会》的前奏。",
        media: "songs/七里香/周杰伦 - 园游会.mp3"
    },
    {
        id: 68,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["暗号", "回到过去", "米兰的小铁匠", "最后的战役"],
        answer: 0,
        explanation: "这是《暗号》的前奏。",
        media: "songs/八度空间/周杰伦 - 暗号.mp3"
    },
    {
        id: 69,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["枫", "珊瑚海", "飘移", "一路向北"],
        answer: 0,
        explanation: "这是《枫》的前奏。",
        media: "songs/十一月的萧邦/周杰伦 - 枫.mp3"
    },
    {
        id: 70,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["退后", "心雨", "白色风车", "迷迭香"],
        answer: 0,
        explanation: "这是《退后》的前奏。",
        media: "songs/依然范特西/周杰伦 - 退后.mp3"
    },
    {
        id: 71,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["最长的电影", "蒲公英的约定", "甜甜的", "无双"],
        answer: 0,
        explanation: "这是《最长的电影》的前奏。",
        media: "songs/我很忙/周杰伦 - 最长的电影.mp3"
    },
    {
        id: 72,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["说好的幸福呢", "花海", "时光机", "蛇舞"],
        answer: 0,
        explanation: "这是《说好的幸福呢》的前奏。",
        media: "songs/魔杰座/周杰伦 - 说好的幸福呢.mp3"
    },
    {
        id: 73,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["开不了口", "上海一九四三", "威廉古堡", "对不起"],
        answer: 0,
        explanation: "这是《开不了口》的前奏。",
        media: "songs/范特西/周杰伦 - 开不了口.mp3"
    },
    {
        id: 74,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["她的睫毛", "爱情悬崖", "同一种调调", "双刀"],
        answer: 0,
        explanation: "这是《她的睫毛》的前奏。",
        media: "songs/叶惠美/周杰伦 - 她的睫毛.mp3"
    },
    {
        id: 75,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["借口", "将军", "乱舞春秋", "困兽之斗"],
        answer: 0,
        explanation: "这是《借口》的前奏。",
        media: "songs/七里香/周杰伦 - 借口.mp3"
    },
    {
        id: 76,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["回到过去", "米兰的小铁匠", "最后的战役", "火车叨位去"],
        answer: 0,
        explanation: "这是《回到过去》的前奏。",
        media: "songs/八度空间/周杰伦 - 回到过去.mp3"
    },
    {
        id: 77,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["珊瑚海", "飘移", "一路向北", "蓝色风暴"],
        answer: 0,
        explanation: "这是《珊瑚海》的前奏。",
        media: "songs/十一月的萧邦/周杰伦 - 珊瑚海.mp3"
    },
    {
        id: 78,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["夜的第七章", "心雨", "白色风车", "迷迭香"],
        answer: 0,
        explanation: "这是《夜的第七章》的前奏。",
        media: "songs/依然范特西/周杰伦 - 夜的第七章.mp3"
    },
    {
        id: 79,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["蒲公英的约定", "甜甜的", "无双", "扯"],
        answer: 0,
        explanation: "这是《蒲公英的约定》的前奏。",
        media: "songs/我很忙/周杰伦 - 蒲公英的约定.mp3"
    },
    {
        id: 80,
        type: 'audio',
        question: "请听前奏，猜猜这是哪首歌？",
        options: ["花海", "时光机", "蛇舞", "乔克先生"],
        answer: 0,
        explanation: "这是《花海》的前奏。",
        media: "songs/魔杰座/周杰伦 - 花海.mp3"
    },

    // --- 图片题 (Image Questions) [81-100] ---
    {
        id: 81,
        type: 'image',
        question: "这张图片出自哪首歌的MV？",
        options: ["发如雪", "青花瓷", "千里之外", "菊花台"],
        answer: 1,
        explanation: "这是《青花瓷》MV中的经典画面。",
        media: "https://placehold.co/600x400/000000/FFFFFF/png?text=青花瓷MV截图"
    },
    {
        id: 82,
        type: 'image',
        question: "这是哪张专辑的封面风格？",
        options: ["范特西", "叶惠美", "十一月的萧邦", "魔杰座"],
        answer: 0,
        explanation: "红色连帽衫是《范特西》专辑封面的经典造型。",
        media: "https://placehold.co/600x400/FF0000/FFFFFF/png?text=范特西封面"
    },
    {
        id: 83,
        type: 'image',
        question: "图中的乐器在《不能说的秘密》中起到了关键作用，它是？",
        options: ["小提琴", "吉他", "钢琴", "大提琴"],
        answer: 2,
        explanation: "钢琴是穿越时空的关键道具。",
        media: "https://placehold.co/600x400/333333/FFFFFF/png?text=钢琴"
    },
    {
        id: 84,
        type: 'image',
        question: "这张剧照出自哪部电影？",
        options: ["头文字D", "大灌篮", "逆战", "满城尽带黄金甲"],
        answer: 0,
        explanation: "藤原拓海的造型出自《头文字D》。",
        media: "https://placehold.co/600x400/CCCCCC/000000/png?text=头文字D剧照"
    },
    {
        id: 85,
        type: 'image',
        question: "这个手势是周杰伦的经典动作，通常代表什么？",
        options: ["哎哟，不错哦", "听妈妈的话", "再见", "加油"],
        answer: 0,
        explanation: "竖起大拇指是周杰伦的招牌动作，意为“哎哟，不错哦”。",
        media: "https://placehold.co/600x400/FF00FF/FFFFFF/png?text=经典手势"
    },
    {
        id: 86,
        type: 'image',
        question: "这张图片展示的是哪种乐器？周杰伦经常在演唱会上演奏。",
        options: ["古筝", "二胡", "琵琶", "笛子"],
        answer: 0,
        explanation: "周杰伦经常在演唱会上演奏古筝，如《菊花台》。",
        media: "https://placehold.co/600x400/8B4513/FFFFFF/png?text=古筝"
    },
    {
        id: 87,
        type: 'image',
        question: "这是周杰伦哪场演唱会的经典造型？",
        options: ["无与伦比", "地表最强", "超时代", "魔天伦"],
        answer: 0,
        explanation: "这是2004年无与伦比演唱会的经典造型。",
        media: "https://placehold.co/600x400/00008B/FFFFFF/png?text=无与伦比演唱会"
    },
    {
        id: 88,
        type: 'image',
        question: "这张图片暗示了哪首歌曲？",
        options: ["告白气球", "彩虹", "星晴", "简单爱"],
        answer: 0,
        explanation: "图片中的气球暗示了歌曲《告白气球》。",
        media: "https://placehold.co/600x400/FFC0CB/000000/png?text=气球"
    },
    {
        id: 89,
        type: 'image',
        question: "这是哪部电影的海报风格？",
        options: ["天台爱情", "不能说的秘密", "大灌篮", "功夫灌篮"],
        answer: 0,
        explanation: "色彩鲜艳的复古风格是《天台爱情》的特色。",
        media: "https://placehold.co/600x400/FFA500/000000/png?text=天台爱情海报"
    },
    {
        id: 90,
        type: 'image',
        question: "这张图片中的跑车出现在哪首MV中？",
        options: ["超跑女神", "飘移", "彩虹", "牛仔很忙"],
        answer: 0,
        explanation: "《超跑女神》MV中展示了多辆跑车。",
        media: "https://placehold.co/600x400/FF0000/000000/png?text=跑车"
    },
    {
        id: 91,
        type: 'image',
        question: "这是周杰伦最喜欢的饮料，它是？",
        options: ["咖啡", "奶茶", "可乐", "果汁"],
        answer: 1,
        explanation: "周杰伦非常喜欢喝奶茶。",
        media: "https://placehold.co/600x400/D2691E/FFFFFF/png?text=奶茶"
    },
    {
        id: 92,
        type: 'image',
        question: "这张图片代表了哪张专辑的概念？",
        options: ["魔杰座", "十二新作", "惊叹号", "跨时代"],
        answer: 0,
        explanation: "魔术师和小丑的形象代表了《魔杰座》。",
        media: "https://placehold.co/600x400/4B0082/FFFFFF/png?text=魔杰座概念"
    },
    {
        id: 93,
        type: 'image',
        question: "这是哪首中国风歌曲的MV场景？",
        options: ["兰亭序", "红尘客栈", "发如雪", "千里之外"],
        answer: 1,
        explanation: "客栈场景是《红尘客栈》MV的特色。",
        media: "https://placehold.co/600x400/8B0000/FFFFFF/png?text=客栈场景"
    },
    {
        id: 94,
        type: 'image',
        question: "这张图片出自哪部好莱坞电影？",
        options: ["惊天魔盗团2", "青蜂侠", "极限特工", "速度与激情"],
        answer: 0,
        explanation: "周杰伦参演了《惊天魔盗团2》。",
        media: "https://placehold.co/600x400/000000/FFFFFF/png?text=惊天魔盗团2"
    },
    {
        id: 95,
        type: 'image',
        question: "这是周杰伦的哪款签名鞋？",
        options: ["LeBron 17", "Kyrie 6", "Air Jordan", "Curry 7"],
        answer: 0,
        explanation: "Nike曾推出LeBron 17周杰伦联名款。",
        media: "https://placehold.co/600x400/FF4500/FFFFFF/png?text=篮球鞋"
    },
    {
        id: 96,
        type: 'image',
        question: "这张图片暗示了哪首歌曲？",
        options: ["听妈妈的话", "爷爷泡的茶", "爸我回来了", "外婆"],
        answer: 1,
        explanation: "茶具暗示了歌曲《爷爷泡的茶》。",
        media: "https://placehold.co/600x400/006400/FFFFFF/png?text=茶具"
    },
    {
        id: 97,
        type: 'image',
        question: "这是哪张专辑的内页造型？",
        options: ["八度空间", "叶惠美", "七里香", "依然范特西"],
        answer: 2,
        explanation: "军装造型是《七里香》专辑的经典造型之一。",
        media: "https://placehold.co/600x400/556B2F/FFFFFF/png?text=军装造型"
    },
    {
        id: 98,
        type: 'image',
        question: "这张图片中的乐器是？",
        options: ["大提琴", "吉他", "琵琶", "竖琴"],
        answer: 0,
        explanation: "大提琴在《安静》、《不能说的秘密》等多首作品中出现。",
        media: "https://placehold.co/600x400/8B4513/FFFFFF/png?text=大提琴"
    },
    {
        id: 99,
        type: 'image',
        question: "这张图片出自哪首歌曲的MV？",
        options: ["水手怕水", "牛仔很忙", "公公偏头痛", "鞋子特大号"],
        answer: 0,
        explanation: "水手服造型出自《水手怕水》。",
        media: "https://placehold.co/600x400/0000FF/FFFFFF/png?text=水手服"
    },
    {
        id: 100,
        type: 'image',
        question: "这是周杰伦的哪家餐厅？",
        options: ["Mr.J义法厨房", "PHANTACi", "Deja Vu", "J大侠中华料理"],
        answer: 0,
        explanation: "Mr.J义法厨房是周杰伦开设的著名餐厅。",
        media: "https://placehold.co/600x400/333333/FFFFFF/png?text=Mr.J餐厅"
    }
];

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionBank;
}
