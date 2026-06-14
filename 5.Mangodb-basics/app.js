const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://safsal68_db_user:safsal68_db_user@cluster0.g0m2ext.mongodb.net/'
).then(()=>console.log('databaseconnected successfully'))
.catch((e)=> console.log(e));

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age: Number,
    isActive:Boolean,
    tags:[String],
    createdAt :{type : Date, default : Date.now}
});

// Create user model

const User = mongoose.model('User',userSchema);

async function runQueryExamples(){
    try{
     // Create a new document
     const newUser =  await User.create({
        name:'Afsal',
        email:"s.afsal68@gmail.com",
        age: '60',
        isActive:true,
        tags:['developer','designer'],
     })
     
     console.log('Created new user',newUser);

    }catch(e){
        console.log('Error -> ',e);


    }finally{
        await mongoose.connection.close()
    }
}

runQueryExamples()