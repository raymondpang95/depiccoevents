let url = window.location.href;
let secUrl = url.split('/');
let last = secUrl.pop() || secUrl.pop;
const chg = document.getElementById('headerChg');
const textColor = document.getElementsByClassName('topNavBtn');
if (last != 'index.html') {
	chg.classList.add('otherPage');
	chg.classList.remove('scroll');
	document.getElementById('header').style.height = 0;
} else {
	document.getElementById('header').style.height = '120px';
	window.addEventListener('scroll', function() {
		let height = window.scrollY;
		if (height > 100) {
			chg.classList.remove('otherPage');
			chg.classList.add('scroll');
		} else {
			chg.classList.remove('scroll');
		}
	});
}
