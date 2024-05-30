document.addEventListener('DOMContentLoaded', function() {
    const result = document.querySelector('.result');
    const anchor = document.querySelector('.anchor');
    const focus = document.querySelector('.focus');

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "highlightSelection") {
            result.innerText = message.text;
        }
    });
});
