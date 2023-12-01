import { createMiniPhotos } from "./miniPhotos.js";
const picTemp = document.querySelector('#picture').content.querySelector('.picture');
const picContainer = document.querySelector('.pictures');
createMiniPhotos(picTemp, picContainer)
