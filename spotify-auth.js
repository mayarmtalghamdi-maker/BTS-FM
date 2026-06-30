const CLIENT_ID = "dede0cc513fc419ab9701c2b2a3b2d0f";
const REDIRECT_URI = "https://btsfm.netlify.app/";
const SCOPES = [
  "user-read-private",
  "user-read-email"
].join(" ");

const loginButton = document.getElementById("loginBtn");

if (loginButton) {
  loginButton.addEventListener("click", () => {
    alert("Spotify Login Starting...");
  });
}
