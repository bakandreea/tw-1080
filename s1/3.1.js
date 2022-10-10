function makeArray(s){
    const result = []
    s.split(' ')
    for(const elem of s.split(' ')){
        result.push(parseInt(elem))
    }
    return result
}


console.log(makeArray('1 2 3 4 5'))



function makeArray2(source, ...args ) { 
    for(const elem of args){
        source.push(elem)
    }
    return source
}

console.log(makeArray2([1,2,3,4],5,6,7))



function makeArray21(source, ...args){
    return source.concat(args)
}

console.log(makeArray2([1,2,3,4],5,6,7))


let a = [1,2,3]
let b = [...a] //asa se face copie