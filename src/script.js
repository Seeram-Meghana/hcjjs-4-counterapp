document.addEventListener("DOMContentLoaded", () => {
    const count = document.querySelector(".count");
    const buttons = document.querySelector(".buttons");

    buttons.addEventListener("click", (e) => {
        if (e.target.closest("button")) {
            const button = e.target.closest("button");

            if (button.classList.contains("add")) {
                count.textContent = parseInt(count.textContent) + 1;
            } else if (button.classList.contains("subtract")) {
                count.textContent = parseInt(count.textContent) - 1;
            } else if (button.classList.contains("reset")) {
                count.textContent = 0;
            }

            setColor();
        }
    });

    function setColor() {
        const currentCount = parseInt(count.textContent);
        if (currentCount > 0) {
            count.style.color = "var(--green)"; // Matching color with add button
        } else if (currentCount < 0) {
            count.style.color = "var(--color-secondary)"; // Matching color with subtract button
        } else {
            count.style.color = "var(--grey)"; // Matching color with reset button
        }
    }
});