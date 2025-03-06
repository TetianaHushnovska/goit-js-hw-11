export default function getUrl(request) {
    const API_KEY = '49159303-69e39ecdcc21e97a7866413fa';
    const BASE_URL = 'https://pixabay.com/api/';

    const imageParams = {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
    };

    let URL = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(request)}`;

    for (const param in imageParams) {
        if(param !== 'key'){
            URL += `&${param}=${imageParams[param]}`;
        }
    }
    return URL;
}