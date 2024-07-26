// This URL must point to the public site
// const _URL = "https://localhost:3000/signInWithPopup";
const _URL =
  "https://pomf-saver-cerhtunz6-jsuskins-projects.vercel.app/signInWithPopup";
const iframe = document.createElement("iframe");
iframe.src = _URL;
document.documentElement.appendChild(iframe);
chrome.runtime.onMessage.addListener(handleChromeMessages);

function handleChromeMessages(message, sender, sendResponse) {
  // Extensions may have an number of other reasons to send messages, so you
  // should filter out any that are not meant for the offscreen document.
  if (message.target !== "offscreen") return false;

  function handleIframeMessage(event) {
    try {
      if (typeof event.data === "string" && event.data.startsWith("!_{")) {
        // Other parts of the Firebase library send messages using postMessage.
        // You don't care about them in this context, so return early.
        return;
      }

      data = JSON.parse(event.data);
      self.removeEventListener("message", handleIframeMessage);
      sendResponse(data);
    } catch (e) {
      console.log(`json parse failed - ${e.message}`);
    }
  }

  self.addEventListener("message", handleIframeMessage, false);
  
  if (message.type === "start-auth") {
    iframe.contentWindow.postMessage({ initAuth: true }, new URL(_URL).origin);
  } else if (message.type === "sign-out") {
    iframe.contentWindow.postMessage({ signOut: true }, new URL(_URL).origin);
  }

  return true;
}
