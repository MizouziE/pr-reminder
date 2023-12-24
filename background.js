let showModal = false;
console.log('background loaded');
browser.runtime.onMessage.addListener((message) => {
    if (message.type === "showModal") {
        showModal = true;
    } else if (message.type === "submitForm") {
        showModal = false;
    }
});

browser.browserAction.onClicked.addListener((tab) => {
    if (showModal) {
        browser.tabs.sendMessage(tab.id, { type: "confirmSubmission" });
    }
});
