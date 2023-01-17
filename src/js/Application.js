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
    // Initialize any necessary variables or objects
    this.animation = anime.timeline();
    // Add spring animation to the timeline
    this.animation
        .add({
          targets: ".main",
          translateX: 250,
          elasticity: 400,
          duration: 1000
        });
    // Start the animation
    this.animation.play();
  }
}