// Test Value
const DATE = '2017-07-10';



// Groups Regexp Example
const GROUPS_REGEXP = /(\d{4})-(\d{2})-(\d{2})/u;

const groupsContent = document.querySelector('#groups-container .container-content');
const groupsMatches = GROUPS_REGEXP.exec(DATE);

console.group('groups');
console.log('date: ', DATE);
console.log('regexp: ', GROUPS_REGEXP);
console.log('matches: ', groupsMatches);
console.groupEnd();

groupsContent.innerText = `
    date     :  ${DATE}
    regexp   :  ${GROUPS_REGEXP}
    matches  :  ${JSON.stringify(groupsMatches)}
`;



// Variables Regexp Example
const VARIABLES_REGEXP = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;

const variablesContent = document.querySelector('#variables-container .container-content');
const variablesMatches = VARIABLES_REGEXP.exec(DATE);

console.group('variables');
console.log('date: ', DATE);
console.log('regexp: ', VARIABLES_REGEXP);
console.log('matches: ', variablesMatches.groups);
console.groupEnd();

variablesContent.innerText = `
    date     :  ${DATE}
    regexp   :  ${VARIABLES_REGEXP}
    matches  :  ${JSON.stringify(variablesMatches.groups)}
`;