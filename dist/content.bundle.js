/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./content.js ***!
  \********************/
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
console.log("Content script loaded");
var targetNode = document.querySelector("ul#upload-filelist");
console.log("Target node:", targetNode);
var config = {
  childList: true,
  subtree: true
};
var debounceTimer;
if (targetNode) {
  var callback = function callback(mutationsList) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      console.log("👍 target node");
      var _iterator = _createForOfIteratorHelper(mutationsList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;
          console.log("Mutation observed:", mutation);
          if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(function (node) {
              console.log("Added node:", node);
              if (node.nodeName === "LI") {
                // Check if the LI node has the desired anchor element
                waitForElement(node, "span.file-url a", function (anchorElement) {
                  console.log("Anchor element found:", anchorElement);
                  if (anchorElement && anchorElement.href) {
                    var newUrl = anchorElement.href;
                    console.log("New URL:", newUrl);
                    chrome.runtime.sendMessage({
                      url: newUrl
                    });
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
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }, 1000); // Adjust the debounce timeout as necessary
  };
  var observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  console.log("Mutation observer set up");
} else {
  console.error('Target node "ul#upload-filelist" not found');
}
function waitForElement(parentNode, selector, callback) {
  var element = parentNode.querySelector(selector);
  if (element) {
    callback(element);
  } else {
    // Use requestAnimationFrame to check again on the next frame
    requestAnimationFrame(function () {
      return waitForElement(parentNode, selector, callback);
    });
  }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7QUFFcEMsSUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUMvREosT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFQyxVQUFVLENBQUM7QUFDdkMsSUFBTUcsTUFBTSxHQUFHO0VBQUVDLFNBQVMsRUFBRSxJQUFJO0VBQUVDLE9BQU8sRUFBRTtBQUFLLENBQUM7QUFFakQsSUFBSUMsYUFBYTtBQUVqQixJQUFJTixVQUFVLEVBQUU7RUFDZCxJQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsYUFBYSxFQUFLO0lBQ2xDQyxZQUFZLENBQUNILGFBQWEsQ0FBQztJQUMzQkEsYUFBYSxHQUFHSSxVQUFVLENBQUMsWUFBTTtNQUMvQlosT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7TUFBQyxJQUFBWSxTQUFBLEdBQUFDLDBCQUFBLENBQ1RKLGFBQWE7UUFBQUssS0FBQTtNQUFBO1FBQWxDLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQW9DO1VBQUEsSUFBM0JDLFFBQVEsR0FBQUosS0FBQSxDQUFBSyxLQUFBO1VBQ2ZwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRWtCLFFBQVEsQ0FBQztVQUMzQyxJQUFJQSxRQUFRLENBQUNFLElBQUksS0FBSyxXQUFXLElBQUlGLFFBQVEsQ0FBQ0csVUFBVSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25FSixRQUFRLENBQUNHLFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSztjQUNwQ3pCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRXdCLElBQUksQ0FBQztjQUNoQyxJQUFJQSxJQUFJLENBQUNDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQzFCO2dCQUNBQyxjQUFjLENBQUNGLElBQUksRUFBRSxpQkFBaUIsRUFBRSxVQUFDRyxhQUFhLEVBQUs7a0JBQ3pENUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUyQixhQUFhLENBQUM7a0JBQ25ELElBQUlBLGFBQWEsSUFBSUEsYUFBYSxDQUFDQyxJQUFJLEVBQUU7b0JBQ3ZDLElBQU1DLE1BQU0sR0FBR0YsYUFBYSxDQUFDQyxJQUFJO29CQUNqQzdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRTZCLE1BQU0sQ0FBQztvQkFDL0JDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUM7c0JBQUVDLEdBQUcsRUFBRUo7b0JBQU8sQ0FBQyxDQUFDO2tCQUM3QyxDQUFDLE1BQU07b0JBQ0w5QixPQUFPLENBQUNtQyxLQUFLLENBQUMsbUNBQW1DLEVBQUVWLElBQUksQ0FBQztrQkFDMUQ7Z0JBQ0YsQ0FBQyxDQUFDO2NBQ0osQ0FBQyxNQUFNO2dCQUNMekIsT0FBTyxDQUFDQyxHQUFHLENBQUMsMEJBQTBCLEVBQUV3QixJQUFJLENBQUM7Y0FDL0M7WUFDRixDQUFDLENBQUM7VUFDSjtRQUNGO01BQUMsU0FBQVcsR0FBQTtRQUFBdkIsU0FBQSxDQUFBd0IsQ0FBQSxDQUFBRCxHQUFBO01BQUE7UUFBQXZCLFNBQUEsQ0FBQXlCLENBQUE7TUFBQTtJQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ1osQ0FBQztFQUVELElBQU1DLFFBQVEsR0FBRyxJQUFJQyxnQkFBZ0IsQ0FBQy9CLFFBQVEsQ0FBQztFQUMvQzhCLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDdkMsVUFBVSxFQUFFRyxNQUFNLENBQUM7RUFDcENMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixDQUFDO0FBQ3pDLENBQUMsTUFBTTtFQUNMRCxPQUFPLENBQUNtQyxLQUFLLENBQUMsNENBQTRDLENBQUM7QUFDN0Q7QUFFQSxTQUFTUixjQUFjQSxDQUFDZSxVQUFVLEVBQUVDLFFBQVEsRUFBRWxDLFFBQVEsRUFBRTtFQUN0RCxJQUFNbUMsT0FBTyxHQUFHRixVQUFVLENBQUN0QyxhQUFhLENBQUN1QyxRQUFRLENBQUM7RUFDbEQsSUFBSUMsT0FBTyxFQUFFO0lBQ1huQyxRQUFRLENBQUNtQyxPQUFPLENBQUM7RUFDbkIsQ0FBQyxNQUFNO0lBQ0w7SUFDQUMscUJBQXFCLENBQUM7TUFBQSxPQUFNbEIsY0FBYyxDQUFDZSxVQUFVLEVBQUVDLFFBQVEsRUFBRWxDLFFBQVEsQ0FBQztJQUFBLEVBQUM7RUFDN0U7QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9tZi1zYXZlci1leHRlbnNpb24vLi9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiQ29udGVudCBzY3JpcHQgbG9hZGVkXCIpO1xyXG5cclxuY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCN1cGxvYWQtZmlsZWxpc3RcIik7XHJcbmNvbnNvbGUubG9nKFwiVGFyZ2V0IG5vZGU6XCIsIHRhcmdldE5vZGUpO1xyXG5jb25zdCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xyXG5cclxubGV0IGRlYm91bmNlVGltZXI7XHJcblxyXG5pZiAodGFyZ2V0Tm9kZSkge1xyXG4gIGNvbnN0IGNhbGxiYWNrID0gKG11dGF0aW9uc0xpc3QpID0+IHtcclxuICAgIGNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVyKTtcclxuICAgIGRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCLwn5GNIHRhcmdldCBub2RlXCIpO1xyXG4gICAgICBmb3IgKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNdXRhdGlvbiBvYnNlcnZlZDpcIiwgbXV0YXRpb24pO1xyXG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSBcImNoaWxkTGlzdFwiICYmIG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkZWQgbm9kZTpcIiwgbm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBcIkxJXCIpIHtcclxuICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgTEkgbm9kZSBoYXMgdGhlIGRlc2lyZWQgYW5jaG9yIGVsZW1lbnRcclxuICAgICAgICAgICAgICB3YWl0Rm9yRWxlbWVudChub2RlLCBcInNwYW4uZmlsZS11cmwgYVwiLCAoYW5jaG9yRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbmNob3IgZWxlbWVudCBmb3VuZDpcIiwgYW5jaG9yRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5jaG9yRWxlbWVudCAmJiBhbmNob3JFbGVtZW50LmhyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VXJsID0gYW5jaG9yRWxlbWVudC5ocmVmO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBVUkw6XCIsIG5ld1VybCk7XHJcbiAgICAgICAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdXJsOiBuZXdVcmwgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW5jaG9yIGVsZW1lbnQgb3IgaHJlZiBub3QgZm91bmQ6XCIsIG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkZWQgbm9kZSBpcyBub3QgYW4gTEk6XCIsIG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApOyAvLyBBZGp1c3QgdGhlIGRlYm91bmNlIHRpbWVvdXQgYXMgbmVjZXNzYXJ5XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XHJcbiAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBjb25maWcpO1xyXG4gIGNvbnNvbGUubG9nKFwiTXV0YXRpb24gb2JzZXJ2ZXIgc2V0IHVwXCIpO1xyXG59IGVsc2Uge1xyXG4gIGNvbnNvbGUuZXJyb3IoJ1RhcmdldCBub2RlIFwidWwjdXBsb2FkLWZpbGVsaXN0XCIgbm90IGZvdW5kJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhaXRGb3JFbGVtZW50KHBhcmVudE5vZGUsIHNlbGVjdG9yLCBjYWxsYmFjaykge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBwYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gIGlmIChlbGVtZW50KSB7XHJcbiAgICBjYWxsYmFjayhlbGVtZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gVXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBjaGVjayBhZ2FpbiBvbiB0aGUgbmV4dCBmcmFtZVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHdhaXRGb3JFbGVtZW50KHBhcmVudE5vZGUsIHNlbGVjdG9yLCBjYWxsYmFjaykpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInRhcmdldE5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25maWciLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZGVib3VuY2VUaW1lciIsImNhbGxiYWNrIiwibXV0YXRpb25zTGlzdCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwibXV0YXRpb24iLCJ2YWx1ZSIsInR5cGUiLCJhZGRlZE5vZGVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIm5vZGUiLCJub2RlTmFtZSIsIndhaXRGb3JFbGVtZW50IiwiYW5jaG9yRWxlbWVudCIsImhyZWYiLCJuZXdVcmwiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJ1cmwiLCJlcnJvciIsImVyciIsImUiLCJmIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsInBhcmVudE5vZGUiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9