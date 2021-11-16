function standardizeInput(collection){
    if(collection instanceof Array){
        return collection.slice()
    } else {
        return Object.values(collection)
    }
}

function myEach(collection, callback){
    const newCollection = standardizeInput(collection)

    for (let x = 0; x < newCollection.length; x++) {
        callback(newCollection[x])
    }
    return collection
}

function myMap(collection, callback){
    const newCollection = standardizeInput(collection)
    const newArray = []

    for (let x = 0; x < newCollection.length; x++) {
        newArray.push(callback(newCollection[x]))
    }
    
    return newArray

}

function myReduce(collection, callback, acc) {
    let newCollection = standardizeInput(collection)

    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    for (let x = 0; x < newCollection.length; x++) {
        acc = callback(acc, newCollection[x], newCollection)
    }
    
    return acc

}

function myFind(collection, predicate) {
    const newCollection = standardizeInput(collection)

    for (let x = 0; x < newCollection.length; x++) {
        if (predicate(newCollection[x])) return newCollection[x]
    }
    return undefined
}

function myFilter(collection, predicate) {
    const newCollection = standardizeInput(collection)
    const newArray = []

    for (let x = 0; x < newCollection.length; x++) {
        if (predicate(newCollection[x])) newArray.push(newCollection[x])
    }

    return newArray
}

function mySize(collection) {
    const newCollection = standardizeInput(collection)
    return newCollection.length
}

function myFirst(array, n) {
    return (n) ? array.slice(0, n) : array[0]
}

function myLast(array, n) {
    return (n) ? array.slice(array.length - n, array.length) : array[array.length-1]
}

function mySortBy(array, callback) {
    const newArray = [...array]
    return newArray.sort(function(a, b) {
        if (callback(a) > callback(b)) {
            return 1
        } else if (callback(b) > callback(a)) {
            return -1
        } else {
            return 0
        }
    })
}

//Don't fully understand this one - work on array flattening 

const unpack = function(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
}

const myFlatten = function(collection, shallow, newArr=[]) {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
      for (let val of collection) {
        if (Array.isArray(val)) {
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }

function myKeys(obj){
    return Object.keys(obj)
}

function myValues(obj) {
    return Object.values(obj)
}
    
