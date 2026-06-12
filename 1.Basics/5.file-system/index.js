const fs = require("fs");
const path = require("path");


const dataFolder = path.join(__dirname,'data');
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}


const filePath = path.join(dataFolder,'example.txt');
fs.writeFileSync(filePath,'hello from file ');
console.log("file created successfully");


const readContent = fs.readFileSync(filePath,"utf8");
console.log('File content : ',readContent);


fs.appendFileSync(filePath,'\n This is a new Line of code');
console.log("new filw content added");

const asyncFilePath = path.join(dataFolder,'async-example.txt');
fs.writeFile(asyncFilePath,'Hello, Async node js', (err)=>{
    if(err) throw err;
    console.log('Async file is created successfully');


      fs.readFile(asyncFilePath,'utf8',(err,data)=>{
      if (err) throw err;
      console.log("Async file content :",data);

      fs.appendFile(asyncFilePath, '\n This is another line added',(err)=>{
        if (err) throw err;
        console.log('New line added to async file');

        fs.readFile(asyncFilePath,'utf8',(err,updatedData)=>{
        if (err) throw err;
        console.log("Updated file content",updatedData);
        })
      });
  });

});