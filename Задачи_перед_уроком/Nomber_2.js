function createObj (a,b,c) {
    let object = {[a]:a,[b]:b,[c]:c} 
    let obj = {}
    obj.a = a;
    obj[a] = a;
    console.log(obj)
    // console.log(object)
}

createObj("urgw",3,4)