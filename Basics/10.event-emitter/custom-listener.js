

class MyCustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello'
    }

    greet(name){
        this.emit('greeting',`this.greeting}, ${name}`)
    }
}

const myCustomeEmitter = new MyCustomEmitter();

myCustomeEmitter.on('greeting',(input)=>{
    console.log('Greeting event', input)
});

myCustomeEmitter.greet("Afsallllllllllll");