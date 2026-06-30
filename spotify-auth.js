const CLIENT_ID = "dede0cc513fc419ab9701c2b2a3b2d0f";
const REDIRECT_URI = "https://darling-kitsune-d03c7c.netlify.app/";
const SCOPES = "user-read-private user-read-email";

function generateRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    const values = crypto.getRandomValues(new Uint8Array(length));

    values.forEach(v => {
        result += chars[v % chars.length];
    });

    return result;
}

async function sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return await crypto.subtle.digest("SHA-256", data);
}

function base64urlencode(buffer) {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

async function login() {

    const verifier = generateRandomString(64);

    localStorage.setItem("spotify_verifier", verifier);

    const challenge = base64urlencode(await sha256(verifier));

    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: "code",
        redirect_uri: REDIRECT_URI,
        code_challenge_method: "S256",
        code_challenge: challenge,
        scope: SCOPES
    });

    window.location.href =
        "https://accounts.spotify.com/authorize?" +
        params.toString();
}

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", login);
}
