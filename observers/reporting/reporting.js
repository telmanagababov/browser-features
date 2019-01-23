const status = document.querySelector('#status');
const speechControl = document.querySelector('#control-speech');

speech('Auto-Playing text');
// navigator.vibrate('123');
speechControl.onclick = () => speech('Hello World');

observeReporting(onReported);

function observeReporting(callback) {
    const ro = new ReportingObserver(callback, { buffered: true });
    ro.observe();
    return ro;
}
function onReported([report]) {
    const text = `
        ${report.type}<br>
        ${report.url}<br><br>
        ${report.body.message}<br><br>
        id: ${report.body.id}<br>
        lineNumber: ${report.body.lineNumber}<br>
        columnNumber: ${report.body.columnNumber}<br>
    `;

    setStatus(text);
    console.log('report caught: ', report);
}

function speech(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

function setStatus(text) {
    status.innerHTML = text;
}