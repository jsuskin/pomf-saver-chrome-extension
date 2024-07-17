/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./popup.js ***!
  \******************/
document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("login");
  var signOutButton = document.createElement("button");
  signOutButton.innerText = "Sign Out";
  signOutButton.id = "sign-out";
  function updateUI(isAuthenticated) {
    console.log("updateUI: ", {
      isAuthenticated: isAuthenticated
    });
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
  chrome.storage.local.get("isAuthenticated", function (result) {
    updateUI(result.isAuthenticated);
  });

  // Add login event listener
  loginButton.addEventListener("click", function () {
    console.log("sign in button clicked");
    chrome.runtime.sendMessage({
      type: "start-auth"
    }, function (response) {
      console.log("sign in callback");
      if (response.success) {
        chrome.storage.local.set({
          isAuthenticated: true
        });
      }
    });
  });

  // Add sign out event listener
  signOutButton.addEventListener("click", function () {
    console.log("sign out button clicked");
    chrome.runtime.sendMessage({
      type: "sign-out"
    }, function (response) {
      console.log('before set isAuthenticated false: ', {
        response: response
      });
      chrome.storage.local.set({
        isAuthenticated: false
      });
      console.log("after set isAuthenticated false");
    });
    console.log("after auth listener");
  });

  // Listen for changes in authentication status
  chrome.storage.onChanged.addListener(function (changes, areaName) {
    console.log("auth change detected");
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDcEIsZUFBZSxDQUFDc0IsUUFBUSxDQUFDO0lBQzVDO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9tZi1zYXZlci1leHRlbnNpb24vLi9wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xyXG4gIGNvbnN0IHNpZ25PdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHNpZ25PdXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTaWduIE91dFwiO1xyXG4gIHNpZ25PdXRCdXR0b24uaWQgPSBcInNpZ24tb3V0XCI7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVVJKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGVVSTogXCIsIHtpc0F1dGhlbnRpY2F0ZWR9KVxyXG4gICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICBsb2dpbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHNpZ25PdXRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaWduT3V0QnV0dG9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZ2luQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHNpZ25PdXRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgYXV0aGVudGljYXRpb24gc3RhdHVzXHJcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwiaXNBdXRoZW50aWNhdGVkXCIsIChyZXN1bHQpID0+IHtcclxuICAgIHVwZGF0ZVVJKHJlc3VsdC5pc0F1dGhlbnRpY2F0ZWQpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBZGQgbG9naW4gZXZlbnQgbGlzdGVuZXJcclxuICBsb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzaWduIGluIGJ1dHRvbiBjbGlja2VkXCIpXHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwic3RhcnQtYXV0aFwiIH0sIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNpZ24gaW4gY2FsbGJhY2tcIilcclxuICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBZGQgc2lnbiBvdXQgZXZlbnQgbGlzdGVuZXJcclxuICBzaWduT3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNpZ24gb3V0IGJ1dHRvbiBjbGlja2VkXCIpO1xyXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcInNpZ24tb3V0XCIgfSwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgc2V0IGlzQXV0aGVudGljYXRlZCBmYWxzZTogJywge3Jlc3BvbnNlfSlcclxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJhZnRlciBzZXQgaXNBdXRoZW50aWNhdGVkIGZhbHNlXCIpXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgYXV0aCBsaXN0ZW5lclwiKVxyXG4gIH0pO1xyXG5cclxuICAvLyBMaXN0ZW4gZm9yIGNoYW5nZXMgaW4gYXV0aGVudGljYXRpb24gc3RhdHVzXHJcbiAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKChjaGFuZ2VzLCBhcmVhTmFtZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJhdXRoIGNoYW5nZSBkZXRlY3RlZFwiKVxyXG4gICAgaWYgKGFyZWFOYW1lID09PSBcImxvY2FsXCIgJiYgY2hhbmdlcy5pc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgdXBkYXRlVUkoY2hhbmdlcy5pc0F1dGhlbnRpY2F0ZWQubmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuLy8gICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJzWzBdO1xyXG4vLyAgICAgY29uc3Qgc3RhdHVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpO1xyXG5cclxuLy8gICAgIGlmIChjdXJyZW50VGFiLnVybCA9PT0gXCJodHRwczovL3BvbWYyLmxhaW4ubGEvXCIpIHtcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC5pbm5lckhUTUwgPVxyXG4vLyAgICAgICAgICc8bWFycXVlZSBzY3JvbGxhbW91bnQ9XCIxMlwiPkZFRUQgTUUgQSBTVFJBWSBDQVQ8L21hcnF1ZWU+JztcclxuXHJcbi8vICAgICAgIC8vIENvbG9yXHJcbi8vICAgICAgIHN0YXR1c0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNDI0MjQyXCI7XHJcbi8vICAgICAgIHN0YXR1c0VsZW1lbnQuc3R5bGUuY29sb3IgPSBcIiM0NThhNTdcIjtcclxuXHJcbi8vICAgICAgIC8vIEN1c3RvbSBGb250XHJcbi8vICAgICAgIHN0YXR1c0VsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9IFwiVGlueTVcIjtcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiMS45ZW1cIjtcclxuXHJcbi8vICAgICAgIC8vIFBvc2l0aW9uaW5nXHJcbi8vICAgICAgIHN0YXR1c0VsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gXCI0cHhcIjtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHN0YXR1c0VsZW1lbnQuaW5uZXJIVE1MID0gYFBsZWFzZSBuYXZpZ2F0ZSB0byA8YSBocmVmPVwiaHR0cHM6Ly9wb21mMi5sYWluLmxhL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vcG9tZjIubGFpbi5sYS88L2E+IHRvIHVzZSB0aGlzIGV4dGVuc2lvbiBvciBsb2cgaW4gdG8gPGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwOi8vbG9jYWxob3N0OjMwMDAvPC9hPiB3aXRoIHlvdXIgR29vZ2xlIGFjY291bnQgdG8gdmlldyB5b3VyIHNhdmVkIFBvbWYgVVJMcy5gO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcclxuLy8gICAgICAgY29uc29sZS5sb2coXCJQb3B1cCByZWNlaXZlZCBtZXNzYWdlOlwiLCBtZXNzYWdlKTtcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2UubWVzc2FnZTtcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC5zdHlsZS5jb2xvciA9IG1lc3NhZ2Uuc3VjY2VzcyA/IFwiZ3JlZW5cIiA6IFwicmVkXCI7XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuLy8gfSk7XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2dpbkJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwic2lnbk91dEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJpZCIsInVwZGF0ZVVJIiwiaXNBdXRoZW50aWNhdGVkIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNocm9tZSIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsInJlc3VsdCIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJzZXQiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNoYW5nZXMiLCJhcmVhTmFtZSIsIm5ld1ZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==