console.log("Content script loaded");

const targetNode = document.querySelector("ul#upload-filelist");
console.log("Target node:", targetNode);
const config = { childList: true, subtree: true };

if (targetNode) {
  const callback = (mutationsList) => {
    // console.log("Mutation observed:", mutationsList);
    for (let mutation of mutationsList) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          // console.log("Added node:", node);
          if (node.nodeName === "LI") {
            // Check for the presence of the span.file-url a element
            waitForElement(node, "span.file-url a", (anchorElement) => {
              console.log("Anchor element:", anchorElement);
              if (anchorElement && anchorElement.href) {
                const newUrl = anchorElement.href;
                console.log("New URL:", newUrl);
                chrome.runtime.sendMessage({ url: newUrl });
              } else {
                console.error("Anchor element or href not found:", node);
              }
            });
          } else {
            // console.error("Added node is not an LI:", node);
          }
        });
      }
    }
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
