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
if (targetNode) {
  var callback = function callback(mutationsList) {
    // console.log("Mutation observed:", mutationsList);
    var _iterator = _createForOfIteratorHelper(mutationsList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(function (node) {
            // console.log("Added node:", node);
            if (node.nodeName === "LI") {
              // Check for the presence of the span.file-url a element
              waitForElement(node, "span.file-url a", function (anchorElement) {
                console.log("Anchor element:", anchorElement);
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
              // console.error("Added node is not an LI:", node);
            }
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnNpb24vLi9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiQ29udGVudCBzY3JpcHQgbG9hZGVkXCIpO1xyXG5cclxuY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCN1cGxvYWQtZmlsZWxpc3RcIik7XHJcbmNvbnNvbGUubG9nKFwiVGFyZ2V0IG5vZGU6XCIsIHRhcmdldE5vZGUpO1xyXG5jb25zdCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xyXG5cclxuaWYgKHRhcmdldE5vZGUpIHtcclxuICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbnNMaXN0KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIk11dGF0aW9uIG9ic2VydmVkOlwiLCBtdXRhdGlvbnNMaXN0KTtcclxuICAgIGZvciAobGV0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcclxuICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIgJiYgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFkZGVkIG5vZGU6XCIsIG5vZGUpO1xyXG4gICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IFwiTElcIikge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBzcGFuLmZpbGUtdXJsIGEgZWxlbWVudFxyXG4gICAgICAgICAgICB3YWl0Rm9yRWxlbWVudChub2RlLCBcInNwYW4uZmlsZS11cmwgYVwiLCAoYW5jaG9yRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW5jaG9yIGVsZW1lbnQ6XCIsIGFuY2hvckVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgIGlmIChhbmNob3JFbGVtZW50ICYmIGFuY2hvckVsZW1lbnQuaHJlZikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VXJsID0gYW5jaG9yRWxlbWVudC5ocmVmO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgVVJMOlwiLCBuZXdVcmwpO1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB1cmw6IG5ld1VybCB9KTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuY2hvciBlbGVtZW50IG9yIGhyZWYgbm90IGZvdW5kOlwiLCBub2RlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIkFkZGVkIG5vZGUgaXMgbm90IGFuIExJOlwiLCBub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xyXG4gIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgY29uZmlnKTtcclxuICBjb25zb2xlLmxvZyhcIk11dGF0aW9uIG9ic2VydmVyIHNldCB1cFwiKTtcclxufSBlbHNlIHtcclxuICBjb25zb2xlLmVycm9yKCdUYXJnZXQgbm9kZSBcInVsI3VwbG9hZC1maWxlbGlzdFwiIG5vdCBmb3VuZCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YWl0Rm9yRWxlbWVudChwYXJlbnROb2RlLCBzZWxlY3RvciwgY2FsbGJhY2spIHtcclxuICBjb25zdCBlbGVtZW50ID0gcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICBpZiAoZWxlbWVudCkge1xyXG4gICAgY2FsbGJhY2soZWxlbWVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gY2hlY2sgYWdhaW4gb24gdGhlIG5leHQgZnJhbWVcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB3YWl0Rm9yRWxlbWVudChwYXJlbnROb2RlLCBzZWxlY3RvciwgY2FsbGJhY2spKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXROb2RlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uZmlnIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNhbGxiYWNrIiwibXV0YXRpb25zTGlzdCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJtdXRhdGlvbiIsInZhbHVlIiwidHlwZSIsImFkZGVkTm9kZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwibm9kZSIsIm5vZGVOYW1lIiwid2FpdEZvckVsZW1lbnQiLCJhbmNob3JFbGVtZW50IiwiaHJlZiIsIm5ld1VybCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInVybCIsImVycm9yIiwiZXJyIiwiZSIsImYiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwicGFyZW50Tm9kZSIsInNlbGVjdG9yIiwiZWxlbWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=