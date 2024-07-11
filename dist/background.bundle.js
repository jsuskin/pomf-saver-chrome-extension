/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var isPopupOpen = false;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "start-auth") {
    console.log("Received start-auth message");
    firebaseAuth().then(function (result) {
      console.log("Authentication successful:", result);
      sendResponse({
        success: true
      });
    })["catch"](function (error) {
      console.error("Authentication failed:", error);
      sendResponse({
        success: false,
        error: error.message
      });
    });
    return true; // Ensure the sendResponse is called asynchronously
  }
});
var OFFSCREEN_DOCUMENT_PATH = "/offscreen.html";

// A global promise to avoid concurrency issues
var creatingOffscreenDocument;
function hasDocument() {
  return _hasDocument.apply(this, arguments);
}
function _hasDocument() {
  _hasDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var matchedClients;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return clients.matchAll();
        case 2:
          matchedClients = _context2.sent;
          console.log("Matched clients: ", matchedClients);
          return _context2.abrupt("return", matchedClients.some(function (c) {
            return c.url === chrome.runtime.getURL(OFFSCREEN_DOCUMENT_PATH);
          }));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _hasDocument.apply(this, arguments);
}
function setupOffscreenDocument(_x) {
  return _setupOffscreenDocument.apply(this, arguments);
}
function _setupOffscreenDocument() {
  _setupOffscreenDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(path) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return hasDocument();
        case 2:
          if (_context3.sent) {
            _context3.next = 15;
            break;
          }
          console.log("Does not have doc");
          if (!creatingOffscreenDocument) {
            _context3.next = 9;
            break;
          }
          _context3.next = 7;
          return creatingOffscreenDocument;
        case 7:
          _context3.next = 15;
          break;
        case 9:
          console.log("Creating offscreen doc");
          creatingOffscreenDocument = chrome.offscreen.createDocument({
            url: path,
            reasons: [chrome.offscreen.Reason.DOM_SCRAPING],
            justification: "authentication"
          });
          _context3.next = 13;
          return creatingOffscreenDocument;
        case 13:
          console.log("Created offscreen doc");
          creatingOffscreenDocument = null;
        case 15:
          _context3.next = 17;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 1000);
          });
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _setupOffscreenDocument.apply(this, arguments);
}
function closeOffscreenDocument() {
  return _closeOffscreenDocument.apply(this, arguments);
}
function _closeOffscreenDocument() {
  _closeOffscreenDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return hasDocument();
        case 2:
          if (_context4.sent) {
            _context4.next = 5;
            break;
          }
          console.log("No offscreen doc to close");
          return _context4.abrupt("return");
        case 5:
          _context4.next = 7;
          return chrome.offscreen.closeDocument();
        case 7:
          console.log("Closed offscreen doc");
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _closeOffscreenDocument.apply(this, arguments);
}
function getAuth() {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var auth;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log("Sending message to offscreen");
            _context.next = 3;
            return chrome.runtime.sendMessage({
              type: "start-auth",
              target: "offscreen"
            });
          case 3:
            auth = _context.sent;
            console.log("In getAuth promise", auth);
            (auth === null || auth === void 0 ? void 0 : auth.name) !== "FirebaseError" ? resolve(auth) : reject(auth);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
}
function firebaseAuth() {
  return _firebaseAuth.apply(this, arguments);
}
function _firebaseAuth() {
  _firebaseAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var auth;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return setupOffscreenDocument(OFFSCREEN_DOCUMENT_PATH);
        case 2:
          _context5.next = 4;
          return getAuth().then(function (auth) {
            console.log("User Authenticated", auth);
            return auth;
          })["catch"](function (err) {
            if (err.code === "auth/operation-not-allowed") {
              console.error("You must enable an OAuth provider in the Firebase" + " console in order to use signInWithPopup. This sample" + " uses Google by default.");
            } else {
              console.error(err);
              return err;
            }
          })["finally"](closeOffscreenDocument);
        case 4:
          auth = _context5.sent;
          return _context5.abrupt("return", auth);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _firebaseAuth.apply(this, arguments);
}
chrome.runtime.onInstalled.addListener(function () {
  console.log("Pomf Saver Extension Installed");
});
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Message received:", message);
  if (message.url) {
    saveUrlToFirebase(message.url);
  }
});
function saveUrlToFirebase(_x4) {
  return _saveUrlToFirebase.apply(this, arguments);
}
function _saveUrlToFirebase() {
  _saveUrlToFirebase = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(url) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return fetch("https://localhost:3000/api/save-url", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              url: url
            })
          });
        case 3:
          response = _context6.sent;
          if (response.ok) {
            _context6.next = 6;
            break;
          }
          throw new Error("Network response was not ok " + response.statusText);
        case 6:
          _context6.next = 8;
          return response.json();
        case 8:
          data = _context6.sent;
          console.log("URL saved to Firebase:", data);

          // Create a success notification
          createNotification("URL saved successfully!");

          // Send success message to the popup
          chrome.runtime.sendMessage({
            success: true,
            message: "URL saved successfully!"
          });
          _context6.next = 19;
          break;
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](0);
          console.error("Failed to save URL to Firebase:", _context6.t0);

          // Create an error notification
          createNotification("Failed to save URL: " + _context6.t0.message);

          // Send failure message to the popup
          chrome.runtime.sendMessage({
            success: false,
            message: "Failed to save URL: " + _context6.t0.message
          });
        case 19:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 14]]);
  }));
  return _saveUrlToFirebase.apply(this, arguments);
}
function createNotification(message) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icons8-shrug-lineal-color-32.png",
    title: "Pomf Saver",
    message: message
  }, function (notificationId) {
    setTimeout(function () {
      chrome.notifications.clear(notificationId);
    }, 5000); // Auto close after 5 seconds
  });
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO01BQUE7SUFBQSxHQUFBaUYsUUFBQTtFQUFBLENBRU47RUFBQSxPQUFBRCxrQkFBQSxDQUFBdEUsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFFRCxTQUFTcUYsa0JBQWtCQSxDQUFDNUUsT0FBTyxFQUFFO0VBQ25DSixNQUFNLENBQUNrRixhQUFhLENBQUN2SyxNQUFNLENBQ3pCO0lBQ0VJLElBQUksRUFBRSxPQUFPO0lBQ2JvSyxPQUFPLEVBQUUsd0NBQXdDO0lBQ2pEQyxLQUFLLEVBQUUsWUFBWTtJQUNuQmhGLE9BQU8sRUFBRUE7RUFDWCxDQUFDLEVBQ0QsVUFBVWlGLGNBQWMsRUFBRTtJQUN4QjlDLFVBQVUsQ0FBQyxZQUFNO01BQ2Z2QyxNQUFNLENBQUNrRixhQUFhLENBQUNJLEtBQUssQ0FBQ0QsY0FBYyxDQUFDO0lBQzVDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ1osQ0FDRixDQUFDO0FBQ0gsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbWYtc2F2ZXItZXh0ZW5zaW9uLy4vYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaXNQb3B1cE9wZW4gPSBmYWxzZTtcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcclxuICBpZiAobWVzc2FnZS50eXBlID09PSBcInN0YXJ0LWF1dGhcIikge1xyXG4gICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBzdGFydC1hdXRoIG1lc3NhZ2VcIik7XHJcbiAgICBmaXJlYmFzZUF1dGgoKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsOlwiLCByZXN1bHQpO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXV0aGVudGljYXRpb24gZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiB0cnVlOyAvLyBFbnN1cmUgdGhlIHNlbmRSZXNwb25zZSBpcyBjYWxsZWQgYXN5bmNocm9ub3VzbHlcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEggPSBcIi9vZmZzY3JlZW4uaHRtbFwiO1xyXG5cclxuLy8gQSBnbG9iYWwgcHJvbWlzZSB0byBhdm9pZCBjb25jdXJyZW5jeSBpc3N1ZXNcclxubGV0IGNyZWF0aW5nT2Zmc2NyZWVuRG9jdW1lbnQ7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYXNEb2N1bWVudCgpIHtcclxuICBjb25zdCBtYXRjaGVkQ2xpZW50cyA9IGF3YWl0IGNsaWVudHMubWF0Y2hBbGwoKTtcclxuICBjb25zb2xlLmxvZyhcIk1hdGNoZWQgY2xpZW50czogXCIsIG1hdGNoZWRDbGllbnRzKTtcclxuICByZXR1cm4gbWF0Y2hlZENsaWVudHMuc29tZShcclxuICAgIChjKSA9PiBjLnVybCA9PT0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKVxyXG4gICk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQocGF0aCkge1xyXG4gIGlmICghKGF3YWl0IGhhc0RvY3VtZW50KCkpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRvZXMgbm90IGhhdmUgZG9jXCIpO1xyXG4gICAgaWYgKGNyZWF0aW5nT2Zmc2NyZWVuRG9jdW1lbnQpIHtcclxuICAgICAgYXdhaXQgY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgb2Zmc2NyZWVuIGRvY1wiKTtcclxuICAgICAgY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudCA9IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xyXG4gICAgICAgIHVybDogcGF0aCxcclxuICAgICAgICByZWFzb25zOiBbY2hyb21lLm9mZnNjcmVlbi5SZWFzb24uRE9NX1NDUkFQSU5HXSxcclxuICAgICAgICBqdXN0aWZpY2F0aW9uOiBcImF1dGhlbnRpY2F0aW9uXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCBjcmVhdGluZ09mZnNjcmVlbkRvY3VtZW50O1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNyZWF0ZWQgb2Zmc2NyZWVuIGRvY1wiKTtcclxuICAgICAgY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNsb3NlT2Zmc2NyZWVuRG9jdW1lbnQoKSB7XHJcbiAgaWYgKCEoYXdhaXQgaGFzRG9jdW1lbnQoKSkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTm8gb2Zmc2NyZWVuIGRvYyB0byBjbG9zZVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgYXdhaXQgY2hyb21lLm9mZnNjcmVlbi5jbG9zZURvY3VtZW50KCk7XHJcbiAgY29uc29sZS5sb2coXCJDbG9zZWQgb2Zmc2NyZWVuIGRvY1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXV0aCgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJTZW5kaW5nIG1lc3NhZ2UgdG8gb2Zmc2NyZWVuXCIpO1xyXG4gICAgY29uc3QgYXV0aCA9IGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgdHlwZTogXCJzdGFydC1hdXRoXCIsXHJcbiAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJJbiBnZXRBdXRoIHByb21pc2VcIiwgYXV0aCk7XHJcbiAgICBhdXRoPy5uYW1lICE9PSBcIkZpcmViYXNlRXJyb3JcIiA/IHJlc29sdmUoYXV0aCkgOiByZWplY3QoYXV0aCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpcmViYXNlQXV0aCgpIHtcclxuICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IGF3YWl0IGdldEF1dGgoKVxyXG4gICAgLnRoZW4oKGF1dGgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJVc2VyIEF1dGhlbnRpY2F0ZWRcIiwgYXV0aCk7XHJcbiAgICAgIHJldHVybiBhdXRoO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGlmIChlcnIuY29kZSA9PT0gXCJhdXRoL29wZXJhdGlvbi1ub3QtYWxsb3dlZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIFwiWW91IG11c3QgZW5hYmxlIGFuIE9BdXRoIHByb3ZpZGVyIGluIHRoZSBGaXJlYmFzZVwiICtcclxuICAgICAgICAgICAgXCIgY29uc29sZSBpbiBvcmRlciB0byB1c2Ugc2lnbkluV2l0aFBvcHVwLiBUaGlzIHNhbXBsZVwiICtcclxuICAgICAgICAgICAgXCIgdXNlcyBHb29nbGUgYnkgZGVmYXVsdC5cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuZmluYWxseShjbG9zZU9mZnNjcmVlbkRvY3VtZW50KTtcclxuXHJcbiAgcmV0dXJuIGF1dGg7XHJcbn1cclxuXHJcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIlBvbWYgU2F2ZXIgRXh0ZW5zaW9uIEluc3RhbGxlZFwiKTtcclxufSk7XHJcblxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJNZXNzYWdlIHJlY2VpdmVkOlwiLCBtZXNzYWdlKTtcclxuICBpZiAobWVzc2FnZS51cmwpIHtcclxuICAgIHNhdmVVcmxUb0ZpcmViYXNlKG1lc3NhZ2UudXJsKTtcclxuICB9XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZVVybFRvRmlyZWJhc2UodXJsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2xvY2FsaG9zdDozMDAwL2FwaS9zYXZlLXVybFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1cmwgfSksXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coXCJVUkwgc2F2ZWQgdG8gRmlyZWJhc2U6XCIsIGRhdGEpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIHN1Y2Nlc3Mgbm90aWZpY2F0aW9uXHJcbiAgICBjcmVhdGVOb3RpZmljYXRpb24oXCJVUkwgc2F2ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuXHJcbiAgICAvLyBTZW5kIHN1Y2Nlc3MgbWVzc2FnZSB0byB0aGUgcG9wdXBcclxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgbWVzc2FnZTogXCJVUkwgc2F2ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSBVUkwgdG8gRmlyZWJhc2U6XCIsIGVycm9yKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gZXJyb3Igbm90aWZpY2F0aW9uXHJcbiAgICBjcmVhdGVOb3RpZmljYXRpb24oXCJGYWlsZWQgdG8gc2F2ZSBVUkw6IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcblxyXG4gICAgLy8gU2VuZCBmYWlsdXJlIG1lc3NhZ2UgdG8gdGhlIHBvcHVwXHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBcIkZhaWxlZCB0byBzYXZlIFVSTDogXCIgKyBlcnJvci5tZXNzYWdlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24obWVzc2FnZSkge1xyXG4gIGNocm9tZS5ub3RpZmljYXRpb25zLmNyZWF0ZShcclxuICAgIHtcclxuICAgICAgdHlwZTogXCJiYXNpY1wiLFxyXG4gICAgICBpY29uVXJsOiBcImljb25zL2ljb25zOC1zaHJ1Zy1saW5lYWwtY29sb3ItMzIucG5nXCIsXHJcbiAgICAgIHRpdGxlOiBcIlBvbWYgU2F2ZXJcIixcclxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgIH0sXHJcbiAgICBmdW5jdGlvbiAobm90aWZpY2F0aW9uSWQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2hyb21lLm5vdGlmaWNhdGlvbnMuY2xlYXIobm90aWZpY2F0aW9uSWQpO1xyXG4gICAgICB9LCA1MDAwKTsgLy8gQXV0byBjbG9zZSBhZnRlciA1IHNlY29uZHNcclxuICAgIH1cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiaXNQb3B1cE9wZW4iLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtZXNzYWdlIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImZpcmViYXNlQXV0aCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJlcnJvciIsIk9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIIiwiY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudCIsImhhc0RvY3VtZW50IiwiX2hhc0RvY3VtZW50IiwiX2NhbGxlZTIiLCJtYXRjaGVkQ2xpZW50cyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNsaWVudHMiLCJtYXRjaEFsbCIsInNvbWUiLCJ1cmwiLCJnZXRVUkwiLCJzZXR1cE9mZnNjcmVlbkRvY3VtZW50IiwiX3giLCJfc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCIsIl9jYWxsZWUzIiwicGF0aCIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIm9mZnNjcmVlbiIsImNyZWF0ZURvY3VtZW50IiwicmVhc29ucyIsIlJlYXNvbiIsIkRPTV9TQ1JBUElORyIsImp1c3RpZmljYXRpb24iLCJzZXRUaW1lb3V0IiwiY2xvc2VPZmZzY3JlZW5Eb2N1bWVudCIsIl9jbG9zZU9mZnNjcmVlbkRvY3VtZW50IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJjbG9zZURvY3VtZW50IiwiZ2V0QXV0aCIsIl9yZWYiLCJfY2FsbGVlIiwicmVqZWN0IiwiYXV0aCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJzZW5kTWVzc2FnZSIsInRhcmdldCIsIl94MiIsIl94MyIsIl9maXJlYmFzZUF1dGgiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImVyciIsImNvZGUiLCJvbkluc3RhbGxlZCIsInNhdmVVcmxUb0ZpcmViYXNlIiwiX3g0IiwiX3NhdmVVcmxUb0ZpcmViYXNlIiwiX2NhbGxlZTYiLCJyZXNwb25zZSIsImRhdGEiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJmZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwic3RhdHVzVGV4dCIsImpzb24iLCJjcmVhdGVOb3RpZmljYXRpb24iLCJ0MCIsIm5vdGlmaWNhdGlvbnMiLCJpY29uVXJsIiwidGl0bGUiLCJub3RpZmljYXRpb25JZCIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==