document.addEventListener("DOMContentLoaded", function () {
    const confirmButton = document.getElementById("confirmButton");
  
    confirmButton.addEventListener("click", function () {
      // Perform the intended submission here
      browser.runtime.sendMessage({ type: "submitForm" });
      window.close();
    });
  });
  