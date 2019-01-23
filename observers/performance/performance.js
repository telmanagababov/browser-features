const status = document.querySelector('#status');
const startMeasurement1 = document.querySelector('#controls-1 .control-start');
const stopMeasurement1 = document.querySelector('#controls-1 .control-stop');
const startMeasurement2 = document.querySelector('#controls-2 .control-start');
const stopMeasurement2 = document.querySelector('#controls-2 .control-stop');

configureMeasurement(startMeasurement1, stopMeasurement1, 'measurement-1');
configureMeasurement(startMeasurement2, stopMeasurement2, 'measurement-2');

observePerformance(onPerformanceChange);

function observePerformance(callback) {
    const po = new PerformanceObserver(callback);
    po.observe({ entryTypes: ['mark', 'measure'] });
    return po;
}
function onPerformanceChange(data) {
    const measurement = data.getEntries()[0];
    const text = `<pre>
    ${measurement.name}<br>
    type:       ${measurement.entryType},
    start time: ${measurement.startTime.toFixed(2)},
    duration:   ${measurement.duration.toFixed(2)}
    </pre>`;

    setStatus(text);
    console.log(measurement);
}

function configureMeasurement(startControl, stopControl, name) {
    startControl.disabled = false;
    startControl.onclick = () => {
        performance.mark(`${name}-start`);
        startControl.disabled = true;
        stopControl.disabled = false;
    }

    stopControl.disabled = true;
    stopControl.onclick = () => {
        startControl.disabled = false;
        stopControl.disabled = true;
        performance.mark(`${name}-stop`);
        performance.measure(`${name}`, `${name}-start`, `${name}-stop`);
    }
}

function setStatus(text) {
    status.innerHTML = text;
}