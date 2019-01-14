import { throttle } from "lodash";

export class AnimateTimeLineItems {
  constructor(selector, modifier) {
    this.list = document.querySelectorAll(selector);
    this.modifier = `${selector.slice(1)}--${modifier}`;

    this.init();
  }

  static isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    return Math.floor(rect.top - viewportHeight + rect.height < 0);
  }

  static addClassIfInViewPort(el, className) {
    if (el.classList.contains(className)) return false;

    if (AnimateTimeLineItems.isElementInViewport(el)) {
      el.classList.add(className);
    }
  }

  checkItems() {
    this.list.forEach(item => {
      if (item.classList.contains(this.modifier)) {
        return;
      }

      AnimateTimeLineItems.addClassIfInViewPort(item, this.modifier);
    });
  }

  init() {
    this.checkItems();
  }
}

setTimeout(() => {
  const list = new AnimateTimeLineItems(".time-line__item", "view");

  document.addEventListener("scroll", throttle(() => list.checkItems(), 500));
}, 100);
