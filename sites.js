/**
 *  自定义网站配置 
 */
const config = {
  title: "Mr.wei-webserver",                 //write your website title
  subtitle: "Keytop-Technology", //write your website subtitle
  logo_icon: "sitemap",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"搜头条",
      template:"https://so.toutiao.com/search?dvpf=pc&source=input&keyword=$s"
    },
      {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
    {
      name:"谷 歌",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"百度地图",
      template:"https://map.baidu.com/search?querytype=s&da_src=shareurl&wd=$s"
    },
     {
      name:"高德地图",
      template:"https://ditu.amap.com/search?query=$s"
    },
    {
      name:"查快递",
      template:"https://www.kuaidi100.com/?coname=toutiao&nu=$s"
    },
      {
      name:"调试记录",
      template:"http://118.31.171.185:7777/?name=$s"
    },
      {
      name:"售后维护",
      template:"http://118.31.171.185:7099/?name=$s"
    }
  ],
  selling_ads: false,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"example.com",
    price:500,                        //domain price
    mon_unit:"yen sign",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"info@example.com"
      }
    ]                        
  },
  lists: [                            //Url list
   
	{
      name:"办公常用",
      icon:"graduation cap",
      list:[
          {
          url:"https://exmail.qq.com/login",
          name:"腾讯企业邮箱",
          desc:"专业、安全的企业邮箱服务"
        },
        {
          url:"http://console608.keytop.cn:51320/console/login.jsp;jsessionid=A67B361AA39302D78FD7C39C3D325370",
          name:"速停车",
          desc:"速停车后台管理"
        },
        {
          url:"http://yun.keytop.cn/kite/page/index.html",
          name:"风筝",
          desc:"风筝管理系统"
        },
        {
          url:"http://yun.keytop.cn/kitework/page/login.html",
          name:"工单",
          desc:"工单管理系统"
        },
        {
          url:"http://ktapps.keytop.cn/cloud/cloud-base/login",
          name:"大物业",
          desc:"车场集中管理平台"
        },
		{
          url:"http://ktapps.keytop.cn/road/loginInit.html",
          name:"路侧停车",
          desc:"路侧停车管理"
        },
		{
          url:"https://park.keytop.cn/unityp/login",
          name:"停车云助手",
          desc:"停车云助手"
        },
          {
          url:"https://api.weizhen.xyz",
          name:"科拓智慧停车接口示例",
          desc:"接口示例"
        },
		  {
          url:"https://yunwei.keytop.cn",
          name:"运维中心管理平台",
          desc:"运维中心管理平台"
        },
		  {
          url:"https://dc.keytop.cn/app/manage/index.html",
          name:"科拓BI系统",
          desc:"科拓BI系统"
        },
		  {
          url:"http://118.31.171.185:1234",
          name:"文件传输服务",
          desc:"文件传输服务"
        },
	   {
          url:"https://kos.keytop.cn/dkqfront/pc.html#/Login?redirect=%2FIndex",
          name:"商户助手PC版",
          desc:"商户助手PC版"
        },
	  {
          url:"https://yongce.keytop.cn/unityp/login",
          name:"科拓永策平台",
          desc:"科拓永策平台"
        },
	  {
          url:"http://prj.nosou.work:8998/",
          name:"项目信息记录&题库",
          desc:"项目信息"
        },
	  {
          url:"https://pan.weizhen.xyz",
          name:"技术部数据中心",
          desc:"Ketyop-NAS"
        },
    {
          url:"https://doc.weixin.qq.com/txdoc/apply_page?k=AD4AmwcwAA4CDxHO4iAMgA4Ab3AKg#/login",
          name:"维修替换料号表",
          desc:"维修替换料号表(实时更新)"
        },
    {
          url:"https://kp-open.keytop.cn/api/index.html",
          name:"统一接口管理平台",
          desc:"接口管理平台"
        },
    {
          url:"https://find-car-admin.keytop.cn/fcfront/login",
          name:"3D自研地图管理",
          desc:"自研地图管理"
        },
        {
          url:"https://image.weizhen.xyz",
          name:"项目案例图片",
          desc:"案例图片"
        },
        {
          url:"https://todolist.weizhen.xyz",
          name:"待办事项列表",
          desc:"待办事项"
        }
      ]
    },
    {
      name:"理想生活",
      icon:"coffee",
      list:[
         {
          url:"https://weibo.com/",
          name:"新浪微博",
          desc:"随时随地发现新鲜事"
        },
        {
          url:"https://www.bilibili.com/",
          name:"哔哩哔哩",
          desc:"干杯~-bilibili"
        },
        {
          url:"https://www.iqiyi.com/",
          name:"爱奇艺",
          desc:"悦享品质"
        },
        {
          url:"https://www.youku.com/",
          name:"优酷",
          desc:"这世界很酷"
        },
	 {
          url:"https://v.qq.com/",
          name:"腾讯视频",
          desc:"不负好时光"
        },
	 {
          url:"https://www.douyu.com/",
          name:"斗鱼直播",
          desc:"每个人的直播平台"
        },
	 {
          url:"https://www.huya.com/",
          name:"虎牙直播",
          desc:"1秒即开看直播"
        },
        {
          url:"https://egame.qq.com/",
          name:"企鹅电竞",
          desc:"腾讯旗下电竞平台"
        }
      ]
    },
{
      name:"何以解忧",
      icon:"shopping cart",
      list:[
          {
          url:"https://www.taobao.com/",
          name:"淘宝",
          desc:"淘！我喜欢"
        },
        {
          url:"https://www.tmall.com/",
          name:"天猫",
          desc:"理想生活上天猫"
        },
        {
          url:"https://www.jd.com/",
          name:"京东",
          desc:"多快好省,购物上京东！"
        },
        {
          url:"https://www.amazon.cn/",
          name:"亚马逊",
          desc:"给你更大的世界"
        }
      ]
    },
	{
      name:"科学上网",
      icon:"cloud",
      list:[
        {
          url:"https://mail.google.com/",
          name:"Gmail",
          desc:"谷歌邮箱"
        },
        {
          url:"https://www.youtube.com/",
          name:"Youtube",
          desc:"油管"
        },
        {
          url:"https://www.facebook.com/",
          name:"Facebook",
          desc:"脸书"
        },
        {
          url:"https://twitter.com/",
          name:"Twitter",
          desc:"推特"
        },
        {
          url:"https://www.twitch.tv/",
          name:"Twitch",
          desc:"推趣"
        },
          {
          url:"https://www.instagram.com/",
          name:"Instagram",
          desc:"照片墙"
        },
        {
          url:"https://web.telegram.org/#/im",
          name:"Telegram",
          desc:"电报"
        },
        {
          url:"https://github.com/",
          name:"GitHub",
          desc:"代码托管平台"
        }

      ]
    }
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
   //return "https://icon.occ.hk/get.php?url=" + url;
   //return  url + '/favicon.ico'
   return  "https://img.icons8.com/color/2x/paper-plane.png";

  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
  //return "https://icon.occ.hk/get.php?url=http://" + url;
  //return  url + '/favicon.ico'
   return  "https://img.icons8.com/color/2x/paper-plane.png";

  } 
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/vip-weizhen/sites"','target="_blank"'],el('i',['class="github icon"'],"") + 'Mr.wei') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + '麻省理工学院执照')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://so.toutiao.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 正在出售'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '联系我') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'感兴趣？') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/semantic-ui/2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://fastly.jsdelivr.net/gh/vip-weizhen/sites/style.min.css" rel="stylesheet">
      <script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/semantic-ui/2.4.1/semantic.min.js"></script>
      <link rel="shortcut icon" href="https://pic.imgdb.cn/item/6283521009475431299ccc20.png" />
      <link rel="bookmark" href="https://pic.imgdb.cn/item/6283521009475431299ccc20.png" type="image/x-icon"　/>
      <style>
    .ct2 .mn {
        width: 770px;
    }

    .ct2 .sd {
        width: 218px;
    }
</style>
<div id="wp" class="wp">
    <div class="xnkl">
        <div class="deng-box2">
            <div class="deng">
                <div class="xian"></div>
                <div class="deng-a">
                    <div class="deng-b">
                        <div class="deng-t">年</div>
                    </div>
                </div>
                <div class="shui shui-a">
                    <div class="shui-c"></div>
                    <div class="shui-b"></div>
                </div>
            </div>
        </div>
        <div class="deng-box3">
            <div class="deng">
                <div class="xian"></div>
                <div class="deng-a">
                    <div class="deng-b">
                        <div class="deng-t">新</div>
                    </div>
                </div>
                <div class="shui shui-a">
                    <div class="shui-c"></div>
                    <div class="shui-b"></div>
                </div>
            </div>
        </div>
        <div class="deng-box1">
            <div class="deng">
                <div class="xian"></div>
                <div class="deng-a">
                    <div class="deng-b">
                        <div class="deng-t">乐</div>
                    </div>
                </div>
                <div class="shui shui-a">
                    <div class="shui-c"></div>
                    <div class="shui-b"></div>
                </div>
            </div>
        </div>
        <div class="deng-box">
            <div class="deng">
                <div class="xian"></div>
                <div class="deng-a">
                    <div class="deng-b">
                        <div class="deng-t">快</div>
                    </div>
                </div>
                <div class="shui shui-a">
                    <div class="shui-c"></div>
                    <div class="shui-b"></div>
                </div>
            </div>
        </div>
    </div>
    <style type="text/css">
        @media screen and (max-width: 768px) {
            .xnkl {
                display: none;
            }
        }

        .deng-box {
            position: fixed;
            top: 40px;
            right: 150px;
            z-index: 9999;
            pointer-events: none;
        }

        .deng-box1 {
            position: fixed;
            top: 30px;
            right: 10px;
            z-index: 9999;
            pointer-events: none
        }

        .deng-box2 {
            position: fixed;
            top: 40px;
            left: 150px;
            z-index: 9999;
            pointer-events: none
        }

        .deng-box3 {
            position: fixed;
            top: 30px;
            left: 10px;
            z-index: 9999;
            pointer-events: none
        }

        .deng-box1 .deng,
        .deng-box3 .deng {
            position: relative;
            width: 120px;
            height: 90px;
            margin: 50px;
            background: #d8000f;
            background: rgba(216, 0, 15, .8);
            border-radius: 50% 50%;
            -webkit-transform-origin: 50% -100px;
            -webkit-animation: swing 5s infinite ease-in-out;
            box-shadow: -5px 5px 30px 4px #fc903d
        }

        .deng {
            position: relative;
            width: 120px;
            height: 90px;
            margin: 50px;
            background: #d8000f;
            background: rgba(216, 0, 15, .8);
            border-radius: 50% 50%;
            -webkit-transform-origin: 50% -100px;
            -webkit-animation: swing 3s infinite ease-in-out;
            box-shadow: -5px 5px 50px 4px #fa6c00
        }

        .deng-a {
            width: 100px;
            height: 90px;
            background: #d8000f;
            background: rgba(216, 0, 15, .1);
            margin: 12px 8px 8px 8px;
            border-radius: 50% 50%;
            border: 2px solid #dc8f03
        }

        .deng-b {
            width: 45px;
            height: 90px;
            background: #d8000f;
            background: rgba(216, 0, 15, .1);
            margin: -4px 8px 8px 26px;
            border-radius: 50% 50%;
            border: 2px solid #dc8f03
        }

        .xian {
            position: absolute;
            top: -20px;
            left: 60px;
            width: 2px;
            height: 20px;
            background: #dc8f03
        }

        .shui-a {
            position: relative;
            width: 5px;
            height: 20px;
            margin: -5px 0 0 59px;
            -webkit-animation: swing 4s infinite ease-in-out;
            -webkit-transform-origin: 50% -45px;
            background: orange;
            border-radius: 0 0 5px 5px
        }

        .shui-b {
            position: absolute;
            top: 14px;
            left: -2px;
            width: 10px;
            height: 10px;
            background: #dc8f03;
            border-radius: 50%
        }

        .shui-c {
            position: absolute;
            top: 18px;
            left: -2px;
            width: 10px;
            height: 35px;
            background: orange;
            border-radius: 0 0 0 5px
        }

        .deng:before {
            position: absolute;
            top: -7px;
            left: 29px;
            height: 12px;
            width: 60px;
            content: " ";
            display: block;
            z-index: 999;
            border-radius: 5px 5px 0 0;
            border: solid 1px #dc8f03;
            background: orange;
            background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03)
        }

        .deng:after {
            position: absolute;
            bottom: -7px;
            left: 10px;
            height: 12px;
            width: 60px;
            content: " ";
            display: block;
            margin-left: 20px;
            border-radius: 0 0 5px 5px;
            border: solid 1px #dc8f03;
            background: orange;
            background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03)
        }

        .deng-t {
            font-family: 黑体, Arial, Lucida Grande, Tahoma, sans-serif;
            font-size: 3.2rem;
            color: #dc8f03;
            font-weight: 700;
            line-height: 85px;
            text-align: center
        }

        .night .deng-box,
        .night .deng-box1,
        .night .deng-t {
            background: 0 0 !important
        }

        @-moz-keyframes swing {
            0% {
                -moz-transform: rotate(-10deg)
            }

            50% {
                -moz-transform: rotate(10deg)
            }

            100% {
                -moz-transform: rotate(-10deg)
            }
        }

        @-webkit-keyframes swing {
            0% {
                -webkit-transform: rotate(-10deg)
            }

            50% {
                -webkit-transform: rotate(10deg)
            }

            100% {
                -webkit-transform: rotate(-10deg)
            }
        }
    </style>

  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + 'favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`

}

