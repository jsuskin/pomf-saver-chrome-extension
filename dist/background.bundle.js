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
  if (message.type === "start-auth" && message.target === "background") {
    console.log("background message listener: ", {
      message: message
    });
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
} // function createNotification(message) {
//   chrome.notifications.create(
//     {
//       type: "basic",
//       iconUrl: "icons/icons8-shrug-lineal-color-32.png",
//       title: "Pomf Saver",
//       message: message,
//     },
//     function (notificationId) {
//       if (chrome.runtime.lastError) {
//         reject(chrome.runtime.lastError);
//       } else {
//         chrome.notifications.clear(notificationId, (wasCleared) => {
//           if (chrome.runtime.lastError) {
//             reject(chrome.runtime.lastError);
//           } else {
//             resolve(wasCleared);
//           }
//         });
//       }
//     }
//   );
// }
function _saveUrlToFirebase() {
  _saveUrlToFirebase = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(url) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return fetch("https://pomf-saver-cerhtunz6-jsuskins-projects.vercel.app/api/save-url", {
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
          // createNotification("URL saved successfully!")
          //   .then(() => console.log("Notification shown and cleared"))
          //   .catch((error) => console.error("Error showing notification:", error));

          // Send success message to the popup
          chrome.runtime.sendMessage({
            success: true,
            message: "URL saved successfully!"
          });
          _context8.next = 17;
          break;
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](0);
          console.error("Failed to save URL to Firebase:", _context8.t0);

          // Create an error notification
          // createNotification("Failed to save URL: " + error.message)
          //   .then(() => console.log("Notification shown and cleared"))
          //   .catch((error) => console.error("Error showing notification:", error));

          // Send failure message to the popup
          chrome.runtime.sendMessage({
            success: false,
            message: "Failed to save URL: " + _context8.t0.message
          });
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 13]]);
  }));
  return _saveUrlToFirebase.apply(this, arguments);
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQzhELFdBQVcsQ0FBQztZQUN6QjFDLE9BQU8sRUFBRSxJQUFJO1lBQ2JQLE9BQU8sRUFBRTtVQUNYLENBQUMsQ0FBQztVQUFDNkUsU0FBQSxDQUFBdEksSUFBQTtVQUFBO1FBQUE7VUFBQXNJLFNBQUEsQ0FBQTNHLElBQUE7VUFBQTJHLFNBQUEsQ0FBQW5CLEVBQUEsR0FBQW1CLFNBQUE7VUFFSHZGLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxpQ0FBaUMsRUFBQXFFLFNBQUEsQ0FBQW5CLEVBQU8sQ0FBQzs7VUFFdkQ7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQXhFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDOEQsV0FBVyxDQUFDO1lBQ3pCMUMsT0FBTyxFQUFFLEtBQUs7WUFDZFAsT0FBTyxFQUFFLHNCQUFzQixHQUFHNkUsU0FBQSxDQUFBbkIsRUFBQSxDQUFNMUQ7VUFDMUMsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUE2RSxTQUFBLENBQUF4RyxJQUFBO01BQUE7SUFBQSxHQUFBb0csUUFBQTtFQUFBLENBRU47RUFBQSxPQUFBRCxrQkFBQSxDQUFBekYsS0FBQSxPQUFBRCxTQUFBO0FBQUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbWYtc2F2ZXItZXh0ZW5zaW9uLy4vYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJQb21mIFNhdmVyIEV4dGVuc2lvbiBJbnN0YWxsZWRcIik7XHJcblxyXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcImlzQXV0aGVudGljYXRlZFwiLCAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzQXV0aGVudGljYXRlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGlzQXV0aGVudGljYXRlZDogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChtZXNzYWdlLnVybCkge1xyXG4gICAgc2F2ZVVybFRvRmlyZWJhc2UobWVzc2FnZS51cmwpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJzdGFydC1hdXRoXCIgJiYgbWVzc2FnZS50YXJnZXQgPT09IFwiYmFja2dyb3VuZFwiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImJhY2tncm91bmQgbWVzc2FnZSBsaXN0ZW5lcjogXCIsIHttZXNzYWdlfSlcclxuICAgIGZpcmViYXNlQXV0aCgpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhlbnRpY2F0aW9uIHN1Y2Nlc3NmdWw6XCIsIHJlc3VsdCk7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaXNBdXRoZW50aWNhdGVkOiB0cnVlIH0pO1xyXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXV0aGVudGljYXRpb24gZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gRW5zdXJlIHRoZSBzZW5kUmVzcG9uc2UgaXMgY2FsbGVkIGFzeW5jaHJvbm91c2x5XHJcbiAgICB9IGVsc2UgaWYobWVzc2FnZS50eXBlID09PSAnc2lnbi1vdXQnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZSB0eXBlIGlzIHNpZ24gb3V0XCIpXHJcbiAgICAgIGZpcmViYXNlU2lnbk91dCgpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTaWduIG91dCBzdWNjZXNzZnVsOlwiLCByZXN1bHQpO1xyXG4gICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSB9KTtcclxuICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2lnbiBvdXQgZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIEVuc3VyZSB0aGUgc2VuZFJlc3BvbnNlIGlzIGNhbGxlZCBhc3luY2hyb25vdXNseVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIID0gXCIvb2Zmc2NyZWVuLmh0bWxcIjtcclxuXHJcbi8vIEEgZ2xvYmFsIHByb21pc2UgdG8gYXZvaWQgY29uY3VycmVuY3kgaXNzdWVzXHJcbmxldCBjcmVhdGluZ09mZnNjcmVlbkRvY3VtZW50O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFzRG9jdW1lbnQoKSB7XHJcbiAgY29uc3QgbWF0Y2hlZENsaWVudHMgPSBhd2FpdCBjbGllbnRzLm1hdGNoQWxsKCk7XHJcbiAgcmV0dXJuIG1hdGNoZWRDbGllbnRzLnNvbWUoXHJcbiAgICAoYykgPT4gYy51cmwgPT09IGNocm9tZS5ydW50aW1lLmdldFVSTChPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSClcclxuICApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KHBhdGgpIHtcclxuICBpZiAoIShhd2FpdCBoYXNEb2N1bWVudCgpKSkge1xyXG4gICAgaWYgKGNyZWF0aW5nT2Zmc2NyZWVuRG9jdW1lbnQpIHtcclxuICAgICAgYXdhaXQgY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNyZWF0ZSBvZmZzY3JlZW4gZG9jXHJcbiAgICAgIGNyZWF0aW5nT2Zmc2NyZWVuRG9jdW1lbnQgPSBhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmNyZWF0ZURvY3VtZW50KHtcclxuICAgICAgICB1cmw6IHBhdGgsXHJcbiAgICAgICAgcmVhc29uczogW2Nocm9tZS5vZmZzY3JlZW4uUmVhc29uLkRPTV9TQ1JBUElOR10sXHJcbiAgICAgICAganVzdGlmaWNhdGlvbjogXCJhdXRoZW50aWNhdGlvblwiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGNsZWFudXAgb2Zmc2NyZWVuIGRvY1xyXG4gICAgICBjcmVhdGluZ09mZnNjcmVlbkRvY3VtZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2xvc2VPZmZzY3JlZW5Eb2N1bWVudCgpIHtcclxuICBpZiAoIShhd2FpdCBoYXNEb2N1bWVudCgpKSkgcmV0dXJuO1xyXG4gIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY2xvc2VEb2N1bWVudCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBdXRoKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBhdXRoID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiBcInN0YXJ0LWF1dGhcIixcclxuICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxyXG4gICAgfSk7XHJcbiAgICBhdXRoPy5uYW1lICE9PSBcIkZpcmViYXNlRXJyb3JcIiA/IHJlc29sdmUoYXV0aCkgOiByZWplY3QoYXV0aCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25PdXRVc2VyKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzaWduT3V0UmVzdWx0ID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6IFwic2lnbi1vdXRcIixcclxuICAgICAgICB0YXJnZXQ6IFwib2Zmc2NyZWVuXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzaWduT3V0UmVzdWx0Py5zdWNjZXNzID8gcmVzb2x2ZShzaWduT3V0UmVzdWx0KSA6IHJlamVjdChzaWduT3V0UmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpcmViYXNlU2lnbk91dCgpIHtcclxuICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbk91dFVzZXIoKVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgU2lnbmVkIE91dFwiLCByZXN1bHQpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIGVycjtcclxuICAgIH0pXHJcbiAgICAuZmluYWxseShjbG9zZU9mZnNjcmVlbkRvY3VtZW50KTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmlyZWJhc2VBdXRoKCkge1xyXG4gIGF3YWl0IHNldHVwT2Zmc2NyZWVuRG9jdW1lbnQoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpO1xyXG5cclxuICBjb25zdCBhdXRoID0gYXdhaXQgZ2V0QXV0aCgpXHJcbiAgICAudGhlbigoYXV0aCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgQXV0aGVudGljYXRlZFwiLCBhdXRoKTtcclxuICAgICAgcmV0dXJuIGF1dGg7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgaWYgKGVyci5jb2RlID09PSBcImF1dGgvb3BlcmF0aW9uLW5vdC1hbGxvd2VkXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgXCJZb3UgbXVzdCBlbmFibGUgYW4gT0F1dGggcHJvdmlkZXIgaW4gdGhlIEZpcmViYXNlXCIgK1xyXG4gICAgICAgICAgICBcIiBjb25zb2xlIGluIG9yZGVyIHRvIHVzZSBzaWduSW5XaXRoUG9wdXAuIFRoaXMgc2FtcGxlXCIgK1xyXG4gICAgICAgICAgICBcIiB1c2VzIEdvb2dsZSBieSBkZWZhdWx0LlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5maW5hbGx5KGNsb3NlT2Zmc2NyZWVuRG9jdW1lbnQpO1xyXG5cclxuICByZXR1cm4gYXV0aDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZVVybFRvRmlyZWJhc2UodXJsKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2xvY2FsaG9zdDozMDAwL2FwaS9zYXZlLXVybFwiLCB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vcG9tZi1zYXZlci1jZXJodHVuejYtanN1c2tpbnMtcHJvamVjdHMudmVyY2VsLmFwcC9hcGkvc2F2ZS11cmxcIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVybCB9KSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coXCJVUkwgc2F2ZWQgdG8gRmlyZWJhc2U6XCIsIGRhdGEpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIHN1Y2Nlc3Mgbm90aWZpY2F0aW9uXHJcbiAgICAvLyBjcmVhdGVOb3RpZmljYXRpb24oXCJVUkwgc2F2ZWQgc3VjY2Vzc2Z1bGx5IVwiKVxyXG4gICAgLy8gICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzaG93biBhbmQgY2xlYXJlZFwiKSlcclxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIHNob3dpbmcgbm90aWZpY2F0aW9uOlwiLCBlcnJvcikpO1xyXG5cclxuICAgIC8vIFNlbmQgc3VjY2VzcyBtZXNzYWdlIHRvIHRoZSBwb3B1cFxyXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiBcIlVSTCBzYXZlZCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzYXZlIFVSTCB0byBGaXJlYmFzZTpcIiwgZXJyb3IpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhbiBlcnJvciBub3RpZmljYXRpb25cclxuICAgIC8vIGNyZWF0ZU5vdGlmaWNhdGlvbihcIkZhaWxlZCB0byBzYXZlIFVSTDogXCIgKyBlcnJvci5tZXNzYWdlKVxyXG4gICAgLy8gICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzaG93biBhbmQgY2xlYXJlZFwiKSlcclxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIHNob3dpbmcgbm90aWZpY2F0aW9uOlwiLCBlcnJvcikpO1xyXG5cclxuICAgIC8vIFNlbmQgZmFpbHVyZSBtZXNzYWdlIHRvIHRoZSBwb3B1cFxyXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogXCJGYWlsZWQgdG8gc2F2ZSBVUkw6IFwiICsgZXJyb3IubWVzc2FnZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKG1lc3NhZ2UpIHtcclxuLy8gICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUoXHJcbi8vICAgICB7XHJcbi8vICAgICAgIHR5cGU6IFwiYmFzaWNcIixcclxuLy8gICAgICAgaWNvblVybDogXCJpY29ucy9pY29uczgtc2hydWctbGluZWFsLWNvbG9yLTMyLnBuZ1wiLFxyXG4vLyAgICAgICB0aXRsZTogXCJQb21mIFNhdmVyXCIsXHJcbi8vICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZnVuY3Rpb24gKG5vdGlmaWNhdGlvbklkKSB7XHJcbi8vICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcclxuLy8gICAgICAgICByZWplY3QoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jbGVhcihub3RpZmljYXRpb25JZCwgKHdhc0NsZWFyZWQpID0+IHtcclxuLy8gICAgICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcclxuLy8gICAgICAgICAgICAgcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XHJcbi8vICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXNvbHZlKHdhc0NsZWFyZWQpO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgKTtcclxuLy8gfVxyXG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImNocm9tZSIsInJ1bnRpbWUiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsInJlc3VsdCIsImlzQXV0aGVudGljYXRlZCIsInVuZGVmaW5lZCIsInNldCIsIm9uTWVzc2FnZSIsIm1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ1cmwiLCJzYXZlVXJsVG9GaXJlYmFzZSIsInRhcmdldCIsImZpcmViYXNlQXV0aCIsInN1Y2Nlc3MiLCJlcnJvciIsImZpcmViYXNlU2lnbk91dCIsIk9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIIiwiY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudCIsImhhc0RvY3VtZW50IiwiX2hhc0RvY3VtZW50IiwiX2NhbGxlZTMiLCJtYXRjaGVkQ2xpZW50cyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImNsaWVudHMiLCJtYXRjaEFsbCIsInNvbWUiLCJnZXRVUkwiLCJzZXR1cE9mZnNjcmVlbkRvY3VtZW50IiwiX3giLCJfc2V0dXBPZmZzY3JlZW5Eb2N1bWVudCIsIl9jYWxsZWU0IiwicGF0aCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIm9mZnNjcmVlbiIsImNyZWF0ZURvY3VtZW50IiwicmVhc29ucyIsIlJlYXNvbiIsIkRPTV9TQ1JBUElORyIsImp1c3RpZmljYXRpb24iLCJzZXRUaW1lb3V0IiwiY2xvc2VPZmZzY3JlZW5Eb2N1bWVudCIsIl9jbG9zZU9mZnNjcmVlbkRvY3VtZW50IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJjbG9zZURvY3VtZW50IiwiZ2V0QXV0aCIsIl9yZWYiLCJfY2FsbGVlIiwicmVqZWN0IiwiYXV0aCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJzZW5kTWVzc2FnZSIsIl94MiIsIl94MyIsInNpZ25PdXRVc2VyIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNpZ25PdXRSZXN1bHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ0MCIsIl94NCIsIl94NSIsIl9maXJlYmFzZVNpZ25PdXQiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsImVyciIsIl9maXJlYmFzZUF1dGgiLCJfY2FsbGVlNyIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsImNvZGUiLCJfeDYiLCJfc2F2ZVVybFRvRmlyZWJhc2UiLCJfY2FsbGVlOCIsInJlc3BvbnNlIiwiZGF0YSIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsImZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJzdGF0dXNUZXh0IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=