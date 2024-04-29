import SlideNav from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init()
slide.addControl('.custom-controls')
// slide.addControl()
// console.log(slide);
// slide.changeSlide(1)
// slide.activeNextSlide()
slide.addArrow('.prev', '.next')