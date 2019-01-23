const status = document.querySelector('#status');
const element = document.querySelector('#element');

observeResizing(element, onResized);

function observeResizing(element, callback) {
    const ro = new ResizeObserver(callback);
    ro.observe(element);
    return ro;
}
function onResized([entry]) {
    const { contentRect } = entry;
    const text = `
        x: ${contentRect.x}<br>
        y: ${contentRect.y}<br>
        width: ${contentRect.width}<br>
        height: ${contentRect.height}<br>
        top: ${contentRect.top}<br>
        right: ${contentRect.right}<br>
        bottom: ${contentRect.bottom}<br>
        left: ${contentRect.left}
    `;

    setStatus(text);
    console.log(entry);
}

function setStatus(text) {
    status.innerHTML = text;
}