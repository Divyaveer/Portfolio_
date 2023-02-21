const heroSection = document.querySelector('.section-hero');

// ==============================
// Creating a Responsive Navbar component
// ==============================

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active');
}); 

// ==============================
// Creating a Sticky Responsive Navbar component
// ==============================

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        // console.log(ent);
        !ent.isIntersecting
            ? document.body.classList.add('sticky')
            : document.body.classList.remove('sticky');
    },
    {
        root: null,
        threshold: 0,
    }
);

observer.observe(heroSection);

// ==============================
// Creating a Portfolio tabbed component
// ==============================

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;

    if(!p_btn_clicked.classList.contains('p-btn')) return;

    p_btn.forEach((curElem) => curElem.classList.remove('p-btn-active'));

    p_btn_clicked.classList.add('p-btn-active');

    const btn_num = p_btn_clicked.dataset.btnNum;

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add('p-image-not-active'));

    img_active.forEach((curElem) => curElem.classList.remove('p-image-not-active'));
});


// Media Query for Swiper Section in JS :------
const myJsmedia = (widthSize) => {
    if(widthSize.matches){
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false, 
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    else{
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false, 
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
};

const widthSize = window.matchMedia('(max-width: 780px)');
// Call listener function at run time
myJsmedia(widthSize);
// Attach listener function on state changes
widthSize.addEventListener('change', myJsmedia);


// scroll to top button


const footerElem = document.querySelector('.section-footer');

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({behavior: "smooth"});
};

scrollElement.addEventListener('click', scrollTop, {passive: true});

// smooth scrolling effects

const portfolioSec = document.querySelector('.section-portfolio');
const contactSec = document.querySelector('.section-contact');

document.querySelector('.portfolio-link').addEventListener('click', () => {
    portfolioSec.scrollIntoView({behavior: "smooth"});
});

document.querySelector('.hireme-btn').addEventListener('click', (e) => {
    e.preventDefault();
    contactSec.scrollIntoView({behavior: "smooth"});
});


//Work Section:-----
const workSection = document.querySelector('.section-work-data');
const workObserver = new IntersectionObserver(
    (entries, observer) => {
        const [entry] = entries;
        // console.log(entry);

        // if(entry.isIntersecting == false)
        if(!entry.isIntersecting) return;

        // animate number counter

        const counterNum = document.querySelectorAll('.counter-numbers');

        const speed = 200;

        counterNum.forEach((curElem) => {
            const updateNumber = () => {
                const targetNumber = parseInt(curElem.dataset.number);
                // console.log(targetNumber);
                const initialNum = parseInt(curElem.innerText);
                // console.log(initialNum);

                const incrementNumber = Math.trunc(targetNumber / speed);
                // console.log(incrementNumber);

                if(initialNum < targetNumber){
                    curElem.innerText = `${initialNum + incrementNumber}+`;

                    setTimeout(updateNumber, 10);
                }
            };

            updateNumber();
        });

        observer.unobserve(workSection);
    },
    {
        root: null,
        threshold: 0,
    }
);

workObserver.observe(workSection);

// Analog Clock section start===============

setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();


//BioDta Progressbar Section:-----

const bio_data_Section = document.querySelector('.bio-data-stats') 
const bio_data_Observer = new IntersectionObserver(
    (entries, observer) => {
        const [entry] = entries;

        if(!entry.isIntersecting) return;

        const counterNum = document.querySelectorAll('.bio-progress-bar'); 
        const numCaret = document.querySelectorAll(".num_caret");

        var numsArr = [80, 99, 90, 85, 70];
        var i = 0;

        counterNum.forEach((curElem) => {
            curElem.classList.add('progress');
        });

 
        observer.unobserve(bio_dataSection);
    },
    {
        root: null,
        threshold: 0,
    }
);

bio_data_Observer.observe(bio_data_Section);
