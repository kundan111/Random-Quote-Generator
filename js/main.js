$(document).ready(function(){

  var randomQuote;
  var randomNum;
  var author;
  getQuote();




  function getQuote(){

var quotes=["The road to hell is paved with works-in-progress.","The road to hell is paved with adverbs.","Who wants to become a writer? And why? Because it’s the answer to everything. … It’s the streaming reason for living. To note, to pin down, to build up, to create, to be astonished at nothing, to cherish the oddities, to let nothing go down the drain, to make something, to make a great flower out of life, even if it’s a cactus.","To gain your own voice, you have to forget about having it heard.","Cheat your landlord if you can and must, but do not try to shortchange the Muse. It cannot be done. You can’t fake quality any more than you can fake a good meal.","All readers come to fiction as willing accomplices to your lies. Such is the basic goodwill contract made the moment we pick up a work of fiction."];


   var author1=["—Philip Roth","—Stephen King","—Enid Bagnold","—Allen Ginsberg, WD","—William S. Burroughs","—Steve Almond, WD"];
   var randomNum=Math.floor((Math.random()*quotes.length));

     randomQuote=quotes[randomNum];
     author=author1[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(author);

 }



   $("#tweet").on("click",function(){

    window.open("https://twitter.com/intent/tweet?text"+  randomQuote +" "+ author);

    });


  $("#newQuote").on("click",function(){

    getQuote();

    });






});
