/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./popup.js ***!
  \******************/
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login").addEventListener("click", function () {
    chrome.runtime.sendMessage({
      type: "start-auth"
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN4REQsUUFBUSxDQUFDRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQy9ERSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDO01BQUVDLElBQUksRUFBRTtJQUFhLENBQUMsQ0FBQztFQUNwRCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb21mLXNhdmVyLWV4dGVuc2lvbi8uL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6IFwic3RhcnQtYXV0aFwiIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xyXG4vLyAgICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNbMF07XHJcbi8vICAgICBjb25zdCBzdGF0dXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XHJcblxyXG4vLyAgICAgaWYgKGN1cnJlbnRUYWIudXJsID09PSBcImh0dHBzOi8vcG9tZjIubGFpbi5sYS9cIikge1xyXG4vLyAgICAgICBzdGF0dXNFbGVtZW50LmlubmVySFRNTCA9XHJcbi8vICAgICAgICAgJzxtYXJxdWVlIHNjcm9sbGFtb3VudD1cIjEyXCI+RkVFRCBNRSBBIFNUUkFZIENBVDwvbWFycXVlZT4nO1xyXG5cclxuLy8gICAgICAgLy8gQ29sb3JcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0MjQyNDJcIjtcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC5zdHlsZS5jb2xvciA9IFwiIzQ1OGE1N1wiO1xyXG5cclxuLy8gICAgICAgLy8gQ3VzdG9tIEZvbnRcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gXCJUaW55NVwiO1xyXG4vLyAgICAgICBzdGF0dXNFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gXCIxLjllbVwiO1xyXG5cclxuLy8gICAgICAgLy8gUG9zaXRpb25pbmdcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4vLyAgICAgICBzdGF0dXNFbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjRweFwiO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgc3RhdHVzRWxlbWVudC5pbm5lckhUTUwgPSBgUGxlYXNlIG5hdmlnYXRlIHRvIDxhIGhyZWY9XCJodHRwczovL3BvbWYyLmxhaW4ubGEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9wb21mMi5sYWluLmxhLzwvYT4gdG8gdXNlIHRoaXMgZXh0ZW5zaW9uIG9yIGxvZyBpbiB0byA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC88L2E+IHdpdGggeW91ciBHb29nbGUgYWNjb3VudCB0byB2aWV3IHlvdXIgc2F2ZWQgUG9tZiBVUkxzLmA7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhcIlBvcHVwIHJlY2VpdmVkIG1lc3NhZ2U6XCIsIG1lc3NhZ2UpO1xyXG4vLyAgICAgICBzdGF0dXNFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZS5tZXNzYWdlO1xyXG4vLyAgICAgICBzdGF0dXNFbGVtZW50LnN0eWxlLmNvbG9yID0gbWVzc2FnZS5zdWNjZXNzID8gXCJncmVlblwiIDogXCJyZWRcIjtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pO1xyXG4vLyB9KTtcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRCeUlkIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=