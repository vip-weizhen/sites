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
          name:"项目信息记录🔥",
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
          url:"https://find-car-admin.keytop.cn/fcfront/login",
          name:"3D自研地图管理🔥",
          desc:"自研地图管理"
        },
        {
          url:"https://sites.weizhen.xyz",
          name:"虚位以待",
          desc:"虚位以待"
        },
        {
          url:"https://sites.weizhen.xyz",
          name:"虚位以待",
          desc:"虚位以待"
        },
        {
          url:"https://sites.weizhen.xyz",
          name:"虚位以待",
          desc:"虚位以待"
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
        },
         {
          url:"https://www.cloudflare.com/",
          name:"Cloudflare",
          desc:"构建更好的互联网"
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
