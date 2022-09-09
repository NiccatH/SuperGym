const playButton = document.querySelector('.about__video-btn');

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const onPlayerReady = (evt) => {
  evt.target.playVideo();
  playButton.parentElement.classList.add('is-active');
};

let player = '';
const onYouTubeIframeAPIReady = (id) => {
  player = new YT.Player('player', {
    width: '100%',
    height: '100%',
    videoId: id,
    host: 'https://www.youtube.com',
    playerVars: {'autoplay': 1, 'playsinline': 1, 'fs': 0},
    events: {
      'onReady': onPlayerReady,
    },
  });
};

const onPlayButtonClick = (evt) => {
  evt.preventDefault();
  playButton.classList.add('is-active');
  const src = playButton.dataset.src;
  onYouTubeIframeAPIReady(src);
};

const initVideo = () => {
  playButton.addEventListener('click', onPlayButtonClick);
};

export {initVideo};
