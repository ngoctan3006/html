const play = document.querySelector('button');
const svgContainer = document.getElementById('svg');

const animItem = bodymovin.loadAnimation({
  container: svgContainer,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets5.lottiefiles.com/packages/lf20_rovf9gzu.json',
});

play.addEventListener('click', () => {
  svgContainer.classList.remove('hide');
  animItem.goToAndPlay(0, true);
});

animItem.addEventListener('complete', () => {
  svgContainer.classList.add('hide');
});
