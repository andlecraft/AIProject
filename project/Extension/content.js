document.addEventListener('DOMContentLoaded', function() {
    const result = document.querySelector('.result'); 
    const anchor = document.querySelector('.anchor');
    const focus = document.querySelector('.focus');

    let previousSelection = "";
    let isThrottled = false;

    function getText() {
        const selection = window.getSelection();
        const selectedText = selection.toString();

        if (selectedText !== previousSelection) {
            result.innerText = selectedText;
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                anchor.innerText = range.startOffset;
                focus.innerText = range.endOffset;
            }
            previousSelection = selectedText;
        }
        isThrottled = false;
    }

    document.addEventListener('selectionchange', () => {
        if (!isThrottled) {
            isThrottled = true;
            requestAnimationFrame(getText);
        }
    });
});


// 될거 같은데 렉이 아직 많음 최적화 시급 
document.addEventListener('selectionchange', function() {
    var selection = window.getSelection();
    if (selection.toString().length > 0) {
        var targetClass = "target";
        var range = selection.getRangeAt(0);

        var wrapper = document.createElement("span");
        wrapper.classList.add(targetClass);

        try {
            const contents = range.cloneContents();
            wrapper.appendChild(contents);
            range.deleteContents();
            range.insertNode(wrapper);

            setTimeout(()=>{
                chrome.runtime.sendMessage({ action: "highlightSelection", text: selection.toString() });
                console.log("set time out done")
            }, 2000);
        } catch (e) {
            console.error("Error wrapping selection:", e);
        }
    }
});


