import { ControllerOptions } from './types';
import Controller from './controller';
export default class KeyboardController {
  constructor(controller: Controller) {
    document.onkeydown = (event: KeyboardEvent) => {
      // const e = event || window.event;

      console.log(event.code);

      if (event.code == 'ArrowLeft') {
        controller.onPrev();
      } else if (event.code == 'ArrowRight') {
        controller.onNext();
      }
    };
  }

  onNext(onNextHandler: Function) {
    onNextHandler();
  }
}
