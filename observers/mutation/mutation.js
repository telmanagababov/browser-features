const status = document.querySelector('#status');
const board = document.querySelector('#board');
const addControl = document.querySelector('#control-add');
const removeControl = document.querySelector('#control-remove');

addControl.onclick = addItemToBoard;
removeControl.onclick = removeItemToBoard;

observeMutations(board, onBoardMutated);

function observeMutations(element, callback) {
    const mo = new MutationObserver(callback);
    mo.observe(element, { childList: true });
    return mo;
}
function onBoardMutated([mutation]) {
    const text = `
        added nodes: ${mutation.addedNodes.length}, 
        removed nodes: ${mutation.removedNodes.length}
    `;
    setStatus(text);
    console.log(mutation);
}

function addItemToBoard() {
    const item = document.createElement('div');
    item.className = 'item';
    board.appendChild(item);
}
function removeItemToBoard() {
    if (board.childNodes.length > 0) {
        const item = board.childNodes[0];
        board.removeChild(item);
    }
}

function setStatus(text) {
    status.innerHTML = text;
}