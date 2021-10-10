const request=require('request');
const cheerio=require('cheerio');
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

  request(url,cb);
function cb(error,response,html) {
     if(error){
        console.error("ERROR",error);
    }
    else{
      extractHtml(html);
    }
}
let player="";
let maxw=-1;
function extractHtml(html){
    let selectorTool=cheerio.load(html);
    let dataarr=selectorTool(".table.bowler");
    //let data=selectorTool(dataarr[0]).text();
    for(let i=0;i<dataarr.length;i++){
          let bowlerarr=selectorTool(dataarr[i]).html();
          let rowarr=selectorTool(bowlerarr).find('tbody>tr');
          for(let i=0;i<rowarr.length;i++){
                let eachbowler=selectorTool(rowarr[i]).find('td');
                let playername=selectorTool(eachbowler[0]).text();
                let playerwic=selectorTool(eachbowler[4]).text();

                if(maxw<playerwic){
                  player=playername;
                  maxw=playerwic;
                }
          }
    }
  console.log(player);
  console.log(maxw);

   
}