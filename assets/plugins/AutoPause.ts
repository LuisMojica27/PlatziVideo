import MediaPlayer from "../MediaPlayer";

class AutoPause {

    private threshold: number;
    player: MediaPlayer;

    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }
    run(player){
        this.player = player;
        //Para que el video se pause cuando bajas y se reanude cuando subas
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });

        observer.observe(this.player.media);

        //para que el video se pause cuando cambias de pestaña
        document.addEventListener("visibilitychange", this.handlerVisibilityChange)

    }

    private handlerIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible){
            this.player.play();    
        }else{
            this.player.pause();
        }

        console.log('La intercepción es:', entries);
    }

    private handlerVisibilityChange(){
        //para que el video se pause cuando cambias de pestaña
        const isVisible = document.visibilityState == "visible";
        if (isVisible) {
            this.player.play();
        }else{
            this.player.pause();
        }
    }
}

export default AutoPause;