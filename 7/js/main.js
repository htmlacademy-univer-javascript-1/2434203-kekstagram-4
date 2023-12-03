import { createMiniPhotos } from "./mini-photos.js";
import { getPhotosArray } from './utils.js';
import { photosCount } from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosCollection = getPhotosArray(photosCount);
createMiniPhotos(pictureTemplate, photosCollection)
