'use strict' ;

{
    const images = [
        'slideshow/ph1.jpg',
        'slideshow/ph2.jpg',
        'slideshow/ph3.jpg',
        'slideshow/ph4.jpg',
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('section')
    mainImage.src = images[currentIndex];

    images.forEach(images => {
        const img = document.createElement('img');
        img.src = images;

        const li = document.createElement('li')
        li.appendChild(img);
        document.querySelector('.thumnail').appendChild(li);
    })
}