var vid_links_relatives = ["13O1hb8crN573GrM6iJ0t0kVfj87h42ZU", "12-dAQvleg0nYCbLIvYWW3RINy69CGZ83", "108QGz-YDJu0NMuIptenD5z_6pbc2bRCC"];

var vid_links_family = [];

var vid_links_acquaintances = []


// PHOTO BLOCKS
for(let x = 1; x < 18; x++){
    const element = '<div class="boxesT"><img src="./assets/new-blocks/' + x + '-edited.jpg" alt="" class="image"></div>'
    document.getElementById("photo-sections").innerHTML += element;
}


// HORIZONTAL CAROUSEL
for (let x = 2; x < 27; x++){
    const element = '<div class="carousel-item"><img class="d-block w-100" src="./assets/new-carousel/' + x + '-edited.jpg" alt="' + x + ' slide"></div>';
    document.querySelector('.horizontal').innerHTML += element;
}


// VERTICAL CAROUSEL
for (let x = 2; x < 33; x++){
    const element = '<div class="carousel-item"><img class="d-block w-100" src="./assets/new-vertical/0' + x + '-edited.jpg" alt="' + x + ' slide"></div>';
    document.querySelector('.vertical').innerHTML += element;
}


// FAMILY
for (let x = 0; x < vid_links_family.length; x++){
    const element = '<iframe src="https://drive.google.com/file/d/' + vid_links_family[x] + '/preview" width="640" height="480" allow="autoplay" allowfullscreen class="videos"></iframe>'
    document.getElementById("vid-sections-family").innerHTML += element;
}


// RELATIVES 
for (let x = 0; x < vid_links_relatives.length; x++){
    const element = '<iframe src="https://drive.google.com/file/d/' + vid_links_relatives[x] + '/preview" width="640" height="480" allow="autoplay" allowfullscreen class="videos"></iframe>'
    document.getElementById("vid-sections-relatives").innerHTML += element;
}

// ACQUAINTANCES 
for (let x = 0; x < vid_links_acquaintances.length; x++){
    const element = '<iframe src="https://drive.google.com/file/d/' + vid_links_acquaintances[x] + '/preview" width="640" height="480" allow="autoplay" allowfullscreen class="videos"></iframe>'
    document.getElementById("vid-sections-acquaintances").innerHTML += element;
}

// function myFunction() {
//     var x = document.getElementById("carouselExampleIndicators1");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
// var temp_photo = "https://www.pixelstalk.net/wp-content/uploads/images5/Soft-Aesthetic-Wallpaper-HD-Free-download.jpg"
// for(let x = 1; x < 10; x++){
//     const element = '<div class="boxesT"><img src="' + temp_photo + '" alt="" class="image"></div>'
//     document.getElementById("sections").innerHTML += element;
// }

// for (let x = 2; x < 18; x++){
//     const element = '<div class="carousel-item"><img class="d-block w-100" src="' + temp_photo + '" alt="' + x + ' slide"></div>';
//     document.querySelector('.carousel-inner').innerHTML += element;
// }