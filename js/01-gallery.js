import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const itemMarkup = galleryItems.map(galleryItem => {
        return `<div class='gallery__item'><a class="gallery__link" href="${galleryItem.original}" ><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"></a></div>`
    }).join('')

gallery.insertAdjacentHTML('afterbegin', itemMarkup)

gallery.addEventListener('click', onPickItem)
function onPickItem(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }
    
    console.log(event.target.getAttribute(['data-source']));

    const open = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.getAttribute(['data-source'])}">
	`);
    open.show();

    //Escape
    window.addEventListener('keydown', onEscKeyPress);
    function onEscKeyPress(event) {
        if (event.code === 'Escape') {
            open.close();
             window.removeEventListener('keydown', onEscKeyPress)
        }
    }
}


