const bioStates = document.querySelector('.bio-data-stats');
const bioProgress = new IntersectionObserver(
    (entries) => {
        const entr = entries[0];
        // console.log(ent);
        const bioProgressBar = document.querySelector('.bio-progress-bar');
        const bioProgress2 = document.querySelector('.bio-progress-2');
        const bioProgress3 = document.querySelector('.bio-progress-3');
        const bioProgress4 = document.querySelector('.bio-progress-4');
        const bioProgress5 = document.querySelector('.bio-progress-5');

        entr.isIntersecting
            ? bioProgressBar.classList.add('progress')
            : bioProgressBar.classList.remove('progress');

        entr.isIntersecting
            ? bioProgress2.classList.add('progress')
            : bioProgress2.classList.remove('progress');

        entr.isIntersecting
            ? bioProgress3.classList.add('progress')
            : bioProgress3.classList.remove('progress');

        entr.isIntersecting
            ? bioProgress4.classList.add('progress')
            : bioProgress4.classList.remove('progress');

        entr.isIntersecting
            ? bioProgress5.classList.add('progress')
            : bioProgress5.classList.remove('progress');
    },
    {
        root: null,
        threshold: 0,
    }
);

bioProgress.observe(bioStates);