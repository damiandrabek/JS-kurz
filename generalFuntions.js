function testEven(val){
    if (val % 2 == 0){
        return "Even number"
    }
    return "Odd number"
}

function sumOfArrayElements(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

function multiplyAllNestedArrayElements(array) {
    var sumOfMultiplication = 1;
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].length; j++){
            sumOfMultiplication *= array[i][j]
        }
    }
    return sumOfMultiplication
}

function randomWholeNumberFromZero(maxNumber){
    return Math.floor(Math.random()*(maxNumber+1));
}
function randomWholeNumberWithInARange(minNumber, maxNumber){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

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

const createPerson = (name, age, gender) => ({name, age, gender})


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