const output = document.getElementById('output');
const type = document.getElementById('type');

cordova.plugins.barcodeScanner.scan(
    function (result) {
        output.innerHTML = 'Result ::  ' + result.text;
        type.innerHTML = 'Format ::  ' + result.format;
    },
    function (error) {
        alert('Scanning Failed: ' + error);
    },
    {
        preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: true, // Android, launch with the torch switched on (if available)
        saveHistory: false, // Android, save scan history (default false)
        prompt : "Scan Merchant QR Code", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: true // iOS and Android
     }
);
