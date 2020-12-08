const output = document.getElementById('output');
const type = document.getElementById('type');

cordova.plugins.barcodeScanner.scan(
    function (result) {
        output.innerHTML = 'Result ::  ' + result.text;
        type.innerHTML = 'Format ::  ' + result.format;
    },
    function (error) {
        alert('Scanning Failed: ' + error);
    }
);