javascript: (function() {
	/* Useful functions */
	function changeClass(object, oldClass, newClass) {
		var regExp = new RegExp('(?:^|\\s)' + oldClass + '(?!\\S)', 'g');
		object.className = object.className.replace(regExp, newClass);
	}

	function addClass(object, newClass) {
		object.className += " " + newClass;
	}

	/* Main body of page */
	var mainBody = document.getElementById("main");
	mainBody.style.backgroundColor = '#323639';
	mainBody.style.color = 'white';

	var wrappy = document.getElementsByClassName("wrapsb1");
	wrappy[0].style.backgroundColor = '#323639';

	/* Main items */
	var re = /node|comment/;
	var ayes = document.getElementsByTagName("a");
	[].forEach.call(ayes, function(aye) {
		if (re.test(aye.href)) {
			aye.style.color = "white";
		}
	});

	re = /user|goto|cat/;
	var links = document.getElementsByTagName("a");
	[].forEach.call(links, function(link) {
		if (re.test(link.href) & link.innerText != "My Account") {
			link.style.color = "red";
		}
	});


	/* Right hand sidebar */
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = 'div.node-teaser-new { border-bottom: #ddd solid 1px; margin-bottom: 0; padding: 10px 0;} div.node-teaser-new:hover { background-color: #000000;}';
	document.getElementsByTagName('head')[0].appendChild(style);
	var nodies = document.getElementsByClassName('node-teaser');
	for (let node of nodies) {
		addClass(node, 'node-teaser-new')
	};
	var coupons = document.getElementsByClassName("couponcode");
	for (let coupon of coupons) {
		coupon.style.color = 'black';
	}
	var newsletters = document.getElementsByClassName('newsletter');
	for (let news of newsletters) {
		news.style.backgroundColor = 'black';
	}
	var blocks = document.getElementsByClassName('block');
	for (let block of blocks) {
		block.style.backgroundColor = '#323639';
	}
	var blockTitles = document.getElementsByClassName('blocktitle');
	for (let title of blockTitles) {
		title.style.color = 'black';
		title.style.backgroundColor = '#c1c1c1';
	}

	var style2 = document.createElement('style');
	style2.type = 'text/css';
	style2.innerHTML = 'div.sidebar ul.ozblist > li.new-new { border-right-color: #828282;} div.sidebar ul.ozblist > li.new-new:hover { background-color: #000000;} div.sidebar ul.ozblist > li.expired-new { border-right-color: #000000;} div.sidebar ul.ozblist > li.expired-new:hover { background-color: #000000;}';
	document.getElementsByTagName('head')[0].appendChild(style2);

	var newDeals = document.getElementsByClassName('new');
	for (let deal of newDeals) {
		/*deal.style.borderRightColor = '#828282';*/
		addClass(deal, 'new-new');
	}

	var expiredDeals = document.getElementsByClassName('expired');
	for (let deal of expiredDeals) {
		/*deal.style.borderRightColor = '#828282';*/
		addClass(deal, 'expired-new');
	}

	var style3 = document.createElement('style');
	style3.type = 'text/css';
	style3.innerHTML = 'div.sidebar ul.ozblist > li:hover { background-color: #000000;}';
	document.getElementsByTagName('head')[0].appendChild(style3);

	var style4 = document.createElement('style');
	style4.type = 'text/css';
	style4.innerHTML = 'a { color: #ffffff; text-decoration: none;} .shade0, .shade0h:hover, ul.pager a:hover, ul.tabs.primary {background-color: #000000;} a:hover { color: #ffffff;}';
	document.getElementsByTagName('head')[0].appendChild(style4);

	var style5 = document.createElement('style');
	style5.type = 'text/css';
	style5.innerHTML = 'div.sidebar ul.ozblist > li:hover { background-color: #000000;}'
	document.getElementsByTagName('head')[0].appendChild(style5);


	var comments = document.getElementsByClassName('comment');
	for (let comment of comments) {
		comment.style.backgroundColor = '#323639';
	}

	var forms = document.getElementsByClassName('form-textarea');
	for (let form of forms) {
		form.style.backgroundColor = '#c1c1c1';
	}

	var bars = document.getElementsByClassName('bar');
	for (let bar of bars) {
		bar.style.backgroundColor = '#c1c1c1';
	}

	var shades = document.getElementsByClassName('shade1h');
	for (let shade of shades) {
		shade.style.color = '#000000';
	}

	var helps = document.getElementsByClassName('help');
	for (let help of helps) {
		help.style.color = '#ffffff';
	}

	var style6 = document.createElement('style');
	style6.type = 'text/css';
	style6.innerHTML = `fieldset.collapsible legend {background-image: url("chrome-extension://ebppglgeipmgbjbjighodhmhaooeejhb/menu-expanded-color.png")}
						fieldset.collapsed legend {background-image: url("chrome-extension://ebppglgeipmgbjbjighodhmhaooeejhb/menu-collapsed-color.png")}
						div.form-item label { color: #ffffff}
						.btn.btn-primary { 	background-color: #393;
											border-color: #393;
    										color: #fff;
    									 }
    					.btn.btn-primary:hover {
    						background-color: #00a900;
    						border-color: #00a900;
    					}
    					.shade3, .shade3:hover {
    						background-color: #393
    					}
    					ul.competition-list-meta li {
    						color: #c1c1c1
    					}
    					div.menupopup {
    						background-color: #000;
    						color: #fff;
    					}
    					div.menupopup ul.dropdown a { color: #ffffff;
    					}
    					div.menupopup h3 {
    						background-color: #000000;
    					}
    					div.menupopup ul.dropdown a:hover {background-color: #323639;
    					}
    					div.menupopup div.group {
    						background-color: #000000;
    					}
    					a:hover {
    						color: #000000;
    					}`
	document.getElementsByTagName('head')[0].appendChild(style6);

	var legends = document.getElementsByTagName('legend');
	for (let legend of legends) {
		legend.style.backgroundColor = '#000000';
	}


	var formItems = document.getElementsByClassName('form-item');





})()