var mainBody = document.getElementById("main");
mainBody.style.backgroundColor = '#323639';
mainBody.style.color = 'white';

var wrappy = document.getElementsByClassName("wrapsb1");
wrappy[0].style.backgroundColor = '#323639';

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

function changeClass(object, oldClass, newClass) {
	var regExp = new RegExp('(?:^|\\s)' + oldClass + '(?!\\S)', 'g');
	object.className = object.className.replace(regExp, newClass);
}
function addClass(object, newClass) {
	object.className += " " + newClass;
}


var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'div.node-teaser-new {  border-bottom: #ddd solid 1px; margin-bottom: 0; padding: 10px 0;} div.node-teaser-new:hover { background-color: #000000;}';
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


/*
// Attempting to fix hover behaviour - it's actually in the li element
var style2 = document.createElement('style');
style2.type = 'text/css';
style2.innerHTML = 'div.new-new {  border-right-color: #828282;} div.new-new:hover { background-color: #000000;}';
document.getElementsByTagName('head')[0].appendChild(style2);

var newDeals = document.getElementsByClassName('new');
for (let deal of newDeals) {
	addClass(deal, 'new-new')
}
*/