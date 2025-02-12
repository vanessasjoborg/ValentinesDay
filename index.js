const noButton = document.getElementById('no');
const OFFSET = 50; // pixels

noButton.addEventListener('click', () => {
    alert('Nice try!');
    window.close();
})

document.addEventListener('mousemove', (event) => {
const x = event.pageX;
const y = event.pageY;
const buttonBox = noButton.getBoundingClientRect(); // gives the X,Y position and height and width of the button
const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);

const horizontalOffset = buttonBox.width / 2 + OFFSET // how far away from the center of the button do we want to start moving our button away from the curosor. 
const verticalOffset = buttonBox.height / 2 + OFFSET // how far away from the center of the button do we want to start moving our button away from the curosor. 

if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(
        buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
        buttonBox.y + verticalOffset / verticalDistanceFrom * 10
    )
}
});

function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect();
    const buttonBox = noButton.getBoundingClientRect();

    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - OFFSET;
    }

    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + OFFSET;
    }

    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET;
    }

    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top + OFFSET;
    }


    noButton.style.left = `${left}px`;
    noButton.style.top = `${top}px`;
}

function distanceFromCenter(buttonPosition, mousePosition, boxSize) {
    return buttonPosition - mousePosition + boxSize / 2;
}

