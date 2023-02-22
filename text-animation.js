const text = document.querySelector('.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'from Ahmedabad, Gujarat.';
    }, 0);
    setTimeout(() => {
        text.textContent = 'a Full Stack Web Developer.';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'a Youtuber.';
    }, 8000);
    setTimeout(() => {
        text.textContent = 'a Freelancer.';
    }, 12000);
};

textLoad();
setInterval(textLoad, 24000);
