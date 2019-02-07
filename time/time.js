// Test Data
const TIME_DATA = [
    { value: 15.5, type: 'second' },
    { value: -25, type: 'minute' },
];
const DAYS_DATA = [
    { value: 1, type: 'day' },
    { value: -1, type: 'day' },
];

// Dom Elements
const enContent = document.querySelector('#en-container .container-content');
const ruContent = document.querySelector('#ru-container .container-content');
const literalContent = document.querySelector('#literal-container .container-content');

// Time Formats
const enTimeFormat = new Intl.RelativeTimeFormat('en');
const ruTimeFormat = new Intl.RelativeTimeFormat('ru');
const literalTimeFormat = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });


addSample(enTimeFormat, enContent, TIME_DATA);
addSample(ruTimeFormat, ruContent, TIME_DATA);
addSample(literalTimeFormat, literalContent, DAYS_DATA);


// Format data based on TimeFormat
function addSample(timeFormat, content, testData) {
    content.innerText = testData.reduce((acc, { value, type }) => {
        const input = `format( ${padRight(value, 4)}, ${padRight(type, 6)} )`;
        return `${acc}${input}  :  ${timeFormat.format(value, type)}
    `;
    }, `
    `);
}

// Utility Functions
function padRight(text, padNum = 14, padItem = ' ') {
    const string = text.toString();
    const padSize = padNum - string.length;

    return padSize > 0
        ? string + padItem.repeat(padSize)
        : string;
}