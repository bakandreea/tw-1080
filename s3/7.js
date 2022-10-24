function someFunction (someArray, someNumber){
    if(!Array.isArray(someArray)){
        throw new Error('parameter is not array')
    }
    if(typeof someNumber === 'number' || someNumber instanceof Number){
        throw new Error ('parameter is not a number')
    }
    console.log('smthing')
}

try{
    someFunction([1,2,3,4],5)
    someFunction('boo', 5)
} catch (error){
    console.warn(error)
}