const videoContainer = document.querySelector('.about__video-cover');
const cover = videoContainer.querySelector('.about__video-overlay');
const playButton = cover.querySelector('.about__video-btn');

const onPlayButtonClick = (evt) => {
  evt.preventDefault();
  if (playButton.parentElement.classList.contains('is-play')) {
    return;
  } else {
    playButton.parentElement.classList.add('is-play');
    const src = playButton.dataset.src;
    videoContainer.insertAdjacentHTML('afterbegin', '<iframe width="560" height="315" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');
  }
};

const initVideo = () => {
  playButton.addEventListener('click', onPlayButtonClick);
};

export {initVideo};
