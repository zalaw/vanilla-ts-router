import BaseComponent from "./components/BaseComponent.js";
import Index from "./views/Index.js";
import NotFound from "./views/NotFound.js";

export default class Router {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    document.body.addEventListener("click", (e: any) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        window.history.pushState({}, "", e.target.href);
        this.navigate(window.location.pathname);
      }
    });
  }

  navigate(path: string) {
    if (path === "/") {
      this.renderView(Index);
    } else {
      this.renderView(NotFound);
    }
  }

  private renderView(view: new (container: HTMLElement) => BaseComponent) {
    this.container.innerHTML = "";
    const instance = new view(this.container);
    instance.render();
  }
}
