import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const PlayButton = document.querySelector('#play-pause');
const MuteButton = document.querySelector('#mute-unmute');

const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()],
});

PlayButton.onclick = () => player.togglePlay();
MuteButton.onclick = () => player.sonido();


if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}