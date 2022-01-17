$(document).ready ( function(){
  var ship = window.ship;
  var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: ship,
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});

  var patp = document.getElementById("patp");
  patp.textContent = ship;

  var qrcode = document.getElementById("qrcode");
  qrcode.style.removeProperty('display');

});

