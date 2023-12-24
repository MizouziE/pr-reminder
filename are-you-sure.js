document.addEventListener("DOMContentLoaded", function () {
    console.log('content loaded');
    const button = document.querySelector('.js-sync-select-menu-button.btn-primary.btn.BtnGroup-item.flex-auto');

    if (button && (button.textContent.includes("Create pull request") || button.textContent.includes("Create draft pull request"))) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            // Show your custom confirmation modal
            browser.runtime.sendMessage({ type: "showModal" });
        });
    }

    // Listen for the "submitForm" message
    browser.runtime.onMessage.addListener((message) => {
        if (message.type === "submitForm") {
            const form = document.getElementById("new_pull_request");

            if (form) {
                // Perform the intended submission
                form.submit();
            }
        }
    });
});
