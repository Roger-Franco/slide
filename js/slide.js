export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    // this.dist = { finalPosition: 0, startX: 0, movement: 0 }
    // this.activeClass = 'active';
    // this.changeEvent = new Event('changeEvent');
  }

  onStart(event) {
    event.preventDefault();
    console.log(this);
    this.wrapper.addEventListener('mousemove', this.onMove);
  }
  
  onMove() {
    console.log('Moveu!');
  }
  
  onEnd() {
    console.log('Terminou!');
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}