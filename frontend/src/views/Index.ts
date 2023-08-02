import BaseComponent from "../components/BaseComponent.js";

export default class Index extends BaseComponent {
  constructor(container: HTMLElement) {
    super(container, "index-page");
  }

  render() {
    this.domElement.innerHTML = `
      <h1>Index page</h1>
    `;
  }
}
