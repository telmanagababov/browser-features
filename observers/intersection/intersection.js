const status = document.querySelector('#status');
const element = document.querySelector('#element');

observeIntersection(element, onElementIntersectionChanged);

function observeIntersection(element, callback) {
    const io = new IntersectionObserver(callback, {});
    io.observe(element);
    return io;
}
function onElementIntersectionChanged([info]) {
    if (info.isIntersecting) {
        setValidStatus();
    } else {
        setInvalidStatus();
    }
    console.log(info);
}

function updateStatus() {
    setValidStatus();
}
function setValidStatus() {
    status.className = 'valid';
    status.innerHTML = 'visible';
}
function setInvalidStatus() {
    status.className = 'invalid';
    status.innerHTML = 'hidden';
}