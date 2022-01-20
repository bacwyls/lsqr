$(document).ready ( function(){
  var videoElem = document.getElementById("show-camera");


  QrScanner.WORKER_PATH = "js/qr-scanner/qr-scanner-worker.min.js";
  const qrScanner = new QrScanner(videoElem, result => handleScanResult(result));
  qrScanner.start();

  var wFoundElem = document.getElementById("found-patp-w");
  var foundElem = document.getElementById("found-patp");
  function handleScanResult(result) {
    if(result[0] != "~") {
      return;
    }
    console.log("DETECTED: "+result);
    qrScanner.stop();

    wFoundElem.style.display = "";
    videoElem.style.display = "none";

    foundElem.innerHTML = result;
    foundElem.href = "/apps/landscape/~profile/"+result;
  }
});

