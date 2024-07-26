/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./popup.js ***!
  \******************/
// const DEFAULT_STATUS_TEXT =
//   'Please navigate to <a href="https://pomf2.lain.la/" target="_blank">https://pomf2.lain.la/</a> to use this extension or log in to <a href="https://localhost:3000/" target="_blank">https://localhost:3000/</a> with your Google account to view your saved Pomf URLs.';
var DEFAULT_STATUS_TEXT = 'Please navigate to <a href="https://pomf2.lain.la/" target="_blank">https://pomf2.lain.la/</a> to use this extension or log in to <a href="https://pomf-saver-cerhtunz6-jsuskins-projects.vercel.app/" target="_blank">https://pomf-saver-cerhtunz6-jsuskins-projects.vercel.app/</a> with your Google account to view your saved Pomf URLs.';
document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("login");
  var logoutButton = document.getElementById("logout");
  var statusElement = document.getElementById("status");
  var marqueeElement = statusElement.querySelector("marquee");
  function updateUI(isAuthenticated) {
    loginButton.style.display = isAuthenticated ? "none" : "block";
    logoutButton.style.display = isAuthenticated ? "block" : "none";
    if (isAuthenticated) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        var currentTab = tabs[0];
        if (currentTab.url === "https://pomf2.lain.la/") {
          marqueeElement.innerText = "FEED ME A STRAY CAT";
        } else {
          var pElement = document.createElement("p");
          pElement.innerHTML = DEFAULT_STATUS_TEXT;
          statusElement.replaceChild(pElement, marqueeElement);
        }
        chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
          console.log("Popup received message:", message);
          statusElement.textContent = message.message;
          statusElement.style.color = message.success ? "green" : "red";
        });
      });
    } else {}
  }

  // Check authentication status
  chrome.storage.local.get("isAuthenticated", function (result) {
    updateUI(result.isAuthenticated);
  });

  // Add login event listener
  loginButton.addEventListener("click", function () {
    console.log("in login event handler");
    chrome.runtime.sendMessage({
      type: "start-auth",
      target: "background"
    }, function (response) {
      if (chrome.runtime.lastError) {
        console.error("Error in sendMessage: ", chrome.runtime.lastError);
      } else {
        console.log("in auth sendMessage response callback", response);
        if (response !== null && response !== void 0 && response.success) {
          chrome.storage.local.set({
            isAuthenticated: true
          });
        } else {
          console.error("Authentication failed or no response:", response === null || response === void 0 ? void 0 : response.error);
        }
      }
    });
  });

  // Add sign out event listener
  logoutButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({
      type: "sign-out"
    }, function (response) {
      chrome.storage.local.set({
        isAuthenticated: false
      });
    });
  });

  // Listen for changes in authentication status
  chrome.storage.onChanged.addListener(function (changes, areaName) {
    if (areaName === "local" && changes.isAuthenticated) {
      updateUI(changes.isAuthenticated.newValue);
      window.focus();
    }
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxRQUFRLGFBQVJBLFFBQVEsZUFBUkEsUUFBUSxDQUFFUixPQUFPLEVBQUU7VUFDckJ0QixNQUFNLENBQUN1QixPQUFPLENBQUNDLEtBQUssQ0FBQ1MsR0FBRyxDQUFDO1lBQUVwQyxlQUFlLEVBQUU7VUFBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxNQUFNO1VBQ0xxQixPQUFPLENBQUNjLEtBQUssQ0FDWCx1Q0FBdUMsRUFDdkNGLFFBQVEsYUFBUkEsUUFBUSx1QkFBUkEsUUFBUSxDQUFFRSxLQUNaLENBQUM7UUFDSDtNQUNGO0lBQ0YsQ0FDRixDQUFDO0VBQ0gsQ0FBQyxDQUFDOztFQUVGO0VBQ0F4QyxZQUFZLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQzNDVyxNQUFNLENBQUNZLE9BQU8sQ0FBQ2UsV0FBVyxDQUFDO01BQUVDLElBQUksRUFBRTtJQUFXLENBQUMsRUFBRSxVQUFDRSxRQUFRLEVBQUs7TUFDN0Q5QixNQUFNLENBQUN1QixPQUFPLENBQUNDLEtBQUssQ0FBQ1MsR0FBRyxDQUFDO1FBQUVwQyxlQUFlLEVBQUU7TUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDOztFQUVGO0VBQ0FHLE1BQU0sQ0FBQ3VCLE9BQU8sQ0FBQ1csU0FBUyxDQUFDcEIsV0FBVyxDQUFDLFVBQUNxQixPQUFPLEVBQUVDLFFBQVEsRUFBSztJQUMxRCxJQUFJQSxRQUFRLEtBQUssT0FBTyxJQUFJRCxPQUFPLENBQUN0QyxlQUFlLEVBQUU7TUFDbkRELFFBQVEsQ0FBQ3VDLE9BQU8sQ0FBQ3RDLGVBQWUsQ0FBQ3dDLFFBQVEsQ0FBQztNQUMxQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUNoQjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9tZi1zYXZlci1leHRlbnNpb24vLi9wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBERUZBVUxUX1NUQVRVU19URVhUID1cclxuLy8gICAnUGxlYXNlIG5hdmlnYXRlIHRvIDxhIGhyZWY9XCJodHRwczovL3BvbWYyLmxhaW4ubGEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9wb21mMi5sYWluLmxhLzwvYT4gdG8gdXNlIHRoaXMgZXh0ZW5zaW9uIG9yIGxvZyBpbiB0byA8YSBocmVmPVwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL2xvY2FsaG9zdDozMDAwLzwvYT4gd2l0aCB5b3VyIEdvb2dsZSBhY2NvdW50IHRvIHZpZXcgeW91ciBzYXZlZCBQb21mIFVSTHMuJztcclxuY29uc3QgREVGQVVMVF9TVEFUVVNfVEVYVCA9XHJcbiAgJ1BsZWFzZSBuYXZpZ2F0ZSB0byA8YSBocmVmPVwiaHR0cHM6Ly9wb21mMi5sYWluLmxhL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vcG9tZjIubGFpbi5sYS88L2E+IHRvIHVzZSB0aGlzIGV4dGVuc2lvbiBvciBsb2cgaW4gdG8gPGEgaHJlZj1cImh0dHBzOi8vcG9tZi1zYXZlci1jZXJodHVuejYtanN1c2tpbnMtcHJvamVjdHMudmVyY2VsLmFwcC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL3BvbWYtc2F2ZXItY2VyaHR1bno2LWpzdXNraW5zLXByb2plY3RzLnZlcmNlbC5hcHAvPC9hPiB3aXRoIHlvdXIgR29vZ2xlIGFjY291bnQgdG8gdmlldyB5b3VyIHNhdmVkIFBvbWYgVVJMcy4nO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKTtcclxuICBjb25zdCBsb2dvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ291dFwiKTtcclxuXHJcbiAgY29uc3Qgc3RhdHVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpO1xyXG4gIGNvbnN0IG1hcnF1ZWVFbGVtZW50ID0gc3RhdHVzRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibWFycXVlZVwiKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlVUkoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICBsb2dpbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gaXNBdXRoZW50aWNhdGVkID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcbiAgICBsb2dvdXRCdXR0b24uc3R5bGUuZGlzcGxheSA9IGlzQXV0aGVudGljYXRlZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xyXG5cclxuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VGFiID0gdGFic1swXTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRUYWIudXJsID09PSBcImh0dHBzOi8vcG9tZjIubGFpbi5sYS9cIikge1xyXG4gICAgICAgICAgbWFycXVlZUVsZW1lbnQuaW5uZXJUZXh0ID0gXCJGRUVEIE1FIEEgU1RSQVkgQ0FUXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICBwRWxlbWVudC5pbm5lckhUTUwgPSBERUZBVUxUX1NUQVRVU19URVhUO1xyXG4gICAgICAgICAgc3RhdHVzRWxlbWVudC5yZXBsYWNlQ2hpbGQocEVsZW1lbnQsIG1hcnF1ZWVFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcclxuICAgICAgICAgIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBvcHVwIHJlY2VpdmVkIG1lc3NhZ2U6XCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZS5tZXNzYWdlO1xyXG4gICAgICAgICAgICBzdGF0dXNFbGVtZW50LnN0eWxlLmNvbG9yID0gbWVzc2FnZS5zdWNjZXNzID8gXCJncmVlblwiIDogXCJyZWRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBhdXRoZW50aWNhdGlvbiBzdGF0dXNcclxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJpc0F1dGhlbnRpY2F0ZWRcIiwgKHJlc3VsdCkgPT4ge1xyXG4gICAgdXBkYXRlVUkocmVzdWx0LmlzQXV0aGVudGljYXRlZCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFkZCBsb2dpbiBldmVudCBsaXN0ZW5lclxyXG4gIGxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluIGxvZ2luIGV2ZW50IGhhbmRsZXJcIik7XHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcclxuICAgICAgeyB0eXBlOiBcInN0YXJ0LWF1dGhcIiwgdGFyZ2V0OiBcImJhY2tncm91bmRcIiB9LFxyXG4gICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gc2VuZE1lc3NhZ2U6IFwiLCBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImluIGF1dGggc2VuZE1lc3NhZ2UgcmVzcG9uc2UgY2FsbGJhY2tcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlPy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGlzQXV0aGVudGljYXRlZDogdHJ1ZSB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgICAgXCJBdXRoZW50aWNhdGlvbiBmYWlsZWQgb3Igbm8gcmVzcG9uc2U6XCIsXHJcbiAgICAgICAgICAgICAgcmVzcG9uc2U/LmVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBZGQgc2lnbiBvdXQgZXZlbnQgbGlzdGVuZXJcclxuICBsb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogXCJzaWduLW91dFwiIH0sIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIExpc3RlbiBmb3IgY2hhbmdlcyBpbiBhdXRoZW50aWNhdGlvbiBzdGF0dXNcclxuICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoKGNoYW5nZXMsIGFyZWFOYW1lKSA9PiB7XHJcbiAgICBpZiAoYXJlYU5hbWUgPT09IFwibG9jYWxcIiAmJiBjaGFuZ2VzLmlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICB1cGRhdGVVSShjaGFuZ2VzLmlzQXV0aGVudGljYXRlZC5uZXdWYWx1ZSk7XHJcbiAgICAgIHdpbmRvdy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIkRFRkFVTFRfU1RBVFVTX1RFWFQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2dpbkJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwibG9nb3V0QnV0dG9uIiwic3RhdHVzRWxlbWVudCIsIm1hcnF1ZWVFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInVwZGF0ZVVJIiwiaXNBdXRoZW50aWNhdGVkIiwic3R5bGUiLCJkaXNwbGF5IiwiY2hyb21lIiwidGFicyIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsImN1cnJlbnRUYWIiLCJ1cmwiLCJpbm5lclRleHQiLCJwRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJyZXBsYWNlQ2hpbGQiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtZXNzYWdlIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInRleHRDb250ZW50IiwiY29sb3IiLCJzdWNjZXNzIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0Iiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwidGFyZ2V0IiwicmVzcG9uc2UiLCJsYXN0RXJyb3IiLCJlcnJvciIsInNldCIsIm9uQ2hhbmdlZCIsImNoYW5nZXMiLCJhcmVhTmFtZSIsIm5ld1ZhbHVlIiwid2luZG93IiwiZm9jdXMiXSwic291cmNlUm9vdCI6IiJ9