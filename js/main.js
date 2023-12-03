import { renderMiniPhotos } from "./miniPhotos.js";
import { getPhotosArray } from './utils.js';


const photosCollection = getPhotosArray();
renderMiniPhotos(photosCollection);
