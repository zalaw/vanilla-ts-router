import Router from "./router.js";

const container = document.getElementById("root")!;
const router = new Router(container);

// Initial navigation when the app starts
router.navigate(window.location.pathname);

// Add event listener to handle navigation when the URL changes
window.addEventListener("popstate", () => {
  router.navigate(window.location.pathname);
});
