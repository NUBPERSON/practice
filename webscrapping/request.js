const request=require('request');
const cheerio=require('cheerio');
request("https://www.worldometers.info/coronavirus/",cb);
function cb(error,response,html){
    if(error){
        console.error("ERROR",error);
    }
    else{
        extractHtml(html);
    }
}

function extractHtml(html){
    let selectorTool=cheerio.load(html);
    let statsArr=selectorTool(".maincounter-number");
    for(let i=0;i<statsArr.length;i++){
        let data=selectorTool(statsArr[i]).text();
        console.log(data);
    }
}