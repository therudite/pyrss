window.onload=function(){
  var subo=document.getElementById("fetchrss");
  var feedcontainer=document.getElementById("url");
  $('#fetchrss').submit(function fetchrss(event){
    event.preventDefault();
    $('#result').html("");
    var feedurl=feedcontainer.value;
    if(feedurl=="")
      feedurl="http://feeds.bbci.co.uk/news/rss.xml";
    if(feedurl.substring(0,7)==="http://" || feedurl.substring(0,8)==="https://"){}
    else
      feedurl="http://"+feedurl;
    
      
    $.ajax({
      type:'POST',
      url:'rssfeed',
      data :{link:feedurl}
    
    }).done(function(data) {

         for(var i=0;i<data.count;i++){
         
           img="<img src=\""+data.dat[i].image+"\" onerror=\"this.src=\'/static/img/rss1.gif\' \" alt=\"hello\"/>";
           colst1="<div class=\"col-md-1\">"
           colst2="<div class=\"col-md-2\">";
           colst3="<div class=\"col-md-3\">";
           colst5="<div class=\"col-md-5\">";
           
           sh=colst1+"<a href=\""+data.dat[i].link+"\">"+img+"</a></div>";
           
           $('#result').append("<div class=\"row\" id=\"row"+i+"\">");
             
           $('#row'+i).append(colst3+"<b>"+data.dat[i].title+"</b>"+"</div>");
           
           
           $('#row'+i).append(sh);
           
           $('#row'+i).append(colst5+data.dat[i].summary+"</div>");
          
           //$('#row'+i).append("<div class=\"col-md-4\">"+data.dat[i].summary+"</div>");
           $('#result').append("</div><br />");
         } 
       });
  });
}
