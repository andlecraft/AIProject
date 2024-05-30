chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "https://www.example.com" }); 
  });
  

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "highlightSelection") {
        console.log("Message received:", message.text);
        sendResponse({ status: "success" });
    }
});
