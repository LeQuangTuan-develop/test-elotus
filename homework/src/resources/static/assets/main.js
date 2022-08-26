const URL_PARAMS = new URLSearchParams(window.location.search);
const token = URL_PARAMS.get("token");

// Show an element
const show = (selector) => {
  document.querySelector(selector).style.display = "block";
};

// Hide an element
const hide = (selector) => {
  document.querySelector(selector).style.display = "none";
};

if (token) {
  hide(".content.unauthorized");
  show(".content.authorized");
  setToken(token);
}
