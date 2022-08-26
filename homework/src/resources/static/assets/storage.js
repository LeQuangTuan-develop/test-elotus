const TOKEN_STORAGE_KEY = "TOKEN";

function getToken() {
  return JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY)) || null;
}

function setToken(token) {
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
}
