

function MediaPlayer(config){
    this.media = config.el

    MediaPlayer.prototype.play = () =>{
            this.media.play();
    };

    MediaPlayer.prototype.pause = () => {
        this.media.pause();
    };
};

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({el: video});
button.onclick = () => {player.media.paused ? player.play() : player.pause()};