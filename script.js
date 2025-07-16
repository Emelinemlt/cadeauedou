const letter = document.getElementById('letter');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const envelope = document.getElementById('envelope');

openBtn.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        letter.style.display = 'block';
        openBtn.style.display = 'none';
    }, 1000);
});

closeBtn.addEventListener('click', () => {
    letter.style.display = 'none';
    openBtn.style.display = 'inline-block';
    envelope.classList.remove('open');
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

setInterval(createHeart, 300);

/* --- Compte à rebours --- */
const countdown = document.getElementById('countdown');

function getTargetDate() {
    const now = new Date();
    let year = now.getFullYear();
    const target = new Date(year, 8, 25, 0, 0, 0);
    if (now > target) year += 1;
    return new Date(year, 8, 25, 0, 0, 0);
}

const targetDate = getTargetDate();

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdown.textContent = "C'est le jour J ! ❤️";
        clearInterval(intervalId);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.textContent = `Dans ${days}j ${hours}h ${minutes}m ${seconds}s`;
}

const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();
