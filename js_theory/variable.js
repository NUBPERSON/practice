// //javascipt is loosely bound language ,any variable can have any data type
// let a=10;
// let b="abc";
// let c=10.2;
// //let c="a"; error redefine is not allowed
// let d=a;
// d="10";//reassign allowed
// var e=10;
// var e="ba"; //redefine allowed in var
// //var=redefine  reassign allowed
// //let =redefine not allowed reassign allowed
// //const = both not allowed

// const f=1;
// //f=2; not allowed reassign

// //console.log(a,b,c,d,e,f);

// //console.log(a+e);

// let firstname="jaivin";
// let secondname="phogaat";
// //console.log(firstname+" "+secondname);
// //console.log(`my name ${firstname} ${secondname}`);

// //console.log(firstname.slice(1,4));
// //console.log(firstname.slice(-4,3));
// //console.log(firstname.charAt(1)); //firstname[1] same
// firstname[1]="v";//string are immutable //value change nhi hogi
//     let cnt=0;
// //console.log(firstname[1]);
//     for(let i=0;i<firstname.length;i++)
//         if(firstname[i]=='i')
//             cnt++;
// //console.log(cnt);
// //let str="12143436412353414";
// //let sum=0;
// //for(let i=0;i<str.length;i++){
//   //  sum+=parseInt(str[i]);
// //}
// //console.log(sum);
// // let str="123231231ABFAC";
// // let sum=0;
// // for(let i=0;i<str.length;i++){

// //     if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=92){
// //         sum+=str.charCodeAt(i);
// //        // console.log(str.charCodeAt(i));
// //     }
// //      else
// //        sum+=parseInt(str[i]);   
// // }
//  let test='jaivin phogaat is';
//  let ans="";
//  for(let i=test.length-1;i>=0;i--)
//       ans+=test[i];

//  console.log(ans);
// ans="";
// let i=0,j=0;
// while(j<test.length){
//     if(test[j]==" "){
//         let k=j-1;
//         while(k>=i)
//         {
//             ans+=test[k];
//             k--;
//         }
//         ans+=" ";
//         i=j+1;
//     }
//     if(j==test.length-1){
//         let k=j;

//         while(k>=i)
//         {
//             ans+=test[k];

//             k--;
//         }
//         i==j+1;
//     }
//     j++;
// }
// console.log(ans);


// let st="asdffda";
//  j=st.length-1;
//  i=0;
// while(i<=j){
//     if(st[i]!=st[j]){
//         console.log("no"); 
//         break;}
//     if(i==j-1 || i==j)   
//       console.log("yes");
//       i++;
//       j--;
// }


// let str = "abjfdsbfjdsgsdadbsafjndfdsfnka";


// console.log("hello check");
// let arr=[10,20,30,40,50,60];
// for(let i in arr)
//     console.log(i);

// for(let i of arr)
//      console.log(i);    

// console.log("a"+1+2);
// console.log(add(1,3));
// function add( a, b){
//     return a+b;
// }
// let a=4;
// let b=3;
// console.log(add(a,b));

// let addn=function(a,b){
//     return a+b;
// }
// console.log(addn(1,3));



//    let arr=['a','b','c','d'];

//      function temp1(selfarg,value,index){
//        console.log(selfarg,value,index);
//     }

//      let temp=(selfarg,value,index)=>{
//          console.log(selfarg,value,index);
//      }
//      arr.forEach(temp1.bind(this,"myfunc"));


    //  let arr=[1,2,3,4];
     
    //  arr.forEach(function(data,index){
    //          arr[index]=data+2;
    //  });
    //  console.log(arr);
    //  let newarr=arr.map(function(value){
    //          return value+2;
    //  })
    //  console.log(newarr);
     
      
    //   for(let i=0;i<arr.length;i++){
    //       if(arr[i]%2==0){
    //          arr.splice(i,1);
    //         i--;}
    //  }
    //   console.log(arr);
    //  while(j<arr.length){
    //      if(arr[j]%2==0)
    //         {
    //             newarr.push(arr[j]);
    //         }
    //         j++;
    //  }
    //  console.log(newarr);
//  arr=arr.filter((value)=>{
//     if(value%2==0) 
//        return true;  
//  });
// console.log(arr);

// let arr=[10,2,3,5,67,3,21,312,2];

// console.log(arr.sort(function(a,b){
//      if(a>b)
//        return -1;
//       else 
//       return 0; 
// }));

// let person={
//     "name":"jaivin",
//     "age":12

// }




// ques 1
// function frames(a,b){
//    return  (a*60)*b;
// }



// // ques 2
// function addUp(a){
//     return (((a+1)*a)/2);
// }


// // ques3
// function binary(a){
//     a=parseInt(a);
//     if(a==1)
//        return "1";
//     let ans="";
//    while(a>1){
//      ans= (a%2)+ans;
      
//      if(a%2==1){
//          a=a/2;
//          a=a-0.5;
//      }
//      else{
//           a=a/2;
//      }
    
//    }
//    if(a=1)
//      ans="1"+ans;
//    return ans;
// }



// //ques 4
// function tuckIn(a,b){
//     let newans=[...b];
//     newans.push(a[1]);
//     newans.unshift(a[0]);
//     return newans;
// }
 
// //ques 5;
// function countTrue(a){
//     let cnt=0;
//     for(let i of a){
//        if(i==true)
//           cnt++;
//     }
//     return cnt;
// }

// // ques 6
// function arrayOfMultiple(a,b){
//     let arr=[];
//     let c=a;
//     for(let i=0;i<b;i++){
//         arr.push(a);
//         a+=c;
//     }
//     return arr;
// }

// //ques 7
// function getLength(a){
//     let ans=0;
//     for(let i=0;i<a.length;i++){
//         if(isNaN(a[i])){
//             ans+= getLength(a[i]);
//         }
//         else{
//             ans++
//         }
//     }
//     return ans;
// }

// // ques 8
// function numInStr(a){
//    let ans= a.filter(function(data,index){
//         let qw=0;
//         for(let i=0;i<a[index].length;i++){
            
//             if(a[index].charCodeAt(i)>=48 && a[index].charCodeAt(i)<=57)
//                qw=1;
            
//         }
//         if(qw==1)
//           return true;
//         return false;
//     });
//   return ans;
// }


// //ques 9
// function missing(a,b){
//     for(let i=0;i<a.length;i++){
//         let c=0;
//      for(let j=0;j<b.length;j++){
//          if(b[j]==a[i]){
//            c=1;
//            b.splice(j,1);
//            break;
//          }

//      }
//      if(c==0)
//        return a[i];
     
//     }
    
// }

// console.log(missing(["pretty","is","jane","ugly"],["jane","is","pretty"]));



let obj={
    "hello1":1,
    "hello2":2

}
for(let i in obj)
   console.log(i);


// let helper2=(obj)=>{
//     console.log("[");
//      for(let i in obj){
//          if(typeof(obj[i])=="object"){
//                helper2(obj[i]);
//          }
//          else
//            console.log(obj[i]);
//      }
//      console.log("]");
// }
// let helper=(obj)=>{
//     let arr=[];
//     let arrn=[];
//     for(let i in obj){
//          arrn=[];
//          arrn.push(i);
//          if(typeof(obj[i])=="object"){
//              arrn.push(helper(obj[i]));
//          }
//          else{
//              arrn.push(obj[i]);
//          }
//          if(Object.keys(obj).length>1)
//            arr.push(arrn);
//     }
//     if(Object.keys(obj).length==1)
//          return arrn;
//     return arr;
// }
// let obj={
//     obj1:{
//         "obj1.1":"hello1.1",
//     },
//     obj2:{
//         "obj2.1":"hello2.1",
//         "obj2.2":{
//             "obj2.2.1":"hello2.2.1"
//         }
//     }
// }
// console.log(helper2(helper(obj)));

//