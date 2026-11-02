document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var emailInput = document.querySelector("#user-email");
            var email = emailInput ? emailInput.value : "";
            alert("Thank you! Your message from " + email + " has been sent.");
            contactForm.reset();
        });
    }

    var folders = document.querySelectorAll(".desktop-item");
    folders.forEach(function (folder) {
        folder.addEventListener("click", function () {
            folders.forEach(function (f) {
                f.style.zIndex = "10";
            });
            folder.style.zIndex = "100";
        });
    });
});
