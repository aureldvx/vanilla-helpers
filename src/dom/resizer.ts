/** Resize HTML element by a specified format */
export class Resizer {
  private readonly squareItems: HTMLElement[];
  private readonly panoramaItems: HTMLElement[];
  private readonly supportedProperty: boolean;

  constructor() {
    this.squareItems = [];
    this.panoramaItems = [];
    this.supportedProperty = 'aspectRatio' in document.body.style;
    const list: NodeListOf<HTMLElement> = document.querySelectorAll('[data-resizer]');

    list.forEach(el => {
      switch (el.dataset.resizer) {
        case '1/1':
          this.squareItems.push(el);
          break;
        case '16/9':
        default:
          this.panoramaItems.push(el);
          break;
      }
    });
  }

  resize(): void {
    if (this.supportedProperty) {
      if (this.squareItems.length > 0) {
        this.squareItems.forEach(item => {
          // @ts-ignore
          item.style.aspectRatio = '1 / 1';
        });
      }

      if (this.panoramaItems.length > 0) {
        this.panoramaItems.forEach(item => {
          // @ts-ignore
          item.style.aspectRatio = '16 / 9';
        });
      }
    } else {
      this.resizePolyfill();
      this.listeners();
    }
  }

  resizePolyfill(): void {
    if (this.squareItems.length > 0) {
      this.squareItems.forEach(item => {
        if (item.dataset.resizerOrigin === 'w') {
          item.style.height = `${item.getBoundingClientRect().width}px`;
        } else {
          item.style.width = `${item.getBoundingClientRect().height}px`;
        }
      });
    }

    if (this.panoramaItems.length > 0) {
      this.panoramaItems.forEach(item => {
        if (item.dataset.resizerOrigin === 'w') {
          const ratio = (9 * item.getBoundingClientRect().width) / 16;
          item.style.height = `${ratio}px`;
        } else {
          const ratio = (16 * item.getBoundingClientRect().height) / 9;
          item.style.width = `${ratio}px`;
        }
      });
    }
  }

  listeners(): void {
    window.addEventListener('resize', () => this.resizePolyfill());
  }
}
