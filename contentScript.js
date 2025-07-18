//contentScript.js

console.log("Content script is running");

//Detect transaction IDs based on page content

// Select the paragraph that contains "Transaction ID"
let transactionElement = document.querySelector('p strong');

// Check if the transaction element is found
if (transactionElement && transactionElement.innerText.includes('Transaction ID:')) {
    // Extract and log the transaction ID
    let transactionID = transactionElement.parentElement.innerText.split('Transaction ID: ')[1];
    console.log("Transaction ID found: " + transactionID);
} else {
    console.log("Transaction ID not found");
}


function detectTransaction() {
    
    //Look for a common transaction ID pattern in the page's text

    const transactionIdPattern = /Transaction ID: (\w+)/;
    let pageText = document.body.innerText;

    //If a transaction ID is found, store it

    let match = pageText.match(transactionIdPattern);
    if (match) {
        console.log("Transaction ID found:", match[1]);
        chrome.storage.sync.set({ "transactionId": match[1] });
    }
}

//Run the detection when the page loads

window.onload = detectTransaction;