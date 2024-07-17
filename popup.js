document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login");
  const signOutButton = document.createElement("button");
  signOutButton.innerText = "Sign Out";
  signOutButton.id = "sign-out";

  function updateUI(isAuthenticated) {
    console.log("updateUI: ", {isAuthenticated})
    if (isAuthenticated) {
      loginButton.style.display = "none";
      signOutButton.style.display = "block";
      document.body.appendChild(signOutButton);
    } else {
      loginButton.style.display = "block";
      signOutButton.style.display = "none";
    }
  }

  // Check authentication status
  chrome.storage.local.get("isAuthenticated", (result) => {
    updateUI(result.isAuthenticated);
  });

  // Add login event listener
  loginButton.addEventListener("click", () => {
    console.log("sign in button clicked")
    chrome.runtime.sendMessage({ type: "start-auth" }, (response) => {
      console.log("sign in callback")
      if (response.success) {
        chrome.storage.local.set({ isAuthenticated: true });
      }
    });
  });

  // Add sign out event listener
  signOutButton.addEventListener("click", () => {
    console.log("sign out button clicked");
    chrome.runtime.sendMessage({ type: "sign-out" }, (response) => {
      console.log('before set isAuthenticated false: ', {response})
      chrome.storage.local.set({ isAuthenticated: false });
      console.log("after set isAuthenticated false")
    });
    console.log("after auth listener")
  });

  // Listen for changes in authentication status
  chrome.storage.onChanged.addListener((changes, areaName) => {
    console.log("auth change detected")
    if (areaName === "local" && changes.isAuthenticated) {
      updateUI(changes.isAuthenticated.newValue);
    }
  });
});


// document.addEventListener("DOMContentLoaded", function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     const currentTab = tabs[0];
//     const statusElement = document.getElementById("status");

//     if (currentTab.url === "https://pomf2.lain.la/") {
//       statusElement.innerHTML =
//         '<marquee scrollamount="12">FEED ME A STRAY CAT</marquee>';

//       // Color
//       statusElement.style.backgroundColor = "#424242";
//       statusElement.style.color = "#458a57";

//       // Custom Font
//       statusElement.style.fontFamily = "Tiny5";
//       statusElement.style.fontSize = "1.9em";

//       // Positioning
//       statusElement.style.textAlign = "center";
//       statusElement.style.paddingTop = "4px";
//     } else {
//       statusElement.innerHTML = `Please navigate to <a href="https://pomf2.lain.la/" target="_blank">https://pomf2.lain.la/</a> to use this extension or log in to <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> with your Google account to view your saved Pomf URLs.`;
//     }

//     chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//       console.log("Popup received message:", message);
//       statusElement.textContent = message.message;
//       statusElement.style.color = message.success ? "green" : "red";
//     });
//   });
// });
