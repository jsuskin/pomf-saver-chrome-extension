document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    const statusElement = document.getElementById("status");

    if (currentTab.url === "https://pomf2.lain.la/") {
      statusElement.innerHTML =
      '<marquee scrollamount="12">FEED ME A STRAY CAT</marquee>';

      // Color
      statusElement.style.backgroundColor = "#424242";
      statusElement.style.color = "#458a57";

      // Custom Font
      statusElement.style.fontFamily = "Tiny5";
      statusElement.style.fontSize = "1.9em";

      // Positioning
      statusElement.style.textAlign = "center";
      statusElement.style.paddingTop = "4px";
    } else {
      statusElement.innerHTML = `Please navigate to <a href="https://pomf2.lain.la/" target="_blank">https://pomf2.lain.la/</a> to use this extension or log in to <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> with your Google account to view your saved Pomf URLs.`;
    }

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log("Popup received message:", message);
      statusElement.textContent = message.message;
      statusElement.style.color = message.success ? "green" : "red";
    });
  });
});
