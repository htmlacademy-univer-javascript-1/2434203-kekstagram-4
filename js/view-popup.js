import { loadAllComments } from './utils.js';

const commentTemplate = document.querySelector('.social__comment');
document.querySelector('.comments-loader').classList.add('hidden');
const closeViewPopupBtn = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeViewPopup();
  }
};

const onCloseBtnClick = () => closeViewPopup();

function closeViewPopup() {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeViewPopupBtn.removeEventListener('click', onCloseBtnClick);
}

export const openViewPopup = (url, description, likes, comments) =>{
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  const commentsFragment = document.createDocumentFragment();
  loadAllComments(comments,commentsFragment, commentTemplate);

  const commentsContainer = document.querySelector('.social__comments');
  commentsContainer.innerHTML = '';
  commentsContainer.append(commentsFragment);

  document.body.classList.add('modal-open');

  closeViewPopupBtn.addEventListener('click', onCloseBtnClick);
};
