const data = {
    content:[5555,"src.png"]
}
// 游记
const d =[{
    yid:"yno1",
    header:"逃离烟雨江南，去三亚拥抱碧海蓝天【首发】",
    title:"一：逃离杭州，去三亚拥抱大海",
    avatar:"",
    name:"",
    num:"786",
    time:"2019-10-27",
    zan:"2",
    comment:"pno2",
    bgsrc:"src",
    content:[5555,"src.png"]
}];

const comment = [{
    pid:"pno2",
    avatar:"",
    name:"",
    content:"55555",
    time:"2019-10-27"
    // zan:"5"
}]

const huifu =[{
    hid:"hno1",
    avatar:"",
    name:"",
    content:"55555",
    // zan:"5"
}]

const youji = [
    {
        phone:"",
    yid:"yno1",
    header:"逃离烟雨江南，去三亚拥抱碧海蓝天【首发】",
    title:"一：逃离杭州，去三亚拥抱大海",
    avatar:"",
    name:"wujia",
    num:"786",
    time:"2018-10-27",
    zan:"2",
    comment:"pno1",
    bgsrc:"/img/youji/gz-ge.jpg",
    src:"/img/youji/gz-ge.jpg"
},
{
    phone:"",
    yid:"yno2",
    header:"【3天2夜 】最适合小蜜月的慢游攻略，我在江城等你",
    title:"文青说,武汉是古韵犹存的地方;吃货说,武汉 是小吃云集的食都；玩家说,武汉是个装满历史故事的城市；00后说，武汉是个网红的城市。不管 武汉 在你心中是种怎样的样貌，总有一个点能戳中你，并撩骚着你不断的前往~",
    avatar:"/img/youji/ge-pu.jpg",
    name:"wujia",
    num:"990",
    time:"2018-03-27",
    zan:"9",
    comment:"pno2",
    bgsrc:"/img/youji/gz-pu.jpg",
    src:"/img/youji/gz-pe.jpg"
},
{
    phone:"",
    yid:"yno3",
    header:"『 卡塔尔 』探秘中东的神秘土豪国度 40℃高温下的多哈游",
    title:"#特殊出行解答# #3月去哪玩# #签证办理指南# #适合拍照的奇怪建筑#",
    avatar:"/img/youji/gz-gu.jpg",
    name:"wujia",
    num:"990",
    time:"2019-10-27",
    zan:"10",
    comment:"pno3",
    bgsrc:"/img/youji/gz-gu.jpg",
    src:"/img/youji/gz-gu.jpg"
},
{
    yid:"yno4",
    phone:"",
    avatar:"/img/youji/gu-we.jpg",
    name:"wujia",
    num:"990",
    zan:"10",
    comment:"pno4",
    // src:"/img/youji/gz-wu.jpg",
    content:[{
        bgsrc:"/img/youji/gz-wu.jpg",
        time:"2019-10-27",
        header:"【神雕侠旅】——广州味，能否满足成都人的胃！",
        title:"此篇游记是“一蕊Aries”在途牛发表的游记攻略，记录了旅游时的游记攻略，图片多多，真实好玩",
    }]
},
]

const strategy = [{
        sid:"sno1",
        header:"不负春光好时节 春季玩法TOP10",
        title:"一期一会春日又来，春天独有的景色再次悄然而至，是时候出去玩啦！樱花烂漫的日本，烟雨之春的江南，踏青赏花的大自然，都在等你驻足欣赏~加之春节过后正处于旅游淡季，人少景美，错峰出行性价比非常高！快看看春季玩法榜单，为你的春季出游带来更多灵感，让你背上背包走进春天。",
        num:"990",
        mudi:"10",
        bgsrc:"/img/gonglue/gl-chun.jpg",
        src:"/img/gonglue/gl-chun.jpg"
},{
    sid:"sno2",
    header:"北京周边景点推荐",
    title:"她有着三千年的历史，荟萃了自元明清以来的中华文化……八方来客，宗教、文化、语言在这里融合，大而广。然而当你不经意间步入胡同里一家美味的涮羊肉店，北京的小而美又显得如此楚楚动人，恰到好处。北京周边去哪玩，跟着小编来看看！",
    num:"922",
    mudi:"3",
    bgsrc:"/img/gonglue/gl-bei.jpg",
    src:"/img/gonglue/gl-bei.jpg"
},
{
    sid:"sno3",
    header:"文艺狗告诉你厦门的正确打开方式",
    title:"说到文艺之城，小文青直指厦门。如果你自称文艺青年，只是去鼓浪屿漫步？去厦大看涂鸦？去青年旅社住几晚？那你还真就算不上文艺青年。话说咱文艺青年玩儿的就是够小众，够个性！寄明信片、喝咖啡、逛菜场等等，没有什么是咱做不到的。如果你够文艺，不妨跟着小编，让我告诉你厦门的正确打开方式。",
    num:"1000",
    mudi:"5",
    bgsrc:"/img/gonglue/gl-xia.jpg",
    src:"/img/gonglue/gl-xia.jpg"
},
]
//攻略具体介绍
const gl_jieshao = {
    sid:"sno1",
    content:[{
        smalltitle:'天安门广场',
        smallimg:"/img/gonglue/glxiang/glx-bei.jpeg",
        smallcontent:"作为清朝时期的皇家园林，颐和园的设计无疑是园林之中的翘 楚。颐和园坐落于北京西郊，它以昆明湖、万寿山为基址， 汲取了江南园林的设计手法而建成一座大型的山水园林。 颐和园共占地293公顷，以苏州西湖为蓝本，各式园林宫殿一 共3000余间，大致可以分为行政、生活和游览三个部分。主要 景点仁寿殿、乐寿堂和宜芸馆等这些地方，听上去是不是很有 意境。颐和园内还有文物、商周铜器和唐宋书画等宝贵财富"
    },
    {
        smalltitle:'天安门广场',
        smallimg:"/img/gonglue/glxiang/glx-bei2.jpeg",
        smallcontent:"作为清朝时期的皇家园林，颐和园的设计无疑是园林之中的翘 楚。颐和园坐落于北京西郊，它以昆明湖、万寿山为基址， 汲取了江南园林的设计手法而建成一座大型的山水园林。 颐和园共占地293公顷，以苏州西湖为蓝本，各式园林宫殿一 共3000余间，大致可以分为行政、生活和游览三个部分。主要 景点仁寿殿、乐寿堂和宜芸馆等这些地方，听上去是不是很有 意境。颐和园内还有文物、商周铜器和唐宋书画等宝贵财富"
    },
    {
        smalltitle:'天安门广场',
        smallimg:"/img/gonglue/glxiang/glx-bei3.jpeg",
        smallcontent:"作为清朝时期的皇家园林，颐和园的设计无疑是园林之中的翘 楚。颐和园坐落于北京西郊，它以昆明湖、万寿山为基址， 汲取了江南园林的设计手法而建成一座大型的山水园林。 颐和园共占地293公顷，以苏州西湖为蓝本，各式园林宫殿一 共3000余间，大致可以分为行政、生活和游览三个部分。主要 景点仁寿殿、乐寿堂和宜芸馆等这些地方，听上去是不是很有 意境。颐和园内还有文物、商周铜器和唐宋书画等宝贵财富"
    }
]

}