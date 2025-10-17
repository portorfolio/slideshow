const slideshowEl = document.getElementById('slideshow_container')


async function getLogos(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        displayLogos(data)
    } catch (error) {
        console.error(error)
    }
}

function displayLogos(data) {
    for (const [brand, logos] of Object.entries(data.records)) {
        if (!brand.startsWith('a')) continue

        const div = document.createElement('div')
        div.classList.add('slides')

        const titleEl = document.createElement('p')
        titleEl.innerHTML = brand
        div.appendChild(titleEl)

        const logoOne = logos[0]
        if (logoOne) {
            const img = document.createElement('img')
            img.src = logoOne.logo;
            img.alt = logoOne.name;
            div.appendChild(img)
        }

        slideshowEl.appendChild(div)
    }

    showSlides(slideIndex);
}

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName('slides')
    if (slides.length === 0) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

getLogos('https://www.logotypes.dev/all')
