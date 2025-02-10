function yesbuttonclicked() {
    document.getElementById("yes")
}

document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no');
    const buttonContainer = document.querySelector('.button-container');

    noButton.addEventListener('mouseover', (event) => {
        const buttonRect = noButton.getBoundingClientRect();
        const containerRect = buttonContainer.getBoundingClientRect();
        const offsetX = event.clientX - buttonRect.left;
        const offsetY = event.clientY - buttonRect.top;

        const maxX = containerRect.width - noButton.offsetWidth - 20; // 20px for border
        const maxY = containerRect.height - noButton.offsetHeight - 20; // 20px for border

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        // Clamp the values to ensure the button stays within the container
        x = Math.max(20, Math.min(x, maxX));
        y = Math.max(20, Math.min(y, maxY));

        noButton.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px)`;
    });
});
