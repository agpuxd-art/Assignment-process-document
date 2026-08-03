document.addEventListener('DOMContentLoaded', () => {
    // Lightbox Functionality
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    
    if (modal && modalImg && closeBtn) {
        // Add click listener to all content images
        const images = document.querySelectorAll('.page-content img, .injected-content img');
        
        images.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function() {
                modal.style.display = "flex";
                // setTimeout ensures animation triggers
                setTimeout(() => modal.classList.add("show"), 10);
                modalImg.src = this.src;
            });
        });
        
        // Close modal on close button click
        closeBtn.addEventListener('click', () => {
            modal.classList.remove("show");
            setTimeout(() => modal.style.display = "none", 300);
        });
        
        // Close modal on background click
        modal.addEventListener('click', (e) => {
            if (e.target !== modalImg) {
                modal.classList.remove("show");
                setTimeout(() => modal.style.display = "none", 300);
            }
        });
    }
});
