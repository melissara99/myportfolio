document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var emailInput = document.querySelector("#user-email");
            var email = emailInput ? emailInput.value : "";
            alert("Thank you for contacting me! Your message from " + email + " has been sent.");
            contactForm.reset();
        });
    }

    var folders = document.querySelectorAll(".desktop-item");
    folders.forEach(function (folder) {
        folder.addEventListener("click", function (e) {
            e.stopPropagation();
            var isAlreadyActive = folder.classList.contains("active-folder");

            folders.forEach(function (f) {
                f.classList.remove("active-folder");
                f.style.zIndex = "10";
            });

            if (!isAlreadyActive) {
                folder.classList.add("active-folder");
                folder.style.zIndex = "100";
            }
        });
    });

    document.addEventListener("click", function () {
        folders.forEach(function (f) {
            f.classList.remove("active-folder");
            f.style.zIndex = "10";
        });
    });
});
