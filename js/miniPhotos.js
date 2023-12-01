import { getPhotosArray } from './utils.js';
import { photosCount } from './data.js';

const createMiniPhotos = (picTemp, picContainer) => {
  const photosCollection = getPhotosArray(photosCount);
  const picFragment = document.createDocumentFragment();

  photosCollection.forEach(({url, description, likes, comments}) => {
    const picture = picTemp.cloneNode(true);

    picture.querySelector('img').src = url;
    picture.querySelector('img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;

    picFragment.append(picture);
  });
  picContainer.append(picFragment);
}
export {createMiniPhotos};
