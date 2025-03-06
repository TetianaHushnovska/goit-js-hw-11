// Імпорт бібліотеки iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт бібліотеки SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Імпорт бібліоткеки Axios
import axios from "axios";

// Імпорт модулів
import getUrl from './js/pixabay-api';

const searchForm = document.querySelector('.search-form');

function fetchImages(request) {
    const URL = getUrl(request);

    return axios.get(URL)
        .then(response => response.data.hits)
        .catch(error => {
            console.error('Error:', error);
            return
        });
}

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const request = document.querySelector('.js-input').value.trim();
    if (request==="") {
        iziToast.warning({
            title: '',
            message: 'Enter search request',
        })
        return
    }

    fetchImages(request)
        .then(images => {
            if (images.length === 0) {
                iziToast.error({
                    title: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                })
            }
            else {
                console.log(images);
            }
        })
        .catch(error => console.log('Error request:', error));

});

