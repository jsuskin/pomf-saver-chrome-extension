console.log("Content script loaded");

const targetNode = document.querySelector("ul#upload-filelist");
console.log("Target node:", targetNode);
const config = { childList: true, subtree: true };

let debounceTimer;

if (targetNode) {
  const callback = (mutationsList) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      console.log("👍 target node");
      for (let mutation of mutationsList) {
        console.log("Mutation observed:", mutation);
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            console.log("Added node:", node);
            if (node.nodeName === "LI") {
              // Check if the LI node has the desired anchor element
              waitForElement(node, "span.file-url a", (anchorElement) => {
                console.log("Anchor element found:", anchorElement);
                if (anchorElement && anchorElement.href) {
                  const newUrl = anchorElement.href;
                  console.log("New URL:", newUrl);
                  chrome.runtime.sendMessage({ url: newUrl });
                } else {
                  console.error("Anchor element or href not found:", node);
                }
              });
            } else {
              console.log("Added node is not an LI:", node);
            }
          });
        }
      }
    }, 1000); // Adjust the debounce timeout as necessary
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  console.log("Mutation observer set up");
} else {
  console.error('Target node "ul#upload-filelist" not found');
}

function waitForElement(parentNode, selector, callback) {
  const element = parentNode.querySelector(selector);
  if (element) {
    callback(element);
  } else {
    // Use requestAnimationFrame to check again on the next frame
    requestAnimationFrame(() => waitForElement(parentNode, selector, callback));
  }
}
