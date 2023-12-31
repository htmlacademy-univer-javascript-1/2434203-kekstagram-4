const PHOTOS_COUNT = 25;
const COMMENTS_MAX = 30;
const COMMENT_STEP = 5;
const HASHTAGS_COUNT = 5;
const DESCRIPTION_LENGTH = 140;
const SCALE = {
  MIN: 25,
  MAX: 100
};

const SCALE_STEP = 25;

const DEFAULT_SCALE = 100;

const DESCRIPTIONS = [
  'Просто бомба',
  'Пляж, коктейль, солнце',
  'Красота природы',
  'Счастье не за горами',
  'Момент наслаждения',
  'Кааааааайф',
  'Боже, как же это красиво',
  'Берег и облака',
  'Одиночество...',
  'Вот это встреча'
  ];

const NAMES = [
  'Виктор',
  'Алена',
  'Елена',
  'Света',
  'Катерина',
  'Максим',
  'Коля'
  ];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const Likes = {
  MIN:15,
  MAX:200
  };

export {DESCRIPTIONS, MESSAGES, NAMES, PHOTOS_COUNT, COMMENTS_MAX, Likes, COMMENT_STEP, DESCRIPTION_LENGTH, HASHTAGS_COUNT, SCALE, SCALE_STEP, DEFAULT_SCALE}
