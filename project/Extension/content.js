//다시 짜야함
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received in content script"); // Debug line
    if (request.action === "highlightSelection") {
        console.log("Content script loaded");
        var selection = window.getSelection();
        if (selection.toString().length > 0) {
            var targetClass = "target";
            var range = selection.getRangeAt(0);
            if (range.startContainer.nodeType === Node.TEXT_NODE && range.endContainer.nodeType === Node.TEXT_NODE) {
                var wrapper = document.createElement("span");
                wrapper.classList.add(targetClass);
                try {
                    range.surroundContents(wrapper);
                    sendResponse({ status: "success" });
                } catch (e) {
                    sendResponse({ status: "failed", reason: "Error wrapping selection: " + e.message });
                }
            } else {
                sendResponse({ status: "failed", reason: "Selected range is not a text node." });
            }
        } else {
            sendResponse({ status: "failed", reason: "No text selected." });
        }
        return true; // Indicate async response
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const result = document.querySelector('.result'); // result 변수 정의
    const anchor = document.querySelector('.anchor');
    const focus = document.querySelector('.focus');

    function getText() {
        const selection = window.getSelection();
        result.innerText = selection.toString(); // 선택한 텍스트 문자열로 변경
        console.log("working"); 
    }

    document.addEventListener('selectionchange', getText); // 사용자가 텍스트 선택 시 getText 함수 호출을 하는데 왜 안되는겨죠 
});
