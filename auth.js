console.log("auth.js loaded");
const clientId = "dede0cc513fc419ab9701c2b2a3b2d0f";
const redirectUri = "https://btsfm.netlify.app/";

const scope =
"user-read-private user-read-email";

async function generateCodeVerifier(length) {

const possible =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const values = crypto.getRandomValues(
new Uint8Array(length)
);

return Array.from(values)
.map(x => possible[x % possible.length])
.join("");

}

async function sha256(plain){

const encoder = new TextEncoder();

const data = encoder.encode(plain);

return await crypto.subtle.digest("SHA-256", data);

}

function base64encode(input){

return btoa(
String.fromCharCode(...new Uint8Array(input))
)
.replace(/=/g,"")
.replace(/\+/g,"-")
.replace(/\//g,"_");

}
async function loginWithSpotify() {
alert("Button clicked");
    const verifier = await generateCodeVerifier(128);

    localStorage.setItem("verifier", verifier);

    const challenge = base64encode(await sha256(verifier));
alert("Challenge created");
    const params = new URLSearchParams();

    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", redirectUri);
    params.append("scope", scope);
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);
alert("Redirecting to Spotify");
    window.location =
        "https://accounts.spotify.com/authorize?" +
        params.toString();

}

const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {

    loginBtn.addEventListener("click", loginWithSpotify);

}
alert("auth.js works");
