const request=require("request");
const cheerio=require("cheerio");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
 request(url,cb);
 function cb(err,response,html){
        if(err){
            console.log(err);
        }
        else
           helper(html);
 }
 function helper(html){
      let selectorTool=cheerio.load(html);
      let alltable=selectorTool('.table.batsman tbody');
      let ans=[];
      let cnt=0;
      for(let i=0;i<alltable.length;i++){
           let rows=selectorTool(alltable[i]).find('tr');
            for(let j=0;j<rows.length-1;j=j+2){
                let allData=selectorTool(rows[j]).find('td');
            
               ans[cnt]={
                   name:selectorTool(allData[0]).text(),
                   runs:(selectorTool(allData[2]).text()),
                   balls:(selectorTool(allData[3]).text()),
                    sr:(selectorTool(allData[7]).text()),
            }
                
                 cnt++;
            }
          
            
      }
      for(let l=0;l<cnt;l++){
          console.log('name = '+ ans[l].name +' runs = '+ ans[l].runs + ' balls = ' + ans[l].balls + ' sr= '+ ans[l].sr);
      }
 }