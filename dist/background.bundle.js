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
    console.log("url success message received", {
      url: message.url
    });
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
          console.log("in saveUrlToFirebase try block", {
            url: url
          });
          // const response = await fetch("https://localhost:3000/api/save-url", {
          _context8.next = 4;
          return fetch("https://pomf-saver-cerhtunz6-jsuskins-projects.vercel.app/api/save-url", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              url: url
            })
          });
        case 4:
          response = _context8.sent;
          if (response.ok) {
            _context8.next = 7;
            break;
          }
          throw new Error("Network response was not ok " + response.statusText);
        case 7:
          _context8.next = 9;
          return response.json();
        case 9:
          data = _context8.sent;
          console.log("background.js response object: ", {
            response: response
          });
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
          _context8.next = 19;
          break;
        case 15:
          _context8.prev = 15;
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
        case 19:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 15]]);
  }));
  return _saveUrlToFirebase.apply(this, arguments);
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDVyxJQUFJLENBQUMsQ0FBQztRQUFBO1VBQTVCVixJQUFJLEdBQUFFLFNBQUEsQ0FBQTVJLElBQUE7VUFDVnFELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlDQUFpQyxFQUFFO1lBQUNtRixRQUFRLEVBQVJBO1VBQVEsQ0FBQyxDQUFDO1VBQzFEcEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUVvRixJQUFJLENBQUM7O1VBRTNDO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0F6RixNQUFNLENBQUNDLE9BQU8sQ0FBQzhELFdBQVcsQ0FBQztZQUN6QjFDLE9BQU8sRUFBRSxJQUFJO1lBQ2JQLE9BQU8sRUFBRTtVQUNYLENBQUMsQ0FBQztVQUFDNkUsU0FBQSxDQUFBdEksSUFBQTtVQUFBO1FBQUE7VUFBQXNJLFNBQUEsQ0FBQTNHLElBQUE7VUFBQTJHLFNBQUEsQ0FBQW5CLEVBQUEsR0FBQW1CLFNBQUE7VUFFSHZGLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQyxpQ0FBaUMsRUFBQXFFLFNBQUEsQ0FBQW5CLEVBQU8sQ0FBQzs7VUFFdkQ7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQXhFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDOEQsV0FBVyxDQUFDO1lBQ3pCMUMsT0FBTyxFQUFFLEtBQUs7WUFDZFAsT0FBTyxFQUFFLHNCQUFzQixHQUFHNkUsU0FBQSxDQUFBbkIsRUFBQSxDQUFNMUQ7VUFDMUMsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUE2RSxTQUFBLENBQUF4RyxJQUFBO01BQUE7SUFBQSxHQUFBb0csUUFBQTtFQUFBLENBRU47RUFBQSxPQUFBRCxrQkFBQSxDQUFBekYsS0FBQSxPQUFBRCxTQUFBO0FBQUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbWYtc2F2ZXItZXh0ZW5zaW9uLy4vYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJQb21mIFNhdmVyIEV4dGVuc2lvbiBJbnN0YWxsZWRcIik7XHJcblxyXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcImlzQXV0aGVudGljYXRlZFwiLCAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzQXV0aGVudGljYXRlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGlzQXV0aGVudGljYXRlZDogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChtZXNzYWdlLnVybCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ1cmwgc3VjY2VzcyBtZXNzYWdlIHJlY2VpdmVkXCIsIHt1cmw6IG1lc3NhZ2UudXJsfSlcclxuICAgIHNhdmVVcmxUb0ZpcmViYXNlKG1lc3NhZ2UudXJsKTtcclxuICB9XHJcblxyXG4gIGlmIChtZXNzYWdlLnR5cGUgPT09IFwic3RhcnQtYXV0aFwiICYmIG1lc3NhZ2UudGFyZ2V0ID09PSBcImJhY2tncm91bmRcIikge1xyXG4gICAgY29uc29sZS5sb2coXCJiYWNrZ3JvdW5kIG1lc3NhZ2UgbGlzdGVuZXI6IFwiLCB7bWVzc2FnZX0pXHJcbiAgICBmaXJlYmFzZUF1dGgoKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBdXRoZW50aWNhdGlvbiBzdWNjZXNzZnVsOlwiLCByZXN1bHQpO1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGlzQXV0aGVudGljYXRlZDogdHJ1ZSB9KTtcclxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkF1dGhlbnRpY2F0aW9uIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGlzQXV0aGVudGljYXRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7IC8vIEVuc3VyZSB0aGUgc2VuZFJlc3BvbnNlIGlzIGNhbGxlZCBhc3luY2hyb25vdXNseVxyXG4gICAgfSBlbHNlIGlmKG1lc3NhZ2UudHlwZSA9PT0gJ3NpZ24tb3V0Jykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2UgdHlwZSBpcyBzaWduIG91dFwiKVxyXG4gICAgICBmaXJlYmFzZVNpZ25PdXQoKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbiBvdXQgc3VjY2Vzc2Z1bDpcIiwgcmVzdWx0KTtcclxuICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGlzQXV0aGVudGljYXRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlNpZ24gb3V0IGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBFbnN1cmUgdGhlIHNlbmRSZXNwb25zZSBpcyBjYWxsZWQgYXN5bmNocm9ub3VzbHlcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCA9IFwiL29mZnNjcmVlbi5odG1sXCI7XHJcblxyXG4vLyBBIGdsb2JhbCBwcm9taXNlIHRvIGF2b2lkIGNvbmN1cnJlbmN5IGlzc3Vlc1xyXG5sZXQgY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhc0RvY3VtZW50KCkge1xyXG4gIGNvbnN0IG1hdGNoZWRDbGllbnRzID0gYXdhaXQgY2xpZW50cy5tYXRjaEFsbCgpO1xyXG4gIHJldHVybiBtYXRjaGVkQ2xpZW50cy5zb21lKFxyXG4gICAgKGMpID0+IGMudXJsID09PSBjaHJvbWUucnVudGltZS5nZXRVUkwoT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgpXHJcbiAgKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0dXBPZmZzY3JlZW5Eb2N1bWVudChwYXRoKSB7XHJcbiAgaWYgKCEoYXdhaXQgaGFzRG9jdW1lbnQoKSkpIHtcclxuICAgIGlmIChjcmVhdGluZ09mZnNjcmVlbkRvY3VtZW50KSB7XHJcbiAgICAgIGF3YWl0IGNyZWF0aW5nT2Zmc2NyZWVuRG9jdW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjcmVhdGUgb2Zmc2NyZWVuIGRvY1xyXG4gICAgICBjcmVhdGluZ09mZnNjcmVlbkRvY3VtZW50ID0gYXdhaXQgY2hyb21lLm9mZnNjcmVlbi5jcmVhdGVEb2N1bWVudCh7XHJcbiAgICAgICAgdXJsOiBwYXRoLFxyXG4gICAgICAgIHJlYXNvbnM6IFtjaHJvbWUub2Zmc2NyZWVuLlJlYXNvbi5ET01fU0NSQVBJTkddLFxyXG4gICAgICAgIGp1c3RpZmljYXRpb246IFwiYXV0aGVudGljYXRpb25cIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBjbGVhbnVwIG9mZnNjcmVlbiBkb2NcclxuICAgICAgY3JlYXRpbmdPZmZzY3JlZW5Eb2N1bWVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNsb3NlT2Zmc2NyZWVuRG9jdW1lbnQoKSB7XHJcbiAgaWYgKCEoYXdhaXQgaGFzRG9jdW1lbnQoKSkpIHJldHVybjtcclxuICBhd2FpdCBjaHJvbWUub2Zmc2NyZWVuLmNsb3NlRG9jdW1lbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXV0aCgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgYXV0aCA9IGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgdHlwZTogXCJzdGFydC1hdXRoXCIsXHJcbiAgICAgIHRhcmdldDogXCJvZmZzY3JlZW5cIixcclxuICAgIH0pO1xyXG4gICAgYXV0aD8ubmFtZSAhPT0gXCJGaXJlYmFzZUVycm9yXCIgPyByZXNvbHZlKGF1dGgpIDogcmVqZWN0KGF1dGgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduT3V0VXNlcigpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2lnbk91dFJlc3VsdCA9IGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiBcInNpZ24tb3V0XCIsXHJcbiAgICAgICAgdGFyZ2V0OiBcIm9mZnNjcmVlblwiLFxyXG4gICAgICB9KTtcclxuICAgICAgc2lnbk91dFJlc3VsdD8uc3VjY2VzcyA/IHJlc29sdmUoc2lnbk91dFJlc3VsdCkgOiByZWplY3Qoc2lnbk91dFJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmaXJlYmFzZVNpZ25PdXQoKSB7XHJcbiAgYXdhaXQgc2V0dXBPZmZzY3JlZW5Eb2N1bWVudChPRkZTQ1JFRU5fRE9DVU1FTlRfUEFUSCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25PdXRVc2VyKClcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJVc2VyIFNpZ25lZCBPdXRcIiwgcmVzdWx0KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9KVxyXG4gICAgLmZpbmFsbHkoY2xvc2VPZmZzY3JlZW5Eb2N1bWVudCk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpcmViYXNlQXV0aCgpIHtcclxuICBhd2FpdCBzZXR1cE9mZnNjcmVlbkRvY3VtZW50KE9GRlNDUkVFTl9ET0NVTUVOVF9QQVRIKTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IGF3YWl0IGdldEF1dGgoKVxyXG4gICAgLnRoZW4oKGF1dGgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJVc2VyIEF1dGhlbnRpY2F0ZWRcIiwgYXV0aCk7XHJcbiAgICAgIHJldHVybiBhdXRoO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGlmIChlcnIuY29kZSA9PT0gXCJhdXRoL29wZXJhdGlvbi1ub3QtYWxsb3dlZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIFwiWW91IG11c3QgZW5hYmxlIGFuIE9BdXRoIHByb3ZpZGVyIGluIHRoZSBGaXJlYmFzZVwiICtcclxuICAgICAgICAgICAgXCIgY29uc29sZSBpbiBvcmRlciB0byB1c2Ugc2lnbkluV2l0aFBvcHVwLiBUaGlzIHNhbXBsZVwiICtcclxuICAgICAgICAgICAgXCIgdXNlcyBHb29nbGUgYnkgZGVmYXVsdC5cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuZmluYWxseShjbG9zZU9mZnNjcmVlbkRvY3VtZW50KTtcclxuXHJcbiAgcmV0dXJuIGF1dGg7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVVcmxUb0ZpcmViYXNlKHVybCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluIHNhdmVVcmxUb0ZpcmViYXNlIHRyeSBibG9ja1wiLCB7dXJsfSlcclxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2xvY2FsaG9zdDozMDAwL2FwaS9zYXZlLXVybFwiLCB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vcG9tZi1zYXZlci1jZXJodHVuejYtanN1c2tpbnMtcHJvamVjdHMudmVyY2VsLmFwcC9hcGkvc2F2ZS11cmxcIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVybCB9KSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coXCJiYWNrZ3JvdW5kLmpzIHJlc3BvbnNlIG9iamVjdDogXCIsIHtyZXNwb25zZX0pXHJcbiAgICBjb25zb2xlLmxvZyhcIlVSTCBzYXZlZCB0byBGaXJlYmFzZTpcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgc3VjY2VzcyBub3RpZmljYXRpb25cclxuICAgIC8vIGNyZWF0ZU5vdGlmaWNhdGlvbihcIlVSTCBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpXHJcbiAgICAvLyAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHNob3duIGFuZCBjbGVhcmVkXCIpKVxyXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hvd2luZyBub3RpZmljYXRpb246XCIsIGVycm9yKSk7XHJcblxyXG4gICAgLy8gU2VuZCBzdWNjZXNzIG1lc3NhZ2UgdG8gdGhlIHBvcHVwXHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIG1lc3NhZ2U6IFwiVVJMIHNhdmVkIHN1Y2Nlc3NmdWxseSFcIixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgVVJMIHRvIEZpcmViYXNlOlwiLCBlcnJvcik7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuIGVycm9yIG5vdGlmaWNhdGlvblxyXG4gICAgLy8gY3JlYXRlTm90aWZpY2F0aW9uKFwiRmFpbGVkIHRvIHNhdmUgVVJMOiBcIiArIGVycm9yLm1lc3NhZ2UpXHJcbiAgICAvLyAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHNob3duIGFuZCBjbGVhcmVkXCIpKVxyXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hvd2luZyBub3RpZmljYXRpb246XCIsIGVycm9yKSk7XHJcblxyXG4gICAgLy8gU2VuZCBmYWlsdXJlIG1lc3NhZ2UgdG8gdGhlIHBvcHVwXHJcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBcIkZhaWxlZCB0byBzYXZlIFVSTDogXCIgKyBlcnJvci5tZXNzYWdlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb24obWVzc2FnZSkge1xyXG4vLyAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNyZWF0ZShcclxuLy8gICAgIHtcclxuLy8gICAgICAgdHlwZTogXCJiYXNpY1wiLFxyXG4vLyAgICAgICBpY29uVXJsOiBcImljb25zL2ljb25zOC1zaHJ1Zy1saW5lYWwtY29sb3ItMzIucG5nXCIsXHJcbi8vICAgICAgIHRpdGxlOiBcIlBvbWYgU2F2ZXJcIixcclxuLy8gICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBmdW5jdGlvbiAobm90aWZpY2F0aW9uSWQpIHtcclxuLy8gICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xyXG4vLyAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNsZWFyKG5vdGlmaWNhdGlvbklkLCAod2FzQ2xlYXJlZCkgPT4ge1xyXG4vLyAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xyXG4vLyAgICAgICAgICAgICByZWplY3QoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcclxuLy8gICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHJlc29sdmUod2FzQ2xlYXJlZCk7XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICApO1xyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiY2hyb21lIiwicnVudGltZSIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwiaXNBdXRoZW50aWNhdGVkIiwidW5kZWZpbmVkIiwic2V0Iiwib25NZXNzYWdlIiwibWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInVybCIsInNhdmVVcmxUb0ZpcmViYXNlIiwidGFyZ2V0IiwiZmlyZWJhc2VBdXRoIiwic3VjY2VzcyIsImVycm9yIiwiZmlyZWJhc2VTaWduT3V0IiwiT0ZGU0NSRUVOX0RPQ1VNRU5UX1BBVEgiLCJjcmVhdGluZ09mZnNjcmVlbkRvY3VtZW50IiwiaGFzRG9jdW1lbnQiLCJfaGFzRG9jdW1lbnQiLCJfY2FsbGVlMyIsIm1hdGNoZWRDbGllbnRzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiY2xpZW50cyIsIm1hdGNoQWxsIiwic29tZSIsImdldFVSTCIsInNldHVwT2Zmc2NyZWVuRG9jdW1lbnQiLCJfeCIsIl9zZXR1cE9mZnNjcmVlbkRvY3VtZW50IiwiX2NhbGxlZTQiLCJwYXRoIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0Iiwib2Zmc2NyZWVuIiwiY3JlYXRlRG9jdW1lbnQiLCJyZWFzb25zIiwiUmVhc29uIiwiRE9NX1NDUkFQSU5HIiwianVzdGlmaWNhdGlvbiIsInNldFRpbWVvdXQiLCJjbG9zZU9mZnNjcmVlbkRvY3VtZW50IiwiX2Nsb3NlT2Zmc2NyZWVuRG9jdW1lbnQiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImNsb3NlRG9jdW1lbnQiLCJnZXRBdXRoIiwiX3JlZiIsIl9jYWxsZWUiLCJyZWplY3QiLCJhdXRoIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInNlbmRNZXNzYWdlIiwiX3gyIiwiX3gzIiwic2lnbk91dFVzZXIiLCJfcmVmMiIsIl9jYWxsZWUyIiwic2lnbk91dFJlc3VsdCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInQwIiwiX3g0IiwiX3g1IiwiX2ZpcmViYXNlU2lnbk91dCIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiZXJyIiwiX2ZpcmViYXNlQXV0aCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiY29kZSIsIl94NiIsIl9zYXZlVXJsVG9GaXJlYmFzZSIsIl9jYWxsZWU4IiwicmVzcG9uc2UiLCJkYXRhIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInN0YXR1c1RleHQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==