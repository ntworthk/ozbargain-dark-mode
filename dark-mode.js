var mainBody = document.getElementById("main");
mainBody.style.backgroundColor = '#323639';
mainBody.style.color = 'white';


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
