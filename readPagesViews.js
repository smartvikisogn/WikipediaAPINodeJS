var rp= require('request-promise');


var options={
  
    methode: 'GET',    uri:'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Africa/daily/2017042700/2018051700',
    json:true    
};

rp(options)
    .then(function(parseBody){
    
    console.log(parseBody);
    console.log(parseBody.items[0].views);
    
    var data=[];
    for(i=0 ;i<parseBody.items.length;i++){
        
        parseBody.items[0].timestamp
        
        
        data.push(parseBody.items[0].views);
        
    }
          })
    .catch(function (err){
    });
