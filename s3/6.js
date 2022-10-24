const orderCoffee = type => {
    const types = {
        SPECIAL: 'SPECIAL',
        REGULAR: 'REGULAR'
    }

    if(Object.values(types).indexOf(type) === -1){
        throw new Error('coffe error')
    }else{
        console.log(`here is your ${type} coffe`)
    }
}

try{
    orderCoffee('REGULAR')
    orderCoffee('SWEET')
}catch (error) {
    console.warn(error)
}