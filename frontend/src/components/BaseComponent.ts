export default class BaseComponent {
  protected container: HTMLElement;
  protected domElement: HTMLDivElement;

  constructor(container: HTMLElement, cssClass: string) {
    this.container = container;

    this.domElement = document.createElement("div");
    this.domElement.className = cssClass;

    this.container.appendChild(this.domElement);
  }

  render() {}

  unrender() {
    this.domElement.outerHTML = "";
  }
}
