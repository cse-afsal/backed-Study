function dealyFn(time)
{
    return new Promise((resolve)=> setTimeout(resolve,time))
}

console.log('Promise lecture starts')
dealyFn(2000).then(()=>console.log('after 2 second promise resolved'))
console.log("end");

function div(a,b){
    return new Promise((resolve, reject)=>{
        if(a===0){
            reject('can not perform division by 0')

        }else {
            resolve(a/b)
        }
    })
}

div(10,9)
.then(result=> console.log(result,"res"))
.catch(error=> console.log(error,"err"));