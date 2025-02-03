// selecting element using Jquery
$('h1');
// selecting element using Jquery and adding CSS style
$('h1').css("color", "red")
$('h1').addClass("big-title , margin-50").css("color", "red")
//manipulating text using Jquery
$('button').html("<em>Hey</em>")
//event listener using Jquery
$("button").click(function() {
    $("h1").css("color","blue")
})
//adding and removing elements using Jquery
$('h1').before("<button>New Button</button>").click(function(){
    $("h1").css("color","red")
})
// animation
$("button").on("click",function(){
    $("h1").slideToggle();
})