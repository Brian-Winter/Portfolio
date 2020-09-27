var quoteArray = [
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
  "Don’t Let Yesterday Take Up Too Much Of Today.",
  "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character",
  "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
  "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
  "We May Encounter Many Defeats But We Must Not Be Defeated.",
  "We Generate Fears While We Sit. We Overcome Them By Action.",
  "Creativity Is Intelligence Having Fun."
];
var authorArray = [
  "Winston Churchill",
  "Will Rogers",
  "Unknown",
  "Vince Lombardi",
  "Steve Jobs",
  "Maya Angelou",
  "Dr. Henry Link",
  "Albert Einstein"
];
var quote = [];
var author = [];
$(document).ready(function() {
  //  var output = [];

  $("#testBtn").on("click", function() {
    for (var i = 0; i < quoteArray.length; i++) {
      var randomizer = Math.floor(Math.random(i) * (quoteArray.length));
      author = authorArray[randomizer];
      quote = quoteArray[randomizer];
    }

    $("#quote").html('"' + quote + '"');
    $("#author").html("-" + author);

//     $("#btnTweet").on("click", function(){
//     var txtToTweet = quote + " -" + author;
//    // alert(txtToTweet);
//       var tweetLink = href='https://twitter.com/intent/tweet?text='+encodeURIComponent(txtToTweet);
//       window.open(tweetLink, '_blank');

//   });
    function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
      return color;
}

$("#testBtn").on("click", function(){
  $("body").css("background-color", getRandomColor());
           });



  });
      $("#btnTweet").on("click", function(){
    var txtToTweet = quote + " -" + author;
   // alert(txtToTweet);
      var tweetLink = href='https://twitter.com/intent/tweet?text='+encodeURIComponent(txtToTweet);
      window.open(tweetLink, '_blank');

  });

});
