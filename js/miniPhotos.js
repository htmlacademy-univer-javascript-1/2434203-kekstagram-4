import { getPhotosArray } from './utils.js';

const createMiniPhotos = () => {
  const picTemp = document.querySelector('#picture').content.querySelector('.picture');
  const picContainer = document.querySelector('.pictures');
  const photosCollection = getPhotosArray(25);
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
