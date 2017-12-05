$(document).ready(function(){
  $(".btnContainer button").click(()=>{
   // $(".quoteText").toggle( "blind" );
   // $(".quoteContainer").toggle( "puff" ).toggle( "puff" );
    
     $.ajax({url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1", async: false,
             headers:{"Accept": "application/json",
             "X-Mashape-Key": "6Rgvy9SWGTmshGi1tjsl6lHcuG9Dp1PhZtBjsnUTBzENjq0PRZ"},
             success: function(result){
               result=JSON.parse(result);
               $(".quoteContainer").toggle( "puff" ).toggle( "puff" );
               $(".quoteText").text(result.quote);
               $(".quoteAuthor").text(result.author);
        }});
  })
});