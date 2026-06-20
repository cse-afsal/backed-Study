const mongoose = require('mongoose');

const connectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb is connected sucessfully');
        
    }catch(error){
       console.error('Mongodb connection failed', error);
       process.exit(1)
    }
};

module.exports = connectToDB;
