chrome.runtime.onInstalled.addListener(() => {
  console.log("Pomf Saver Extension Installed");

  chrome.storage.local.get("isAuthenticated", (result) => {
    if (result.isAuthenticated === undefined) {
      chrome.storage.local.set({ isAuthenticated: false });
    }
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.url) {
    saveUrlToFirebase(message.url);
  }

  if (message.type === "start-auth" && message.target === "background") {
    console.log("background message listener: ", {message})
    firebaseAuth()
      .then((result) => {
        console.log("Authentication successful:", result);
        chrome.storage.local.set({ isAuthenticated: true });
        sendResponse({ success: true });
      })
      .catch((error) => {
        console.error("Authentication failed:", error);
        chrome.storage.local.set({ isAuthenticated: false });
        sendResponse({ success: false, error: error.message });
      });
      return true; // Ensure the sendResponse is called asynchronously
    } else if(message.type === 'sign-out') {
      console.log("message type is sign out")
      firebaseSignOut()
        .then((result) => {
          console.log("Sign out successful:", result);
          chrome.storage.local.set({ isAuthenticated: false });
          sendResponse({ success: true });
        })
        .catch((error) => {
          console.error("Sign out failed:", error);
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
  return matchedClients.some(
    (c) => c.url === chrome.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)
  );
}

async function setupOffscreenDocument(path) {
  if (!(await hasDocument())) {
    if (creatingOffscreenDocument) {
      await creatingOffscreenDocument;
    } else {
      // create offscreen doc
      creatingOffscreenDocument = await chrome.offscreen.createDocument({
        url: path,
        reasons: [chrome.offscreen.Reason.DOM_SCRAPING],
        justification: "authentication",
      });

      // cleanup offscreen doc
      creatingOffscreenDocument = null;
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
}

async function closeOffscreenDocument() {
  if (!(await hasDocument())) return;
  await chrome.offscreen.closeDocument();
}

function getAuth() {
  return new Promise(async (resolve, reject) => {
    const auth = await chrome.runtime.sendMessage({
      type: "start-auth",
      target: "offscreen",
    });
    auth?.name !== "FirebaseError" ? resolve(auth) : reject(auth);
  });
}

function signOutUser() {
  return new Promise(async (resolve, reject) => {
    try {
      const signOutResult = await chrome.runtime.sendMessage({
        type: "sign-out",
        target: "offscreen",
      });
      signOutResult?.success ? resolve(signOutResult) : reject(signOutResult);
    } catch (error) {
      reject(error);
    }
  });
}

async function firebaseSignOut() {
  await setupOffscreenDocument(OFFSCREEN_DOCUMENT_PATH);

  const result = await signOutUser()
    .then((result) => {
      console.log("User Signed Out", result);
      return result;
    })
    .catch((err) => {
      console.error(err);
      return err;
    })
    .finally(closeOffscreenDocument);

  return result;
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

async function saveUrlToFirebase(url) {
  try {
    // const response = await fetch("https://localhost:3000/api/save-url", {
    const response = await fetch(
      "https://pomf-saver-cerhtunz6-jsuskins-projects.vercel.app/api/save-url",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log("URL saved to Firebase:", data);

    // Create a success notification
    // createNotification("URL saved successfully!")
    //   .then(() => console.log("Notification shown and cleared"))
    //   .catch((error) => console.error("Error showing notification:", error));

    // Send success message to the popup
    chrome.runtime.sendMessage({
      success: true,
      message: "URL saved successfully!",
    });
  } catch (error) {
    console.error("Failed to save URL to Firebase:", error);

    // Create an error notification
    // createNotification("Failed to save URL: " + error.message)
    //   .then(() => console.log("Notification shown and cleared"))
    //   .catch((error) => console.error("Error showing notification:", error));

    // Send failure message to the popup
    chrome.runtime.sendMessage({
      success: false,
      message: "Failed to save URL: " + error.message,
    });
  }
}

// function createNotification(message) {
//   chrome.notifications.create(
//     {
//       type: "basic",
//       iconUrl: "icons/icons8-shrug-lineal-color-32.png",
//       title: "Pomf Saver",
//       message: message,
//     },
//     function (notificationId) {
//       if (chrome.runtime.lastError) {
//         reject(chrome.runtime.lastError);
//       } else {
//         chrome.notifications.clear(notificationId, (wasCleared) => {
//           if (chrome.runtime.lastError) {
//             reject(chrome.runtime.lastError);
//           } else {
//             resolve(wasCleared);
//           }
//         });
//       }
//     }
//   );
// }
