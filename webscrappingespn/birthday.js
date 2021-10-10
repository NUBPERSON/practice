const cheerio=require('cheerio');
const request=require('request');
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
 request(url,cb);
 function cb(err,code,data){
     if(err)
        console.log(err);
      else
       extract(data);  
 }

function extract(html){
   let selectortool=cheerio.load(html);
    let tablearr=selectortool('.table  tbody');
    for(let i=0;i<4;i++){
        let table= selectortool(tablearr[i]);
        let tablerowarr=selectortool(table).find('tr');
        for(let j=0;j<tablerowarr.length;j++){
            let link= selectortool(tablerowarr[j]).find('a').attr('href');
            if(link)
            helper(link);
        }

    }

}
  
function helper(link){
    let fulllink="https://www.espncricinfo.com"+link;
    request(fulllink,cb1);
}
function cb1(err,cod,data){
    if(err)
      console.log(error);
    else
      helper2(data);  
}

function helper2(html){
   let selectortool=cheerio.load(html);
   let allinfo= selectortool('.player-card-description.gray-900');
    console.log(selectortool(allinfo[0]).text());
    console.log(selectortool(allinfo[1]).text());
    console.log("");

}