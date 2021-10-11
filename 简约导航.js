const html = `<!DOCTYPE html>


<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>简约导航</title>
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
	<meta content="telephone=no,email=no" name="format-detection">
	<meta content="yes" name="apple-mobile-web-app-capable">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-touch-fullscreen" content="yes">
	<meta name="keywords" content="简约导航">
	<meta name="description" content="一个简单美观可自定义的网址导航">
	<link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/appexplore/cdn/jianavi@v2.3/favicon.ico">
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/appexplore/cdn/jianavi@v2.3/css/style.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/appexplore/cdn/jianavi@v2.3/css/yidong.min.css">
</head>

<body>
	<!-- 自定义按钮start -->
	<div class="zdy_button" onclick="zyd_show();">
		<img src="https://cdn.jsdelivr.net/gh/appexplore/cdn/jianavi@v2.3/img/cl.ico">
	</div>
	<!-- 自定义按钮end -->

	<!-- 自定义弹窗start -->
	<div class="zdy">
		<div class="zdy_content">
			<div class="zdy_top">
				<span class="zdy_edit"></span>自定义链接
				<span class="zdy_close" onclick="zdy_close();"></span>
			</div>
			<div class="zdy_mi">
				<div class="z_m_i">
					<span class="z_i_img_1"></span>
					<input type="text" class="zdy_input zdy_name" placeholder="微博">
				</div>
				<div class="z_m_i">
					<span class="z_i_img_2"></span>
					<input type="text" class="zdy_input zdy_link" placeholder="http://www.weibo.com/">
				</div>
				<div>
					<font size="2" color="gray">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请注意：数据是临时存储在本地电脑上，数据丢失无法找回</font>
				</div>
			</div>
			<div class="zdy_foot">
				<div class="zdy_false zdy_b" onclick="zdy_false();">取消</div>
				<div class="zdy_true zdy_b" onclick="zdy_true();">确定</div>
			</div>
		</div>
	</div>
	<!-- 自定义弹窗end -->

	<!-- 搜索栏start -->
	<div class="baidu baidu-2">
		<form name="f" action="https://www.baidu.com/s" target="_blank">
			<div class="Select-box-2" id="baidu">
				<ul>
					<li class="this_s">百 度</li>
					<li class="miji_s">duck</li>
					<li class="bing_s">必 应</li>
					<li class="google_s">谷 歌</li>
					<li class="baidu_s">百 度</li>
				</ul>
			</div>
			<div class="in5">
				<input name="wd" id="kw-2" maxlength="100" autocomplete="off" type="text">
				<div class="qingkong" id="qingkong" title="清空">x</div>
			</div>
			<input value="搜 索" id="su-2" type="submit">
		</form>
		<ul class="keylist"></ul>
	</div>
	<!-- 搜索栏end -->

	<!-- 内容start -->
	<div class="body">
		<div class="content">
			<div class="jianjie">
				<div class="jj-list">
					<div class="jj-list-tit">学习 · 生活</div>
					<ul class="jj-list-con _b">
						<li><a href="https://www.taobao.com/" class="link-3" target="_blank" rel="nofollow">淘宝</a></li>
						<li><a href="https://www.jd.com/" class="link-3" target="_blank" rel="nofollow">京东</a></li>
						<li><a href="https://guiderank-app.com/" class="link-3" target="_blank" rel="nofollow">盖得排行</a></li>
						<li><a href="http://123.sogou.com/shwz/yinhang.html" class="link-3" target="_blank" rel="nofollow">银行</a></li>
						<li><a href="https://www.amap.com/" class="link-3" target="_blank" rel="nofollow">地图</a></li>
						<li><a href="https://translate.google.cn/" class="link-3" target="_blank" rel="nofollow">翻译</a></li>
						<li><a href="https://hao.qq.com/qita/youxiang.html" class="link-3" target="_blank" rel="nofollow">邮箱</a></li>
						<li><a href="https://www.runoob.com/" class="link-3" target="_blank" rel="nofollow">菜鸟教程</a></li>				
						<li><a href="https://www.icourse163.org/" class="link-3" target="_blank" rel="nofollow">MOOC</a></li>
					</ul>
				</div>
				<div class="jj-list">
					<div class="jj-list-tit">常用 · 社区</div>
					<ul class="jj-list-con _b">
						<li><a href="https://wx.qq.com/" class="link-3" target="_blank" rel="nofollow">微信</a></li>
						<li><a href="https://weibo.com/" class="link-3" target="_blank" rel="nofollow">微博</a></li>
						<li><a href="https://www.zhihu.com/" class="link-3" target="_blank" rel="nofollow">知乎</a></li>
						<li><a href="https://tieba.baidu.com/" class="link-3" target="_blank" rel="nofollow">贴吧</a></li>
						<li><a href="http://www.soomal.com/" class="link-3" target="_blank" rel="nofollow">Soomal</a></li>
						<li><a href="https://topbook.cc/overview" class="link-3" target="_blank" rel="nofollow">Topbook</a></li>
						<li><a href="https://github.com/" class="link-3" target="_blank" rel="nofollow">GitHub</a></li>
						<li><a href="https://www.douban.com/" class="link-3" target="_blank" rel="nofollow">豆瓣</a></li>
						<li><a href="https://www.v2ex.com/" class="link-3" target="_blank" rel="nofollow">V2EX</a></li>
					</ul>
				</div>
				<div class="jj-list">
					<div class="jj-list-tit">影音 · 娱乐</div>
					<ul class="jj-list-con _b">
						<li><a href="https://www.iqiyi.com/" class="link-3" target="_blank" rel="nofollow">爱奇艺</a></li>
						<li><a href="https://v.qq.com/" class="link-3" target="_blank" rel="nofollow">腾讯视频</a></li>
						<li><a href="https://www.bilibili.com/" class="link-3" target="_blank" rel="nofollow">哔哩哔哩</a></li>
						<li><a href="https://www.mgtv.com/" class="link-3" target="_blank" rel="nofollow">芒果TV</a></li>
						<li><a href="https://www.youku.com/" class="link-3" target="_blank" rel="nofollow">优酷</a></li>
						<li><a href="https://music.163.com/" class="link-3" target="_blank" rel="nofollow">音乐</a></li>
						<li><a href="https://www.dikotv.com/" class="link-3" target="_blank" rel="nofollow">顶空影视</a></li>
						<li><a href="https://ddrk.me/" class="link-3" target="_blank" rel="nofollow">低端影视</a></li>
						<li><a href="http://www.zzzfun.com/" class="link-3" target="_blank" rel="nofollow">ZzzFun</a></li>
					</ul>
				</div>
				<div class="jj-list">
					<div class="jj-list-tit">发现 · 世界</div>
					<ul class="jj-list-con _b">
						<li><a href="https://news.ifeng.com/" class="link-3" target="_blank" rel="nofollow">凤凰资讯</a></li>
						<li><a href="https://ef.zhiweidata.com/" class="link-3" target="_blank" rel="nofollow">知微事见</a></li>
						<li><a href="https://sspai.com/" class="link-3" target="_blank" rel="nofollow">少数派</a></li>
						<li><a href="https://jikipedia.com/" class="link-3" target="_blank" rel="nofollow">小鸡词典</a></li>
						<li><a href="https://jandan.net/" class="link-3" target="_blank" rel="nofollow">煎蛋</a></li>
						<li><a href="https://youquhome.com/" class="link-3" target="_blank" rel="nofollow">有趣网址</a></li>
						<li><a href="https://ac.scmor.com/" class="link-3" target="_blank" rel="nofollow">思谋学术</a></li>
						<li><a href="https://houxu.app/" class="link-3" target="_blank" rel="nofollow">后续</a></li>
						<li><a href="https://www.soukuzhan.com" class="link-3" target="_blank" rel="nofollow">搜酷站</a>
						</li>
					</ul>
				</div>
				<div class="jj-list">
					<div class="jj-list-tit">在线 · 工具</div>
					<ul class="jj-list-con _b">
						<li><a href="https://www.photopea.com/" class="link-3" target="_blank" rel="nofollow">在线PS</a></li>
						<li><a href="https://cowtransfer.com/" class="link-3" target="_blank" rel="nofollow">收发文件</a></li>
						<li><a href="https://cli.im/" class="link-3" target="_blank" rel="nofollow">二维码</a></li>
						<li><a href="https://www.linshiyouxiang.net/" class="link-3" target="_blank" rel="nofollow">临时邮箱</a></li>
						<li><a href="https://www.storytrain.info/" class="link-3" target="_blank" rel="nofollow">临时短信</a></li>
						<li><a href="https://convertio.co/zh/" class="link-3" target="_blank" rel="nofollow">格式转换</a></li>
						<li><a href="http://www.html22.com/zh/" class="link-3" target="_blank" rel="nofollow">文档下载</a></li>
						<li><a href="https://weibomiaopai.com/" class="link-3" target="_blank" rel="nofollow">视频下载</a></li>
						<li><a href="https://www.eggvod.cn/music/" class="link-3" target="_blank" rel="nofollow">音乐下载</a></li>
					</ul>
				</div>
				<div class="jj-list">
					<div class="jj-list-tit">搜索 · 资源</div>
					<ul class="jj-list-con _b">
						<li><a href="https://www.cupfox.com/" class="link-3" target="_blank" rel="nofollow">茶杯狐</a></li>
						<li><a href="https://www.dy2018.com/" class="link-3" target="_blank" rel="nofollow">电影天堂</a></li>
						<li><a href="http://vip.yeyulingfeng.com/" class="link-3" target="_blank" rel="nofollow">VIP解析</a></li>
						<li><a href="https://soft.appts.cn" class="link-3" target="_blank" rel="nofollow">常用软件</a></li>
						<li><a href="https://www.coolist.net/" class="link-3" target="_blank" rel="nofollow">酷软清单</a></li>
						<li><a href="https://www.ghxi.com/" class="link-3" target="_blank" rel="nofollow">果核剥壳</a></li>
						<li><a href="https://www.jiumodiary.com/" class="link-3" target="_blank" rel="nofollow">电子书</a></li>
						<li><a href="https://pixabay.com/zh/photos/" class="link-3" target="_blank" rel="nofollow">图片素材</a></li>
						<li><a href="https://zhengbanxianmian.com/" class="link-3" target="_blank" rel="nofollow">软件限免</a></li>
					</ul>
				</div>
				<!-- 自定义按钮start -->
				<div class="jj-list zdy_list" style="display: none;">
					<div class="jj-list-tit">自定义</div>
					<ul class="jj-list-con zdy_li">
					</ul>
				</div>
				<!-- 自定义按钮end -->
			</div>
			<!-- 内容end -->

			<!-- 底部版权start -->
			
			<div class="footer1">Copyright © 2021
				<a href="https://github.com/vip-weizhen" style="color:#ffffff;" target="_blank" rel="nofollow">Powered by Mr.wei</a>

			</div>
		</div>

		<div class="footer">Copyright © 2021
			<a href="https://github.com/vip-weizhen" style="color:#ffffff;" target="_blank" rel="nofollow">Powered by Mr.wei</a>

		</div>
		<!-- 底部版权end -->
	</div>

	<script type="text/javascript"
		src="https://cdn.jsdelivr.net/gh/appexplore/cdn/jianavi@v2.3/js/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/appexplore/cdn/jianavi@v2.3/js/js.min.js"></script>
</body>`


async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}



addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
