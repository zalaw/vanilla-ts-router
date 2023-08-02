import BaseComponent from "../components/BaseComponent.js";

export default class Index extends BaseComponent {
  constructor(container: HTMLElement) {
    super(container, "not-found-page");
  }

  render() {
    this.domElement.innerHTML = `
      <h1>Not found page</h1>
    `;
  }
}
