let fs=require('fs');
let path=require('path');

//  fs.writeFileSync('abc.txt',"hell")
//  fs.appendFileSync('abc.txt',"hello");
//  let data=fs.readFileSync('abc.txt');
//  console.log(data+"");//to convert buffer to readible code 
 //fs.unlinkSync('abc.txt')//delete the file

 //to make a folder  
 // fs.mkdirSync("pathmodule"); //in file where there is fs.js

  //to delete a folder
  //fs.rmdirSync("pathmodule");

  //to check whether the file exist or not
//   let result = fs.existsSync(fs.js);
//   console.log(result); //true if exist else false

//   //status of file/folder
//   let status=fs.lstatSync("abc.txt");
//   console.log(status);
//   status.isFile()//true if file
//   status.isDirectory()//true if folder


//   let file=fs.readdirSync('/Users/jaivin/Desktop/pep webd/fileorganizer/fsm') // is folder ke andr konsi file hai
//   console.log(file); // return a array of all file/folder in that folder

 
let srcpath="/Users/jaivin/Desktop/pep webd/fileorganizer/fsm/abc.txt";
let destpath="/Users/jaivin/Desktop/pep webd/fileorganizer/fsm/efg.txt";
fs.copyFileSync(srcpath,destpath); 
 //now copying in a file which doesnt exist in diff folder with same name
 let fileinwhichfolder="/Users/jaivin/Desktop/pep webd/fileorganizer/fsm/filecopy";
 let nameoffiletobecopied=path.basename(srcpath);//gives name of file
 let dest=path.join(fileinwhichfolder,nameoffiletobecopied);
 fs.copyFileSync(srcpath,dest);  //first create if there is no path and copy from srcpath
