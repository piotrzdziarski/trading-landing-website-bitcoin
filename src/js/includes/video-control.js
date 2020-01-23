const video = document.getElementById('video');

video.style.height = video.offsetWidth * 0.56 + 'px';

addEventListener('resize', controlVideoHeight);

function controlVideoHeight() {
    video.style.height = video.offsetWidth * 0.56 + 'px';
}
