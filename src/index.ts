import 'animate.css';
import './styles/_main.scss';
import './styles/spinner.scss';

import KeyboardController from './controllers/keyboard';
import Controller, {
  INVISIBLE_CLASS,
  PREV_CLASS,
  ACTIVE_CLASS,
} from './controllers/controller';

const HIDE_CLASS = 'hide';
interface MountOptions {
  startIndex: number;
}
class Splendid {
  private currentSlideIndex: number;
  private slides: NodeListOf<HTMLElement>;
  constructor(options: MountOptions) {
    this.currentSlideIndex = options.startIndex;
  }

  mount(root: string) {
    const rootElement = document.querySelector(root);
    this.slides = rootElement.querySelectorAll('article');

    this.showSpinner(rootElement);
    this.hideSlides(rootElement);
    this.configureSlides();
    const controller = new Controller(this.slides, this.currentSlideIndex);
    new KeyboardController(controller);

    requestAnimationFrame(() => {
      this.startPresentation();
      this.hideSpinner(rootElement);
      this.showSlides(rootElement);
    });
  }

  hideSlides(rootElement: Element) {
    const main = rootElement.querySelector('main');
    main.classList.add(HIDE_CLASS);
  }

  showSlides(rootElement: Element) {
    const main = rootElement.querySelector('main');
    main.classList.remove(HIDE_CLASS);
  }

  configureSlides() {
    this.slides.forEach((article) => {
      article.classList.add('animate__animated');
    });

    this.slides.forEach((slide) => {
      slide.classList.add(INVISIBLE_CLASS);
    });

    const previous = this.slides[this.currentSlideIndex - 1];
    previous && previous.classList.add(PREV_CLASS);
  }

  startPresentation() {
    this.slides[this.currentSlideIndex].classList.add(ACTIVE_CLASS);
    this.slides[this.currentSlideIndex].classList.remove(INVISIBLE_CLASS);
  }

  showSpinner(rootElement: Element) {
    let spinner = rootElement.querySelector('.spinner');
    if (!spinner) {
      spinner = this.createSpinner();
      rootElement.appendChild(spinner);
    }
    if (spinner.classList.contains(HIDE_CLASS)) {
      spinner.classList.remove(HIDE_CLASS);
    }
  }

  hideSpinner(rootElement: Element) {
    let spinner = rootElement.querySelector('.spinner');
    spinner.classList.add(HIDE_CLASS);
  }

  createSpinner() {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    return spinner;
  }
}

new Splendid({ startIndex: 0 }).mount('#splendid');
