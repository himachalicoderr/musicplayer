
$(document).ready(function () {

  var colors = ['#af000047','#af650047','#9faf0047','#16af0047','#00af4a47','#00a2af47','#0041af47','#1700af47','#4000af47','#8000af47','#af008d47','#af004c47','#af000047','#00000047'];

  
  $(".play-btn-block").click(function () {
    $("#play-btn").toggleClass("fa-play-circle fa-pause-circle");
    $("#song_img").toggleClass("songimg songimg-rotate");
    $("#img-div-d").toggleClass("img-div img-div-play");
   
  });


  $(".color-btn").click(function () {
    var rand = Math.floor(Math.random()*colors.length);
    $(".main-holder").css('background-color', colors[rand]);
    $(".song-block").css('background-color', colors[rand]);

  });

  
  

});



