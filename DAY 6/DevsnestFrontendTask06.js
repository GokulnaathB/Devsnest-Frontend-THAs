// a JavaScript function to check whether an `input` is an array or not
let array = [1, 2, 3, 4, 5];
function isItAnArray(array) {
    return Array.isArray(array);
}
if (isItAnArray(array)) {
    console.log(`${array} is an array :)`);
} else {
    console.log(`${array} is not an array`);
}

// a JavaScript function to clone an array
let arrayIsCloned = [];
function clone(array) {
    for (number of array) {
        arrayIsCloned.push(number);
    }
}
clone(array);
console.log("Array is cloned-");
for (number of arrayIsCloned) {
    console.log(number);
}

// a JavaScript function to get the first element of an array
function firstElement(array) {
    return array[0];
}
console.log(firstElement([1, 2]));
console.log(firstElement([]));
console.log(firstElement([[], 1, 2, 3]));
console.log(firstElement([1, 7]));

// a simple JavaScript program to join all elements of the following array into a string-
let myColor = ["Red", "Green", "White", "Black"];

function arrayToString(colors) {
    let string1 = "";
    let string2 = "";
    string1 += `${colors[0]}+`;
    string2 += `${colors[0]},`;
    for (let i = 1; i < colors.length - 1; i += 1) {
        string1 += `${colors[i]}+`
        string2 += `${colors[i]},`
    }
    string1 += colors[colors.length - 1];
    string2 += colors[colors.length - 1];
    console.log(string1);
    console.log(string2);
}
arrayToString(myColor);

// a JavaScript program to find the most frequent item of an array
let mf = 0, m = 0;
let array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let item;
for (let i = 0; i < array1.length; i += 1) {
    for (let j = i; j < array1.length; j += 1) {
        if (array1[i] === array1[j]) {
            m += 1;
        }
        if (mf < m) {
            mf = m;
            item = array1[i];
        }
    }
    m = 0;
}
console.log(`${item} (${mf} times)`);
