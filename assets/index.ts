import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const PlayButton: HTMLElement = document.querySelector('#play-pause');
const MuteButton: HTMLElement = document.querySelector('#mute-unmute');

const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

PlayButton.onclick = () => player.togglePlay();
MuteButton.onclick = () => player.sonido();


if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}