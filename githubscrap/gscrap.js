const request=require('request');
const cheerio=require('cheerio');
let url="https://github.com/topics";
request(url,cb);
function cb(err,response,html){
    if(err)
      console.log(err);
     else
        helper(html); 
}
let gitTopics=[];
function helper(html){
   let selectorTool= cheerio.load(html);
    let arr=selectorTool('.gutter a');
    for(let i=0;i<arr.length;i++){
      let fullUrl= "https://github.com"+selectorTool(arr[i]).attr('href');
       gitTopics.push( {
          topicUrl :fullUrl,
          repos:[]
       });
        request(fullUrl,callb.bind(this,i));
    }
   
  //  console.log(gitTopics);
}
function callb(index,err,response,html){
      if(err)
        console.log(err);
      else
         help(html,index);  
}
function help(html,index){
    let selectorTool=cheerio.load(html);
    let newarr=selectorTool('.f3.color-text-secondary.text-normal.lh-condensed a')
    for(let i=1;i<16 && i<newarr.length;i=i+2){
        let fullUrl="https://github.com"+selectorTool(newarr[i]).attr('href');
        gitTopics[index].repos.push({
            repoUrl: fullUrl,
            issue:[]
         } );
         fullUrl=fullUrl+"/issues";
         //console.log(fullUrl);
         request(fullUrl,acb.bind(this,index,(i-1)/2 ) );
    }
    //console.log(gitTopics[index]);
}
function acb(index1,index2,err,response,html){
    if(err)
      console.log(err);
    else
      helperpls(html,index1,index2);  
}
function helperpls(html,index1,index2){
    let selectorTool=cheerio.load(html);
    let allatag=selectorTool('.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title');
    //console.log(allatag.length);
    for(let i=0;i<8 && i<allatag.length;i++){
       let issurl= "https://github.com"+selectorTool(allatag[i]).attr('href');
       gitTopics[index1].repos[index2].issue.push({
           issueName:selectorTool(allatag[i]).text(),
           issueUrl:issurl
       });
     //  console.log(issurl);
    }
    
}

