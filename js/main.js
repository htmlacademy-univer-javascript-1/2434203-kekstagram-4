import { renderMiniPhotos } from './mini-photos.js';
import { getPhotosArray } from './utils.js';

const photosCollection = getPhotosArray();
renderMiniPhotos(photosCollection);
