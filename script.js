const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");
const resetButton = document.getElementById("reset-btn");
let selectedRating = 0;
const messages = {
    1: "Oh no! We'll try to improve 😢",
    2: "Needs improvement 😕",
    3: "It's okay! Thank you 🙂",
    4: "Glad you liked it! 💕",
    5: "Amazing! Thank you so much! 🥰"
};

function highlightStars(rating) {
    stars.forEach((star) => {
        const starValue = Number(star.dataset.value);
        if (starValue <= rating) {
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    });
}

stars.forEach((star) => {
    star.addEventListener("mouseenter", () => {
        const hoverRating = Number(star.dataset.value);
        highlightStars(hoverRating);
    });

    star.addEventListener("click", () => {
        selectedRating = Number(star.dataset.value);
        highlightStars(selectedRating);
        ratingText.textContent =
            `You rated ${selectedRating} out of 5 ⭐ — ${messages[selectedRating]}`;
    });
});

document.getElementById("stars").addEventListener("mouseleave", () => {
    highlightStars(selectedRating);
});

resetButton.addEventListener("click", () => {
    selectedRating = 0;

    highlightStars(0);
    ratingText.textContent = "Choose your rating ⭐";
});