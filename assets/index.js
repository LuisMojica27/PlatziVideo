import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const PlayButton = document.querySelector('#play-pause');
const MuteButton = document.querySelector('#mute-unmute');

const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]});
PlayButton.onclick = () => player.togglePlay();
MuteButton.onclick = () => player.sonido();