
$(document).ready(function () {


  $(".play-btn").click(function () {
    $("#play-btn").toggleClass("fa-play-circle fa-pause-circle");
    $("#song_img").toggleClass("songimg songimg-rotate");
    $("#img-div-d").toggleClass("img-div img-div-play");
   
  });
  });

function changeBgColor()
{
  var colors = ['#af000047','#af650047','#9faf0047','#16af0047','#00af4a47','#00a2af47','#0041af47','#1700af47','#4000af47','#8000af47','#af008d47','#af004c47','#af000047','#00000047'];

  var rand = Math.floor(Math.random() * colors.length);

  document.getElementById("main_holder").style.backgroundColor = colors[rand];


}



let mybg = document.getElementById("img-file").value;
  let track_art = document.querySelector(".songimg");
let song_name = document.querySelector("#songname");
let song_artist = document.querySelector("#artist");

  let play_btn = document.querySelector(".play-btn");
  let next_btn = document.querySelector(".next-btn");
  let prev_btn = document.querySelector(".prev-btn");

  let seek_slider = document.querySelector(".seek_slider");

  let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
  {
      name: "Chahun Mai Yaa Naa",
      artist: "Arijit Singh | Palak Muchhal",
      image: "/img/song_pic/chahun-mai-yaa.jpg",
      path: "/audio/Chahun Mai Yaa Naa.mp3"
    },
  {
      name: "Iss Darde Dil Ki Sifarish (Baarish)",
      artist: "Mohammed Irfan",
//       image: "/img/song_pic/barrish_song.png",
          image: "https://i1.sndcdn.com/artworks-000130721856-0jmmwo-t500x500.jpg",
    
      path: "/audio/Baarish.mp3"
    },
    {
      name: "Hamari Adhuri Kahani",
      artist: "Arijit Singh",
      image: "/img/song_pic/humari-adhuri-kahani.jpg",
      path: "/audio/Hamari Adhuri Kahani.mp3"
    },
    {
      name: "Meri Aashiqui",
      artist: "Jubin Nautiyal",
      image: "/img/song_pic/meri-aashiqui.png",
      path: "/audio/Meri Aashiqui.mp3"
  },
  {
    name: "Phir Bhi Tumko Chahunga",
    artist: "Arijit Singh",
    image: "/img/song_pic/Main-Phir-Bhi-Tumko.jpg",
    path: "/audio/Phir Bhi Tumko Chahunga.mp3"
  },
  {
    name: "Shape Of You",
    artist: "Ed Sheeran",
    image: "/img/song_pic/shape-of-you.jpg",
    path: "/audio/Shape Of You.mp3"
  },
  {
    name: "Sunn Raha Hai Naa Tu",
    artist: "Ankit Tiwari",
    image: "/img/song_pic/sunn-raha-hai.jpg",
    path: "/audio/Sunn Raha Hai Naa Tu.mp3"
  }
  
];
  

loadTrack(track_index);



  $('.filebtn').change( function(event) {
    let tmppath = URL.createObjectURL(event.target.files[0]);
    $('#bodymain').css('background-image', 'url(' + tmppath + ')'); 
    $('#song_img').css('background-image', 'url(' + tmppath + ')');   
    console.log(tmppath);
  });
    



function checkBg()
{
  
    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    document.getElementById("bodymain").style.backgroundImage = "URL(" + track_list[track_index].image + ")";
   
  
} 

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}




function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  play_btn.innerHTML = '<i class="fas fa-pause"></i>';


  refreshSong();
  checkBg();

}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  play_btn.innerHTML = '<i class="fas fa-play"></i>';

  pauseRefreshSong();
  checkBg();

}

function pauseRefreshSong()
{
  $(document).ready(function () {
      $("#song_img").removeClass("songimg-rotate").addClass("songimg");
      $("#img-div-d").addClass("img-div").removeClass("img-div-play");

  });
}

function refreshSong()
{
  $(document).ready(function () {

      $("#song_img").removeClass("songimg").addClass("songimg-rotate");
      $("#img-div-d").addClass("img-div-play").removeClass("img-div");
   
  });
}


function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
  refreshSong();
  checkBg();
}

function prevTrack() {
  
  if (track_index > 0) 
    track_index -= 1;
 
  else 
    track_index = track_list.length;
    loadTrack(track_index);
    playTrack();
  refreshSong();
  checkBg();

}




  function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();
  
    
    song_name.textContent = track_list[track_index].name;
    song_artist.textContent = track_list[track_index].artist;
    
    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);

    checkBg();
 
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}








