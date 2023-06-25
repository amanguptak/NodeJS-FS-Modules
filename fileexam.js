const fs = require('fs');


fs.writeFile('TextFile1.txt',"Aman Gupta ",(err)=>{

    if(!err){
        console.log("File Written Succesfully")
    }
})

fs.appendFile('TextFile1.txt', "Welcome to NodeJS", (err) => {
    if (!err) {
        console.log('File Written Successfully');
    }
});

fs.readFile('TextFile1.txt', (err, data) => {
    if(!err){
        console.log(data.toString());
    }
});


fs.rename('TextFile1.txt', 'renamedFile.txt', (err)=> {
    if (!err){
        console.log('File Renamed!'); 
    } 
   
  });


  fs.unlink('TextFile1.txt', (err)=> {
    if (err) throw err;
    console.log('File deleted!');
  })


