//vrem sa vedem daca un nr e prim si preluam din linie de comanda
function checkPrime(n) {
    for(let i = 2; i < Math.sqrt(n) + 1; i++){
        if (n % i === 0) {
            return false
        }
    }
    return true
}

if (process.argv.length < 3 ){
    console.log('not enough args')
}
else {
    const n = parseInt(process.argv[2])
    console.log(checkPrime[n])
}


function fib(n) {
    if(n === 0 || n === 1){
        return 1
    }else{
        return fib(n-1) + fib(n-2)
    }
}

if (process.argv.length < 3 ){
    console.log('not enough args')
}
else {
    const n = parseInt(process.argv[2])
    console.log(fib[n])
}