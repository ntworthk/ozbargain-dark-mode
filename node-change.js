function changeClass(object, oldClass, newClass) {
	var regExp = new RegExp('(?:^|\\s)' + oldClass + '(?!\\S)', 'g');
	object.className = object.className.replace(regExp, newClass);
}

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'div.node-teaser-new {  border-bottom: #ddd solid 1px; margin-bottom: 0; padding: 10px 0;} div.node-teaser-new:hover { background-color: #ffffff;}';
document.getElementsByTagName('head')[0].appendChild(style);
var nodies = document.getElementsByClassName('node-teaser');
for (var i = 0; i < nodies.length; i++) {
	changeClass(nodies[i], 'node-teaser', 'node-teaser-new')
};