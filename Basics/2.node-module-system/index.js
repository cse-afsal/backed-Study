const math = require('./math');
console.log(math.sum(10,0));


try{

    console.log('trying to divide by zero');
    let result = math.div(0,0)
    console.log(result);
}catch(error){
    console.log('Caught an error', error.message);
}