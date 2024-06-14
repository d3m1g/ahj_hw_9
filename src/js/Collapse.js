/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
export default class Collapse {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  init() {
    this.parentEl.innerHTML = this.constructor.markup();

    const button = this.parentEl.querySelector('.button');
    const collapse = this.parentEl.querySelector('.collapse');

    const collapseHeight = collapse.clientHeight;
    collapse.style.maxHeight = '0px';

    button.addEventListener('click', () => {
      this.onClick(collapse, collapseHeight);
    });
  }

  static markup() {
    return `
      <button class="button" type="button">Collapse</button>
      <div class="collapse">
        <p class="collapse__content">Non tam praeclarum est scire Latine, quam turpe nescire.</p>
      </div>
    `;
  }

  onClick(collapse, collapseHeight) {
    if (collapse.classList.contains('show')) {
      collapse.style.maxHeight = '0px';
      collapse.classList.remove('show');
    } else {
      collapse.style.maxHeight = `${collapseHeight}px`;
      collapse.classList.add('show');
    }
  }
}