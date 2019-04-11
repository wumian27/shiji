const data = [{
    travelid:"no1",
    province:'广东',
    country:'chense',
    city:'珠海',
    content:'可自选双人/3人套餐 玩遍海洋王国，看马戏',
    program:'赏烟花 玩遍海洋王国  大马戏',
    price:'2445',
    time:'3月24日',
    sat:'98',
    src:"zhuhai-changlong.jpg",
    title:"<珠海长隆企鹅酒店3天2晚自由行酒景套餐>",
    scence:'珠海长隆'
},
{ 
    travelid:"no2",
    province:'福建',
    country:'chense',
    city:'厦门',
    content:'踏青赏花0购物 市区连住 登楼摄影造楼 含126元鹭江夜游 12大景点 深圳往返 24H接送站',
    price:'1000',
    time:'3月01日',
    sat:'92',
    src:"xiamen-shui.jpg",
    title:"<厦门云水谣土楼+鼓浪屿双动4日游>",
    scence:'厦门鼓浪屿'
},
{
    travelid:"no3",
    province:'福建',
    country:'chense',
    city:'厦门',
    content:'<厦门云水谣土楼+鼓浪屿双动4日游>踏青赏花0购物 市区连住 登楼摄影造楼 含126元鹭江夜游 12大景点 深圳往返 24H接送站',
    price:'1105',
    time:'3月01日',
    sat:'92',
    src:"xiamen-men.jpg",
    title:"<厦门云水谣土楼+鼓浪屿双动4日游>",
    scence:'厦门鼓浪屿'
},
{
    travelid:"no4",
    province:'广东',
    country:'chense',
    city:'珠海',
    content:'缤纷童趣/夜赏浪漫河畔/景区步行即达，可自选套餐，3至4月超级巡礼，享受春日家庭度假',
    program:'赏烟花 玩遍海洋王国  大马戏',
    price:'1116',
    time:'3月24日',
    title:"<珠海长隆马戏酒店2天1晚3人自由行酒景套餐>",
    sat:'96',
    src:"zhuhai-jiu.jpg",
    scence:'珠海长隆'
},
{
    travelid:"no5",
    province:'广东',
    country:'chense',
    city:'广州',
    content:'住熊猫酒店1晚+3人动物世界+自助午餐或晚餐，可另行加购长隆门票（2天1晚家庭单园游（动物世界）+餐套餐）',
    program:'萌帅酷熊猫  全球唯一熊猫三胞胎  动漫亲子酒店',
    price:'1157',
    time:'3月26日',
    title:"<广州长隆2天1晚自由行>",
    sat:'98',
    src:"guangzhou-changlong.jpg",
    scence:'广州长隆'
},
{
    travelid:"no6",
    province:'广东',
    country:'chense',
    city:'珠海',
    content:'住客免费使用泳池/健身房等免费巴士往返酒店至景区',
    program:'珠海长隆 海洋王国 长隆 迎海公寓 亲子度假 公务出差',
    price:'1047',
    time:'3月26日',
    title:"<珠海长隆迎海酒店公寓2天1晚双人自由行酒景套餐>",
    sat:'98',
    src:"zhuhai-chjiu.jpg",
    scence:'珠海长隆'
},
{
    travelid:"no7",
    province:'广东',
    country:'chense',
    city:'深圳',
    content:'双谷畅享套餐/童话梦幻主题酒店/邻近茶溪谷',
    program:'原生态乐园 5A级景区 童话梦幻主题酒店 园林式温泉 天禅佛教秀 亲子...',
    price:'941',
    time:'4月26日',
    title:"<深圳东部华侨城2天自由行-住黑森林酒店1晚+双谷两日无限次入园门票+自助早餐>",
    sat:'92',
    src:"shenzhen-dong.jpg",
    scence:'深圳东部华侨城'
},
{
    travelid:"no8",
    province:'广东',
    country:'chense',
    city:'深圳',
    content:'双谷畅享套餐/水元素概念酒店/专属VIP通道直达大侠谷',
    program:'原生态乐园 5A级景区 童话梦幻主题酒店 园林式温泉 天禅佛教秀 亲子...',
    price:'941',
    time:'4月26日',
    title:"<销量明星-深圳东部华侨城2天自由行-住瀑布酒店1晚+双谷两日无限次入园门票2张+自助双早>",
    sat:'93',
    src:"shenzhen-ming.jpg",
    scence:'深圳东部华侨城'
},
{
    travelid:"no9",
    province:'广东',
    country:'chense',
    city:'惠州',
    content:'住惠州南昆山温泉别墅，泡天然温泉，欢聚唱K，一起BBQ，自助厨房，享受欢乐健康假期',
    program:'温泉 泳池 别墅',
    price:'880',
    time:'5月01日',
    sat:'96',
    src:"huizhou-nan.jpg",
    title:"<惠州南昆山大观园养生温泉2天1晚自由行游>",
    scence:'惠州南昆山大观园'
},
{
    travelid:"no10",
    province:'广东',
    country:'chense',
    city:'惠州',
    content:'宿保利锦里富中富别墅  独享私家温泉池  聚会趴首选',
    program:'温泉别墅  聚会',
    price:'1080',
    time:'5月06日',
    title:"<惠州南昆山保利锦里温泉别墅度假2天1晚自由行>",
    sat:'96',
    src:"huizhou-ku.jpg",
    scence:'惠州南昆山保利锦'
},
{
    travelid:"no11",
    province:'广东',
    country:'chense',
    city:'江门',
    content:'入住康桥温泉度假村、无限次百池温泉、江门特色美食古井烧鹅宴及鸡鲍翅火锅宴、圭峰山、那琴半岛休闲纯玩',
    program:'温泉别墅  聚会',
    price:'999',
    time:'5月06日',
    title:"<江门2日游>",
    sat:'90',
    src:"jiangmem-er.jpg",
    scence:'江门度假村'
},
{
    travelid:"no12",
    province:'广东',
    country:'chense',
    city:'深圳',
    content:'金色海岸游艇  地王69层顶层观光电梯',
    program:'聚会',
    price:'211',
    time:'5月03日',
    title:"<深圳金色海岸-大梅沙-中英街-地王大厦1日游>",
    sat:'90',
    src:"shenzhen-er.jpg",
    scence:'深圳金色海岸-大梅沙-中英街-地王大厦'
},
{
    travelid:"no13",
    province:'福建',
    country:'chense',
    city:'厦门',
    content:'火车票自选，1晚鼓浪屿，1晚市区国际五星喜来登/马哥孛罗/日航酒店，专车接送站，含5大景点，夜游筼筜湖观美景，五星酒店自助早餐',
    price:'1000',
    time:'3月03日',
    title:"<厦门-鼓浪屿3日游>",
    sat:'95',
    src:"xiamen-gu.jpg",
    scence:'厦门鼓浪屿'
},
{
    travelid:"no14",
    province:'福建',
    country:'chense',
    city:'厦门',
    content:'火车票自选，2晚国际五星日航/马哥孛罗，1晚夜宿鼓浪屿，体验木偶戏+ 观世遗博物馆，打卡日光岩，尝地道客家餐',
    price:'1600',
    time:'4月03日',
    title:"<厦门-鼓浪屿-云水谣土楼4日游>",
    sat:'95',
    src:"xiamen-yun.jpg",
    scence:'厦门-鼓浪屿-云水谣',
},
{
    travelid:"no15",
    province:'福建',
    country:'chense',
    city:'厦门',
    content:'一趟玩遍厦门  畅游鼓浪屿 邂逅风情街 含126元鹭江夜游 可升级住宿',
    price:'739',
    time:'4月08日',
    title:"<厦门鼓浪屿-环岛路-曾厝垵风情街动车3日游>",
    sat:'95',
    src:"xiamen-huan.jpg",
    scence:'厦门-鼓浪屿-环岛路-曾厝垵',
},
{
    travelid:"no16",
    province:'福建',
    country:'chense',
    city:'厦门',
    content:'中山路泰谷/亲子海悦山庄/度假村艾美/五星海景瑞颐，逛吃中山路，漫步环岛路，轻奢品质集结，高端度假鹭岛之旅',
    price:'2000',
    time:'5月08日',
    title:"<厦门双飞3-7日自由行>",
    sat:'95',
    src:"xiamen-san.jpg"
},

{
    travelid:"no17",
    province:'福建',
    country:'chense',
    city:'厦门',
    content:'火车票自选，1晚鼓浪屿3晚中山路商圈酒店，深入厦门吃喝玩乐核心地带，逛吃逛吃首选',
    price:'1105',
    time:'4月01日',
    title:"<厦门-鼓浪屿-云水谣土楼5日游>",
    sat:'96',
    src:"xiamen-hou.jpg"
},
{
    travelId:"co1",
    country:'haiwai',
    city:'马尔代夫',
    content:'一价全含，特色泰式餐厅,中文服务，儿童乐园，地中海风格，送5次出海活动，第1晚马累，途牛自营',
    price:'11105',
    time:'4月27日',
    title:"<马尔代夫中央格兰德岛CentaraGrand5晚7日自由行>",
    sat:'96',
    src:"maer-lan.jpg"
},
{
    travelid:"co2",
    country:'haiwai',
    city:'马尔代夫',
    content:'坐拥南北半球星空，中文服务，高私密性，天然环礁，赠送一项出海活动，第1晚马累，途牛自营',
    price:'13210',
    time:'5月27日',
    title:"<马尔代夫柏悦哈达哈岛Hadahaa5晚7日自由行>",
    sat:'90',
    src:"maer-haha.jpg"
},
{
    
    travelid:"co3",
    country:'haiwai',
    city:'马尔代夫',
    content:'赠玻璃底船巡航，免费升级三餐和水飞，全岛WIFI覆盖，中文服务，拖尾沙滩，双层树吧,第1晚马累，途牛自营',
    price:'20000',
    time:'6月27日',
    title:"<马尔代夫Dhigali迪迦莉岛5晚7天自由行>",
    sat:'93',
    src:"maer-dhig.jpg"
},
{
    
    travelid:"co4",
    country:'haiwai',
    city:'马尔代夫',
    content:'一价全含，酒水畅饮，中文服务，海上吊床，儿童乐园，新岛体验，第1晚马累，途牛自营',
    price:'9999',
    time:'4月27日',
    title:"<马尔代夫>鲁滨逊努努岛Robinson Noon5晚7日自由行>",
    sat:'93',
    src:"maer-zi.jpg"
},
{
    
    travelid:"co5",
    country:'haiwai',
    city:'马尔代夫',
    content:'一价全含，水飞上岛，浮潜圣地，私人泳池，全新岛屿，赠送四次出海活动，途牛自营',
    price:'1999',
    time:'5月27日',
    title:"<马尔代夫伊露薇丽岛Sun Aqua Iru Veli4晚6日自由行>",
    sat:'95',
    src:"maer-sun.jpg"
},
{
    
    travelid:"co6",
    country:'haiwai',
    city:'马尔代夫',
    content:'斯航直飞 红树林游船  网红小火车  探加勒古堡 玩4大海上项目  可补差升度假岛屿 一国价游两国',
    price:'2220',
    time:'6月01日',
    title:"<马尔代夫8-9日游>",
    sat:'95',
    src:"maer-ba.jpg"
},
{
    
    travelid:"co7",
    country:'haiwai',
    city:'巴厘岛',
    content:'323旅游节大促，深圳直飞，纯玩0购物，蓝梦及贝妮达双岛出海（含浮潜等套餐），恶魔眼泪，海神庙，精油SPA1小时    ',
    price:'2299',
    time:'4月06日',
    title:"<巴厘岛5或6日游>",
    sat:'95',
    src:"balidao-wu.jpg"
},
{
    
    travelid:"co8",
    country:'haiwai',
    city:'巴厘岛',
    content:'希尔顿君悦威斯汀同级,独栋泳池别墅,蓝梦岛含海底漫步,牛人种珊瑚,阿勇河漂流,纯玩赠旅拍含WIFI',
    price:'6199',
    time:'3月26日',
    title:"<巴厘岛6或7日游>",
    sat:'90',
    src:"balidao-cheng.jpg"
},
{
    
    travelid:"co9",
    country:'haiwai',
    city:'巴厘岛',
    content:'蓝梦岛出海（送海底漫步）海边国际五星，独栋泳池别墅，阿勇河漂流，悦榕庄下午茶，精致小包团，纯玩无购物（当地参团）',
    price:'5199',
    time:'3月20日',
    title:"<巴厘岛5晚7日游>",
    sat:'94',
    src:"balidao-ri.jpg"
},
{
    
    travelid:"co10",
    country:'haiwai',
    city:'巴厘岛',
    content:'浮潜+海底漫步+香蕉船+甜甜圈+恶魔眼泪+游红树林',
    price:'5199',
    time:'4月20日',
    title:"<巴厘岛蓝梦岛畅玩一日游五星会所可选深潜浮潜送视频 送海底漫步照片>",
    sat:'96',
    src:"balidao-ban.jpg"
},
{
    
    travelid:"co11",
    country:'haiwai',
    city:'巴厘岛',
    content:'中文导游 往返接送  可加选spa和脏鸭餐晚餐 ',
    price:'3999',
    time:'5月20日',
    title:"<巴厘岛京打马尼火山+德格拉朗梯田+巴杜尔湖+圣泉寺一日游>",
    sat:'98',
    src:"balidao-shan.jpg"
},
{
    
    travelid:"co12",
    country:'haiwai',
    city:'巴厘岛',
    content:'<巴厘岛4晚5日或6日自由行>希尔顿/君悦/威斯汀/穆丽雅/阿优达，人气五星海边连住，私人沙滩，靠近购物中心，可入住2大2小',
    price:'5999',
    time:'4月7日',
    title:"",
    sat:'98',
    src:"balidao-wan.jpg"
},
]

module.exports = data;



                      
  

                   
                    
                  




                        
                      





                        
                       

                   

                       
                        

                    