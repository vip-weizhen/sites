const config = {
  title: "Mr.wei-webserver",
  subtitle: "Keytop-Technology",
  search: true,
  search_engine: [
    { name: "必 应",   template: "https://cn.bing.com/search?q=$s" },
    { name: "谷 歌",   template: "https://www.google.com/search?q=$s" },
    { name: "百度地图", template: "https://map.baidu.com/search?querytype=s&da_src=shareurl&wd=$s" },
    { name: "高德地图", template: "https://ditu.amap.com/search?query=$s" },
    { name: "快递",    template: "https://www.kuaidi100.com/?coname=toutiao&nu=$s" },
    { name: "音乐",    template: "https://www.pjmp3.com/search.php?keyword=$s" },
    { name: "影视",    template: "https://v.ikanbot.com/search?q=$s" },
    { name: "调试",    template: "https://kt-ts.weizhen.xyz/?name=$s" },
    { name: "维保",    template: "https://kt-wb.weizhen.xyz/?name=$s" }
  ],
  lists: [
    {
      name: "办公常用", icon: "graduation cap",
      list: [
        { url: "https://exmail.qq.com/login",                                                        name: "腾讯企业邮箱",       desc: "专业、安全的企业邮箱服务",   icon: "https://obs.weizhen.xyz/favicon/exmail_logo.ico" },
        { url: "http://console608.keytop.cn:51320/console/wxcorp_login",                             name: "速停车",            desc: "速停车后台管理",            icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://yun.keytop.cn/kite/page/index.html",                                          name: "风筝",              desc: "风筝管理系统",              icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://yun.keytop.cn/kitework/page/login.html",                                      name: "工单",              desc: "工单管理系统",              icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://ktapps.keytop.cn/cloud/cloud-base/login",                                     name: "大物业",            desc: "车场集中管理平台",           icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://roadpark.keytop.cn/#/Login",                                                  name: "路内停车收费平台",    desc: "路内停车管理",              icon: "https://obs.weizhen.xyz/favicon/roadpark.ico" },
        { url: "https://park.keytop.cn/unityp/login",                                                name: "停车云助手",         desc: "停车云助手",                icon: "https://obs.weizhen.xyz/favicon/kt-yzs.png" },
        { url: "https://api.weizhen.xyz",                                                             name: "科拓智慧停车接口示例", desc: "接口示例",                  icon: "https://docs.apipost.net/favicon.ico" },
        { url: "https://yunwei.keytop.cn",                                                            name: "运维中心管理平台",    desc: "运维中心管理平台",           icon: "https://obs.weizhen.xyz/favicon/kt-yw.ico" },
        { url: "https://dc.keytop.cn/app/manage/index.html",                                         name: "BI系统",            desc: "科拓BI系统",                icon: "https://obs.weizhen.xyz/favicon/dc.keytop.ico" },
        { url: "https://file.weizhen.xyz",                                                            name: "文件传输服务",       desc: "文件传输服务",              icon: "https://obs.weizhen.xyz/favicon/file.png" },
        { url: "https://kos.keytop.cn/dkqfront/pc.html#/Login",                                      name: "商户助手PC版",       desc: "商户助手PC版",              icon: "https://obs.weizhen.xyz/favicon/kt-shzs.ico" },
        { url: "https://yongce.keytop.cn/unityp/login",                                              name: "科拓永策平台",       desc: "科拓永策平台",              icon: "https://obs.weizhen.xyz/favicon/kt-yc.png" },
        { url: "https://kp-open.keytop.cn/api/index.html",                                           name: "统一接口管理平台",    desc: "接口管理平台",              icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "https://kt-chongdz.keytop.cn/manage/login",                                          name: "大圣充电平台",       desc: "大圣充电",                  icon: "https://kt-chongdz.keytop.cn/manage/favicon.ico" },
        { url: "https://doc.weixin.qq.com/txdoc/apply_page?k=AD4AmwcwAA4CDxHO4iAMgA4Ab3AKg#/login", name: "维修替换料号表",     desc: "维修替换料号表(实时更新)",    icon: "https://obs.weizhen.xyz/favicon/docs.ico" },
        { url: "https://yongce-smwy.keytop.cn/unityp/login",                                         name: "科拓永策Pro平台",    desc: "科拓永策Pro平台",           icon: "https://obs.weizhen.xyz/favicon/kt-yc.png" },
        { url: "https://find-car-admin.keytop.cn/unityp/login",                                      name: "反向寻车引导",       desc: "反向寻车引导管理平台",        icon: "https://obs.weizhen.xyz/favicon/roadpark.ico" },
        { url: "https://pay-1208.weizhen.xyz",                                                        name: "测试车场查询缴费",    desc: "1208测试车场查询缴费",       icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://game.weizhen.xyz",                                                             name: "🖐️🐟️🐟️🐟️",   desc: "🖐️🐟️🐟️🐟️",           icon: "https://obs.weizhen.xyz/favicon/game.png" }
      ]
    },
    {
      name: "人工智能", icon: "comment alternate",
      list: [
        { url: "https://chat.deepseek.com",  name: "DeepSeek", desc: "探索未至之境",      icon: "https://obs.weizhen.xyz/favicon/deepseek.png" },
        { url: "https://www.doubao.com",      name: "豆包",     desc: "你好，我是豆包",    icon: "https://obs.weizhen.xyz/favicon/doubao.png" },
        { url: "https://chatgpt.com",         name: "ChatGPT",  desc: "有什么可以帮忙的？", icon: "https://obs.weizhen.xyz/favicon/chatgpt.ico" },
        { url: "https://gemini.google.com",   name: "Gemini",   desc: "你好！",            icon: "https://obs.weizhen.xyz/favicon/gemini.png" }
      ]
    },
    {
      name: "理想生活", icon: "coffee",
      list: [
        { url: "https://www.douyin.com/",   name: "抖音",    desc: "记录美好生活" },
        { url: "https://weibo.com/",        name: "新浪微博", desc: "随时随地发现新鲜事" },
        { url: "https://www.bilibili.com/", name: "哔哩哔哩", desc: "干杯~-bilibili" },
        { url: "https://www.iqiyi.com/",    name: "爱奇艺",  desc: "悦享品质" },
        { url: "https://www.youku.com/",    name: "优酷",    desc: "这世界很酷" },
        { url: "https://v.qq.com/",         name: "腾讯视频", desc: "不负好时光" },
        { url: "https://www.douyu.com/",    name: "斗鱼直播", desc: "每个人的直播平台" },
        { url: "https://www.huya.com/",     name: "虎牙直播", desc: "1秒即开看直播" }
      ]
    },
    {
      name: "何以解忧", icon: "shopping cart",
      list: [
        { url: "https://www.taobao.com/", name: "淘宝",     desc: "淘！我喜欢" },
        { url: "https://www.tmall.com/",  name: "天猫",     desc: "理想生活上天猫" },
        { url: "https://www.jd.com/",     name: "京东",     desc: "多快好省,购物上京东！" },
        { url: "https://www.amazon.com",  name: "亚马逊",   desc: "给你更大的世界" },
        { url: "https://www.1688.com",    name: "阿里1688", desc: "全球领先的采购批发平台" },
        { url: "https://www.goofish.com", name: "闲鱼",     desc: "闲不住?上闲鱼!" },
        { url: "https://www.suning.com",  name: "苏宁易购", desc: "换新到苏宁 省钱更省心!" },
        { url: "https://www.walmart.com", name: "沃尔玛",   desc: "让生活更美好" }
      ]
    },
    {
      name: "科学上网", icon: "cloud",
      list: [
        { url: "https://mail.google.com/",     name: "Gmail",     desc: "谷歌邮箱" },
        { url: "https://www.youtube.com/",     name: "Youtube",   desc: "油管" },
        { url: "https://www.facebook.com/",    name: "Facebook",  desc: "脸书" },
        { url: "https://twitter.com/",         name: "Twitter",   desc: "推特" },
        { url: "https://www.twitch.tv/",       name: "Twitch",    desc: "推趣" },
        { url: "https://www.instagram.com/",   name: "Instagram", desc: "照片墙" },
        { url: "https://web.telegram.org/#/im",name: "Telegram",  desc: "电报" },
        { url: "https://github.com/",          name: "GitHub",    desc: "代码托管平台" }
      ]
    },
    {
      name: "工具集", icon: "cogs",
      list: [
        { url: "https://tools.weizhen.xyz",                                          name: "IT-Tools",  desc: "助力开发人员和IT工作者", icon: "https://obs.weizhen.xyz/favicon/tools.png" },
        { url: "https://tts.weizhen.xyz",                                            name: "文本转语音", desc: "在线TTS转换工具",        icon: "https://obs.weizhen.xyz/favicon/TTS.png" },
        { url: "https://sub.weizhen.xyz/sub?token=e7a8244ea81ace268547f7cd66520350", name: "FQ代理节点", desc: "科学上网节点订阅链接",    icon: "https://obs.weizhen.xyz/favicon/v2rayn.png" },
        { url: "https://sub-api.weizhen.xyz",                                        name: "订阅转换",  desc: "在线订阅转换工具",        icon: "https://obs.weizhen.xyz/favicon/sub-api.ico" },
        { url: "https://tvhelper.weizhen.xyz",                                       name: "IPTV",     desc: "IPTV直播源",             icon: "https://obs.weizhen.xyz/favicon/iptv.ico" },
        { url: "https://tvbox.weizhen.xyz",                                          name: "TVBOX",    desc: "TVBOX点播源",            icon: "https://obs.weizhen.xyz/favicon/tvbox.png" },
        { url: "https://url.weizhen.xyz",                                            name: "网址缩短",  desc: "短链生成器",              icon: "https://obs.weizhen.xyz/favicon/url.png" },
        { url: "https://js.weizhen.xyz",                                             name: "镜像加速",  desc: "GitHub Docker加速",      icon: "https://obs.weizhen.xyz/favicon/docker.png" }
      ]
    }
  ]
};

const el = (tag, attrs, content) => `<${tag} ${attrs.join(' ')}>${content}</${tag}>`;

async function fetchWeatherByCoords(lat, lon, cityName) {
  const codes = {
    0:'☀️ 晴',1:'🌤️ 晴间多云',2:'⛅ 多云',3:'☁️ 阴',
    45:'🌫️ 雾',48:'🌫️ 霜雾',
    51:'🌦️ 小毛毛雨',53:'🌦️ 毛毛雨',55:'🌧️ 大毛毛雨',
    61:'🌧️ 小雨',63:'🌧️ 中雨',65:'🌧️ 大雨',
    71:'🌨️ 小雪',73:'❄️ 中雪',75:'❄️ 大雪',77:'🌨️ 冰晶',
    80:'🌦️ 小阵雨',81:'🌧️ 中阵雨',82:'⛈️ 强阵雨',
    95:'⛈️ 雷阵雨',96:'⛈️ 雷雨夹冰雹',99:'⛈️ 强雷雨'
  };
  const wx = await (await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FShanghai&forecast_days=3`)).json();
  const d = wx.daily;
  let html = `<div class="weather-city">📍 ${cityName}</div><div class="weather-days">`;
  ['今天','明天','后天'].forEach((label, i) => {
    const parts = (codes[d.weathercode[i]] || '🌤️ 未知').split(' ');
    html += `<div class="weather-day"><div class="weather-day-label">${label}</div><div class="weather-day-icon">${parts[0]}</div><div class="weather-day-temp">${Math.round(d.temperature_2m_min[i])}~${Math.round(d.temperature_2m_max[i])}°</div><div class="weather-day-desc">${parts[1]||''}</div></div>`;
  });
  return html + '</div>';
}

async function fetchWeather(ip) {
  try {
    const geo = await (await fetch(`http://ip-api.com/json/${ip}?fields=city,lat,lon&lang=zh-CN`)).json();
    if (!geo.lat || !geo.lon) return null;
    return await fetchWeatherByCoords(geo.lat, geo.lon, geo.city || '未知城市');
  } catch(e) { return null; }
}

function getLunarDate(date) {
  const cal = {
    2020:[[ 1,25],[30,29,30,29,30,30,29,30,30,29,30,29,30],4],
    2021:[[ 2,12],[29,30,29,30,29,30,29,30,30,29,30,30,29],0],
    2022:[[ 2, 1],[30,29,30,29,29,30,29,30,29,30,30,30,29],0],
    2023:[[ 1,22],[30,29,30,29,30,29,30,29,30,29,30,30,29],2],
    2024:[[ 2,10],[30,30,29,30,29,30,29,30,29,30,29,30,29],0],
    2025:[[ 1,29],[30,30,29,30,30,29,30,29,30,29,30,29,29],6],
    2026:[[ 2,17],[30,29,30,29,30,29,30,30,29,30,29,30],0],
    2027:[[ 2, 6],[30,30,29,30,29,30,29,30,29,30,30,29],0],
    2028:[[ 1,26],[30,29,30,30,29,30,29,30,29,30,29,30],0],
    2029:[[ 2,13],[30,29,30,29,30,30,29,30,29,30,29,30,29],6],
    2030:[[ 2, 3],[29,30,29,30,29,30,30,29,30,29,30,30],0],
  };
  const mN = ['正','二','三','四','五','六','七','八','九','十','冬','腊'];
  const dN = ['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十',
    '十一','十二','十三','十四','十五','十六','十七','十八','十九','二十',
    '廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];
  const y = new Date(date).getUTCFullYear();
  let ly = y, c = cal[y];
  if (c) { if (date < Date.UTC(y, c[0][0]-1, c[0][1])) { ly = y-1; c = cal[y-1]; } }
  else { c = cal[y-1]; ly = y-1; }
  if (!c) return '';
  let diff = Math.floor((date - Date.UTC(ly, c[0][0]-1, c[0][1])) / 86400000);
  const months = c[1], leapAt = c[2];
  let m = 0;
  for (m = 0; m < months.length; m++) { if (diff < months[m]) break; diff -= months[m]; }
  let dm = m + 1, isLeap = false;
  if (leapAt > 0 && m >= leapAt) { if (m === leapAt) { isLeap = true; dm = leapAt; } else { dm = m; } }
  return (isLeap ? '闰' : '') + mN[dm-1] + '月' + dN[diff];
}

function getFavicon(url) {
  try { return `https://icon.horse/icon/${new URL(url).hostname}`; } catch(e) { return ''; }
}

async function handleRequest(request) {
  const ua = request.headers.get('User-Agent') || '';
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  const ip = request.headers.get('CF-Connecting-IP') || '';
  const weatherHtml = isMobile ? null : await Promise.race([
    fetchWeather(ip),
    new Promise(r => setTimeout(() => r(null), 2000))
  ]);
  const hitokotoScript = isMobile ? '' : `<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer><\/script>`;
  const t = new Date(Date.now() + 8 * 3600000);
  const lunarStr = getLunarDate(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()));
  return new Response(renderHTML(renderIndex(weatherHtml, lunarStr), hitokotoScript), {
    headers: { 'content-type': 'text/html;charset=UTF-8' }
  });
}

addEventListener('fetch', event => event.respondWith(handleRequest(event.request)));

function renderMain() {
  const fb = 'https://obs.weizhen.xyz/Favicon.png';
  const card = (url, name, desc, icon) => {
    const imgAttrs = icon
      ? `src="${icon}" onerror="this.src='${fb}'"`
      : `src="${fb}" data-favicon="${getFavicon(url)}"`;
    return el('a', ['class="card"', `href=${url}`, 'target="_blank"'],
      el('div', ['class="content"'],
        `<img class="left floated avatar ui image" ${imgAttrs} loading="lazy">` +
        el('div', ['class="card-text"'],
          el('div', ['class="header"'], name) +
          el('div', ['class="meta"'], desc)
        )
      )
    );
  };
  const main = config.lists.map(item =>
    el('div', ['class="ui basic segment"'],
      el('div', ['class="section-divider"'], `<span class="section-divider-inner"><i class="${item.icon} icon"></i>${item.name}</span>`) +
      el('div', ['class="ui four stackable cards"'], item.list.map(l => card(l.url, l.name, l.desc, l.icon)).join(''))
    )
  ).join('');
  return el('main', [], el('div', ['class="ui container"'], main));
}

function renderIndex(weatherHtml, lunarStr) {
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
  const media = mediaList[Math.floor(Math.random() * mediaList.length)];
  const bg = media.endsWith('.mp4')
    ? `<video autoplay muted loop id="myVideo"><source src="${media}" type="video/mp4"></video>`
    : `<img id="myVideo" src="${media}" style="width:100%;height:100%;object-fit:cover;">`;
  const menu = config.search_engine.map((e, i) =>
    `<a class="sengine-item${i===0?' active':''}" data-url="${e.template}">${e.name}</a>`
  ).join('');
  const footer = el('footer', [],
    el('div', ['class="footer"'],
      'Powered by ' +
      el('a', ['class="ui label"', 'href="https://github.com/vip-weizhen/sites"', 'target="_blank"'], el('i', ['class="github icon"'], '') + 'Mr.wei') +
      ' &copy; Base on ' +
      el('a', ['class="ui label"'], el('i', ['class="balance scale icon"'], '') + '麻省理工学院执照') +
      ' Mail: vip.weizhen@gmail.com'
    )
  );
  return el('header', [],
    el('div', ['id="head"', 'class="ui inverted vertical masthead center aligned segment"'],
      el('div', ['class="video-background"'], bg) +
      `<div id="hitokoto-widget"><i class="quote left icon"></i><span id="hitokoto">...</span></div>` +
      `<div id="weather-widget"${weatherHtml ? '' : ' style="display:none"'}><div id="weather-input-wrap"><div class="weather-select-row"><select id="weather-prov-select" class="weather-sel"><option value="">选择省份</option></select><select id="weather-city-select" class="weather-sel"><option value="">选择城市</option></select><button id="weather-city-reset" title="恢复IP定位">↺</button></div></div><div id="weather-header"><div id="weather-content">${weatherHtml||''}</div><span id="weather-edit-btn" title="切换城市">✎</span></div></div>` +
      el('div', ['id="title"'],
        `<div id="clock-display"><div id="clock-time"></div><div id="clock-date" data-lunar="${lunarStr}"></div></div>` +
        (config.search ? `<div id="search-wrap"><div id="search-box"><input id="searchinput" type="search" placeholder="搜索你想要知道的......" autocomplete="off"><span id="search-btn-inner" onclick="doSearch()">&#128269;</span></div><div id="sengine">${menu}</div></div>` : '')
      )
    )
  ) + el('div', ['id="dark-mode-toggle"'], el('i', ['id="dark-mode-icon"', 'class="moon icon"'], '')) + renderMain() + footer;
}

function renderHTML(index, hitokotoScript = '') {
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
  <link rel="shortcut icon" href="https://obs.weizhen.xyz/sites-ico.png">
  <style>
    *,*::before,*::after{box-sizing:border-box}
    html{font-size:16px;overflow-x:hidden;margin:0!important;padding:0!important}
    body{background-color:#dde1ea!important;background-image:none!important;padding-top:0!important;margin:0!important}
    ::-webkit-scrollbar{width:6px}
    ::-webkit-scrollbar-track{background:transparent}
    ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.18);border-radius:3px}
    ::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.32)}
    .video-background{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:0}
    .video-background::after{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(to bottom,rgba(0,0,0,.05),rgba(0,0,0,.25))}
    #myVideo{position:absolute;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%,-50%)}
    #head{background:transparent!important;position:relative;min-height:0!important;padding:0 0 5em!important;margin-bottom:-1.5em!important;overflow:hidden;z-index:1}
    #title{position:relative;z-index:2;width:100%;display:flex;flex-direction:column;align-items:center;padding:0}
    #clock-display{margin-top:1.8em!important;margin-bottom:1.2em!important;display:flex;flex-direction:column;align-items:center;padding:0 40px}
    #clock-time{font-size:5rem;font-weight:700;color:#fff;letter-spacing:8px;line-height:1;font-family:'Courier New',Consolas,monospace;text-shadow:0 2px 24px rgba(0,0,0,.35)}
    #clock-date{font-size:1.25rem;color:rgba(255,255,255,.9);margin-top:10px;letter-spacing:4px;font-family:'Microsoft YaHei','PingFang SC',sans-serif;text-shadow:0 1px 8px rgba(0,0,0,.3)}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:.45}}
    .clock-colon{animation:pulse 1s ease-in-out infinite}
    #search-wrap{display:block;width:min(760px,calc(100vw - 2rem));filter:drop-shadow(0 8px 32px rgba(0,0,0,.3))}
    #search-box{position:relative;display:block;width:100%}
    #searchinput{display:block;width:100%;border:1.5px solid rgba(255,255,255,.45);outline:none;background:rgba(255,255,255,.18);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);color:#fff;font-size:1.08rem;padding:.92em 3.8em .92em 1.4em;border-radius:14px 14px 0 0;font-family:'Microsoft YaHei','PingFang SC',sans-serif;transition:background .2s,border-color .2s}
    #searchinput::placeholder{color:rgba(255,255,255,.6)}
    #searchinput:focus{background:rgba(255,255,255,.28);border-color:rgba(255,255,255,.7)}
    #search-btn-inner{position:absolute;right:0;top:0;bottom:0;width:3.4em;display:flex;align-items:center;justify-content:center;font-size:1.15rem;cursor:pointer;color:rgba(255,255,255,.9);background:rgba(255,255,255,.22);border-left:1px solid rgba(255,255,255,.3);border-radius:0 14px 0 0;transition:background .2s,color .2s;user-select:none}
    #search-btn-inner:hover{background:rgba(255,255,255,.38);color:#fff}
    #sengine{display:flex;flex-wrap:nowrap;width:100%;background:rgba(255,255,255,.12);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1.5px solid rgba(255,255,255,.35);border-top:none;border-radius:0 0 14px 14px;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;touch-action:pan-x;cursor:grab}
    #sengine::-webkit-scrollbar{display:none}
    .sengine-item{flex:1 1 0;min-width:max-content;padding:.6em 1.1em;color:rgba(255,255,255,.7);font-size:.88rem;cursor:pointer;white-space:nowrap;text-align:center;transition:color .2s,background .2s;border-right:1px solid rgba(255,255,255,.15);text-decoration:none;display:block;position:relative;letter-spacing:.5px}
    .sengine-item:last-child{border-right:none}
    .sengine-item:hover{color:#fff;background:rgba(255,255,255,.12)}
    .sengine-item.active{color:#fff;font-weight:700;background:rgba(255,255,255,.18)}
    .sengine-item.active::after{content:'';position:absolute;bottom:0;left:25%;right:25%;height:2px;background:#fff;border-radius:2px 2px 0 0}
    main,footer{display:block;margin:0!important;padding:0!important}
    main{background:transparent!important;position:relative;margin-top:0!important;padding-top:0!important}
    .ui.inverted.vertical.masthead.segment{margin-bottom:0!important;padding-bottom:0!important}
    main>.ui.container{padding:0 2rem 4rem!important;max-width:1280px!important;position:relative;z-index:1;margin-top:0!important}
    .ui.basic.segment{padding:0!important;margin:0!important}
    .section-divider{display:flex;align-items:center;margin:2rem 0 1.2rem;gap:1em}
    .section-divider::before,.section-divider::after{content:'';flex:1;height:1px;background:#c8cdd8}
    .section-divider-inner{display:inline-flex;align-items:center;gap:.4em;color:#5a6880;font-size:.92rem;font-weight:600;letter-spacing:2px;white-space:nowrap}
    .section-divider-inner i{color:#8899bb;font-size:1em;margin:0}
    .ui.four.stackable.cards{margin:0!important;gap:1rem!important;display:flex!important;flex-wrap:wrap!important}
    .ui.four.stackable.cards>.card{margin:0!important;width:calc(25% - .76rem)!important}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
    .ui.cards>.card{border-radius:16px!important;border:1px solid rgba(0,0,0,.055)!important;box-shadow:0 2px 14px rgba(0,0,0,.07)!important;transition:transform .28s cubic-bezier(.34,1.56,.64,1),box-shadow .28s ease!important;background:#f5f6f8!important;animation:fadeUp .45s ease both}
    .ui.cards>.card:hover{transform:translateY(-6px)!important;box-shadow:0 14px 36px rgba(0,0,0,.13)!important}
    .ui.cards>.card .content{padding:1em 1.2em!important;border-top:none!important;display:flex!important;align-items:center!important;gap:.85em;min-height:72px}
    .ui.cards>.card .content .card-text{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center}
    .ui.cards>.card .content .header{font-size:1rem!important;font-weight:600!important;color:#1a1a2e!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0!important;line-height:1.4}
    .ui.cards>.card .content .meta{font-size:.82rem!important;color:#999!important;margin-top:4px!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}
    .ui.cards>.card img.avatar{width:38px!important;height:38px!important;border-radius:9px!important;flex-shrink:0!important;object-fit:contain!important;background:transparent!important;border:none!important;box-shadow:none!important;margin:0!important;float:none!important}
    #weather-widget{position:absolute;top:14px;right:18px;z-index:3;background:rgba(0,0,0,.25);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.15);border-radius:18px;padding:16px 20px;color:#fff;font-family:'Microsoft YaHei','PingFang SC',sans-serif;min-width:280px}
    #weather-header{position:relative}
    #weather-edit-btn{position:absolute;top:-6px;right:-6px;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:.85rem;cursor:pointer;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.35);border-radius:50%;transition:background .2s,transform .2s;color:#fff;font-style:normal}
    #weather-edit-btn:hover{background:rgba(255,255,255,.38);transform:scale(1.15)}
    #weather-input-wrap{display:none;margin-bottom:10px;flex-direction:column;gap:6px}
    #weather-input-wrap.show{display:flex}
    .weather-select-row{display:flex;gap:6px}
    .weather-sel{flex:1;background:rgba(30,30,50,.88);border:1px solid rgba(255,255,255,.3);border-radius:8px;padding:5px 6px;color:#fff;font-size:.85rem;outline:none;font-family:'Microsoft YaHei','PingFang SC',sans-serif;cursor:pointer}
    .weather-sel option{background:#1e1e32;color:#fff}
    #weather-city-reset{align-self:stretch;padding:0 10px;background:transparent;border:1px solid rgba(255,255,255,.2);border-radius:8px;color:rgba(255,255,255,.6);font-size:.82rem;cursor:pointer;transition:background .2s;white-space:nowrap}
    #weather-city-reset:hover{background:rgba(255,255,255,.1);color:#fff}
    #hitokoto-widget{position:absolute;top:14px;left:18px;z-index:3;background:rgba(0,0,0,.25);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.15);border-radius:18px;padding:14px 18px;color:#fff;font-family:'Microsoft YaHei','PingFang SC',sans-serif;max-width:260px;display:flex;align-items:flex-start;gap:8px}
    #hitokoto-widget .quote.left.icon{font-size:1rem;opacity:.45;flex-shrink:0;margin-top:3px}
    #hitokoto-widget #hitokoto{font-size:.86rem;line-height:1.75;opacity:.88;letter-spacing:.5px}
    .weather-city{font-size:1rem;font-weight:600;opacity:.95;margin-bottom:12px;letter-spacing:1.5px;text-align:center}
    .weather-days{display:flex;gap:8px}
    .weather-day{flex:1;display:flex;flex-direction:column;align-items:center;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:12px 6px 10px;gap:6px;transition:background .2s}
    .weather-day:hover{background:rgba(255,255,255,.18)}
    .weather-day-label{font-size:.82rem;opacity:.7;letter-spacing:1px}
    .weather-day-icon{font-size:2.2rem;line-height:1.2}
    .weather-day-temp{font-size:.92rem;font-weight:700;letter-spacing:.5px}
    .weather-day-desc{font-size:.75rem;opacity:.65}
    @media(max-width:768px){#weather-widget,#hitokoto-widget{display:none}}
    .footer{background:#fff!important;border-top:1px solid #eaecf0!important;padding:1.4rem 0!important;text-align:center;font-size:.88rem;color:#aaa!important;letter-spacing:.5px}
    .footer .ui.label{background:#f4f6f9!important;color:#666!important;border:1px solid #e0e4ea!important;border-radius:6px!important;font-size:.82rem!important;transition:background .2s}
    .footer .ui.label:hover{background:#e8edf5!important}
    #dark-mode-toggle{position:fixed;bottom:28px;right:28px;z-index:999;width:50px;height:50px;border-radius:50%;background:rgba(255,255,255,.92);color:#555;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.15);transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .2s;backdrop-filter:blur(8px)}
    #dark-mode-toggle:hover{transform:scale(1.12) rotate(15deg);box-shadow:0 6px 24px rgba(0,0,0,.2)}
    #dark-mode-toggle i{margin:0;font-size:1.2rem}
    body.dark-mode{background-color:#12131a!important;background-image:none!important}
    body.dark-mode main{background:transparent!important}
    body.dark-mode .ui.cards>.card{background:#1e2030!important;border-color:rgba(255,255,255,.06)!important;box-shadow:0 2px 14px rgba(0,0,0,.4)!important}
    body.dark-mode .ui.cards>.card:hover{box-shadow:0 14px 36px rgba(99,179,237,.12)!important}
    body.dark-mode .ui.cards>.card .content .header{color:#e8eaf2!important}
    body.dark-mode .ui.cards>.card .content .meta{color:rgba(255,255,255,.38)!important}
    body.dark-mode .section-divider::before,body.dark-mode .section-divider::after{background:#2a3448}
    body.dark-mode .section-divider-inner{color:#6a82a0}
    body.dark-mode .section-divider-inner i{color:#4a6080}
    body.dark-mode .footer{background:#191a24!important;border-top-color:#2a2b38!important;color:#555!important}
    body.dark-mode .footer .ui.label{background:#22232e!important;color:#888!important;border-color:#333!important}
    body.dark-mode #dark-mode-toggle{background:#22232e;color:#fbbd08}
    body.dark-mode ::-webkit-scrollbar-thumb{background:rgba(255,255,255,.12)}
    @media(max-width:1024px){
      #clock-time{font-size:4rem!important}
      #clock-date{font-size:1.1rem!important}
      main>.ui.container{padding:1rem 1.2rem 3rem!important}
    }
    @media(max-width:768px){
      #head{padding:0!important}
      #clock-time{font-size:3rem!important;letter-spacing:4px!important}
      #clock-date{font-size:.95rem!important;letter-spacing:2px!important}
      #search-wrap{width:calc(100vw - 2rem)}
      #searchinput{font-size:1.08rem;padding:.95em 3.8em .95em 1.2em}
      #search-btn-inner{font-size:1.3rem;width:3.5em}
      .sengine-item{flex:0 0 auto;font-size:1.08rem;padding:.85em 1.5em}
      main>.ui.container{padding:.8rem .9rem 2.5rem!important}
      .ui.four.stackable.cards{gap:.75rem!important}
      .ui.four.stackable.cards>.card{width:calc(50% - .38rem)!important}
      .section-divider{margin:1.6rem 0 .9rem}
      .section-divider-inner{font-size:.88rem}
      .ui.cards>.card .content{padding:.9em 1em!important}
      .ui.cards>.card .content .header{font-size:.95rem!important}
      .ui.cards>.card .content .meta{font-size:.8rem!important}
      #dark-mode-toggle{width:44px;height:44px;bottom:20px;right:16px}
    }
    @media(max-width:480px){
      #head{padding:0!important}
      #clock-time{font-size:2.4rem!important;letter-spacing:2px!important}
      #clock-date{font-size:.82rem!important;letter-spacing:1px!important}
      #search-wrap{width:calc(100vw - 1.2rem)}
      #searchinput{font-size:1.05rem;padding:.9em 3.5em .9em 1.1em}
      #search-btn-inner{font-size:1.25rem;width:3.3em}
      .sengine-item{flex:0 0 auto;font-size:1.05rem;padding:.82em 1.4em}
      main>.ui.container{padding:.5rem .6rem 2rem!important}
      .ui.four.stackable.cards{gap:.6rem!important}
      .ui.four.stackable.cards>.card{width:100%!important}
      .ui.cards>.card{border-radius:12px!important}
      .ui.cards>.card img.avatar{width:26px!important;height:26px!important}
      .footer{font-size:.78rem;padding:1rem .5rem!important}
    }
  </style>
</head>
<body style="margin:0;padding:0;">
  ${index}
  ${hitokotoScript}
  <script>
    function updateClock(){
      var now=new Date(),h=String(now.getHours()).padStart(2,'0'),m=String(now.getMinutes()).padStart(2,'0'),s=String(now.getSeconds()).padStart(2,'0');
      var weeks=['\u661f\u671f\u65e5','\u661f\u671f\u4e00','\u661f\u671f\u4e8c','\u661f\u671f\u4e09','\u661f\u671f\u56db','\u661f\u671f\u4e94','\u661f\u671f\u516d'];
      var tEl=document.getElementById('clock-time'),dEl=document.getElementById('clock-date');
      if(tEl)tEl.innerHTML=h+'<span class="clock-colon">:</span>'+m+'<span class="clock-colon">:</span>'+s;
      if(dEl)dEl.innerHTML=now.getFullYear()+' \u5e74 '+String(now.getMonth()+1).padStart(2,'0')+' \u6708 '+String(now.getDate()).padStart(2,'0')+' \u65e5\u3000'+weeks[now.getDay()]+'\u3000'+(dEl.getAttribute('data-lunar')||'');
    }
    updateClock();setInterval(updateClock,1000);

    var curTpl=(document.querySelector('.sengine-item.active')||{getAttribute:function(){return'';}}).getAttribute('data-url');
    document.querySelectorAll('.sengine-item').forEach(function(e){
      e.addEventListener('click',function(){
        document.querySelectorAll('.sengine-item').forEach(function(x){x.classList.remove('active');});
        this.classList.add('active');curTpl=this.getAttribute('data-url');
      });
    });
    function doSearch(){var q=document.getElementById('searchinput').value;if(q)window.open(curTpl.replace('$s',encodeURIComponent(q)));}
    document.getElementById('searchinput').addEventListener('keypress',function(e){if(e.key==='Enter')doSearch();});

    (function(){
      var el=document.getElementById('sengine');if(!el)return;
      var sX,sL,drag=false;
      el.addEventListener('touchstart',function(e){sX=e.touches[0].pageX;sL=el.scrollLeft;drag=true;},{passive:true});
      el.addEventListener('touchmove',function(e){if(!drag)return;el.scrollLeft=sL+(sX-e.touches[0].pageX);},{passive:true});
      el.addEventListener('touchend',function(){drag=false;});
      el.addEventListener('mousedown',function(e){drag=true;sX=e.pageX-el.offsetLeft;sL=el.scrollLeft;el.style.cursor='grabbing';});
      el.addEventListener('mousemove',function(e){if(!drag)return;e.preventDefault();el.scrollLeft=sL-(e.pageX-el.offsetLeft-sX);});
      el.addEventListener('mouseup',function(){drag=false;el.style.cursor='';});
      el.addEventListener('mouseleave',function(){drag=false;el.style.cursor='';});
    })();

    function applyTheme(d){if(d){$('body').addClass('dark-mode');$('#dark-mode-icon').removeClass('moon').addClass('sun');}else{$('body').removeClass('dark-mode');$('#dark-mode-icon').removeClass('sun').addClass('moon');}}
    var st=localStorage.getItem('dark-mode');
    if(st==='true'||(!st&&window.matchMedia('(prefers-color-scheme: dark)').matches))applyTheme(true);
    $('#dark-mode-toggle').on('click',function(){var d=!$('body').hasClass('dark-mode');applyTheme(d);localStorage.setItem('dark-mode',d);});

    document.addEventListener('DOMContentLoaded',function(){
      var s=document.createElement('style');
      s.textContent='body{margin:0!important;padding:0!important}.pusher{padding-top:0!important;margin-top:0!important}header{margin:0!important}main{margin-top:0!important;padding-top:0!important}.ui.inverted.vertical.masthead.segment{margin-bottom:0!important}';
      document.head.appendChild(s);
    });

    window.addEventListener('load',function(){
      var fb='https://obs.weizhen.xyz/Favicon.png';
      document.querySelectorAll('img[data-favicon]').forEach(function(img){
        var src=img.getAttribute('data-favicon');if(!src)return;
        var t=new Image();
        t.onload=function(){img.src=src;};
        t.onerror=function(){img.src=fb;};
        t.src=src;
      });
    });

    (function(){
      var widget=document.getElementById('weather-widget');
      var editBtn=document.getElementById('weather-edit-btn');
      var inputWrap=document.getElementById('weather-input-wrap');
      var provSel=document.getElementById('weather-prov-select');
      var citySel=document.getElementById('weather-city-select');
      var resetBtn=document.getElementById('weather-city-reset');
      var content=document.getElementById('weather-content');
      if(!editBtn)return;

      var geoData={
        '北京':{'北京':[39.91,116.39],'朝阳区':[39.92,116.47],'海淀区':[39.96,116.30],'丰台区':[39.86,116.29],'通州区':[39.91,116.66],'昌平区':[40.22,116.23],'大兴区':[39.73,116.34]},
        '天津':{'天津':[39.13,117.20],'滨海新区':[39.00,117.71],'武清区':[39.38,117.04],'宝坻区':[39.72,117.31]},
        '河北':{'石家庄':[38.04,114.49],'唐山':[39.63,118.18],'秦皇岛':[39.94,119.60],'邯郸':[36.61,114.49],'邢台':[37.07,114.50],'保定':[38.87,115.49],'张家口':[40.82,114.89],'承德':[40.97,117.96],'沧州':[38.30,116.84],'廊坊':[39.54,116.70],'衡水':[37.74,115.67]},
        '山西':{'太原':[37.87,112.55],'大同':[40.09,113.30],'阳泉':[37.86,113.58],'长治':[36.20,113.12],'晋城':[35.50,112.85],'朔州':[39.34,112.43],'晋中':[37.69,112.75],'运城':[35.02,111.00],'忻州':[38.42,112.73],'临汾':[36.09,111.52],'吕梁':[37.52,111.14]},
        '内蒙古':{'呼和浩特':[40.84,111.75],'包头':[40.66,109.84],'乌海':[39.67,106.79],'赤峰':[42.27,118.96],'通辽':[43.65,122.27],'鄂尔多斯':[39.61,109.78],'呼伦贝尔':[49.21,119.77],'巴彦淖尔':[40.74,107.39],'乌兰察布':[41.03,113.13]},
        '辽宁':{'沈阳':[41.79,123.43],'大连':[38.91,121.61],'鞍山':[41.11,122.99],'抚顺':[41.88,123.96],'本溪':[41.30,123.77],'丹东':[40.13,124.38],'锦州':[41.09,121.15],'营口':[40.67,122.23],'阜新':[42.02,121.67],'辽阳':[41.27,123.17],'盘锦':[41.14,122.07],'铁岭':[42.30,123.85],'朝阳':[41.57,120.45],'葫芦岛':[40.73,120.84]},
        '吉林':{'长春':[43.88,125.35],'吉林':[43.85,126.56],'四平':[43.17,124.35],'辽源':[42.90,125.15],'通化':[41.73,125.94],'白山':[41.94,126.42],'松原':[45.14,124.83],'白城':[45.62,122.84],'延吉':[42.89,129.51]},
        '黑龙江':{'哈尔滨':[45.75,126.65],'齐齐哈尔':[47.36,123.96],'鸡西':[45.30,130.97],'鹤岗':[47.34,130.29],'双鸭山':[46.65,131.16],'大庆':[46.60,125.10],'伊春':[47.72,128.91],'佳木斯':[46.80,130.32],'七台河':[45.77,131.00],'牡丹江':[44.58,129.60],'黑河':[50.25,127.53],'绥化':[46.64,126.97]},
        '上海':{'上海':[31.23,121.47],'浦东新区':[31.22,121.54],'黄浦区':[31.23,121.48],'徐汇区':[31.19,121.44],'长宁区':[31.22,121.42],'静安区':[31.23,121.45],'普陀区':[31.25,121.40],'虹口区':[31.26,121.49],'杨浦区':[31.26,121.52],'闵行区':[31.11,121.38],'宝山区':[31.40,121.49],'嘉定区':[31.38,121.27],'松江区':[31.03,121.23],'青浦区':[31.15,121.12],'奉贤区':[30.92,121.47],'崇明区':[31.62,121.40]},
        '江苏':{'南京':[32.06,118.77],'无锡':[31.57,120.29],'徐州':[34.27,117.18],'常州':[31.78,119.97],'苏州':[31.30,120.60],'南通':[31.97,120.87],'连云港':[34.59,119.22],'淮安':[33.55,119.02],'盐城':[33.35,120.16],'扬州':[32.39,119.41],'镇江':[32.19,119.43],'泰州':[32.46,119.92],'宿迁':[33.96,118.27]},
        '浙江':{'杭州':[30.27,120.15],'宁波':[29.87,121.54],'温州':[28.00,120.67],'嘉兴':[30.75,120.76],'湖州':[30.89,120.09],'绍兴':[30.00,120.58],'金华':[29.08,119.65],'衢州':[28.94,118.87],'舟山':[30.00,122.20],'台州':[28.66,121.42],'丽水':[28.45,119.92]},
        '安徽':{'合肥':[31.86,117.28],'芜湖':[31.33,118.36],'蚌埠':[32.92,117.37],'淮南':[32.63,116.99],'马鞍山':[31.68,118.51],'淮北':[33.96,116.80],'铜陵':[30.94,117.81],'安庆':[30.54,117.05],'黄山':[29.71,118.34],'滁州':[32.30,118.31],'阜阳':[32.90,115.82],'宿州':[33.65,116.96],'六安':[31.74,116.52],'亳州':[33.84,115.78],'池州':[30.66,117.49],'宣城':[30.94,118.76]},
        '福建':{'福州':[26.07,119.30],'厦门':[24.48,118.08],'莆田':[25.45,119.01],'三明':[26.27,117.64],'泉州':[24.87,118.68],'漳州':[24.51,117.65],'南平':[26.65,118.17],'龙岩':[25.08,117.02],'宁德':[26.67,119.55]},
        '江西':{'南昌':[28.68,115.88],'景德镇':[29.27,117.18],'萍乡':[27.62,113.85],'九江':[29.73,116.00],'新余':[27.82,114.92],'鹰潭':[28.27,117.07],'赣州':[25.85,114.93],'吉安':[27.11,114.97],'宜春':[27.80,114.40],'抚州':[27.95,116.36],'上饶':[28.46,117.97]},
        '山东':{'济南':[36.67,116.99],'青岛':[36.07,120.38],'淄博':[36.81,118.06],'枣庄':[34.81,117.32],'东营':[37.46,118.67],'烟台':[37.46,121.45],'潍坊':[36.71,119.11],'济宁':[35.41,116.59],'泰安':[36.19,117.09],'威海':[37.50,122.12],'日照':[35.42,119.53],'临沂':[35.10,118.36],'德州':[37.45,116.36],'聊城':[36.45,115.99],'滨州':[37.38,118.02],'菏泽':[35.24,115.48]},
        '河南':{'郑州':[34.76,113.66],'开封':[34.80,114.31],'洛阳':[34.68,112.45],'平顶山':[33.77,113.30],'安阳':[36.10,114.39],'鹤壁':[35.75,114.30],'新乡':[35.31,113.92],'焦作':[35.24,113.24],'濮阳':[35.76,115.03],'许昌':[34.04,113.86],'漯河':[33.58,114.02],'三门峡':[34.77,111.20],'南阳':[32.99,112.53],'商丘':[34.41,115.65],'信阳':[32.13,114.09],'周口':[33.63,114.65],'驻马店':[33.01,114.02]},
        '湖北':{'武汉':[30.59,114.30],'黄石':[30.20,115.04],'十堰':[32.65,110.36],'宜昌':[30.70,111.29],'襄阳':[32.01,112.12],'鄂州':[30.40,114.89],'荆门':[31.04,112.20],'孝感':[30.93,113.92],'荆州':[30.33,112.24],'黄冈':[30.45,114.87],'咸宁':[29.88,114.32],'随州':[31.69,113.38]},
        '湖南':{'长沙':[28.19,112.98],'株洲':[27.83,113.13],'湘潭':[27.85,112.90],'衡阳':[26.89,112.57],'邵阳':[27.24,111.46],'岳阳':[29.37,113.13],'常德':[29.04,111.69],'张家界':[29.13,110.48],'益阳':[28.59,112.36],'郴州':[25.78,113.02],'永州':[26.42,111.61],'怀化':[27.57,110.00],'娄底':[27.70,112.00]},
        '广东':{'广州':[23.13,113.26],'深圳':[22.54,114.06],'珠海':[22.27,113.57],'汕头':[23.35,116.68],'佛山':[23.02,113.12],'韶关':[24.80,113.62],'河源':[23.74,114.70],'梅州':[24.30,116.12],'惠州':[23.11,114.42],'汕尾':[22.78,115.38],'东莞':[23.04,113.75],'中山':[22.52,113.40],'江门':[22.58,113.08],'阳江':[21.86,111.98],'湛江':[21.27,110.36],'茂名':[21.66,110.93],'肇庆':[23.05,112.47],'清远':[23.70,113.05],'潮州':[23.66,116.62],'揭阳':[23.55,116.37],'云浮':[22.92,112.04]},
        '广西':{'南宁':[22.82,108.32],'柳州':[24.33,109.41],'桂林':[25.28,110.29],'梧州':[23.48,111.32],'北海':[21.48,109.12],'防城港':[21.69,108.36],'钦州':[21.97,108.62],'贵港':[23.11,109.60],'玉林':[22.64,110.18],'百色':[23.90,106.62],'贺州':[24.41,111.57],'河池':[24.70,108.08],'来宾':[23.75,109.23],'崇左':[22.38,107.37]},
        '海南':{'海口':[20.04,110.34],'三亚':[18.25,109.51],'三沙':[16.84,112.34],'儋州':[19.52,109.58],'文昌':[19.54,110.80],'琼海':[19.26,110.48],'万宁':[18.80,110.40],'东方':[19.10,108.65]},
        '重庆':{'重庆':[29.56,106.55],'渝中区':[29.56,106.55],'江北区':[29.61,106.53],'南岸区':[29.52,106.56],'九龙坡区':[29.51,106.50],'渝北区':[29.72,106.63],'北碚区':[29.82,106.43],'万州区':[30.81,108.41],'涪陵区':[29.70,107.39],'合川区':[29.97,106.28]},
        '四川':{'成都':[30.66,104.07],'自贡':[29.34,104.78],'攀枝花':[26.58,101.72],'泸州':[28.87,105.44],'德阳':[31.13,104.40],'绵阳':[31.47,104.73],'广元':[32.44,105.85],'遂宁':[30.53,105.59],'内江':[29.58,105.06],'乐山':[29.56,103.77],'南充':[30.80,106.11],'眉山':[30.07,103.85],'宜宾':[28.75,104.64],'广安':[30.47,106.63],'达州':[31.21,107.50],'雅安':[30.00,103.00],'巴中':[31.87,106.75],'资阳':[30.13,104.63]},
        '贵州':{'贵阳':[26.58,106.72],'六盘水':[26.58,104.84],'遵义':[27.73,106.93],'安顺':[26.25,105.93],'毕节':[27.30,105.28],'铜仁':[27.72,109.18],'凯里':[26.58,107.98],'都匀':[26.27,107.52],'兴义':[25.09,104.90]},
        '云南':{'昆明':[25.05,102.72],'曲靖':[25.52,103.80],'玉溪':[24.35,102.55],'保山':[25.12,99.18],'昭通':[27.34,103.72],'丽江':[26.86,100.22],'普洱':[22.77,100.97],'临沧':[23.89,100.09],'大理':[25.61,100.26],'德宏':[24.44,98.58],'西双版纳':[22.01,100.80]},
        '西藏':{'拉萨':[29.65,91.13],'日喀则':[29.27,88.88],'昌都':[31.14,97.18],'林芝':[29.65,94.36],'山南':[29.24,91.77],'那曲':[31.48,92.07]},
        '陕西':{'西安':[34.27,108.95],'铜川':[34.89,108.94],'宝鸡':[34.36,107.24],'咸阳':[34.33,108.72],'渭南':[34.50,109.51],'延安':[36.60,109.49],'汉中':[33.07,107.03],'榆林':[38.29,109.74],'安康':[32.68,109.02],'商洛':[33.87,109.94]},
        '甘肃':{'兰州':[36.06,103.79],'嘉峪关':[39.80,98.30],'金昌':[38.52,102.19],'白银':[36.55,104.14],'天水':[34.58,105.72],'武威':[37.93,102.64],'张掖':[38.93,100.46],'平凉':[35.55,106.68],'酒泉':[39.74,98.50],'庆阳':[35.71,107.64],'定西':[35.58,104.63],'陇南':[33.40,104.92]},
        '青海':{'西宁':[36.62,101.77],'海东':[36.48,102.41],'格尔木':[36.40,94.90],'德令哈':[37.37,97.37]},
        '宁夏':{'银川':[38.47,106.27],'石嘴山':[38.98,106.39],'吴忠':[37.99,106.21],'固原':[36.02,106.28],'中卫':[37.52,105.20]},
        '新疆':{'乌鲁木齐':[43.80,87.60],'克拉玛依':[45.60,84.87],'吐鲁番':[42.95,89.19],'哈密':[42.82,93.51],'喀什':[39.47,75.99],'和田':[37.11,79.93],'伊宁':[43.91,81.32],'库尔勒':[41.72,86.17],'阿克苏':[41.17,80.26]},
        '香港':{'香港':[22.32,114.17]},
        '澳门':{'澳门':[22.20,113.55]},
        '台湾':{'台北':[25.05,121.53],'新北':[25.01,121.47],'台中':[24.15,120.68],'台南':[22.99,120.21],'高雄':[22.62,120.31],'桃园':[24.99,121.30]}
      };

      var wmoDesc={0:'☀️ 晴',1:'🌤️ 晴间多云',2:'⛅ 多云',3:'☁️ 阴',45:'🌫️ 雾',48:'🌫️ 霜雾',51:'🌦️ 小毛毛雨',53:'🌦️ 毛毛雨',55:'🌧️ 大毛毛雨',61:'🌧️ 小雨',63:'🌧️ 中雨',65:'🌧️ 大雨',71:'🌨️ 小雪',73:'❄️ 中雪',75:'❄️ 大雪',77:'🌨️ 冰晶',80:'🌦️ 小阵雨',81:'🌧️ 中阵雨',82:'⛈️ 强阵雨',95:'⛈️ 雷阵雨',96:'⛈️ 雷雨夹冰雹',99:'⛈️ 强雷雨'};

      Object.keys(geoData).forEach(function(prov){
        var o=document.createElement('option');o.value=prov;o.textContent=prov;provSel.appendChild(o);
      });

      provSel.addEventListener('change',function(){
        var prov=provSel.value;
        citySel.innerHTML='<option value="">选择城市</option>';
        if(!prov)return;
        Object.keys(geoData[prov]).forEach(function(city){
          var o=document.createElement('option');o.value=city;o.textContent=city;citySel.appendChild(o);
        });
      });

      function renderWeather(city,daily){
        var html='<div class="weather-city">📍 '+city+'</div><div class="weather-days">';
        ['今天','明天','后天'].forEach(function(label,i){
          var parts=((wmoDesc[daily.weathercode[i]])||'🌤️ 未知').split(' ');
          html+='<div class="weather-day"><div class="weather-day-label">'+label+'</div><div class="weather-day-icon">'+parts[0]+'</div><div class="weather-day-temp">'+Math.round(daily.temperature_2m_min[i])+'~'+Math.round(daily.temperature_2m_max[i])+'°</div><div class="weather-day-desc">'+(parts[1]||'')+'</div></div>';
        });
        return html+'</div>';
      }

      function loadCity(prov,city){
        var coords=geoData[prov]&&geoData[prov][city];if(!coords)return;
        content.innerHTML='<div class="weather-city">📍 '+city+' <span style="opacity:.5;font-size:.8em">加载中...</span></div>';
        widget.style.display='';
        fetch('https://api.open-meteo.com/v1/forecast?latitude='+coords[0]+'&longitude='+coords[1]+'&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FShanghai&forecast_days=3')
          .then(function(r){return r.json();})
          .then(function(wx){content.innerHTML=renderWeather(city,wx.daily);})
          .catch(function(){content.innerHTML='<div class="weather-city">📍 '+city+' <span style="opacity:.6">获取失败</span></div>';});
      }

      var sp=localStorage.getItem('weather-prov'),sc=localStorage.getItem('weather-city');
      if(sp&&sc&&geoData[sp]&&geoData[sp][sc])loadCity(sp,sc);

      editBtn.addEventListener('click',function(){
        inputWrap.classList.toggle('show');
        if(inputWrap.classList.contains('show')&&sp){
          provSel.value=sp;
          provSel.dispatchEvent(new Event('change'));
          setTimeout(function(){if(sc)citySel.value=sc;},0);
        }
      });

      citySel.addEventListener('change',function(){
        var prov=provSel.value,city=citySel.value;
        if(!prov||!city)return;
        localStorage.setItem('weather-prov',prov);
        localStorage.setItem('weather-city',city);
        sp=prov;sc=city;
        loadCity(prov,city);
        inputWrap.classList.remove('show');
      });

      resetBtn.addEventListener('click',function(){
        localStorage.removeItem('weather-prov');
        localStorage.removeItem('weather-city');
        sp=null;sc=null;
        inputWrap.classList.remove('show');
        provSel.value='';
        citySel.innerHTML='<option value="">选择城市</option>';
      });
    })();
  </script>
  <script src="https://obs.weizhen.xyz/sites.mouse.js"></script>
</body>
</html>`;
}
