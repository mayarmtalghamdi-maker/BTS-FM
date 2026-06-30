const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

if (searchBtn && searchInput) {

    searchBtn.addEventListener("click", function () {

        const search = searchInput.value.toLowerCase().trim();

        if (search === "proof") {
            window.location.href = "album-proof.html";
        }

        else if (search === "arirang") {
            window.location.href = "album-arirang.html";
        }

        else if (search === "be") {
            window.location.href = "album-be.html";
        }

        else if (search === "map of the soul 7" || search === "mots7") {
            window.location.href = "album-mots7.html";
        }

        else if (search === "charts") {
            window.location.href = "charts.html";
        }

        else {
            alert("No results found.");
        }

    });

}