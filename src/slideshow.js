const SLIDEWIDTH = 725;

class Slide {
    constructor(outerDiv) {
        this.outerDiv = outerDiv;
        this.picturesDiv = outerDiv.getElementsByClassName('pictures')[0];
        this.shiftedBy = 0;
        this.currentSlide = 0;
        this.numSlides = this.picturesDiv.childElementCount;

        this.navDots = outerDiv.getElementsByClassName('nav-dot');

        outerDiv
            .getElementsByClassName('next')[0]
            .addEventListener('click', () => this.nextSlide());
        outerDiv
            .getElementsByClassName('previous')[0]
            .addEventListener('click', () => this.prevSlide());

        setInterval(() => this.nextSlide(), 5000);

        for (let i = 0; i < this.navDots.length; i++) {
            this.navDots[i].addEventListener('click', () =>
                this.changeSlide(i)
            );
        }

        this.changeSlide(0);
    }

    changeSlide(slideNum) {
        this.currentSlide = slideNum;
        this.setNavDots(slideNum);
        const shiftBy = -slideNum * SLIDEWIDTH;
        this.picturesDiv.style.left = `${shiftBy}px`;
    }

    setNavDots(slideNum) {
        for (const dot of this.navDots) {
            dot.classList.remove('filled');
        }

        this.navDots[slideNum].classList.add('filled');
    }

    nextSlide() {
        this.changeSlide((this.currentSlide + 1) % this.numSlides);
    }

    prevSlide() {
        let slide = this.currentSlide - 1;
        if (slide < 0) slide += this.numSlides;
        this.changeSlide(slide);
    }
}

for (const outerDiv of document.getElementsByClassName('slider')) {
    new Slide(outerDiv);
}
