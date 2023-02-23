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
        text.textContent = 'a Blogger.';
    }, 12000);
    setTimeout(() => {
        text.textContent = 'a Freelancer.';
    }, 16000);
};

textLoad();
setInterval(textLoad, 20000);
