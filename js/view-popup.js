import { COMMENT_STEP } from './data.js';
import { onDocumentKeydown } from './utils.js';

const commentTemplate = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');
const activeComments = document.querySelector('.current__comments-count');
const closeViewPopupBtn = document.querySelector('.big-picture__cancel');
const moreCommentsBtn = document.querySelector('.social__comments-loader');

const loadAllComments = (comments, commentsContainer) =>{
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((element) => {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = element.avatar;
    comment.querySelector('.social__picture').alt = element.name;
    comment.querySelector('.social__text').textContent = element.message;
    comment.classList.add('hidden');
    commentsFragment.append(comment);
  });
  commentsContainer.innerHTML = '';
  commentsContainer.append(commentsFragment);
}

const renderMoreComments = () => {
  let currentComment = document.querySelector('.social__comment.hidden');
  let i = 0;
  for (; i < COMMENT_STEP; i++) {
    if (!currentComment) {
      commentsLoader.classList.add('hidden');
      break;
    }
    currentComment.classList.remove('hidden');
    currentComment = currentComment.nextElementSibling;
    if (!currentComment) {
      commentsLoader.classList.add('hidden');
      activeComments.textContent = +activeComments.textContent + 1;
      break;
    }
  }
  activeComments.textContent = +activeComments.textContent + i;
};

const onCloseBtnClick = () => closeViewPopup();
const onLoadCommentsBtn = () => renderMoreComments();

function closeViewPopup() {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown(closeViewPopup));
  closeViewPopupBtn.removeEventListener('click', onCloseBtnClick);
}

export const openViewPopup = (url, description, likes, comments) =>{
  document.body.classList.add('modal-open');
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  activeComments.textContent = '0';
  const commentsContainer = document.querySelector('.social__comments');

  loadAllComments(comments,commentsContainer);

  commentsLoader.classList.remove('hidden');
  renderMoreComments();

  document.addEventListener('keydown', onDocumentKeydown(closeViewPopup));
  moreCommentsBtn.addEventListener('click', onLoadCommentsBtn);
  closeViewPopupBtn.addEventListener('click', onCloseBtnClick);
};
