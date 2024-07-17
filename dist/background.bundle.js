/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
chrome.runtime.onInstalled.addListener(function () {
  console.log("Pomf Saver Extension Installed");
  chrome.storage.local.get("isAuthenticated", function (result) {
    if (result.isAuthenticated === undefined) {
      chrome.storage.local.set({
        isAuthenticated: false
      });
    }
  });
});
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.url) {
    saveUrlToFirebase(message.url);
  }
  if (message.type === "start-auth") {
    firebaseAuth().then(function (result) {
      console.log("Authentication successful:", result);
      chrome.storage.local.set({
        isAuthenticated: true
      });
      sendResponse({
        success: true
      });
    })["catch"](function (error) {
      console.error("Authentication failed:", error);
      chrome.storage.local.set({
        isAuthenticated: false
      });
      sendResponse({
        success: false,
        error: error.message
      });
    });
    return true; // Ensure the sendResponse is called asynchronously
  } else if (message.type === 'sign-out') {
    console.log("message type is sign out");
    firebaseSignOut().then(function (result) {
      console.log("Sign out successful:", result);
      chrome.storage.local.set({
        isAuthenticated: false
      });
      sendResponse({
        success: true
      });
    })["catch"](function (error) {
      console.error("Sign out failed:", error);
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
  _hasDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var matchedClients;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return clients.matchAll();
        case 2:
          matchedClients = _context3.sent;
          return _context3.abrupt("return", matchedClients.some(function (c) {
            return c.url === chrome.runtime.getURL(OFFSCREEN_DOCUMENT_PATH);
          }));
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _hasDocument.apply(this, arguments);
}
function setupOffscreenDocument(_x) {
  return _setupOffscreenDocument.apply(this, arguments);
}
function _setupOffscreenDocument() {
  _setupOffscreenDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(path) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return hasDocument();
        case 2:
          if (_context4.sent) {
            _context4.next = 12;
            break;
          }
          if (!creatingOffscreenDocument) {
            _context4.next = 8;
            break;
          }
          _context4.next = 6;
          return creatingOffscreenDocument;
        case 6:
          _context4.next = 12;
          break;
        case 8:
          _context4.next = 10;
          return chrome.offscreen.createDocument({
            url: path,
            reasons: [chrome.offscreen.Reason.DOM_SCRAPING],
            justification: "authentication"
          });
        case 10:
          creatingOffscreenDocument = _context4.sent;
          // cleanup offscreen doc
          creatingOffscreenDocument = null;
        case 12:
          _context4.next = 14;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 1000);
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _setupOffscreenDocument.apply(this, arguments);
}
function closeOffscreenDocument() {
  return _closeOffscreenDocument.apply(this, arguments);
}
function _closeOffscreenDocument() {
  _closeOffscreenDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return hasDocument();
        case 2:
          if (_context5.sent) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return");
        case 4:
          _context5.next = 6;
          return chrome.offscreen.closeDocument();
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
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
            _context.next = 2;
            return chrome.runtime.sendMessage({
              type: "start-auth",
              target: "offscreen"
            });
          case 2:
            auth = _context.sent;
            (auth === null || auth === void 0 ? void 0 : auth.name) !== "FirebaseError" ? resolve(auth) : reject(auth);
          case 4:
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
function signOutUser() {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var signOutResult;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return chrome.runtime.sendMessage({
              type: "sign-out",
              target: "offscreen"
            });
          case 3:
            signOutResult = _context2.sent;
            signOutResult !== null && signOutResult !== void 0 && signOutResult.success ? resolve(signOutResult) : reject(signOutResult);
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }());
}
function firebaseSignOut() {
  return _firebaseSignOut.apply(this, arguments);
}
function _firebaseSignOut() {
  _firebaseSignOut = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return setupOffscreenDocument(OFFSCREEN_DOCUMENT_PATH);
        case 2:
          _context6.next = 4;
          return signOutUser().then(function (result) {
            console.log("User Signed Out", result);
            return result;
          })["catch"](function (err) {
            console.error(err);
            return err;
          })["finally"](closeOffscreenDocument);
        case 4:
          result = _context6.sent;
          return _context6.abrupt("return", result);
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _firebaseSignOut.apply(this, arguments);
}
function firebaseAuth() {
  return _firebaseAuth.apply(this, arguments);
}
function _firebaseAuth() {
  _firebaseAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var auth;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return setupOffscreenDocument(OFFSCREEN_DOCUMENT_PATH);
        case 2:
          _context7.next = 4;
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
          auth = _context7.sent;
          return _context7.abrupt("return", auth);
        case 6:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _firebaseAuth.apply(this, arguments);
}
function saveUrlToFirebase(_x6) {
  return _saveUrlToFirebase.apply(this, arguments);
}
function _saveUrlToFirebase() {
  _saveUrlToFirebase = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(url) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
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
          response = _context8.sent;
          if (response.ok) {
            _context8.next = 6;
            break;
          }
          throw new Error("Network response was not ok " + response.statusText);
        case 6:
          _context8.next = 8;
          return response.json();
        case 8:
          data = _context8.sent;
          console.log("URL saved to Firebase:", data);

          // Create a success notification
          createNotification("URL saved successfully!");

          // Send success message to the popup
          chrome.runtime.sendMessage({
            success: true,
            message: "URL saved successfully!"
          });
          _context8.next = 19;
          break;
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          console.error("Failed to save URL to Firebase:", _context8.t0);

          // Create an error notification
          createNotification("Failed to save URL: " + _context8.t0.message);

          // Send failure message to the popup
          chrome.runtime.sendMessage({
            success: false,
            message: "Failed to save URL: " + _context8.t0.message
          });
        case 19:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 14]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0UsU0FBQSxDQUFBbkIsRUFBTyxDQUFDOztVQUV2RDtVQUNBNEIsa0JBQWtCLENBQUMsc0JBQXNCLEdBQUdULFNBQUEsQ0FBQW5CLEVBQUEsQ0FBTTFELE9BQU8sQ0FBQzs7VUFFMUQ7VUFDQWQsTUFBTSxDQUFDQyxPQUFPLENBQUM2RCxXQUFXLENBQUM7WUFDekIxQyxPQUFPLEVBQUUsS0FBSztZQUNkTixPQUFPLEVBQUUsc0JBQXNCLEdBQUc2RSxTQUFBLENBQUFuQixFQUFBLENBQU0xRDtVQUMxQyxDQUFDLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQTZFLFNBQUEsQ0FBQXhHLElBQUE7TUFBQTtJQUFBLEdBQUFvRyxRQUFBO0VBQUEsQ0FFTjtFQUFBLE9BQUFELGtCQUFBLENBQUF6RixLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUVELFNBQVN3RyxrQkFBa0JBLENBQUN0RixPQUFPLEVBQUU7RUFDbkNkLE1BQU0sQ0FBQ3FHLGFBQWEsQ0FBQ3pMLE1BQU0sQ0FDekI7SUFDRUksSUFBSSxFQUFFLE9BQU87SUFDYnNMLE9BQU8sRUFBRSx3Q0FBd0M7SUFDakRDLEtBQUssRUFBRSxZQUFZO0lBQ25CekYsT0FBTyxFQUFFQTtFQUNYLENBQUMsRUFDRCxVQUFVMEYsY0FBYyxFQUFFO0lBQ3hCeEQsVUFBVSxDQUFDLFlBQU07TUFDZmhELE1BQU0sQ0FBQ3FHLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDRCxjQUFjLENBQUM7SUFDNUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDWixDQUNGLENBQUM7QUFDSCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9tZi1zYXZlci1leHRlbnNpb24vLi9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIlBvbWYgU2F2ZXIgRXh0ZW5zaW9uIEluc3RhbGxlZFwiKTtcclxuXHJcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwiaXNBdXRoZW50aWNhdGVkXCIsIChyZXN1bHQpID0+IHtcclxuICAgIGlmIChyZXN1bHQuaXNBdXRoZW50aWNhdGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2UudXJsKSB7XHJcbiAgICBzYXZlVXJsVG9GaXJlYmFzZShtZXNzYWdlLnVybCk7XHJcbiAgfVxyXG5cclxuICBpZiAobWVzc2FnZS50eXBlID09PSBcInN0YXJ0LWF1dGhcIikge1xyXG4gICAgZmlyZWJhc2VBdXRoKClcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aGVudGljYXRpb24gc3VjY2Vzc2Z1bDpcIiwgcmVzdWx0KTtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRoZW50aWNhdGlvbiBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlOyAvLyBFbnN1cmUgdGhlIHNlbmRSZXNwb25zZSBpcyBjYWxsZWQgYXN5bmNocm9ub3VzbHlcclxuICAgIH0gZWxzZSBpZihtZXNzYWdlLnR5cGUgPT09ICdzaWduLW91dCcpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlIHR5cGUgaXMgc2lnbiBvdXRcIilcclxuICAgICAgZmlyZWJhc2VTaWduT3V0KClcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ24gb3V0IHN1Y2Nlc3NmdWw6XCIsIHJlc3VsdCk7XHJcbiAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTaWduIG91dCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gRW5zdXJlIHRoZSBzZW5kUmVzcG9uc2UgaXMgY2FsbGVkIGFzeW5jaHJvbm91c2x5XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEggPSBcIi9vZmZzY3JlZW4uaHRtbFwiO1xyXG5cclxuLy8gQSBnbG9iYWwgcHJvbWlzZSB0byBhdm9pZCBjb25jdXJyZW5jeSBpc3N1ZXNcclxubGV0IGNyZWF0aW5nT2Zmc2NyZWVuRG9jdW1lbnQ7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYXNEb2N1bWVudCgpIHtcclxuICBjb25zdCBtYXRjaGVkQ2xpZW50cyA9IGF3YWl0IGNsaWVudHMubWF0Y2hBbGwoKTtcclxuICByZXR1cm4gbWF0Y2hlZENsaWVudHMuc29tZShcclxuICAgIChjKSA9PiBjLnVybCA9PT0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKVxyXG4gICk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQocGF0aCkge1xyXG4gIGlmICghKGF3YWl0IGhhc0RvY3VtZW50KCkpKSB7XHJcbiAgICBpZiAoY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudCkge1xyXG4gICAgICBhd2FpdCBjcmVhdGluZ09mZnNjcmVlbkRvY3VtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY3JlYXRlIG9mZnNjcmVlbiBkb2NcclxuICAgICAgY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudCA9IGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xyXG4gICAgICAgIHVybDogcGF0aCxcclxuICAgICAgICByZWFzb25zOiBbY2hyb21lLm9mZnNjcmVlbi5SZWFzb24uRE9NX1NDUkFQSU5HXSxcclxuICAgICAgICBqdXN0aWZpY2F0aW9uOiBcImF1dGhlbnRpY2F0aW9uXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gY2xlYW51cCBvZmZzY3JlZW4gZG9jXHJcbiAgICAgIGNyZWF0aW5nT2Zmc2NyZWVuRG9jdW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjbG9zZU9mZnNjcmVlbkRvY3VtZW50KCkge1xyXG4gIGlmICghKGF3YWl0IGhhc0RvY3VtZW50KCkpKSByZXR1cm47XHJcbiAgYXdhaXQgY2hyb21lLm9mZnNjcmVlbi5jbG9zZURvY3VtZW50KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEF1dGgoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGF1dGggPSBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IFwic3RhcnQtYXV0aFwiLFxyXG4gICAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXHJcbiAgICB9KTtcclxuICAgIGF1dGg/Lm5hbWUgIT09IFwiRmlyZWJhc2VFcnJvclwiID8gcmVzb2x2ZShhdXRoKSA6IHJlamVjdChhdXRoKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2lnbk91dFVzZXIoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNpZ25PdXRSZXN1bHQgPSBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgdHlwZTogXCJzaWduLW91dFwiLFxyXG4gICAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcclxuICAgICAgfSk7XHJcbiAgICAgIHNpZ25PdXRSZXN1bHQ/LnN1Y2Nlc3MgPyByZXNvbHZlKHNpZ25PdXRSZXN1bHQpIDogcmVqZWN0KHNpZ25PdXRSZXN1bHQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmlyZWJhc2VTaWduT3V0KCkge1xyXG4gIGF3YWl0IHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpO1xyXG5cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduT3V0VXNlcigpXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBTaWduZWQgT3V0XCIsIHJlc3VsdCk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICByZXR1cm4gZXJyO1xyXG4gICAgfSlcclxuICAgIC5maW5hbGx5KGNsb3NlT2Zmc2NyZWVuRG9jdW1lbnQpO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmaXJlYmFzZUF1dGgoKSB7XHJcbiAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudChPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCk7XHJcblxyXG4gIGNvbnN0IGF1dGggPSBhd2FpdCBnZXRBdXRoKClcclxuICAgIC50aGVuKChhdXRoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBBdXRoZW50aWNhdGVkXCIsIGF1dGgpO1xyXG4gICAgICByZXR1cm4gYXV0aDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyLmNvZGUgPT09IFwiYXV0aC9vcGVyYXRpb24tbm90LWFsbG93ZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICBcIllvdSBtdXN0IGVuYWJsZSBhbiBPQXV0aCBwcm92aWRlciBpbiB0aGUgRmlyZWJhc2VcIiArXHJcbiAgICAgICAgICAgIFwiIGNvbnNvbGUgaW4gb3JkZXIgdG8gdXNlIHNpZ25JbldpdGhQb3B1cC4gVGhpcyBzYW1wbGVcIiArXHJcbiAgICAgICAgICAgIFwiIHVzZXMgR29vZ2xlIGJ5IGRlZmF1bHQuXCJcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmZpbmFsbHkoY2xvc2VPZmZzY3JlZW5Eb2N1bWVudCk7XHJcblxyXG4gIHJldHVybiBhdXRoO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlVXJsVG9GaXJlYmFzZSh1cmwpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NhdmUtdXJsXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVybCB9KSxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2sgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlVSTCBzYXZlZCB0byBGaXJlYmFzZTpcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgc3VjY2VzcyBub3RpZmljYXRpb25cclxuICAgIGNyZWF0ZU5vdGlmaWNhdGlvbihcIlVSTCBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpO1xyXG5cclxuICAgIC8vIFNlbmQgc3VjY2VzcyBtZXNzYWdlIHRvIHRoZSBwb3B1cFxyXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiBcIlVSTCBzYXZlZCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzYXZlIFVSTCB0byBGaXJlYmFzZTpcIiwgZXJyb3IpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhbiBlcnJvciBub3RpZmljYXRpb25cclxuICAgIGNyZWF0ZU5vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBzYXZlIFVSTDogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuXHJcbiAgICAvLyBTZW5kIGZhaWx1cmUgbWVzc2FnZSB0byB0aGUgcG9wdXBcclxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIHNhdmUgVVJMOiBcIiArIGVycm9yLm1lc3NhZ2UsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbihtZXNzYWdlKSB7XHJcbiAgY2hyb21lLm5vdGlmaWNhdGlvbnMuY3JlYXRlKFxyXG4gICAge1xyXG4gICAgICB0eXBlOiBcImJhc2ljXCIsXHJcbiAgICAgIGljb25Vcmw6IFwiaWNvbnMvaWNvbnM4LXNocnVnLWxpbmVhbC1jb2xvci0zMi5wbmdcIixcclxuICAgICAgdGl0bGU6IFwiUG9tZiBTYXZlclwiLFxyXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uIChub3RpZmljYXRpb25JZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jbGVhcihub3RpZmljYXRpb25JZCk7XHJcbiAgICAgIH0sIDUwMDApOyAvLyBBdXRvIGNsb3NlIGFmdGVyIDUgc2Vjb25kc1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJyZXN1bHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1bmRlZmluZWQiLCJzZXQiLCJvbk1lc3NhZ2UiLCJtZXNzYWdlIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwidXJsIiwic2F2ZVVybFRvRmlyZWJhc2UiLCJmaXJlYmFzZUF1dGgiLCJzdWNjZXNzIiwiZXJyb3IiLCJmaXJlYmFzZVNpZ25PdXQiLCJPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCIsImNyZWF0aW5nT2Zmc2NyZWVuRG9jdW1lbnQiLCJoYXNEb2N1bWVudCIsIl9oYXNEb2N1bWVudCIsIl9jYWxsZWUzIiwibWF0Y2hlZENsaWVudHMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJjbGllbnRzIiwibWF0Y2hBbGwiLCJzb21lIiwiZ2V0VVJMIiwic2V0dXBPZmZzY3JlZW5Eb2N1bWVudCIsIl94IiwiX3NldHVwT2Zmc2NyZWVuRG9jdW1lbnQiLCJfY2FsbGVlNCIsInBhdGgiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJvZmZzY3JlZW4iLCJjcmVhdGVEb2N1bWVudCIsInJlYXNvbnMiLCJSZWFzb24iLCJET01fU0NSQVBJTkciLCJqdXN0aWZpY2F0aW9uIiwic2V0VGltZW91dCIsImNsb3NlT2Zmc2NyZWVuRG9jdW1lbnQiLCJfY2xvc2VPZmZzY3JlZW5Eb2N1bWVudCIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiY2xvc2VEb2N1bWVudCIsImdldEF1dGgiLCJfcmVmIiwiX2NhbGxlZSIsInJlamVjdCIsImF1dGgiLCJfY2FsbGVlJCIsIl9jb250ZXh0Iiwic2VuZE1lc3NhZ2UiLCJ0YXJnZXQiLCJfeDIiLCJfeDMiLCJzaWduT3V0VXNlciIsIl9yZWYyIiwiX2NhbGxlZTIiLCJzaWduT3V0UmVzdWx0IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwidDAiLCJfeDQiLCJfeDUiLCJfZmlyZWJhc2VTaWduT3V0IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJlcnIiLCJfZmlyZWJhc2VBdXRoIiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJjb2RlIiwiX3g2IiwiX3NhdmVVcmxUb0ZpcmViYXNlIiwiX2NhbGxlZTgiLCJyZXNwb25zZSIsImRhdGEiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJmZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwic3RhdHVzVGV4dCIsImpzb24iLCJjcmVhdGVOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25zIiwiaWNvblVybCIsInRpdGxlIiwibm90aWZpY2F0aW9uSWQiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=