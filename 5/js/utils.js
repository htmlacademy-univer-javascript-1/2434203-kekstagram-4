import { COMMENTS_MAX, NAMES, MESSAGES, DESCRIPTIONS, COUNT_PHOTO, Likes } from './data.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const commentExample = () => ({
  id: getRandomInteger(0, COUNT_PHOTO),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length -1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const photoExample = () =>({
   id: getRandomInteger(1, COUNT_PHOTO),
   url: `photos/${getRandomInteger(1, COUNT_PHOTO)}.jpg`,
   description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
   likes: getRandomInteger(Likes.MIN, Likes.MAX),
   comments: Array.from({length:getRandomInteger(0 , COMMENTS_MAX)}, commentExample)
});

export const getPhotoArray = () => {
   const photo = Array.from({length: COUNT_PHOTO}, photoExample);
   return photo;
};