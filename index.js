const texts = [
    "...vestibulum mollis, tortor ac congue commodo",
    "...lorem ipsum dolor sit amet",
    "...phasellus eleifend semper tempor"
];

function changeText() {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    document.getElementById('random-text').innerText = randomText;
}

setInterval(changeText, 2000);