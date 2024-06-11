chrome.runtime.onInstalled.addListener(() => {
  console.log("Pomf Saver Extension Installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received:", message);
  if (message.url) {
    saveUrlToFirebase(message.url);
  }
});

async function saveUrlToFirebase(url) {
  try {
    const response = await fetch("http://localhost:3000/api/save-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log("URL saved to Firebase:", data);

    // Create a success notification
    createNotification("URL saved successfully!");

    // Send success message to the popup
    chrome.runtime.sendMessage({
      success: true,
      message: "URL saved successfully!",
    });
  } catch (error) {
    console.error("Failed to save URL to Firebase:", error);

    // Create an error notification
    createNotification("Failed to save URL: " + error.message);

    // Send failure message to the popup
    chrome.runtime.sendMessage({
      success: false,
      message: "Failed to save URL: " + error.message,
    });
  }
}

function createNotification(message) {
  chrome.notifications.create(
    {
      type: "basic",
      iconUrl: "icons/icons8-shrug-lineal-color-32.png",
      title: "Pomf Saver",
      message: message,
    },
    function (notificationId) {
      setTimeout(() => {
        chrome.notifications.clear(notificationId);
      }, 5000); // Auto close after 5 seconds
    }
  );
}