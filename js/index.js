
$(document).ready(function () {

  var colors = ['red', 'green', 'blue', 'orange','black','blueviolet', 'brown', 'aqua', 'burlywood', 'coral'];

  
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



