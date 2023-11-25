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
let array = [2, 3, 4],
    s = 0,
    p = 1,
    i;

for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log(s, p)

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


