const config = {
  title: "Mr.wei-webserver",
  subtitle: "Keytop-Technology",
  logo_icon: "sitemap",
  hitokoto: true,
  search: true,
  search_engine: [
    { name: "必 应", template: "https://cn.bing.com/search?q=$s" },
    { name: "谷 歌", template: "https://www.google.com/search?q=$s" },
    { name: "百度地图", template: "https://map.baidu.com/search?querytype=s&da_src=shareurl&wd=$s" },
    { name: "高德地图", template: "https://ditu.amap.com/search?query=$s" },
    { name: "快递", template: "https://www.kuaidi100.com/?coname=toutiao&nu=$s" },
    { name: "音乐", template: "https://www.pjmp3.com/search.php?keyword=$s" },
    { name: "影视", template: "https://v.ikanbot.com/search?q=$s" },
    { name: "调试", template: "https://kt-ts.weizhen.xyz/?name=$s" },
    { name: "维保", template: "https://kt-wb.weizhen.xyz/?name=$s" }
  ],
  lists: [
    {
      name: "办公常用", icon: "graduation cap",
      list: [
        { url: "https://exmail.qq.com/login", name: "腾讯企业邮箱", desc: "专业、安全的企业邮箱服务" },
        { url: "http://console608.keytop.cn:51320/console/wxcorp_login", name: "速停车", desc: "速停车后台管理", icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://yun.keytop.cn/kite/page/index.html", name: "风筝", desc: "风筝管理系统", icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://yun.keytop.cn/kitework/page/login.html", name: "工单", desc: "工单管理系统", icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://ktapps.keytop.cn/cloud/cloud-base/login", name: "大物业", desc: "车场集中管理平台", icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://roadpark.keytop.cn/#/Login", name: "路内停车收费平台", desc: "路内停车管理" },
        { url: "https://park.keytop.cn/unityp/login", name: "停车云助手", desc: "停车云助手" , icon: "https://obs.weizhen.xyz/favicon/kt-yzs.png"},
        { url: "https://api.weizhen.xyz", name: "科拓智慧停车接口示例", desc: "接口示例", icon: "https://docs.apipost.net/favicon.ico"},
        { url: "https://yunwei.keytop.cn", name: "运维中心管理平台", desc: "运维中心管理平台" },
        { url: "https://dc.keytop.cn/app/manage/index.html", name: "BI系统", desc: "科拓BI系统", icon: "https://obs.weizhen.xyz/favicon/dc.keytop.ico" },
        { url: "https://file.weizhen.xyz", name: "文件传输服务", desc: "文件传输服务",icon: "https://obs.weizhen.xyz/favicon/file.png" },
        { url: "https://kos.keytop.cn/dkqfront/pc.html#/Login", name: "商户助手PC版", desc: "商户助手PC版" , icon: "https://obs.weizhen.xyz/favicon/kt-yzs.png"},
        { url: "https://yongce.keytop.cn/unityp/login", name: "科拓永策平台", desc: "科拓永策平台", icon: "https://yongce.keytop.cn/unityp/img/website.1c149054.png" },
        { url: "https://kp-open.keytop.cn/api/index.html", name: "统一接口管理平台", desc: "接口管理平台", icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "https://kt-chongdz.keytop.cn/manage/login", name: "大圣充电平台", desc: "大圣充电", icon: "https://kt-chongdz.keytop.cn/manage/favicon.ico" },
        { url: "https://doc.weixin.qq.com/txdoc/apply_page?k=AD4AmwcwAA4CDxHO4iAMgA4Ab3AKg#/login", name: "维修替换料号表", desc: "维修替换料号表(实时更新)",icon: "https://obs.weizhen.xyz/favicon/docs.ico" },
        { url: "https://yongce-smwy.keytop.cn/unityp/login", name: "科拓永策Pro平台", desc: "科拓永策Pro平台", icon: "https://yongce.keytop.cn/unityp/img/website.1c149054.png" },
        { url: "https://find-car-admin.keytop.cn/unityp/login", name: "反向寻车引导", desc: "反向寻车引导管理平台", icon: "https://find-car-admin.keytop.cn/fcfront/favicon.ico" },
        { url: "https://pay-1208.weizhen.xyz", name: "测试车场查询缴费", desc: "1208测试车场查询缴费", icon: "https://obs.weizhen.xyz/favicon/keytop-favicon.ico" },
        { url: "http://game.weizhen.xyz", name: "🖐️🐟️🐟️🐟️", desc: "🖐️🐟️🐟️🐟️" }
      ]
    },
    {
      name: "人工智能", icon: "comment alternate",
      list: [
        { url: "https://chat.deepseek.com", name: "DeepSeek", desc: "探索未至之境" },
        { url: "https://www.doubao.com", name: "豆包", desc: "你好，我是豆包" ,icon: "https://obs.weizhen.xyz/favicon/doubao.png"},
        { url: "https://chatgpt.com", name: "ChatGPT", desc: "有什么可以帮忙的？", icon: "https://obs.weizhen.xyz/favicon/chatgpt.ico"},
        { url: "https://gemini.google.com", name: "Gemini", desc: "你好！" }
      ]
    },
    {
      name: "理想生活", icon: "coffee",
      list: [
        { url: "https://www.douyin.com/", name: "抖音", desc: "记录美好生活" },
        { url: "https://weibo.com/", name: "新浪微博", desc: "随时随地发现新鲜事" },
        { url: "https://www.bilibili.com/", name: "哔哩哔哩", desc: "干杯~-bilibili" },
        { url: "https://www.iqiyi.com/", name: "爱奇艺", desc: "悦享品质" },
        { url: "https://www.youku.com/", name: "优酷", desc: "这世界很酷" },
        { url: "https://v.qq.com/", name: "腾讯视频", desc: "不负好时光" },
        { url: "https://www.douyu.com/", name: "斗鱼直播", desc: "每个人的直播平台" },
        { url: "https://www.huya.com/", name: "虎牙直播", desc: "1秒即开看直播" }
      ]
    },
    {
      name: "何以解忧", icon: "shopping cart",
      list: [
        { url: "https://www.taobao.com/", name: "淘宝", desc: "淘！我喜欢" },
        { url: "https://www.tmall.com/", name: "天猫", desc: "理想生活上天猫" },
        { url: "https://www.jd.com/", name: "京东", desc: "多快好省,购物上京东！" },
        { url: "https://www.amazon.com", name: "亚马逊", desc: "给你更大的世界" },
        { url: "https://www.1688.com", name: "阿里1688", desc: "全球领先的采购批发平台" },
        { url: "https://www.goofish.com", name: "闲鱼", desc: "闲不住?上闲鱼!" },
        { url: "https://www.suning.com", name: "苏宁易购", desc: "换新到苏宁 省钱更省心!" },
        { url: "https://www.walmart.com", name: "沃尔玛", desc: "让生活更美好" }
      ]
    },
    {
      name: "科学上网", icon: "cloud",
      list: [
        { url: "https://mail.google.com/", name: "Gmail", desc: "谷歌邮箱" },
        { url: "https://www.youtube.com/", name: "Youtube", desc: "油管" },
        { url: "https://www.facebook.com/", name: "Facebook", desc: "脸书" },
        { url: "https://twitter.com/", name: "Twitter", desc: "推特" },
        { url: "https://www.twitch.tv/", name: "Twitch", desc: "推趣" },
        { url: "https://www.instagram.com/", name: "Instagram", desc: "照片墙" },
        { url: "https://web.telegram.org/#/im", name: "Telegram", desc: "电报" },
        { url: "https://github.com/", name: "GitHub", desc: "代码托管平台" }
      ]
    },
    {
      name: "工具集", icon: "cogs",
      list: [
        { url: "https://tools.weizhen.xyz", name: "IT-Tools", desc: "助力开发人员和IT工作者",icon: "https://obs.weizhen.xyz/favicon/tools.png" },
        { url: "https://tts.weizhen.xyz", name: "文本转语音", desc: "在线TTS转换工具" },
        { url: "https://sub.weizhen.xyz/sub?token=e7a8244ea81ace268547f7cd66520350", name: "FQ代理节点", desc: "科学上网节点订阅链接" },
        { url: "https://sub-api.weizhen.xyz", name: "订阅转换", desc: "在线订阅转换工具" },
        { url: "https://tvhelper.weizhen.xyz", name: "IPTV", desc: "IPTV直播源" },
        { url: "https://tvbox.weizhen.xyz", name: "TVBOX", desc: "TVBOX点播源" },
        { url: "https://url.weizhen.xyz", name: "网址缩短", desc: "短链生成器" },
        { url: "https://js.weizhen.xyz", name: "镜像加速", desc: "GitHub Docker加速" }
      ]
    }
  ]
};

const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function fetchWeather(clientIP) {
  try {
    const geoRes = await fetch('http://ip-api.com/json/' + (clientIP || '') + '?fields=city,lat,lon&lang=zh-CN');
    const geo = await geoRes.json();
    const city = geo.city || '未知城市';
    const lat = geo.lat, lon = geo.lon;
    if (!lat || !lon) return null;
    const wxRes = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FShanghai&forecast_days=3');
    const wx = await wxRes.json();
    const daily = wx.daily;
    const codes = {
      0:'☀️ 晴', 1:'🌤️ 晴间多云', 2:'⛅ 多云', 3:'☁️ 阴',
      45:'🌫️ 雾', 48:'🌫️ 霜雾',
      51:'🌦️ 小毛毛雨', 53:'🌦️ 毛毛雨', 55:'🌧️ 大毛毛雨',
      61:'🌧️ 小雨', 63:'🌧️ 中雨', 65:'🌧️ 大雨',
      71:'🌨️ 小雪', 73:'❄️ 中雪', 75:'❄️ 大雪', 77:'🌨️ 冰晶',
      80:'🌦️ 小阵雨', 81:'🌧️ 中阵雨', 82:'⛈️ 强阵雨',
      95:'⛈️ 雷阵雨', 96:'⛈️ 雷雨夹冰雹', 99:'⛈️ 强雷雨'
    };
    const labels = ['今天', '明天', '后天'];
    let html = '<div class="weather-city">📍 ' + city + '</div><div class="weather-days">';
    for (let i = 0; i < 3; i++) {
      const label = codes[daily.weathercode[i]] || '🌤️ 未知';
      const icon = label.split(' ')[0];
      const desc = label.split(' ')[1] || '';
      html += `<div class="weather-day"><div class="weather-day-label">${labels[i]}</div><div class="weather-day-icon">${icon}</div><div class="weather-day-temp">${Math.round(daily.temperature_2m_min[i])}~${Math.round(daily.temperature_2m_max[i])}°</div><div class="weather-day-desc">${desc}</div></div>`;
    }
    return html + '</div>';
  } catch(e) {
    return null;
  }
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
  const mNames = ['正','二','三','四','五','六','七','八','九','十','冬','腊'];
  const dNames = ['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十',
    '十一','十二','十三','十四','十五','十六','十七','十八','十九','二十',
    '廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];
  const d = new Date(date);
  const y = d.getUTCFullYear();
  let lunarYear = y, c = cal[y];
  if (c) {
    if (date < Date.UTC(y, c[0][0]-1, c[0][1])) { lunarYear = y-1; c = cal[y-1]; }
  } else {
    c = cal[y-1]; lunarYear = y-1;
  }
  if (!c) return '';
  const cj = Date.UTC(lunarYear, c[0][0]-1, c[0][1]);
  let diff = Math.floor((date - cj) / 86400000);
  const months = c[1], leapAt = c[2];
  let m = 0, isLeap = false;
  for (m = 0; m < months.length; m++) {
    if (diff < months[m]) break;
    diff -= months[m];
  }
  let displayMonth = m + 1;
  if (leapAt > 0 && m >= leapAt) {
    if (m === leapAt) { isLeap = true; displayMonth = leapAt; }
    else { displayMonth = m; }
  }
  return (isLeap?'闰':'') + mNames[displayMonth-1] + '月' + dNames[diff];
}

function getFavicon(url) {
  try {
    return `https://icon.horse/icon/${new URL(url).hostname}`;
  } catch(e) {
    return '';
  }
}

async function handleRequest(request) {
  const ua = request.headers.get('User-Agent') || '';
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  const clientIP = request.headers.get('CF-Connecting-IP') || '';
  const timeout = new Promise(resolve => setTimeout(() => resolve(null), 2000));
  const weatherHtml = isMobile ? null : await Promise.race([fetchWeather(clientIP), timeout]);
  const hitokotoScript = isMobile ? '' : `<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer><\/script>`;
  const nowUtc8 = new Date(Date.now() + 8 * 3600000);
  const lunarStr = getLunarDate(Date.UTC(nowUtc8.getUTCFullYear(), nowUtc8.getUTCMonth(), nowUtc8.getUTCDate()));
  return new Response(renderHTML(renderIndex(weatherHtml, lunarStr), hitokotoScript), {
    headers: { 'content-type': 'text/html;charset=UTF-8' }
  });
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request));
});

function renderIndex(weatherHtml, lunarStr) {
  const footer = el('footer', [], el('div', ['class="footer"'],
    'Powered by' +
    el('a', ['class="ui label"', 'href="https://github.com/vip-weizhen/sites"', 'target="_blank"'], el('i', ['class="github icon"'], '') + 'Mr.wei') +
    ' &copy; Base on ' +
    el('a', ['class="ui label"'], el('i', ['class="balance scale icon"'], '') + '麻省理工学院执照') +
    ' Mail: vip.weizhen@gmail.com'
  ));
  return renderHeader(weatherHtml, lunarStr) + renderMain() + footer;
}

function renderMain() {
  const fallback = 'https://obs.weizhen.xyz/Favicon.png';
  const card = (url, name, desc, icon) => {
    const manualIcon = icon || '';
    const autoIcon = getFavicon(url);
    const imgAttrs = manualIcon
      ? `src="${manualIcon}" onerror="this.src='${fallback}'"`
      : `src="${fallback}" data-favicon="${autoIcon}"`;
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
  const main = config.lists.map(item => {
    const divider = el('div', ['class="section-divider"'], `<span class="section-divider-inner"><i class="${item.icon} icon"></i>${item.name}</span>`);
    const content = el('div', ['class="ui four stackable cards"'], item.list.map(link => card(link.url, link.name, link.desc, link.icon)).join(''));
    return el('div', ['class="ui basic segment"'], divider + content);
  }).join('');
  return el('main', [], el('div', ['class="ui container"'], main));
}

function renderHeader(weatherHtml, lunarStr) {
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
  const backgroundHtml = randomMedia.endsWith('.mp4')
    ? `<video autoplay muted loop id="myVideo"><source src="${randomMedia}" type="video/mp4"></video>`
    : `<img id="myVideo" src="${randomMedia}" style="width:100%;height:100%;object-fit:cover;" />`;

  const title = `<div id="clock-display" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 40px;margin-bottom:1em;margin-top:0;">
  <div id="clock-time" style="font-size:5rem;font-weight:700;color:#ffffff;letter-spacing:8px;line-height:1;font-family:'Courier New',Consolas,monospace;text-shadow:0 0 30px rgba(255,255,255,0.25);"></div>
  <div id="clock-date" data-lunar="${lunarStr}" style="font-size:1.25rem;color:rgba(255,255,255,0.85);margin-top:10px;letter-spacing:4px;font-family:'Microsoft YaHei','PingFang SC',sans-serif;"></div>
</div>`;

  const menu = config.search_engine.map((link, key) =>
    `<a class="sengine-item${key === 0 ? ' active' : ''}" data-url="${link.template}">${link.name}</a>`
  ).join('');

  const searchArea = config.search ? `<div id="search-wrap"><div id="search-box"><input id="searchinput" type="search" placeholder="搜索你想要知道的......" autocomplete="off" /><span id="search-btn-inner" onclick="doSearch()">&#128269;</span></div><div id="sengine">${menu}</div></div>` : '';

  const darkModeBtn = el('div', ['id="dark-mode-toggle"'], el('i', ['id="dark-mode-icon"', 'class="moon icon"'], ''));

  return el('header', [],
    el('div', ['id="head"', 'class="ui inverted vertical masthead center aligned segment"'],
      el('div', ['class="video-background"'], backgroundHtml) +
      `<div id="hitokoto-widget"><i class="quote left icon"></i><span id="hitokoto">...</span></div>` +
      `<div id="weather-widget" style="${weatherHtml ? '' : 'display:none'}"><div id="weather-content">${weatherHtml || ''}</div></div>` +
      el('div', ['id="title"'], title + searchArea)
    )
  ) + darkModeBtn;
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
  <link rel="shortcut icon" href="https://obs.weizhen.xyz/sites-ico.png" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html { font-size: 16px; overflow-x: hidden; margin: 0 !important; padding: 0 !important; }
    body { background-color: #dde1ea !important; background-image: none !important; padding-top: 0 !important; margin: 0 !important; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.18); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.32); }
    .video-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 0; }
    .video-background::after { content: ''; position: absolute; inset: 0; z-index: 1; background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 100%); }
    #myVideo { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; transform: translateX(-50%) translateY(-50%); }
    #head { background: rgba(0,0,0,0) !important; position: relative; min-height: 0 !important; padding: 0 0 5em !important; margin-bottom: -1.5em !important; overflow: hidden; z-index: 1; }
    #nav, #title { position: relative; z-index: 2; }
    #clock-display { margin-top: 1.8em !important; margin-bottom: 1.2em !important; }
    #clock-time { font-size: 5rem !important; letter-spacing: 8px !important; }
    #clock-date { font-size: 1.25rem !important; letter-spacing: 4px !important; margin-top: 10px !important; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.45} }
    .clock-colon { animation: pulse 1s ease-in-out infinite; }
    #title { width: 100%; display: flex; flex-direction: column; align-items: center; padding: 0; }
    #search-wrap { display: block; width: min(760px, calc(100vw - 2rem)); filter: drop-shadow(0 8px 32px rgba(0,0,0,0.4)); }
    #search-box { position: relative; display: block; width: 100%; }
    #searchinput { display: block; width: 100%; box-sizing: border-box; border: 1.5px solid rgba(255,255,255,0.45); outline: none; background: rgba(255,255,255,0.18); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); color: #fff; font-size: 1.08rem; padding: 0.92em 3.8em 0.92em 1.4em; border-radius: 14px 14px 0 0; font-family: 'Microsoft YaHei','PingFang SC',sans-serif; transition: background 0.2s, border-color 0.2s; }
    #searchinput::placeholder { color: rgba(255,255,255,0.6); }
    #searchinput:focus { background: rgba(255,255,255,0.28); border-color: rgba(255,255,255,0.7); }
    #search-btn-inner { position: absolute; right: 0; top: 0; bottom: 0; width: 3.4em; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; cursor: pointer; color: rgba(255,255,255,0.9); background: rgba(255,255,255,0.22); border-left: 1px solid rgba(255,255,255,0.3); border-radius: 0 14px 0 0; transition: background 0.2s, color 0.2s; user-select: none; }
    #search-btn-inner:hover { background: rgba(255,255,255,0.38); color: #fff; }
    #sengine { display: flex; flex-wrap: nowrap; width: 100%; box-sizing: border-box; background: rgba(255,255,255,0.12); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1.5px solid rgba(255,255,255,0.35); border-top: none; border-radius: 0 0 14px 14px; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; touch-action: pan-x; cursor: grab; }
    #sengine::-webkit-scrollbar { display: none; }
    .sengine-item { flex: 1 1 0; min-width: max-content; padding: 0.6em 1.1em; color: rgba(255,255,255,0.7); font-size: 0.88rem; cursor: pointer; white-space: nowrap; text-align: center; transition: color 0.2s, background 0.2s; border-right: 1px solid rgba(255,255,255,0.15); text-decoration: none; display: block; position: relative; letter-spacing: 0.5px; }
    .sengine-item:last-child { border-right: none; }
    .sengine-item:hover { color: #fff; background: rgba(255,255,255,0.12); }
    .sengine-item.active { color: #fff; font-weight: 700; background: rgba(255,255,255,0.18); }
    .sengine-item.active::after { content: ''; position: absolute; bottom: 0; left: 25%; right: 25%; height: 2px; background: #fff; border-radius: 2px 2px 0 0; }
    main, footer { display: block; margin: 0 !important; padding: 0 !important; }
    main { background: transparent !important; position: relative; margin-top: 0 !important; padding-top: 0 !important; }
    .ui.inverted.vertical.masthead.segment { margin-bottom: 0 !important; padding-bottom: 0 !important; }
    main > .ui.container { padding: 0 2rem 4rem !important; max-width: 1280px !important; position: relative; z-index: 1; margin-top: 0 !important; }
    .ui.basic.segment { padding: 0 !important; margin: 0 !important; }
    .section-divider { display: flex; align-items: center; margin: 2rem 0 1.2rem; gap: 1em; }
    .section-divider::before, .section-divider::after { content: ''; flex: 1; height: 1px; background: #c8cdd8; }
    .section-divider-inner { display: inline-flex; align-items: center; gap: 0.4em; color: #5a6880; font-size: 0.92rem; font-weight: 600; letter-spacing: 2px; white-space: nowrap; }
    .section-divider-inner i { color: #8899bb; font-size: 1em; margin: 0; }
    .ui.four.stackable.cards { margin: 0 !important; gap: 1rem !important; display: flex !important; flex-wrap: wrap !important; }
    .ui.four.stackable.cards > .card { margin: 0 !important; width: calc(25% - 0.76rem) !important; }
    @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
    .ui.cards > .card { border-radius: 16px !important; border: 1px solid rgba(0,0,0,0.055) !important; box-shadow: 0 2px 14px rgba(0,0,0,0.07) !important; transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease !important; background: #f5f6f8 !important; animation: fadeUp 0.45s ease both; }
    .ui.cards > .card:hover { transform: translateY(-6px) !important; box-shadow: 0 14px 36px rgba(0,0,0,0.13) !important; }
    .ui.cards > .card .content { padding: 1em 1.2em !important; border-top: none !important; display: flex !important; align-items: center !important; gap: 0.85em; min-height: 72px; }
    .ui.cards > .card .content .card-text { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; }
    .ui.cards > .card .content .header { font-size: 1rem !important; font-weight: 600 !important; color: #1a1a2e !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0 !important; line-height: 1.4; }
    .ui.cards > .card .content .meta { font-size: 0.82rem !important; color: #999 !important; margin-top: 4px !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.3; }
    .ui.cards > .card img.avatar { width: 38px !important; height: 38px !important; border-radius: 9px !important; flex-shrink: 0 !important; object-fit: contain !important; background: transparent !important; border: none !important; box-shadow: none !important; margin: 0 !important; float: none !important; }
    #weather-widget { position: absolute; top: 14px; right: 18px; z-index: 3; background: rgba(0,0,0,0.3); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.15); border-radius: 18px; padding: 16px 20px; color: #fff; font-family: 'Microsoft YaHei','PingFang SC',sans-serif; min-width: 280px; }
    #hitokoto-widget { position: absolute; top: 14px; left: 18px; z-index: 3; background: rgba(0,0,0,0.3); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.15); border-radius: 18px; padding: 14px 18px; color: #fff; font-family: 'Microsoft YaHei','PingFang SC',sans-serif; max-width: 260px; display: flex; align-items: flex-start; gap: 8px; }
    #hitokoto-widget .quote.left.icon { font-size: 1rem; opacity: 0.45; flex-shrink: 0; margin-top: 3px; }
    #hitokoto-widget #hitokoto { font-size: 0.86rem; line-height: 1.75; opacity: 0.88; letter-spacing: 0.5px; }
    .weather-city { font-size: 1rem; font-weight: 600; opacity: 0.95; margin-bottom: 12px; letter-spacing: 1.5px; text-align: center; }
    .weather-days { display: flex; gap: 8px; }
    .weather-day { flex: 1; display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 12px 6px 10px; gap: 6px; transition: background 0.2s; }
    .weather-day:hover { background: rgba(255,255,255,0.18); }
    .weather-day-label { font-size: 0.82rem; opacity: 0.7; letter-spacing: 1px; }
    .weather-day-icon { font-size: 2.2rem; line-height: 1.2; }
    .weather-day-temp { font-size: 0.92rem; font-weight: 700; letter-spacing: 0.5px; }
    .weather-day-desc { font-size: 0.75rem; opacity: 0.65; }
    @media (max-width: 768px) { #weather-widget { display: none; } #hitokoto-widget { display: none; } }
    .footer { background: #fff !important; border-top: 1px solid #eaecf0 !important; padding: 1.4rem 0 !important; text-align: center; font-size: 0.88rem; color: #aaa !important; letter-spacing: 0.5px; }
    .footer .ui.label { background: #f4f6f9 !important; color: #666 !important; border: 1px solid #e0e4ea !important; border-radius: 6px !important; font-size: 0.82rem !important; transition: background 0.2s; }
    .footer .ui.label:hover { background: #e8edf5 !important; }
    #dark-mode-toggle { position: fixed; bottom: 28px; right: 28px; z-index: 999; width: 50px; height: 50px; border-radius: 50%; background: rgba(255,255,255,0.92); color: #555; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.15); transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s; backdrop-filter: blur(8px); }
    #dark-mode-toggle:hover { transform: scale(1.12) rotate(15deg); box-shadow: 0 6px 24px rgba(0,0,0,0.2); }
    #dark-mode-toggle i { margin: 0; font-size: 1.2rem; }
    body.dark-mode { background-color: #12131a !important; background-image: none !important; }
    body.dark-mode main { background: transparent !important; }
    body.dark-mode .ui.cards > .card { background: #1e2030 !important; border-color: rgba(255,255,255,0.06) !important; box-shadow: 0 2px 14px rgba(0,0,0,0.4) !important; }
    body.dark-mode .ui.cards > .card:hover { box-shadow: 0 14px 36px rgba(99,179,237,0.12) !important; }
    body.dark-mode .ui.cards > .card .content .header { color: #e8eaf2 !important; }
    body.dark-mode .ui.cards > .card .content .meta { color: rgba(255,255,255,0.38) !important; }
    body.dark-mode .section-divider::before, body.dark-mode .section-divider::after { background: #2a3448; }
    body.dark-mode .section-divider-inner { color: #6a82a0; }
    body.dark-mode .section-divider-inner i { color: #4a6080; }
    body.dark-mode .footer { background: #191a24 !important; border-top-color: #2a2b38 !important; color: #555 !important; }
    body.dark-mode .footer .ui.label { background: #22232e !important; color: #888 !important; border-color: #333 !important; }
    body.dark-mode #dark-mode-toggle { background: #22232e; color: #fbbd08; }
    body.dark-mode .ui.input input { background: rgba(255,255,255,0.08) !important; color: #fff !important; border-color: rgba(255,255,255,0.15) !important; }
    body.dark-mode ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); }
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
      #search-wrap { width: calc(100vw - 2rem); }
      #searchinput { font-size: 1.08rem; padding: 0.95em 3.8em 0.95em 1.2em; }
      #search-btn-inner { font-size: 1.3rem; width: 3.5em; }
      .sengine-item { flex: 0 0 auto; font-size: 1.08rem; padding: 0.85em 1.5em; }
      main > .ui.container { padding: 0.8rem 0.9rem 2.5rem !important; }
      .ui.four.stackable.cards { gap: 0.75rem !important; }
      .ui.four.stackable.cards > .card { width: calc(50% - 0.38rem) !important; }
      .section-divider { margin: 1.6rem 0 0.9rem; }
      .section-divider-inner { font-size: 0.88rem; }
      .ui.cards > .card .content { padding: 0.9em 1em !important; }
      .ui.cards > .card .content .header { font-size: 0.95rem !important; }
      .ui.cards > .card .content .meta { font-size: 0.8rem !important; }
      #dark-mode-toggle { width: 44px; height: 44px; bottom: 20px; right: 16px; }
    }
    @media (max-width: 480px) {
      #head { padding: 0 !important; }
      #clock-time { font-size: 2.4rem !important; letter-spacing: 2px !important; }
      #clock-date { font-size: 0.82rem !important; letter-spacing: 1px !important; }
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
  ${hitokotoScript}
  <script>
    function updateClock() {
      var now = new Date();
      var weeks = ['\u661f\u671f\u65e5','\u661f\u671f\u4e00','\u661f\u671f\u4e8c','\u661f\u671f\u4e09','\u661f\u671f\u56db','\u661f\u671f\u4e94','\u661f\u671f\u516d'];
      var h = String(now.getHours()).padStart(2,'0');
      var m = String(now.getMinutes()).padStart(2,'0');
      var s = String(now.getSeconds()).padStart(2,'0');
      var y = now.getFullYear(), mo = now.getMonth()+1, d = now.getDate();
      var timeEl = document.getElementById('clock-time');
      var dateEl = document.getElementById('clock-date');
      var lunar = dateEl ? (dateEl.getAttribute('data-lunar') || '') : '';
      if (timeEl) timeEl.innerHTML = h+'<span class="clock-colon">:</span>'+m+'<span class="clock-colon">:</span>'+s;
      if (dateEl) dateEl.innerHTML = y+' \u5e74 '+String(mo).padStart(2,'0')+' \u6708 '+String(d).padStart(2,'0')+' \u65e5\u3000'+weeks[now.getDay()]+'\u3000'+lunar;
    }
    updateClock();
    setInterval(updateClock, 1000);

    var currentTemplate = (document.querySelector('.sengine-item.active') || {getAttribute:function(){return '';}}).getAttribute('data-url');
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

    (function() {
      var el = document.getElementById('sengine');
      if (!el) return;
      var startX, startScrollLeft, isDragging = false;
      el.addEventListener('touchstart', function(e) { startX = e.touches[0].pageX; startScrollLeft = el.scrollLeft; isDragging = true; }, { passive: true });
      el.addEventListener('touchmove', function(e) { if (!isDragging) return; el.scrollLeft = startScrollLeft + (startX - e.touches[0].pageX); }, { passive: true });
      el.addEventListener('touchend', function() { isDragging = false; });
      el.addEventListener('mousedown', function(e) { isDragging = true; startX = e.pageX - el.offsetLeft; startScrollLeft = el.scrollLeft; el.style.cursor = 'grabbing'; });
      el.addEventListener('mousemove', function(e) { if (!isDragging) return; e.preventDefault(); el.scrollLeft = startScrollLeft - (e.pageX - el.offsetLeft - startX); });
      el.addEventListener('mouseup', function() { isDragging = false; el.style.cursor = ''; });
      el.addEventListener('mouseleave', function() { isDragging = false; el.style.cursor = ''; });
    })();

    function applyTheme(isDark) {
      if (isDark) { $('body').addClass('dark-mode'); $('#dark-mode-icon').removeClass('moon').addClass('sun'); }
      else { $('body').removeClass('dark-mode'); $('#dark-mode-icon').removeClass('sun').addClass('moon'); }
    }
    var savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme === 'true' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) applyTheme(true);
    $('#dark-mode-toggle').on('click', function() {
      var isNowDark = !$('body').hasClass('dark-mode');
      applyTheme(isNowDark);
      localStorage.setItem('dark-mode', isNowDark);
    });

    document.addEventListener('DOMContentLoaded', function() {
      var style = document.createElement('style');
      style.textContent = 'body{margin:0!important;padding:0!important}.pusher{padding-top:0!important;margin-top:0!important}header{margin:0!important}main{margin-top:0!important;padding-top:0!important}.ui.inverted.vertical.masthead.segment{margin-bottom:0!important}';
      document.head.appendChild(style);
    });

    window.addEventListener('load', function() {
      var fallback = 'https://obs.weizhen.xyz/Favicon.png';
      document.querySelectorAll('img[data-favicon]').forEach(function(img) {
        var src = img.getAttribute('data-favicon');
        if (!src) return;
        var tester = new Image();
        tester.onload = function() { img.src = src; };
        tester.onerror = function() { img.src = fallback; };
        tester.src = src;
      });
    });
  </script>
  <script src="https://obs.weizhen.xyz/sites.mouse.js"></script>
</body>
</html>`;
}
