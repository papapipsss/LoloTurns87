for(let x = 1; x < 10; x++){
    const element = '<div class="boxesT"><img src="assets/' + x + '.jpg" alt="" class="image"></div>'
    document.getElementById("sections").innerHTML += element;
}


for (let x = 1; x < 10; x++){
    const element = '<div class="carousel-item"><img class="carousel-images" src="./assets/' + x + '.jpg" alt="' + x + ' slide"></div>';
    document.querySelector('.carousel-inner').innerHTML += element;
}