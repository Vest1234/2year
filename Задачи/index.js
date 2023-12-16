//Задание 17
let arr1 = ['a', 'd', 'f']
let arr2 = ['a', 'd', 'f']

// function isEqualArrays (arr1, arr2) {
    for(i = 0; i < arr1.length; i++){
    if (arr1[i] == arr2[k]) {
        console.log("true")
    } else {
        console.log("false")
    }
    }
    for(k = 0; i < arr2.length; i++){
        if (arr1[i] == arr2[k]) {
            console.log("true")
        } else {
            console.log("false")
        }
    }

// }

isEqualArrays(arr1, arr2)

//Задание 14
function getSumAndMultOfArray(arr) {
    let s = 0;
    let p = 1;
    arr3.forEach(function (num) {
        s += num;
        p *= num;
    });
    console.log(s, p)
}

const arr3 = [1, 2, 3];
getSumAndMultOfArray(arr);

//Задание 19

let arr = [2, 3, 4],
    d = 0,
    b = 1;


for (i = 0; i < arr.length; i += 1) 
   {
    d += arr[i];
    b = d/arr.length;
    }
console.log(d, b)

//задание 9

let data = [0, 1, false, 2, undefined, '', 3, null];

function erase (data) {
data.slice(null)
data.slice('')
data.slice(false)
data.slice(undefined)
console.log(data)
}

erase(data)


//Задание 16
function isEqualArrays(arr4, arr5) {
    if (arr4.length !== arr5.length) {
        console.log(false);
    }
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] !== arr5[i]) {
            console.log(true);
        }
    }
    console.log(true);;
}

const arr4 = [1, 2, 3];
const arr5 = [1, 2, 5];
console.log(isEqualArrays(arr1, arr2));

