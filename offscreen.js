// This URL must point to the public site
const _URL = "https://localhost:3000/signInWithPopup";
const iframe = document.createElement("iframe");
iframe.src = _URL;
document.documentElement.appendChild(iframe);
chrome.runtime.onMessage.addListener(handleChromeMessages);

function handleChromeMessages(message, sender, sendResponse) {
  // Extensions may have an number of other reasons to send messages, so you
  // should filter out any that are not meant for the offscreen document.
  if (message.target !== "offscreen") {
    return false;
  }

  console.log("$$handleChromeMessages$$ Message received:", message);

  function handleIframeMessage(event) {
    console.log("$$handleIFrameMessage$$ before try/catch:", event.data);
    try {
      if (typeof event.data === "string" && event.data.startsWith("!_{")) {
        // Other parts of the Firebase library send messages using postMessage.
        // You don't care about them in this context, so return early.
        return;
      }
      data = JSON.parse(event.  data);
      self.removeEventListener("message", handleIframeMessage);
      console.log("$$handleIFrameMessage$$ Message from iframe:", data);
      
      sendResponse(data);
    } catch (e) {
      console.log(`json parse failed - ${e.message}`);
    }
  }

  self.addEventListener("message", handleIframeMessage, false);

  // Initialize the authentication flow in the iframed document. You must set the
  // second argument (targetOrigin) of the message in order for it to be successfully
  // delivered.
  console.log("Sending message to iframe: ", { initAuth: true });
  iframe.contentWindow.postMessage({ initAuth: true }, new URL(_URL).origin);
  console.log("Message sent to iframe:", { initAuth: true });
  return true;
}
