chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "https://www.example.com" }); 
  });
  

  //여기에 기능구현 해야함