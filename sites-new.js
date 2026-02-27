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
          name:"Gemini",
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
  return new Response(renderHTML(renderIndex()), {
    headers: { 'content-type': 'text/html;charset=UTF-8' }
  });
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

function getFavicon(url){
  return 'https://obs.weizhen.xyz/Favicon.png';
}

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/vip-weizhen/sites"','target="_blank"'],el('i',['class="github icon"'],"") + 'Mr.wei') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + '麻省理工学院执照')+' Mail: vip.weizhen@gmail.com '));
  return renderHeader() + renderMain() + footer;
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],
      el('div',['class="content"'],
        el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`,'onerror="this.src=\'https://obs.weizhen.xyz/Favicon.png\'"'],"") +
        el('div',['class="card-text"'],
          el('div',['class="header"'],name) +
          el('div',['class="meta"'],desc)
        )
      )
    );
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
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

  // ★ 核心改动：将原来的 title 替换为实时时钟组件
  var title = `
<div id="clock-display" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 40px;margin-bottom:1em;margin-top:0;">
  <div id="clock-time" style="font-size:5rem;font-weight:700;color:#ffffff;letter-spacing:8px;line-height:1;font-family:'Courier New',Consolas,monospace;text-shadow:0 0 30px rgba(255,255,255,0.25);"></div>
  <div id="clock-date" style="font-size:1.25rem;color:rgba(255,255,255,0.85);margin-top:10px;letter-spacing:4px;font-family:'Microsoft YaHei','PingFang SC',sans-serif;"></div>
</div>`;

  var menu = config.search_engine.map((link, key) => {
    return `<a class="sengine-item${key === 0 ? ' active' : ''}" data-url="${link.template}">${link.name}</a>`;
  }).join('');

  var searchArea = config.search ? `
<div id="search-wrap">
  <div id="search-box">
    <input id="searchinput" type="search" placeholder="搜索你想要知道的......" autocomplete="off" />
    <span id="search-btn-inner" onclick="doSearch()">&#128269;</span>
  </div>
  <div id="sengine">${menu}</div>
</div>` : '';

  // 夜间模式按钮
  var darkModeBtn = el('div', ['id="dark-mode-toggle"'], el('i', ['id="dark-mode-icon"', 'class="moon icon"'], ""));

  return el('header', [],
    el('div', ['id="head"', 'class="ui inverted vertical masthead center aligned segment"'],
      el('div', ['class="video-background"'], backgroundHtml) +
      (config.hitokoto ? el('div', ['id="nav"', 'class="ui container"'], nav) : "") +
      el('div', ['id="title"'], title + searchArea)
    )
  ) + darkModeBtn;
}

function renderHTML(index) {
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
      /* ── 基础 ── */
      *, *::before, *::after { box-sizing: border-box; }
      html { font-size: 16px; }
      body {
        background-color: #dde1ea !important;
        background-image: none !important;
        padding-top: 0 !important;
        margin-top: 0 !important;
      }

      /* ── 自定义滚动条 ── */
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.18); border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.32); }

      /* ── 视频背景 ── */
      .video-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 0; }
      .video-background::after {
        content:''; position:absolute; inset:0; z-index: 1;
        background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 100%);
      }
      #myVideo { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; transform: translateX(-50%) translateY(-50%); }
      #head {
        background: rgba(0,0,0,0) !important;
        position: relative;
        min-height: 0 !important;
        padding: 0 0 3.5em !important;
        margin-bottom: -1.5em !important;
        overflow: hidden;
        z-index: 1;
      }
      #nav, #title { position: relative; z-index: 2; }
      #search-wrap { margin-bottom: 0; }

      /* ── 一言 ── */
      #nav { padding-top: 1.4em !important; padding-bottom: 0 !important; }
      #nav .menu { background: transparent !important; border: none !important; justify-content: center; min-height: 0 !important; }
      #nav .item { font-size: 0.95rem !important; letter-spacing: 2px; opacity: 0.85; text-shadow: 0 1px 6px rgba(0,0,0,0.4); padding: 0.4em 1em !important; }

      /* ── 时钟 ── */
      #clock-display { margin-top: 0.5em !important; margin-bottom: 1em !important; }
      #clock-time { font-size: 5rem !important; letter-spacing: 8px !important; }
      #clock-date { font-size: 1.25rem !important; letter-spacing: 4px !important; margin-top: 10px !important; }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.45} }
      .clock-colon { animation: pulse 1s ease-in-out infinite; }

      /* ── 搜索区域整体 ── */
      #title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }
      #search-wrap {
        display: block;
        width: min(760px, calc(100vw - 2rem));
        filter: drop-shadow(0 8px 32px rgba(0,0,0,0.4));
      }

      /* ── 搜索框 ── */
      #search-box {
        position: relative;
        display: block;
        width: 100%;
      }
      #searchinput {
        display: block;
        width: 100%;
        box-sizing: border-box;
        border: 1.5px solid rgba(255,255,255,0.45);
        outline: none;
        background: rgba(255,255,255,0.18);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        color: #fff;
        font-size: 1.08rem;
        padding: 0.92em 3.8em 0.92em 1.4em;
        border-radius: 14px 14px 0 0;
        font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
        transition: background 0.2s, border-color 0.2s;
      }
      #searchinput::placeholder { color: rgba(255,255,255,0.6); }
      #searchinput:focus { background: rgba(255,255,255,0.28); border-color: rgba(255,255,255,0.7); }
      #search-btn-inner {
        position: absolute;
        right: 0; top: 0; bottom: 0;
        width: 3.4em;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.15rem;
        cursor: pointer;
        color: rgba(255,255,255,0.9);
        background: rgba(255,255,255,0.22);
        border-left: 1px solid rgba(255,255,255,0.3);
        border-radius: 0 14px 0 0;
        transition: background 0.2s, color 0.2s;
        user-select: none;
      }
      #search-btn-inner:hover { background: rgba(255,255,255,0.38); color: #fff; }

      /* ── 搜索引擎 Tab ── */
      #sengine {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        box-sizing: border-box;
        background: rgba(255,255,255,0.12);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1.5px solid rgba(255,255,255,0.35);
        border-top: none;
        border-radius: 0 0 14px 14px;
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: none;
        -ms-overflow-style: none;
        -webkit-overflow-scrolling: touch;
        touch-action: pan-x;
        cursor: grab;
      }
      #sengine::-webkit-scrollbar { display: none; }
      .sengine-item {
        flex: 1 1 0;
        min-width: max-content;
        padding: 0.6em 1.1em;
        color: rgba(255,255,255,0.7);
        font-size: 0.88rem;
        cursor: pointer;
        white-space: nowrap;
        text-align: center;
        transition: color 0.2s, background 0.2s;
        border-right: 1px solid rgba(255,255,255,0.15);
        text-decoration: none;
        display: block;
        position: relative;
        letter-spacing: 0.5px;
      }
      .sengine-item:last-child { border-right: none; }
      .sengine-item:hover { color: #fff; background: rgba(255,255,255,0.12); }
      .sengine-item.active { color: #fff; font-weight: 700; background: rgba(255,255,255,0.18); }
      .sengine-item.active::after {
        content: '';
        position: absolute;
        bottom: 0; left: 25%; right: 25%;
        height: 2px;
        background: #fff;
        border-radius: 2px 2px 0 0;
      }

      /* ── 全局间距重置 ── */
      html { margin: 0 !important; padding: 0 !important; overflow-x: hidden; }
      body { margin: 0 !important; padding: 0 !important; }
      main, footer { display: block; margin: 0 !important; padding: 0 !important; }
      main {
        background: transparent !important;
        position: relative;
        margin-top: 0 !important;
        padding-top: 0 !important;
      }
      /* 覆盖Semantic UI masthead segment底部margin */
      .ui.inverted.vertical.masthead.segment { margin-bottom: 0 !important; padding-bottom: 0 !important; }
      main > .ui.container { padding: 0 2rem 4rem !important; max-width: 1280px !important; position: relative; z-index: 1; margin-top: 0 !important; }
      .ui.basic.segment { padding: 0 !important; margin: 0 !important; }

      /* ── 分组标题 ── */
      .ui.horizontal.divider.header {
        display: flex !important;
        align-items: center !important;
        color: #3a5a8a !important;
        font-size: 1rem !important;
        font-weight: 700 !important;
        letter-spacing: 3px !important;
        text-transform: none !important;
        margin: 2.2rem 0 1.2rem !important;
        padding: 0 !important;
        background: transparent !important;
        border: none !important;
        width: 100% !important;
        gap: 1em;
      }
      .ui.horizontal.divider.header::before,
      .ui.horizontal.divider.header::after {
        content: '' !important;
        display: block !important;
        flex: 1 !important;
        height: 1px !important;
        background: linear-gradient(90deg, transparent, #b0bbcc) !important;
      }
      .ui.horizontal.divider.header::after {
        background: linear-gradient(90deg, #b0bbcc, transparent) !important;
      }
      .ui.horizontal.divider.header i { color: #5580b8 !important; margin-right: 0.3em !important; font-size: 1em !important; }

      /* ── 卡片网格 ── */
      .ui.four.stackable.cards { margin: 0 !important; gap: 1rem !important; display: flex !important; flex-wrap: wrap !important; }
      .ui.four.stackable.cards > .card { margin: 0 !important; width: calc(25% - 0.76rem) !important; }

      /* ── 卡片样式 ── */
      @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
      .ui.cards > .card {
        border-radius: 16px !important;
        border: 1px solid rgba(0,0,0,0.055) !important;
        box-shadow: 0 2px 14px rgba(0,0,0,0.07) !important;
        transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease !important;
        background: #f5f6f8 !important;
        animation: fadeUp 0.45s ease both;
      }
      .ui.cards > .card:hover { transform: translateY(-6px) !important; box-shadow: 0 14px 36px rgba(0,0,0,0.13) !important; }
      .ui.cards > .card .content { padding: 1em 1.2em !important; border-top: none !important; display: flex !important; align-items: center !important; gap: 0.85em; min-height: 72px; }
      .ui.cards > .card .content .card-text { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; }
      .ui.cards > .card .content .header { font-size: 1rem !important; font-weight: 600 !important; color: #1a1a2e !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0 !important; line-height: 1.4; }
      .ui.cards > .card .content .meta { font-size: 0.82rem !important; color: #999 !important; margin-top: 4px !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.3; }
      .ui.cards > .card img.avatar {
        width: 38px !important; height: 38px !important;
        border-radius: 9px !important; flex-shrink: 0 !important;
        object-fit: contain !important; background: transparent !important;
        border: none !important; box-shadow: none !important; margin: 0 !important; float: none !important;
      }

      /* ── footer ── */
      .footer { background: #fff !important; border-top: 1px solid #eaecf0 !important; padding: 1.4rem 0 !important; text-align: center; font-size: 0.88rem; color: #aaa !important; letter-spacing: 0.5px; }
      .footer .ui.label { background: #f4f6f9 !important; color: #666 !important; border: 1px solid #e0e4ea !important; border-radius: 6px !important; font-size: 0.82rem !important; transition: background 0.2s; }
      .footer .ui.label:hover { background: #e8edf5 !important; }

      /* ── 夜间模式按钮 ── */
      #dark-mode-toggle {
        position: fixed; bottom: 28px; right: 28px; z-index: 999;
        width: 50px; height: 50px; border-radius: 50%;
        background: rgba(255,255,255,0.92); color: #555;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
        backdrop-filter: blur(8px);
      }
      #dark-mode-toggle:hover { transform: scale(1.12) rotate(15deg); box-shadow: 0 6px 24px rgba(0,0,0,0.2); }
      #dark-mode-toggle i { margin: 0; font-size: 1.2rem; }

      /* ── 夜间模式 ── */
      body.dark-mode {
        background-color: #12131a !important;
        background-image: none !important;
      }
      body.dark-mode main { background: transparent !important; }
      body.dark-mode .ui.cards > .card { background: #1e2030 !important; border-color: rgba(255,255,255,0.06) !important; box-shadow: 0 2px 14px rgba(0,0,0,0.4) !important; }
      body.dark-mode .ui.cards > .card:hover { box-shadow: 0 14px 36px rgba(99,179,237,0.12) !important; }
      body.dark-mode .ui.cards > .card .content .header { color: #e8eaf2 !important; }
      body.dark-mode .ui.cards > .card .content .meta { color: rgba(255,255,255,0.38) !important; }
      body.dark-mode .ui.horizontal.divider.header { color: #7baee8 !important; border: none !important; }
      body.dark-mode .ui.horizontal.divider.header i { color: #7baee8 !important; }
      body.dark-mode .ui.horizontal.divider.header::before { background: linear-gradient(90deg, transparent, #3a4a62) !important; display: block !important; }
      body.dark-mode .ui.horizontal.divider.header::after { background: linear-gradient(90deg, #3a4a62, transparent) !important; display: block !important; }
      body.dark-mode .footer { background: #191a24 !important; border-top-color: #2a2b38 !important; color: #555 !important; }
      body.dark-mode .footer .ui.label { background: #22232e !important; color: #888 !important; border-color: #333 !important; }
      body.dark-mode #dark-mode-toggle { background: #22232e; color: #fbbd08; }
      body.dark-mode .ui.input input { background: rgba(255,255,255,0.08) !important; color: #fff !important; border-color: rgba(255,255,255,0.15) !important; }
      body.dark-mode ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); }

      /* ══ 移动端响应式 ══ */
      @media (max-width: 1024px) {
        #clock-time { font-size: 4rem !important; }
        #clock-date { font-size: 1.1rem !important; }
        main > .ui.container { padding: 1rem 1.2rem 3rem !important; }
        .ui.four.stackable.cards > .card { width: calc(25% - 0.76rem) !important; }
      }
      @media (max-width: 768px) {
        #head { padding: 0 !important; }
        #clock-time { font-size: 3rem !important; letter-spacing: 4px !important; }
        #clock-date { font-size: 0.95rem !important; letter-spacing: 2px !important; }
        #nav .item { font-size: 0.9rem !important; }
        #search-wrap { width: calc(100vw - 2rem); }
        #searchinput { font-size: 1.08rem; padding: 0.95em 3.8em 0.95em 1.2em; }
        #search-btn-inner { font-size: 1.3rem; width: 3.5em; }
        .sengine-item { flex: 0 0 auto; font-size: 1.08rem; padding: 0.85em 1.5em; }
        main > .ui.container { padding: 0.8rem 0.9rem 2.5rem !important; }
        .ui.four.stackable.cards { gap: 0.75rem !important; }
        .ui.four.stackable.cards > .card { width: calc(50% - 0.38rem) !important; }
        .ui.horizontal.divider.header { font-size: 0.95rem !important; margin: 1.6rem 0 0.9rem !important; }
        .ui.cards > .card .content { padding: 0.9em 1em !important; }
        .ui.cards > .card .content .header { font-size: 0.95rem !important; }
        .ui.cards > .card .content .meta { font-size: 0.8rem !important; }
        #dark-mode-toggle { width: 44px; height: 44px; bottom: 20px; right: 16px; }
      }
      @media (max-width: 480px) {
        #head { padding: 0 !important; }
        #clock-time { font-size: 2.4rem !important; letter-spacing: 2px !important; }
        #clock-date { font-size: 0.82rem !important; letter-spacing: 1px !important; }
        #nav { padding-top: 1.1em !important; }
        #nav .item { font-size: 0.8rem !important; letter-spacing: 0.5px; }
        #search-wrap { width: calc(100vw - 1.2rem); }
        #searchinput { font-size: 1.05rem; padding: 0.9em 3.5em 0.9em 1.1em; }
        #search-btn-inner { font-size: 1.25rem; width: 3.3em; }
        .sengine-item { flex: 0 0 auto; font-size: 1.05rem; padding: 0.82em 1.4em; }
        main > .ui.container { padding: 0.5rem 0.6rem 2rem !important; }
        .ui.four.stackable.cards { gap: 0.6rem !important; }
        .ui.four.stackable.cards > .card { width: 100% !important; }
        .ui.cards > .card { border-radius: 12px !important; }
        .ui.cards > .card img.avatar { width: 26px !important; height: 26px !important; }
        .footer { font-size: 0.78rem; padding: 1rem 0.5rem !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;">
    ${index}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      // 时钟逻辑
      function updateClock() {
        var now = new Date();
        var weeks = ['\u661f\u671f\u65e5','\u661f\u671f\u4e00','\u661f\u671f\u4e8c','\u661f\u671f\u4e09','\u661f\u671f\u56db','\u661f\u671f\u4e94','\u661f\u671f\u516d'];
        var h = String(now.getHours()).padStart(2, '0');
        var m = String(now.getMinutes()).padStart(2, '0');
        var s = String(now.getSeconds()).padStart(2, '0');
        var y = now.getFullYear();
        var mo = String(now.getMonth() + 1).padStart(2, '0');
        var d = String(now.getDate()).padStart(2, '0');
        var w = weeks[now.getDay()];
        var timeEl = document.getElementById('clock-time');
        var dateEl = document.getElementById('clock-date');
        if (timeEl) timeEl.innerHTML = h + '<span class="clock-colon">:</span>' + m + '<span class="clock-colon">:</span>' + s;
        if (dateEl) dateEl.textContent = y + ' \u5e74 ' + mo + ' \u6708 ' + d + ' \u65e5\u3000' + w;
      }
      updateClock();
      setInterval(updateClock, 1000);

      // 搜索逻辑
      var currentTemplate = document.querySelector('.sengine-item.active') ? document.querySelector('.sengine-item.active').getAttribute('data-url') : '';
      document.querySelectorAll('.sengine-item').forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelectorAll('.sengine-item').forEach(function(e){ e.classList.remove('active'); });
          this.classList.add('active');
          currentTemplate = this.getAttribute('data-url');
        });
      });
      function doSearch() {
        var q = document.getElementById('searchinput').value;
        if (q) window.open(currentTemplate.replace('$s', encodeURIComponent(q)));
      }
      document.getElementById('searchinput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') doSearch();
      });

      // 搜索引擎Tab触摸滑动增强
      (function() {
        var el = document.getElementById('sengine');
        if (!el) return;
        var startX, startScrollLeft, isDragging = false;
        el.addEventListener('touchstart', function(e) {
          startX = e.touches[0].pageX;
          startScrollLeft = el.scrollLeft;
          isDragging = true;
        }, { passive: true });
        el.addEventListener('touchmove', function(e) {
          if (!isDragging) return;
          var dx = startX - e.touches[0].pageX;
          el.scrollLeft = startScrollLeft + dx;
        }, { passive: true });
        el.addEventListener('touchend', function() { isDragging = false; });
        // 鼠标拖动（PC端也可拖动）
        el.addEventListener('mousedown', function(e) {
          isDragging = true;
          startX = e.pageX - el.offsetLeft;
          startScrollLeft = el.scrollLeft;
          el.style.cursor = 'grabbing';
        });
        el.addEventListener('mousemove', function(e) {
          if (!isDragging) return;
          e.preventDefault();
          var x = e.pageX - el.offsetLeft;
          el.scrollLeft = startScrollLeft - (x - startX);
        });
        el.addEventListener('mouseup', function() { isDragging = false; el.style.cursor = ''; });
        el.addEventListener('mouseleave', function() { isDragging = false; el.style.cursor = ''; });
      })();
      // 夜间模式
      function applyTheme(isDark) {
        if (isDark) {
          $('body').addClass('dark-mode');
          $('#dark-mode-icon').removeClass('moon').addClass('sun');
        } else {
          $('body').removeClass('dark-mode');
          $('#dark-mode-icon').removeClass('sun').addClass('moon');
        }
      }
      var savedTheme = localStorage.getItem('dark-mode');
      if (savedTheme === 'true' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyTheme(true);
      }
      $('#dark-mode-toggle').on('click', function() {
        var isNowDark = !$('body').hasClass('dark-mode');
        applyTheme(isNowDark);
        localStorage.setItem('dark-mode', isNowDark);
      });

      // 强制清零 header/main 之间所有间距（覆盖Semantic UI运行时注入）
      document.addEventListener('DOMContentLoaded', function() {
        var style = document.createElement('style');
        style.textContent = [
          'body { margin:0!important; padding:0!important; }',
          '.pusher { padding-top:0!important; margin-top:0!important; }',
          'header { margin:0!important; }',
          'main { margin-top:0!important; padding-top:0!important; }',
          '.ui.inverted.vertical.masthead.segment { margin-bottom:0!important; }',
        ].join('');
        document.head.appendChild(style);
      });
    </script>
    <script src="https://obs.weizhen.xyz/sites.mouse.js"></script>
  </body>
  </html>`
}
