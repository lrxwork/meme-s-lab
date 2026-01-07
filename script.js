// Three.js基础配置
let scene, camera, renderer, controls;
let cube;

// 初始化Three.js场景
function initThree() {
    // 创建场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    
    // 创建相机
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // 将渲染器的DOM元素添加到页面
    // 注意：这里我们先不添加到DOM，后面会根据需要添加
    
    // 创建轨道控制器
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // 创建一个简单的立方体
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xffeb3b });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // 添加网格辅助线
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);
    
    // 窗口大小调整事件
    window.addEventListener('resize', onWindowResize);
    
    console.log('Three.js环境初始化完成');
}

// 窗口大小调整函数
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    
    // 旋转立方体
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    controls.update();
    renderer.render(scene, camera);
}

// 中国表情包博物馆 - 赛博记忆群岛
// 2010-2024年热梗与表情包数据
const memeData = {
    // 2010年 - 10个梗
    2010: {
        description: "2010年，中国互联网表情包元年，各类经典表情符号开始流行",
        memes: [
            { id: 1, title: "给力", description: "表示\"很棒、很带劲、很出色\"，可用于形容人、事、物的积极状态，是2010年标志性流行语\", source: \"源自日本动漫《西游记：旅程的终点》字幕组，后被《人民日报》引用推广\", image: \"./assets/代表表情包/2010/给力.jpg" },
            { id: 2, title: "神马都是浮云", description: "表示\"一切事物都无关紧要，不必过分在意\"，传递出豁达、淡然的心态\", source: \"网络谐音梗，\"神马\"即\"什么\"，最早流行于猫扑、天涯等论坛\", image: \"./assets/代表表情包/2010/神马都是浮云.png" },
            { id: 3, title: "蒜你狠", description: "表示\"一切事物都无关紧要，不必过分在意\"，传递出豁达、淡然的心态\", source: \"源于2010年大蒜价格疯涨现象，取自\"算你狠\"的谐音\", image: \"./assets/代表表情包/2010/蒜你狠.jpeg" },
            { id: 4, title: "围观", description: "指在网络上关注他人事件、围观讨论但不直接参与的行为，体现了网络时代的集体关注现象\", source: \"随着微博（当时称\"围脖\"）兴起而流行，源自现实中的\"围观\"场景在网络中的延伸\", image: \"./assets/代表表情包/2010/围观.jpeg" },
            { id: 5, title: "二代", description: "特指\"官二代\"\"富二代\"等依赖父辈资源获得优势的群体，常引发关于社会公平的讨论\", source: \"源于社会对不同群体的身份划分，最早在论坛讨论社会阶层话题时流行\", image: \"./assets/代表表情包/2010/二代.png" },
            { id: 6, title: "拼爹", description: "指依靠父辈的关系、财富等资源获取机会，而非凭借自身能力竞争，是对\"拼关系\"现象的讽刺\", source: \"伴随\"二代\"话题衍生，最早流行于校园及职场相关网络讨论\", image: \"./assets/代表表情包/2010/拼爹.png" },
            { id: 7, title: "xx控", description: "表示对某一事物或群体的极度喜爱与执着，如\"萝莉控\"\"游戏控\"，\"xx\"可替换为具体对象\", source: \"源自日语\"コン\"（con），是西方心理学术语\"complex（情结）\"的缩写演变，经ACGN文化传入中国网络\", image: \"./assets/代表表情包/2010/控.png" },
            { id: 8, title: "羡慕嫉妒恨", description: "语义从\"羡慕\"（中性偏积极）逐步过渡到\"嫉妒\"\"恨\"（消极），实际使用中多为夸张调侃，无真实恨意，传递\"极度羡慕+轻微嫉妒\"的复杂情绪\", source: \"源于网络论坛的情绪表达帖，是对递进式情绪的口语化提炼\", image: \"./assets/代表表情包/2010/羡慕嫉妒恨.png" },
            { id: 9, title: "达人", description: "指在某一领域具备专业技能、经验丰富且表现突出的人，如\"美食达人\"\"摄影达人\"\", source: \"源自日语\"達人\"（tatsujin），最早流行于台湾地区，后传入大陆网络\", image: \"./assets/代表表情包/2010/达人.jpg" },
            { id: 10, title: "穿越", description: "源于穿越题材小说、影视剧，2010年相关题材作品增多推动其流行\", source: \"原指\"时空穿越\"，即从一个时空穿越到另一个时空，后引申为思想天马行空、与当下语境脱节\", image: \"./assets/代表表情包/2010/穿越.png" }
        ]
    },
    // 2011年 - 10个梗
    2011: {
        description: "2011年，更多生动有趣的表情包开始出现",
        memes: [
            { id: 1, title: "亲", description: "是\"亲爱的\"的简化亲昵称呼，后突破电商场景，广泛用于熟人及陌生人间的友好互动\", source: \"最早为淘宝等电商平台客服专用称呼，用于拉近与消费者的距离\", image: \"./assets/代表表情包/2011/亲.png" },
            { id: 2, title: "伤不起", description: "表示\"承受不起、无法忍受\"，多用于自嘲或吐槽某类群体的困境，语气带无奈与调侃\", source: \"源自豆瓣小组\"学法语的人你伤不起\"系列吐槽帖，后扩散至全网\", image: \"./assets/代表表情包/2011/伤不起.jpg" },
            { id: 3, title: "hold住", description: "表示\"控制住局面、保持镇定、稳住状态\"，可用于多种场景，强调应对突发情况的掌控力\", source: \"源自台湾综艺节目《大学生了没》，嘉宾谢依霖（HOLD住姐）在节目中表演时提出\", image: \"./assets/代表表情包/2011/hold住.jpg" },
            { id: 4, title: "我反正信了", description: "原是官方回应表述，后被网友调侃使用，带有\"表面认同、实则质疑\"的讽刺意味\", source: \"源自2011年铁道部关于\"7·23甬温线特别重大铁路交通事故\"的新闻发布会\", image: \"./assets/代表表情包/2011/我反正信了.png" },
            { id: 5, title: "坑爹", description: "表示\"被欺骗、被坑害、让人失望\"，可用于吐槽他人行为、产品质量等，语气带抱怨\", source: \"源于北方方言，最早流行于游戏圈，后扩散至全网\", image: \"./assets/代表表情包/2011/坑爹.png" },
            { id: 6, title: "卖萌", description: "指故意展现可爱、天真的姿态或行为，以获得他人喜爱或达成某种目的\", source: \"源自日本ACGN文化，经动漫爱好者社群传入中国网络\", image: \"./assets/代表表情包/2011/卖萌.png" },
            { id: 7, title: "吐槽", description: "指对他人的言行、作品等进行犀利的调侃、批评或揭露其漏洞，语气多轻松幽默\", source: \"源自日本漫才（相声）文化，\"吐槽\"是漫才中的角色分工，后被引入中国网络\", image: \"./assets/代表表情包/2011/吐槽.png" },
            { id: 8, title: "气场", description: "指一个人由内而外散发的气质、影响力，可分为\"强气场\"\"温柔气场\"等，用于评价人的整体状态\", source: \"源自日本时尚杂志，后被娱乐新闻、网络讨论广泛使用\", image: \"./assets/代表表情包/2011/气场.png" },
            { id: 9, title: "悲催", description: "表示\"运气极差、遭遇不幸\"，语气比\"悲惨\"更轻松，多用于自嘲或吐槽小事\", source: \"网络谐音衍生词，\"悲催\"即\"悲惨\"，最早流行于贴吧、论坛\", image: \"./assets/代表表情包/2011/悲催.png" },
            { id: 10, title: "忐忑", description: "形容心神不宁、内心紧张焦虑的状态，因歌曲传递的情绪极具感染力而成为流行语\", source: \"源自龚琳娜演唱的歌曲《忐忑》，歌曲独特的旋律和无歌词唱腔引发全网热议\", image: \"./assets/代表表情包/2011/忐忑.png" }
        ]
    },
    // 2012年 - 10个梗
    2012: {
        description: "2012年，表情包开始多样化发展",
        memes: [
            { id: 1, title: "正能量", description: "指积极向上、充满活力的精神力量，可用于鼓励他人、形容正面事件或情绪\", source: \"源自英国心理学家理查德·怀斯曼的著作《正能量》，后被媒体报道广泛引用\", image: \"./assets/代表表情包/2012/正能量.png" },
            { id: 2, title: "元芳，你怎么看", description: "用于表达质疑、嘲讽或公开征询他人看法，形成\"元芳体\"造句热潮，句式为\"事件+元芳，你怎么看？\"\", source: \"源自古装电视剧《神探狄仁杰》，网友对剧中狄仁杰询问助手李元芳案情的对话进行恶搞衍生\", image: \"./assets/代表表情包/2012/元芳，你怎么看.png" },
            { id: 3, title: "你幸福吗", description: "原本是探寻民众幸福感的提问，后被网友调侃使用，可用于日常调侃或真诚询问他人状态\", source: \"源自央视新闻频道\"走基层·百姓心声\"系列采访节目，记者街头随机询问路人\"你幸福吗？\"\", image: \"./assets/代表表情包/2012/你幸福吗.jpg" },
            { id: 4, title: "躺着也中枪", description: "表示\"无辜被牵连、无故遭受攻击或指责\"，形容自身与事件无关却被波及的无奈处境\", source: \"源自周星驰电影《逃学威龙》的台词，后经网络论坛传播流行\", image: \"./assets/代表表情包/2012/躺着也中枪.png" },
            { id: 5, title: "高富帅&白富美", description: "\"高富帅\"指身材高大、富有、帅气的男性；\"白富美\"指皮肤白皙、富有、貌美的女性，均用于形容理想型外在与经济条件\", source: \"源自网络论坛对理想型伴侣的讨论，\"高富帅\"最早流行于贴吧，\"白富美\"为后续对应衍生\", image: \"./assets/代表表情包/2012/高富帅.png" },
            { id: 6, title: "给跪了", description: "表示\"极度佩服、甘拜下风\"，也可用于吐槽\"无语到极致\"，语气轻松调侃\", source: \"源自网络聊天表情和游戏圈，是对现实中\"下跪\"动作的网络抽象表达\", image: \"./assets/代表表情包/2012/给跪了.JPEG" },
            { id: 7, title: "鸭梨山大", description: "表示\"压力非常大\"，用幽默的谐音缓解压力带来的负面情绪，是对高压状态的自嘲\", source: \"谐音梗，\"鸭梨\"即\"压力\"，最早流行于校园和职场相关网络社群\", image: \"./assets/代表表情包/2012/鸭梨山大.jpeg" },
            { id: 8, title: "赞", description: "表示\"赞同、欣赏、表扬\"，可作为动词或形容词使用，如\"为你点赞\"\"这个想法太赞了\"\", source: \"源自社交平台的\"点赞\"功能，最早见于微博、人人网等平台\", image: \"./assets/代表表情包/2012/赞.jpeg" },
            { id: 9, title: "最美", description: "用于形容在平凡岗位上做出不平凡贡献、具有高尚品德的人，如\"最美医生\"\"最美志愿者\"\", source: \"源自媒体对\"最美妈妈吴菊萍\"\"最美教师张丽莉\"等正能量人物的报道\", image: \"./assets/代表表情包/2012/最美.jpeg" },
            { id: 10, title: "接地气", description: "指贴近现实、贴近群众生活，不浮夸、不脱离实际，可用于形容人、作品、政策等\", source: \"源自民间口语，后被媒体和网络讨论广泛使用\", image: \"./assets/代表表情包/2012/接地气.png" }
        ]
    },
    // 2013年 - 10个梗
    2013: {
        description: "2013年，网络热梗爆发式增长",
        memes: [
            { id: 1, title: "小伙伴们都惊呆了", description: "表示\"因某件事感到极度惊讶\"，语气夸张幽默，用于表达对突发或离奇事件的反应\", source: \"源自一篇小学生作文，文中\"我的小伙伴们都惊呆了\"的表述被网友截图转发后流行\", image: \"./assets/代表表情包/2013/小伙伴们都惊呆了.png" },
            { id: 2, title: "奇葩", description: "指行为、思想、外形等与众不同的人或事物，初期略带贬义，后逐渐中性化，可用于调侃或描述独特事物\", source: \"源自汉语古语，原指奇特珍贵的花，后在网络中被赋予新含义并流行\", image: \"./assets/代表表情包/2013/奇葩.jpg" },
            { id: 3, title: "待我长发及腰", description: "原句为\"待我长发及腰，少年娶我可好？\"，用于表达对爱情的期待与憧憬，后衍生出多种调侃版本\", source: \"源自网络诗歌，后经微博传播引发造句热潮\", image: \"./assets/代表表情包/2013/待我长发及腰.png" },
            { id: 4, title: "逆袭", description: "指在逆境中反击成功，实现从劣势到优势的转变，可用于形容个人、团队或事件的反转发展\", source: \"源自日本动漫和游戏术语，指游戏中处于劣势的一方反败为胜，后传入网络日常用语\", image: \"./assets/代表表情包/2013/逆袭.png" },
            { id: 5, title: "喜大普奔", description: "表示某件事令人极度开心，需要分享给他人共同庆祝，多用于形容全民欢呼的积极事件\", source: \"源自百度贴吧化学吧，是\"喜闻乐见、大快人心、普天同庆、奔走相告\"的缩略形式\", image: \"./assets/代表表情包/2013/喜大普奔.png" },
            { id: 6, title: "高端大气上档次", description: "形容事物品质高端、气质大气、格调高雅，可用于评价商品、场所、行为等，后缩略为\"高大上\"\", source: \"源自影视台词和网络吐槽，后被广泛用于评价事物\", image: \"./assets/代表表情包/2013/高端大气上档次.png" },
            { id: 7, title: "女汉子", description: "指性格豪爽、独立坚强、不拘小节，兼具男性特质的女性，是对传统女性形象的突破\", source: \"源自网络论坛对女性性格的讨论，最早流行于女性社群\", image: \"./assets/代表表情包/2013/女汉子.jpg" },
            { id: 8, title: "土豪", description: "初期指富有但缺乏品味的人，带有贬义；后逐渐中性化，多用于调侃花钱大方的人，如\"土豪我们做朋友吧\"\", source: \"源自网络游戏，指在游戏中舍得大量花钱的玩家，后延伸至现实生活\", image: \"./assets/代表表情包/2013/土豪.jpg" },
            { id: 9, title: "摊上大事了", description: "表示\"遇到了严重的麻烦或问题\"，语气夸张，可用于调侃小事或描述真实的严重状况\", source: \"源自央视新闻评论节目中主持人的表述，后被网友截图传播\", image: \"./assets/代表表情包/2013/摊上大事了.jpg" },
            { id: 10, title: "涨姿势", description: "表示\"获得了新的知识、学到了新的技能\"，用于表达从他人分享或事件中收获认知的状态\", source: \"谐音梗，\"涨姿势\"即\"长知识\"，最早流行于贴吧、论坛\", image: \"./assets/代表表情包/2013/涨姿势.jpg" }
        ]
    },
    // 2014年 - 10个梗
    2014: {
        description: "2014年，表情包成为网络交流的重要方式",
        memes: [
            { id: 1, title: "我也是醉了", description: "表示\"无语、无奈、难以置信\"，语气带调侃，用于吐槽令人费解或生气的人或事\", source: \"源自网络游戏圈，玩家对队友的失误操作进行吐槽时使用，后扩散至全网\", image: \"./assets/代表表情包/2014/我也是醉了.jpg" },
            { id: 2, title: "有钱就是任性", description: "形容人因富有而随心所欲、不计后果的行为，后被用于调侃花钱大方或行为不羁的状态\", source: \"源自新闻报道，一位老人被诈骗后仍坚持给骗子汇款，称\"有钱就是任性\"\", image: \"./assets/代表表情包/2014/有钱就是任性.png" },
            { id: 3, title: "萌萌哒", description: "表示\"非常可爱、惹人喜爱\"，可用于形容小孩、宠物、事物或人的可爱姿态\", source: \"源自\"萌萌的\"口语化衍生，最早流行于ACGN社群和母婴论坛\", image: \"./assets/代表表情包/2014/萌萌哒.png" },
            { id: 4, title: "画面太美我不敢看", description: "多为反讽用法，形容画面丑陋、尴尬或令人不适，也可用于夸张形容美好的画面\", source: \"源自周杰伦歌曲《布拉格广场》的歌词，后被网友用于吐槽或调侃\", image: \"./assets/代表表情包/2014/画面太美我不敢看.png" },
            { id: 5, title: "你懂的", description: "用于暗示双方都明白但不便明说的事情，传递\"心照不宣\"的意味，避免直接表述敏感或私密内容\", source: \"源自网络聊天的暗示性表述，最早流行于论坛、即时通讯工具\", image: \"./assets/代表表情包/2014/你懂的.jpeg" },
            { id: 6, title: "也是蛮拼的", description: "表示\"非常努力、付出了很多精力\"，可用于表扬他人的努力，也可用于自嘲\", source: \"在《爸爸去哪儿2》中被曹格多次提及，后被习近平总书记在新年贺词中引用而广泛传播\", image: \"./assets/代表表情包/2014/也是蛮拼的.png" },
            { id: 7, title: "时间都去哪了", description: "用于感慨时光流逝、追问时间的去向，引发人们对亲情、生活的反思\", source: \"源自王铮亮演唱的歌曲《时间都去哪了》，该歌曲因在春晚演唱而爆红\", image: \"./assets/代表表情包/2014/时间都去哪了.jpg" },
            { id: 8, title: "神器", description: "指功能强大、效果显著的工具或物品，如\"美容神器\"\"清洁神器\"，强调其实用性和优越性\", source: \"源自网络购物平台对商品的宣传用语，后被广泛用于日常讨论\", image: \"./assets/代表表情包/2014/神器.png" },
            { id: 9, title: "前方高能", description: "多用于弹幕、视频或帖子中，提醒接下来会出现高潮、恐怖、反转等冲击性内容，让观看者做好心理准备\", source: \"源自《机动战士高达》等科幻动漫，原型是舰队侦测到敌方高能攻击时的预警台词。后经简化流行于网络，成为预警用语\", image: \"./assets/代表表情包/2014/前方高能.png" },
            { id: 10, title: "且行且珍惜", description: "表示\"在前行的过程中要懂得珍惜当下、珍惜彼此\"，后被用于多种情感和生活场景的劝诫，如\"爱情虽难，婚姻也难，且行且珍惜\"\", source: \"源自演员马伊琍在微博对丈夫文章出轨事件的回应，原句为\"恋爱虽易，婚姻不易，且行且珍惜\"\", image: \"./assets/代表表情包/2014/且行且珍惜.png" }
        ]
    },
    // 2015年 - 10个梗
    2015: {
        description: "2015年，表情包进入全民创作时代",
        memes: [
            { id: 1, title: "世界那么大我想去看看", description: "表达了对自由生活的向往、对未知世界的探索欲望，传递出追求自我、挣脱束缚的态度\", source: \"源自一位中学教师的辞职信，信中\"世界那么大，我想去看看\"的表述引发全网共鸣\", image: \"./assets/代表表情包/2015/世界那么大我想去看看.png" },
            { id: 2, title: "我想静静", description: "表示\"想独自安静一会儿，不希望被打扰\"，\"静静\"并非特指某人，而是\"安静\"的代称\", source: \"源自网络聊天对话，后因\"静静是谁\"的调侃梗进一步流行\", image: \"./assets/代表表情包/2015/我想静静.png" },
            { id: 3, title: "吓死宝宝了", description: "表示\"受到了极大的惊吓\"，用卖萌的语气缓解惊吓带来的负面情绪，语气轻松调侃\", source: \"源自网络直播平台，主播在受到惊吓时使用的口语化表达，\"宝宝\"是卖萌式自称\", image: \"./assets/代表表情包/2015/吓死宝宝了.png" },
            { id: 4, title: "脑洞大开", description: "表示\"想象力极其丰富，想法奇特、有创意\"，可用于形容人的思维或作品的创意构思\", source: \"源自ACGN文化，\"脑洞\"指想象力，最早流行于动漫爱好者社群\", image: \"./assets/代表表情包/2015/脑洞大开.png" },
            { id: 5, title: "城里人真会玩", description: "初期带有\"农村人对城市人行为的调侃\"意味，后中性化，用于吐槽或调侃他人的新奇、另类行为\", source: \"源自娱乐圈新闻，网友对明星的新奇行为进行吐槽时使用\", image: \"./assets/代表表情包/2015/城里人真会玩.png" },
            { id: 6, title: "剁手党", description: "指难以控制购物欲望、频繁网购并花费大量金钱的人，\"剁手\"是对\"控制不住购物\"的夸张表述\", source: \"源自电商平台\"双十一\"购物节，网友对自己过度购物行为的自嘲\", image: \"./assets/代表表情包/2015/剁手党.png" },
            { id: 7, title: "内心几乎是崩溃的", description: "表示\"内心极度痛苦、无助、崩溃\"，但语气略带调侃，用于形容遭遇挫折或困境时的心理状态\", source: \"源自快看漫画CEO陈安妮在接受采访时的表述，后被网友截图传播\", image: \"./assets/代表表情包/2015/内心几乎是崩溃的.png" },
            { id: 8, title: "明明可以靠脸吃饭却要靠才华", description: "形容人颜值高却仍凭借自身才华获得成功，既肯定了颜值，更强调了才华的重要性\", source: \"源自网友对演员黄渤的评价，后扩散至全网\", image: \"./assets/代表表情包/2015/明明可以靠脸吃饭却要靠才华.png" },
            { id: 9, title: "Duang", description: "模拟的一种特殊音效或动作效果，类似于一种富有节奏感和趣味性的象声词。用来形容某种突然、夸张的动作或视觉效果，也可以表达惊讶或强调某个关键点\", source: \"起源于成龙拍摄的一则洗发水广告。在这则广告中，成龙用了夸张的语气突出产品的\"柔顺\"效果\", image: \"./assets/代表表情包/2015/Duang.png" },
            { id: 10, title: "重要的事说三遍", description: "指将重要的事情重复三次以强调其重要性，语气幽默，可用于提醒他人注意关键信息\", source: \"源自日本动漫《潜行吧！奈亚子》的台词，后经网络传播流行\", image: \"./assets/代表表情包/2015/重要的事说三遍.png" }
        ]
    },
    // 2016年 - 10个梗
    2016: {
        description: "2016年，各类表情包模板流行",
        memes: [
            { id: 1, title: "洪荒之力", description: "表示\"用尽全身的力量、发挥出极致的潜能\"，语气夸张幽默，用于形容努力拼搏的状态\", source: \"源自电视剧《花千骨》，剧中\"洪荒之力\"是最强大的力量；后因游泳运动员傅园慧在采访中使用而爆红\", image: \"./assets/代表表情包/2016/洪荒之力.png" },
            { id: 2, title: "友谊的小船说翻就翻", description: "形容友谊脆弱、容易破裂，可用于调侃朋友间的小矛盾，也可用于描述真实的友谊破裂事件\", source: \"源自漫画《友谊的小船》，漫画中\"友谊的小船说翻就翻\"的场景被网友转发传播\", image: \"./assets/代表表情包/2016/友谊的小船说翻就翻.png" },
            { id: 3, title: "吃瓜群众", description: "指在网络上旁观他人八卦事件、不参与讨论的人，强调\"事不关己、只看热闹\"的状态\", source: \"源自网络论坛，\"瓜\"指八卦事件，\"吃瓜\"即围观八卦\", image: \"./assets/代表表情包/2016/吃瓜群众.png" },
            { id: 4, title: "蓝瘦香菇", description: "源自广西南宁方言的谐音，\"蓝瘦\"即\"难受\"，\"香菇\"即\"想哭\"，一位网友的方言吐槽视频引发传播\", source: \"表示\"难过、想哭\"，因发音可爱、语气真诚而流行，用于表达悲伤、委屈的情绪\", image: \"./assets/代表表情包/2016/蓝瘦香菇.jpeg" },
            { id: 5, title: "老司机带带我", description: "\"老司机\"指经验丰富、熟悉规则的人；\"带带我\"指请求指导、带领，多用于请求他人分享经验或资源\", source: \"源自云南山歌《老司机带带我》，歌曲旋律欢快、歌词直白，后经网络传播流行\", image: \"./assets/代表表情包/2016/老司机带带我.png" },
            { id: 6, title: "全是套路", description: "表示\"某件事或某个人的行为充满了算计、骗局\"，用于吐槽被欺骗或被算计的经历\", source: \"源自网络聊天和游戏圈，\"套路\"原指成套的技巧，后延伸为\"精心设计的骗局或策略\"\", image: \"./assets/代表表情包/2016/全是套路.png" },
            { id: 7, title: "定个小目标", description: "用于调侃目标过于宏大、不切实际，也可用于真诚地设定阶段性小目标\", source: \"源自万达集团董事长王健林在采访中的表述，\"先定一个能达到的小目标，比如我先挣它一个亿\"\", image: \"./assets/代表表情包/2016/定个小目标.png" },
            { id: 8, title: "葛优躺", description: "形容一种慵懒、放松、无精打采的坐姿，传递出\"不想努力、只想躺平\"的消极状态，是对高压生活的调侃\", source: \"源自电视剧《我爱我家》中葛优饰演的角色\"纪春生\"的躺坐剧照，后被网友截图传播\", image: \"./assets/代表表情包/2016/葛优躺.png" },
            { id: 9, title: "厉害了我的哥", description: "表示\"极度佩服、惊叹\"，语气热情夸张，用于赞美他人的厉害行为或成就\", source: \"源自网络视频，一位中学生对同学的酷炫操作发出的赞叹，后扩散至全网\", image: \"./assets/代表表情包/2016/厉害了我的哥.png" },
            { id: 10, title: "辣眼睛", description: "表示\"看到的事物令人不适、难以忍受\"，用于吐槽丑陋、尴尬或低俗的人或事物\", source: \"源自网络吐槽，最早用于评价颜值低或穿着怪异的人，后延伸至多种场景\", image: \"./assets/代表表情包/2016/辣眼睛.png" }
        ]
    },
    // 2017年 - 10个梗
    2017: {
        description: "2017年，表情包文化更加成熟",
        memes: [
            { id: 1, title: "打call", description: "原指为偶像加油助威，后延伸为\"为某人、某事点赞支持\"，如\"为正能量打call\"\", source: \"源自日本演唱会应援文化，\"call\"指应援口号，后传入中国网络\", image: \"./assets/代表表情包/2017/打call.png" },
            { id: 2, title: "尬聊", description: "指聊天过程中气氛尴尬、话题难以继续，双方都感到不适的聊天状态\", source: \"源自网络聊天场景，是\"尴尬聊天\"的缩略形式\", image: \"./assets/代表表情包/2017/尬聊.png" },
            { id: 3, title: "怼", description: "表示\"直接、尖锐地反驳他人\"，可用于善意的调侃，也可用于激烈的争执\", source: \"源自北方方言，原指\"用手推撞\"，后在网络中引申为\"反驳、对抗\"并流行\", image: \"./assets/代表表情包/2017/怼.jpg" },
            { id: 4, title: "油腻", description: "形容人或事物显得圆滑、世故、缺乏清爽感，可用于评价外貌、气质或行为\", source: \"源自作家冯唐的文章《如何避免成为一个油腻的中年猥琐男》，文中对\"油腻\"特质的描述引发讨论\", image: \"./assets/代表表情包/2017/油腻.png" },
            { id: 5, title: "你的良心不会痛吗", description: "用于调侃或指责他人做出自私、不负责任的行为，语气幽默带讽刺\", source: \"源自网友对杜甫草堂涂鸦事件的吐槽，后被制作成表情包传播\", image: \"./assets/代表表情包/2017/你的良心不会痛吗.png" },
            { id: 6, title: "惊不惊喜，意不意外", description: "用于向他人展示意外的结果，语气夸张，可用于善意的惊喜或调侃式的\"惊吓\"\", source: \"源自电视剧《家有儿女》的台词，后经网络传播成为流行语\", image: \"./assets/代表表情包/2017/惊不惊喜，意不意外.jpg" },
            { id: 7, title: "皮皮虾我们走", description: "表示\"邀请他人一起出发、去做某件事\"，语气轻松俏皮，多用于网络互动和调侃\", source: \"源自游戏《英雄联盟》的相关梗，后结合皮皮虾的表情包传播流行\", image: \"./assets/代表表情包/2017/皮皮虾我们走.jpg" },
            { id: 8, title: "扎心了老铁", description: "表示\"某件事深深触动内心，引发感动或悲伤的情绪\"，\"扎心\"指内心受到冲击，语气带共鸣，常用于网络互动和调侃\", source: \"源自斗鱼直播平台\"抽象TV\"直播间，\"老铁\"是北方方言\"铁哥们\"的意思\", image: \"./assets/代表表情包/2017/扎心了老铁.jpg" },
            { id: 9, title: "还有这种操作", description: "表示\"对某件事的做法感到惊讶、不可思议\"，可用于赞美或吐槽他人的行为，语气幽默带讽刺\", source: \"源自游戏圈，玩家对他人的新奇游戏操作发出的惊叹，后延伸至全网\", image: \"./assets/代表表情包/2017/还有这种操作.png" },
            { id: 10, title: "可能是假的", description: "表示\"对某件事的真实性表示质疑\"，语气幽默，用于调侃不理想的结果或离奇的事件，\", source: \"源自网络调侃梗，最早流行于学生群体对考试成绩的吐槽\", image: \"./assets/代表表情包/2017/可能是假的.png" }
        ]
    },
    // 2018年 - 10个梗
    2018: {
        description: "2018年，短视频带动表情包发展",
        memes: [
            { id: 1, title: "锦鲤", description: "指能够带来好运的人或事物，用于祈福、求好运，是对幸运的象征\", source: \"源自支付宝\"寻找中国锦鲤\"抽奖活动，中奖者被称为\"中国锦鲤\"，后引发全网\"转锦鲤\"热潮\", image: \"./assets/代表表情包/2018/锦鲤.jpg" },
            { id: 2, title: "官宣", description: "指\"官方宣布、正式公布\"，可用于个人情感官宣、企业信息官宣等多种正式发布场景\", source: \"源自演员赵丽颖和冯绍峰的微博，二人发布\"官宣\"二字宣布结婚，引发全网模仿\", image: \"./assets/代表表情包/2018/官宣.jpg" },
            { id: 3, title: "确认过眼神", description: "表示\"通过眼神交流确认了某种信息\"，可用于调侃、认亲、确认身份等多种场景\", source: \"源自林俊杰歌曲《醉赤壁》的歌词\"确认过眼神，我遇上对的人\"，后被网友改编使用\", image: \"./assets/代表表情包/2018/确认过眼神.jpg" },
            { id: 4, title: "佛系", description: "形容一种不争不抢、不悲不喜、随遇而安的生活态度，如\"佛系青年\"\"佛系购物\"等\", source: \"源自日本佛教术语，后在网络中被赋予\"看淡一切、顺其自然\"的含义并流行\", image: \"./assets/代表表情包/2018/佛系.jpg" },
            { id: 5, title: "杠精", description: "指喜欢故意反驳他人、挑刺找茬，无论他人观点正确与否都要争辩的人，语气幽默带讽刺\", source: \"源自网络讨论场景，\"杠\"指\"抬杠\"，即故意反驳他人\", image: \"./assets/代表表情包/2018/杠精.jpg" },
            { id: 6, title: "土味情话", description: "指语言直白、略带尴尬但又不失可爱的情话，多用于情侣间的调侃或互动，如\"你知道我最喜欢吃什么水果吗？是你这个开心果\"\", source: \"源自网络短视频平台，是带有乡村、接地气风格的情话\", image: \"./assets/代表表情包/2018/土味情话.jpg" },
            { id: 7, title: "皮一下", description: "表示\"故意调皮一下、恶作剧一下\"，语气轻松，用于形容轻微的调皮行为\"\", source: \"源自网络聊天，\"皮\"指\"调皮、捣蛋\"\", image: \"./assets/代表表情包/2018/皮一下.jpg" },
            { id: 8, title: "你退群吧", description: "原指\"要求他人退出聊天群\"，后延伸为\"对他人的行为表示不满，希望其离开\"，语气强硬\", source: \"源自职场沟通场景，后因某企业高管的言论被曝光而流行\", image: \"./assets/代表表情包/2018/你退群吧.jpg" },
            { id: 9, title: "C位", description: "指核心位置、重要角色，可用于形容人在团队、活动中的核心地位，如\"C位出道\"\"C位担当\"等\", source: \"源自娱乐圈，\"C\"即\"Center\"（中心），指舞台或合影中的中心位置\", image: \"./assets/代表表情包/2018/C位.jpg" },
            { id: 10, title: "燃烧我的卡路里", description: "表示\"努力运动、消耗热量\"，成为减肥、健身场景的常用语，传递出积极运动的态度\", source: \"源自火箭少女101演唱的歌曲《卡路里》，歌曲作为电影《西虹市首富》的插曲爆红\", image: \"./assets/代表表情包/2018/燃烧我的卡路里.jpg" }
        ]
    },
    // 2019年 - 10个梗
    2019: {
        description: "2019年，表情包更加多元化",
        memes: [
            { id: 1, title: "硬核", description: "形容人或事物\"很厉害、很刚硬、很专业\"，可用于赞美他人的能力、作品的质量等\", source: \"源自英语\"hardcore\"，原指\"硬核摇滚\"，后传入网络并赋予新含义\", image: \"./assets/代表表情包/2019/硬核.png" },
            { id: 2, title: "上头", description: "表示\"对某件事或某个人过度沉迷、难以自拔\"，如\"追剧追上头了\"\"为偶像上头\"等\", source: \"源自网络聊天和娱乐场景，原指\"喝酒喝多了头晕\"，后引申为\"因某事物而沉迷、激动\"\", image: \"./assets/代表表情包/2019/上头.png" },
            { id: 3, title: "996", description: "用于描述高强度、超负荷的工作状态，引发了关于职场权益、工作与生活平衡的广泛讨论\", source: \"源自互联网行业，指\"早上9点上班、晚上9点下班，每周工作6天\"的工作制度\", image: \"./assets/代表表情包/2019/996.png" },
            { id: 4, title: "xx千万条，xx第一条", description: "一种套用句式，前半句列举相关条目，后半句强调核心原则，可用于多种警示或提醒场景\", source: \"源自电影《流浪地球》的台词\"道路千万条，安全第一条；行车不规范，亲人两行泪\"\", image: \"./assets/代表表情包/2019/xx千万条，xx第一条.png" },
            { id: 5, title: "柠檬精", description: "指容易嫉妒他人、看到别人好就感到酸溜溜的人，多用于自嘲或调侃他人的嫉妒情绪\", source: \"源自网络聊天，\"柠檬\"象征\"嫉妒\"，因嫉妒时会有\"酸\"的感觉\", image: \"./assets/代表表情包/2019/柠檬精.png" },
            { id: 6, title: "雨女无瓜", description: "表示\"与你无关\"，语气带点高冷和俏皮，用于回怼他人的过度询问或不相关问题\", source: \"源自电视剧《巴啦啦小魔仙》，剧中游乐王子的方言口音将\"与你无关\"说成\"雨女无瓜\"\", image: \"./assets/代表表情包/2019/雨女无瓜.png" },
            { id: 7, title: "好嗨哟", description: "表示\"极度开心、兴奋\"，语气夸张幽默，用于形容愉悦到极致的状态\", source: \"源自网络短视频平台，博主毛毛姐拍摄的搞笑视频中反复出现\"好嗨哟，感觉人生已经到达了巅峰\"\", image: \"./assets/代表表情包/2019/好嗨哟.png" },
            { id: 8, title: "是个狠人", description: "形容某人行为果断、能力出众或做事风格强硬，带有佩服的意味\", source: \"源自网络聊天，\"狠人\"指\"做事果断、厉害、让人佩服的人\"\", image: \"./assets/代表表情包/2019/是个狠人.png" },
            { id: 9, title: "我不要你觉得，我要我觉得", description: "表示\"坚持自己的观点，不听取他人意见\"，带有独断、霸道的意味，后被用于调侃这种态度的人\", source: \"源自综艺节目《中餐厅》，黄晓明在节目中\"我不要你觉得，我要我觉得\"的表述，体现了独断的态度\", image: \"./assets/代表表情包/2019/我不要你觉得，我要我觉得.jpg" },
            { id: 10, title: "我太难了", description: "表示\"生活或工作压力大，感到非常艰难\"，是对高压状态的自嘲，引发广泛共鸣\", source: \"源自快手主播\"Giao哥\"的视频，视频中他反复说\"我太难了，老铁，最近压力很大\"\", image: \"./assets/代表表情包/2019/我太难了.png" }
        ]
    },
    // 2020年 - 10个梗
    2020: {
        description: "2020年，疫情相关表情包大量出现",
        memes: [
            { id: 1, title: "凡尔赛文学", description: "指通过看似抱怨、平淡的表述，实则炫耀自己的财富、地位、幸福等，如\"我老公送我的包太丑了，还是限量款\"\", source: \"源自微博博主\"小奶球\"的解读，她将\"用低调的方式炫耀\"的行为称为\"凡尔赛文学\"\", image: \"./assets/代表表情包/2020/凡尔赛文学.png" },
            { id: 2, title: "逆行者", description: "指在危险面前勇敢逆行、坚守岗位的人，是对无私奉献精神的赞美\", source: \"源自2020年新冠疫情期间，媒体对医护人员、消防员等冲向危险一线人员的称呼\", image: \"./assets/代表表情包/2020/逆行者.png" },
            { id: 3, title: "甩锅", description: "指将自己的责任推卸给他人，用于吐槽或指责不负责任的行为\", source: \"源自网络聊天和职场场景，\"甩锅\"即\"推卸责任\"\", image: \"./assets/代表表情包/2020/甩锅.png" },
            { id: 4, title: "奥力给", description: "表示\"加油、给力\"，用于鼓励他人或给自己打气，传递积极向上的能量\", source: \"源自快手主播\"双叶湖雷哥\"的视频，他在视频中常用\"奥力给\"作为加油口号，\"奥力给\"即\"给力哦\"的倒序\", image: \"./assets/代表表情包/2020/奥力给.png" },
            { id: 5, title: "好家伙", description: "表示\"惊讶、赞叹或吐槽\"，语气灵活，可用于形容令人意外的人或事\", source: \"源自北方方言，后经网络传播成为流行语\", image: \"./assets/代表表情包/2020/好家伙.png" },
            { id: 6, title: "内卷", description: "指在有限资源下，个体或群体通过过度努力导致整体竞争成本上升、收益下降的内耗状态，是一种社会或组织内部的过度竞争\", source: \"源自人类学概念，原指\"一种社会或组织内部的过度竞争\"，后被引入网络形容职场、教育等场景\", image: \"./assets/代表表情包/2020/内卷.png" },
            { id: 7, title: "带货", description: "指\"推荐并销售商品\"，可用于形容主播、明星等通过自身影响力促进商品销售的行为，如\"直播带货\"\"明星带货\"等\", source: \"源自电商直播行业，指通过直播、短视频等方式销售商品\", image: \"./assets/代表表情包/2020/带货.png" },
            { id: 8, title: "有内味了", description: "表示\"有了某种预期的风格、氛围或感觉\"，可用于形容作品、行为等符合特定调性的情况\", source: \"源自游戏圈，原指\"有某种特定的味道或感觉了\"，后延伸至全网\", image: \"./assets/代表表情包/2020/有内味了.png" },
            { id: 9, title: "打工人", description: "指所有从事体力或脑力劳动的人，带有自嘲和共情的意味，强调打工者的共同身份认同\", source: \"源自网络短视频，网友用\"打工人\"自嘲自己的打工身份，后引发全网共鸣\", image: \"./assets/代表表情包/2020/打工人.png" },
            { id: 10, title: "社会性死亡", description: "指在公众面前出丑，导致个人形象彻底崩塌，难以在社交圈立足的尴尬状态，如\"社死现场\"\", source: \"源自心理学概念，后在网络中被用于形容尴尬场景\", image: \"./assets/代表表情包/2020/社会性死亡.png" }
        ]
    },
    // 2021年 - 10个梗
    2021: {
        description: "2021年，网络热梗持续发酵",
        memes: [
            { id: 1, title: "破防", description: "指\"心理防线被突破\"，形容被某件事深深感动、震撼或刺痛，情绪无法自控\", source: \"源自游戏术语，原指\"游戏角色的防御被打破\"，后延伸至心理层面\", image: \"./assets/代表表情包/2021/破防.png" },
            { id: 2, title: "躺平", description: "指面对压力选择放弃过度竞争、回归平淡生活的态度，拒绝被内卷裹挟，追求内心的平静\", source: \"源自贴吧帖子《躺平即是正义》，作者提出\"躺平\"是对抗内卷的一种方式\", image: \"./assets/代表表情包/2021/躺平.jpg" },
            { id: 3, title: "YYDS", description: "表示\"极度赞美某人或某物，认为其达到了极致的水平\"，可用于形容偶像、作品、技能等\", source: \"源自游戏圈，是\"永远的神\"的拼音缩写，最早用于赞美游戏主播\", image: \"./assets/代表表情包/2021/YYDS.png" },
            { id: 4, title: "EMO", description: "表示\"情绪低落、抑郁、伤感\"，用于形容负面的心理状态，如\"我今天好EMO\"\", source: \"源自英语\"emotional\"（情绪的），后在网络中被简化为\"EMO\"，指情绪低落的状态\", image: \"./assets/代表表情包/2021/EMO.jpg" },
            { id: 5, title: "绝绝子", description: "表示\"极其出色、非常厉害\"，可用于赞美他人或事物，如\"这个蛋糕绝绝子\"\", source: \"源自网络聊天，\"绝绝子\"是\"绝了\"的叠词强化形式，带有卖萌语气\", image: \"./assets/代表表情包/2021/绝绝子.png" },
            { id: 6, title: "普信男/女", description: "指自身条件普通，却有着迷之自信的男性 / 女性，带有调侃、讽刺意味，也常被用于自嘲或反讽对自信的刻板评判\", source: \"\"普信男\" 最早因脱口秀演员杨笠在节目中吐槽 \"他那么普通，却那么自信\" 引发热议，后延伸出 \"普信女\"\", image: \"./assets/代表表情包/2021/普信男.png" },
            { id: 7, title: "听我说谢谢你", description: "原本表达感恩之情，后期演变为调侃式梗，常用来反讽过度煽情、无意义的感谢，或单纯玩梗洗脑\", source: \"源自儿童感恩歌曲《听我说谢谢你》，因旋律简单、歌词洗脑，被大量用作短视频配乐\", image: \"./assets/代表表情包/2021/听我说谢谢你.png" },
            { id: 8, title: "社恐/社牛", description: "社恐：指害怕社交、在社交场合感到紧张焦虑的人；社牛：指极度擅长社交、在任何场合都能从容自如甚至主动活跃气氛的人，两者常对比使用\", source: \"\"社恐\" 是 \"社交恐惧症\" 的简称（心理学概念普及后网络走红），\"社牛\" 是 \"社交牛逼症\" 的缩写（网络衍生造词）\", image: \"./assets/代表表情包/2021/社恐.jpg" },
            { id: 9, title: "我看不懂但我大受震撼", description: "用于形容对离谱、新奇、难以理解的事物的感慨，表达 \"虽然不明白，但被深深冲击到\" 的情绪，适配各种迷惑或惊艳场景\", source: \"导演李安在采访中评价某艺术作品时的原话，后被网友截取片段传播\", image: \"./assets/代表表情包/2021/我看不懂但我大受震撼.jpg" },
            { id: 10, title: "夺笋", description: "调侃他人 \"损\"\"坏\"\"缺德\"，语气轻松搞笑，比如 \"你这人也太夺笋了\"，无恶意攻击意味，仅用于调侃\", source: \"来自up主@迷人的郭老师在视频中说话自带家乡口音常把\"多损\"说成\"夺笋\"，因有趣诙谐成为网络热词\", image: \"./assets/代表表情包/2021/夺笋.png" }
        ]
    },
    // 2022年 - 10个梗
    2022: {
        description: "2022年，表情包文化继续发展",
        memes: [
            { id: 1, title: "xx刺客", description: "泛指外表普通、价格却远超预期，让人猝不及防 \"被宰\" 的物品，核心是 \"看似平价实则高价\" 的反差\", source: \"最早源于 \"雪糕刺客\"—— 网友吐槽便利店中看似普通、结账时价格却高到刺伤钱包的雪糕，后续衍生出 \"奶茶刺客\"\"水果刺客\" 等\", image: \"./assets/代表表情包/2022/刺客.jpg" },
            { id: 2, title: "PUA", description: "指通过打压、否定、情感绑架等方式，对他人进行精神操控，使其自我怀疑、被迫服从的行为，常见于亲密关系、职场等场景\", source: \"全称 \"Pick-Up Artist\"（搭讪艺术家），最初指学习搭讪技巧的群体，后延伸为精神控制手段\", image: \"./assets/代表表情包/2022/PUA.png" },
            { id: 3, title: "拿捏", description: "本义是 \"抓住、掌握\"，网络语境中表示 \"搞定某人 / 某事\"\"掌控局面\"，比如 \"轻松拿捏面试\"\"被他拿捏了\"（指被吸引或掌控）\", source: \"北方方言（尤其东北），经短视频博主使用后全网走红\", image: \"./assets/代表表情包/2022/拿捏.jpg" },
            { id: 4, title: "电子榨菜", description: "指吃饭时用来佐餐的视听内容，是当代人独处或用餐时的 \"精神配菜\"，强调其不可或缺的地位\", source: \"网友自嘲吃饭时的习惯 —— 必须搭配视频、综艺、电视剧等内容下饭，如同榨菜配白饭\", image: \"./assets/代表表情包/2022/电子榨菜.jpg" },
            { id: 5, title: "冤种", description: "自嘲或调侃他人 \"倒霉\"\"委屈\"\"被坑\"，比如 \"打工人冤种日常\"\"我真是个冤种\"，语气戏谑，无恶意攻击意味，仅用于调侃\", source: \"东北方言，原指蒙受冤屈、倒霉的人，经直播和短视频传播出圈\", image: \"./assets/代表表情包/2022/冤种.png" },
            { id: 6, title: "精神内耗", description: "指内心反复纠结、自我怀疑、过度思考，导致心理能量被无端消耗，常表现为 \"想太多、做太少\"，是当代人焦虑的体现\", source: \"心理学概念（自我斗争导致的心理能量消耗），经网友讨论职场、生活焦虑后成为热词\", image: \"./assets/代表表情包/2022/精神内耗.png" },
            { id: 7, title: "栓Q", description: "本义是 \"谢谢\"，后期延伸为表达无奈、无语的调侃，比如 \"栓 Q，又加班了\"，兼具感谢和吐槽双重含义\", source: \"广西博主 \"刘涛（Teacher Liu）\" 的中式英语发音（将 \"Thank you\" 读成 \"栓 Q\"），因魔性口音和视频风格走红\", image: \"./assets/代表表情包/2022/栓Q.png" },
            { id: 8, title: "你是我的神", description: "夸张地表达对某人 / 某物的崇拜、认可，语气戏谑又热烈\", source: \"2013 年《快乐男声》选秀节目中，演员海清为支持选手欧豪，跪地大喊 \"你是我的神\"，片段被网友考古传播\", image: \"./assets/代表表情包/2022/你是我的神.png" },
            { id: 9, title: "退退退", description: "用于表达 \"驱赶晦气、拒绝某事、远离麻烦\" 的情绪，语气轻松搞笑\", source: \"源自一段大妈街头吵架的视频：大妈边原地转圈边喊 \"退退退\"，魔性动作和台词迅速出圈\", image: \"./assets/代表表情包/2022/退退退.png" },
            { id: 10, title: "小镇做题家", description: "指出身小镇、依靠高强度刷题应试实现升学的青年，带有自嘲意味（感慨除了做题别无选择），也引发过关于教育资源差异的讨论\", source: \"最早出现于豆瓣小组，后因媒体讨论教育公平话题引发热议\", image: \"./assets/代表表情包/2022/小镇做题家.jpg" }
        ]
    },
    // 2023年 - 10个梗
    2023: {
        description: "2023年，网络热梗持续创新",
        memes: [
            { id: 1, title: "双向奔赴", description: "指双方互相付出、朝着同一目标努力，强调 \"双向的爱 / 回应\"，比如 \"粉丝和偶像的双向奔赴\"\"好的感情需要双向奔赴\"\", source: \"最初流行于情感语境（情侣、朋友之间），后延伸到追星、职场等场景\", image: \"./assets/代表表情包/2023/双向奔赴.jpg" },
            { id: 2, title: "i人e人", description: "对内向 / 外向人格的简称，成为社交中快速标签他人的方式，比如 \"我是 i 人，怕聚会\"\"e 人永远喜欢热闹\"\", source: \"源自 MBTI 人格测试：I 代表内向型（Introvert），E 代表外向型（Extrovert），网友简化为 \"i 人\"\"e 人\"\", image: \"./assets/代表表情包/2023/i人e人.png" },
            { id: 3, title: "特种兵式旅游", description: "指高强度、高效率的短途旅游，利用周末、小长假，以 \"时间短、行程密、性价比高\" 为特点，核心是 \"用最少的时间逛最多的地方\"，体现年轻人的旅游刚需和时间限制\", source: \"源于大学生群体对一天打卡多个景点旅游方式的戏称\", image: \"./assets/代表表情包/2023/特种兵式旅游.png" },
            { id: 4, title: "显眼包", description: "指自带笑点、走到哪里都能成为焦点的人，褒贬皆宜。原指爱出风头的人，后演变指有趣可爱、善于营造欢乐氛围的人\", source: \"源自北方方言（\"显眼\" 指引人注目，\"包\" 是方言后缀），经直播平台传播走红\", image: \"./assets/代表表情包/2023/显眼包.png" },
            { id: 5, title: "多巴胺", description: "指通过鲜艳色彩、有趣事物带来强烈愉悦感的风格 / 体验，比如 \"多巴胺穿搭\"（高饱和色彩搭配）、\"多巴胺零食\"（让人开心的零食）\", source: \"生物学概念（多巴胺是传递愉悦感的神经递质），后延伸为 \"多巴胺穿搭\"\"多巴胺生活\" 等概念\", image: \"./assets/代表表情包/2023/多巴胺.png" },
            { id: 6, title: "你人还怪好的", description: "真诚夸赞他人善良、热心，也常带调侃意味（比如对方做了蠢萌的好事），语气亲切接地气\", source: \"最早在大学生群体中流传，后经短视频扩散\", image: \"./assets/代表表情包/2023/你人还怪好的.jpg" },
            { id: 7, title: "x门", description: "表达对某事物的狂热喜爱和归属感，带有中二、戏谑的色彩\", source: \"22年末一群麦当劳忠实热爱粉丝模仿教派的命名方式形成麦门，以表示对麦当劳的信仰值拉满，麦门信徒通过改编名言名句，采用诗歌、短篇小说等文学形式宣传麦门。后衍生出xx门等\", image: \"./assets/代表表情包/2023/x门.jpg" },
            { id: 8, title: "情绪价值", description: "指一个人能给他人带来的积极情绪体验（如安慰、快乐、安全感），是社会互动中重要的价值指标\", source: \"原本是心理学、经济学概念（指他人提供的情绪支持），后在社交、恋爱、职场中普及\", image: \"./assets/代表表情包/2023/情绪价值.png" },
            { id: 9, title: "尊嘟假嘟", description: "撒娇或调侃式地询问真假，语气软萌幽默\", source: \"谐音 \"真的假的\"，因萌系发音走红\", image: \"./assets/代表表情包/2023/尊嘟假嘟.jpg" },
            { id: 10, title: "纯爱战神", description: "指相信并执着于纯爱的人，代表了一种不掺杂利益、不背叛感情的爱情观念\", source: \"源自动漫《咒术回战》中台词\"我们这可是纯爱\"指坚定追求纯粹爱情的角色，后延伸到现实\", image: \"./assets/代表表情包/2023/纯爱战神.png" }
        ]
    },
    // 2024年 - 10个梗
    2024: {
        description: "2024年，表情包文化不断发展",
        memes: [
            { id: 1, title: "city不city", description: "调侃式询问 \"时髦不时髦\"\"洋气不洋气\"，作为城市化、洋气、新颖，甚至是刺激的形容词\", source: \"源自外国博主\"保保熊\"来中国旅游和妹妹聊天时总会用魔性的语调问一句\"city不city啊\"\", image: \"./assets/代表表情包/2024/city不city.jpg" },
            { id: 2, title: "水灵灵的xx", description: "形容人清澈灵动、皮肤水润，或事物鲜活有生气。其使用语境逐渐扩大,可用于强调突出，如\"咱们一起水灵灵地出发吧\"；也可用于调侃自嘲，如\"他 (我) 就这么水灵灵地被开除了\"\", source: \"出自韩国组合LE SSERAFIM成员洪恩採展示照片时说的话:\"我就这么水灵灵地在中间，周围都是可怕的姐姐们。\"网友们纷纷效仿造句，将\"水灵灵地\"与各类词语搭配,形容某种行为生动、鲜活或值得称道、引人关注。\", image: \"./assets/代表表情包/2024/水灵灵.jpg" },
            { id: 3, title: "班味", description: "指上班工作后由于任务繁重、条件艰苦、关系复杂等，人们表现出眼神疲惫、面容憔悴、不修边幅等状态\", source: \"打工人自嘲用语，源于对 \"上班后状态变化\" 的感慨\", image: \"./assets/代表表情包/2024/班味.jpg" },
            { id: 4, title: "红温", description: "形容人情绪激动、生气到脸红，语气调侃\", source: \"电竞圈术语（指选手因愤怒、紧张导致脸红），延伸自 \"急了\"\", image: \"./assets/代表表情包/2024/红温.jpg" },
            { id: 5, title: "硬控", description: "指被某物强行吸引、无法挣脱，比如 \"这个综艺太好看了，硬控我两小时\"\", source: \"游戏术语（\"硬控制\"，指强制限制敌方行动的技能），后延伸到生活场景\", image: \"./assets/代表表情包/2024/硬控.jpg" },
            { id: 6, title: "偷感", description: "形容一种做事拘谨、小心翼翼的状态，核心是\"不愿被关注\"的心理，是对行为和心理的精准描述。害怕被评价、担心失败后被嘲笑，默默行动能带来安全感\", source: \"时尚圈、摄影圈的小众术语，后经社交媒体扩散\", image: \"./assets/代表表情包/2024/偷感.jpg" },
            { id: 7, title: "松弛感", description: "指为为人处世面对压力时体现的从容、善待自己、淡定、不刻意、不焦虑的状态\", source: \"源自一位博主的旁观经历：一家人出门旅游,所有行李都被退回,但他们没有吵闹也没有生气崩溃、相互指责,而是重排行程,气氛全程松弛。博主分享此事后，\"松弛感\"引发热议\", image: \"./assets/代表表情包/2024/松弛感.jpg" },
            { id: 8, title: "包的", description: "包即肯定的意思，意为 \"包在我身上\"\"肯定的\"\"没问题\"，表承诺或确认\", source: \"最早源于游戏博主coke，每当有人在评论区假装不认识coke就会有其他人揭穿，评论\"包变脸的\"。后来逐渐出圈衍生出\"包的\"\"包xx的\"等用法\", image: \"./assets/代表表情包/2024/包的.jpg" },
            { id: 9, title: "那咋了", description: "一种比较随性、有点小傲娇的回应方式。反问语气，意为 \"那又怎么样\"，表无所谓、不服气或反驳\", source: \"源自东北方言，后经短视频平台传播，成为拒绝精神内耗的代表语\", image: \"./assets/代表表情包/2024/那咋了.jpg" },
            { id: 10, title: "草台班子", description: "指组织混乱、管理不专业、漏洞百出的团队 / 机构\", source: \"原指戏曲行业中临时拼凑、水平不高的演出班子，后延伸到各行各业\", image: \"./assets/代表表情包/2024/草台班子.png" }
        ]
    }
};

// 应用类
class CyberMemoryArchipelago {
    constructor() {
        this.currentYear = 2010;
        this.currentScene = 'introEntry'; // 'introEntry', 'story', 'map' 或 'detail'
        this.isIntroTextVisible = true;
        this.cursorBoat = null;
        this.repairedMemories = new Set();
        
        // 场景元素
        this.sceneIntroEntry = null;
        this.sceneStory = null;
        this.sceneMap = null;
        this.sceneDetail = null;
        this.backToMapBtn = null;
        this.startJourneyBtn = null;
        this.fogContainer = null;
        
        // 音乐相关元素
        this.backgroundMusic = null;
        this.musicControl = null;
        this.musicIcon = null;
        this.isMusicPlaying = false;
        
        this.init();
    }
    
    init() {
        this.setupScenes();
        this.setupStaticMemeButtons(); // 为静态按钮添加事件监听
        this.renderMemes();
        this.setupEventListeners();
        this.setupCursorBoat();
        this.setupMapInteractions();
        this.setupSidebar(); // 添加侧边栏交互
        this.setupProgressDrawer(); // 添加进度条抽屉交互
    }
    
    // 设置场景元素和初始状态
    setupScenes() {
        this.sceneIntroEntry = document.getElementById('sceneIntroEntry');
        this.sceneStory = document.getElementById('sceneStory');
        this.sceneMap = document.getElementById('sceneMap');
        this.sceneDetail = document.getElementById('sceneDetail');
        this.backToMapBtn = document.getElementById('backToMap');
        this.startJourneyBtn = document.getElementById('startJourney');
        this.fogContainer = document.getElementById('fogContainer');
        this.backgroundMusic = document.getElementById('backgroundMusic');
        this.musicControl = document.getElementById('musicControl');
        this.musicIcon = this.musicControl.querySelector('.music-icon');
        
        // 初始化intro文字显示，entry文字隐藏
        const introText = document.getElementById('introText');
        const entryText = document.getElementById('entryText');
        if (introText && entryText) {
            introText.classList.add('visible');
            entryText.classList.remove('visible');
        }
        
        // 返回地图按钮事件
        this.backToMapBtn.addEventListener('click', () => {
            this.switchScene('map');
        });
        
        // 开始旅程按钮事件 - 从story切换到intro/entry
        this.startJourneyBtn.addEventListener('click', () => {
            this.switchScene('introEntry');
        });
        
        // 进入游戏按钮事件
        const enterGameBtn = document.getElementById('enterGame');
        if (enterGameBtn) {
            enterGameBtn.addEventListener('click', () => {
                this.enterGame();
            });
        }
        
        // 音乐控制按钮事件
        this.musicControl.addEventListener('click', () => {
            this.toggleMusic();
        });
        
        // 过场动画自动切换到游戏进入界面
        setTimeout(() => {
            this.switchScene('entry');
        }, 8000);
        
        // 自动播放音乐 - 尝试在页面加载时播放
        this.playMusic();
    }
    
    // 生成雾气粒子
    generateFog() {
        // 清除现有雾气粒子
        this.fogContainer.innerHTML = '';
        
        // 生成50个雾气粒子
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'fog-particle';
            
            // 随机大小
            const size = Math.random() * 100 + 50;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // 随机初始位置
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // 随机动画持续时间和延迟
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            // 随机透明度
            particle.style.opacity = `${Math.random() * 0.2 + 0.1}`;
            
            this.fogContainer.appendChild(particle);
        }
    }
    
    // 场景切换方法
    switchScene(scene) {
        const labFloatBtn = document.getElementById('labFloatBtn');
        
        if (scene === 'introEntry') {
            // 切换到合并的intro/entry场景
            this.currentScene = 'introEntry';
            this.sceneIntroEntry.style.display = 'flex';
            this.sceneStory.style.display = 'none';
            this.sceneMap.style.display = 'none';
            this.sceneDetail.style.display = 'none';
            this.backToMapBtn.style.display = 'none';
            labFloatBtn.classList.add('show');
            // 重置为intro文字
            this.isIntroTextVisible = true;
            const introText = document.getElementById('introText');
            const entryText = document.getElementById('entryText');
            if (introText && entryText) {
                introText.classList.add('visible');
                entryText.classList.remove('visible');
            }
            // 生成雾气粒子效果
            this.generateFog();
            // 隐藏进度条
            this.clearProgressBar();
        } else if (scene === 'story') {
            // 切换到Story模式
            this.currentScene = 'story';
            this.sceneIntroEntry.style.display = 'none';
            this.sceneStory.style.display = 'block';
            this.sceneMap.style.display = 'none';
            this.sceneDetail.style.display = 'none';
            this.backToMapBtn.style.display = 'none';
            labFloatBtn.classList.add('show');
            // 隐藏进度条
            this.clearProgressBar();
        } else if (scene === 'map') {
            // 切换到Map模式
            this.currentScene = 'map';
            this.sceneIntroEntry.style.display = 'none';
            this.sceneStory.style.display = 'none';
            this.sceneMap.style.display = 'block';
            this.sceneDetail.style.display = 'none';
            this.backToMapBtn.style.display = 'none';
            labFloatBtn.classList.add('show');
            // 隐藏进度条，等待用户选择年份
            this.clearProgressBar();
        } else if (scene === 'detail') {
            // 切换到Detail模式
            this.currentScene = 'detail';
            this.sceneIntroEntry.style.display = 'none';
            this.sceneStory.style.display = 'none';
            this.sceneMap.style.display = 'none';
            this.sceneDetail.style.display = 'block';
            this.backToMapBtn.style.display = 'inline-block';
            labFloatBtn.classList.add('show');
            // 隐藏进度条
            this.clearProgressBar();
        }
        
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // 为静态按钮添加事件监听
    setupStaticMemeButtons() {
        const islandItems = document.querySelectorAll('.island-item');
        
        islandItems.forEach(item => {
            const year = parseInt(item.dataset.year);
            const id = parseInt(item.dataset.id);
            const title = item.dataset.title;
            
            // 查找对应的梗数据
            const meme = memeData[year]?.memes.find(m => m.id === id);
            
            if (meme) {
                // 添加点击事件 - 点击梗显示弹窗
                item.addEventListener('click', () => {
                    this.showMemeModal(meme, year, item);
                });
            }
        });
    }
    
    // 添加地图缩放和拖动功能
    setupMapInteractions() {
        const mapContainer = document.getElementById('mapContainer');
        const islandsGrid = document.getElementById('islandsGrid');
        
        // 如果元素不存在，直接返回
        if (!mapContainer || !islandsGrid) {
            console.warn('mapContainer or islandsGrid not found, skipping map interactions');
            return;
        }
        
        let scale = 1;
        let translateX = 0;
        let translateY = 0;
        let isDragging = false;
        let startX, startY;
        let startTranslateX, startTranslateY;
        
        // 计算填满页面需要的缩放比例
        function calculateFillScale() {
            const scaleX = window.innerWidth / 1920;
            const scaleY = window.innerHeight / 1080;
            return Math.max(scaleX, scaleY);
        }
        
        // 计算显示整张图片需要的缩放比例
        function calculateFitScale() {
            const scaleX = window.innerWidth / 1920;
            const scaleY = window.innerHeight / 1080;
            return Math.min(scaleX, scaleY);
        }
        
        // 初始化位置
        function initPosition() {
            scale = calculateFillScale();
            translateX = (window.innerWidth - 1920 * scale) / 2;
            translateY = (window.innerHeight - 1080 * scale) / 2;
            updateTransform();
        }
        
        // 更新变换
        function updateTransform() {
            mapContainer.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        }
        
        // 限制边界
        function clampBounds() {
            const gridWidth = 1920 * scale;
            const gridHeight = 1080 * scale;
            const minX = window.innerWidth - gridWidth;
            const maxX = 0;
            const minY = window.innerHeight - gridHeight;
            const maxY = 0;
            translateX = Math.min(maxX, Math.max(minX, translateX));
            translateY = Math.min(maxY, Math.max(minY, translateY));
        }
        
        // 鼠标滚轮缩放
        window.addEventListener('wheel', (e) => {
            if (this.currentScene !== 'map') return;
            e.preventDefault();
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            const minScale = calculateFitScale();
            const newScale = Math.max(minScale, Math.min(4, scale * delta));
            
            const scaleRatio = newScale / scale;
            translateX = mouseX - (mouseX - translateX) * scaleRatio;
            translateY = mouseY - (mouseY - translateY) * scaleRatio;
            
            scale = newScale;
            clampBounds();
            updateTransform();
            this.showZoomHint();
        });
        
        // 鼠标拖动
        window.addEventListener('mousedown', (e) => {
            if (this.currentScene !== 'map') return;
            if (e.button !== 0) return;
            if (!mapContainer) return;
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            startTranslateX = translateX;
            startTranslateY = translateY;
            mapContainer.classList.add('dragging');
        });
        
        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            if (!mapContainer) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            translateX = startTranslateX + deltaX;
            translateY = startTranslateY + deltaY;
            clampBounds();
            updateTransform();
        });
        
        window.addEventListener('mouseup', () => {
            isDragging = false;
            if (mapContainer) {
                mapContainer.classList.remove('dragging');
            }
        });
        
        // 双击重置
        window.addEventListener('dblclick', (e) => {
            if (this.currentScene !== 'map') return;
            scale = calculateFitScale();
            initPosition();
        });
        
        // 初始化
        setTimeout(initPosition, 100);
        
        // 窗口大小变化时重新定位
        window.addEventListener('resize', () => {
            setTimeout(initPosition, 100);
        });
    }
    
    // 显示缩放提示
    showZoomHint() {
        let hint = document.querySelector('.zoom-hint');
        if (!hint) {
            hint = document.createElement('div');
            hint.className = 'zoom-hint';
            hint.textContent = '🖱️ 滚轮缩放 | 拖动移动 | 双击重置';
            document.body.appendChild(hint);
        }
        
        hint.classList.add('show');
        clearTimeout(this.zoomHintTimeout);
        this.zoomHintTimeout = setTimeout(() => {
            hint.classList.remove('show');
        }, 2000);
    }
    
    // 侧边栏交互功能
    setupSidebar() {
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebarToggle');
        
        // 侧边栏开关
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
        
        // 年份选择 - 网格点击
        const yearItems = document.querySelectorAll('.year-item');
        yearItems.forEach(item => {
            item.addEventListener('click', () => {
                const year = parseInt(item.dataset.year);
                if (year) {
                    // 移除所有年份项的激活状态
                    yearItems.forEach(yi => yi.classList.remove('active'));
                    // 添加当前年份项的激活状态
                    item.classList.add('active');
                    this.selectYear(year);
                }
            });
        });
    }
    
    // 进度条抽屉交互功能
    setupProgressDrawer() {
        const progressDrawerToggle = document.getElementById('progressDrawerToggle');
        const progressDrawerContent = document.getElementById('progressDrawerContent');
        
        if (progressDrawerToggle && progressDrawerContent) {
            progressDrawerToggle.addEventListener('click', () => {
                progressDrawerContent.classList.toggle('open');
            });
        }
    }
    
    // 选择年份
    selectYear(year) {
        // 显示抽屉
        const progressDrawer = document.getElementById('progressDrawer');
        if (progressDrawer) {
            progressDrawer.classList.add('show');
        }
        
        // 生成或更新该年份的进度条
        this.generateProgressBar(year);
        
        // 添加年份选择反馈
        console.log(`已选择 ${year} 年，开始按顺序收集该年份的梗吧！`);
        
        // 确保进度条显示在最前面
        const progressContainer = document.getElementById('progressContainer');
        progressContainer.style.zIndex = '1000';
    }
    
    // 生成进度条
    generateProgressBar(year) {
        const progressContainer = document.getElementById('progressContainer');
        
        // 移除所有现有的进度条，只保留当前年份的
        const existingProgressItems = document.querySelectorAll('.progress-item');
        existingProgressItems.forEach(item => {
            item.remove();
        });
        
        // 创建新的进度条元素
        const progressItem = document.createElement('div');
        progressItem.className = 'progress-item';
        progressItem.dataset.year = year;
        
        const totalMemes = memeData[year].memes.length;
        const collectedMemes = Array.from(this.repairedMemories).filter(memory => memory.startsWith(`${year}-`)).length;
        const progressPercent = Math.round((collectedMemes / totalMemes) * 100);
        
        // Create progress item HTML with collectible silhouettes
        let progressBarHTML = `
            <div class="progress-year">${year}</div>
            <div class="progress-items-container">
        `;
        
        // Add silhouettes for each collectible item
        memeData[year].memes.forEach((meme, index) => {
            const isCollected = this.repairedMemories.has(`${year}-${meme.id}`);
            // 每个剪影单独指定路径，方便手动替换
            let silhouetteImagePath = `./assets/剪影/${meme.title}.png`;
            // 手动指定特定剪影的路径示例
            // 可以在这里逐个修改或添加
            switch(meme.title) {
                case "city不city":
                    silhouetteImagePath = "./assets/剪影/city不city.png";
                    break;
                case "水灵灵的xx":
                    silhouetteImagePath = "./assets/剪影/水灵灵.png";
                    break;
                case "班味":
                    silhouetteImagePath = "./assets/剪影/班味.png";
                    break;
                case "红温":
                    silhouetteImagePath = "./assets/剪影/红温.png";
                    break;
                case "硬控":
                    silhouetteImagePath = "./assets/剪影/硬控.png";
                    break;
                case "偷感":
                    silhouetteImagePath = "./assets/剪影/偷感.png";
                    break;
                case "松弛感":
                    silhouetteImagePath = "./assets/剪影/松弛感.png";
                    break;
                case "包的":
                    silhouetteImagePath = "./assets/剪影/包的.png";
                    break;
                case "那咋了":
                    silhouetteImagePath = "./assets/剪影/那咋了.png";
                    break;
                case "草台班子":
                    silhouetteImagePath = "./assets/剪影/草台班子.png";
                    break;
                // 在这里添加更多剪影路径
                default:
                    silhouetteImagePath = `./assets/剪影/${meme.title}.png`;
            }
            progressBarHTML += `
                <div class="progress-item-silhouette ${isCollected ? 'collected' : ''}" data-meme-id="${meme.id}">
                    <img class="silhouette-image" src="${silhouetteImagePath}" alt="${meme.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <span class="silhouette-fallback" style="display:none;">📦</span>
                    <span class="silhouette-tooltip">${meme.title}</span>
                </div>
            `;
        });
        
        progressBarHTML += `
            </div>
            <div class="progress-text">${progressPercent}%</div>
        `;
        
        progressItem.innerHTML = progressBarHTML;
        
        progressContainer.appendChild(progressItem);
        
        // 显示进度容器
        progressContainer.style.display = 'flex';
    }
    
    // 清理进度条并隐藏容器
    clearProgressBar() {
        // 隐藏抽屉
        const progressDrawer = document.getElementById('progressDrawer');
        if (progressDrawer) {
            progressDrawer.classList.remove('show');
        }
        
        const progressContainer = document.getElementById('progressContainer');
        
        // 移除所有现有的进度条
        const existingProgressItems = document.querySelectorAll('.progress-item');
        existingProgressItems.forEach(item => {
            item.remove();
        });
        
        // 隐藏进度容器
        progressContainer.style.display = 'none';
    }
    
    // 更新进度条
    updateProgressBar(year) {
        // 确保只显示当前年份的进度条
        const progressItem = document.querySelector(`.progress-item[data-year="${year}"]`);
        if (!progressItem) {
            // 如果当前年份的进度条不存在，重新生成
            this.generateProgressBar(year);
            return;
        }
        
        // 更新进度条内容
        const totalMemes = memeData[year].memes.length;
        const collectedMemes = Array.from(this.repairedMemories).filter(memory => memory.startsWith(`${year}-`)).length;
        const progressPercent = Math.round((collectedMemes / totalMemes) * 100);
        
        const progressText = progressItem.querySelector('.progress-text');
        
        progressText.textContent = `${progressPercent}%`;
        
        // 更新收集物品的剪影状态
        const silhouetteItems = progressItem.querySelectorAll('.progress-item-silhouette');
        memeData[year].memes.forEach((meme, index) => {
            const isCollected = this.repairedMemories.has(`${year}-${meme.id}`);
            const silhouetteItem = silhouetteItems[index];
            if (silhouetteItem) {
                if (isCollected) {
                    silhouetteItem.classList.add('collected');
                } else {
                    silhouetteItem.classList.remove('collected');
                }
            }
        });
    }
    
    // 显示梗详情弹窗
    showMemeModal(meme, year, memeItem) {
        // 获取弹窗元素
        const modal = document.getElementById('memeModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalMemeImage = document.getElementById('modalMemeImage');
        const modalMemeDescription = document.getElementById('modalMemeDescription');
        const modalMemeYear = document.getElementById('modalMemeYear');
        const modalMemeSource = document.getElementById('modalMemeSource');
        const closeModal = document.getElementById('closeModal');
        const collectMemeBtn = document.getElementById('collectMemeBtn');
        
        // 设置弹窗内容
        modalTitle.textContent = meme.title;
        modalMemeImage.src = meme.image || ''; // 允许空图片，为后续添加图片预留
        modalMemeImage.alt = meme.title;
        modalMemeYear.textContent = `年份：${year}`;
        modalMemeDescription.textContent = meme.description || '暂无简介';
        modalMemeSource.textContent = meme.source || '暂无出处';
        
        // 显示弹窗
        modal.style.display = 'flex';
        
        // 添加关闭按钮事件
        closeModal.onclick = () => {
            modal.style.display = 'none';
        };
        
        // 添加点击弹窗外部关闭弹窗事件
        window.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
        
        // 添加收集按钮事件
        collectMemeBtn.onclick = () => {
            this.collectMeme(year, meme.id, memeItem);
            modal.style.display = 'none';
        };
    }
    
    // 收集梗 - 取消顺序收集限制
    collectMeme(year, memeId, memeItem) {
        const memoryKey = `${year}-${memeId}`;
        
        // 如果已经收集过，则返回
        if (this.repairedMemories.has(memoryKey)) {
            return;
        }
        
        // 直接标记为已收集，取消顺序限制
        this.repairedMemories.add(memoryKey);
        
        // 生成或更新剪影进度
        this.generateProgressBar(year);
        this.updateProgressBar(year);
        
        // 保存到localStorage（供实验室使用）
        this.saveToLabStorage(year, memeId);
        
        console.log(`收集到 ${year} 年的梗：${memeItem.dataset.memeTitle}`);
    }
    
    // 保存收集的梗到localStorage，供实验室使用
    saveToLabStorage(year, memeId) {
        try {
            // 计算全局ID（2024年梗1=1, 2024年梗10=10, 2023年梗1=11, ..., 2010年梗10=150）
            const globalId = (2024 - year) * 10 + memeId;
            
            // 获取梗信息
            const meme = memeData[year]?.memes.find(m => m.id === memeId);
            const memeTitle = meme?.title || '未知';
            const memeImage = meme?.image || '';
            
            console.log(`收集: ${year}年梗${memeId} "${memeTitle}" -> 全局ID: ${globalId}`);
            
            // 获取已保存的数据
            let collectedMemes = [];
            const saved = localStorage.getItem('collectedMemes');
            if (saved) {
                collectedMemes = JSON.parse(saved);
            }
            
            // 检查是否已存在
            const existingIndex = collectedMemes.findIndex(m => m.id === globalId);
            if (existingIndex === -1) {
                // 添加新收集的梗
                collectedMemes.push({
                    id: globalId,
                    year: year,
                    memeId: memeId,
                    title: memeTitle,
                    image: memeImage
                });
                localStorage.setItem('collectedMemes', JSON.stringify(collectedMemes));
                console.log('已保存的梗:', collectedMemes);
            }
            
            // 通知实验室更新
            this.notifyLabUpdate();
        } catch (e) {
            console.error('保存到实验室存储失败:', e);
        }
    }
    
    // 通知实验室更新显示
    notifyLabUpdate() {
        // 触发自定义事件
        const event = new CustomEvent('labMemeCollected', {
            detail: {
                timestamp: Date.now()
            }
        });
        document.dispatchEvent(event);
    }
    
    // 切换年份
    switchYear(year) {
        this.currentYear = year;
        
        // 更新岛屿激活状态
        document.querySelectorAll('.island-item').forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.dataset.year) === year) {
                item.classList.add('active');
            }
        });
        
        // 更新年份信息
        document.getElementById('currentYear').textContent = year;
        document.getElementById('yearDescription').textContent = memeData[year].description;
        
        // 重新渲染表情包
        this.renderMemes();
    }
    
    // 渲染表情包
    renderMemes() {
        const memesGrid = document.getElementById('islandsGrid');
        const memes = memeData[this.currentYear].memes;
        
        if (!memesGrid) {
            console.warn('islandsGrid not found, skipping meme rendering');
            return;
        }
        
        memesGrid.innerHTML = '';
        
        memes.forEach((meme, index) => {
            const card = document.createElement('div');
            card.className = 'meme-card';
            
            // 随机设置一些表情包为破碎状态
            const isBroken = Math.random() > 0.5;
            const memoryKey = `${this.currentYear}-${meme.id}`;
            const isRepaired = this.repairedMemories.has(memoryKey);
            
            card.innerHTML = `
                <h3 class="meme-title">${meme.title}</h3>
                <img 
                    src="${meme.image}" 
                    alt="${meme.title}" 
                    class="meme-image ${isBroken && !isRepaired ? 'broken-memory' : ''} ${isRepaired ? 'repaired-memory' : ''}"
                    data-memory="${memoryKey}"
                >
                <p class="meme-description">${meme.description}</p>
            `;
            
            // 添加记忆修复点击事件
            const img = card.querySelector('.meme-image');
            if (isBroken && !isRepaired) {
                img.addEventListener('click', () => {
                    this.repairMemory(memoryKey, img);
                });
            }
            
            memesGrid.appendChild(card);
        });
    }
    
    // 修复记忆
    repairMemory(memoryKey, element) {
        this.repairedMemories.add(memoryKey);
        element.classList.remove('broken-memory');
        element.classList.add('repaired-memory');
        
        // 移除点击事件
        element.removeEventListener('click', arguments.callee);
        
        // 显示修复动画效果
        this.showRepairEffect(element);
    }
    
    // 显示修复效果
    showRepairEffect(element) {
        // 创建修复粒子效果
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: 5px;
                height: 5px;
                background: var(--island-color);
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                box-shadow: 0 0 10px var(--island-color);
            `;
            
            document.body.appendChild(particle);
            
            // 粒子动画
            const angle = (Math.PI * 2 * i) / 10;
            const velocity = 5 + Math.random() * 5;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let x = 0;
            let y = 0;
            let opacity = 1;
            
            const animate = () => {
                x += vx;
                y += vy;
                opacity -= 0.05;
                
                particle.style.left = `${centerX + x}px`;
                particle.style.top = `${centerY + y}px`;
                particle.style.opacity = opacity;
                particle.style.transform = `scale(${opacity})`;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    document.body.removeChild(particle);
                }
            };
            
            animate();
        }
    }
    
    // 设置自定义光标小船
    setupCursorBoat() {
        const cursorBoat = document.getElementById('cursorBoat');
        
        // 鼠标移动事件 - 跟随光标
        document.addEventListener('mousemove', (e) => {
            cursorBoat.style.left = `${e.clientX - 20}px`;
            cursorBoat.style.top = `${e.clientY - 20}px`;
        });
    }
    
    // 播放音乐
    playMusic() {
        this.backgroundMusic.play().then(() => {
            this.isMusicPlaying = true;
            this.musicIcon.textContent = '🔊';
            this.musicControl.classList.remove('muted');
        }).catch(error => {
            console.log('自动播放失败，需要用户交互:', error);
            this.isMusicPlaying = false;
            this.musicIcon.textContent = '🔇';
            this.musicControl.classList.add('muted');
        });
    }
    
    // 暂停音乐
    pauseMusic() {
        this.backgroundMusic.pause();
        this.isMusicPlaying = false;
        this.musicIcon.textContent = '🔇';
        this.musicControl.classList.add('muted');
    }
    
    // 切换音乐播放状态
    toggleMusic() {
        if (this.isMusicPlaying) {
            this.pauseMusic();
        } else {
            this.playMusic();
        }
    }
    
    // 设置事件监听器
    setupEventListeners() {
        // 键盘导航支持
        document.addEventListener('keydown', (e) => {
            if (this.currentScene === 'intro') {
                // 在过场动画模式下，按键跳转到entry模式
                if (e.key === ' ' || e.key === 'Enter') {
                    this.switchScene('entry');
                }
            } else if (this.currentScene === 'introEntry') {
                // 在合并的intro/entry场景中
                if (e.key === ' ' || e.key === 'Enter') {
                    // 如果当前显示intro文字，切换到entry文字
                    // 如果当前显示entry文字，跳转到map
                    if (this.isIntroTextVisible) {
                        this.animateTextChange();
                    } else {
                        this.enterGame();
                    }
                }
            } else if (this.currentScene === 'story') {
                // 在Story模式下，按键跳转到Map模式
                if (e.key === ' ' || e.key === 'Enter') {
                    this.switchScene('map');
                }
            } else if (this.currentScene === 'detail') {
                // 在Detail模式下
                if (e.key === 'ArrowLeft' && this.currentYear > 2010) {
                    this.switchYear(this.currentYear - 1);
                } else if (e.key === 'ArrowRight' && this.currentYear < 2024) {
                    this.switchYear(this.currentYear + 1);
                } else if (e.key === 'Escape') {
                    // ESC键返回Map模式
                    this.switchScene('map');
                }
            }
        });
        
        // 触摸滑动支持
        this.setupTouchEvents();
        
        // 鼠标滚轮支持（已禁用，允许网页正常滚动）
        // this.setupWheelEvents();
        
        // 点击页面任意位置切换文字（可选）
        this.sceneIntroEntry.addEventListener('click', (e) => {
            if (this.currentScene === 'introEntry' && this.isIntroTextVisible) {
                // 检查是否点击了按钮，如果是则不触发切换
                if (e.target.tagName !== 'BUTTON') {
                    this.animateTextChange();
                }
            }
        });
    }
    
    // 设置触摸滑动事件
    setupTouchEvents() {
        let startX = 0;
        let startY = 0;
        let startTime = 0;
        
        const handleTouchStart = (e) => {
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            startTime = Date.now();
        };
        
        const handleTouchEnd = (e) => {
            const touch = e.changedTouches[0];
            const endX = touch.clientX;
            const endY = touch.clientY;
            const endTime = Date.now();
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const deltaTime = endTime - startTime;
            
            // 计算滑动距离和速度
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const velocity = distance / deltaTime;
            
            // 判断是否为有效滑动（距离大于50px且速度大于0.3）
            if (distance > 50 && velocity > 0.3) {
                this.handleSwipe(deltaX, deltaY);
            }
        };
        
        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    // 设置鼠标滚轮事件
    setupWheelEvents() {
        let wheelTimeout;
        
        const handleWheel = (e) => {
            // 清除之前的定时器
            clearTimeout(wheelTimeout);
            
            // 设置新的定时器，300ms内只处理一次滚轮事件
            wheelTimeout = setTimeout(() => {
                this.handleWheelScroll(e.deltaY);
            }, 100);
        };
        
        document.addEventListener('wheel', handleWheel, { passive: true });
    }
    
    // 处理滑动逻辑
    handleSwipe(deltaX, deltaY) {
        if (this.currentScene === 'introEntry') {
            // 在introEntry场景中，左右滑动切换文字
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // 水平滑动
                if (deltaX > 0) {
                    // 向右滑动
                    if (this.isIntroTextVisible) {
                        this.animateTextChange();
                    }
                } else {
                    // 向左滑动
                    if (!this.isIntroTextVisible) {
                        this.animateTextChangeBack();
                    }
                }
            }
        } else if (this.currentScene === 'story') {
            // 在story场景中，向下滑动进入地图
            if (deltaY > 0) {
                // 向下滑动
                this.switchScene('map');
            }
        } else if (this.currentScene === 'detail') {
            // 在detail场景中，左右滑动切换年份
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // 水平滑动
                if (deltaX > 0 && this.currentYear > 2010) {
                    // 向右滑动，切换到上一年
                    this.switchYear(this.currentYear - 1);
                } else if (deltaX < 0 && this.currentYear < 2024) {
                    // 向左滑动，切换到下一年
                    this.switchYear(this.currentYear + 1);
                }
            }
        }
    }
    
    // 处理滚轮滚动逻辑
    handleWheelScroll(deltaY) {
        if (this.currentScene === 'introEntry') {
            // 在introEntry场景中，向下滚动切换到entry文字，向上滚动切换到intro文字
            if (deltaY > 0) {
                // 向下滚动
                if (this.isIntroTextVisible) {
                    this.animateTextChange();
                }
            } else {
                // 向上滚动
                if (!this.isIntroTextVisible) {
                    this.animateTextChangeBack();
                }
            }
        } else if (this.currentScene === 'story') {
            // 在story场景中，向下滚动进入地图
            if (deltaY > 0) {
                this.switchScene('map');
            }
        } else if (this.currentScene === 'detail') {
            // 在detail场景中，滚动切换年份
            if (deltaY > 0 && this.currentYear > 2010) {
                // 向下滚动，切换到上一年
                this.switchYear(this.currentYear - 1);
            } else if (deltaY < 0 && this.currentYear < 2024) {
                // 向上滚动，切换到下一年
                this.switchYear(this.currentYear + 1);
            }
        }
    }
    
    // 动画切换文字内容（向前）
    animateTextChange() {
        const introText = document.getElementById('introText');
        const entryText = document.getElementById('entryText');
        
        if (introText && entryText && this.isIntroTextVisible) {
            // 隐藏intro文字
            introText.classList.remove('visible');
            
            // 延迟后显示entry文字
            setTimeout(() => {
                entryText.classList.add('visible');
            }, 300);
            
            this.isIntroTextVisible = false;
        }
    }
    
    // 动画切换文字内容（向后）
    animateTextChangeBack() {
        const introText = document.getElementById('introText');
        const entryText = document.getElementById('entryText');
        
        if (introText && entryText && !this.isIntroTextVisible) {
            // 隐藏entry文字
            entryText.classList.remove('visible');
            
            // 延迟后显示intro文字
            setTimeout(() => {
                introText.classList.add('visible');
            }, 300);
            
            this.isIntroTextVisible = true;
        }
    }
    
    // 进入游戏
    enterGame() {
        // 确保音乐在用户交互时开始播放
        if (!this.isMusicPlaying) {
            this.playMusic();
        }
        this.switchScene('map');
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    // 初始化应用
    new CyberMemoryArchipelago();
});

// 简单的随机数生成器种子函数
Math.seedrandom = function(seed) {
    Math.random = (function(seed) {
        let x = Math.sin(seed) * 10000;
        return function() {
            x = Math.sin(x) * 10000;
            return x - Math.floor(x);
        };
    })(seed);
};

// 表情包实验室功能
class MemeLab {
    constructor() {
        this.labFloatBtn = null;
        this.labModal = null;
        this.closeLabModal = null;
        this.cameraRecordBtn = null;
        this.generateBtn = null;
        this.isRecording = false;
        
        this.init();
    }
    
    init() {
        this.setupElements();
        this.setupEventListeners();
    }
    
    setupElements() {
        this.labFloatBtn = document.getElementById('labFloatBtn');
        this.labModal = document.getElementById('labModal');
        this.closeLabModal = document.getElementById('closeLabModal');
        this.cameraRecordBtn = document.querySelector('.camera-record-btn');
        this.generateBtn = document.querySelector('.generate-button');
        this.memoryList = document.getElementById('memoryList');
        this.memoryCount = document.getElementById('memoryCount');
        this.collectedMemes = this.loadCollectedMemes();
        this.hasPhoto = false;
    }
    
    init() {
        this.setupElements();
        this.setupEventListeners();
        this.generateMemoryItems();
    }
    
    // 从localStorage加载已收集的表情包
    loadCollectedMemes() {
        try {
            const saved = localStorage.getItem('collectedMemes');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('加载已收集表情包失败:', e);
            return [];
        }
    }
    
    // 保存收集的表情包到localStorage
    saveCollectedMemes() {
        try {
            localStorage.setItem('collectedMemes', JSON.stringify(this.collectedMemes));
        } catch (e) {
            console.error('保存收集表情包失败:', e);
        }
    }
    
    // 生成记忆碎片列表（已收集的排在前面）
    generateMemoryItems() {
        if (!this.memoryList) return;
        
        this.memoryList.innerHTML = '';
        const totalItems = 150;
        
        // 创建所有项
        const allItems = [];
        for (let i = 1; i <= totalItems; i++) {
            const item = document.createElement('div');
            
            // 查找是否已收集
            const collectedMeme = this.collectedMemes.find(m => m.id === i);
            const isCollected = !!collectedMeme;
            
            item.className = `memory-item ${isCollected ? '' : 'locked'}`;
            item.dataset.id = i;
            item.dataset.collected = isCollected;
            
            // 显示梗名字或"未解锁"
            const displayTitle = isCollected ? collectedMeme.title : '未解锁';
            const displayImage = isCollected && collectedMeme.image ? `url(${collectedMeme.image})` : 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)';
            
            item.innerHTML = `
                <div class="memory-image" style="background-image: ${displayImage}"></div>
                <div class="memory-text">${displayTitle}</div>
                ${!isCollected ? '<div class="lock-icon">🔒</div>' : ''}
            `;
            
            if (isCollected) {
                item.addEventListener('click', () => {
                    this.selectMemoryItem(i, item);
                });
            }
            
            allItems.push(item);
        }
        
        // 排序：已收集的在前，按ID从小到大；未解锁的在后，按ID从小到大
        allItems.sort((a, b) => {
            const aCollected = a.dataset.collected === 'true';
            const bCollected = b.dataset.collected === 'true';
            
            if (aCollected && !bCollected) return -1;
            if (!aCollected && bCollected) return 1;
            return parseInt(a.dataset.id) - parseInt(b.dataset.id);
        });
        
        // 添加到DOM
        allItems.forEach(item => {
            this.memoryList.appendChild(item);
        });
        
        this.updateMemoryCount();
    }
    
    // 更新记忆碎片计数
    updateMemoryCount() {
        if (this.memoryCount) {
            this.memoryCount.textContent = `${this.collectedMemes.length} / 150`;
        }
    }
    
    // 选择记忆碎片
    selectMemoryItem(id, element) {
        element.classList.toggle('selected');
        console.log('选择了记忆碎片', id);
    }
    
    setupEventListeners() {
        // 打开实验室弹窗
        if (this.labFloatBtn && this.labModal) {
            this.labFloatBtn.addEventListener('click', (e) => {
                // 如果正在拖动，不打开弹窗
                if (this.isDraggingLabBtn) return;
                this.labModal.style.display = 'flex';
                this.refreshMemoryItems(); // 打开时刷新状态
            });
        }
        
        // 实验室浮窗拖动功能
        this.setupLabFloatBtnDrag();
        
        // 关闭实验室弹窗
        if (this.closeLabModal && this.labModal) {
            this.closeLabModal.addEventListener('click', () => {
                this.labModal.style.display = 'none';
            });
            
            // 点击弹窗外部关闭
            window.addEventListener('click', (e) => {
                if (e.target === this.labModal) {
                    this.labModal.style.display = 'none';
                }
            });
        }
        
        // 摄像头录制按钮点击事件
        if (this.cameraRecordBtn) {
            this.cameraRecordBtn.addEventListener('click', (e) => {
                console.log('摄像头按钮点击事件触发');
                this.toggleRecording();
            });
        }
        
        // 生成按钮点击事件
        if (this.generateBtn) {
            this.generateBtn.addEventListener('click', () => {
                this.generateMeme();
            });
        }
        
        // 监听收集事件，更新实验室显示
        document.addEventListener('labMemeCollected', () => {
            this.refreshMemoryItems();
        });
    }
    
    // 刷新记忆碎片显示
    refreshMemoryItems() {
        this.collectedMemes = this.loadCollectedMemes();
        this.generateMemoryItems();
    }
    
    setupMemoryItems() {
        const memoryItems = document.querySelectorAll('.memory-item:not(.locked)');
        memoryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                item.classList.toggle('selected');
                console.log('选择了记忆碎片', index + 1);
            });
        });
    }
    
    toggleRecording() {
        console.log('toggleRecording 被调用, isRecording:', this.isRecording, 'hasPhoto:', this.hasPhoto);
        const video = document.getElementById('cameraVideo');
        const canvas = document.getElementById('cameraCanvas');
        
        // 如果没有在录制，开启摄像头
        if (!this.isRecording) {
            this.isRecording = true;
            this.hasPhoto = false;
            this.startCamera();
            return;
        }
        
        // 如果已经有照片，再次点击重新拍（先关闭再开启）
        if (this.hasPhoto) {
            this.stopCamera();
            this.isRecording = true;
            this.hasPhoto = false;
            this.startCamera();
            return;
        }
        
        // 摄像头已开启且没有照片，尝试拍照
        if (video && video.readyState >= video.HAVE_ENOUGH_DATA) {
            // 设置画布尺寸与视频相同
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            // 绘制当前帧到画布
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            // 显示静态照片，隐藏视频
            video.style.display = 'none';
            canvas.style.display = 'block';
            
            // 标记已拍照
            this.hasPhoto = true;
            console.log('拍照成功');
            this.showApiStatus('拍照成功！点击"生成专属表情包"生成图片，或再次点击重新拍照', 'success');
            
            // 视觉反馈
            this.cameraRecordBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.cameraRecordBtn.style.transform = 'scale(1)';
            }, 200);
        } else {
            // 视频还没准备好，关闭摄像头
            this.isRecording = false;
            this.hasPhoto = false;
            this.stopCamera();
        }
    }
    
    // 设置实验室浮窗拖动功能
    setupLabFloatBtnDrag() {
        if (!this.labFloatBtn) return;
        
        let isDragging = false;
        let startX, startY, initialX, initialY;
        let longPressTimer;
        const longPressDuration = 500; // 长按500ms触发拖动
        this.isDraggingLabBtn = false;
        
        // 鼠标/触摸开始
        const startDrag = (e) => {
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            
            startX = clientX;
            startY = clientY;
            initialX = this.labFloatBtn.offsetLeft;
            initialY = this.labFloatBtn.offsetTop;
            
            isDragging = false;
            this.isDraggingLabBtn = false;
            
            // 开始长按计时器
            longPressTimer = setTimeout(() => {
                isDragging = true;
                this.isDraggingLabBtn = true;
                this.labFloatBtn.style.cursor = 'grabbing';
                this.labFloatBtn.classList.add('dragging');
            }, longPressDuration);
        };
        
        // 鼠标/触摸移动
        const moveDrag = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            
            const deltaX = clientX - startX;
            const deltaY = clientY - startY;
            
            // 更新位置
            const newX = initialX + deltaX;
            const newY = initialY + deltaY;
            
            this.labFloatBtn.style.left = `${newX}px`;
            this.labFloatBtn.style.top = `${newY}px`;
            this.labFloatBtn.style.right = 'auto';
            this.labFloatBtn.style.bottom = 'auto';
        };
        
        // 鼠标/触摸结束
        const endDrag = () => {
            clearTimeout(longPressTimer);
            
            setTimeout(() => {
                this.isDraggingLabBtn = false;
            }, 100);
            
            this.labFloatBtn.style.cursor = '';
            this.labFloatBtn.classList.remove('dragging');
        };
        
        // 绑定事件
        this.labFloatBtn.addEventListener('mousedown', startDrag);
        this.labFloatBtn.addEventListener('touchstart', startDrag, { passive: true });
        
        document.addEventListener('mousemove', moveDrag);
        document.addEventListener('touchmove', moveDrag, { passive: false });
        
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    }
    
    async startCamera() {
        try {
            // 检查浏览器支持
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error('浏览器不支持摄像头访问');
            }
            
            console.log('正在请求摄像头权限...');
            
            // 请求摄像头权限
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: 'user',
                    width: { ideal: 640 },
                    height: { ideal: 480 }
                },
                audio: false 
            });
            
            console.log('摄像头权限获取成功');
            this.currentStream = stream;
            
            // 获取视频元素并显示摄像头画面
            const video = document.getElementById('cameraVideo');
            const canvas = document.getElementById('cameraCanvas');
            const placeholder = document.getElementById('cameraPlaceholder');
            
            if (!video) {
                throw new Error('摄像头视频元素不存在');
            }
            
            if (!placeholder) {
                throw new Error('摄像头占位符元素不存在');
            }
            
            video.srcObject = stream;
            video.style.display = 'block';
            if (canvas) canvas.style.display = 'none'; // 隐藏canvas
            placeholder.style.display = 'none';
            
            // 更新按钮状态
            if (this.cameraRecordBtn) {
                this.cameraRecordBtn.style.animation = 'none';
                this.cameraRecordBtn.style.boxShadow = '0 0 20px rgba(255, 71, 87, 0.9)';
                this.cameraRecordBtn.style.background = '#ff0000';
            }
            
            console.log('摄像头已开启');
        } catch (error) {
            console.error('无法访问摄像头:', error);
            console.error('错误类型:', error.name);
            console.error('错误信息:', error.message);
            
            let errorMsg = '无法访问摄像头';
            if (error.name === 'NotAllowedError') {
                errorMsg = '摄像头权限被拒绝，请在浏览器设置中允许访问';
            } else if (error.name === 'NotFoundError') {
                errorMsg = '未检测到摄像头设备';
            } else if (error.name === 'NotReadableError') {
                errorMsg = '摄像头被其他应用占用';
            } else if (error.name === 'OverconstrainedError') {
                errorMsg = '无法满足摄像头参数要求';
            } else {
                errorMsg += `: ${error.message}`;
            }
            
            alert(errorMsg);
            this.isRecording = false;
        }
    }
    
    stopCamera() {
        if (this.currentStream) {
            // 停止所有视频轨道
            this.currentStream.getTracks().forEach(track => track.stop());
            this.currentStream = null;
        }
        
        // 隐藏视频和画布，显示占位符
        const video = document.getElementById('cameraVideo');
        const canvas = document.getElementById('cameraCanvas');
        const placeholder = document.getElementById('cameraPlaceholder');
        
        video.style.display = 'none';
        video.srcObject = null;
        canvas.style.display = 'none';
        placeholder.style.display = 'flex';
        
        // 恢复按钮状态
        this.cameraRecordBtn.style.animation = 'pulse 2s infinite';
        this.cameraRecordBtn.style.boxShadow = '';
        this.cameraRecordBtn.style.background = '#ff4757';
        
        console.log('摄像头已关闭');
    }
    
    captureFrame() {
        if (!this.currentStream) return;
        
        const video = document.getElementById('cameraVideo');
        const canvas = document.getElementById('cameraCanvas');
        const ctx = canvas.getContext('2d');
        
        // 设置画布尺寸与视频相同
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // 绘制当前帧
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // 可以在这里处理捕获的帧...
        console.log('已捕获帧');
        
        return canvas.toDataURL('image/png');
    }
    
    // 生成专属表情包（使用本地SD模型）
    async generateMeme() {
        // 检查是否有选中的记忆碎片
        const selectedItems = document.querySelectorAll('.memory-item.selected');
        if (selectedItems.length === 0) {
            alert('请先选择要使用的记忆碎片（梗）');
            return;
        }
        
        // 检查是否已拍照
        console.log('hasPhoto:', this.hasPhoto);
        
        if (!this.hasPhoto) {
            alert('请先拍照');
            return;
        }
        
        try {
            // 显示加载界面
            this.showLoading(true);
            
            // 获取已拍的照片（从canvas获取）
            const canvas = document.getElementById('cameraCanvas');
            const userPhoto = canvas.toDataURL('image/png');
            console.log('userPhoto长度:', userPhoto.length);
            
            // 获取选中的梗信息
            const selectedMemes = [];
            selectedItems.forEach(item => {
                const id = parseInt(item.dataset.id);
                const memeData = this.collectedMemes.find(m => m.id === id);
                if (memeData) {
                    selectedMemes.push(memeData);
                }
            });
            
            // 构建提示词
            const prompt = selectedMemes.map(m => m.title).join(', ');
            const fullPrompt = `Convert this photo into a funny Chinese internet meme style featuring ${prompt}. Make it look like a typical Chinese meme with vibrant colors and expressive face. Keep face recognizable.`;
            
            // 获取梗图片（第一张选中的梗）
            let memeImage = null;
            if (selectedMemes.length > 0 && selectedMemes[0].image) {
                memeImage = selectedMemes[0].image;
                console.log('梗图片:', memeImage ? memeImage.substring(0, 100) + '...' : 'null');
            }
            
            // 调用本地API
            console.log('正在调用本地模型生成...');
            const result = await this.callLocalAPI(userPhoto, fullPrompt, memeImage);
            
            // 显示结果
            this.showResult(result);
            
        } catch (error) {
            console.error('生成失败:', error);
            this.showApiStatus(`生成失败: ${error.message}`, 'error');
            alert(`生成失败: ${error.message}\n请确保本地服务已启动 (python local_server.py)`);
        } finally {
            this.showLoading(false);
        }
    }
    
    // 调用本地API
    async callLocalAPI(userPhoto, prompt, memeImage = null) {
        const body = {
            image: userPhoto,
            prompt: prompt,
            strength: 0.6
        };
        
        // 如果有梗图片，添加到 image2
        if (memeImage) {
            body.image2 = memeImage;
        }
        
        const response = await fetch('http://localhost:5000/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'API调用失败');
        }
        
        const data = await response.json();
        return data.output;
    }
    
    // 显示生成结果
    showResult(imageUrl) {
        const resultSection = document.getElementById('resultSection');
        const resultImage = document.getElementById('resultImage');
        
        resultImage.innerHTML = `<img src="${imageUrl}" alt="生成的表情包">`;
        resultSection.style.display = 'block';
        
        // 设置下载按钮
        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn.onclick = () => {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'meme-generated.png';
            link.click();
        };
    }
    
    // 显示/隐藏加载界面
    showLoading(show) {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.style.display = show ? 'flex' : 'none';
        }
    }
    
    // 显示生成结果（独立弹窗）
    showResult(imageUrl) {
        // 隐藏实验室
        this.labModal.style.display = 'none';
        
        // 显示独立弹窗
        const resultModal = document.getElementById('resultModal');
        const resultModalImage = document.getElementById('resultModalImage');
        
        resultModalImage.innerHTML = `<img src="${imageUrl}" alt="生成的表情包">`;
        resultModal.style.display = 'flex';
        
        // 存储当前图片URL用于下载
        this.currentResultImage = imageUrl;
        
        // 设置下载按钮
        const downloadBtn = document.getElementById('downloadResultBtn');
        if (downloadBtn) {
            downloadBtn.onclick = () => {
                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = 'meme-generated.png';
                link.click();
            };
        }
        
        // 设置重新生成按钮
        const regenerateBtn = document.getElementById('regenerateBtn');
        if (regenerateBtn) {
            regenerateBtn.onclick = () => {
                this.closeResultModal();
                this.labModal.style.display = 'flex';
            };
        }
        
        // 设置关闭按钮
        const closeBtn = document.getElementById('closeResultModal');
        if (closeBtn) {
            closeBtn.onclick = () => {
                this.closeResultModal();
            };
        }
        
        // 点击背景关闭
        resultModal.onclick = (e) => {
            if (e.target === resultModal) {
                this.closeResultModal();
            }
        };
    }
    
    // 关闭结果弹窗
    closeResultModal() {
        const resultModal = document.getElementById('resultModal');
        if (resultModal) {
            resultModal.style.display = 'none';
        }
        this.currentResultImage = null;
    }
    
    // 显示API状态
    showApiStatus(message, type = '') {
        const status = document.getElementById('apiStatus');
        if (status) {
            status.textContent = message;
            status.className = 'api-status ' + type;
        }
    }
}

// 在应用初始化后初始化表情包实验室
document.addEventListener('DOMContentLoaded', () => {
    // 初始化表情包实验室
    new MemeLab();
});
