const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const effectsElement = modalElement.querySelector('.effects');
const sliderElement = modalElement.querySelector('.effect-level__slider');
const sliderContainer = modalElement.querySelector('.img-upload__effect-level');
const effectLevelElement = modalElement.querySelector('.effect-level__value');

const effectName = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilter = {
  [effectName.CHROME]: {
    style: 'grayscale',
    unit: '',},
  [effectName.SEPIA]: {
    style: 'sepia',
    unit: '',},
  [effectName.MARVIN]: {
    style: 'invert',
    unit: '%',},
  [effectName.HEAT]: {
    style: 'brightness',
    unit: '',},
  [effectName.PHOBOS]: {
    style: 'blur',
    unit: 'px',},
};

const sliderOption = {
  [effectName.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,},
  [effectName.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,},
  [effectName.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,},
  [effectName.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,},
  [effectName.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,},
  [effectName.HEAT]: {
    min: 0,
    max: 3,
    step: 0.1,},
};

let currentEffect = effectName.DEFAULT;

const isDefault = () => currentEffect === effectName.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imageElement.style.filter = null;
    return;
  }
  const {value} = effectLevelElement;
  const {style, unit} = effectToFilter[currentEffect];
  imageElement.style.filter = `${style}(${value}${unit})`;
};

const onSliderUpd = () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setImageStyle();
};

const showSlider = () => sliderContainer.classList.remove('hidden');

const hideSlider = () => sliderContainer.classList.add('hidden');

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  sliderElement.noUiSlider.on('update', onSliderUpd);
  hideSlider();
};

const updSlider = ({ min, max, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    step,
    start: max,
  });
};

const setSlider = () => {
  if (isDefault()) {
    hideSlider();
  } else {
    updSlider(sliderOption[currentEffect]);
    showSlider();
  }
};

const setEffect = (result) => {
  currentEffect = result;
  setSlider();
  setImageStyle();
};

const resetEffect = () => setEffect(effectName.DEFAULT);

const onEffectsChange = (evt) => setEffect(evt.target.value);

let sliderCreated = false;

const initEffect = () => {
  if (!sliderCreated) {
    createSlider(sliderOption[currentEffect]);
    sliderCreated = true;
    effectsElement.addEventListener('change', onEffectsChange);
  }
};

export {resetEffect, initEffect};
