function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve,time))
}

async function delayedGreet(name){
    await delayFn(2000)
    console.log(name)
}

delayedGreet("Afsall");


async function div(a,b){
    try{
        if(b===0) throw new Error('Can not divide by 0')
            return a;
    }catch(error){
       console.error('error',error)
       return null;
    }
}

async function mainFn(){
    console.log(await div(10,2));
    console.log(await div(10,0));
}

mainFn();