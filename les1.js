
// Exercise 4
// var fs = require("fs");
// var filePath = process.argv[2];


// fs.readFile(filePath, "utf8", function (err, data){

//   if (!err) {

//     var newLines = data.split('\n');
//     console.log(newLines.length - 1);

//   }
//   else console.log("");

// });


//Exercise 5

var fs = require('fs');
var path = require('path');
var ext = "."+process.argv[3];

fs.readdir(process.argv[2], function(err, list){
  if(!err){
    for(var i =0; i < list.length; i++){
      if(path.extname(list[i]) == ext){
         console.log(list[i]);
      }
    }
  }
});





