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
for (var i = 0; i < nodies.length; i++) { addClass(nodies[i], 'node-teaser-new')};