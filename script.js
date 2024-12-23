document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
            lightbox.style.display = 'flex';
            lightbox.style.alignItems = 'center';
            lightbox.style.justifyContent = 'center';
            lightbox.style.zIndex = '1000';

            const img = document.createElement('img');
            img.src = image.src;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';
            lightbox.appendChild(img);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });

            document.body.appendChild(lightbox);
        });
    });
});

function loadpictures() {
    let contanier = document.getElementById("galleryid") 

    let maxpics = 63
    let piccount = 1

    while (piccount <= maxpics) {
        contanier.innerHTML += ` <div class="image-container">
            <img src="images/${piccount}.jpg" alt="Fotó 1" class="gallery-image">
        </div>
        `
        piccount = piccount + 1
    }
}

loadpictures()