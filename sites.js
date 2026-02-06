const config = {
  title: "Mr.wei-webserver",
  subtitle: "Keytop-Technology",
  logo_icon: "sitemap",               //https://semantic-ui.com/elements/icon.html
  hitokoto: true,
  search:true,
  search_engine:[
    {
      name:"必 应",
      template:"https://cn.bing.com/search?q=$s"
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
      name:"快递",
      template:"https://www.kuaidi100.com/?coname=toutiao&nu=$s"
    },
    {
      name:"音乐",
      template:"https://www.pjmp3.com/search.php?keyword=$s"
    },
    
    {
      name:"影视",
      template:"https://v.ikanbot.com/search?q=$s"
    },
      {
      name:"调试",
      template:"https://kt-ts.weizhen.xyz/?name=$s"
    },
      {
      name:"维保",
      template:"https://kt-wb.weizhen.xyz/?name=$s"
    }
  ],
  selling_ads: false,
  sell_info:{
    domain:"example.com",
    price:500,
    mon_unit:"yen sign",
    contact:[
      {
        type:"envelope",
        content:"info@example.com"
      }
    ]                        
  },


  lists: [
   
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
          url:"http://console608.keytop.cn:51320/console/wxcorp_login",
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
          url:"http://roadpark.keytop.cn/#/Login",
          name:"路内停车收费平台",
          desc:"路内停车管理"
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
          name:"BI系统",
          desc:"科拓BI系统"
        },
      {
          url:"https://file.weizhen.xyz",
          name:"文件传输服务",
          desc:"文件传输服务"
        },
     {
          url:"https://kos.keytop.cn/dkqfront/pc.html#/Login",
          name:"商户助手PC版",
          desc:"商户助手PC版"
        },
    {
          url:"https://yongce.keytop.cn/unityp/login",
          name:"科拓永策平台",
          desc:"科拓永策平台"
        },
    {
          url:"https://kp-open.keytop.cn/api/index.html",
          name:"统一接口管理平台",
          desc:"接口管理平台"
        },
                {
          url:"https://kt-chongdz.keytop.cn/manage/login",
          name:"大圣充电平台",
          desc:"大圣充电"
        },
    {
          url:"https://doc.weixin.qq.com/txdoc/apply_page?k=AD4AmwcwAA4CDxHO4iAMgA4Ab3AKg#/login",
          name:"维修替换料号表",
          desc:"维修替换料号表(实时更新)"
        },
        {
          url:"https://yongce-smwy.keytop.cn/unityp/login",
          name:"科拓永策Pro平台",
          desc:"科拓永策Pro平台"
        },
        {
          url:"https://find-car-admin.keytop.cn/unityp/login",
          name:"反向寻车引导",
          desc:"反向寻车引导管理平台"
        },
        {
          url:"https://pay-1208.weizhen.xyz",
          name:"测试车场查询缴费",
          desc:"1208测试车场查询缴费"
        },
        {
          url:"http://game.weizhen.xyz",
          name:"🖐️🐟️🐟️🐟️",
          desc:"🖐️🐟️🐟️🐟️"
        }

      ]
    },
    {
      name:"人工智能",
      icon:"comment alternate",
      list:[
          {
          url:"https://chat.deepseek.com",
          name:"DeepSeek",
          desc:"探索未至之境"
        },
        {
          url:"https://www.doubao.com",
          name:"豆包",
          desc:"你好，我是豆包"
        },
        {
          url:"https://chatgpt.com",
          name:"ChatGPT",
          desc:"有什么可以帮忙的？"
        },
        {
          url:"https://gemini.google.com",
          name:"Gemini          ",
          desc:"你好！"
        }
      ]
    },
    {
      name:"理想生活",
      icon:"coffee",
      list:[
          {
          url:"https://www.douyin.com/",
          name:"抖音",
          desc:"记录美好生活"
        },
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
          url:"https://www.amazon.com",
          name:"亚马逊",
          desc:"给你更大的世界"
        },
        {
          url:"https://www.1688.com",
          name:"阿里1688",
          desc:"全球领先的采购批发平台"
        },
        {
          url:"https://www.goofish.com",
          name:"闲鱼",
          desc:"闲不住?上闲鱼!"
        },
        {
          url:"https://www.suning.com",
          name:"苏宁易购",
          desc:"换新到苏宁 省钱更省心!"
        },
        {
          url:"https://www.walmart.com",
          name:"沃尔玛",
          desc:"让生活更美好"
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
    },
    {
      name:"工具集",
      icon:"cogs",
      list:[
          {
          url:"https://tools.weizhen.xyz",
          name:"IT-Tools",
          desc:"助力开发人员和IT工作者"
        },
        {
          url:"https://tts.weizhen.xyz",
          name:"文本转语音",
          desc:"在线TTS转换工具"
        },
        {
          url:"https://sub.weizhen.xyz/sub?token=e7a8244ea81ace268547f7cd66520350",
          name:"FQ代理节点",
          desc:"科学上网节点订阅链接"
        },
        {
          url:"https://sub-api.weizhen.xyz",
          name:"订阅转换",
          desc:"在线订阅转换工具"
        },
        {
          url:"https://tvhelper.weizhen.xyz",
          name:"IPTV",
          desc:"IPTV直播源"
        },
        {
          url:"https://tvbox.weizhen.xyz",
          name:"TVBOX",
          desc:"TVBOX点播源"
        },
        {
          url:"https://url.weizhen.xyz",
          name:"网址缩短",
          desc:"短链生成器"
        },
        {
          url:"https://js.weizhen.xyz",
          name:"镜像加速",
          desc:"GitHub Docker加速"
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

function getFavicon(url){
  return "https://obs.weizhen.xyz/Favicon.png";
}

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/vip-weizhen/sites"','target="_blank"'],el('i',['class="github icon"'],"") + 'Mr.wei') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + '麻省理工学院执照')+' Mail: vip.weizhen@gmail.com '));
  return renderHeader() + renderMain() + footer;
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

function renderHeader() {
  const item = (template, name) => el('a', ['class="item"', `data-url="${template}"`], name);
  const mediaList = [
    "https://lf9-static.bytednsdoc.com/obj/eden-cn/uhbfnupkbps/video/earth_v6.mp4",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/111eh7nupehpqps/1008%E6%BA%90%E8%BF%9C%E6%B5%81%E9%95%BF22.mp4",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/111eh7nupehpqps/%E6%97%97%E5%AD%90%E8%BE%93%E5%87%BA.mp4",
    "https://obs.weizhen.xyz/bgv/lizi.mp4",
    "https://obs.weizhen.xyz/bgv/lizi-1.mp4",
    "https://obs.weizhen.xyz/bgv/shuye.mp4",
    "https://obs.weizhen.xyz/bgv/rain.mp4",
    "https://obs.weizhen.xyz/bgv/rain-1.mp4",
    "https://obs.weizhen.xyz/bgv/sea.mp4"
  ];

  const randomMedia = mediaList[Math.floor(Math.random() * mediaList.length)];
  const isVideo = randomMedia.endsWith(".mp4");
  const backgroundHtml = isVideo
    ? `<video autoplay muted loop id="myVideo"><source src="${randomMedia}" type="video/mp4"></video>`
    : `<img id="myVideo" src="${randomMedia}" style="width:100%;height:100%;object-fit:cover;" />`;

  var nav = el('div', ['class="ui large secondary inverted menu"'], el('div', ['class="item"'], el('p', ['id="hitokoto"'], '条条大路通罗马')));
  var title = el('h1', ['class="ui inverted header"'], el('i', [`class="${config.logo_icon} icon"`], "") + el('div', ['class="content"'], config.title + el('div', ['class="sub header"'], config.subtitle)));

  var menu = el('div', ['id="sengine"', 'class="ui bottom attached tabular inverted secondary menu"'], el('div', ['class="header item"'], '&nbsp;') + config.search_engine.map((link, key) => {
    return key === 0
      ? el('a', ['class="active item"', `data-url="${link.template}"`], link.name)
      : item(link.template, link.name);
  }).join(""));

  var input = el('div', ['class="ui left corner labeled right icon fluid large input"'],
    el('div', ['class="ui left corner label"'], el('img', ['id="search-fav"', 'class="left floated avatar ui image"', 'src="https://cn.bing.com/favicon.ico"'], "")) +
    el('input', ['id="searchinput"', 'type="search"', 'placeholder="搜索你想要知道的……"', 'autocomplete="off"'], "") +
    el('i', ['class="inverted circular search link icon"'], ""));

  // 夜间模式按钮
  var darkModeBtn = el('div', ['id="dark-mode-toggle"'], el('i', ['id="dark-mode-icon"', 'class="moon icon"'], ""));

  return el('header', [],
    el('div', ['id="head"', 'class="ui inverted vertical masthead center aligned segment"'],
      el('div', ['class="video-background"'], backgroundHtml) +
      (config.hitokoto ? el('div', ['id="nav"', 'class="ui container"'], nav) : "") +
      el('div', ['id="title"', 'class="ui text container"'],
        title +
        (config.search ? input + menu : "") +
        `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`
      )
    )
  ) + darkModeBtn;
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="zh-CN">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://obs.weizhen.xyz/sites.style.min.css" rel="stylesheet">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
      <link rel="shortcut icon" href="https://obs.weizhen.xyz/sites-ico.png" />
      <style>
      .video-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: -1; }
      #myVideo { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; transform: translateX(-50%) translateY(-50%); }
      #head { background: rgba(0, 0, 0, 0) !important; position: relative; }
      
      /* 切换按钮样式 */
      #dark-mode-toggle {
        position: fixed; bottom: 30px; right: 30px; z-index: 999;
        width: 48px; height: 48px; border-radius: 50%;
        background: rgba(255,255,255,0.9); color: #333;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      #dark-mode-toggle:hover { transform: scale(1.1); }
      #dark-mode-toggle i { margin: 0; font-size: 1.2rem; }

      /* 夜间模式覆盖逻辑 */
      body.dark-mode { background-color: #1b1c1d !important; color: #eee; }
      body.dark-mode main { background: #1b1c1d !important; background-image: none !important; }
      body.dark-mode .footer { background-color: #161718 !important; color: #888; border-top: 1px solid #333; }
      body.dark-mode .ui.cards > .card { 
        background: #242526 !important; 
        box-shadow: 0 2px 10px rgba(0,0,0,0.5) !important; 
        transition: transform 0.3s, box-shadow 0.3s;
      }
      body.dark-mode .ui.cards > .card:hover { 
        box-shadow: 0 5px 20px rgba(33, 133, 208, 0.3) !important; 
        transform: translateY(-5px);
      }
      body.dark-mode .ui.cards > .card .header { color: #fff !important; }
      body.dark-mode .ui.cards > .card .meta { color: rgba(255,255,255,0.4) !important; }
      body.dark-mode .ui.horizontal.divider.header { color: #555 !important; }
      body.dark-mode #dark-mode-toggle { background: #333; color: #fbbd08; }
      
      /* 针对搜索框的夜间微调 */
      body.dark-mode .ui.input input { background: #2b2c2d !important; color: #fff !important; border-color: #444 !important; }
    </style>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      // 搜索逻辑
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').removeClass('active');
        $(e.target).addClass('active');
        const template = $(e.target).data('url');
        const domain = template.split('/')[2];
        $('#search-fav').attr('src', 'https://' + domain + '/favicon.ico');
      });
      $('.search').on('click', function () {
          var url = $('#sengine a.active').data('url');
          url = url.replace('$s', $('#searchinput').val());
          window.open(url);
      });
      $("#searchinput").bind("keypress", function(e){
          if (e.keyCode == 13){ $(".search").click(); }
      });
      $('#menubtn').on('click', function () { $('#seller').modal('show'); });

      // 夜间模式切换核心逻辑
      function applyTheme(isDark) {
        if (isDark) {
          $('body').addClass('dark-mode');
          $('#dark-mode-icon').removeClass('moon').addClass('sun');
        } else {
          $('body').removeClass('dark-mode');
          $('#dark-mode-icon').removeClass('sun').addClass('moon');
        }
      }
      // 初始化检查
      const savedTheme = localStorage.getItem('dark-mode');
      if (savedTheme === 'true' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyTheme(true);
      }
      // 点击事件
      $('#dark-mode-toggle').on('click', function() {
        const isNowDark = !$('body').hasClass('dark-mode');
        applyTheme(isNowDark);
        localStorage.setItem('dark-mode', isNowDark);
      });
    </script>
    <script src="https://obs.weizhen.xyz/sites.mouse.js"></script>
  </body>
  </html>`
}
