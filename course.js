/* DATA TYPES>
undefined, null, boolean, string, symbol, number, object
*/

// 
var myName = "Damian";
myName = 16;
let ourName = "Drabek";
const pi = 3.14;
// 
var a;
var b = 2;
console.log(a)
a = 7
b = a
console.log(b)
// 

/* Initialize these 3 variables*/
var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1;
b = b + 5;
c = c + "string!";
console.log(a, b, c);

// 
var xdasdDasdad;
xdasdDasdad = 10;
console.log(xdasdDasdad);

// Math
var sum = 10 + 7;
var difference = 10 - 7;
var multiplication = 10 * 7;
var division = 10 / 7;
console.log(sum, difference, multiplication, division);

// 
var myVar = 87
myVar = myVar + 1
myVar ++

myVar = myVar - 1
myVar --
// FLOATS
var flt1 = 2 * 2.5;
var flt2 = 4.4 / 2;
console.log(flt1, flt2);
// 
var modulo = 11 % 3;
console.log(modulo)

// MATHS SHORCUTS
a = a + 12;
a += 12;

a = a - 12;
a -= 12;

a = a * 3;
a *= 3;

a = a / 5;
a /= 5;

// STRINGS
var mojeMeno = "Damian";
var myStr = 'I am a "man"';
console.log(myStr);
var mojStr = "I am a \"man\"";
console.log(mojStr);
var meinStr = `I 'am' a \"man\"`;
console.log(meinStr);

// 
/* 
\'  = single quote
\"  = double quote
\|  = backslash
\n  = new line
\r  = carriage return
\t  = tab
\b  = backspace
\f  = form feed
*/ 
var myString = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myString);

// Concatenating strings
var mojString = "This is the start. " + "This is the end.";
console.log(mojString);
mojString += " This is heaven.";
console.log(mojString);

var meinName = "Damian Drabek";
var wilkommen = "Servus! ";
wilkommen += meinName;
console.log(wilkommen);
var wilkommenSatz = "Servus! Mein name ist " + meinName + ".";
console.log(wilkommenSatz);

// STRING LENGHT
var firstName = "Martin";
var firstNameLength = firstName.length;
console.log(firstNameLength);

// USING INDEX TO FIND
var krstneMeno = "Pavla";
var firstLetterOfKrstneMeno = krstneMeno[0];
console.log(firstLetterOfKrstneMeno);

// LAST CHARACTER OF STRING
var ersteName = "Rudolf";
var lastLetterOfErsteName = ersteName[ersteName.length - 1];
console.log(lastLetterOfErsteName);
var thirdToLastLetter = ersteName[ersteName.length - 3];
console.log(thirdToLastLetter);

// FUNCTION
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
    return result;
}
console.log(wordBlanks("dog", "big", "runs", "slowly"));
console.log(wordBlanks("man", "tall", "rizzes", "quickly"));

// ARRAYS
var ourArray = ["Damian", 16, 14.88];
var nestedArray = [32, ["the universe", 42], ["everything", 101010]];
console.log(nestedArray[0], nestedArray[2]);

ourArray[1] = 7;
console.log(ourArray);

var myArray = [[1,2,3,], [4,5,6], [7,8,9], [[10,11,12],13,14,15]];
var myData = myArray[3][0][1];
console.log(myData);

var yourArray = ["Fico", "R", "pes"]
yourArray.push(["old", "leftist"])
console.log(yourArray)
yourArray.push(myData)
// console.log(yourArray)

theirsArray = ["co", "si", "khok"];
var removedFromYourArray = theirsArray.pop();
console.log(theirsArray);
var firstRemovedFromYourArray = theirsArray.shift();
console.log(theirsArray);
theirsArray.unshift(["som", "khok"]);
console.log(theirsArray);

// SHOPPING LIST
var myList = [["cereals", 3], ["milk", 2], ["bananas", 3], ["juice", 1]];

// FUCTIONS
function ourReusableFunction () {
    console.log("Hello World!");
}
ourReusableFunction();

function reusableFunction () {
    console.log("Hi Wolrd!")
}

function ourFunction(a, b) {
    console.log(a-b);
}
ourFunction(10,5);

function functionWithMe(num1, num2) {
    return num1 - num2;
}
console.log(functionWithMe(11,7));

// GLOBAL SCOPE IN FUNCTION
var myGlobal = 10; /*global scope*/
function fun1() {
    var output = "";  /* var declared => local scope*/
    if (typeof myGlobal != "undefiend") {
        output += "myGlobal: " + myGlobal;
        return output;
    }
}
console.log(fun1())

// LOCAL SCOPE IN FUNCTION
function myLocalScope() {
    var myVar = 5; /* var declared => local scope*/
    return myVar;
}
console.log(myLocalScope())

// GLOBAL SCOPE VS. LOCAL SCOPE
var outerWear = "T-Shirt"
function myOutfit(){
    var outerWear = "Sweater" /* local variable takes precedence over global variable */
    return outerWear;
}
console.log(outerWear)
console.log(myOutfit())

// 
var sum = 0;
function addThreeToSum(){
    sum += 3;
}

// ASSIGNMENT WITH A RETURNED VALUE
var changed = 0;
function change(num){
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed);

// QUEUE
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5]
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// BOOLEANS
function welcomeToBooleans(){
    return false;
}

// IF STATEMENS
function ourTrueOrFalse(isItTrue){
    if (isItTrue) {
        return "Yes, it's true."
    }
    return "No, it's false."
}
console.log(ourTrueOrFalse(false))

function testEven(val){
    if (val % 2 == 0){
        return "Even number"
    }
    return "Odd number"
}
console.log(testEven(8))

/*   STRICT EQUALITY OPERATOR
3 === 3  => True (converts to same data type)
3 === '3'  => False (doesn't convert to same data type)
*/

function testEven(val){
    if (val % 2 !== 0){
        return "Odd number"
    }
    return "Even number"
}
console.log(testEven(8))

/*   STRICT INEQUALITY OPERATOR
3 !== 3  => False (converts to same data type)
3 !== '3'  => True (doesn't convert to same data type)
*/

function testGreaterThan(value, comparedNumber){
    if (value > comparedNumber){
        return String(value + " is greater than " + comparedNumber);
    }
    if (value < comparedNumber){
        return String(value + " is smaller than " + comparedNumber);
    }
    if (value == comparedNumber){
        return String(value + " is equal to " + comparedNumber);
    }
    if (isNaN(value)) {
        return "Entered wrong value";
    }
}
console.log(testGreaterThan(5,10));

// greater or equal operator
function testGreaterOrEqual(val){
    if (val >= 20) {
        return "20 or greater";
    }
    if (val >= 10) {
        return "10 or greater";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(10));

// less or equal operator
function testLessOrEqual(val){
    if (val <= 10) {
        return "10 or less";
    }
    if (val <= 20) {
        return "20 or less";
    }
    return "More than 20";
}
console.log(testLessOrEqual(10));

// and operator
function testLogicalAnd(val){
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(37));

// or operator
function testLogicalOr(val){
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(9));

// else statement
function testElse(val) {
    var result;
    if (val > 5){
        result = "Bigger than 5";
    }
    else {
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse(2));

// else if statement
function testElseIf(val){
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(1));

function testIfElseIf(val) {
    if (val < 5){
        return "tiny";
    } else if (val < 10) {
        return "small";
    } else if (val < 15) {
        return "medium";
    } else if (val < 20) {
        return "large";
    } else {
        return "huge";
    }
}
console.log(testIfElseIf(21));

// GOLF CODE
var parNames = ["Hole in one!", "Eagle", "Birdie", "Par", "Bogey", "Double-bogey", "Go home"];
function golfScore(par, strokes){
    if(strokes < 1) {
        return "Invalid number of strokes";
    }
    if(strokes == 1){
        return parNamearr[0];
    } else if(strokes <= (par-2)){
        return parNamearr[1];
    } else if(strokes == (par-1)){
        return parNamearr[2];
    } else if(strokes == par){
        return parNamearr[3];
    } else if(strokes == (par+1)){
        return parNamearr[4];
    } else if(strokes == (par+2)){
        return parNamearr[5];
    } else if(strokes >= (par+3)){
        return parNamearr[6];
    } 
}
console.log(golfScore(5, 7));

//  SWITCH STATEMENTS
function caseInSwitch(val){
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "invalid number";
    }
    return answer;
}
console.log(caseInSwitch(5));

function sequentialSizes(val) {
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
        default:
            answer = "out of range";
    }
    return answer;
}
console.log(sequentialSizes(10));

function chainToSwitch(val){
    var ans = "";
    switch(val) {
        case "bob":
            ans = "marley";
            break;
        case 1:
            ans = "You're no. 1";
            break;
        case 42:
            ans = "the answer to everthing";
            break;
        case 99:
            ans = "missed you by this much";
            break;
        case 7:
            ans = "ate nine";
            break;
        default:
            return "invalid input"; 
    }
    return ans;
}
console.log(chainToSwitch(42));

// RETURNING BOOLEAN VALUES FROM FUNCTIONS
function isLess(a, b){
    return a < b;
}
console.log(isLess(10,5));

// 
function abTest(num1,num2,power){
    if(num1 < 0 || num2 < 0){
        return "invalid input";
    }
    return Math.round(Math.pow(Math.sqrt(num1) + Math.sqrt(num2), power));
}
console.log(abTest(2,2,3));

// BLACKJACK CARD COUNTING
var count = 0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "K":
        case "A":
            count --;
            break
    }
    var holdbet = "hold";
    if (count > 0){
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}
console.log(cc("a"));

// OBJECTS
var ourDog = {
    "name": "Rex",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

/* accesing object properties with dot notation */
var nameValue = ourDog.name;
var legsValue = ourDog.legs;
console.log(nameValue, legsValue);


/* accesing object properties with bracket notation */
var italianMenu = {
    "an appetizer": "bruschetta",
    "the primi": "linguine alla carbonara",
    "the secondi": "porchetta con patate al forno",
    "the drink": "Moët Chandon"
};
var appetizerValue = italianMenu["an appetizer"];
var primiValue = italianMenu['the primi'];
var secondiValue = italianMenu['the secondi'];
var drinkValue = italianMenu['the drink'];
console.log(appetizerValue);
console.log(primiValue);
console.log(secondiValue);
console.log(drinkValue);

/* using variables */
var testObj = {
    12: "nomad",
    16: "hunter",
    19: "farmer"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);

/* updating object properties*/
var myCar = {
    "brand": "Porsche",
    "model": "911",
    "horsepower": 650
};
myCar.horsepower = 700;
console.log(myCar.horsepower);

/* adding object properties*/
myCar["torque"] = 700;
myCar.drive = "AWD";
console.log(myCar);

/* deleting object properties*/
delete myCar.drive;
console.log(myCar);

/* using objects for lookups*/
function phoneticLookup(val){
    var result = "";
    var lookup = {
        "alpha": "Amsterdam",
        "bravo": "Bratislava",
        "charlie": "Copenhagen",
        "delta": "Dublin",
        "echo": "Edinburgh",
        "foxtrot": "Frankfurt"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("bravo"))

/* testing object for properties */
var myObject = {
    animal: "horse",
    pet: "dog",
}
function checkObject(checkProp){
    if (myObject.hasOwnProperty(checkProp)) {
        return myObject[checkProp]
    } else {
        return "not found"
    }
}
console.log(checkObject("animal"))

/* complex objects */
var myMusic = [
    {
        "artist": "Eminem",
        "title": "Recovery",
        "release year": 2010,
        "formats": [
            "CD", "LP", "DVD"
        ]
    },
    {
        "artist": "Depeche Mode",
        "title": "Violator",
        "release year": 1990
    }
];

/* nested objects */
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passanger seat": "knife"
        },
        "outside": {
            "trunk": "corpse"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

/* nested arrays */
var myPlants = [
    {
        type: "flowers",
        list: ["rose", "tulip", "dandelion"]
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"]
    }
];
var secondTree = myPlantarr[1].list[1];
console.log(secondTree);

// record collection
var heavyMetalCollection = {
    "123": {
        "artist": "Metallica",
        "album": "Master of Puppets",
        "tracks": ["Master of Puppets", "Welcome Home", "Orion"]
    },
    "456": {
        "artist": "Rammstein",
        "album": "Herzleid",
        "tracks": ["Wollt ihr das Bett in Flammen sehen", "Der Meister", "Weisses Fleisch", "Asche zu Asche", "Du riechst so gut"]
    }
};
var heavyMetalCollectionCopy = JSON.parse(JSON.stringify(heavyMetalCollection));

function updateCollection(id, property, value){
    if(value === ""){
        delete heavyMetalCollection[id][property];
    } else if(property === "tracks"){
        heavyMetalCollection[id][property] = heavyMetalCollection[id][property] || [];
        heavyMetalCollection[id][property].push(value);
    } else {
        heavyMetalCollection[id][property] = value;
    }
    return heavyMetalCollection
}
console.log(updateCollection(123, "album", "Metallica"))
console.log(updateCollection(456, "tracks", "Laichzeit"))

// WHILE LOOPS
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++
}
console.log(myArray)

// FOR LOOPS
var ourArray = [];
for (var i = 0; i < 5; i++){
    ourArray.push(i);
}
console.log(ourArray);

var meinArray = [];
for (var i = 0; i < 10; i += 2){
    meinArray.push(i);
}
console.log(meinArray);
var deinArray = [];
for (var i = 1; i < 10; i += 2){
    deinArray.push(i);
}
console.log(deinArray);

var array1 = [];
for (var i = 10; i > 0; i -= 2){
    array1.push(i);
}
console.log(array1)
var array2 = [];
for (var i = 9; i > 0; i -= 2){
    array2.push(i);
}
console.log(array2)

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);

function sumOfArrayElements(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
var array3 = [7, 8, 9, 10];
var sumOfArray3 = sumOfArrayElements(array3);
console.log(sumOfArray3)

/* nested for loops */
function multiplyAllNestedArrayElements(array) {
    var sumOfMultiplication = 1;
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].length; j++){
            sumOfMultiplication *= array[i][j]
        }
    }
    return sumOfMultiplication
}
array4 = [[1, 2], [3, 4], [5, 6]];
var product = multiplyAllNestedArrayElements(array4);
console.log(product);

// DO WHILE LOOPS
var array5 = [];
var i = 0;
do {
    array5.push(i);
    i++;
} while (i < 5)
console.log(i, array5);

// PROFILE LOOKUP
var contacts = [
    {
        "firstName": "Damian",
        "lastName": "Drabek",
        "number": "7154801237",
        "likes": ["floorball", "coding"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "1514848161",
        "likes": ["intriguing cases", "Scotlandyard"]
    },
    {
        "firstName": "Erich Maria",
        "lastName": "Remarque",
        "number": "0999111222",
        "likes": "literature"
    },
    {
        "firstName": "Emmanuel",
        "lastName": "Macron",
        "number": "6969696969",
        "likes": "older women"
    },
];

function lookUpProfile(array, name, property){
    for (var i = 0; i < array.length; i++){
        if (array[i].lastName === name) {
            return array[i][property] || "No such property";
        }
    }
    return "No such contact";
}

var test1 = lookUpProfile(contacts, "Holmes", "likes");
console.log(test1);

// GENERATING RANDOM NUMBERS

/* decimal number */
function randomFraction(){
    return Math.random();
}
console.log(randomFraction());

/* whole number */
var randomNumberBetween0and19 = Math.floor(Math.random() * 20)
console.log(randomNumberBetween0and19)

function randomWholeNumber(maxNumber){
    return Math.floor(Math.random()*(maxNumber+1));
}
console.log(randomWholeNumber(7));

function randomWholeNumberWithInARange(minNumber, maxNumber){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
console.log(randomWholeNumberWithInARange(20,30));

// parseInt
function convertToInteger(str){
    return parseInt(str);
}
console.log(convertToInteger('7'));

function convertToIntegerWithRadix(str, radix){
    return parseInt(str, radix);
}
console.log(convertToIntegerWithRadix('10011', 8))

// TERNARY OPERATOR -> condition ? statement-if-true : statement-if-false
function checkEquality(a, b){
    return a === b ? true : false;  /* same as return a === b */
}
console.log(checkEquality(1,3))

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(-1))

// LET VARIABLE
let kok = ""
kok = "daa"

"use strict";

function checkScope(){
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("block scope i is: ", i)
    }
    console.log("function scope i is: ", i)
    return i;
}
checkScope();

// CONST VARIABLE -> read-only 'let'
function printManyTimes(str){
    "use strict";
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=1){
        console.log(SENTENCE);
    }
}
printManyTimes("kokot");

// MUTATING AN ARRAY WITH CONST
const s = [5, 7, 2];
function editInPlace(array){
    "use strict";
    // s = [2,5,7] -> doesn't work
    arr[0] = 2;
    arr[1] = 5;
    arr[2] = 7;
    return arr
}
console.log(editInPlace(s))

// PREVENT OBJECT MUTATION
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14,
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99
    } catch (ex) {
        console.log(ex)
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// ARROW FUNCTIONS              /* 'function()' === '() =>' */  /* if(returning one value) -> 'function()' === '() => lorem()' */ 
/* const magic = function() {
    return new Date();
} */
const magic = () => new Date();
console.log(magic())

// arrow functions with parameters
/* var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
} */
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3,4,5]));

// higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 7, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)

// default parameters
const increment = (function(){
    return function increment(number, value = 1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

// rest operator -> ...
const sum = (function() {
    return function sum(...kers){
        return kers.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4,5));

// spread operator -> [...'']
const array1 = ['jan', 'feb', 'mar', 'apr', 'may']
let array2;
(function(){
    array2 = [...array1];
    array1[0] = 'dec'
})();
console.log(array2);

 // DESTRUCTURING ASSIGNMENT

// using destructuring assignment to assign variables from objects
var voxel = {
    x: 3.6,
    y: 7.4,
    z: 6.54,
}
/* var x = voxel.x;
var y = voxel.y;
var z = voxel.z; */
const {
    x: a,
    y: b,
    z: c,
} = voxel;
console.log(a,b,c);

const AVG_TEMPERATURES = {
    today: 7,
    tomorrow: 12,
}
function getTomorrowTemp(avgTemps){
    "use strict";
    const {tomorrow: tomorrowTemp} = avgTemps;
    return tomorrowTemp;
}
console.log(getTomorrowTemp(AVG_TEMPERATURES));

// using destructuring assignment with nested object
const LOCAL_FORECAST = {
    today: {
        min: 0,
        max: 6,
    },
    tomorrow: {
        min: 0,
        max: 11,
    },
};
function getTomorrowMax(forecast){
    "use strict";
    const {tomorrow: {max: tomorrowMaxTemp}} = forecast;
    return tomorrowMaxTemp;
}
console.log(getTomorrowMax(LOCAL_FORECAST));

//  using destructuring assignment to assign varibles from arrays
const [z,x,,y] = [1,2,3,4,5,6];
console.log(z,x,y)

let a = 8 , b = 6;
(() => {
    "use strict";
    [a,b] = [b,a];
})();
console.log(a);
console.log(b);

// using destructuring assignment to assign varibles from arrays
const SOURCE = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [,,...arr] = list;
    return arr;
}
const arr = removeFirstTwo(SOURCE);
console.log(arr);
console.log(SOURCE);

// using destructuring assignment to pass an object as a function's parameters
const stats = {
    max: 56.78,
    standardDeviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85,
}
const half = (function(){
    return function half({max, min}){
        return (max + min) / 2.0;
    }
})();
console.log(half(stats));

// CREATING STRINGS WITH TEMPLATE LITERALS
const PERSON =  {
    name: "Damian Drabek",
    age: 16,
};
const greeting = `Hello, my name is ${PERSON.name}! 
I am ${PERSON.age} years old.`;
console.log(greeting);

const RESULT = {
    success: ["max-length", "na-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr){
    const resultDisplayArray = [];
    for(let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
resultDisplayArrayFailure = makeList(RESULT.failure);
console.log(resultDisplayArrayFailure)

// writing concise object literal declarations using simple fields
/*const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender,
    };
};*/
const createPerson = (name, age, gender) => ({name, age, gender})
let createDamian = createPerson("Damian", 16, "male");
console.log(createDamian)

// writing concise declarative functions
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
}
bicycle.setGear(3);
console.log(bicycle.gear);

// USING CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION

/* using new keyword do initiate an object */
var spaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new spaceShuttle("Jupiter");
console.log((zeus.targetPlanet))

/* using class keyword do initiate an object */
class spaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new spaceShuttle("Mars");
console.log((zeus.targetPlanet));

function makeClassVegetable(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClassVegetable();
const carrot = new Vegetable("carrot");
console.log(carrot.name);

// USING GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT
class Book {
    constructor(author){
        this._author = author;
    }

    // getter
    get writer(){
        return this._author;
    }

    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}


function makeClass(){
    class Thermostat{
        constructor (temp){
            this._temp = (9/5 * temp) + 32;
            console.log(this._temp)
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();

const thermos = new Thermostat(20);

let temp = thermos.temperature;

thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp)

// IMPORT 
import { capitalizeString } from "./string_function.js"
const cap = capitalizeString("hello!")
console.log(cap)

// importing everything
import * as capitalizeString from "./string_function.js"


// EXPORT
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
export {capitalizeString};

export const foo = "bar";
export const bar = "foo";

// export fallback with export default
export default function subtract(x,y) {
    return x - y
}

// importing default export
import addition from "math_functions"
addition(7,4)