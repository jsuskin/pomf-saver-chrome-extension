let isPopupOpen = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "start-auth") {
    console.log("Received start-auth message");
    firebaseAuth()
      .then((result) => {
        console.log("Authentication successful:", result);
        sendResponse({ success: true });
      })
      .catch((error) => {
        console.error("Authentication failed:", error);
        sendResponse({ success: false, error: error.message });
      });
    return true; // Ensure the sendResponse is called asynchronously
  }
});

const OFFSCREEN_DOCUMENT_PATH = "/offscreen.html";

// A global promise to avoid concurrency issues
let creatingOffscreenDocument;

async function hasDocument() {
  const matchedClients = await clients.matchAll();
  console.log("Matched clients: ", matchedClients);
  return matchedClients.some(
    (c) => c.url === chrome.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)
  );
}

async function setupOffscreenDocument(path) {
  if (!(await hasDocument())) {
    console.log("Does not have doc");
    if (creatingOffscreenDocument) {
      await creatingOffscreenDocument;
    } else {
      console.log("Creating offscreen doc");
      creatingOffscreenDocument = chrome.offscreen.createDocument({
        url: path,
        reasons: [chrome.offscreen.Reason.DOM_SCRAPING],
        justification: "authentication",
      });
      await creatingOffscreenDocument;
      console.log("Created offscreen doc");
      creatingOffscreenDocument = null;
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
}

async function closeOffscreenDocument() {
  if (!(await hasDocument())) {
    console.log("No offscreen doc to close");
    return;
  }
  await chrome.offscreen.closeDocument();
  console.log("Closed offscreen doc");
}

function getAuth() {
  return new Promise(async (resolve, reject) => {
    console.log("Sending message to offscreen");
    const auth = await chrome.runtime.sendMessage({
      type: "start-auth",
      target: "offscreen",
    });
    console.log("In getAuth promise", auth);
    auth?.name !== "FirebaseError" ? resolve(auth) : reject(auth);
  });
}

async function firebaseAuth() {
  await setupOffscreenDocument(OFFSCREEN_DOCUMENT_PATH);

  const auth = await getAuth()
    .then((auth) => {
      console.log("User Authenticated", auth);
      return auth;
    })
    .catch((err) => {
      if (err.code === "auth/operation-not-allowed") {
        console.error(
          "You must enable an OAuth provider in the Firebase" +
            " console in order to use signInWithPopup. This sample" +
            " uses Google by default."
        );
      } else {
        console.error(err);
        return err;
      }
    })
    .finally(closeOffscreenDocument);

  return auth;
}

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
    const response = await fetch("https://localhost:3000/api/save-url", {
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
