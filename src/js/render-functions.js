export function createImageCard(image) {
    const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
    } = image;

    return `<li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="img-info">
            <div>
              <p class="info-name">Likes</p>
              <p class="info-data">${likes}</p>
            </div>
            <div>
              <p class="info-name">Views</p>
              <p class="info-data">${views}</p>
            </div>
            <div>
              <p class="info-name">Comments</p>
              <p class="info-data">${comments}</p>
            </div>
            <div>
              <p class="info-name">Downloads</p>
              <p class="info-data">${downloads}</p>
            </div>
          </div>
        </li>`;
}

export function makeGallery(images, galleryElement, lightboxInstance) {
  galleryElement.innerHTML = images.map(createImageCard).join('');

  if (lightboxInstance && typeof lightboxInstance.refresh === 'function') {
    lightboxInstance.refresh();
  }
}