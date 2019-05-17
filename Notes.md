# Notes

var mainBody = document.getElementById("main");
mainBody.style.backgroundColor = '#323639';
mainBody.style.color = 'white';


var re = /node/;
var ayes = document.getElementsByTagName("a");
[].forEach.call(ayes, function (aye) {if (re.test(aye.href)) {aye.style.color = "green";}});

re = /user|goto|cat/;
var ayes = document.getElementsByTagName("a");
[].forEach.call(ayes, function (aye) {if (re.test(aye.href)) {aye.style.color = "red";}});


var css = 'node-teaser:hover{ background-color: #00ff00 }';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);