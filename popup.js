// Display the last detected transaction ID in the popup

document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get("transactionId", function(data) {
        if (data.transactionId) {
            document.getElementById('transactionId').textContent = data.transactionId;
        }
    });

    document.getElementById('clearData').addEventListener('click', function() {
        chrome.storage.sync.remove("transactionId");
        document.getElementById('transactionId').textContent = "No transaction detected yet";
    });
});