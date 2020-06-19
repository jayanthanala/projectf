var like = [];
var i = 0;

$(".like").hide();

$(".postBody").mouseenter(function(){
  $(".like").fadeIn("15000");
});

$(".author").mouseleave(function(){
  $(".like").fadeOut("3000");
});

$(".heart").click(function(){
  $("this").css("background-color","red");
});


$(".hand").click(function(){
  i++;
  like.push(i);
  var len = like.length;
  console.log(like[len-1]);
  $(".like p").html(like[len-1]);
});
