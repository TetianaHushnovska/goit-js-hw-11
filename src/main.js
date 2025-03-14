// Імпорт бібліотеки iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт бібліотеки SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Імпорт бібліоткеки Axios
import axios from "axios";

// Імпорт модулів
import responseData from './js/pixabay-api';
import { makeGallery } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const input = document.querySelector('.js-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionType: 'attr',
    captionDelay: 250,
    animationSpeed: 350,
    captionPosition: 'bottom',
});

lightbox.on('show.simplelightbox', function () {});
lightbox.on('error.simplelightbox', function (e) {
  console.log(e);
});

function showLoader() {
    loader.classList.remove('visually-hidden');
};

function hideLoader() {
    loader.classList.add('visually-hidden');
};

const errorMessage = {
    message: 'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    position: 'topRight',
}

const warning = {
    message: 'Enter your search request!',
    messageColor: '#000',
    backgroundColor: '#f5c386',
    position:'topRight',
}

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const request = input.value.trim();
    if (request === "") {
        gallery.innerHTML = ""; 
        hideLoader();
        iziToast.warning(warning)
        return;
    }

    gallery.innerHTML = "";
    showLoader();

    responseData(request)
        .then(data => {
            const images = data.hits;
            if (images.length === 0) {
                iziToast.error(errorMessage);
            }
            else {
                makeGallery(images, gallery, lightbox);
            }
        })
        .catch(error => {
            iziToast.error({
                message: 'Something went wrong. Please try again later.',
                position: 'topRight',
                backgroundColor: '#ef4040',
                messageColor: '#fff',
            })
            console.log('Error request:', error);
        })
        .finally(() => {
            hideLoader();
            input.value = '';
        });
});