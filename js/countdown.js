var countdown = document.getElementById("countdown");
var countDownDate = new Date("Jan 26, 2019 08:00:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	 document.getElementById("remaining").innerHTML = "There are " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
	if(distance < 0) {
		clearInterval(x);
		document.getElementById("remaining").innerHTML = "";
		countdown.innerHTML = "🎉 iMUNC 2019 is now in session! 🎉";
	}
}, 1000);