const jsmediatags = window.jsmediatags;

document.querySelector("#song-file").addEventListener("change", (event) => {
  
  const file = event.target.files[0];

  jsmediatags.read(file, {
    onSuccess: function(tag) { 

      // Array buffer to base64
      const data = tag.tags.picture.data;
      const format = tag.tags.picture.format;
      let base64String = "";
      for (let i = 0; i < data.length; i++) {
        base64String += String.fromCharCode(data[i]);
      }

      // Output media tags
          document.querySelector("#bodymain").style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;
          document.querySelector("#song_img").style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;
      

              
      document.querySelector("#songname").innerHTML = tag.tags.title;
      document.querySelector("#artist").innerHTML = tag.tags.artist;
      },
      onError: function(error) {
        console.log(error);
      }
  });  
});


$('#song-file').change( function(event) {
    var tmppath = URL.createObjectURL(event.target.files[0]);
    $("#songcur").attr('src', tmppath);    
    console.log(tmppath);
    });



$('#img-file').change( function(event) {
    var tmppath = URL.createObjectURL(event.target.files[0]);
    $('#bodymain').css('background-image', 'url(' + tmppath + ')'); 
    $('#song_img').css('background-image', 'url(' + tmppath + ')');   
    console.log(tmppath);
    });





