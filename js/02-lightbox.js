import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const itemMarkup = galleryItems.map(galleryItem => {
        return `<a class="gallery__item" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" /></a>`
    }).join('')
gallery.insertAdjacentHTML('afterbegin', itemMarkup)


// Библиотека
let lightbox = new SimpleLightbox('.gallery a',{captionDelay:'250ms', captionsData:'alt'});
lightbox.close()
