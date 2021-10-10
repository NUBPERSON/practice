let fs=require('fs');
let path=require('path');
let input=process.argv.slice(2);
let directory=input[0];
let allfiles=fs.readdirSync(directory);
let content="";

for(let i=0;i<allfiles.length;i++){
    let entityname=allfiles[i];
    let fpath=path.join(directory,entityname);
    let status=fs.lstatSync(fpath);
    let isfile=status.isFile();
    
    if(isfile){
         let extname=path.extname(fpath);
         if(extname==".txt"){
             content+=fs.readFileSync(fpath);
         }
    }
}

let summaryfile="/Users/jaivin/Desktop/pepwebd/fileorganizer/activity1/summary/final.txt";
fs.writeFileSync(summaryfile,content);