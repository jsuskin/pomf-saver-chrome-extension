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
  } catch (error) {
    console.error("Failed to save URL to Firebase:", error);
  }
}
