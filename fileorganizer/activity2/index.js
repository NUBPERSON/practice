let fs=require('fs');
let path=require('path');
let arr=process.argv.slice(2);
let i=0;
function make1(arr,p){
    let q=path.join(p,arr[i]);
    if(!fs.existsSync(q))
     fs.mkdirSync(q);
      console.log(q);
     i++;
    for(let j=0;j<3;j++){
      let data=`this is ${j}`;
      let w=path.join(q,`module ${j}.txt`);
      fs.writeFileSync(w,data);
      fs.writeFileSync(w,data);
      fs.writeFileSync(w,data);
    }
}
function makefiles(arr,p){
  let t= path.join(p,arr[i]);
  if(!fs.existsSync(t))
  fs.mkdirSync(t);
   
   i++;
   make1(arr,t);
   make1(arr,t);
   make1(arr,t);

}
let p="/Users/jaivin/Desktop/pepwebd/fileorganizer/actibity2";
makefiles(arr,p);

