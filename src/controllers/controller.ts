export const ACTIVE_CLASS = 'active';
export const NEXT_CLASS = 'next';
export const PREV_CLASS = 'prev';
export const INVISIBLE_CLASS = 'invisible';

export default class Controller {
  constructor(
    private slides: NodeListOf<HTMLElement>,
    private currentSlideIndex: number
  ) {}
  onPrev() {
    const animationName = 'bounce';
    const active = this.slides[this.currentSlideIndex];
    const prev = this.slides[this.currentSlideIndex - 1];

    if (!prev) return;

    active.classList.remove(ACTIVE_CLASS);
    active.classList.add(NEXT_CLASS);
    prev.classList.remove(PREV_CLASS);
    prev.classList.remove(INVISIBLE_CLASS);
    prev.classList.add(ACTIVE_CLASS);

    active.classList.add('animate__' + animationName + 'OutRight');
    active.classList.remove('animate__' + animationName + 'InLeft');
    prev.classList.add('animate__' + animationName + 'InLeft');
    prev.classList.remove('animate__' + animationName + 'OutLeft');

    this.currentSlideIndex -= 1;
    // counter.innerText = this.currentSlideIndex + 1;
  }
  onNext() {
    const animationName = 'bounce';
    const active = this.slides[this.currentSlideIndex];
    const next = this.slides[this.currentSlideIndex + 1];

    if (!next) return;

    active.classList.remove(ACTIVE_CLASS);
    active.classList.add(PREV_CLASS);
    next.classList.remove(NEXT_CLASS);
    next.classList.remove(INVISIBLE_CLASS);
    next.classList.add(ACTIVE_CLASS);

    active.classList.add('animate__' + animationName + 'OutLeft');
    active.classList.remove('animate__' + animationName + 'InRight');
    next.classList.add('animate__' + animationName + 'InRight');
    next.classList.remove('animate__' + animationName + 'OutRight');

    this.currentSlideIndex += 1;
    // counter.innerText = this.currentSlideIndex + 1;}
  }
}
