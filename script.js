document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const item = this.parentElement;
            const content = this.nextElementSibling;

            // Check if current item is already active
            const isActive = item.classList.contains("active");

            // Close all active accordion items first (optional: omit if you want multiple open)
            document.querySelectorAll(".accordion-item").forEach(el => {
                el.classList.remove("active");
                el.querySelector(".accordion-content").style.maxHeight = null;
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add("active");
                // Dynamically sets smooth transition height using its scroll height
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});