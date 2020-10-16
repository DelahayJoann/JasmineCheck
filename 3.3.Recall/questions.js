let selectElementsStartingWithA = (array) => {
    return array.filter((elem) => elem.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter((elem) => /^[aeiou]/i.test(elem));;
}

let removeNullElements = (array) => {
    return array.filter(x => x !== null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(x => x !== null && x !== false);
}

let reverseWordsInArray = (array) => {
    return array.map(x => x.split("").reverse().join(""));
}

let everyPossiblePair = (array) => {
    return array.sort().flatMap((value, i) => array.slice(i+1).map( w => [w,value].sort() ));
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    return Array.from([element]).concat(array);
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    return (!string.length %2)? string.substring(0,((string.length)/2)) : string.substring(0,((string.length+1)/2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter((a)=> a == a.split('').reverse().join('')).length;
}

let shortestWord = (array) => {
    return array.reduce((a, b) => a.length <= b.length ? a : b)
}

let longestWord = (array) => {
    return array.reduce((a, b) => a.length >= b.length ? a : b)
}

let sumNumbers = (array) => {
    return array.reduce((a,b) => a+b,0);
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return +string;
}

let calculateAverage = (array) => {
    return array.reduce((a,b) => a+b,0)/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0,array.find(elem => elem > 5));
}

let convertArrayToObject = (array) => {
    return array.reduce(function (r, a, i, aa) {(i & 1)? r[aa[i - 1]] = a:''; return r;}, {});
}

let getAllLetters = (array) => {
    return Array.from(new Set(array.join(''))).sort();
}

let swapKeysAndValues = (object) => {
    return ;
}

let sumKeysAndValues = (object) => {
    return Object.keys(object).reduce((sum,key)=>sum+Number.parseInt(key)+parseInt(object[key]),0);
}

let removeCapitals = (string) => {
    return string.match(/[^A-Z]/g, '').join('');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString("fr-FR") ;
}

let getDomainName = (string) => {
    return string.split('@','.')[2];
}

let titleize = (string) => {
    return ;
}

let checkForSpecialCharacters = (string) => {
    return ;
}

let squareRoot = (number) => {
    return ;
}

let factorial = (number) => {
    return ;
}

let findAnagrams = (string) => {
    return ;
}

let convertToCelsius = (number) => {
    return ;
}

let letterPosition = (array) => {
    return ;
}
