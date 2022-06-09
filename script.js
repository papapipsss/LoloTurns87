var temp_photo = "https://www.pixelstalk.net/wp-content/uploads/images5/Soft-Aesthetic-Wallpaper-HD-Free-download.jpg"


for(let x = 1; x < 18; x++){
    const element = '<div class="boxesT"><img src="./assets/new-blocks/' + x + '-edited.jpg" alt="" class="image"></div>'
    document.getElementById("sections").innerHTML += element;
}

for (let x = 2; x < 18; x++){
    const element = '<div class="carousel-item"><img class="d-block w-100" src="./assets/new-carousel/' + x + '-edited.jpg" alt="' + x + ' slide"></div>';
    document.querySelector('.carousel-inner').innerHTML += element;
}

// for(let x = 1; x < 10; x++){
//     const element = '<div class="boxesT"><img src="' + temp_photo + '" alt="" class="image"></div>'
//     document.getElementById("sections").innerHTML += element;
// }

// for (let x = 2; x < 18; x++){
//     const element = '<div class="carousel-item"><img class="d-block w-100" src="' + temp_photo + '" alt="' + x + ' slide"></div>';
//     document.querySelector('.carousel-inner').innerHTML += element;
// }