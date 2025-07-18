// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");
  });
  
  // Listen for changes in stored data (transaction ID)

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes.transactionId) {
      console.log("New transaction detected:", changes.transactionId.newValue);
  
      // Capture a screenshot of the current tab

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.captureVisibleTab(null, {}, (screenshotUrl) => {
          console.log("Screenshot captured:", screenshotUrl);
          
          // You can now store or process the screenshot
          
        });
      });
    }
  });