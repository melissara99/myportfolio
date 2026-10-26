document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();        
            const emailInput = contactForm.querySelector("input[type='email']");
            const email = emailInput ? emailInput.value : "";           
            alert(`Thank you! Your message from ${email} has been sent.`);
            contactForm.reset();
        });
    }
    const inspoCards = document.querySelectorAll(".inspo-card");
    inspoCards.forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener("click", function() {
            if (this.style.border === "3px solid rgb(17, 17, 17)") {
                this.style.border = "none";
                this.style.transform = "scale(1)";
            } else {
                this.style.border = "3px solid #111111";
                this.style.transform = "scale(0.98)";
            }
        });
    });
    const folders = document.querySelectorAll(".desktop-item");
    const canvas = document.querySelector(".desktop-canvas");
    folders.forEach(folder => {
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;
        folder.addEventListener("mousedown", (e) => {
            if (e.target.closest(".desktop-tooltip")) return;         
            isDragging = true;
            folder.style.zIndex = "100";
            const rect = folder.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            folder.style.transform = "scale(1.05)";
        });
        document.addEventListener("mousemove", (e) => {
            if (!isDragging || !canvas) return;
            const canvasRect = canvas.getBoundingClientRect();
            let newX = e.clientX - canvasRect.left - offsetX;
            let newY = e.clientY - canvasRect.top - offsetY;
            folder.style.left = `${newX}px`;
            folder.style.top = `${newY}px`;
            folder.style.right = "auto";
            folder.style.bottom = "auto";
        });
        document.addEventListener("mouseup", () => {
            if (isDragging) {
                isDragging = false;
                folder.style.transform = "scale(1)";
                folder.style.zIndex = "10";
            }
        });
    });

});