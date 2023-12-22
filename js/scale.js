import {SCALE, SCALE_STEP, DEFAULT_SCALE} from './data.js';

const imgUploadWindow = document.querySelector('.img-upload');
const smallerButtonElement = imgUploadWindow.querySelector('.scale__control--smaller');
const biggerButtonElement = imgUploadWindow.querySelector('.scale__control--bigger');
const scaleInputElement = imgUploadWindow.querySelector('.scale__control--value');
const imageElement = imgUploadWindow.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () => scaleImage(Math.max(parseInt(scaleInputElement.value, 10) - SCALE_STEP, SCALE.MIN));

const onBiggerButtonClick = () => scaleImage(Math.min(parseInt(scaleInputElement.value, 10) + SCALE_STEP, SCALE.MAX));

const resetScale = () => {scaleImage(DEFAULT_SCALE);
};

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

export {resetScale};
