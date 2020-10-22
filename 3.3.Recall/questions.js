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
    return Object.fromEntries(Object.entries(object).map(a => {tmp = a[1]; a[1]=a[0]; a[0]=tmp; return a;}));
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
    return string.substring(string.lastIndexOf("@") + 1, string.lastIndexOf("."));
}

let titleize = (string) => {
    return string.split('. ').map((w)=>w[0].toUpperCase() + w.slice(1)).join('. ').replace(/[a-z]{4,}/g , w => w[0].toUpperCase() + w.slice(1));
}

let checkForSpecialCharacters = (string) => {
    return (string.match(/\W/))?true:false;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return (number==1 || number==0) ? 1: number * factorial(number - 1);
}

let findAnagrams = (string) => {
    return [...new Set((string.length <= 2) ? (string.length === 2) ? [string, string[1] + string[0]] : [string] :
    string.split('').reduce((acc, letter, i) =>
        acc.concat(findAnagrams(string.slice(0, i) + string.slice(i + 1)).map(val => letter + val)),[]
    ))];
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);
}

let letterPosition = (array) => {
    return array.map(n => n.toLowerCase().charCodeAt(0)-96);
}