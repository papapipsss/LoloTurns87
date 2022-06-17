var vid_links_family = ["1EDT_fMWvs0RoN3P-k6oNLxnD1pgilP2S", "1TuJHnIpURD7CmaS6zNentaGJe8dj_OgY", "1oFvBQT_eyBk5XGqshxL9-bCGn5qE_qLZ", "1y2kBmNGV9uhagtpyLKOtNwdFMoiWFMfS", "1G75DuNXoBEXE3F2D5GIuqkl23bA1S0Mi", "1WCZpHGJIjt81jTHvOPm_Z0QU2YwRpY3N", "1lZ_Mjv3jmMU5HUkwSc7Im0c1S8TeM6Z6", "1D0xmk3ID9UFVqKB7dT6FU24SN3PAjF4t", "1E3gzxI2ivraAvEm46YHb4MKuRLsuRlBb", "1Qn6XMhQfqQuK5pWcGR9em5CuJNTt0gUU"];

var vid_links_relatives = ["13O1hb8crN573GrM6iJ0t0kVfj87h42ZU", "12-dAQvleg0nYCbLIvYWW3RINy69CGZ83", "108QGz-YDJu0NMuIptenD5z_6pbc2bRCC", "1IcwuACTp4W2Gq0VM6nSfY-1nuCZN1YZD", "11dCGA2PLJCini9IXxluQMrdSxHSx4G33", "1a5d0Uo13AKsNAhlrgARQzGbyPbWI7c1O", "1iLnojo6Ueycjgtf07F0GUVO1QUlVORAO"];

var vid_links_acquaintances = ["1ye-QaXqBoS-3suDfn4QYyOYzAI-ckbch", "1jtd5aRJo-coJAmYBqZirudqH53LUrb3b", "1PRtTaR7Or9wDpALWYLJxfWczMUrIOSjG"];


// HORIZONTAL CAROUSEL
for (let x = 2; x <= 27; x++){
    const element = '<div class="carousel-item"><img class="d-block w-100" src="./assets/new-carousel/' + x + '-edited.jpg" alt="' + x + ' slide"></div>';
    document.querySelector('.horizontal').innerHTML += element;
}

// VERTICAL CAROUSEL
for (let x = 2; x <= 34; x++){
    const element = '<div class="carousel-item"><img class="d-block w-100" src="./assets/new-vertical/0' + x + '-edited.jpg" alt="' + x + ' slide"></div>';
    document.querySelector('.vertical').innerHTML += element;
}

// PHOTO BLOCKS
for(let x = 1; x <= 51; x++){
    const element = '<div class="boxesT"><img src="./assets/new-blocks/' + x + '-edited.jpg" alt="" class="image"></div>'
    document.getElementById("photo-sections").innerHTML += element;
}

// FAMILY VIDEOS
for (let x = 0; x < vid_links_family.length; x++){
    const element = '<iframe src="https://drive.google.com/file/d/' + vid_links_family[x] + '/preview" width="640" height="480" allow="autoplay" allowfullscreen class="videos"></iframe>'
    document.getElementById("vid-sections-family").innerHTML += element;
}


// RELATIVES VIDEOS
for (let x = 0; x < vid_links_relatives.length; x++){
    const element = '<iframe src="https://drive.google.com/file/d/' + vid_links_relatives[x] + '/preview" width="640" height="480" allow="autoplay" allowfullscreen class="videos"></iframe>'
    document.getElementById("vid-sections-relatives").innerHTML += element;
}

// ACQUAINTANCES VIDEOS
for (let x = 0; x < vid_links_acquaintances.length; x++){
    const element = '<iframe src="https://drive.google.com/file/d/' + vid_links_acquaintances[x] + '/preview" width="640" height="480" allow="autoplay" allowfullscreen class="videos"></iframe>'
    document.getElementById("vid-sections-acquaintances").innerHTML += element;
}

// MUSIC PLAYER
function play() {
    var music = document.getElementById("music");
    var audio = document.getElementById("audio");

    if (music.style.display === "block") {
        audio.play();
        audio.volume = 0.75;
        music.style.display = "inline";
      } else {
        music.style.display = "block";
        audio.pause();
      }

}