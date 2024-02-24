let arr = ["a","b","c","d"]

// arr.splice()
// console.log(arr)

function deleteO (b) {
    console.log(arr)
    arr.splice(b,b)
    console.log(arr)
}

deleteO(1)