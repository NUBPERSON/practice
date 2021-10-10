const request=require('request');
const cheerio=require('cheerio');
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score";

  request(url,cb);
function cb(error,response,html) {
     if(error){
        console.error("ERROR",error);
    }
    else{
      extractHtml(html);
    }
}

function extractHtml(html){
    let selectorTool=cheerio.load(html);
    let data=selectorTool(".best-player-name>a").text();
    console.log(data);

   
}