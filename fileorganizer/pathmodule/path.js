let path=require('path');
let fs=require('fs');

// let input=process.argv.slice(2);

// let filename=input[0];
// let data=input[1];

// let currentpath=process.cwd();  //current path of file
// console.log(currentpath);

// let joinedpath=path.join(currentpath,'abc','cdf.txt');  // currentpath/abc/cdf/txt
// console.log(joinedpath);


let file=path.basename('/Users/jaivin/Desktop/pep webd/fileorganizer/pathmodule/path.js')
 console.log(file); //aage ki directory remove krdeta hai path.js output hoga
 let extname=path.extname('/Users/jaivin/Desktop/pep webd/fileorganizer/pathmodule/path.js'); //gives extension of path
 console.log(extname);