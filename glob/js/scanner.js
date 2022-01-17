$(document).ready ( function(){
  var videoElem = document.getElementById("show-camera");
  const qrScanner = new QrScanner(videoElem, result => handleScanResult(result));
  qrScanner.start();

  function handleScanResult(result) {
    if(result[0] != "~") {
      return;
    }
    window.location.href = "/apps/landscape/~profile/"+result;
  }
});

