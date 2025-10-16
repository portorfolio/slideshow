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
        const titleEl = document.createElement('p')
        titleEl.innerHTML = brand
        slideshowEl.appendChild(titleEl)

        const logoOne = logos[0]
        if (logoOne) {
            const img = document.createElement('img')
            img.src = logoOne.logo;
            img.alt = logoOne.name;
            slideshowEl.appendChild(img)
        }
    }
}

getLogos('https://www.logotypes.dev/all')