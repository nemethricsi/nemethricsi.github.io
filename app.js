//database
const pictures = [
  {
    alt: 'apple',
    url: '/assets/images/0.jpg',
    thumbnail: '/assets/images/0_thumbnail.jpg'
  },
  {
    alt: 'blueberry',
    url: '/assets/images/1.jpg',
    thumbnail: '/assets/images/1_thumbnail.jpg'
  },
  {
    alt: 'kiwi',
    url: '/assets/images/2.jpg',
    thumbnail: '/assets/images/2_thumbnail.jpg'
  },
  {
    alt: 'lime',
    url: '/assets/images/3.jpg',
    thumbnail: '/assets/images/3_thumbnail.jpg'
  },
  {
    alt: 'strawberry',
    url: '/assets/images/4.jpg',
    thumbnail: '/assets/images/4_thumbnail.jpg'
  },
  {
    alt: 'watermelon',
    url: '/assets/images/5.jpg',
    thumbnail: '/assets/images/5_thumbnail.jpg'
  }
];

// loading in the thumbnail pictures
let thumbnails = document.querySelectorAll('.thumbnail');
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].style.backgroundImage = `url("/assets/images/${i}_thumbnail.jpg")`;
  thumbnails[i].onclick = () => { mainImage.style.backgroundImage = `url("/assets/images/${i}.jpg")`; }
}

//init the main image
let mainImage = document.querySelector('.main-image');
mainImage.style.backgroundImage = 'url("/assets/images/0.jpg")';

document.querySelector('.prev').onclick = () => {
  //go to PREVIOUS picture and thumbnail
}
document.querySelector('.next').onclick = () => {
  //go to NEXT picture and thumbnail
}