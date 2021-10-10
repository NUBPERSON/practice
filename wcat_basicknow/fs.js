const fs=require("fs");

//console.log(fs.readFileSync("a.txt","utf-8"));//encoding utf-8;(for normal eng)   remove it will come in buffer ascii code

//console.log(fs.existsSync("a.txt"));//return true or false on whether file exist or not

fs.writeFileSync("a.txt","i will overwrite data in a.txt if it exist ");

fs.writeFileSync("b.txt","if file doesnt exist i will create new file");

// let data=fs.readFileSync("a.txt","utf-8")

// fs.writeFileSync("b.txt",` ${data} hello1223`);

// fs.js a.txt -a b.txt    means a file mei b append hojae


if(process.argv[3]=="-a"){   //only console           a.txt -a b.txt
let file1name=process.argv[2];  //   0,1 are self by node only 3 is -a
let file2name=process.argv[4]; //
let file1data=fs.readFileSync(file1name,"utf-8");
let file2data=fs.readFileSync(file2name,"utf-8");
console.log(file1data + " " +file2data);
}


if(process.argv[3]=="-aw"){  // only write in file      a.txt -aw b.txt
    let file1name=process.argv[2];  // 0,1 are self by node only 3 is -a
let file2name=process.argv[4]; //
let file1data=fs.readFileSync(file1name,"utf-8");
let file2data=fs.readFileSync(file2name,"utf-8");
fs.writeFileSync("a.txt", file1data + " " +file2data);
}


