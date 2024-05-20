//다시 짜야함
document.getElementById('highlightButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
            alert("No active tab found.");
            return;
        }
        chrome.tabs.sendMessage(tabs[0].id, { action: "highlightSelection" }, (response) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                alert("Failed to send message: " + chrome.runtime.lastError.message); // 현제 진행 상황
                return;
            }
            if (response && response.status === "success") {
                alert("Selection highlighted successfully!");
            } else {
                alert("Failed to highlight selection: " + (response ? JSON.stringify(response) : "unknown error"));
            }
        });
    });
});
