const picContainer = document.querySelector('.pictures');

const renderMiniPhotos = (photosCollection) => {
  const picFragment = document.createDocumentFragment();

  photosCollection.forEach(({url, description, likes, comments}) => {
    const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('img').src = url;
    picture.querySelector('img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picFragment.append(picture);
  });
  picContainer.append(picFragment);
}
export {renderMiniPhotos};
