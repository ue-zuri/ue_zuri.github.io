// script.js - Event Listener 1
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.querySelector(".read-more-button");
    const readMoreContent = document.querySelector(".read-more-content");

    readMoreButton.addEventListener("click", function () {
        if (readMoreContent.style.display === "none" || readMoreContent.style.display === "") {
            readMoreContent.style.display = "block";
            readMoreButton.textContent = "Read Less";
        } else {
            readMoreContent.style.display = "none";
            readMoreButton.textContent = "Read More";
        }
    });
});

// script.js - Event Listener 2
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.querySelector(".read-more-button2");
    const readMoreContent = document.querySelector(".read-more-content2");

    readMoreButton.addEventListener("click", function () {
        if (readMoreContent.style.display === "none" || readMoreContent.style.display === "") {
            readMoreContent.style.display = "block";
            readMoreButton.textContent = "Read Less";
        } else {
            readMoreContent.style.display = "none";
            readMoreButton.textContent = "Read More";
        }
    });
});

// script.js - Event Listener 3
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.querySelector(".read-more-button3");
    const readMoreContent = document.querySelector(".read-more-content3");

    readMoreButton.addEventListener("click", function () {
        if (readMoreContent.style.display === "none" || readMoreContent.style.display === "") {
            readMoreContent.style.display = "block";
            readMoreButton.textContent = "Read Less";
        } else {
            readMoreContent.style.display = "none";
            readMoreButton.textContent = "Read More";
        }
    });
});