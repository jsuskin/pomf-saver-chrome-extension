// const DEFAULT_STATUS_TEXT =
//   'Please navigate to <a href="https://pomf2.lain.la/" target="_blank">https://pomf2.lain.la/</a> to use this extension or log in to <a href="https://localhost:3000/" target="_blank">https://localhost:3000/</a> with your Google account to view your saved Pomf URLs.';
const DEFAULT_STATUS_TEXT =
  'Please navigate to <a href="https://pomf2.lain.la/" target="_blank">https://pomf2.lain.la/</a> to use this extension or log in to <a href="https://pomf-saver-cerhtunz6-jsuskins-projects.vercel.app/" target="_blank">https://pomf-saver-cerhtunz6-jsuskins-projects.vercel.app/</a> with your Google account to view your saved Pomf URLs.';

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login");
  const logoutButton = document.getElementById("logout");

  const statusElement = document.getElementById("status");
  const marqueeElement = statusElement.querySelector("marquee");

  function updateUI(isAuthenticated) {
    loginButton.style.display = isAuthenticated ? "none" : "block";
    logoutButton.style.display = isAuthenticated ? "block" : "none";

    if (isAuthenticated) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];

        if (currentTab.url === "https://pomf2.lain.la/") {
          marqueeElement.innerText = "FEED ME A STRAY CAT";
        } else {
          const pElement = document.createElement("p");
          pElement.innerHTML = DEFAULT_STATUS_TEXT;
          statusElement.replaceChild(pElement, marqueeElement);
        }

        chrome.runtime.onMessage.addListener(
          (message, sender, sendResponse) => {
            console.log("Popup received message:", message);
            statusElement.textContent = message.message;
            statusElement.style.color = message.success ? "green" : "red";
          }
        );
      });
    } else {
    }
  }

  // Check authentication status
  chrome.storage.local.get("isAuthenticated", (result) => {
    updateUI(result.isAuthenticated);
  });

  // Add login event listener
  loginButton.addEventListener("click", () => {
    console.log("in login event handler");
    chrome.runtime.sendMessage(
      { type: "start-auth", target: "background" },
      (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error in sendMessage: ", chrome.runtime.lastError);
        } else {
          console.log("in auth sendMessage response callback", response);
          if (response?.success) {
            chrome.storage.local.set({ isAuthenticated: true });
          } else {
            console.error(
              "Authentication failed or no response:",
              response?.error
            );
          }
        }
      }
    );
  });

  // Add sign out event listener
  logoutButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "sign-out" }, (response) => {
      chrome.storage.local.set({ isAuthenticated: false });
    });
  });

  // Listen for changes in authentication status
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "local" && changes.isAuthenticated) {
      updateUI(changes.isAuthenticated.newValue);
      window.focus();
    }
  });
});
