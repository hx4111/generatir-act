<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title><!-- @echo actName --></title>
    <meta name="keywords" content="可米酷,可米酱,<!-- @echo actName -->,<!-- @echo actKey -->">
    <meta name="description" content="<!-- @echo actDesc -->">
    <link rel="stylesheet" type="text/css" href="https://at.alicdn.com/t/font_1463478490_8874226.css">
    <link rel="stylesheet" type="text/css" href="https://cwcdn.comicool.cn//m/tpl/css/style.min.css?_=1468223173180">
</head>
<body>
    <!-- @echo tplMainHtml -->
    <div id="post-and-Ctrl"></div>
    <script type="text/javascript" src="https://cwcdn.comicool.cn/m/js/base.min.js"></script>
	<script type="text/javascript" src="https://cwcdn.comicool.cn/m/tpl/dist/act-global.min.js"></script>
	<!-- @if actShare !>
	<script type="text/javascript" src="https://cwcdn.comicool.cn/m/tpl/dist/act-share.min.js"></script>
	<!-- @endif -->
	<!-- @if actTopic !>
		<script type="text/javascript">	
			ReactDOM.render(React.createElement(PostAndCtrl, {
                postType: "topic<!-- @echo actTopicId -->"
            }), document.getElementById('post-and-Ctrl'));
		</script>
	<!-- @endif -->
	<!-- @if actShare !>
		<script type="text/javascript">	
			setNewShareInfo({
				title: '<!-- @echo actName -->',
				describe: '<!-- @echo actDesc -->',
				imageurl: 'images/share.jpg',
				page_url: window.location.href
			}, {
				use: 'customize',
				init: ''
			});
		</script>
	<!-- @endif -->
	<script type="text/javascript">
		var _hmt = _hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "//hm.baidu.com/hm.js?91ce1b276d999b0757a6bf47b0e86df6";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();
	</script>
</body>
</html>