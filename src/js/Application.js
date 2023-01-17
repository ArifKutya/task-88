import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();
        this.init();
        this.emit(Application.events.READY);
    }

    init() {
        // Get the article element
        this.article = document.querySelector("article");
        // Attach an event listener to the article element
        this.article.addEventListener("click", this.handleClick);
        // Initialize any necessary variables or objects
        this.animation = anime({
            targets: this.article,
            translateY: -20,
            easing: "spring",
            duration: 1000
        });
    }

    handleClick = () => {
        this.animation.play();
    }
}