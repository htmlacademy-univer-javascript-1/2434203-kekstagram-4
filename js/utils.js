import { COMMENTS_MAX, NAMES, MESSAGES, DESCRIPTIONS, PHOTOS_COUNT, Likes } from './data.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getComment = () => ({
  id: getRandomInteger(0, PHOTOS_COUNT),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length -1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const getPhoto = () =>({
   id: getRandomInteger(1, PHOTOS_COUNT),
   url: `photos/${getRandomInteger(1, PHOTOS_COUNT)}.jpg`,
   description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
   likes: getRandomInteger(Likes.MIN, Likes.MAX),
   comments: Array.from({length:getRandomInteger(0 , COMMENTS_MAX)}, getComment)
});

export const getPhotosArray = () => Array.from({length: PHOTOS_COUNT}, getPhoto);

export const loadAllComments = (comments, commentsFragment, commentTemplate) =>{
  comments.forEach((element) => {
    document.querySelector('.current__comments-count').textContent = comments.length;
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = element.avatar;
    comment.querySelector('.social__picture').alt = element.name;
    comment.querySelector('.social__text').textContent = element.message;
    commentsFragment.append(comment);
  });
}
