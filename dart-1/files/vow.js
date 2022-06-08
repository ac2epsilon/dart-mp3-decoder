/**
 * @license

 Dual licensed under the MIT and GPL licenses:
   * http://www.opensource.org/licenses/mit-license.php
   * http://www.gnu.org/licenses/gpl.html
 SWFObject v2.2 <http://code.google.com/p/swfobject/>
 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 @private
*/
'use strict';
var _createClass = function() {
  /**
   * @param {!Function} target
   * @param {!NodeList} props
   * @return {undefined}
   */
  function defineProperties(target, props) {
    /** @type {number} */
    var i = 0;
    for (; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      /** @type {boolean} */
      descriptor.configurable = true;
      if ("value" in descriptor) {
        /** @type {boolean} */
        descriptor.writable = true;
      }
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) {
      defineProperties(Constructor.prototype, protoProps);
    }
    if (staticProps) {
      defineProperties(Constructor, staticProps);
    }
    return Constructor;
  };
}();
/** @type {function(!Object): ?} */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(name) {
  return typeof name;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
 * @param {!AudioNode} instance
 * @param {!Function} Constructor
 * @return {undefined}
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
!function(m) {
  /**
   * @param {number} i
   * @return {?}
   */
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  /** @type {!Array} */
  t.m = m;
  t.c = n;
  /**
   * @param {!Function} d
   * @param {string} name
   * @param {!Function} n
   * @return {undefined}
   */
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {!Object} o
   * @return {undefined}
   */
  t.r = function(o) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(o, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(o, "__esModule", {
      value : true
    });
  };
  /**
   * @param {number} value
   * @param {number} defaultValue
   * @return {?}
   */
  t.t = function(value, defaultValue) {
    if (1 & defaultValue && (value = t(value)), 8 & defaultValue) {
      return value;
    }
    if (4 & defaultValue && "object" == (typeof value === "undefined" ? "undefined" : _typeof(value)) && value && value.__esModule) {
      return value;
    }
    /** @type {!Object} */
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : value
    }), 2 & defaultValue && "string" != typeof value) {
      var s;
      for (s in value) {
        t.d(d, s, function(subel) {
          return value[subel];
        }.bind(null, s));
      }
    }
    return d;
  };
  /**
   * @param {number} e
   * @return {?}
   */
  t.n = function(e) {
    /** @type {function(): ?} */
    var n = e && e.__esModule ? function() {
      return e.default;
    } : function() {
      return e;
    };
    return t.d(n, "a", n), n;
  };
  /**
   * @param {!Function} e
   * @param {string} input
   * @return {?}
   */
  t.o = function(e, input) {
    return Object.prototype.hasOwnProperty.call(e, input);
  };
  /** @type {string} */
  t.p = "";
  t(t.s = 9);
}([function(module, canCreateDiscussions) {
  var g;
  g = function() {
    return this;
  }();
  try {
    g = g || (new Function("return this"))();
  } catch (t) {
    if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) {
      /** @type {!Window} */
      g = window;
    }
  }
  module.exports = g;
}, function(mixin, canCreateDiscussions, i) {
  /**
   * @param {!Array} text
   * @return {?}
   */
  mixin.exports = function(text) {
    /** @type {!Array} */
    var output = [];
    return output.toString = function() {
      return this.map(function(e) {
        var event = function(contents, value) {
          var i = contents[1] || "";
          var json = contents[3];
          if (!json) {
            return i;
          }
          if (value && "function" == typeof btoa) {
            /** @type {string} */
            var projectStage = (key = json, val = btoa(unescape(encodeURIComponent(JSON.stringify(key)))), tuples = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(val), "/*# ".concat(tuples, " */"));
            var testMiddlewares = json.sources.map(function(availableBaseTypes) {
              return "/*# sourceURL=".concat(json.sourceRoot || "").concat(availableBaseTypes, " */");
            });
            return [i].concat(testMiddlewares).concat([projectStage]).join("\n");
          }
          var key;
          var val;
          var tuples;
          return [i].join("\n");
        }(e, text);
        return e[2] ? "@media ".concat(e[2], " {").concat(event, "}") : event;
      }).join("");
    }, output.i = function(e, value, type) {
      if ("string" == typeof e) {
        /** @type {!Array} */
        e = [[null, e, ""]];
      }
      var options = {};
      if (type) {
        /** @type {number} */
        var i = 0;
        for (; i < this.length; i++) {
          var insertBehavior = this[i][0];
          if (null != insertBehavior) {
            /** @type {boolean} */
            options[insertBehavior] = true;
          }
        }
      }
      /** @type {number} */
      var i = 0;
      for (; i < e.length; i++) {
        /** @type {!Array<?>} */
        var pair = [].concat(e[i]);
        if (!(type && options[pair[0]])) {
          if (value) {
            if (pair[2]) {
              /** @type {string} */
              pair[2] = "".concat(value, " and ").concat(pair[2]);
            } else {
              pair[2] = value;
            }
          }
          output.push(pair);
        }
      }
    }, output;
  };
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  (function(setImmediate) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    !function e(t, n, r) {
      /**
       * @param {string} o
       * @param {?} u
       * @return {?}
       */
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            if (i) {
              return i(o, true);
            }
            /** @type {!Error} */
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var u = n[o] = {
            exports : {}
          };
          t[o][0].call(u.exports, function(ballNumber) {
            var ball = t[o][1][ballNumber];
            return s(ball || ballNumber);
          }, u, u.exports, e, t, n, r);
        }
        return n[o].exports;
      }
      /** @type {boolean} */
      var i = false;
      /** @type {number} */
      var o = 0;
      for (; o < r.length; o++) {
        s(r[o]);
      }
      return s;
    }({
      1 : [function(canCreateDiscussions, mixin, i) {
        /**
         * @return {undefined}
         */
        function dispatchLoadedEvent() {
          /** @type {boolean} */
          s = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            /** @type {number} */
            queueIndex = -1;
          }
          if (queue.length) {
            callback();
          }
        }
        /**
         * @return {undefined}
         */
        function callback() {
          if (!s) {
            /** @type {number} */
            var autoResumeTimer = setTimeout(dispatchLoadedEvent);
            /** @type {boolean} */
            s = true;
            var len = queue.length;
            for (; len;) {
              currentQueue = queue;
              /** @type {!Array} */
              queue = [];
              for (; ++queueIndex < len;) {
                if (currentQueue) {
                  currentQueue[queueIndex].run();
                }
              }
              /** @type {number} */
              queueIndex = -1;
              /** @type {number} */
              len = queue.length;
            }
            /** @type {null} */
            currentQueue = null;
            /** @type {boolean} */
            s = false;
            clearTimeout(autoResumeTimer);
          }
        }
        /**
         * @param {(Object|string)} fun
         * @param {!Array} array
         * @return {undefined}
         */
        function Item(fun, array) {
          /** @type {(Object|string)} */
          this.fun = fun;
          /** @type {!Array} */
          this.array = array;
        }
        /**
         * @return {undefined}
         */
        function noop() {
        }
        var currentQueue;
        var process = mixin.exports = {};
        /** @type {!Array} */
        var queue = [];
        /** @type {boolean} */
        var s = false;
        /** @type {number} */
        var queueIndex = -1;
        /**
         * @param {!Function} fun
         * @return {undefined}
         */
        process.nextTick = function(fun) {
          /** @type {!Array} */
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            /** @type {number} */
            var i = 1;
            for (; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (!(1 !== queue.length || s)) {
            setTimeout(callback, 0);
          }
        };
        /**
         * @return {undefined}
         */
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        /** @type {string} */
        process.title = "browser";
        /** @type {boolean} */
        process.browser = true;
        process.env = {};
        /** @type {!Array} */
        process.argv = [];
        /** @type {string} */
        process.version = "";
        process.versions = {};
        /** @type {function(): undefined} */
        process.on = noop;
        /** @type {function(): undefined} */
        process.addListener = noop;
        /** @type {function(): undefined} */
        process.once = noop;
        /** @type {function(): undefined} */
        process.off = noop;
        /** @type {function(): undefined} */
        process.removeListener = noop;
        /** @type {function(): undefined} */
        process.removeAllListeners = noop;
        /** @type {function(): undefined} */
        process.emit = noop;
        /**
         * @param {?} name
         * @return {?}
         */
        process.binding = function(name) {
          throw new Error("process.binding is not supported");
        };
        /**
         * @return {?}
         */
        process.cwd = function() {
          return "/";
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        process.chdir = function(dir) {
          throw new Error("process.chdir is not supported");
        };
        /**
         * @return {?}
         */
        process.umask = function() {
          return 0;
        };
      }, {}],
      2 : [function(require, module, exports) {
        (function(self) {
          !function(global) {
            var gettext = function() {
              /** @type {!Array} */
              var newPath = [];
              /**
               * @param {?} fileName
               * @return {?}
               */
              var getFileJSON = function runCompressor(fileName) {
                return 1 === newPath.push(fileName);
              };
              /**
               * @return {undefined}
               */
              var flush = function writeTextArgs() {
                var origNewPath = newPath;
                /** @type {number} */
                var r = 0;
                var readersLength = newPath.length;
                /** @type {!Array} */
                newPath = [];
                for (; r < readersLength;) {
                  origNewPath[r++]();
                }
              };
              if ("function" == typeof setImmediate) {
                return function(fileData) {
                  if (getFileJSON(fileData)) {
                    setImmediate(flush);
                  }
                };
              }
              if ("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self.nextTick) {
                return function(fileData) {
                  if (getFileJSON(fileData)) {
                    self.nextTick(flush);
                  }
                };
              }
              var Observer = global.MutationObserver || global.WebKitMutationObserver;
              if (Observer) {
                /** @type {number} */
                var a = 1;
                /** @type {!Text} */
                var c = document.createTextNode("");
                return (new Observer(flush)).observe(c, {
                  characterData : true
                }), function(fileData) {
                  if (getFileJSON(fileData)) {
                    c.data = a = a * -1;
                  }
                };
              }
              if (global.postMessage) {
                /** @type {boolean} */
                var u = true;
                if (global.attachEvent) {
                  /**
                   * @return {undefined}
                   */
                  var onMessage = function c() {
                    /** @type {boolean} */
                    u = false;
                  };
                  global.attachEvent("onmessage", onMessage);
                  global.postMessage("__checkAsync", "*");
                  global.detachEvent("onmessage", onMessage);
                }
                if (u) {
                  /** @type {string} */
                  var msg = "__promise" + +new Date;
                  /**
                   * @param {!Object} event
                   * @return {undefined}
                   */
                  var listener = function onMessage(event) {
                    if (event.data === msg) {
                      if (event.stopPropagation) {
                        event.stopPropagation();
                      }
                      flush();
                    }
                  };
                  return global.addEventListener ? global.addEventListener("message", listener, true) : global.attachEvent("onmessage", listener), function(fileData) {
                    if (getFileJSON(fileData)) {
                      global.postMessage(msg, "*");
                    }
                  };
                }
              }
              var doc = global.document;
              if ("onreadystatechange" in doc.createElement("script")) {
                return function(fileData) {
                  var scriptElem;
                  if (getFileJSON(fileData)) {
                    /**
                     * @return {undefined}
                     */
                    (scriptElem = doc.createElement("script")).onreadystatechange = function() {
                      scriptElem.parentNode.removeChild(scriptElem);
                      /** @type {null} */
                      scriptElem = scriptElem.onreadystatechange = null;
                      flush();
                    };
                    (doc.documentElement || doc.body).appendChild(scriptElem);
                  }
                };
              }
              return function(fileData) {
                if (getFileJSON(fileData)) {
                  setTimeout(flush, 0);
                }
              };
            }();
            /**
             * @param {?} doReturn
             * @return {undefined}
             */
            var func2 = function handleError(doReturn) {
              gettext(function() {
                throw doReturn;
              });
            };
            /**
             * @param {!Object} callback
             * @return {?}
             */
            var isFunction = function emitIcicleData(callback) {
              return "function" == typeof callback;
            };
            /**
             * @param {!Object} options
             * @return {?}
             */
            var isObject = function Mark_DataTables(options) {
              return null !== options && "object" == (typeof options === "undefined" ? "undefined" : _typeof(options));
            };
            /** @type {function(this:*): string} */
            var objectToString$2 = Object.prototype.toString;
            /** @type {function(*): boolean} */
            var isArray = Array.isArray || function(value) {
              return "[object Array]" === objectToString$2.call(value);
            };
            /**
             * @param {!Array} name
             * @return {?}
             */
            var getArrayKeys = function d(name) {
              /** @type {!Array} */
              var m = [];
              /** @type {number} */
              var i = 0;
              var length = name.length;
              for (; i < length;) {
                m.push(i++);
              }
              return m;
            };
            /** @type {function(!Object): !Array<string>} */
            var getObjectKeys = Object.keys || function(obj) {
              /** @type {!Array} */
              var ctrlNames = [];
              var prop;
              for (prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                  ctrlNames.push(prop);
                }
              }
              return ctrlNames;
            };
            /**
             * @param {!Function} onFulfilled
             * @param {number} idx
             * @return {?}
             */
            var wrapOnFulfilled = function wrapOnFulfilled(onFulfilled, idx) {
              return function(value) {
                onFulfilled.call(this, value, idx);
              };
            };
            /**
             * @return {undefined}
             */
            var Deferred = function il_getSettings() {
              this._promise = new Promise;
            };
            Deferred.prototype = {
              promise : function getPromise() {
                return this._promise;
              },
              resolve : function MappingPromiseArray$_promiseFulfilled(value) {
                if (!this._promise.isResolved()) {
                  this._promise._resolve(value);
                }
              },
              reject : function init(value) {
                if (!this._promise.isResolved()) {
                  if (vow.isPromise(value)) {
                    value = value.then(function(reject) {
                      var logInDeferred = vow.defer();
                      return logInDeferred.reject(reject), logInDeferred.promise();
                    });
                    this._promise._resolve(value);
                  } else {
                    this._promise._reject(value);
                  }
                }
              },
              notify : function success(value) {
                if (!this._promise.isResolved()) {
                  this._promise._notify(value);
                }
              }
            };
            /** @type {number} */
            var newStatus = 0;
            /** @type {number} */
            var _STATE_NEW = 1;
            /** @type {number} */
            var _STATE_SUBSCRIBING = 2;
            /** @type {number} */
            var _STATE_SUCCESS = 3;
            /**
             * @param {!Function} func
             * @return {undefined}
             */
            var Promise = function Promise(func) {
              if (this._value = void 0, this._status = newStatus, this._fulfilledCallbacks = [], this._rejectedCallbacks = [], this._progressCallbacks = [], func) {
                var _this = this;
                var funcLength = func.length;
                func(function(val) {
                  if (!_this.isResolved()) {
                    _this._resolve(val);
                  }
                }, funcLength > 1 ? function(reason) {
                  if (!_this.isResolved()) {
                    _this._reject(reason);
                  }
                } : void 0, funcLength > 2 ? function(value) {
                  if (!_this.isResolved()) {
                    _this._notify(value);
                  }
                } : void 0);
              }
            };
            Promise.prototype = {
              valueOf : function Lazy$value() {
                return this._value;
              },
              isResolved : function rejectEventSource() {
                return this._status !== newStatus;
              },
              isFulfilled : function rejectEventSource() {
                return this._status === _STATE_SUBSCRIBING;
              },
              isRejected : function rejectEventSource() {
                return this._status === _STATE_SUCCESS;
              },
              then : function when(onFulfilled, onRejected, onProgress, ctx) {
                var defer = new Deferred;
                return this._addCallbacks(defer, onFulfilled, onRejected, onProgress, ctx), defer.promise();
              },
              catch : function _then(onReject, onProgress) {
                return this.then(void 0, onReject, onProgress);
              },
              fail : function then(fn, ctx) {
                return this.then(void 0, fn, ctx);
              },
              always : function always(fn, ctx) {
                var event = this;
                /**
                 * @return {?}
                 */
                var onSettled = function cb() {
                  return fn.call(this, event);
                };
                return this.then(onSettled, onSettled, ctx);
              },
              progress : function when(onProgress, ctx) {
                return this.then(void 0, void 0, onProgress, ctx);
              },
              spread : function spread(cb, fn, ctx) {
                return this.then(function(cbArgs) {
                  return cb.apply(this, cbArgs);
                }, fn, ctx);
              },
              done : function then(onFulfilled, onRejected, onProgress, ctx) {
                this.then(onFulfilled, onRejected, onProgress, ctx).fail(func2);
              },
              delay : function init(t) {
                var redrawTimeout;
                var promise = this.then(function(view) {
                  var result = new Deferred;
                  return redrawTimeout = setTimeout(function() {
                    result.resolve(view);
                  }, t), result.promise();
                });
                return promise.always(function() {
                  clearTimeout(redrawTimeout);
                }), promise;
              },
              timeout : function init(t) {
                var deferred = new Deferred;
                /** @type {number} */
                var id = setTimeout(function() {
                  deferred.reject(new vow.TimedOutError("timed out"));
                }, t);
                return this.then(function(commitDetail) {
                  deferred.resolve(commitDetail);
                }, function(t) {
                  deferred.reject(t);
                }), deferred.promise().always(function() {
                  clearTimeout(id);
                }), deferred.promise();
              },
              _vow : true,
              _resolve : function resolve(val) {
                if (!(this._status > _STATE_NEW)) {
                  if (val !== this) {
                    if (this._status = _STATE_NEW, val && val._vow) {
                      if (val.isFulfilled()) {
                        this._fulfill(val.valueOf());
                      } else {
                        if (val.isRejected()) {
                          this._reject(val.valueOf());
                        } else {
                          val.then(this._fulfill, this._reject, this._notify, this);
                        }
                      }
                    } else {
                      if (isObject(val) || isFunction(val)) {
                        var then;
                        try {
                          then = val.then;
                        } catch (reason) {
                          return void this._reject(reason);
                        }
                        if (isFunction(then)) {
                          var self = this;
                          /** @type {boolean} */
                          var n = false;
                          try {
                            then.call(val, function(val) {
                              if (!n) {
                                /** @type {boolean} */
                                n = true;
                                self._resolve(val);
                              }
                            }, function(reason) {
                              if (!n) {
                                /** @type {boolean} */
                                n = true;
                                self._reject(reason);
                              }
                            }, function(val) {
                              self._notify(val);
                            });
                          } catch (reason) {
                            if (!n) {
                              this._reject(reason);
                            }
                          }
                          return;
                        }
                      }
                      this._fulfill(val);
                    }
                  } else {
                    this._reject(TypeError("Can't resolve promise with itself"));
                  }
                }
              },
              _fulfill : function Promise(reason) {
                if (!(this._status > _STATE_NEW)) {
                  /** @type {number} */
                  this._status = _STATE_SUBSCRIBING;
                  /** @type {!Object} */
                  this._value = reason;
                  this._callCallbacks(this._fulfilledCallbacks, reason);
                  this._fulfilledCallbacks = this._rejectedCallbacks = this._progressCallbacks = void 0;
                }
              },
              _reject : function Promise(reason) {
                if (!(this._status > _STATE_NEW)) {
                  /** @type {number} */
                  this._status = _STATE_SUCCESS;
                  /** @type {!Object} */
                  this._value = reason;
                  this._callCallbacks(this._rejectedCallbacks, reason);
                  this._fulfilledCallbacks = this._rejectedCallbacks = this._progressCallbacks = void 0;
                }
              },
              _notify : function invalidateControl(reason) {
                this._callCallbacks(this._progressCallbacks, reason);
              },
              _addCallbacks : function then(defer, onFulfilled, onRejected, onProgress, ctx) {
                var cb;
                if (onRejected && !isFunction(onRejected)) {
                  /** @type {!Object} */
                  ctx = onRejected;
                  onRejected = void 0;
                } else {
                  if (onProgress && !isFunction(onProgress)) {
                    /** @type {!Object} */
                    ctx = onProgress;
                    onProgress = void 0;
                  }
                }
                if (!this.isRejected()) {
                  cb = {
                    defer : defer,
                    fn : isFunction(onFulfilled) ? onFulfilled : void 0,
                    ctx : ctx
                  };
                  if (this.isFulfilled()) {
                    this._callCallbacks([cb], this._value);
                  } else {
                    this._fulfilledCallbacks.push(cb);
                  }
                }
                if (!this.isFulfilled()) {
                  cb = {
                    defer : defer,
                    fn : onRejected,
                    ctx : ctx
                  };
                  if (this.isRejected()) {
                    this._callCallbacks([cb], this._value);
                  } else {
                    this._rejectedCallbacks.push(cb);
                  }
                }
                if (this._status <= _STATE_NEW) {
                  this._progressCallbacks.push({
                    defer : defer,
                    fn : onProgress,
                    ctx : ctx
                  });
                }
              },
              _callCallbacks : function init(list, arg) {
                var dataLen = list.length;
                if (dataLen) {
                  var isResolved = this.isResolved();
                  var isFulfilled = this.isFulfilled();
                  gettext(function() {
                    var cb;
                    var deferred;
                    var fn;
                    /** @type {number} */
                    var j = 0;
                    for (; j < dataLen;) {
                      if (deferred = (cb = list[j++]).defer, fn = cb.fn) {
                        var result;
                        var ctx = cb.ctx;
                        try {
                          result = ctx ? fn.call(ctx, arg) : fn(arg);
                        } catch (t) {
                          deferred.reject(t);
                          continue;
                        }
                        if (isResolved) {
                          deferred.resolve(result);
                        } else {
                          deferred.notify(result);
                        }
                      } else {
                        if (isResolved) {
                          if (isFulfilled) {
                            deferred.resolve(arg);
                          } else {
                            deferred.reject(arg);
                          }
                        } else {
                          deferred.notify(arg);
                        }
                      }
                    }
                  });
                }
              }
            };
            var staticMethods = {
              cast : function parseParams(data) {
                return vow.cast(data);
              },
              all : function find_by_field(value) {
                return vow.all(value);
              },
              race : function determineColumnNamesFromPairsIterable(iterable) {
                return vow.anyResolved(iterable);
              },
              resolve : function getTrendingTags(obj) {
                return vow.resolve(obj);
              },
              reject : function ensureSafePath(value) {
                return vow.reject(value);
              }
            };
            var prop;
            for (prop in staticMethods) {
              if (staticMethods.hasOwnProperty(prop)) {
                Promise[prop] = staticMethods[prop];
              }
            }
            var okval;
            var func;
            var vow = {
              Deferred : Deferred,
              Promise : Promise,
              defer : function defer() {
                return new Deferred;
              },
              when : function when(data, res, onRejected, onProgress, ctx) {
                return vow.cast(data).then(res, onRejected, onProgress, ctx);
              },
              fail : function spread(value, onRejected, ctx) {
                return vow.when(value, void 0, onRejected, ctx);
              },
              always : function always(data, fn, ctx) {
                return vow.when(data).always(fn, ctx);
              },
              progress : function progress(value, onProgress, ctx) {
                return vow.when(value).progress(onProgress, ctx);
              },
              spread : function create(data, fn, callback, ctx) {
                return vow.when(data).spread(fn, callback, ctx);
              },
              done : function done(value, onFulfilled, onRejected, onProgress, ctx) {
                vow.when(value).done(onFulfilled, onRejected, onProgress, ctx);
              },
              isPromise : function isPromise(value) {
                return isObject(value) && isFunction(value.then);
              },
              cast : function cast(value) {
                return value && value._vow ? value : vow.resolve(value);
              },
              valueOf : function valueOf(value) {
                return value && isFunction(value.valueOf) ? value.valueOf() : value;
              },
              isFulfilled : function isResolved(value) {
                return !value || !isFunction(value.isFulfilled) || value.isFulfilled();
              },
              isRejected : function isFulfilled(value) {
                return !(!value || !isFunction(value.isRejected)) && value.isRejected();
              },
              isResolved : function _resolve(value) {
                return !value || !isFunction(value.isResolved) || value.isResolved();
              },
              resolve : function resolve(type) {
                var ioDeferred = vow.defer();
                return ioDeferred.resolve(type), ioDeferred.promise();
              },
              fulfill : function execute(name) {
                var e = vow.defer();
                var resultDeferred = e.promise();
                return e.resolve(name), resultDeferred.isFulfilled() ? resultDeferred : resultDeferred.then(null, function(HashService) {
                  return HashService;
                });
              },
              reject : function _getDirectoryEntry(options) {
                var logInDeferred = vow.defer();
                return logInDeferred.reject(options), logInDeferred.promise();
              },
              invoke : function invoke(f, a) {
                var callArgs;
                /** @type {number} */
                var len = Math.max(arguments.length - 1, 0);
                if (len) {
                  /** @type {!Array} */
                  callArgs = Array(len);
                  /** @type {number} */
                  var i = 0;
                  for (; i < len;) {
                    callArgs[i++] = arguments[i];
                  }
                }
                try {
                  return vow.resolve(callArgs ? f.apply(global, callArgs) : f.call(global));
                } catch (value) {
                  return vow.reject(value);
                }
              },
              all : function all(iterable) {
                var defer = new Deferred;
                /** @type {boolean} */
                var isPromisesArray = isArray(iterable);
                var keys = isPromisesArray ? getArrayKeys(iterable) : getObjectKeys(iterable);
                var l = keys.length;
                /** @type {(Array|{})} */
                var res = isPromisesArray ? [] : {};
                if (!l) {
                  return defer.resolve(res), defer.promise();
                }
                var ret = l;
                return vow._forEach(iterable, function(resWorkflow, s) {
                  res[keys[s]] = resWorkflow;
                  if (!--ret) {
                    defer.resolve(res);
                  }
                }, defer.reject, defer.notify, defer, keys), defer.promise();
              },
              allResolved : function all(iterable) {
                var defer = new Deferred;
                /** @type {boolean} */
                var isPromisesArray = isArray(iterable);
                var keys = isPromisesArray ? getArrayKeys(iterable) : getObjectKeys(iterable);
                var keysLeft = keys.length;
                /** @type {(Array|{})} */
                var res = isPromisesArray ? [] : {};
                if (!keysLeft) {
                  return defer.resolve(res), defer.promise();
                }
                /**
                 * @return {undefined}
                 */
                var onResolved = function decrementAllCounter() {
                  if (!--keysLeft) {
                    defer.resolve(iterable);
                  }
                };
                return vow._forEach(iterable, onResolved, onResolved, defer.notify, defer, keys), defer.promise();
              },
              allPatiently : function encode(iterable) {
                return vow.allResolved(iterable).then(function() {
                  var rejectedPromises;
                  var fulfilledPromises;
                  var key;
                  var promise;
                  /** @type {boolean} */
                  var isPromisesArray = isArray(iterable);
                  var keys = isPromisesArray ? getArrayKeys(iterable) : getObjectKeys(iterable);
                  var jn = keys.length;
                  /** @type {number} */
                  var j = 0;
                  if (!jn) {
                    return isPromisesArray ? [] : {};
                  }
                  for (; j < jn;) {
                    key = keys[j++];
                    promise = iterable[key];
                    if (vow.isRejected(promise)) {
                      if (!rejectedPromises) {
                        /** @type {(Array|{})} */
                        rejectedPromises = isPromisesArray ? [] : {};
                      }
                      if (isPromisesArray) {
                        rejectedPromises.push(promise.valueOf());
                      } else {
                        rejectedPromises[key] = promise.valueOf();
                      }
                    } else {
                      if (!rejectedPromises) {
                        /** @type {*} */
                        (fulfilledPromises || (fulfilledPromises = isPromisesArray ? [] : {}))[key] = vow.valueOf(promise);
                      }
                    }
                  }
                  if (rejectedPromises) {
                    throw rejectedPromises;
                  }
                  return fulfilledPromises;
                });
              },
              any : function any(iterable) {
                var defer = new Deferred;
                var l = iterable.length;
                if (!l) {
                  return defer.reject(Error()), defer.promise();
                }
                var n;
                /** @type {number} */
                var j = 0;
                return vow._forEach(iterable, defer.resolve, function(max_out) {
                  if (!j) {
                    n = max_out;
                  }
                  if (++j === l) {
                    defer.reject(n);
                  }
                }, defer.notify, defer), defer.promise();
              },
              anyResolved : function push(iterable) {
                var defer = new Deferred;
                return iterable.length ? (vow._forEach(iterable, defer.resolve, defer.reject, defer.notify, defer), defer.promise()) : (defer.reject(Error()), defer.promise());
              },
              delay : function later(data, fn) {
                return vow.resolve(data).delay(fn);
              },
              timeout : function del(value, result) {
                return vow.resolve(value).timeout(result);
              },
              _forEach : function _forEach(promises, onFulfilled, onRejected, onProgress, ctx, keys) {
                var len = keys ? keys.length : promises.length;
                /** @type {number} */
                var i = 0;
                for (; i < len;) {
                  vow.when(promises[keys ? keys[i] : i], wrapOnFulfilled(onFulfilled, i), onRejected, onProgress, ctx);
                  ++i;
                }
              },
              TimedOutError : (okval = "TimedOut", func = function QuickBaseError(message) {
                this.name = okval;
                /** @type {string} */
                this.message = message;
              }, func.prototype = new Error, func)
            };
            if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports)) {
              module.exports = vow;
            }
            if ("object" == (typeof modules === "undefined" ? "undefined" : _typeof(modules)) && isFunction(modules.define)) {
              modules.define("vow", function(provide) {
                provide(vow);
              });
            }
            if (!(void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function(canCreateDiscussions, isSlidingUp, module) {
              module.exports = vow;
            }.call(exports, __webpack_require__, exports, module)))) {
              module.exports = __WEBPACK_AMD_DEFINE_RESULT__;
            }
            if (false) {
              global.vow = vow;
            }
          }(this);
        }).call(this, require("_process"));
      }, {
        _process : 1
      }],
      3 : [function(require, module, i) {
        var logger = new (require("./logger/logger"))("Audio");
        var View = require("./lib/async/events");
        var hostlocalize = require("./lib/async/promise");
        var Deferred = require("./lib/async/deferred");
        var app = require("./lib/browser/detect");
        var options = require("./config");
        var encodeVInt = require("./lib/data/merge");
        var load = require("./lib/async/reject");
        var Date = require("./error/audio-error");
        var size = require("./audio-static");
        /** @type {number} */
        var d = 1;
        var req = {
          html5 : require("./html5/audio-html5"),
          flash : require("./flash/audio-flash")
        };
        /** @type {string} */
        var textu = "@" + app.platform.version + " " + app.platform.os + ":" + app.browser.name + "/" + app.browser.version;
        /** @type {number} */
        req.flash.priority = 0;
        /** @type {number} */
        req.html5.priority = options.html5.blacklist.some(function(users) {
          return textu.match(users);
        }) ? -1 : 1;
        setTimeout(function() {
          logger.info({
            flash : {
              available : req.flash.available,
              priority : req.flash.priority
            },
            html5 : {
              available : req.html5.available,
              priority : req.html5.priority,
              audioContext : !!req.html5.audioContext
            }
          }, "audioTypes");
        }, 0);
        /**
         * @param {string} id
         * @param {!HTMLElement} child
         * @return {undefined}
         */
        var self = function init(id, child) {
          /** @type {number} */
          this.name = d++;
          if (DEV) {
            logger.debug(this, "constructor");
          }
          View.call(this);
          /** @type {string} */
          this.preferredType = id;
          /** @type {!HTMLElement} */
          this.overlay = child;
          this.state = init.STATE_INIT;
          /** @type {number} */
          this._played = 0;
          /** @type {number} */
          this._lastSkip = 0;
          /** @type {null} */
          this._playId = null;
          /** @type {boolean} */
          this._initInProgress = true;
          this._whenReady = new Deferred;
          this.whenReady = this._whenReady.promise().then(function() {
            /** @type {boolean} */
            this._initInProgress = false;
            logger.info(this, "implementation found", this.implementation.type);
            this.implementation.on("*", function(event, offset, data) {
              if (this._populateEvents(event, offset, data), !offset) {
                switch(event) {
                  case init.EVENT_PLAY:
                    this._setState(init.STATE_PLAYING);
                    break;
                  case init.EVENT_ENDED:
                  case init.EVENT_SWAP:
                  case init.EVENT_STOP:
                  case init.EVENT_ERROR:
                    logger.info(this, "onEnded", event, data);
                    this._setState(init.STATE_IDLE);
                    break;
                  case init.EVENT_PAUSE:
                    this._setState(init.STATE_PAUSED);
                    break;
                  case init.EVENT_CRASHED:
                    this._setState(init.STATE_CRASHED);
                }
              }
            }.bind(this));
            this._setState(init.STATE_IDLE);
          }.bind(this), function(t) {
            throw this._initInProgress = false, logger.error(this, Date.NO_IMPLEMENTATION, t), this._setState(init.STATE_CRASHED), t;
          }.bind(this));
          this._init(0);
        };
        View.mixin(self);
        encodeVInt(self, size, true);
        self.info = {
          html5 : req.html5.available,
          flash : req.flash.available
        };
        self.audioContext = req.html5.audioContext;
        /**
         * @param {string} value
         * @return {undefined}
         */
        self.prototype._setState = function(value) {
          if (DEV && logger.debug(this, "_setState", value), value !== self.STATE_PAUSED || this.state === self.STATE_PLAYING) {
            /** @type {boolean} */
            var changed = this.state !== value;
            /** @type {string} */
            this.state = value;
            if (changed) {
              logger.info(this, "newState", value);
              this.trigger(self.EVENT_STATE, value);
            }
          }
        };
        /**
         * @param {number} retry
         * @return {undefined}
         */
        self.prototype._init = function(retry) {
          if (retry = retry || 0, logger.info(this, "_init", retry), this._initInProgress) {
            if (retry > options.audio.retry) {
              logger.error(this, Date.NO_IMPLEMENTATION);
              this._whenReady.reject(new Date(Date.NO_IMPLEMENTATION));
            }
            /** @type {!Array<?>} */
            var _sizeAnimateTimeStamps = [req.html5, req.flash].sort(function(a, b) {
              return a.available !== b.available ? a.available ? -1 : 1 : a.AudioImplementation.type === this.preferredType ? -1 : b.AudioImplementation.type === this.preferredType ? 1 : b.priority - a.priority;
            }.bind(this));
            var self = this;
            !function init() {
              var type = _sizeAnimateTimeStamps.shift();
              if (type) {
                self._initType(type).then(self._whenReady.resolve, init);
              } else {
                self._init(retry + 1);
              }
            }();
          }
        };
        /**
         * @param {string} type
         * @return {?}
         */
        self.prototype._initType = function(type) {
          logger.info(this, "_initType", type);
          var deferred = new Deferred;
          try {
            this.implementation = new type.AudioImplementation(this.overlay);
            if (this.implementation.whenReady) {
              this.implementation.whenReady.then(deferred.resolve, deferred.reject);
            } else {
              deferred.resolve();
            }
          } catch (error) {
            deferred.reject(error);
            logger.warn(this, "_initTypeError", type, error);
          }
          return deferred.promise();
        };
        /**
         * @param {string} action
         * @param {!Array} resolve
         * @param {!Array} reject
         * @return {?}
         */
        self.prototype._waitEvents = function(action, resolve, reject) {
          var deferred = new Deferred;
          var self = this;
          this[action] = deferred;
          /**
           * @return {undefined}
           */
          var inspect = function cleanupEvents() {
            resolve.forEach(function(t) {
              self.off(t, deferred.resolve);
            });
            reject.forEach(function(t) {
              self.off(t, deferred.reject);
            });
            delete self[action];
          };
          return resolve.forEach(function(t) {
            self.on(t, deferred.resolve);
          }), reject.forEach(function(data) {
            self.on(data, function(result) {
              var value = result instanceof Error ? result : new Date(result || data);
              deferred.reject(value);
            });
          }), deferred.promise().then(inspect, inspect), deferred.promise();
        };
        /**
         * @param {string} event
         * @param {number} offset
         * @param {?} data
         * @return {undefined}
         */
        self.prototype._populateEvents = function(event, offset, data) {
          if (event !== self.EVENT_PROGRESS && DEV) {
            logger.debug(this, "_populateEvents", event, offset, data);
          }
          var eventName = (offset ? self.PRELOADER_EVENT : "") + event;
          switch(event) {
            case self.EVENT_CRASHED:
            case self.EVENT_SWAP:
              this.trigger(event, data);
              break;
            case self.EVENT_ERROR:
              logger.error(this, "error", eventName, data);
              this.trigger(eventName, data);
              break;
            case self.EVENT_VOLUME:
              this.trigger(event, this.getVolume());
              break;
            case self.EVENT_PROGRESS:
              this.trigger(eventName, {
                duration : this.getDuration(offset),
                loaded : this.getLoaded(offset),
                position : offset ? 0 : this.getPosition(),
                played : offset ? 0 : this.getPlayed()
              });
              break;
            default:
              this.trigger(eventName);
          }
        };
        /**
         * @return {?}
         */
        self.prototype.initPromise = function() {
          return this.whenReady;
        };
        /**
         * @return {?}
         */
        self.prototype.getState = function() {
          return this.state;
        };
        /**
         * @return {?}
         */
        self.prototype.getType = function() {
          return this.implementation && this.implementation.type;
        };
        /**
         * @param {number} offset
         * @return {?}
         */
        self.prototype.getSrc = function(offset) {
          return this.implementation && this.implementation.getSrc(offset);
        };
        /**
         * @param {number} name
         * @param {?} duration
         * @return {?}
         */
        self.prototype.play = function(name, duration) {
          logger.info(this, "play", logger._showUrl(name), duration);
          /** @type {number} */
          this._played = 0;
          /** @type {number} */
          this._lastSkip = 0;
          this._generatePlayId();
          if (this._whenPlay) {
            this._whenPlay.reject("play");
          }
          if (this._whenPause) {
            this._whenPause.reject("play");
          }
          if (this._whenStop) {
            this._whenStop.reject("play");
          }
          var promise = this._waitEvents("_whenPlay", [self.EVENT_PLAY], [self.EVENT_STOP, self.EVENT_ERROR, self.EVENT_CRASHED]);
          return promise.abort = function() {
            if (this._whenPlay) {
              this._whenPlay.reject.apply(this._whenPlay, arguments);
              this.stop();
            }
          }.bind(this), this._setState(self.STATE_PAUSED), this.implementation.play(name, duration), promise;
        };
        /**
         * @return {?}
         */
        self.prototype.restart = function() {
          return this.getDuration() ? (this._generatePlayId(), this.setPosition(0), this._played = 0, this._lastSkip = 0, this.resume()) : load(new Date(Date.BAD_STATE));
        };
        /**
         * @param {number} offset
         * @return {?}
         */
        self.prototype.stop = function(offset) {
          return logger.info(this, "stop", offset), 0 !== offset ? this.implementation.stop(offset) : (this._played = 0, this._lastSkip = 0, this._whenPlay && this._whenPlay.reject("stop"), this._whenPause && this._whenPause.reject("stop"), e = this._whenStop ? this._whenStop.promise() : this._waitEvents("_whenStop", [self.EVENT_STOP], [self.EVENT_PLAY, self.EVENT_ERROR, self.EVENT_CRASHED]), this.implementation.stop(), e);
          var e;
        };
        /**
         * @return {?}
         */
        self.prototype.pause = function() {
          return logger.info(this, "pause"), this.state !== self.STATE_PLAYING ? load(new Date(Date.BAD_STATE)) : (this._whenPlay && this._whenPlay.reject("pause"), t = this._whenPause ? this._whenPause.promise() : this._waitEvents("_whenPause", [self.EVENT_PAUSE], [self.EVENT_STOP, self.EVENT_PLAY, self.EVENT_ERROR, self.EVENT_CRASHED]), this.implementation.pause(), t);
          var t;
        };
        /**
         * @return {?}
         */
        self.prototype.resume = function() {
          return logger.info(this, "resume"), this.state !== self.STATE_PLAYING || this._whenPause ? this.state !== self.STATE_IDLE && this.state !== self.STATE_PAUSED && this.state !== self.STATE_PLAYING ? load(new Date(Date.BAD_STATE)) : (this._whenPause && this._whenPause.reject("resume"), this._whenPlay ? promise = this._whenPlay.promise() : (promise = this._waitEvents("_whenPlay", [self.EVENT_PLAY], [self.EVENT_STOP, self.EVENT_ERROR, self.EVENT_CRASHED])).abort = function() {
            if (this._whenPlay) {
              this._whenPlay.reject.apply(this._whenPlay, arguments);
              this.stop();
            }
          }.bind(this), this.implementation.resume(), promise) : hostlocalize.resolve();
          var promise;
        };
        /**
         * @param {!Object} src
         * @return {?}
         */
        self.prototype.playPreloaded = function(src) {
          if (logger.info(this, "playPreloaded", logger._showUrl(src)), src || (src = this.getSrc(1)), !this.isPreloaded(src)) {
            return logger.warn(this, "playPreloadedBadTrack", Date.NOT_PRELOADED), load(new Date(Date.NOT_PRELOADED));
          }
          /** @type {number} */
          this._played = 0;
          /** @type {number} */
          this._lastSkip = 0;
          this._generatePlayId();
          if (this._whenPlay) {
            this._whenPlay.reject("playPreloaded");
          }
          if (this._whenPause) {
            this._whenPause.reject("playPreloaded");
          }
          if (this._whenStop) {
            this._whenStop.reject("playPreloaded");
          }
          var promise = this._waitEvents("_whenPlay", [self.EVENT_PLAY], [self.EVENT_STOP, self.EVENT_ERROR, self.EVENT_CRASHED]);
          return promise.abort = function() {
            if (this._whenPlay) {
              this._whenPlay.reject.apply(this._whenPlay, arguments);
              this.stop();
            }
          }.bind(this), this._setState(self.STATE_PAUSED), this.implementation.playPreloaded() || (logger.warn(this, "playPreloadedError", Date.NOT_PRELOADED), this._whenPlay.reject(new Date(Date.NOT_PRELOADED))), promise;
        };
        /**
         * @param {string} src
         * @param {?} duration
         * @return {?}
         */
        self.prototype.preload = function(src, duration) {
          if ("msie" === app.browser.name && "9" == app.browser.version[0]) {
            return load(new Date(Date.NOT_PRELOADED));
          }
          logger.info(this, "preload", logger._showUrl(src), duration);
          if (this._whenPreload) {
            this._whenPreload.reject("preload");
          }
          var promise = this._waitEvents("_whenPreload", [self.PRELOADER_EVENT + self.EVENT_LOADING, self.EVENT_SWAP], [self.PRELOADER_EVENT + self.EVENT_CRASHED, self.PRELOADER_EVENT + self.EVENT_ERROR, self.PRELOADER_EVENT + self.EVENT_STOP]);
          return promise.abort = function() {
            if (this._whenPreload) {
              this._whenPreload.reject.apply(this._whenPreload, arguments);
              this.stop(1);
            }
          }.bind(this), this.implementation.preload(src, duration), promise;
        };
        /**
         * @param {!Object} src
         * @return {?}
         */
        self.prototype.isPreloaded = function(src) {
          return this.implementation.isPreloaded(src);
        };
        /**
         * @param {?} src
         * @return {?}
         */
        self.prototype.isPreloading = function(src) {
          return this.implementation.isPreloading(src, 1);
        };
        /**
         * @return {?}
         */
        self.prototype.getPosition = function() {
          return this.implementation.getPosition() || 0;
        };
        /**
         * @param {number} position
         * @return {?}
         */
        self.prototype.setPosition = function(position) {
          return logger.info(this, "setPosition", position), position = "flash" == this.implementation.type ? Math.max(0, Math.min(this.getLoaded() - 1, position)) : Math.max(0, Math.min(this.getDuration() - 1, position)), this._played += this.getPosition() - this._lastSkip, this._lastSkip = position, this.implementation.setPosition(position), position;
        };
        /**
         * @param {number} preloader
         * @return {?}
         */
        self.prototype.getDuration = function(preloader) {
          return this.implementation.getDuration(preloader ? 1 : 0) || 0;
        };
        /**
         * @param {number} preloader
         * @return {?}
         */
        self.prototype.getLoaded = function(preloader) {
          return this.implementation.getLoaded(preloader ? 1 : 0) || 0;
        };
        /**
         * @return {?}
         */
        self.prototype.getPlayed = function() {
          var position = this.getPosition();
          return this._played += position - this._lastSkip, this._lastSkip = position, this._played;
        };
        /**
         * @return {?}
         */
        self.prototype.getVolume = function() {
          return this.implementation ? this.implementation.getVolume() : 0;
        };
        /**
         * @param {number} volume
         * @return {?}
         */
        self.prototype.setVolume = function(volume) {
          return DEV && logger.debug(this, "setVolume", volume), this.implementation ? this.implementation.setVolume(volume) : 0;
        };
        /**
         * @param {!Array} suggestedRate
         * @return {?}
         */
        self.prototype.setPlaybackRate = function(suggestedRate) {
          return this.implementation.setPlaybackRate(suggestedRate);
        };
        /**
         * @return {?}
         */
        self.prototype.isDeviceVolume = function() {
          return !this.implementation || this.implementation.isDeviceVolume();
        };
        /**
         * @param {?} state
         * @return {?}
         */
        self.prototype.toggleCrossDomain = function(state) {
          return "html5" !== this.implementation.type ? (logger.warn(this, "toggleCrossDomainFailed", this.implementation.type), false) : (this.implementation.toggleCrossDomain(state), true);
        };
        /**
         * @param {boolean} state
         * @return {?}
         */
        self.prototype.toggleWebAudioAPI = function(state) {
          return logger.info(this, "toggleWebAudioAPI", state), "html5" !== this.implementation.type ? (logger.warn(this, "toggleWebAudioAPIFailed", this.implementation.type), false) : this.implementation.toggleWebAudioAPI(state);
        };
        /**
         * @param {string} preprocessor
         * @return {?}
         */
        self.prototype.setAudioPreprocessor = function(preprocessor) {
          return logger.info(this, "setAudioPreprocessor"), "html5" !== this.implementation.type ? (logger.warn(this, "setAudioPreprocessorFailed", this.implementation.type), false) : this.implementation.setAudioPreprocessor(preprocessor);
        };
        /**
         * @return {undefined}
         */
        self.prototype._generatePlayId = function() {
          /** @type {string} */
          this._playId = Math.random().toString().slice(2);
        };
        /**
         * @return {?}
         */
        self.prototype.getPlayId = function() {
          return this._playId;
        };
        /**
         * @return {?}
         */
        self.prototype._logger = function() {
          return {
            index : this.implementation && this.implementation.name,
            src : this.implementation && this.implementation._logger(),
            type : this.implementation && this.implementation.type
          };
        };
        /** @type {function(string, !HTMLElement): undefined} */
        module.exports = self;
      }, {
        "./audio-static" : 4,
        "./config" : 5,
        "./error/audio-error" : 6,
        "./flash/audio-flash" : 10,
        "./html5/audio-html5" : 26,
        "./lib/async/deferred" : 28,
        "./lib/async/events" : 29,
        "./lib/async/promise" : 30,
        "./lib/async/reject" : 31,
        "./lib/browser/detect" : 32,
        "./lib/data/merge" : 37,
        "./logger/logger" : 43
      }],
      4 : [function(canCreateDiscussions, module, i) {
        var BinaryBundle = {
          EVENT_PLAY : "play",
          EVENT_STOP : "stop",
          EVENT_PAUSE : "pause",
          EVENT_PROGRESS : "progress",
          EVENT_LOADING : "loading",
          EVENT_LOADED : "loaded",
          EVENT_VOLUME : "volumechange",
          EVENT_ENDED : "ended",
          EVENT_CRASHED : "crashed",
          EVENT_ERROR : "error",
          EVENT_STATE : "state",
          EVENT_SWAP : "swap",
          PRELOADER_EVENT : "preloader:",
          STATE_INIT : "init",
          STATE_CRASHED : "crashed",
          STATE_IDLE : "idle",
          STATE_PLAYING : "playing",
          STATE_PAUSED : "paused"
        };
        module.exports = BinaryBundle;
      }, {}],
      5 : [function(canCreateDiscussions, self, i) {
        self.exports = {
          audio : {
            retry : 3
          },
          flash : {
            path : "dist",
            name : "player-2_1.swf",
            version : "9.0.28",
            playerID : "YandexAudioFlashPlayer",
            callback : "ya.music.Audio._flashCallback",
            initTimeout : 3e3,
            loadTimeout : 5e3,
            clickTimeout : 1e3,
            heartBeatInterval : 1e3
          },
          html5 : {
            blacklist : ["linux:mozilla", "unix:mozilla", "macos:mozilla", ":opera", "@NT 5", "@NT 4", ":msie/9"]
          }
        };
      }, {}],
      6 : [function(saveNotifs, module, i) {
        var childResize = saveNotifs("../lib/class/error-class");
        /**
         * @param {!Array} item
         * @return {undefined}
         */
        var ChatBuffer = function alterCount(item) {
          childResize.call(this, item);
        };
        ChatBuffer.prototype = childResize.create("AudioError");
        /** @type {string} */
        ChatBuffer.NO_IMPLEMENTATION = "cannot find suitable implementation";
        /** @type {string} */
        ChatBuffer.NOT_PRELOADED = "track is not preloaded";
        /** @type {string} */
        ChatBuffer.BAD_STATE = "action is not permited from current state";
        /** @type {string} */
        ChatBuffer.FLASH_BLOCKER = "flash is rejected by flash blocker plugin";
        /** @type {string} */
        ChatBuffer.FLASH_UNKNOWN_CRASH = "flash is crashed without reason";
        /** @type {string} */
        ChatBuffer.FLASH_INIT_TIMEOUT = "flash init timed out";
        /** @type {string} */
        ChatBuffer.FLASH_INTERNAL_ERROR = "flash internal error";
        /** @type {string} */
        ChatBuffer.FLASH_EMMITER_NOT_FOUND = "flash event emmiter not found";
        /** @type {string} */
        ChatBuffer.FLASH_NOT_RESPONDING = "flash player doesn't response";
        /** @type {function(!Array): undefined} */
        module.exports = ChatBuffer;
      }, {
        "../lib/class/error-class" : 34
      }],
      7 : [function(FbmNoise2, canCreateDiscussions, i) {
        FbmNoise2("../export");
        var elevationNoise = FbmNoise2("./audio-error");
        var ruggedNoise = FbmNoise2("./playback-error");
        ya.music.Audio.AudioError = elevationNoise;
        ya.music.Audio.PlaybackError = ruggedNoise;
      }, {
        "../export" : 9,
        "./audio-error" : 6,
        "./playback-error" : 8
      }],
      8 : [function(saveNotifs, module, i) {
        var collectionType = saveNotifs("../lib/class/error-class");
        /**
         * @param {!Array} relation
         * @param {string} callback
         * @return {undefined}
         */
        var api = function destroyRelation(relation, callback) {
          collectionType.call(this, relation);
          /** @type {string} */
          this.src = callback;
        };
        api.prototype = collectionType.create("PlaybackError");
        /** @type {string} */
        api.CONNECTION_ABORTED = "Connection aborted";
        /** @type {string} */
        api.NETWORK_ERROR = "Network error";
        /** @type {string} */
        api.DECODE_ERROR = "Decode error";
        /** @type {string} */
        api.BAD_DATA = "Bad data";
        /** @type {string} */
        api.DONT_START = "Playback start error";
        api.html5 = {
          1 : api.CONNECTION_ABORTED,
          2 : api.NETWORK_ERROR,
          3 : api.DECODE_ERROR,
          4 : api.BAD_DATA
        };
        /** @type {function(!Array, string): undefined} */
        module.exports = api;
      }, {
        "../lib/class/error-class" : 34
      }],
      9 : [function(require, mixin, i) {
        if ("undefined" == typeof DEV) {
          /** @type {boolean} */
          window.DEV = true;
        }
        if (void 0 === window.ya) {
          window.ya = {};
        }
        var module = window.ya;
        if (void 0 === module.music) {
          module.music = {};
        }
        if (void 0 === module.music.Audio) {
          module.music.Audio = {};
        }
        var requireConfig = require("./config");
        var Promise = require("./audio-player");
        var base = require("./lib/class/proxy");
        module.music.Audio = base.createClass(Promise);
        module.music.Audio.config = requireConfig;
        require("./lib/export");
        mixin.exports = module.music.Audio;
      }, {
        "./audio-player" : 3,
        "./config" : 5,
        "./lib/class/proxy" : 35,
        "./lib/export" : 38
      }],
      10 : [function($, canCreateDiscussions, message) {
        var m;
        var support = $("../config");
        var firstLine = $("../lib/browser/swfobject");
        var _s = $("../lib/browser/detect");
        var console = new ($("../logger/logger"))("AudioFlash");
        var cls = $("./flash-manager");
        var mainMetadata = $("./flash-interface");
        var wrapper = $("../lib/async/events");
        /** @type {number} */
        var h = 1;
        var version = firstLine.getFlashPlayerVersion();
        /** @type {string} */
        _s.flashVersion = version.major + "." + version.minor + "." + version.release;
        message.available = firstLine.hasFlashPlayerVersion(support.flash.version);
        console.info(this, "detection", message.available);
        /**
         * @param {?} options
         * @param {?} context
         * @return {undefined}
         */
        var self = function create(options, context) {
          /** @type {number} */
          this.name = h++;
          if (DEV) {
            console.debug(this, "constructor");
          }
          if (!(m && !context)) {
            m = new cls(options);
          }
          wrapper.call(this);
          this.whenReady = m.createPlayer(this);
          this.whenReady.then(function(sectionId) {
            console.info(this, "ready", sectionId);
          }.bind(this), function(until) {
            console.error(this, "failed", until);
          }.bind(this));
        };
        wrapper.mixin(self);
        /** @type {string} */
        message.type = self.type = self.prototype.type = "flash";
        Object.keys(mainMetadata.prototype).filter(function(line) {
          return mainMetadata.prototype.hasOwnProperty(line) && "_" !== line[0];
        }).map(function(method) {
          /**
           * @return {?}
           */
          self.prototype[method] = function() {
            if (/^get/.test(method) || DEV && console.debug(this, method), !this.hasOwnProperty("id")) {
              return console.warn(this, "player is not ready"), null;
            }
            /** @type {!Array<?>} */
            var cmd_args = [].slice.call(arguments);
            return cmd_args.unshift(this.id), m.flash[method].apply(m.flash, cmd_args);
          };
        });
        /**
         * @return {?}
         */
        self.prototype.isDeviceVolume = function() {
          return false;
        };
        /**
         * @return {?}
         */
        self.prototype._logger = function() {
          try {
            return this.hasOwnProperty("id") ? {
              main : console._showUrl(this.getSrc(0)),
              preloader : console._showUrl(this.getSrc(1))
            } : {
              main : "not ready",
              preloader : "not ready"
            };
          } catch (t) {
            return "";
          }
        };
        /** @type {function(?, ?): undefined} */
        message.AudioImplementation = self;
      }, {
        "../config" : 5,
        "../lib/async/events" : 29,
        "../lib/browser/detect" : 32,
        "../lib/browser/swfobject" : 33,
        "../logger/logger" : 43,
        "./flash-interface" : 11,
        "./flash-manager" : 12
      }],
      11 : [function(saveNotifs, module, i) {
        var s = new (saveNotifs("../logger/logger"))("FlashInterface");
        /**
         * @param {!Object} flash
         * @return {undefined}
         */
        var Player = function init(flash) {
          this.flash = ya.music.Audio._flash = flash;
        };
        /**
         * @param {string} fn
         * @return {?}
         */
        Player.prototype._callFlash = function(fn) {
          try {
            return this.flash.call.apply(this.flash, arguments);
          } catch (value) {
            return s.error(this, "_callFlashError", value, arguments[0], arguments[1], arguments[2]), null;
          }
        };
        /**
         * @return {undefined}
         */
        Player.prototype._heartBeat = function() {
          this._callFlash("heartBeat", -1);
        };
        /**
         * @return {?}
         */
        Player.prototype._addPlayer = function() {
          return this._callFlash("addPlayer", -1);
        };
        /**
         * @param {number} val
         * @param {?} volume
         * @return {undefined}
         */
        Player.prototype.setVolume = function(val, volume) {
          this._callFlash("setVolume", -1, volume);
        };
        /**
         * @return {?}
         */
        Player.prototype.getVolume = function() {
          return this._callFlash("getVolume", -1);
        };
        /**
         * @param {number} id
         * @param {?} volume
         * @param {number} duration
         * @return {undefined}
         */
        Player.prototype.play = function(id, volume, duration) {
          this._callFlash("play", id, volume, duration && 1e3 * duration);
        };
        /**
         * @param {number} id
         * @param {number} offset
         * @return {undefined}
         */
        Player.prototype.stop = function(id, offset) {
          this._callFlash("stop", id, offset || 0);
        };
        /**
         * @param {?} id
         * @return {undefined}
         */
        Player.prototype.pause = function(id) {
          this._callFlash("pause", id);
        };
        /**
         * @param {?} id
         * @return {undefined}
         */
        Player.prototype.resume = function(id) {
          this._callFlash("resume", id);
        };
        /**
         * @param {?} id
         * @return {?}
         */
        Player.prototype.getPosition = function(id) {
          return this._callFlash("getPosition", id);
        };
        /**
         * @param {number} id
         * @param {?} position
         * @return {undefined}
         */
        Player.prototype.setPosition = function(id, position) {
          this._callFlash("setPosition", id, position);
        };
        /**
         * @param {number} id
         * @param {number} offset
         * @return {?}
         */
        Player.prototype.getDuration = function(id, offset) {
          return this._callFlash("getDuration", id, offset || 0);
        };
        /**
         * @param {number} id
         * @param {number} offset
         * @return {?}
         */
        Player.prototype.getLoaded = function(id, offset) {
          return this._callFlash("getLoaded", id, offset || 0);
        };
        /**
         * @param {string} id
         * @param {?} val
         * @param {number} duration
         * @param {number} offset
         * @return {?}
         */
        Player.prototype.preload = function(id, val, duration, offset) {
          return this._callFlash("preload", id, val, duration && 1e3 * duration, null == offset ? 1 : offset);
        };
        /**
         * @param {!Object} id
         * @param {?} src
         * @param {number} offset
         * @return {?}
         */
        Player.prototype.isPreloaded = function(id, src, offset) {
          return this._callFlash("isPreloaded", id, src, null == offset ? 1 : offset);
        };
        /**
         * @param {?} id
         * @param {number} src
         * @param {number} offset
         * @return {?}
         */
        Player.prototype.isPreloading = function(id, src, offset) {
          return this._callFlash("isPreloading", id, src, null == offset ? 1 : offset);
        };
        /**
         * @param {?} id
         * @param {number} offset
         * @return {?}
         */
        Player.prototype.playPreloaded = function(id, offset) {
          return this._callFlash("playPreloaded", id, null == offset ? 1 : offset);
        };
        /**
         * @param {number} id
         * @param {number} offset
         * @return {?}
         */
        Player.prototype.getSrc = function(id, offset) {
          return this._callFlash("getSrc", id, offset || 0);
        };
        /** @type {function(!Object): undefined} */
        module.exports = Player;
      }, {
        "../logger/logger" : 43
      }],
      12 : [function(require, module, i) {
        var self = new (require("../logger/logger"))("FlashManager");
        var req = require("../config");
        var TagHourlyStat = require("../audio-static");
        var fn = require("./loader");
        var SubmissionsCollection = require("./flash-interface");
        var hostlocalize = require("../lib/async/promise");
        var Deferred = require("../lib/async/deferred");
        var item = require("../error/audio-error");
        var ApiError = require("../lib/net/error/loader-error");
        /**
         * @param {!Object} key
         * @return {undefined}
         */
        var config = function _init(key) {
          if (DEV) {
            self.debug(this, "constructor", key);
          }
          /** @type {string} */
          this.state = "init";
          /** @type {!Object} */
          this.overlay = key;
          /** @type {!Array} */
          this.emmiters = [];
          var deferred = this.deferred = new Deferred;
          this.whenReady = this.deferred.promise();
          var timeout;
          var newMessageListeneners = req.flash.callback.split(".");
          var nowikiIndex = newMessageListeneners.pop();
          /** @type {!Window} */
          var p = window;
          if (newMessageListeneners.forEach(function(v) {
            if (!p[v]) {
              p[v] = {};
            }
            p = p[v];
          }), p[nowikiIndex] = this._onEvent.bind(this), this.__loadTimeout = setTimeout(this._onLoadTimeout.bind(this), req.flash.loadTimeout), fn(req.flash.path + "/" + req.flash.name, req.flash.version, req.flash.playerID, this._onLoad.bind(this), {}, key), key) {
            key.addEventListener("mousedown", function() {
              timeout = timeout || setTimeout(function() {
                deferred.reject(new item(item.FLASH_NOT_RESPONDING));
              }, req.flash.clickTimeout);
            }, true);
          }
          this.whenReady.then(function(sectionId) {
            timeout = timeout && clearTimeout(timeout);
            self.info(this, "ready", sectionId);
          }.bind(this), function(t) {
            self.error(this, "failed", t);
          }.bind(this));
        };
        /** @type {string} */
        config.EVENT_INIT = "init";
        /** @type {string} */
        config.EVENT_FAIL = "failed";
        /** @type {string} */
        config.EVENT_ERROR = "error";
        /** @type {string} */
        config.EVENT_DEBUG = "debug";
        /**
         * @param {!Object} data
         * @return {undefined}
         */
        config.prototype._onLoad = function(data) {
          if (DEV) {
            self.debug(this, "_onLoad", data);
          }
          clearTimeout(this.__loadTimeout);
          delete this.__loadTimeout;
          if (data.success) {
            this.flash = new SubmissionsCollection(data.ref);
            if ("ready" === this.state) {
              this.deferred.resolve(data.ref);
            } else {
              if (!this.overlay) {
                /** @type {number} */
                this.__initTimeout = setTimeout(this._onInitTimeout.bind(this), req.flash.initTimeout);
              }
            }
          } else {
            /** @type {string} */
            this.state = "failed";
            this.deferred.reject(new item(data.__fbn ? item.FLASH_BLOCKER : item.FLASH_UNKNOWN_CRASH));
          }
        };
        /**
         * @return {undefined}
         */
        config.prototype._onLoadTimeout = function() {
          /** @type {string} */
          this.state = "failed";
          this.deferred.reject(new ApiError(ApiError.TIMEOUT));
        };
        /**
         * @return {undefined}
         */
        config.prototype._onInitTimeout = function() {
          /** @type {string} */
          this.state = "failed";
          this.deferred.reject(new item(item.FLASH_INIT_TIMEOUT));
        };
        /**
         * @return {undefined}
         */
        config.prototype._onInit = function() {
          if (DEV) {
            self.debug(this, "_onInit");
          }
          /** @type {string} */
          this.state = "ready";
          if (this.__initTimeout) {
            clearTimeout(this.__initTimeout);
            delete this.__initTimeout;
          }
          if (this.flash) {
            this.deferred.resolve(this.flash);
            /** @type {number} */
            this.__heartbeat = setInterval(this._onHeartBeat.bind(this), 1e3);
          }
        };
        /**
         * @param {string} event
         * @param {!Function} id
         * @param {?} data
         * @param {?} callback
         * @return {?}
         */
        config.prototype._onEvent = function(event, id, data, callback) {
          if ("failed" !== this.state) {
            return event === config.EVENT_DEBUG ? self.info(this, "flashDEBUG", id, data, callback) : event === config.EVENT_ERROR ? self.warn(this, "flashError", id, data, callback) : DEV && self.debug(this, "onEvent", event, id, data), event === config.EVENT_INIT ? this._onInit() : event === config.EVENT_FAIL ? (self.error(this, "failed", item.FLASH_INTERNAL_ERROR), void this.deferred.reject(new item(item.FLASH_INTERNAL_ERROR))) : void(-1 == id ? hostlocalize.resolve().then(function() {
              this.emmiters.forEach(function($mmEvents) {
                $mmEvents.trigger(event, data, callback);
              });
            }.bind(this)) : this.emmiters[id] ? hostlocalize.resolve().then(function() {
              this.emmiters[id].trigger(event, data, callback);
            }.bind(this)) : self.error(this, item.FLASH_EMMITER_NOT_FOUND, id));
          }
          self.warn(this, "onEventFailed", event, id, data, callback);
        };
        /**
         * @return {undefined}
         */
        config.prototype._onHeartBeat = function() {
          try {
            this.flash._heartBeat();
          } catch (e) {
            self.error(this, "crashed", e);
            this._onEvent(TagHourlyStat.EVENT_CRASHED, -1, e);
          }
        };
        /**
         * @param {string} audioFlash
         * @return {?}
         */
        config.prototype.createPlayer = function(audioFlash) {
          if (DEV) {
            self.debug(this, "createPlayer");
          }
          var loadPropPromise = this.whenReady.then(function() {
            return audioFlash.id = this.flash._addPlayer(), this.emmiters[audioFlash.id] = audioFlash, audioFlash.id;
          }.bind(this));
          return loadPropPromise.then(function(t) {
            if (DEV) {
              self.debug(this, "createPlayerSuccess", t);
            }
          }.bind(this), function(t) {
            self.error(this, "createPlayerError", t);
          }.bind(this)), loadPropPromise;
        };
        /** @type {function(!Object): undefined} */
        module.exports = config;
      }, {
        "../audio-static" : 4,
        "../config" : 5,
        "../error/audio-error" : 6,
        "../lib/async/deferred" : 28,
        "../lib/async/promise" : 30,
        "../lib/net/error/loader-error" : 40,
        "../logger/logger" : 43,
        "./flash-interface" : 11,
        "./loader" : 15
      }],
      13 : [function(require, mixin, i) {
        /**
         * @param {!Node} element
         * @return {undefined}
         */
        function remove(element) {
          element.parentNode.removeChild(element);
        }
        var swfobject = require("../lib/browser/swfobject");
        var FlashBlockNotifier = {
          __SWF_WRAPPER_CLASS : "fbn-swf-wrapper",
          __TIMEOUT : 500,
          __TESTS : [function(canCreateDiscussions, vaxes) {
            return vaxes.childNodes.length > 1;
          }, function(verifiedEvent) {
            return verifiedEvent.type && "application/x-shockwave-flash" != verifiedEvent.type;
          }, function(tplDiv) {
            return !tplDiv.parentNode;
          }, function(t) {
            return t.parentNode.className.indexOf("CTFnodisplay") > -1;
          }],
          embedSWF : function init(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, params, attributes, callback, path) {
            if (swfobject) {
              swfobject.addDomLoadEvent(function() {
                /** @type {(Element|null)} */
                var replaceElement = document.getElementById(replaceElemIdStr);
                if (replaceElement) {
                  /** @type {!Element} */
                  var wrapper = document.createElement("div");
                  /** @type {string} */
                  wrapper.className = FlashBlockNotifier.__SWF_WRAPPER_CLASS;
                  replaceElement.parentNode.replaceChild(wrapper, replaceElement);
                  wrapper.appendChild(replaceElement);
                  swfobject.embedSWF(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, params, attributes, function(data) {
                    /**
                     * @param {!Object} data
                     * @return {undefined}
                     */
                    function onFailure(data) {
                      if (false !== path) {
                        swfobject.removeSWF(replaceElemIdStr);
                        remove(wrapper);
                        /** @type {(Element|null)} */
                        var audioElement = document.getElementById("CTFstack");
                        if (audioElement) {
                          remove(audioElement);
                        }
                        /** @type {(Node|null)} */
                        var p = document.body.lastChild;
                        if (p && "ujs_flashblock_placeholder" == p.className) {
                          remove(p);
                        }
                      }
                      /** @type {boolean} */
                      data.success = false;
                      /** @type {boolean} */
                      data.__fbn = true;
                      callback(data);
                    }
                    if (data && false !== data.success) {
                      var el = data.ref;
                      /** @type {boolean} */
                      var s = false;
                      try {
                        s = el && el.getSVGDocument && el.getSVGDocument();
                      } catch (t) {
                      }
                      if (s) {
                        onFailure(data);
                      } else {
                        window.setTimeout(function() {
                          /** @type {!Array} */
                          var TESTS = FlashBlockNotifier.__TESTS;
                          /** @type {number} */
                          var i = 0;
                          /** @type {number} */
                          var j = TESTS.length;
                          for (; i < j; i++) {
                            if (TESTS[i](el, wrapper)) {
                              return void onFailure(data);
                            }
                          }
                          callback(data);
                        }, FlashBlockNotifier.__TIMEOUT);
                      }
                    } else {
                      callback(data);
                    }
                  });
                }
              });
            }
          }
        };
        mixin.exports = FlashBlockNotifier;
      }, {
        "../lib/browser/swfobject" : 33
      }],
      14 : [function(require, mixin, i) {
        var swfobject = require("../lib/browser/swfobject");
        var FlashBlockNotifier = {
          __SWF_WRAPPER_CLASS : "femb-swf-wrapper",
          __TIMEOUT : 500,
          embedSWF : function init(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, params, attributes, callback) {
            swfobject.addDomLoadEvent(function() {
              /** @type {(Element|null)} */
              var replaceElement = document.getElementById(replaceElemIdStr);
              if (replaceElement) {
                /** @type {!Element} */
                var wrapper = document.createElement("div");
                /** @type {string} */
                wrapper.className = FlashBlockNotifier.__SWF_WRAPPER_CLASS;
                replaceElement.parentNode.replaceChild(wrapper, replaceElement);
                wrapper.appendChild(replaceElement);
                swfobject.embedSWF(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, params, attributes, function(data) {
                  if (data && false !== data.success) {
                    var el = data.ref;
                    /** @type {boolean} */
                    var i = false;
                    try {
                      i = el && el.getSVGDocument && el.getSVGDocument();
                    } catch (t) {
                    }
                    if (i) {
                      (function(t) {
                        /** @type {boolean} */
                        t.success = false;
                        callback(t);
                      })(data);
                    } else {
                      window.setTimeout(function() {
                        callback(data);
                      }, FlashBlockNotifier.__TIMEOUT);
                    }
                  } else {
                    callback(data);
                  }
                });
              }
            });
          }
        };
        mixin.exports = FlashBlockNotifier;
      }, {
        "../lib/browser/swfobject" : 33
      }],
      15 : [function(parse, mixin, i) {
        var fooMappings = parse("./flashblocknotifier");
        var FlashBlockNotifier = parse("./flashembedder");
        var ua = parse("../lib/browser/detect");
        /** @type {boolean} */
        var offline = "windows" === ua.platform.os && "safari" === ua.browser.name;
        /**
         * @param {boolean} url
         * @param {string} minVersion
         * @param {(number|string)} id
         * @param {!Function} loadCallback
         * @param {!Object} flashVars
         * @param {!Node} container
         * @param {string} sizeX
         * @param {string} sizeY
         * @return {?}
         */
        mixin.exports = function(url, minVersion, id, loadCallback, flashVars, container, sizeX, sizeY) {
          var embedder;
          var flashSizeX;
          var flashSizeY;
          var options;
          /** @type {!Element} */
          var $flashPlayer = document.createElement("div");
          return $flashPlayer.id = "wrapper_" + id, $flashPlayer.innerHTML = '<div id="' + id + '"></div>', sizeX = sizeX || "1000", sizeY = sizeY || "1000", container && !offline ? (embedder = FlashBlockNotifier, flashSizeX = sizeX, flashSizeY = sizeY, options = {
            allowscriptaccess : "always",
            wmode : "transparent"
          }, $flashPlayer.className = "ya-flash-player-wrapper", $flashPlayer.style.cssText = "position: relative; width: 100%; height: 100%; overflow: hidden;", container.appendChild($flashPlayer)) : (embedder = fooMappings, flashSizeX = flashSizeY = "1", options = {
            allowscriptaccess : "always"
          }, $flashPlayer.style.cssText = "position: absolute; left: -1px; top: -1px; width: 0px; height: 0px; overflow: hidden;", document.body.appendChild($flashPlayer)), embedder.embedSWF(url, id, flashSizeX, flashSizeY, minVersion, "", flashVars, options, {}, loadCallback), $flashPlayer;
        };
      }, {
        "../lib/browser/detect" : 32,
        "./flashblocknotifier" : 13,
        "./flashembedder" : 14
      }],
      16 : [function(canCreateDiscussions, mixin, i) {
        /** @type {!Array} */
        mixin.exports = [60, 170, 310, 600, 1e3, 3e3, 6e3, 12e3, 14e3, 16e3];
      }, {}],
      17 : [function(canCreateDiscussions, mixin, i) {
        /** @type {!Array} */
        mixin.exports = [{
          id : "default",
          preamp : 0,
          bands : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
          id : "Classical",
          preamp : -.5,
          bands : [-.5, -.5, -.5, -.5, -.5, -.5, -3.5, -3.5, -3.5, -4.5]
        }, {
          id : "Club",
          preamp : -3.359999895095825,
          bands : [-.5, -.5, 4, 2.5, 2.5, 2.5, 1.5, -.5, -.5, -.5]
        }, {
          id : "Dance",
          preamp : -2.1599998474121094,
          bands : [4.5, 3.5, 1, -.5, -.5, -2.5, -3.5, -3.5, -.5, -.5]
        }, {
          id : "Full Bass",
          preamp : -3.5999999046325684,
          bands : [4, 4.5, 4.5, 2.5, .5, -2, -4, -5, -5.5, -5.5]
        }, {
          id : "Full Bass & Treble",
          preamp : -5.039999961853027,
          bands : [3.5, 2.5, -.5, -3.5, -2, .5, 4, 5.5, 6, 6]
        }, {
          id : "Full Treble",
          preamp : -6,
          bands : [-4.5, -4.5, -4.5, -2, 1, 5.5, 8, 8, 8, 8]
        }, {
          id : "Laptop Speakers / Headphone",
          preamp : -4.079999923706055,
          bands : [2, 5.5, 2.5, -1.5, -1, .5, 2, 4.5, 6, 7]
        }, {
          id : "Large Hall",
          preamp : -3.5999999046325684,
          bands : [5, 5, 2.5, 2.5, -.5, -2, -2, -2, -.5, -.5]
        }, {
          id : "Live",
          preamp : -2.6399998664855957,
          bands : [-2, -.5, 2, 2.5, 2.5, 2.5, 2, 1, 1, 1]
        }, {
          id : "Party",
          preamp : -2.6399998664855957,
          bands : [3.5, 3.5, -.5, -.5, -.5, -.5, -.5, -.5, 3.5, 3.5]
        }, {
          id : "Pop",
          preamp : -3.119999885559082,
          bands : [-.5, 2, 3.5, 4, 2.5, -.5, -1, -1, -.5, -.5]
        }, {
          id : "Reggae",
          preamp : -4.079999923706055,
          bands : [-.5, -.5, -.5, -2.5, -.5, 3, 3, -.5, -.5, -.5]
        }, {
          id : "Rock",
          preamp : -5.039999961853027,
          bands : [4, 2, -2.5, -4, -1.5, 2, 4, 5.5, 5.5, 5.5]
        }, {
          id : "Ska",
          preamp : -5.519999980926514,
          bands : [-1, -2, -2, -.5, 2, 2.5, 4, 4.5, 5.5, 4.5]
        }, {
          id : "Soft",
          preamp : -4.799999713897705,
          bands : [2, .5, -.5, -1, -.5, 2, 4, 4.5, 5.5, 6]
        }, {
          id : "Soft Rock",
          preamp : -2.6399998664855957,
          bands : [2, 2, 1, -.5, -2, -2.5, -1.5, -.5, 1, 4]
        }, {
          id : "Techno",
          preamp : -3.8399999141693115,
          bands : [4, 2.5, -.5, -2.5, -2, -.5, 4, 4.5, 4.5, 4]
        }];
      }, {}],
      18 : [function(require, module, i) {
        var Events = require("../../lib/async/events");
        var FileTreeViewModel = require("./equalizer-static");
        /**
         * @param {!Array} element
         * @param {!Object} type
         * @param {number} width
         * @return {undefined}
         */
        var api = function Equalizer(element, type, width) {
          Events.call(this);
          /** @type {!Object} */
          this.type = type;
          this.filter = element.createBiquadFilter();
          /** @type {!Object} */
          this.filter.type = type;
          /** @type {number} */
          this.filter.frequency.value = width;
          /** @type {number} */
          this.filter.Q.value = 1;
          /** @type {number} */
          this.filter.gain.value = 0;
        };
        Events.mixin(api);
        /**
         * @return {?}
         */
        api.prototype.getFreq = function() {
          return this.filter.frequency.value;
        };
        /**
         * @return {?}
         */
        api.prototype.getValue = function() {
          return this.filter.gain.value;
        };
        /**
         * @param {number} text
         * @return {undefined}
         */
        api.prototype.setValue = function(text) {
          /** @type {number} */
          this.filter.gain.value = text;
          this.trigger(FileTreeViewModel.EVENT_CHANGE, text);
        };
        /** @type {function(!Array, !Object, number): undefined} */
        module.exports = api;
      }, {
        "../../lib/async/events" : 29,
        "./equalizer-static" : 19
      }],
      19 : [function(canCreateDiscussions, module, i) {
        var storeMixin = {
          EVENT_CHANGE : "change"
        };
        module.exports = storeMixin;
      }, {}],
      20 : [function(require, module, i) {
        var View = require("../../lib/async/events");
        var getTranspilerModule = require("../../lib/data/merge");
        var babel = require("./equalizer-static");
        var Ball = require("./equalizer-band");
        /**
         * @param {!Object} x
         * @param {!Array} p
         * @return {undefined}
         */
        var self = function init(x, p) {
          var prev;
          View.call(this);
          this.preamp = new Ball(x, "highshelf", 0);
          this.preamp.on("*", this._onBandEvent.bind(this, this.preamp));
          p = p || init.DEFAULT_BANDS;
          this.bands = p.map(function(i, o) {
            var band = new Ball(x, 0 == o ? "lowshelf" : o + 1 < p.length ? "peaking" : "highshelf", i);
            return band.on("*", this._onBandEvent.bind(this, band)), prev ? prev.filter.connect(band.filter) : this.preamp.filter.connect(band.filter), prev = band, band;
          }.bind(this));
          this.input = this.preamp.filter;
          this.output = this.bands[this.bands.length - 1].filter;
        };
        View.mixin(self);
        getTranspilerModule(self, babel, true);
        self.DEFAULT_BANDS = require("./default.bands.js");
        self.DEFAULT_PRESETS = require("./default.presets.js");
        /**
         * @param {?} band
         * @param {string} event
         * @param {?} data
         * @return {undefined}
         */
        self.prototype._onBandEvent = function(band, event, data) {
          this.trigger(event, band.getFreq(), data);
        };
        /**
         * @param {!Object} preset
         * @return {undefined}
         */
        self.prototype.loadPreset = function(preset) {
          preset.bands.forEach(function(t, i) {
            this.bands[i].setValue(t);
          }.bind(this));
          this.preamp.setValue(preset.preamp);
        };
        /**
         * @return {?}
         */
        self.prototype.savePreset = function() {
          return {
            preamp : this.preamp.getValue(),
            bands : this.bands.map(function(recB) {
              return recB.getValue();
            })
          };
        };
        /**
         * @return {?}
         */
        self.prototype.guessPreamp = function() {
          /** @type {number} */
          var tt = 0;
          /** @type {number} */
          var i = 0;
          var l = this.bands.length;
          for (; i < l; i++) {
            tt = tt + this.bands[i].getValue();
          }
          return -tt / 2;
        };
        /** @type {function(!Object, !Array): undefined} */
        module.exports = self;
      }, {
        "../../lib/async/events" : 29,
        "../../lib/data/merge" : 37,
        "./default.bands.js" : 16,
        "./default.presets.js" : 17,
        "./equalizer-band" : 18,
        "./equalizer-static" : 19
      }],
      21 : [function(factory, canCreateDiscussions, i) {
        factory("../export");
        ya.music.Audio.fx.Equalizer = factory("./equalizer");
      }, {
        "../export" : 22,
        "./equalizer" : 20
      }],
      22 : [function(saveNotifs, canCreateDiscussions, i) {
        saveNotifs("../export");
        ya.music.Audio.fx = {};
      }, {
        "../export" : 9
      }],
      23 : [function(saveNotifs, canCreateDiscussions, i) {
        saveNotifs("../export");
        ya.music.Audio.fx.volumeLib = saveNotifs("./volume-lib");
      }, {
        "../export" : 22,
        "./volume-lib" : 24
      }],
      24 : [function(canCreateDiscussions, module, i) {
        var self = {
          EPSILON : .01
        };
        /** @type {number} */
        self._DBFS_COEF = 20 / Math.log(10);
        /**
         * @param {number} value
         * @return {?}
         */
        self.toExponent = function(value) {
          /** @type {number} */
          var t = Math.pow(self.EPSILON, 1 - value);
          return t > self.EPSILON ? t : 0;
        };
        /**
         * @param {?} volume
         * @return {?}
         */
        self.fromExponent = function(volume) {
          return 1 - Math.log(Math.max(volume, self.EPSILON)) / Math.log(self.EPSILON);
        };
        /**
         * @param {string} volume
         * @return {?}
         */
        self.toDBFS = function(volume) {
          return Math.log(volume) * self._DBFS_COEF;
        };
        /**
         * @param {number} dbfs
         * @return {?}
         */
        self.fromDBFS = function(dbfs) {
          return Math.exp(dbfs / self._DBFS_COEF);
        };
        module.exports = self;
      }, {}],
      25 : [function(require, module, i) {
        var $ = new (require("../logger/logger"))("AudioHTML5Loader");
        var View = require("../lib/async/events");
        var Promise = require("../lib/async/deferred");
        var evt = require("../audio-static");
        var FileError = require("../error/playback-error");
        var wrapped = require("../lib/noop");
        /** @type {number} */
        var u = 1;
        /**
         * @return {undefined}
         */
        var self = function init() {
          /** @type {number} */
          this.name = u++;
          if (DEV) {
            $.debug(this, "constructor");
          }
          View.call(this);
          this.on("*", function(event) {
            if (event !== evt.EVENT_PROGRESS && DEV) {
              $.debug(this, "onEvent", event);
            }
          }.bind(this));
          this.promises = {};
          /** @type {string} */
          this.src = "";
          /** @type {number} */
          this.position = 0;
          /** @type {number} */
          this.lastUpdate = 0;
          /** @type {boolean} */
          this.notLoading = true;
          /** @type {null} */
          this.output = null;
          this.__startPlay = this._startPlay.bind(this);
          this.__restart = this._restart.bind(this);
          this.__startupAudio = this._startupAudio.bind(this);
          this.__updateProgress = this._updateProgress.bind(this);
          this.__onNativeLoading = this._onNativeLoading.bind(this);
          this.__onNativeEnded = this._onNativeEnded.bind(this);
          this.__onNativeError = this._onNativeError.bind(this);
          this.__onNativePause = this._onNativePause.bind(this);
          this.__onNativePlay = this.trigger.bind(this, evt.EVENT_PLAY);
          this._initAudio();
        };
        View.mixin(self);
        /**
         * @param {?} promise
         * @return {undefined}
         */
        self._catchPromise = function(promise) {
          if (promise && promise.catch) {
            promise.catch(function() {
            });
          }
        };
        /** @type {number} */
        self._updateInterval = 30;
        /** @type {string} */
        self.EVENT_NATIVE_PLAY = "play";
        /** @type {string} */
        self.EVENT_NATIVE_PAUSE = "pause";
        /** @type {string} */
        self.EVENT_NATIVE_TIMEUPDATE = "timeupdate";
        /** @type {string} */
        self.EVENT_NATIVE_ENDED = "ended";
        /** @type {string} */
        self.EVENT_NATIVE_DURATION = "durationchange";
        /** @type {string} */
        self.EVENT_NATIVE_LOADING = "progress";
        /** @type {string} */
        self.EVENT_NATIVE_META = "loadedmetadata";
        /** @type {string} */
        self.EVENT_NATIVE_CANPLAY = "canplay";
        /** @type {string} */
        self.EVENT_NATIVE_ERROR = "error";
        /** @type {string} */
        (self._defaultInitListener = function() {
        }).step = "user";
        /**
         * @return {undefined}
         */
        self.prototype._updateProgress = function() {
          /** @type {number} */
          var currentTime = +new Date;
          if (!(currentTime - this.lastUpdate < self._updateInterval)) {
            /** @type {number} */
            this.lastUpdate = currentTime;
            this.trigger(evt.EVENT_PROGRESS);
          }
        };
        /**
         * @return {undefined}
         */
        self.prototype._onNativeLoading = function() {
          if (this._updateProgress(), this.audio.buffered.length) {
            /** @type {number} */
            var loaded = this.audio.buffered.end(0) - this.audio.buffered.start(0);
            if (this.notLoading && loaded) {
              /** @type {boolean} */
              this.notLoading = false;
              this.trigger(evt.EVENT_LOADING);
            }
            if (loaded >= this.audio.duration - .1) {
              this.trigger(evt.EVENT_LOADED);
            }
          }
        };
        /**
         * @return {undefined}
         */
        self.prototype._onNativeEnded = function() {
          this.trigger(evt.EVENT_PROGRESS);
          this.trigger(evt.EVENT_ENDED);
          /** @type {boolean} */
          this.ended = true;
          /** @type {boolean} */
          this.playing = false;
          self._catchPromise(this.audio.pause());
        };
        /**
         * @param {string} e
         * @return {?}
         */
        self.prototype._onNativeError = function(e) {
          if (this.src) {
            if (2 == this.audio.error.code) {
              return $.warn(this, "Network error. Restarting...", $._showUrl(this.src)), this.position = this.audio.currentTime, void this._restart();
            }
            var error = new FileError(this.audio.error ? FileError.html5[this.audio.error.code] : e instanceof Error ? e.message : e, this.src);
            /** @type {boolean} */
            this.playing = false;
            this.trigger(evt.EVENT_ERROR, error);
          }
        };
        /**
         * @return {undefined}
         */
        self.prototype._onNativePause = function() {
          if (!this.ended) {
            this.trigger(evt.EVENT_PAUSE);
          }
        };
        /**
         * @return {undefined}
         */
        self.prototype._initUserEvents = function() {
          document.body.addEventListener("mousedown", this.__startupAudio, true);
          document.body.addEventListener("keydown", this.__startupAudio, true);
          document.body.addEventListener("touchstart", this.__startupAudio, true);
        };
        /**
         * @return {undefined}
         */
        self.prototype._deinitUserEvents = function() {
          document.body.removeEventListener("mousedown", this.__startupAudio, true);
          document.body.removeEventListener("keydown", this.__startupAudio, true);
          document.body.removeEventListener("touchstart", this.__startupAudio, true);
        };
        /**
         * @return {undefined}
         */
        self.prototype._initNativeEvents = function() {
          this.audio.addEventListener(self.EVENT_NATIVE_PAUSE, this.__onNativePause);
          this.audio.addEventListener(self.EVENT_NATIVE_PLAY, this.__onNativePlay);
          this.audio.addEventListener(self.EVENT_NATIVE_ENDED, this.__onNativeEnded);
          this.audio.addEventListener(self.EVENT_NATIVE_TIMEUPDATE, this.__updateProgress);
          this.audio.addEventListener(self.EVENT_NATIVE_DURATION, this.__updateProgress);
          this.audio.addEventListener(self.EVENT_NATIVE_LOADING, this.__onNativeLoading);
          this.audio.addEventListener(self.EVENT_NATIVE_ERROR, this.__onNativeError);
        };
        /**
         * @return {undefined}
         */
        self.prototype._deinitNativeEvents = function() {
          this.audio.removeEventListener(self.EVENT_NATIVE_PAUSE, this.__onNativePause);
          this.audio.removeEventListener(self.EVENT_NATIVE_PLAY, this.__onNativePlay);
          this.audio.removeEventListener(self.EVENT_NATIVE_ENDED, this.__onNativeEnded);
          this.audio.removeEventListener(self.EVENT_NATIVE_TIMEUPDATE, this.__updateProgress);
          this.audio.removeEventListener(self.EVENT_NATIVE_DURATION, this.__updateProgress);
          this.audio.removeEventListener(self.EVENT_NATIVE_LOADING, this.__onNativeLoading);
          this.audio.removeEventListener(self.EVENT_NATIVE_ERROR, this.__onNativeError);
        };
        /**
         * @return {undefined}
         */
        self.prototype._initAudio = function() {
          if (DEV) {
            $.debug(this, "_initAudio");
          }
          this.muteEvents();
          /** @type {!Element} */
          this.audio = document.createElement("audio");
          /** @type {boolean} */
          this.audio.loop = false;
          /** @type {string} */
          this.audio.preload = this.audio.autobuffer = "auto";
          /** @type {boolean} */
          this.audio.autoplay = false;
          /** @type {string} */
          this.audio.src = "";
          this._initUserEvents();
          /** @type {function(): undefined} */
          this.__initListener = self._defaultInitListener;
          this._initNativeEvents();
        };
        /**
         * @return {undefined}
         */
        self.prototype._deinitAudio = function() {
          if (DEV) {
            $.debug(this, "_deinitAudio");
          }
          this.muteEvents();
          this._deinitUserEvents();
          this._deinitNativeEvents();
          /** @type {null} */
          this.audio = null;
        };
        /**
         * @return {undefined}
         */
        self.prototype._startupAudio = function() {
          if (DEV) {
            $.debug(this, "_startupAudio");
          }
          this._deinitUserEvents();
          this.__initListener = function(settings) {
            if (this.__initListener) {
              this.audio.removeEventListener(self.EVENT_NATIVE_PLAY, this.__initListener);
              this.audio.removeEventListener(self.EVENT_NATIVE_CANPLAY, this.__initListener);
              this.audio.removeEventListener(self.EVENT_NATIVE_META, this.__initListener);
              this.audio.removeEventListener(self.EVENT_NATIVE_ERROR, this.__initListener);
              this.__initListener = function() {
                if (this.__initListener) {
                  this.audio.removeEventListener(self.EVENT_NATIVE_PAUSE, this.__initListener);
                  delete this.__initListener;
                  this.unmuteEvents();
                  $.info(this, "_startupAudio:ready");
                }
              }.bind(this);
              /** @type {string} */
              this.__initListener.step = "pause";
              this.audio.addEventListener(self.EVENT_NATIVE_PAUSE, this.__initListener);
              self._catchPromise(this.audio.pause());
              if (DEV) {
                $.debug(this, "_startupAudio:play", settings.type);
              }
            }
          }.bind(this);
          /** @type {string} */
          this.__initListener.step = "play";
          this.audio.addEventListener(self.EVENT_NATIVE_PLAY, this.__initListener);
          this.audio.addEventListener(self.EVENT_NATIVE_CANPLAY, this.__initListener);
          this.audio.addEventListener(self.EVENT_NATIVE_META, this.__initListener);
          this.audio.addEventListener(self.EVENT_NATIVE_ERROR, this.__initListener);
          self._catchPromise(this.audio.load());
          self._catchPromise(this.audio.play());
        };
        /**
         * @param {string} reason
         * @return {undefined}
         */
        self.prototype._breakStartup = function(reason) {
          this._deinitUserEvents();
          this.unmuteEvents();
          if (this.__initListener) {
            this.audio.removeEventListener(self.EVENT_NATIVE_PLAY, this.__initListener);
            this.audio.removeEventListener(self.EVENT_NATIVE_CANPLAY, this.__initListener);
            this.audio.removeEventListener(self.EVENT_NATIVE_META, this.__initListener);
            this.audio.removeEventListener(self.EVENT_NATIVE_ERROR, this.__initListener);
            this.audio.removeEventListener(self.EVENT_NATIVE_PAUSE, this.__initListener);
            $.warn(this, "_startupAudio:interrupted", this.__initListener.step, reason);
            delete this.__initListener;
          }
        };
        /**
         * @param {string} name
         * @param {!Function} callback
         * @param {!Array} listen
         * @return {?}
         */
        self.prototype._waitFor = function(name, callback, listen) {
          if (!this.promises[name]) {
            var deferred = new Promise;
            if (this.promises[name] = deferred, callback.call(this)) {
              deferred.resolve();
            } else {
              var fn = function() {
                if (callback.call(this)) {
                  deferred.resolve();
                }
              }.bind(this);
              var inspect = function() {
                /** @type {number} */
                var i = 0;
                var l = listen.length;
                for (; i < l; i++) {
                  this.audio.removeEventListener(listen[i], fn);
                }
              }.bind(this);
              /** @type {number} */
              var i = 0;
              var l = listen.length;
              for (; i < l; i++) {
                this.audio.addEventListener(listen[i], fn);
              }
              deferred.promise().then(inspect, inspect);
            }
          }
          return this.promises[name].promise();
        };
        /**
         * @param {string} name
         * @param {!Object} reason
         * @return {undefined}
         */
        self.prototype._cancelWait = function(name, reason) {
          var promise;
          if (promise = this.promises[name]) {
            delete this.promises[name];
            promise.reject(reason);
          }
        };
        /**
         * @param {string} reason
         * @return {undefined}
         */
        self.prototype._abortPromises = function(reason) {
          var key;
          for (key in this.promises) {
            if (this.promises.hasOwnProperty(key)) {
              this._cancelWait(key, reason);
            }
          }
        };
        /** @type {!Array} */
        self._promiseMetadataEvents = [self.EVENT_NATIVE_META, self.EVENT_NATIVE_CANPLAY];
        /**
         * @return {?}
         */
        self.prototype._promiseMetadataCheck = function() {
          return this.audio.readyState > this.audio.HAVE_METADATA;
        };
        /**
         * @return {?}
         */
        self.prototype._promiseMetadata = function() {
          return this._waitFor("metadata", this._promiseMetadataCheck, self._promiseMetadataEvents);
        };
        /** @type {!Array} */
        self._promiseLoadedEvents = [self.EVENT_NATIVE_LOADING];
        /**
         * @return {?}
         */
        self.prototype._promiseLoadedCheck = function() {
          this.__loaderTimer = this.__loaderTimer && clearTimeout(this.__loaderTimer) || setTimeout(function() {
            this._cancelWait("loaded", "timeout");
          }.bind(this), 5e3);
          /** @type {number} */
          var maxAge = Math.min(this.position + 45, this.audio.duration);
          return this.audio.buffered.length && this.audio.buffered.end(0) - this.audio.buffered.start(0) >= maxAge;
        };
        /**
         * @return {?}
         */
        self.prototype._promiseLoaded = function() {
          var promise = this._waitFor("loaded", this._promiseLoadedCheck, self._promiseLoadedEvents);
          return promise.cleanTimer || (promise.cleanTimer = function() {
            this.__loaderTimer = clearTimeout(this.__loaderTimer);
          }.bind(this), promise.then(promise.cleanTimer, promise.cleanTimer)), promise;
        };
        /** @type {!Array} */
        self._promisePlayingEvents = [self.EVENT_NATIVE_TIMEUPDATE];
        /**
         * @return {?}
         */
        self.prototype._promisePlayingCheck = function() {
          /** @type {number} */
          var time = Math.min(this.position + .2, this.audio.duration);
          return this.audio.currentTime >= time;
        };
        /**
         * @return {?}
         */
        self.prototype._promisePlaying = function() {
          return this._waitFor("playing", this._promisePlayingCheck, self._promisePlayingEvents);
        };
        /**
         * @return {?}
         */
        self.prototype._promiseStartPlaying = function() {
          if (!this.promises.startPlaying) {
            var p = new Promise;
            this.promises.startPlaying = p;
            var _takingTooLongTimeout;
            var statusRejected = function(reason) {
              /** @type {boolean} */
              o = true;
              this._cancelWait("startPlaying", reason);
            }.bind(this);
            /** @type {boolean} */
            var o = false;
            /**
             * @return {undefined}
             */
            var inspect = function cleanTimer() {
              clearTimeout(_takingTooLongTimeout);
            };
            this._promisePlaying().then(function() {
              /** @type {boolean} */
              o = true;
              p.resolve();
              $.info(this, "startPlaying:success");
            }.bind(this), statusRejected);
            this._promiseLoaded().then(function() {
              if (!o) {
                /** @type {number} */
                _takingTooLongTimeout = setTimeout(function() {
                  p.reject("timeout");
                  this._cancelWait("playing", "timeout");
                  $.warn(this, "startPlaying:failed");
                }.bind(this), 5e3);
              }
            }.bind(this), statusRejected);
            this._promisePlaying().then(inspect, inspect);
            p.promise().then(inspect, inspect);
          }
          return this.promises.startPlaying.promise();
        };
        /**
         * @param {string} value
         * @return {undefined}
         */
        self.prototype.load = function(value) {
          if (DEV) {
            $.debug(this, "load", value);
          }
          this._abortPromises("load");
          this._breakStartup("load");
          /** @type {boolean} */
          this.ended = false;
          /** @type {boolean} */
          this.playing = false;
          /** @type {boolean} */
          this.notLoading = true;
          /** @type {number} */
          this.position = 0;
          /** @type {string} */
          this.src = value;
          /** @type {string} */
          this.audio.src = value;
          self._catchPromise(this.audio.load());
        };
        /**
         * @return {undefined}
         */
        self.prototype.stop = function() {
          if (DEV) {
            $.debug(this, "stop");
          }
          this._abortPromises("stop");
          this._breakStartup("stop");
          this.load("");
        };
        /**
         * @return {undefined}
         */
        self.prototype._startPlay = function() {
          if (DEV) {
            $.debug(this, "_startPlay");
          }
          this.audio.currentTime = this.position;
          if (this.playing) {
            this._breakStartup("startPlay");
            self._catchPromise(this.audio.play());
            this._promiseStartPlaying().then(function() {
              /** @type {number} */
              this.retry = 0;
            }.bind(this), this.__restart);
          }
        };
        /**
         * @param {string} callback
         * @return {?}
         */
        self.prototype._restart = function(callback) {
          if ($.info(this, "_restart", callback, this.position, this.playing), this.src && (!callback || "timeout" === callback)) {
            if (this.retry++, this.retry > 5) {
              return this.playing = false, void this.trigger(evt.EVENT_ERROR, new FileError(FileError.DONT_START, this.src));
            }
            var position = this.position;
            var wasPlaying = this.playing;
            this.load(this.src);
            if (wasPlaying) {
              this._play(position);
            } else {
              this.setPosition(position);
            }
          }
        };
        /**
         * @param {number} name
         * @return {?}
         */
        self.prototype.play = function(name) {
          return DEV && $.debug(this, "play", name), this.retry = 0, this._play(name);
        };
        /**
         * @param {number} name
         * @return {undefined}
         */
        self.prototype._play = function(name) {
          if (DEV) {
            $.debug(this, "_play", name);
          }
          if (!this.playing) {
            this._breakStartup("play");
            /** @type {boolean} */
            this.ended = false;
            /** @type {boolean} */
            this.playing = true;
            this.position = null == name ? this.position || 0 : name;
            this._promiseMetadata().then(this.__startPlay, wrapped);
          }
        };
        /**
         * @return {undefined}
         */
        self.prototype.pause = function() {
          if (DEV) {
            $.debug(this, "pause");
          }
          /** @type {boolean} */
          this.playing = false;
          this._cancelWait("startPlaying", "pause");
          this._breakStartup("pause");
          self._catchPromise(this.audio.pause());
          this.position = this.audio.currentTime;
        };
        /**
         * @param {number} index
         * @return {undefined}
         */
        self.prototype.setPosition = function(index) {
          if (DEV) {
            $.debug(this, "setPosition", index);
          }
          if (isFinite(index)) {
            /** @type {number} */
            this.position = index;
            this._promiseMetadata().then(function() {
              this.audio.currentTime = this.position;
            }.bind(this), wrapped);
          } else {
            $.warn(this, "setPositionFailed", index);
          }
        };
        /**
         * @param {?} state
         * @return {undefined}
         */
        self.prototype.toggleCrossDomain = function(state) {
          if (state) {
            /** @type {string} */
            this.audio.crossOrigin = "anonymous";
          } else {
            this.audio.removeAttribute("crossOrigin");
          }
          this._restart();
        };
        /**
         * @param {!AudioContext} audioContext
         * @return {undefined}
         */
        self.prototype.createSource = function(audioContext) {
          if (!this.output) {
            if (DEV) {
              $.debug(this, "createSource");
            }
            /** @type {boolean} */
            var e = !this.audio.crossOrigin;
            /** @type {string} */
            this.audio.crossOrigin = "anonymous";
            this.output = audioContext.createMediaElementSource(this.audio);
            this.output.connect(audioContext.destination);
            if (e) {
              this._restart();
            }
          }
        };
        /**
         * @return {undefined}
         */
        self.prototype.destroySource = function() {
          if (this.output) {
            $.warn(this, "destroySource");
            this.output.disconnect();
            /** @type {null} */
            this.output = null;
            this._abortPromises("destroy");
            this._deinitAudio();
            this._initAudio();
            this._startupAudio();
            this._restart();
          }
        };
        /**
         * @return {undefined}
         */
        self.prototype.destroy = function() {
          if (DEV) {
            $.debug(this, "destroy");
          }
          if (this.output) {
            this.output.disconnect();
            /** @type {null} */
            this.output = null;
          }
          this._abortPromises();
          this._deinitAudio();
          /** @type {null} */
          this.__restart = null;
          /** @type {null} */
          this.__startPlay = null;
          /** @type {null} */
          this.promises = null;
        };
        /**
         * @return {?}
         */
        self.prototype._logger = function() {
          return {
            init : !!this.__initListener && this.__initListener.step,
            src : $._showUrl(this.src),
            playing : this.playing,
            ended : this.ended,
            notLoading : this.notLoading,
            position : this.position
          };
        };
        /** @type {function(): undefined} */
        module.exports = self;
      }, {
        "../audio-static" : 4,
        "../error/playback-error" : 8,
        "../lib/async/deferred" : 28,
        "../lib/async/events" : 29,
        "../lib/noop" : 41,
        "../logger/logger" : 43
      }],
      26 : [function(require, canCreateDiscussions, exports) {
        var t = new (require("../logger/logger"))("AudioHTML5");
        var settings = require("../lib/browser/detect");
        var View = require("../lib/async/events");
        var evt = require("../audio-static");
        var JSTestLoader = require("./audio-html5-loader");
        /** @type {number} */
        var l = 1;
        if (exports.available = function() {
          /** @type {boolean} */
          var time = true;
          try {
            var value = document.createElement("audio").canPlayType("audio/mpeg");
            if (!(value && "no" !== value)) {
              t.warn(this, "HTML5 detection failed with reason", value);
              /** @type {boolean} */
              time = false;
            }
          } catch (e) {
            t.warn(this, "HTML5 detection failed with error", e);
            /** @type {boolean} */
            time = false;
          }
          return t.info(this, "detection", time), time;
        }(), settings.platform.mobile || settings.platform.tablet) {
          /** @type {null} */
          audioContext = null;
          t.info(this, "WebAudioAPI not allowed for mobile");
        } else {
          try {
            /** @type {!AudioContext} */
            var audioContext = new AudioContext;
            t.info(this, "WebAudioAPI context created");
          } catch (logger) {
            /** @type {null} */
            audioContext = null;
            t.info(this, "WebAudioAPI not detected");
          }
        }
        /**
         * @return {undefined}
         */
        var self = function finish() {
          /** @type {number} */
          this.name = l++;
          if (DEV) {
            t.debug(this, "constructor");
          }
          View.call(this);
          this.on("*", function(link) {
            if (link !== evt.EVENT_PROGRESS && DEV) {
              t.debug(this, "onEvent", link);
            }
          }.bind(this));
          /** @type {boolean} */
          this.webAudioApi = false;
          /** @type {number} */
          this.activeLoader = 0;
          /** @type {number} */
          this.volume = 1;
          /** @type {!Array} */
          this.loaders = [];
          this._addLoader();
          this._addLoader();
          this._setActive(0);
        };
        View.mixin(self);
        /** @type {string} */
        exports.type = self.type = self.prototype.type = "html5";
        /**
         * @return {undefined}
         */
        self.prototype._addLoader = function() {
          if (DEV) {
            t.debug(this, "_addLoader");
          }
          var self = this;
          var loader = new JSTestLoader;
          /** @type {number} */
          loader.index = this.loaders.push(loader) - 1;
          loader.on("*", function(i, oldValue) {
            /** @type {number} */
            var o = (self.loaders.length + loader.index - self.activeLoader) % self.loaders.length;
            self.trigger(i, o, oldValue);
          });
          if (this.webAudioApi) {
            loader.createSource(audioContext);
          }
        };
        /**
         * @param {number} offset
         * @return {undefined}
         */
        self.prototype._setActive = function(offset) {
          if (DEV) {
            t.debug(this, "_setActive", offset);
          }
          /** @type {number} */
          this.activeLoader = (this.activeLoader + offset) % this.loaders.length;
          this.trigger(evt.EVENT_SWAP, offset);
          if (0 !== offset) {
            this.stop(offset);
          }
        };
        /**
         * @param {number} offset
         * @return {?}
         */
        self.prototype._getLoader = function(offset) {
          return offset = offset || 0, this.loaders[(this.activeLoader + offset) % this.loaders.length];
        };
        /**
         * @param {?} state
         * @return {undefined}
         */
        self.prototype.toggleCrossDomain = function(state) {
          this.loaders.forEach(function(loader) {
            loader.toggleCrossDomain(state);
          });
        };
        /**
         * @param {boolean} state
         * @return {?}
         */
        self.prototype.toggleWebAudioAPI = function(state) {
          return audioContext ? (t.info(this, "toggleWebAudioAPI", state), this.webAudioApi == state || (state ? (this.audioOutput = audioContext.createGain(), this.audioOutput.gain.value = this.volume, this.audioOutput.connect(audioContext.destination), this.preprocessor && this.preprocessor.output.connect(this.audioOutput), this.loaders.forEach(function(loader) {
            /** @type {number} */
            loader.audio.volume = 1;
            loader.createSource(audioContext);
            loader.output.disconnect();
            loader.output.connect(this.preprocessor ? this.preprocessor.input : this.audioOutput);
          }.bind(this))) : this.audioOutput && (this.preprocessor && this.preprocessor.output.disconnect(), this.audioOutput.disconnect(), delete this.audioOutput, this.loaders.forEach(function(self) {
            self.audio.volume = this.volume;
            self.output.disconnect();
            self.output.connect(audioContext.destination);
          }.bind(this))), this.webAudioApi = state), state) : (t.warn(this, "toggleWebAudioAPIError", state), false);
        };
        /**
         * @param {string} preprocessor
         * @return {?}
         */
        self.prototype.setAudioPreprocessor = function(preprocessor) {
          return this.webAudioApi ? (t.info(this, "setAudioPreprocessor"), this.preprocessor === preprocessor || (this.preprocessor && this.preprocessor.output.disconnect(), this.preprocessor = preprocessor, preprocessor ? (this.loaders.forEach(function(p5sound) {
            p5sound.output.disconnect();
            p5sound.output.connect(preprocessor.input);
          }), preprocessor.output.connect(this.audioOutput), true) : (this.loaders.forEach(function(p5sound) {
            p5sound.output.disconnect();
            p5sound.output.connect(this.audioOutput);
          }.bind(this)), true))) : (t.warn(this, "setAudioPreprocessorError", preprocessor), false);
        };
        /**
         * @param {!Function} name
         * @param {?} event
         * @return {undefined}
         */
        self.prototype.play = function(name, event) {
          if (DEV) {
            t.debug(this, "play", name);
          }
          var loader = this._getLoader();
          loader.load(name);
          loader.play(0);
        };
        /**
         * @return {undefined}
         */
        self.prototype.pause = function() {
          if (DEV) {
            t.debug(this, "pause");
          }
          this._getLoader().pause();
        };
        /**
         * @return {undefined}
         */
        self.prototype.resume = function() {
          if (DEV) {
            t.debug(this, "resume");
          }
          this._getLoader().play();
        };
        /**
         * @param {number} offset
         * @return {undefined}
         */
        self.prototype.stop = function(offset) {
          if (DEV) {
            t.debug(this, "stop", offset);
          }
          this._getLoader(offset || 0).stop();
          this.trigger(evt.EVENT_STOP, offset);
        };
        /**
         * @return {?}
         */
        self.prototype.getPosition = function() {
          return this._getLoader().audio.currentTime;
        };
        /**
         * @param {number} x
         * @return {undefined}
         */
        self.prototype.setPosition = function(x) {
          if (DEV) {
            t.debug(this, "setPosition", x);
          }
          this._getLoader().setPosition(x - .001);
        };
        /**
         * @param {number} offset
         * @return {?}
         */
        self.prototype.getDuration = function(offset) {
          return this._getLoader(offset).audio.duration;
        };
        /**
         * @param {number} offset
         * @return {?}
         */
        self.prototype.getLoaded = function(offset) {
          var loader = this._getLoader(offset);
          return loader.audio.buffered.length ? loader.audio.buffered.end(0) - loader.audio.buffered.start(0) : 0;
        };
        /**
         * @return {?}
         */
        self.prototype.getVolume = function() {
          return this.volume;
        };
        /**
         * @param {number} value
         * @return {undefined}
         */
        self.prototype.setVolume = function(value) {
          if (DEV) {
            t.debug(this, "setVolume", value);
          }
          /** @type {number} */
          this.volume = value;
          if (this.webAudioApi) {
            /** @type {number} */
            this.audioOutput.gain.value = value;
          } else {
            this.loaders.forEach(function(ch) {
              /** @type {number} */
              ch.audio.volume = value;
            });
          }
          this.trigger(evt.EVENT_VOLUME);
        };
        /**
         * @param {number} suggestedRate
         * @return {undefined}
         */
        self.prototype.setPlaybackRate = function(suggestedRate) {
          if (!this.webAudioApi) {
            this.loaders.forEach(function(p) {
              /** @type {number} */
              p.audio.playbackRate = suggestedRate;
            });
          }
        };
        /**
         * @param {string} id
         * @param {?} val
         * @param {number} url
         * @return {undefined}
         */
        self.prototype.preload = function(id, val, url) {
          if (DEV) {
            t.debug(this, "preload", id, url);
          }
          url = null == url ? 1 : url;
          this._getLoader(url).load(id);
        };
        /**
         * @param {!Object} src
         * @param {number} offset
         * @return {?}
         */
        self.prototype.isPreloaded = function(src, offset) {
          offset = null == offset ? 1 : offset;
          var loader = this._getLoader(offset);
          return loader.src === src && !loader.notLoading;
        };
        /**
         * @param {?} src
         * @param {number} offset
         * @return {?}
         */
        self.prototype.isPreloading = function(src, offset) {
          return offset = null == offset ? 1 : offset, this._getLoader(offset).src === src;
        };
        /**
         * @param {boolean} offset
         * @return {?}
         */
        self.prototype.playPreloaded = function(offset) {
          if (DEV) {
            t.debug(this, "playPreloaded", offset);
          }
          offset = null == offset ? 1 : offset;
          var loader = this._getLoader(offset);
          return !!loader.src && (this._setActive(offset), loader.play(), true);
        };
        /**
         * @param {number} offset
         * @return {?}
         */
        self.prototype.getSrc = function(offset) {
          return this._getLoader(offset).src;
        };
        /**
         * @return {?}
         */
        self.prototype.isDeviceVolume = function() {
          return settings.onlyDeviceVolume;
        };
        /**
         * @return {?}
         */
        self.prototype._logger = function() {
          try {
            return {
              main : t._showUrl(this.getSrc(0)),
              preloader : t._showUrl(this.getSrc(1))
            };
          } catch (t) {
            return "";
          }
        };
        /** @type {(AudioContext|null)} */
        exports.audioContext = audioContext;
        /** @type {function(): undefined} */
        exports.AudioImplementation = self;
      }, {
        "../audio-static" : 4,
        "../lib/async/events" : 29,
        "../lib/browser/detect" : 32,
        "../logger/logger" : 43,
        "./audio-html5-loader" : 25
      }],
      27 : [function(saveNotifs, module, i) {
        var storeMixin = saveNotifs("./export");
        saveNotifs("./error/export");
        saveNotifs("./lib/net/error/export");
        saveNotifs("./logger/export");
        saveNotifs("./fx/equalizer/export");
        saveNotifs("./fx/volume/export");
        module.exports = storeMixin;
      }, {
        "./error/export" : 7,
        "./export" : 9,
        "./fx/equalizer/export" : 21,
        "./fx/volume/export" : 23,
        "./lib/net/error/export" : 39,
        "./logger/export" : 42
      }],
      28 : [function(require, mixin, i) {
        var Promise = require("./promise");
        var reject = require("../noop");
        /**
         * @return {undefined}
         */
        mixin.exports = function() {
          var callbackTwo = this;
          var promise = new Promise(function(resolve, reject) {
            /** @type {!Function} */
            callbackTwo.resolve = resolve;
            /** @type {!Function} */
            callbackTwo.reject = reject;
          });
          promise.catch(reject);
          /**
           * @return {?}
           */
          this.promise = function() {
            return promise;
          };
        };
      }, {
        "../noop" : 41,
        "./promise" : 30
      }],
      29 : [function(__webpack_require__, module, i) {
        var equal = __webpack_require__("../data/merge");
        /**
         * @return {undefined}
         */
        var EventEmitter = function Audia() {
          this._listeners = {};
          /** @type {boolean} */
          this._muted = false;
        };
        /**
         * @param {!Function} target
         * @return {?}
         */
        EventEmitter.mixin = function(target) {
          return equal(target.prototype, EventEmitter.prototype, true), target;
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        EventEmitter.eventize = function(obj) {
          return equal(obj, EventEmitter.prototype, true), EventEmitter.call(obj), obj;
        };
        /**
         * @param {string} type
         * @param {!Function} fn
         * @return {?}
         */
        EventEmitter.prototype.on = function(type, fn) {
          return this._listeners[type] || (this._listeners[type] = []), this._listeners[type].push(fn), this;
        };
        /**
         * @param {string} type
         * @param {!Function} fn
         * @return {?}
         */
        EventEmitter.prototype.off = function(type, fn) {
          if (!this._listeners[type]) {
            return this;
          }
          if (!fn) {
            return delete this._listeners[type], this;
          }
          var listeners = this._listeners[type];
          /** @type {number} */
          var i = 0;
          var l = listeners.length;
          for (; i < l; i++) {
            if (listeners[i] === fn || listeners[i].callback === fn) {
              listeners.splice(i, 1);
              if (!listeners.length) {
                delete this._listeners[type];
              }
              break;
            }
          }
          return this;
        };
        /**
         * @param {string} type
         * @param {!Function} fn
         * @return {?}
         */
        EventEmitter.prototype.once = function(type, fn) {
          var el = this;
          /**
           * @return {undefined}
           */
          var app = function proxy() {
            el.off(type, proxy);
            fn.apply(this, arguments);
          };
          return app.callback = fn, el.on(type, app), this;
        };
        /**
         * @return {?}
         */
        EventEmitter.prototype.clearListeners = function() {
          var i;
          for (i in this._listeners) {
            if (this._listeners.hasOwnProperty(i)) {
              delete this._listeners[i];
            }
          }
          return this;
        };
        /**
         * @param {string} type
         * @param {?} data
         * @return {?}
         */
        EventEmitter.prototype.trigger = function(type, data) {
          if (this._muted) {
            return this;
          }
          if (data = [].slice.call(arguments, 1), "*" !== type && EventEmitter.prototype.trigger.apply(this, ["*", type].concat(data)), !this._listeners[type]) {
            return this;
          }
          /** @type {!Array<?>} */
          var l = [].concat(this._listeners[type]);
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var il = l.length;
          for (; i < il; i++) {
            l[i].apply(null, data);
          }
          return this;
        };
        /**
         * @param {?} acceptor
         * @return {?}
         */
        EventEmitter.prototype.pipeEvents = function(acceptor) {
          return this.on("*", EventEmitter.prototype.trigger.bind(acceptor)), this;
        };
        /**
         * @return {?}
         */
        EventEmitter.prototype.muteEvents = function() {
          return this._muted = true, this;
        };
        /**
         * @return {?}
         */
        EventEmitter.prototype.unmuteEvents = function() {
          return delete this._muted, this;
        };
        /** @type {function(): undefined} */
        module.exports = EventEmitter;
      }, {
        "../data/merge" : 37
      }],
      30 : [function(require, module, i) {
        var Promise;
        var promise = require("vow");
        var utils = require("../browser/detect");
        var configure = require("../data/merge");
        if ("function" != typeof window.Promise || "msie" === utils.browser.name || "edge" === utils.browser.name) {
          configure(Promise = function animationStartedClosure(cb) {
            var timeMod;
            try {
              timeMod = new promise.Promise(cb);
            } catch (files) {
              timeMod = promise.reject(files);
            }
            return timeMod;
          }, promise.Promise, true);
          Promise.prototype = promise.Promise.prototype;
        } else {
          /** @type {!Function} */
          Promise = window.Promise;
        }
        module.exports = Promise;
      }, {
        "../browser/detect" : 32,
        "../data/merge" : 37,
        vow : 2
      }],
      31 : [function($, mixin, i) {
        var callback = $("../noop");
        var o = $("./promise");
        /**
         * @param {!Object} level
         * @return {?}
         */
        mixin.exports = function(level) {
          var promise = o.reject(level);
          return promise.catch(callback), promise;
        };
      }, {
        "../noop" : 41,
        "./promise" : 30
      }],
      32 : [function(canCreateDiscussions, blob, i) {
        /** @type {string} */
        var ua = navigator.userAgent.toLowerCase();
        /** @type {!Array<string>} */
        var match = /(ucbrowser)\/([\w.]+)/.exec(ua) || /^((?!chrome).)*version\/([\d\w\.]+).*(safari)/.exec(ua) || /(yabrowser)[ \/]([\w.]+)/.exec(ua) || /(edge)\/([\w.]+)/.exec(ua) || /(iemobile)\/([\d\.]+)/.exec(ua) || /(opr|opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];
        var browser = {
          name : match[1] || "",
          version : match[2] || "0"
        };
        if ("safari" === match[3]) {
          /** @type {string} */
          browser.name = match[3];
        }
        if ("msie" === browser.name) {
          if (document.documentMode) {
            browser.documentMode = document.documentMode;
          } else {
            /** @type {number} */
            browser.documentMode = 5;
            if (document.compatMode && "CSS1Compat" === document.compatMode) {
              /** @type {number} */
              browser.documentMode = 7;
            }
          }
        }
        if ("opr" === browser.name) {
          /** @type {string} */
          browser.name = "opera";
        }
        if ("mozilla" === browser.name && "11" === browser.version.split(".")[0]) {
          /** @type {string} */
          browser.name = "msie";
        }
        /** @type {!Array} */
        o = /(windows phone|ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(ua) || [];
        /** @type {!Array<string>} */
        var webkit = /(ipad|playbook)/.exec(ua) || !/(mobile)/.exec(ua) && /(android)/.exec(ua) || [];
        if (o[1]) {
          o[1] = o[1].replace(/\s/g, "_");
        }
        var o = {
          type : o[1] || "",
          tablet : !!webkit[1],
          mobile : o[1] && !webkit[1] || false
        };
        if (!o.type) {
          /** @type {string} */
          o.type = "pc";
        }
        o.os = o.type;
        if ("ipad" === o.type || "iphone" === o.type || "ipod" === o.type) {
          /** @type {string} */
          o.os = "ios";
        } else {
          if ("android" === o.type) {
            /** @type {string} */
            o.os = "android";
          } else {
            if ("windows phone" === o.type || -1 !== navigator.appVersion.indexOf("Win")) {
              /** @type {string} */
              o.os = "windows";
              /** @type {(Array<string>|null)} */
              o.version = navigator.userAgent.match(/win[^ ]* ([^;]*)/i);
              /** @type {(null|string)} */
              o.version = o.version && o.version[1];
            } else {
              if (-1 !== navigator.appVersion.indexOf("Mac")) {
                /** @type {string} */
                o.os = "macos";
              } else {
                if (-1 !== navigator.appVersion.indexOf("X11")) {
                  /** @type {string} */
                  o.os = "unix";
                } else {
                  if (-1 !== navigator.appVersion.indexOf("Linux")) {
                    /** @type {string} */
                    o.os = "linux";
                  }
                }
              }
            }
          }
        }
        /** @type {boolean} */
        var l = true;
        try {
          /** @type {!Element} */
          var elem = document.createElement("audio");
          /** @type {number} */
          elem.volume = .63;
          /** @type {boolean} */
          l = Math.abs(elem.volume - .63) > .01;
        } catch (t) {
          /** @type {boolean} */
          l = true;
        }
        var data = {
          browser : browser,
          platform : o,
          onlyDeviceVolume : l
        };
        blob.exports = data;
      }, {}],
      33 : [function(canCreateDiscussions, context, i) {
        var obj = function() {
          /**
           * @return {undefined}
           */
          function callDomLoadFunctions() {
            if (!isDomLoaded) {
              try {
                /** @type {!Node} */
                var gobel = doc.getElementsByTagName("body")[0].appendChild(createElement("span"));
                gobel.parentNode.removeChild(gobel);
              } catch (t) {
                return;
              }
              /** @type {boolean} */
              isDomLoaded = true;
              /** @type {number} */
              var e = result.length;
              /** @type {number} */
              var j = 0;
              for (; j < e; j++) {
                result[j]();
              }
            }
          }
          /**
           * @param {!Function} fn
           * @return {undefined}
           */
          function addDomLoadEvent(fn) {
            if (isDomLoaded) {
              fn();
            } else {
              /** @type {!Function} */
              result[result.length] = fn;
            }
          }
          /**
           * @param {!Function} fn
           * @return {undefined}
           */
          function init(fn) {
            if (_typeof(win.addEventListener) != UNDEF) {
              win.addEventListener("load", fn, false);
            } else {
              if (_typeof(doc.addEventListener) != UNDEF) {
                doc.addEventListener("load", fn, false);
              } else {
                if (_typeof(win.attachEvent) != UNDEF) {
                  !function(target, eventType, fn) {
                    target.attachEvent(eventType, fn);
                    /** @type {!Array} */
                    listenersArr[listenersArr.length] = [target, eventType, fn];
                  }(win, "onload", fn);
                } else {
                  if ("function" == typeof win.onload) {
                    var fnOld = win.onload;
                    /**
                     * @return {undefined}
                     */
                    win.onload = function() {
                      fnOld();
                      fn();
                    };
                  } else {
                    /** @type {!Function} */
                    win.onload = fn;
                  }
                }
              }
            }
          }
          /**
           * @return {undefined}
           */
          function matchVersions() {
            /** @type {number} */
            var rl = regObjArr.length;
            if (rl > 0) {
              /** @type {number} */
              var i = 0;
              for (; i < rl; i++) {
                var id = regObjArr[i].id;
                var cb = regObjArr[i].callbackFn;
                var cbObj = {
                  success : false,
                  id : id
                };
                if (ua.pv[0] > 0) {
                  var obj = getElementById(id);
                  if (obj) {
                    if (!hasPlayerVersion(regObjArr[i].swfVersion) || ua.wk && ua.wk < 312) {
                      if (regObjArr[i].expressInstall && canExpressInstall()) {
                        var att = {};
                        att.data = regObjArr[i].expressInstall;
                        att.width = obj.getAttribute("width") || "0";
                        att.height = obj.getAttribute("height") || "0";
                        if (obj.getAttribute("class")) {
                          att.styleclass = obj.getAttribute("class");
                        }
                        if (obj.getAttribute("align")) {
                          att.align = obj.getAttribute("align");
                        }
                        var par = {};
                        var res = obj.getElementsByTagName("param");
                        var size = res.length;
                        /** @type {number} */
                        var s = 0;
                        for (; s < size; s++) {
                          if ("movie" != res[s].getAttribute("name").toLowerCase()) {
                            par[res[s].getAttribute("name")] = res[s].getAttribute("value");
                          }
                        }
                        showExpressInstall(att, par, id, cb);
                      } else {
                        displayAltContent(obj);
                        if (cb) {
                          cb(cbObj);
                        }
                      }
                    } else {
                      setVisibility(id, true);
                      if (cb) {
                        /** @type {boolean} */
                        cbObj.success = true;
                        cbObj.ref = getObjectById(id);
                        cb(cbObj);
                      }
                    }
                  }
                } else {
                  if (setVisibility(id, true), cb) {
                    var o = getObjectById(id);
                    if (o && _typeof(o.SetVariable) != UNDEF) {
                      /** @type {boolean} */
                      cbObj.success = true;
                      cbObj.ref = o;
                    }
                    cb(cbObj);
                  }
                }
              }
            }
          }
          /**
           * @param {string} objectIdStr
           * @return {?}
           */
          function getObjectById(objectIdStr) {
            /** @type {null} */
            var r = null;
            var o = getElementById(objectIdStr);
            if (o && "OBJECT" == o.nodeName) {
              if (_typeof(o.SetVariable) != UNDEF) {
                r = o;
              } else {
                var G__20648 = o.getElementsByTagName(OBJECT)[0];
                if (G__20648) {
                  r = G__20648;
                }
              }
            }
            return r;
          }
          /**
           * @return {?}
           */
          function canExpressInstall() {
            return !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac) && !(ua.wk && ua.wk < 312);
          }
          /**
           * @param {!Object} att
           * @param {!Object} par
           * @param {string} replaceElemIdStr
           * @param {string} callbackFn
           * @return {undefined}
           */
          function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {
            /** @type {boolean} */
            isExpressInstallActive = true;
            storedCallbackFn = callbackFn || null;
            storedCallbackObj = {
              success : false,
              id : replaceElemIdStr
            };
            var obj = getElementById(replaceElemIdStr);
            if (obj) {
              if ("OBJECT" == obj.nodeName) {
                storedAltContent = abstractAltContent(obj);
                /** @type {null} */
                storedAltContentId = null;
              } else {
                storedAltContent = obj;
                /** @type {string} */
                storedAltContentId = replaceElemIdStr;
              }
              /** @type {string} */
              att.id = "SWFObjectExprInst";
              if (_typeof(att.width) == UNDEF || !/%$/.test(att.width) && parseInt(att.width, 10) < 310) {
                /** @type {string} */
                att.width = "310";
              }
              if (_typeof(att.height) == UNDEF || !/%$/.test(att.height) && parseInt(att.height, 10) < 137) {
                /** @type {string} */
                att.height = "137";
              }
              /** @type {string} */
              doc.title = doc.title.slice(0, 47) + " - Flash Player Installation";
              /** @type {string} */
              var pt = ua.ie && ua.win ? "ActiveX" : "PlugIn";
              /** @type {string} */
              var fv = "MMredirectURL=" + win.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + pt + "&MMdoctitle=" + doc.title;
              if (_typeof(par.flashvars) != UNDEF ? par.flashvars += "&" + fv : par.flashvars = fv, ua.ie && ua.win && 4 != obj.readyState) {
                var newObj = createElement("div");
                /** @type {string} */
                replaceElemIdStr = replaceElemIdStr + "SWFObjectNew";
                newObj.setAttribute("id", replaceElemIdStr);
                obj.parentNode.insertBefore(newObj, obj);
                /** @type {string} */
                obj.style.display = "none";
                (function() {
                  if (4 == obj.readyState) {
                    obj.parentNode.removeChild(obj);
                  } else {
                    setTimeout(arguments.callee, 10);
                  }
                })();
              }
              createSWF(att, par, replaceElemIdStr);
            }
          }
          /**
           * @param {!Object} obj
           * @return {undefined}
           */
          function displayAltContent(obj) {
            if (ua.ie && ua.win && 4 != obj.readyState) {
              var titleElement = createElement("div");
              obj.parentNode.insertBefore(titleElement, obj);
              titleElement.parentNode.replaceChild(abstractAltContent(obj), titleElement);
              /** @type {string} */
              obj.style.display = "none";
              (function() {
                if (4 == obj.readyState) {
                  obj.parentNode.removeChild(obj);
                } else {
                  setTimeout(arguments.callee, 10);
                }
              })();
            } else {
              obj.parentNode.replaceChild(abstractAltContent(obj), obj);
            }
          }
          /**
           * @param {!Object} obj
           * @return {?}
           */
          function abstractAltContent(obj) {
            var ac = createElement("div");
            if (ua.win && ua.ie) {
              ac.innerHTML = obj.innerHTML;
            } else {
              var amlNode = obj.getElementsByTagName(OBJECT)[0];
              if (amlNode) {
                var n = amlNode.childNodes;
                if (n) {
                  var argl = n.length;
                  /** @type {number} */
                  var i = 0;
                  for (; i < argl; i++) {
                    if (!(1 == n[i].nodeType && "PARAM" == n[i].nodeName || 8 == n[i].nodeType)) {
                      ac.appendChild(n[i].cloneNode(true));
                    }
                  }
                }
              }
            }
            return ac;
          }
          /**
           * @param {!Object} attObj
           * @param {!Object} parObj
           * @param {string} id
           * @return {?}
           */
          function createSWF(attObj, parObj, id) {
            var r;
            var el = getElementById(id);
            if (ua.wk && ua.wk < 312) {
              return r;
            }
            if (el) {
              if (_typeof(attObj.id) == UNDEF && (attObj.id = id), ua.ie && ua.win) {
                /** @type {string} */
                var pix_color = "";
                var i;
                for (i in attObj) {
                  if (attObj[i] != Object.prototype[i]) {
                    if ("data" == i.toLowerCase()) {
                      parObj.movie = attObj[i];
                    } else {
                      if ("styleclass" == i.toLowerCase()) {
                        /** @type {string} */
                        pix_color = pix_color + (' class="' + attObj[i] + '"');
                      } else {
                        if ("classid" != i.toLowerCase()) {
                          /** @type {string} */
                          pix_color = pix_color + (" " + i + '="' + attObj[i] + '"');
                        }
                      }
                    }
                  }
                }
                /** @type {string} */
                var summaryHtml = "";
                var j;
                for (j in parObj) {
                  if (parObj[j] != Object.prototype[j]) {
                    /** @type {string} */
                    summaryHtml = summaryHtml + ('<param name="' + j + '" value="' + parObj[j] + '" />');
                  }
                }
                /** @type {string} */
                el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + pix_color + ">" + summaryHtml + "</object>";
                objIdArr[objIdArr.length] = attObj.id;
                r = getElementById(attObj.id);
              } else {
                var o = createElement(OBJECT);
                var m;
                for (m in o.setAttribute("type", FLASH_MIME_TYPE), attObj) {
                  if (attObj[m] != Object.prototype[m]) {
                    if ("styleclass" == m.toLowerCase()) {
                      o.setAttribute("class", attObj[m]);
                    } else {
                      if ("classid" != m.toLowerCase()) {
                        o.setAttribute(m, attObj[m]);
                      }
                    }
                  }
                }
                var n;
                for (n in parObj) {
                  if (parObj[n] != Object.prototype[n] && "movie" != n.toLowerCase()) {
                    createObjParam(o, n, parObj[n]);
                  }
                }
                el.parentNode.replaceChild(o, el);
                r = o;
              }
            }
            return r;
          }
          /**
           * @param {!Object} el
           * @param {string} pName
           * @param {?} pValue
           * @return {undefined}
           */
          function createObjParam(el, pName, pValue) {
            var p = createElement("param");
            p.setAttribute("name", pName);
            p.setAttribute("value", pValue);
            el.appendChild(p);
          }
          /**
           * @param {string} id
           * @return {undefined}
           */
          function removeSWF(id) {
            var obj = getElementById(id);
            if (obj && "OBJECT" == obj.nodeName) {
              if (ua.ie && ua.win) {
                /** @type {string} */
                obj.style.display = "none";
                (function() {
                  if (4 == obj.readyState) {
                    removeObjectInIE(id);
                  } else {
                    setTimeout(arguments.callee, 10);
                  }
                })();
              } else {
                obj.parentNode.removeChild(obj);
              }
            }
          }
          /**
           * @param {string} id
           * @return {undefined}
           */
          function removeObjectInIE(id) {
            var el = getElementById(id);
            if (el) {
              var prop;
              for (prop in el) {
                if ("function" == typeof el[prop]) {
                  /** @type {null} */
                  el[prop] = null;
                }
              }
              el.parentNode.removeChild(el);
            }
          }
          /**
           * @param {string} id
           * @return {?}
           */
          function getElementById(id) {
            /** @type {null} */
            var el = null;
            try {
              /** @type {(Element|null)} */
              el = doc.getElementById(id);
            } catch (t) {
            }
            return el;
          }
          /**
           * @param {string} el
           * @return {?}
           */
          function createElement(el) {
            return doc.createElement(el);
          }
          /**
           * @param {string} rv
           * @return {?}
           */
          function hasPlayerVersion(rv) {
            var pv = ua.pv;
            var v = rv.split(".");
            return v[0] = parseInt(v[0], 10), v[1] = parseInt(v[1], 10) || 0, v[2] = parseInt(v[2], 10) || 0, pv[0] > v[0] || pv[0] == v[0] && pv[1] > v[1] || pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2];
          }
          /**
           * @param {string} sel
           * @param {string} decl
           * @param {string} media
           * @param {boolean} newStyle
           * @return {undefined}
           */
          function createCSS(sel, decl, media, newStyle) {
            if (!ua.ie || !ua.mac) {
              /** @type {!Element} */
              var el_header = doc.getElementsByTagName("head")[0];
              if (el_header) {
                /** @type {string} */
                var m = media && "string" == typeof media ? media : "screen";
                if (newStyle && (dynamicStylesheet = null, dynamicStylesheetMedia = null), !dynamicStylesheet || dynamicStylesheetMedia != m) {
                  var s = createElement("style");
                  s.setAttribute("type", "text/css");
                  s.setAttribute("media", m);
                  /** @type {!Node} */
                  dynamicStylesheet = el_header.appendChild(s);
                  if (ua.ie && ua.win && _typeof(doc.styleSheets) != UNDEF && doc.styleSheets.length > 0) {
                    /** @type {!StyleSheet} */
                    dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1];
                  }
                  /** @type {string} */
                  dynamicStylesheetMedia = m;
                }
                if (ua.ie && ua.win) {
                  if (dynamicStylesheet && _typeof(dynamicStylesheet.addRule) == OBJECT) {
                    dynamicStylesheet.addRule(sel, decl);
                  }
                } else {
                  if (dynamicStylesheet && _typeof(doc.createTextNode) != UNDEF) {
                    dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
                  }
                }
              }
            }
          }
          /**
           * @param {string} id
           * @param {boolean} isVisible
           * @return {undefined}
           */
          function setVisibility(id, isVisible) {
            if (v) {
              /** @type {string} */
              var v = isVisible ? "visible" : "hidden";
              if (isDomLoaded && getElementById(id)) {
                /** @type {string} */
                getElementById(id).style.visibility = v;
              } else {
                createCSS("#" + id, "visibility:" + v);
              }
            }
          }
          /**
           * @param {string} value
           * @return {?}
           */
          function observe$1(value) {
            return null != /[\\"<>\.;]/.exec(value) && (typeof encodeURIComponent === "undefined" ? "undefined" : _typeof(encodeURIComponent)) != UNDEF ? encodeURIComponent(value) : value;
          }
          var storedAltContent;
          var storedAltContentId;
          var storedCallbackFn;
          var storedCallbackObj;
          var dynamicStylesheet;
          var dynamicStylesheetMedia;
          /** @type {string} */
          var UNDEF = "undefined";
          /** @type {string} */
          var OBJECT = "object";
          /** @type {string} */
          var FLASH_MIME_TYPE = "application/x-shockwave-flash";
          /** @type {!Window} */
          var win = window;
          /** @type {!HTMLDocument} */
          var doc = document;
          /** @type {!Navigator} */
          var nav = navigator;
          /** @type {boolean} */
          var flashDesc = false;
          /** @type {!Array} */
          var result = [function() {
            if (flashDesc) {
              (function() {
                /** @type {!Element} */
                var a = doc.getElementsByTagName("body")[0];
                var o = createElement(OBJECT);
                o.setAttribute("type", FLASH_MIME_TYPE);
                /** @type {!Node} */
                var t = a.appendChild(o);
                if (t) {
                  /** @type {number} */
                  var n = 0;
                  !function() {
                    if (_typeof(t.GetVariable) != UNDEF) {
                      var d = t.GetVariable("$version");
                      if (d) {
                        d = d.split(" ")[1].split(",");
                        /** @type {!Array} */
                        ua.pv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
                      }
                    } else {
                      if (n < 10) {
                        return n++, void setTimeout(arguments.callee, 10);
                      }
                    }
                    a.removeChild(o);
                    /** @type {null} */
                    t = null;
                    matchVersions();
                  }();
                } else {
                  matchVersions();
                }
              })();
            } else {
              matchVersions();
            }
          }];
          /** @type {!Array} */
          var regObjArr = [];
          /** @type {!Array} */
          var objIdArr = [];
          /** @type {!Array} */
          var listenersArr = [];
          /** @type {boolean} */
          var isDomLoaded = false;
          /** @type {boolean} */
          var isExpressInstallActive = false;
          /** @type {boolean} */
          var v = true;
          var ua = function() {
            /** @type {boolean} */
            var w3cdom = _typeof(doc.getElementById) != UNDEF && _typeof(doc.getElementsByTagName) != UNDEF && _typeof(doc.createElement) != UNDEF;
            /** @type {string} */
            var path = nav.userAgent.toLowerCase();
            /** @type {string} */
            var leafToken = nav.platform.toLowerCase();
            /** @type {boolean} */
            var windows = /win/.test(leafToken || path);
            /** @type {boolean} */
            var mac = /mac/.test(leafToken || path);
            /** @type {(boolean|number)} */
            var webkit = !!/webkit/.test(path) && parseFloat(path.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1"));
            /** @type {boolean} */
            var ie = false;
            /** @type {!Array} */
            var playerVersion = [0, 0, 0];
            /** @type {null} */
            var d = null;
            if (_typeof(nav.plugins) != UNDEF && _typeof(nav.plugins["Shockwave Flash"]) == OBJECT) {
              if (!(!(d = nav.plugins["Shockwave Flash"].description) || _typeof(nav.mimeTypes) != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
                /** @type {boolean} */
                flashDesc = true;
                /** @type {boolean} */
                ie = false;
                /** @type {string} */
                d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                /** @type {number} */
                playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
                /** @type {number} */
                playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                /** @type {number} */
                playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
              }
            } else {
              if (_typeof(win.ActiveXObject) != UNDEF) {
                try {
                  var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                  if (a && (d = a.GetVariable("$version"))) {
                    /** @type {boolean} */
                    ie = true;
                    d = d.split(" ")[1].split(",");
                    /** @type {!Array} */
                    playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
                  }
                } catch (t) {
                }
              }
            }
            return {
              w3 : w3cdom,
              pv : playerVersion,
              wk : webkit,
              ie : ie,
              win : windows,
              mac : mac
            };
          }();
          return ua.w3 && ((_typeof(doc.readyState) != UNDEF && "complete" == doc.readyState || _typeof(doc.readyState) == UNDEF && (doc.getElementsByTagName("body")[0] || doc.body)) && callDomLoadFunctions(), isDomLoaded || (_typeof(doc.addEventListener) != UNDEF && doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, false), ua.ie && ua.win && (doc.attachEvent("onreadystatechange", function() {
            if ("complete" == doc.readyState) {
              doc.detachEvent("onreadystatechange", arguments.callee);
              callDomLoadFunctions();
            }
          }), win == top && function() {
            if (!isDomLoaded) {
              try {
                doc.documentElement.doScroll("left");
              } catch (t) {
                return void setTimeout(arguments.callee, 0);
              }
              callDomLoadFunctions();
            }
          }()), ua.wk && function() {
            if (!isDomLoaded) {
              if (/loaded|complete/.test(doc.readyState)) {
                callDomLoadFunctions();
              } else {
                setTimeout(arguments.callee, 0);
              }
            }
          }(), init(callDomLoadFunctions))), ua.ie && ua.win && window.attachEvent("onunload", function() {
            /** @type {number} */
            var ll = listenersArr.length;
            /** @type {number} */
            var i = 0;
            for (; i < ll; i++) {
              listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
            }
            /** @type {number} */
            var il = objIdArr.length;
            /** @type {number} */
            var j = 0;
            for (; j < il; j++) {
              removeSWF(objIdArr[j]);
            }
            var k;
            for (k in ua) {
              /** @type {null} */
              ua[k] = null;
            }
            var key;
            for (key in ua = null, obj) {
              /** @type {null} */
              obj[key] = null;
            }
            /** @type {null} */
            obj = null;
          }), {
            registerObject : function registerObject(objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn) {
              if (ua.w3 && objectIdStr && swfVersionStr) {
                var regObj = {};
                /** @type {string} */
                regObj.id = objectIdStr;
                regObj.swfVersion = swfVersionStr;
                regObj.expressInstall = xiSwfUrlStr;
                /** @type {!Function} */
                regObj.callbackFn = callbackFn;
                regObjArr[regObjArr.length] = regObj;
                setVisibility(objectIdStr, false);
              } else {
                if (callbackFn) {
                  callbackFn({
                    success : false,
                    id : objectIdStr
                  });
                }
              }
            },
            getObjectById : function getObjectById(objectIdStr) {
              if (ua.w3) {
                return getObjectById(objectIdStr);
              }
            },
            embedSWF : function embedSWF(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, obj, o, value, callbackFn) {
              var callbackObj = {
                success : false,
                id : replaceElemIdStr
              };
              if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
                setVisibility(replaceElemIdStr, false);
                addDomLoadEvent(function() {
                  widthStr = widthStr + "";
                  heightStr = heightStr + "";
                  var att = {};
                  if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === OBJECT) {
                    var i;
                    for (i in value) {
                      att[i] = value[i];
                    }
                  }
                  /** @type {string} */
                  att.data = swfUrlStr;
                  /** @type {string} */
                  att.width = widthStr;
                  /** @type {string} */
                  att.height = heightStr;
                  var par = {};
                  if (o && (typeof o === "undefined" ? "undefined" : _typeof(o)) === OBJECT) {
                    var j;
                    for (j in o) {
                      par[j] = o[j];
                    }
                  }
                  if (obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === OBJECT) {
                    var prop;
                    for (prop in obj) {
                      if (_typeof(par.flashvars) != UNDEF) {
                        par.flashvars += "&" + prop + "=" + obj[prop];
                      } else {
                        par.flashvars = prop + "=" + obj[prop];
                      }
                    }
                  }
                  if (hasPlayerVersion(swfVersionStr)) {
                    var obj = createSWF(att, par, replaceElemIdStr);
                    if (att.id == replaceElemIdStr) {
                      setVisibility(replaceElemIdStr, true);
                    }
                    /** @type {boolean} */
                    callbackObj.success = true;
                    callbackObj.ref = obj;
                  } else {
                    if (xiSwfUrlStr && canExpressInstall()) {
                      return att.data = xiSwfUrlStr, void showExpressInstall(att, par, replaceElemIdStr, callbackFn);
                    }
                    setVisibility(replaceElemIdStr, true);
                  }
                  if (callbackFn) {
                    callbackFn(callbackObj);
                  }
                });
              } else {
                if (callbackFn) {
                  callbackFn(callbackObj);
                }
              }
            },
            switchOffAutoHideShow : function switchOffAutoHideShow() {
              /** @type {boolean} */
              v = false;
            },
            ua : ua,
            getFlashPlayerVersion : function sortFn() {
              return {
                major : ua.pv[0],
                minor : ua.pv[1],
                release : ua.pv[2]
              };
            },
            hasFlashPlayerVersion : hasPlayerVersion,
            createSWF : function embedSWF(attObj, parObj, replaceElemIdStr) {
              return ua.w3 ? createSWF(attObj, parObj, replaceElemIdStr) : void 0;
            },
            showExpressInstall : function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {
              if (ua.w3 && canExpressInstall()) {
                showExpressInstall(att, par, replaceElemIdStr, callbackFn);
              }
            },
            removeSWF : function showExpressInstall(replaceElemIdStr) {
              if (ua.w3) {
                removeSWF(replaceElemIdStr);
              }
            },
            createCSS : function createCSS(selStr, declStr, mediaStr, newStyleBoolean) {
              if (ua.w3) {
                createCSS(selStr, declStr, mediaStr, newStyleBoolean);
              }
            },
            addDomLoadEvent : addDomLoadEvent,
            addLoadEvent : init,
            getQueryParamValue : function scoreNextPageLinkCandidate(link) {
              /** @type {string} */
              var value = doc.location.search || doc.location.hash;
              if (value) {
                if (/\?/.test(value) && (value = value.split("?")[1]), null == link) {
                  return observe$1(value);
                }
                /** @type {!Array<string>} */
                var cooks = value.split("&");
                /** @type {number} */
                var i = 0;
                for (; i < cooks.length; i++) {
                  if (cooks[i].substring(0, cooks[i].indexOf("=")) == link) {
                    return observe$1(cooks[i].substring(cooks[i].indexOf("=") + 1));
                  }
                }
              }
              return "";
            },
            expressInstallCallback : function check() {
              if (isExpressInstallActive) {
                var obj = getElementById("SWFObjectExprInst");
                if (obj && storedAltContent) {
                  obj.parentNode.replaceChild(storedAltContent, obj);
                  if (storedAltContentId) {
                    setVisibility(storedAltContentId, true);
                    if (ua.ie && ua.win) {
                      /** @type {string} */
                      storedAltContent.style.display = "block";
                    }
                  }
                  if (storedCallbackFn) {
                    storedCallbackFn(storedCallbackObj);
                  }
                }
                /** @type {boolean} */
                isExpressInstallActive = false;
              }
            }
          };
        }();
        context.exports = obj;
      }, {}],
      34 : [function(__webpack_require__, module, i) {
        var create = __webpack_require__("./pure-instance");
        /**
         * @param {?} name
         * @param {boolean} message
         * @return {undefined}
         */
        var Sub = function ControlError(name, message) {
          /** @type {!Error} */
          var err = new Error(name, message);
          err.name = this.name;
          /** @type {string} */
          this.message = err.message;
          /** @type {string} */
          this.stack = err.stack;
        };
        /**
         * @param {string} name
         * @return {?}
         */
        Sub.create = function(name) {
          var obj = create(this);
          return obj.name = name, obj;
        };
        /** @type {string} */
        (Sub.prototype = create(Error)).name = "ErrorClass";
        /** @type {function(?, boolean): undefined} */
        module.exports = Sub;
      }, {
        "./pure-instance" : 36
      }],
      35 : [function(require, module, i) {
        var EventEmitter = require("../async/events");
        /**
         * @param {!Object} object
         * @return {undefined}
         */
        var Proxy = function mixin(object) {
          if (object) {
            var key;
            for (key in object) {
              if (!("_" === key[0] || "function" != typeof object[key] || object[key] === Object.prototype[key] || object.hasOwnProperty(key) || EventEmitter.prototype.hasOwnProperty(key))) {
                this[key] = object[key].bind(object);
              }
            }
            if (object.pipeEvents) {
              EventEmitter.call(this);
              this.on = EventEmitter.prototype.on;
              this.once = EventEmitter.prototype.once;
              this.off = EventEmitter.prototype.off;
              this.clearListeners = EventEmitter.prototype.clearListeners;
              object.pipeEvents(this);
            }
          }
        };
        /**
         * @param {(Object|string)} from
         * @param {!Function} to
         * @param {number} exclude
         * @return {undefined}
         */
        Proxy.exportStatic = function(from, to, exclude) {
          exclude = exclude || [];
          Object.keys(from).forEach(function(p) {
            if (from.hasOwnProperty(p) && "_" !== p[0] && "prototype" !== p && -1 === exclude.indexOf(p)) {
              to[p] = from[p];
            }
          });
        };
        /**
         * @param {!Object} OriginalClass
         * @param {!Object} ParentProxyClass
         * @param {string} excludeStatic
         * @return {?}
         */
        Proxy.createClass = function(OriginalClass, ParentProxyClass, excludeStatic) {
          var e;
          /**
           * @return {?}
           */
          var ProxyClass = function F() {
            /**
             * @return {undefined}
             */
            var Date = function __streamline$run() {
            };
            Date.prototype = OriginalClass.prototype;
            var original = new Date;
            return OriginalClass.apply(original, arguments), original._proxy();
          };
          /**
           * @return {undefined}
           */
          var ParentProxyClassConstructor = function register() {
          };
          var k;
          for (k in ParentProxyClassConstructor.prototype = (ParentProxyClass || Proxy).prototype, ProxyClass.prototype = new ParentProxyClassConstructor, OriginalClass.prototype) {
            e = OriginalClass.prototype[k];
            if (Object.prototype[k] != e && "function" != typeof e && "_" !== k[0]) {
              ProxyClass.prototype[k] = e;
            }
          }
          return OriginalClass.prototype._proxy = function() {
            return this.__proxy || (this.__proxy = function(raw) {
              /** @type {!o.prototype} */
              var proto = Proxy.prototype;
              Proxy.prototype = ProxyClass.prototype;
              var proxy = new Proxy(raw);
              return Proxy.prototype = proto, proxy;
            }(this)), this.__proxy;
          }, excludeStatic || Proxy.exportStatic(OriginalClass, ProxyClass), ProxyClass;
        };
        /** @type {function(!Object): undefined} */
        module.exports = Proxy;
      }, {
        "../async/events" : 29
      }],
      36 : [function(canCreateDiscussions, mixin, i) {
        /**
         * @param {!Object} d
         * @return {?}
         */
        mixin.exports = function(d) {
          /**
           * @return {undefined}
           */
          var Block = function scopeReadChanged() {
          };
          return Block.prototype = d.prototype, new Block;
        };
      }, {}],
      37 : [function(canCreateDiscussions, mixin, i) {
        /**
         * @param {!Array} obj
         * @return {?}
         */
        mixin.exports = function(obj) {
          var copy;
          var key;
          /** @type {!Array<?>} */
          var result = [].slice.call(arguments, 1);
          if (true === result[result.length - 1]) {
            /** @type {!Array} */
            copy = obj;
            result.pop();
          } else {
            for (key in copy = {}, obj) {
              if (obj.hasOwnProperty(key)) {
                copy[key] = obj[key];
              }
            }
          }
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var inlineCount = result.length;
          for (; i < inlineCount; i++) {
            for (key in result[i]) {
              if (result[i].hasOwnProperty(key)) {
                copy[key] = result[i][key];
              }
            }
          }
          return copy;
        };
      }, {}],
      38 : [function(f, canCreateDiscussions, i) {
        f("../export");
        if (!ya.music.lib) {
          ya.music.lib = {};
        }
        var config = f("./async/events");
        var d = f("./class/error-class");
        var require = f("./class/pure-instance");
        /**
         * @return {undefined}
         */
        var obj = function MockCasper() {
          config.call(this);
        };
        obj.prototype = require(config);
        obj.mixin = config.mixin;
        obj.eventize = config.eventize;
        /**
         * @return {undefined}
         */
        var self = function CanSimpleDocument() {
          d.apply(this, arguments);
        };
        self.prototype = require(d);
        self.create = d.create;
        /** @type {function(): undefined} */
        ya.music.lib.Events = obj;
        /** @type {function(): undefined} */
        ya.music.lib.Error = self;
        ya.music.lib.Promise = f("./async/promise");
        ya.music.lib.Deferred = f("./async/deferred");
        ya.music.lib.pureInstance = require;
        ya.music.lib.merge = f("./data/merge");
        ya.music.info = f("./browser/detect");
      }, {
        "../export" : 9,
        "./async/deferred" : 28,
        "./async/events" : 29,
        "./async/promise" : 30,
        "./browser/detect" : 32,
        "./class/error-class" : 34,
        "./class/pure-instance" : 36,
        "./data/merge" : 37
      }],
      39 : [function(floor, canCreateDiscussions, i) {
        floor("../../../export");
        var startYNew = floor("./loader-error");
        ya.music.Audio.LoaderError = startYNew;
      }, {
        "../../../export" : 9,
        "./loader-error" : 40
      }],
      40 : [function(saveNotifs, module, i) {
        var childResize = saveNotifs("../../class/error-class");
        /**
         * @param {!Array} item
         * @return {undefined}
         */
        var Status = function alterCount(item) {
          childResize.call(this, item);
        };
        Status.prototype = childResize.create("LoaderError");
        /** @type {string} */
        Status.TIMEOUT = "request timeout";
        /** @type {string} */
        Status.FAILED = "request failed";
        /** @type {function(!Array): undefined} */
        module.exports = Status;
      }, {
        "../../class/error-class" : 34
      }],
      41 : [function(canCreateDiscussions, mixin, i) {
        /**
         * @return {undefined}
         */
        mixin.exports = function() {
        };
      }, {}],
      42 : [function(require, canCreateDiscussions, i) {
        require("../export");
        var Logger = require("./logger");
        ya.music.Audio.Logger = Logger;
      }, {
        "../export" : 9,
        "./logger" : 43
      }],
      43 : [function(op, module, i) {
        var noop = op("../lib/noop");
        /**
         * @param {number} reason
         * @return {undefined}
         */
        var self = function getPartialRange(reason) {
          /** @type {number} */
          this.channel = reason;
        };
        /** @type {!Array} */
        self.ignores = [];
        /** @type {!Array} */
        self.logLevels = [];
        self.prototype.debug = noop;
        self.prototype.log = noop;
        self.prototype.info = noop;
        self.prototype.warn = noop;
        self.prototype.error = noop;
        self.prototype.trace = noop;
        /**
         * @param {!Object} url
         * @return {?}
         */
        self.prototype._showUrl = function(url) {
          return self.showUrl(url);
        };
        /**
         * @param {!Object} url
         * @return {?}
         */
        self.showUrl = function(url) {
          return url;
        };
        ["debug", "log", "info", "warn", "error", "trace"].forEach(function(i) {
          /**
           * @return {undefined}
           */
          self.prototype[i] = function() {
            /** @type {!Array<?>} */
            var args = [].slice.call(arguments);
            args.unshift(this.channel);
            args.unshift(i);
            self.log.apply(self, args);
          };
        });
        /**
         * @param {string} i
         * @param {string} name
         * @param {string} value
         * @return {undefined}
         */
        self.log = function(i, name, value) {
          /** @type {!Array<?>} */
          var msg_obj = [].slice.call(arguments, 3).map(function(dumpItem) {
            return dumpItem && dumpItem._logger && dumpItem._logger() || dumpItem;
          });
          var logEntry = {
            timestamp : +new Date,
            level : i,
            channel : name,
            context : value,
            message : msg_obj
          };
          if (!(self.ignores[name] || -1 === self.logLevels.indexOf(i))) {
            self._dumpEntry(logEntry);
          }
        };
        /**
         * @param {!Object} logEntry
         * @return {undefined}
         */
        self._dumpEntry = function(logEntry) {
          try {
            var level = logEntry.level;
            var mixElem = logEntry.context && (logEntry.context.taskName || logEntry.context.name);
            var pattern = logEntry.context && (logEntry.context._logger ? logEntry.context._logger() : "");
            if ("function" != typeof console[level]) {
              console.log.apply(console, [level.toUpperCase(), self._formatTimestamp(logEntry.timestamp), "[" + logEntry.channel + (mixElem ? ":" + mixElem : "") + "]", pattern].concat(logEntry.message));
            } else {
              console[level].apply(console, [self._formatTimestamp(logEntry.timestamp), "[" + logEntry.channel + (mixElem ? ":" + mixElem : "") + "]", pattern].concat(logEntry.message));
            }
          } catch (t) {
          }
        };
        /**
         * @param {?} timestamp
         * @return {?}
         */
        self._formatTimestamp = function(timestamp) {
          /** @type {!Date} */
          var d = new Date(timestamp);
          /** @type {number} */
          var x = d.getMilliseconds();
          return x = x > 100 ? x : x > 10 ? "0" + x : "00" + x, d.toLocaleTimeString() + "." + x;
        };
        /** @type {function(number): undefined} */
        module.exports = self;
      }, {
        "../lib/noop" : 41
      }]
    }, {}, [27]);
  }).call(this, __webpack_require__(3).setImmediate);
}, function(canCreateDiscussions, exports, moment) {
  (function(root) {
    /**
     * @param {string} id
     * @param {!Function} clearFn
     * @return {undefined}
     */
    function Timeout(id, clearFn) {
      /** @type {string} */
      this._id = id;
      /** @type {!Function} */
      this._clearFn = clearFn;
    }
    var target = void 0 !== root && root || "undefined" != typeof self && self || window;
    /** @type {function(this:!Function, ...*): *} */
    var apply = Function.prototype.apply;
    /**
     * @return {?}
     */
    exports.setTimeout = function() {
      return new Timeout(apply.call(setTimeout, target, arguments), clearTimeout);
    };
    /**
     * @return {?}
     */
    exports.setInterval = function() {
      return new Timeout(apply.call(setInterval, target, arguments), clearInterval);
    };
    /** @type {function(!Object): undefined} */
    exports.clearTimeout = exports.clearInterval = function(n) {
      if (n) {
        n.close();
      }
    };
    /** @type {function(): undefined} */
    Timeout.prototype.unref = Timeout.prototype.ref = function() {
    };
    /**
     * @return {undefined}
     */
    Timeout.prototype.close = function() {
      this._clearFn.call(target, this._id);
    };
    /**
     * @param {?} item
     * @param {number} msecs
     * @return {undefined}
     */
    exports.enroll = function(item, msecs) {
      clearTimeout(item._idleTimeoutId);
      /** @type {number} */
      item._idleTimeout = msecs;
    };
    /**
     * @param {?} item
     * @return {undefined}
     */
    exports.unenroll = function(item) {
      clearTimeout(item._idleTimeoutId);
      /** @type {number} */
      item._idleTimeout = -1;
    };
    /** @type {function(!Object): undefined} */
    exports._unrefActive = exports.active = function(item) {
      clearTimeout(item._idleTimeoutId);
      var msecs = item._idleTimeout;
      if (msecs >= 0) {
        /** @type {number} */
        item._idleTimeoutId = setTimeout(function() {
          if (item._onTimeout) {
            item._onTimeout();
          }
        }, msecs);
      }
    };
    moment(4);
    exports.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== root && root.setImmediate || this && this.setImmediate;
    exports.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== root && root.clearImmediate || this && this.clearImmediate;
  }).call(this, moment(0));
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  (function(b, $process) {
    !function(global, i) {
      /**
       * @param {!Array} name
       * @return {undefined}
       */
      function clear(name) {
        delete window[name];
      }
      /**
       * @param {?} key
       * @return {undefined}
       */
      function callback(key) {
        if (c) {
          setTimeout(callback, 0, key);
        } else {
          var val = window[key];
          if (val) {
            /** @type {boolean} */
            c = true;
            try {
              !function(spec) {
                var fn = spec.callback;
                var args = spec.args;
                switch(args.length) {
                  case 0:
                    fn();
                    break;
                  case 1:
                    fn(args[0]);
                    break;
                  case 2:
                    fn(args[0], args[1]);
                    break;
                  case 3:
                    fn(args[0], args[1], args[2]);
                    break;
                  default:
                    fn.apply(void 0, args);
                }
              }(val);
            } finally {
              clear(key);
              /** @type {boolean} */
              c = false;
            }
          }
        }
      }
      if (!global.setImmediate) {
        var createElement;
        var docEl;
        var channel;
        var prefix;
        var unloadHandler;
        /** @type {number} */
        var type = 1;
        var window = {};
        /** @type {boolean} */
        var c = false;
        var doc = global.document;
        /** @type {(Object|null)} */
        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
        if ("[object process]" === {}.toString.call(global.process)) {
          /**
           * @param {number} src
           * @return {undefined}
           */
          createElement = function fromSrc(src) {
            $process.nextTick(function() {
              callback(src);
            });
          };
        } else {
          if (!function() {
            if (global.postMessage && !global.importScripts) {
              /** @type {boolean} */
              var e = true;
              var oldOnMessage = global.onmessage;
              return global.onmessage = function() {
                /** @type {boolean} */
                e = false;
              }, global.postMessage("", "*"), global.onmessage = oldOnMessage, e;
            }
          }()) {
            if (global.MessageChannel) {
              /**
               * @param {!Object} event
               * @return {undefined}
               */
              (channel = new MessageChannel).port1.onmessage = function(event) {
                callback(event.data);
              };
              /**
               * @param {number} name
               * @return {undefined}
               */
              createElement = function sendMessage(name) {
                channel.port2.postMessage(name);
              };
            } else {
              if (doc && "onreadystatechange" in doc.createElement("script")) {
                docEl = doc.documentElement;
                /**
                 * @param {number} src
                 * @return {undefined}
                 */
                createElement = function loadSdkAsync(src) {
                  var el = doc.createElement("script");
                  /**
                   * @return {undefined}
                   */
                  el.onreadystatechange = function() {
                    callback(src);
                    /** @type {null} */
                    el.onreadystatechange = null;
                    docEl.removeChild(el);
                    /** @type {null} */
                    el = null;
                  };
                  docEl.appendChild(el);
                };
              } else {
                /**
                 * @param {number} reason
                 * @return {undefined}
                 */
                createElement = function tryAgainInCaseThereWasALag(reason) {
                  setTimeout(callback, 0, reason);
                };
              }
            }
          } else {
            /** @type {string} */
            prefix = "setImmediate$" + Math.random() + "$";
            /**
             * @param {!Object} props
             * @return {undefined}
             */
            unloadHandler = function a(props) {
              if (props.source === global && "string" == typeof props.data && 0 === props.data.indexOf(prefix)) {
                callback(+props.data.slice(prefix.length));
              }
            };
            if (global.addEventListener) {
              global.addEventListener("message", unloadHandler, false);
            } else {
              global.attachEvent("onmessage", unloadHandler);
            }
            /**
             * @param {number} name
             * @return {undefined}
             */
            createElement = function RequestChannel(name) {
              global.postMessage(prefix + name, "*");
            };
          }
        }
        /**
         * @param {!Object} fn
         * @return {?}
         */
        attachTo.setImmediate = function(fn) {
          if ("function" != typeof fn) {
            /** @type {!Function} */
            fn = new Function("" + fn);
          }
          /** @type {!Array} */
          var args = new Array(arguments.length - 1);
          /** @type {number} */
          var i = 0;
          for (; i < args.length; i++) {
            args[i] = arguments[i + 1];
          }
          var listener = {
            callback : fn,
            args : args
          };
          return window[type] = listener, createElement(type), type++;
        };
        /** @type {function(!Array): undefined} */
        attachTo.clearImmediate = clear;
      }
    }("undefined" == typeof self ? void 0 === b ? this : b : self);
  }).call(this, __webpack_require__(0), __webpack_require__(5));
}, function(mixin, canCreateDiscussions) {
  /**
   * @return {?}
   */
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  /**
   * @return {?}
   */
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  /**
   * @param {!Function} fun
   * @return {?}
   */
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      return cachedSetTimeout = setTimeout, setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function cleanUpNextTick() {
    if (c && currentQueue) {
      /** @type {boolean} */
      c = false;
      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        /** @type {number} */
        queueIndex = -1;
      }
      if (queue.length) {
        drainQueue();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function drainQueue() {
    if (!c) {
      var timeout = runTimeout(cleanUpNextTick);
      /** @type {boolean} */
      c = true;
      var len = queue.length;
      for (; len;) {
        currentQueue = queue;
        /** @type {!Array} */
        queue = [];
        for (; ++queueIndex < len;) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }
        /** @type {number} */
        queueIndex = -1;
        /** @type {number} */
        len = queue.length;
      }
      /** @type {null} */
      currentQueue = null;
      /** @type {boolean} */
      c = false;
      (function(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          return cachedClearTimeout = clearTimeout, clearTimeout(marker);
        }
        try {
          cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      })(timeout);
    }
  }
  /**
   * @param {(Object|string)} fun
   * @param {!Array} array
   * @return {undefined}
   */
  function Item(fun, array) {
    /** @type {(Object|string)} */
    this.fun = fun;
    /** @type {!Array} */
    this.array = array;
  }
  /**
   * @return {undefined}
   */
  function noop() {
  }
  var cachedSetTimeout;
  var cachedClearTimeout;
  var process = mixin.exports = {};
  !function() {
    try {
      /** @type {!Function} */
      cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
    } catch (t) {
      /** @type {function(): ?} */
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      /** @type {!Function} */
      cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
    } catch (t) {
      /** @type {function(): ?} */
      cachedClearTimeout = defaultClearTimeout;
    }
  }();
  var currentQueue;
  /** @type {!Array} */
  var queue = [];
  /** @type {boolean} */
  var c = false;
  /** @type {number} */
  var queueIndex = -1;
  /**
   * @param {!Function} fun
   * @return {undefined}
   */
  process.nextTick = function(fun) {
    /** @type {!Array} */
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (!(1 !== queue.length || c)) {
      runTimeout(drainQueue);
    }
  };
  /**
   * @return {undefined}
   */
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  /** @type {string} */
  process.title = "browser";
  /** @type {boolean} */
  process.browser = true;
  process.env = {};
  /** @type {!Array} */
  process.argv = [];
  /** @type {string} */
  process.version = "";
  process.versions = {};
  /** @type {function(): undefined} */
  process.on = noop;
  /** @type {function(): undefined} */
  process.addListener = noop;
  /** @type {function(): undefined} */
  process.once = noop;
  /** @type {function(): undefined} */
  process.off = noop;
  /** @type {function(): undefined} */
  process.removeListener = noop;
  /** @type {function(): undefined} */
  process.removeAllListeners = noop;
  /** @type {function(): undefined} */
  process.emit = noop;
  /** @type {function(): undefined} */
  process.prependListener = noop;
  /** @type {function(): undefined} */
  process.prependOnceListener = noop;
  /**
   * @param {?} type
   * @return {?}
   */
  process.listeners = function(type) {
    return [];
  };
  /**
   * @param {?} name
   * @return {?}
   */
  process.binding = function(name) {
    throw new Error("process.binding is not supported");
  };
  /**
   * @return {?}
   */
  process.cwd = function() {
    return "/";
  };
  /**
   * @param {?} dir
   * @return {?}
   */
  process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  /**
   * @return {?}
   */
  process.umask = function() {
    return 0;
  };
}, function(module, canCreateDiscussions, factory) {
  var c = factory(7);
  var result = factory(8);
  if ("string" == typeof(result = result.__esModule ? result.default : result)) {
    /** @type {!Array} */
    result = [[module.i, result, ""]];
  }
  var res = {
    insert : "head",
    singleton : false
  };
  c(result, res);
  module.exports = result.locals || {};
}, function(mixin, canCreateDiscussions, data) {
  /**
   * @param {string} b
   * @return {?}
   */
  function a(b) {
    /** @type {number} */
    var key = -1;
    /** @type {number} */
    var i = 0;
    for (; i < touches.length; i++) {
      if (touches[i].identifier === b) {
        /** @type {number} */
        key = i;
        break;
      }
    }
    return key;
  }
  /**
   * @param {!NodeList} tags
   * @param {!Object} options
   * @return {?}
   */
  function create(tags, options) {
    var pstack = {};
    /** @type {!Array} */
    var mod = [];
    /** @type {number} */
    var j = 0;
    for (; j < tags.length; j++) {
      var item = tags[j];
      var level = options.base ? item[0] + options.base : item[0];
      var pos = pstack[level] || 0;
      /** @type {string} */
      var type = "".concat(level, " ").concat(pos);
      pstack[level] = pos + 1;
      var i = a(type);
      var result = {
        css : item[1],
        media : item[2],
        sourceMap : item[3]
      };
      if (-1 !== i) {
        touches[i].references++;
        touches[i].updater(result);
      } else {
        touches.push({
          identifier : type,
          updater : render(result, options),
          references : 1
        });
      }
      mod.push(type);
    }
    return mod;
  }
  /**
   * @param {!Object} line
   * @return {?}
   */
  function update(line) {
    /** @type {!Element} */
    var el = document.createElement("style");
    var attrs = line.attributes || {};
    if (void 0 === attrs.nonce) {
      var value = data.nc;
      if (value) {
        attrs.nonce = value;
      }
    }
    if (Object.keys(attrs).forEach(function(att) {
      el.setAttribute(att, attrs[att]);
    }), "function" == typeof line.insert) {
      line.insert(el);
    } else {
      var api_args = $(line.insert || "head");
      if (!api_args) {
        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      }
      api_args.appendChild(el);
    }
    return el;
  }
  /**
   * @param {!Node} self
   * @param {?} index
   * @param {boolean} remove
   * @param {!Object} options
   * @return {undefined}
   */
  function init(self, index, remove, options) {
    var css = remove ? "" : options.media ? "@media ".concat(options.media, " {").concat(options.css, "}") : options.css;
    if (self.styleSheet) {
      self.styleSheet.cssText = replaceText(index, css);
    } else {
      /** @type {!Text} */
      var root = document.createTextNode(css);
      var nodes = self.childNodes;
      if (nodes[index]) {
        self.removeChild(nodes[index]);
      }
      if (nodes.length) {
        self.insertBefore(root, nodes[index]);
      } else {
        self.appendChild(root);
      }
    }
  }
  /**
   * @param {!Node} style
   * @param {?} data
   * @param {!Object} obj
   * @return {undefined}
   */
  function applyToTag(style, data, obj) {
    var css = obj.css;
    var media = obj.media;
    var sourceMap = obj.sourceMap;
    if (media ? style.setAttribute("media", media) : style.removeAttribute("media"), sourceMap && btoa && (css = css + "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */")), style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      for (; style.firstChild;) {
        style.removeChild(style.firstChild);
      }
      style.appendChild(document.createTextNode(css));
    }
  }
  /**
   * @param {!Function} obj
   * @param {!Object} options
   * @return {?}
   */
  function render(obj, options) {
    var style;
    var view;
    var remove;
    if (options.singleton) {
      /** @type {number} */
      var styleIndex = singletonCounter++;
      style = result || (result = update(options));
      view = init.bind(null, style, styleIndex, false);
      remove = init.bind(null, style, styleIndex, true);
    } else {
      style = update(options);
      view = applyToTag.bind(null, style, options);
      /**
       * @return {undefined}
       */
      remove = function remove() {
        !function(elem) {
          if (null === elem.parentNode) {
            return false;
          }
          elem.parentNode.removeChild(elem);
        }(style);
      };
    }
    return view(obj), function(newObj) {
      if (newObj) {
        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
          return;
        }
        view(obj = newObj);
      } else {
        remove();
      }
    };
  }
  var sslIsInitialized;
  /**
   * @return {?}
   */
  var isOldIE = function fadeOutLast() {
    return void 0 === sslIsInitialized && (sslIsInitialized = Boolean(window && document && document.all && !window.atob)), sslIsInitialized;
  };
  var $ = function() {
    var elMap = {};
    return function(id) {
      if (void 0 === elMap[id]) {
        /** @type {(Element|null)} */
        var el = document.querySelector(id);
        if (window.HTMLIFrameElement && el instanceof window.HTMLIFrameElement) {
          try {
            el = el.contentDocument.head;
          } catch (t) {
            /** @type {null} */
            el = null;
          }
        }
        elMap[id] = el;
      }
      return elMap[id];
    };
  }();
  /** @type {!Array} */
  var touches = [];
  var textStore;
  /** @type {function(?, ?): ?} */
  var replaceText = (textStore = [], function(index, replacement) {
    return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
  });
  /** @type {null} */
  var result = null;
  /** @type {number} */
  var singletonCounter = 0;
  /**
   * @param {!Array} child
   * @param {!Object} options
   * @return {?}
   */
  mixin.exports = function(child, options) {
    if (!((options = options || {}).singleton || "boolean" == typeof options.singleton)) {
      options.singleton = isOldIE();
    }
    var data = create(child = child || [], options);
    return function(tags) {
      if (tags = tags || [], "[object Array]" === Object.prototype.toString.call(tags)) {
        /** @type {number} */
        var c = 0;
        for (; c < data.length; c++) {
          var i = a(data[c]);
          touches[i].references--;
        }
        var result = create(tags, options);
        /** @type {number} */
        var h = 0;
        for (; h < data.length; h++) {
          var i = a(data[h]);
          if (0 === touches[i].references) {
            touches[i].updater();
            touches.splice(i, 1);
          }
        }
        data = result;
      }
    };
  };
}, function(prevResidue, res, i) {
  i.r(res);
  var x = i(1);
  var content = i.n(x)()(false);
  content.push([prevResidue.i, "[class*=\"bbl_\"]{\n    box-sizing: border-box;\n}\n.bbl_player_main {\n    width: 100%;\n    font-family: sans-serif;\n}\n.bbl_player_main::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n.bbl_player_cover {\n    height: 193px;\n    width: 220px;\n    vertical-align: middle;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    margin: auto;\n}\n.bbl-timer-inputs label {\n    display: block;\n    color: #494949;\n    text-transform: uppercase;\n}\n.bbl-timer-inputs input:focus {\n    outline: 0;\n}\n.bbl-timer-inputs input {\n    line-height: 1.65;\n    display: block;\n    padding: 7px 14px;\n    margin: auto;\n    border: 1px solid #eee;\n    font-size: 16px;\n}\n.bbl_player_cover .bbl_label {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n}\n.bbl_cover_block {\n    float: left;\n    display: block;\n}\n.bbl_buy_btns_block {\n    padding: 15px;\n    width: 190px;\n    margin: auto;\n}\n.bbl_player_body {\n    float: left;\n    min-width: 530px;\n}\n.bbl_player_clearfix {\n    display: block;\n    clear: both;\n    content: \"\";\n}\n.bbl_player_controls {\n    margin: 20px;\n    clear: both;\n}\n.bbl_btn {\n    box-shadow:inset 0px 1px 0px 0px #54a3f7;\n\tbackground-color:#007dc1;\n\tborder-radius:3px;\n\tborder:1px solid #124d77;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-size:13px;\n\tpadding:6px 24px;\n\ttext-decoration:none;\n    text-shadow:0px 1px 0px #154682;\n    vertical-align: middle;\n    margin: 0px 5px;\n}\n.bbl_btn:hover {\n\tbackground-color:#0061a7;\n}\n.bbl_btn:active {\n    position:relative;\n\ttop:1px;\n}\n.bbl_player_chapters {\n    overflow-y: auto;\n    display: block;\n    clear: both;\n    border: #999999 solid 1px;\n    border-radius: 3px;\n    margin-top: 15px;\n    max-height: 200px;\n    font-size: 10pt;\n}\n.bbl_player_chapter.active,\n.bbl_player_chapter.notactive {\n    cursor: pointer;\n}\n.bbl_player_chapter.active {\n    background-color: rgba(68, 152, 197, 0.3);\n    color: #0081c5;\n}\n.bbl_player_chapter.notactive {\n    background-color: rgba(0,129,197,0.3);\n    color: rgba(0,129,197,0.5);\n}\n.bbl_player_chapter.block {\n    background-color: #edf0f5;\n    color: #999;\n}\n.bbl_player_chapter {\n    display: block;\n    clear: both;\n    padding: 15px;\n    font-size: 10pt;\n}\n.bbl_player_chapter_title {\n    display: block;\n    float: left;\n    font-weight: bold;\n}\n.bbl_player_chapter_time {\n    display: block;\n    float: right;\n}\n.playicon {\n    content: url('https://pub-cdn.bibliovk.ru/referals/images/play-solid.svg');\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1;\n    width: 18px;\n    filter: invert(100%);\n}\n.pauseicon {\n    content: url('https://pub-cdn.bibliovk.ru/referals/images/pause-solid.svg');\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1;\n    width: 18px;\n    filter: invert(100%);\n}\n.backwardicon {\n    content: url('https://pub-cdn.bibliovk.ru/referals/images/backward-solid.svg');\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1;\n    width: 9px;\n    filter: invert(100%);\n}\n.forwardicon {\n    content: url('https://pub-cdn.bibliovk.ru/referals/images/forward-solid.svg');\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1;\n    width: 9px;\n    filter: invert(100%);\n}\n.timericon {\n    content: url('https://pub-cdn.bibliovk.ru/referals/images/stopwatch-solid.svg');\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1;\n    width: 13px;\n    filter: invert(100%);\n}\n.bbl-overlay {\n    visibility: hidden;\n    position: fixed;\n    font-family: sans-serif;\n    left: 0px;\n    top: 0px;\n    width:100%;\n    height:100%;\n    text-align:center;\n    z-index: 1000;\n    background-color: rgba(0,0,0,0.6);\n}\n.bbl-timer-modal {\n    width: 40%;\n    height: 300px;\n    background-color: white;\n    display: block;\n    margin: 30px auto;\n    padding: 20px;\n    position: relative;\n}\n.bbl-timer-modal h3 {\n    color: #484848;\n    margin: 0px;\n}\n.bbl-timer-modal h4 {\n    color: #9b9c9e;\n    margin: 0px;\n    margin-top: 5px;\n}\n.closeicon {\n    content: url('https://pub-cdn.bibliovk.ru/referals/images/window-close-solid.svg');\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1;\n    width: 13px;\n}\n.close-modal {\n    position: absolute;\n    right: 1px;\n    top: 1px;\n    width: 20px;\n    cursor: pointer;\n}\n.selectbox {\n    display: inline-block;\n    margin-left: 5px;\n  }\n  \n.selectbox select {\n    background-color: #0563af;\n    color: white;\n    padding: 7px;\n    border: none;\n    font-size: 13px;\n    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);\n    -webkit-appearance: button;\n    appearance: button;\n    outline: none;\n    border-radius:3px;\n\tborder:1px solid #124d77;\n}\n  \n.selectbox::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 20%;\n    height: 100%;\n    text-align: center;\n    font-size: 28px;\n    line-height: 45px;\n    color: rgba(255, 255, 255, 0.5);\n    background-color: rgba(255, 255, 255, 0.1);\n    pointer-events: none;\n}\n  \n.selectbox:hover::before {\n    color: rgba(255, 255, 255, 0.6);\n    background-color: rgba(255, 255, 255, 0.2);\n}\n  \n.selectbox select option {\n    padding: 30px;\n}\n\n.bbl_btn_green {\n\tbox-shadow:inset 0px 1px 0px 0px #9acc85;\n\tbackground-color:#74ad5a;\n\tborder:1px solid #3b6e22;\n\tdisplay:inline-block;\n\tcursor:pointer;\n    color:#ffffff;\n    width: 100%;\n    margin-top: 5px;\n\tfont-size:13px;\n\tfont-weight:bold;\n\tpadding:6px 12px;\n    text-decoration:none;\n    text-align: center;\n}\n.bbl_btn_green:hover {\n\tbackground-color:#68a54b;\n}\n.bbl_btn_green:active {\n\tposition:relative;\n\ttop:1px;\n}\n.bbl_btn_orange {\n    box-shadow:inset 0px 1px 0px 0px #fce2c1;\n\tbackground-color:#ffc477;\n\tborder-radius:6px;\n\tborder:1px solid #eeb44f;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n    width: 100%;\n    font-size:15px;\n    text-align: center;\n\tfont-weight:bold;\n\tpadding:6px 24px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #cc9f52;\n}\n.bbl_btn_orange:hover {\n\tbackground-color:#fb9e25;\n}\n.bbl_btn_orange:active {\n    position:relative;\n\ttop:1px;\n}\n\n.start_timer {\n    text-transform: uppercase;\n    font-size: 16px;\n}\n\n.bbl_label {\n    color: white;\n    padding: 8px;\n}\n\n.bbl_label_success {background-color: #4CAF50;}\n\n[class*=\"bbl_col-\"] {\n    width: 100%;\n}\n  \n  @media only screen and (min-width: 600px) {\n    /* For tablets: */\n    .bbl_col-s-1 {width: 8.33%;}\n    .bbl_col-s-2 {width: 16.66%;}\n    .bbl_col-s-3 {width: 25%;}\n    .bbl_col-s-4 {width: 33.33%;}\n    .bbl_col-s-5 {width: 41.66%;}\n    .bbl_col-s-6 {width: 50%;}\n    .bbl_col-s-7 {width: 58.33%;}\n    .bbl_col-s-8 {width: 66.66%;}\n    .bbl_col-s-9 {width: 75%;}\n    .bbl_col-s-10 {width: 83.33%;}\n    .bbl_col-s-11 {width: 91.66%;}\n    .bbl_col-s-12 {width: 100%;}\n  }\n  \n  @media only screen and (min-width: 768px) {\n    /* For desktop: */\n    .bbl_col-1 {width: 8.33%;}\n    .bbl_col-2 {width: 16.66%;}\n    .bbl_col-3 {width: 25%;}\n    .bbl_col-4 {width: 33.33%;}\n    .bbl_col-5 {width: 41.66%;}\n    .bbl_col-6 {width: 50%;}\n    .bbl_col-7 {width: 58.33%;}\n    .bbl_col-8 {width: 66.66%;}\n    .bbl_col-9 {width: 75%;}\n    .bbl_col-10 {width: 83.33%;}\n    .bbl_col-11 {width: 91.66%;}\n    .bbl_col-12 {width: 100%;}\n  }\n\n  @media only screen and (min-width: 1400px) {\n      /* For large: */\n    .bbl_col-l-1 {width: 8.33%;}\n    .bbl_col-l-2 {width: 16.66%;}\n    .bbl_col-l-3 {width: 25%;}\n    .bbl_col-l-4 {width: 33.33%;}\n    .bbl_col-l-5 {width: 41.66%;}\n    .bbl_col-l-6 {width: 50%;}\n    .bbl_col-l-7 {width: 58.33%;}\n    .bbl_col-l-8 {width: 66.66%;}\n    .bbl_col-l-9 {width: 75%;}\n    .bbl_col-l-10 {width: 83.33%;}\n    .bbl_col-l-11 {width: 91.66%;}\n    .bbl_col-l-12 {width: 100%;}\n  }\n\n  @media only screen and (max-width: 1400px) {\n      .bbl-timer-modal {\n          width: 80%;\n      }\n  }", 
  ""]);
  res.default = content;
}, function(canCreateDiscussions, res, i) {
  /**
   * @param {string} auth
   * @param {?} file
   * @param {string} url
   * @param {string} resource
   * @return {?}
   */
  function init(auth, file, url, resource) {
    var vClose = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    /** @type {!XMLHttpRequest} */
    var xhr = new XMLHttpRequest;
    var a;
    /** @type {string} */
    var res = baseUrl + "/track/" + url + "/play/mp3/medium";
    return resource.concat_created && (res = baseUrl + "/book/" + resource.id + "/full/medium"), vClose && (res = res + "?reserve=1"), xhr.open("GET", res, false), xhr.setRequestHeader("Content-Type", "application/json"), xhr.setRequestHeader("X-Biblio-Auth", "Bearer " + auth), xhr.setRequestHeader("X-Biblio-User", file), xhr.onload = function() {
      /** @type {*} */
      a = JSON.parse(xhr.response);
    }, xhr.send(), a;
  }
  /**
   * @param {string} access_token
   * @param {string} type
   * @param {string} doc
   * @param {number} start
   * @return {undefined}
   */
  function get(access_token, type, doc, start) {
    if (null == access_token || null == type || null == doc || start <= 0) {
      return;
    }
    /** @type {!XMLHttpRequest} */
    var xhr = new XMLHttpRequest;
    xhr.open("POST", baseUrl + "/system/listen-time/collect", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Biblio-Auth", "Bearer " + access_token);
    xhr.setRequestHeader("X-Biblio-User", type);
    xhr.send(JSON.stringify({
      data : [{
        book_id : doc.id,
        time : start,
        timestamp : Math.round(Date.now() / 1e3)
      }]
    }));
  }
  /**
   * @param {number} max
   * @return {undefined}
   */
  function getClosestValidDate(max) {
    max = max + (new Date).getTime();
    for (; new Date <= max;) {
    }
  }
  /**
   * @param {?} el
   * @param {!Object} t
   * @return {?}
   */
  function add(el, t) {
    /** @type {number} */
    var sum = 0;
    var result = next(el, t);
    /** @type {boolean} */
    var _iteratorNormalCompletion3 = true;
    /** @type {boolean} */
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
      var _iterator3 = t.tracks[Symbol.iterator]();
      var $__6;
      for (; !(_iteratorNormalCompletion3 = ($__6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var item = $__6.value;
        if (!(item.number < result.number)) {
          break;
        }
        sum = sum + item.duration;
      }
    } catch (err) {
      /** @type {boolean} */
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    return sum;
  }
  /**
   * @param {!Object} t
   * @param {?} f
   * @param {!Object} o
   * @return {?}
   */
  function transform(t, f, o) {
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var result = {
      duration : Math.round(o.duration),
      position : Math.round(o.position)
    };
    if (!t.concat_created || n) {
      return result;
    }
    /** @type {number} */
    var i = Math.round(f);
    /** @type {number} */
    var offset = 0;
    /** @type {boolean} */
    var _iteratorNormalCompletion3 = true;
    /** @type {boolean} */
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
    try {
      var _iterator3 = t.tracks[Symbol.iterator]();
      var _step6;
      for (; !(_iteratorNormalCompletion3 = (_step6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var node = _step6.value;
        if ((offset = offset + node.duration) >= i) {
          result.duration = node.duration;
          /** @type {number} */
          result.position = Math.round(i - (offset - node.duration));
          break;
        }
      }
    } catch (err) {
      /** @type {boolean} */
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
    return result;
  }
  /**
   * @param {?} t
   * @param {!Object} result
   * @return {?}
   */
  function next(t, result) {
    /** @type {null} */
    var token = null;
    /** @type {boolean} */
    var _iteratorNormalCompletion3 = true;
    /** @type {boolean} */
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;
    try {
      var _iterator3 = result.tracks[Symbol.iterator]();
      var $__4;
      for (; !(_iteratorNormalCompletion3 = ($__4 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var value = $__4.value;
        if (value.id == t) {
          token = value;
          break;
        }
      }
    } catch (err) {
      /** @type {boolean} */
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
    return token;
  }
  i.r(res);
  i(2);
  /** @type {string} */
  var baseUrl = "https://api.bibliovk.ru/api/ref";
  i(6);
  /** @type {!Window} */
  var global = window || global;
  global.Biblio = function() {
    /**
     * @return {undefined}
     */
    function SearchWorkerLoader() {
      _classCallCheck(this, SearchWorkerLoader);
      /**
       * @return {undefined}
       */
      this._callback_widgetIsInit = function() {
      };
      this._mn();
    }
    _createClass(SearchWorkerLoader, [{
      key : "_mn",
      value : function Editor() {
        /** @type {string} */
        this.EVENT_PAUSE = "bbl-pause";
        /** @type {string} */
        this.EVENT_PLAY = "bbl-play";
        /** @type {string} */
        this.EVENT_ENDED = "bbl-ended";
        /** @type {string} */
        this.EVENT_STOP = "bbl-stop";
        /** @type {string} */
        this.EVENT_PLAYBACKRATE_CHANGE = "bbl-playback-change";
        /** @type {string} */
        this.EVENT_VOLUME = "bbl-volume";
        /** @type {string} */
        this.EVENT_PROGRESS = "bbl-progress";
        /** @type {string} */
        this.EVENT_CRASHED = "bbl-crashed";
        /** @type {string} */
        this.EVENT_ERROR = "bbl-error";
        /** @type {string} */
        this.EVENT_STATE = "bbl-state";
        /** @type {string} */
        this.EVENT_WIDGET = "bbl-widget-init";
        /** @type {number} */
        this._lts = 0;
        /** @type {number} */
        this._bkid = 0;
        /** @type {number} */
        this._pltkid = 0;
        /** @type {boolean} */
        this._sltr = false;
        /** @type {string} */
        this._st = "stop";
        /** @type {boolean} */
        this._floaded = false;
        /** @type {number} */
        this._prgsld = 0;
        /** @type {null} */
        this._bk = null;
        /** @type {null} */
        this._bl = null;
        /** @type {null} */
        this._us = null;
        /** @type {null} */
        this._blk = null;
        /** @type {boolean} */
        this._wgtisinit = false;
        /** @type {null} */
        this._pltkd = null;
        /** @type {null} */
        this._apl = null;
        /** @type {string} */
        this._plbrate = "1.0";
        /**
         * @return {undefined}
         */
        this._callback_playRateChange = function() {
        };
        /**
         * @param {?} canCreateDiscussions
         * @return {undefined}
         */
        this._callback_playProgress = function(canCreateDiscussions) {
        };
        /**
         * @return {undefined}
         */
        this._callback_playEnded = function() {
        };
      }
    }, {
      key : "init",
      value : function request(data) {
        var wikimedia_commons;
        var $state;
        var allBox;
        var node;
        var wikimediacommons_page;
        return this._mn(), this._bkid = data.book_id, this._refkey = data.referal_key, this._ukey = data.user_key, null != this._ukey && (this._us = function(basicAuth, type) {
          /** @type {!XMLHttpRequest} */
          var xhr = new XMLHttpRequest;
          var o;
          return xhr.open("GET", baseUrl + "/me", false), xhr.setRequestHeader("Content-Type", "application/json"), xhr.setRequestHeader("X-Biblio-Auth", "Bearer " + basicAuth), xhr.setRequestHeader("X-Biblio-User", type), xhr.onload = function() {
            /** @type {*} */
            o = JSON.parse(xhr.response);
          }, xhr.send(), o;
        }(this._refkey, this._ukey), this._bl = function(basicAuth, type) {
          /** @type {!XMLHttpRequest} */
          var xhr = new XMLHttpRequest;
          var o;
          return xhr.open("GET", baseUrl + "/me/billing", false), xhr.setRequestHeader("Content-Type", "application/json"), xhr.setRequestHeader("X-Biblio-Auth", "Bearer " + basicAuth), xhr.setRequestHeader("X-Biblio-User", type), xhr.onload = function() {
            /** @type {*} */
            o = JSON.parse(xhr.response);
          }, xhr.send(), o;
        }(this._refkey, this._ukey)), this._bk = function(basicAuth, type, query) {
          /** @type {!XMLHttpRequest} */
          var xhr = new XMLHttpRequest;
          var r;
          return null == type ? (xhr.open("GET", baseUrl + "/book/guest/" + query, false), xhr.setRequestHeader("X-Biblio-User", "")) : (xhr.open("GET", baseUrl + "/book/" + query, false), xhr.setRequestHeader("X-Biblio-User", type)), xhr.setRequestHeader("Content-Type", "application/json"), xhr.setRequestHeader("X-Biblio-Auth", "Bearer " + basicAuth), xhr.onload = function() {
            /** @type {*} */
            r = JSON.parse(xhr.response);
          }, xhr.send(), r;
        }(this._refkey, this._ukey, this._bkid), this._blk = (wikimedia_commons = this._ukey, $state = this._us, allBox = this._bl, node = this._bk, wikimediacommons_page = false, null == wikimedia_commons || ((node.amount > 0 || node.for_subscribers) && (wikimediacommons_page = true, null != wikimedia_commons && $state.purchased_books.includes(node.id) && (wikimediacommons_page = false), null != wikimedia_commons && node.for_subscribers && "free" != allBox.name && (wikimediacommons_page = false), 
        null == wikimedia_commons && (wikimediacommons_page = true)), wikimediacommons_page)), this._iP(), this._iE(), this._wgtisinit = true, this._callback_widgetIsInit(), this;
      }
    }, {
      key : "isWidgetInit",
      value : function isWidgetInit() {
        return this._wgtisinit;
      }
    }, {
      key : "on",
      value : function init(userName, callback) {
        if (userName == this.EVENT_WIDGET && (this._callback_widgetIsInit = callback), !this._wgtisinit) {
          return false;
        }
        switch(userName) {
          case this.EVENT_PAUSE:
            this._apl.on(ya.music.Audio.EVENT_PAUSE, callback);
            break;
          case this.EVENT_PLAY:
            this._apl.on(ya.music.Audio.EVENT_PLAY, callback);
            break;
          case this.EVENT_ENDED:
            /** @type {!Function} */
            this._callback_playEnded = callback;
            break;
          case this.EVENT_STOP:
            this._apl.on(ya.music.Audio.EVENT_STOP, callback);
            break;
          case this.EVENT_PLAYBACKRATE_CHANGE:
            /** @type {!Function} */
            this._callback_playRateChange = callback;
            break;
          case this.EVENT_VOLUME:
            this._apl.on(ya.music.Audio.EVENT_VOLUME, callback);
            break;
          case this.EVENT_PROGRESS:
            /** @type {!Function} */
            this._callback_playProgress = callback;
            break;
          case this.EVENT_CRASHED:
            this._apl.on(ya.music.Audio.EVENT_CRASHED, callback);
            break;
          case this.EVENT_ERROR:
            this._apl.on(ya.music.Audio.EVENT_ERROR, callback);
            break;
          case this.EVENT_STATE:
            this._apl.on(ya.music.Audio.EVENT_STATE, callback);
        }
      }
    }, {
      key : "pause",
      value : function leadingImageNode() {
        if (null == this._apl) {
          return false;
        }
        this._rnPs();
      }
    }, {
      key : "play",
      value : function tryNextPath() {
        var artistTrack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (null == this._apl) {
          return false;
        }
        this._rnPl(artistTrack);
      }
    }, {
      key : "stop",
      value : function stop() {
        if (null == this._apl) {
          return false;
        }
        this._asp();
        this._apl.stop();
        /** @type {string} */
        this._st = "stop";
      }
    }, {
      key : "seek",
      value : function link(header) {
        if (null == this._apl) {
          return false;
        }
        this._apl.setPosition(function(t, value, i) {
          if (t.concat_created) {
            var id = next(i, t);
            /** @type {number} */
            var total = 0;
            if (null == id) {
              return value;
            }
            /** @type {boolean} */
            var _iteratorNormalCompletion4 = true;
            /** @type {boolean} */
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;
            try {
              var _iterator4 = t.tracks[Symbol.iterator]();
              var _step;
              for (; !(_iteratorNormalCompletion4 = (_step = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var line = _step.value;
                if (line.number >= id.number) {
                  break;
                }
                total = total + line.duration;
              }
            } catch (err) {
              /** @type {boolean} */
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
            return total + value;
          }
          return value;
        }(this._bk, header, this._pltkid));
      }
    }, {
      key : "isSleepTimerActive",
      value : function isSleepTimerActive() {
        return this._sltr;
      }
    }, {
      key : "stopSleepTimer",
      value : function _debounceOrThrottle() {
        if (null != _takingTooLongTimeout) {
          clearTimeout(_takingTooLongTimeout);
          /** @type {boolean} */
          this._sltr = false;
        } else {
          /** @type {boolean} */
          this._sltr = false;
        }
      }
    }, {
      key : "isForSubscribers",
      value : function isForSubscribers() {
        return this._bk.for_subscribers;
      }
    }, {
      key : "getAmount",
      value : function getKerning() {
        return this._bk.amount;
      }
    }, {
      key : "startPurchaseBook",
      value : function sendQuery() {
        if (null != this._ukey) {
          (function(basicAuth, type, i) {
            /** @type {!XMLHttpRequest} */
            var xhr = new XMLHttpRequest;
            xhr.open("GET", "https://pay.bibliovk.ru/book/" + i + "/purchase", false);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("X-Biblio-Auth", "Bearer " + basicAuth);
            xhr.setRequestHeader("X-Biblio-User", type);
            xhr.setRequestHeader("X-Biblio-Referer", window.location.href);
            /**
             * @return {undefined}
             */
            xhr.onload = function() {
              /** @type {*} */
              var response = JSON.parse(xhr.response);
              window.location.href = response.redirect_to;
            };
            xhr.send();
          })(this._refkey, this._ukey, this._bkid);
        }
      }
    }, {
      key : "destroy",
      value : function FlashCore() {
        if (!(null == this._apl || "play" != this._st && "pause" != this._st)) {
          this._apl.stop();
        }
        /** @type {string} */
        this._st = "stop";
        this._mn();
      }
    }, {
      key : "startPurchaseSubscribtion",
      value : function extract() {
        var eBias = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "biblio.month";
        if (null == this._ukey) {
          return false;
        }
        var e;
        /** @type {string} */
        var entityUrl = window.location.href;
        /** @type {string} */
        window.location.href = "https://pay.bibliovk.ru/subscribe?data=" + (e = this._ukey + "||" + this._refkey + "||" + entityUrl + "||" + eBias, btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(canCreateDiscussions, index) {
          return String.fromCharCode("0x" + index);
        })));
      }
    }, {
      key : "getBookPurchaseIsNeed",
      value : function getBookPurchaseIsNeed() {
        return this._blk;
      }
    }, {
      key : "setSleepTimer",
      value : function onerror(columnNo, error) {
        var i = this;
        /** @type {number} */
        _takingTooLongTimeout = setTimeout(function() {
          i._stpbT();
        }, 60 * columnNo * 60 * 1e3 + 60 * error * 1e3);
        /** @type {boolean} */
        this._sltr = true;
      }
    }, {
      key : "getPlayerState",
      value : function addressThreshold() {
        return null == this._apl ? "none" : this._apl.getState();
      }
    }, {
      key : "getPlaybackRate",
      value : function getPlaybackRate() {
        return this._plbrate;
      }
    }, {
      key : "setPlaybackRate",
      value : function setPlaybackRate(suggestedRate) {
        this._apl.setPlaybackRate(suggestedRate);
        this._callback_playRateChange();
        /** @type {!Array} */
        this._plbrate = suggestedRate;
      }
    }, {
      key : "ff",
      value : function onGeoPositionSuccess() {
        this._apl.setPosition(this._apl.getPosition() + 15);
      }
    }, {
      key : "rw",
      value : function onGeoPositionSuccess() {
        this._apl.setPosition(this._apl.getPosition() - 15);
      }
    }, {
      key : "getPosition",
      value : function next() {
        return 0 != this._pltkid && "stop" != this._st || null == this._bk.saved_position ? function(end, params, y) {
          if (params.concat_created) {
            var row = next(y, params);
            /** @type {number} */
            var start = 0;
            if (null == row) {
              return Math.round(end);
            }
            /** @type {boolean} */
            var _iteratorNormalCompletion3 = true;
            /** @type {boolean} */
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;
            try {
              var _iterator3 = params.tracks[Symbol.iterator]();
              var _step;
              for (; !(_iteratorNormalCompletion3 = (_step = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var entry = _step.value;
                if (entry.number >= row.number) {
                  break;
                }
                start = start + entry.duration;
              }
            } catch (err) {
              /** @type {boolean} */
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
            return Math.round(end - start);
          }
          return Math.round(end);
        }(this._apl.getPosition(), this._bk, this._pltkid) : this._bk.saved_position.position;
      }
    }, {
      key : "getCurrentTrack",
      value : function finished() {
        return 0 == this._pltkid && null != this._bk.saved_position ? this._bk.saved_position.track_id : this._pltkid;
      }
    }, {
      key : "getDuration",
      value : function query() {
        return this._blk && 0 == this._pltkid && "stop" == this._st ? this._apl.getDuration(this._bk.audio_sample) : function(iDuration, instance, url) {
          /** @type {number} */
          var duration = iDuration;
          if (instance.concat_created) {
            if (0 == url || null == url) {
              return duration;
            }
            /** @type {boolean} */
            var _iteratorNormalCompletion3 = true;
            /** @type {boolean} */
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;
            try {
              var _iterator3 = instance.tracks[Symbol.iterator]();
              var _step2;
              for (; !(_iteratorNormalCompletion3 = (_step2 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var o = _step2.value;
                if (o.id == url) {
                  duration = o.duration;
                  break;
                }
              }
            } catch (err) {
              /** @type {boolean} */
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          }
          return duration;
        }(this._apl.getDuration(0), this._bk, this._pltkid);
      }
    }, {
      key : "getBookMeta",
      value : function validate() {
        return {
          title : this._bk.title,
          bio : this._bk.bio,
          cover : this._bk.cover,
          duration : this._bk.duration,
          plus_18 : this._bk.plus_18,
          plus_16 : this._bk.plus_16,
          with_music : this._bk.with_music,
          tracks_count : this._bk.tracks_count,
          author_name : this._bk.author_name,
          reader_name : this._bk.reader_name,
          genres : this._bk.genres_ids,
          series_name : this._bk.series_name,
          series_num : this._bk.series_num,
          copyright_holder : this._bk.meta_data.copyright_holder
        };
      }
    }, {
      key : "getTracksMeta",
      value : function serialize() {
        /** @type {!Array} */
        var result = [];
        return this._bk.tracks.forEach(function(options) {
          result.push({
            id : options.id,
            name : options.name,
            duration : options.duration,
            number : options.number
          });
        }), result;
      }
    }, {
      key : "getVolume",
      value : function getVolume() {
        return this._apl.getVolume();
      }
    }, {
      key : "setVolume",
      value : function initVolume(value) {
        return this._apl.setVolume(value);
      }
    }, {
      key : "_stpbT",
      value : function listModified() {
        this._apl.pause();
        /** @type {boolean} */
        this._sltr = false;
      }
    }, {
      key : "_rnPl",
      value : function init() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var reportToIrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var $scope = this;
        if (this._blk && "stop" == this._st) {
          if (this._apl.isPreloaded(this._bk.audio_sample)) {
            this._apl.setPosition(0);
            this._apl.playPreloaded(this._bk.audio_sample);
          } else {
            this._apl.preload(this._bk.audio_sample).then(function() {
              $scope._apl.setPosition(0);
              $scope._apl.playPreloaded($scope._bk.audio_sample);
            });
          }
        } else {
          if ("pause" != this._st || 0 != data) {
            if (!this._bk.concat_created || this._floaded && null != this._pltkd || (this._pltkd = init(this._refkey, this._ukey, this._bk.tracks[0].id, this._bk, reportToIrc), this._floaded = true), this._bk.concat_created && null != this._pltkd) {
              /** @type {number} */
              var n = Math.floor(Date.now() / 1e3);
              if (this._pltkd.link_expire_timestamp <= n) {
                this._pltkd = init(this._refkey, this._ukey, this._bk.tracks[0].id, this._bk, reportToIrc);
                /** @type {boolean} */
                this._floaded = true;
              }
            }
            if (0 != data) {
              return "pause" != this._st && "play" != this._st || this._bk.concat_created || this._apl.stop(0), this._bk.concat_created || (this._pltkd = init(this._refkey, this._ukey, data, this._bk, reportToIrc)), this._bk.concat_created ? "play" == this._st ? this._apl.setPosition(add(data, this._bk)) : "pause" == this._st ? (this._apl.setPosition(add(data, this._bk)), this._apl.resume()) : (this._apl.preload(this._pltkd.download_url).then(function() {
                getClosestValidDate(1e3);
              }), this._apl.play($scope._pltkd.download_url).then(function() {
                $scope._apl.setPosition(add(data, $scope._bk));
              })) : this._apl.preload(this._pltkd.download_url).then(function() {
                getClosestValidDate(1e3);
                $scope._apl.play($scope._pltkd.download_url);
              }), void(this._pltkid = data);
            }
            if (null == this._bk.saved_position) {
              return "pause" != this._st && "play" != this._st || this._bk.concat_created || this._apl.stop(0), this._bk.concat_created || (this._pltkd = init(this._refkey, this._ukey, this._bk.tracks[0].id, this._bk, reportToIrc)), this._apl.preload(this._pltkd.download_url).then(function() {
                getClosestValidDate(1e3);
              }), this._apl.play($scope._pltkd.download_url), void(this._pltkid = $scope._bk.tracks[0].id);
            }
            if (!("pause" != this._st && "play" != this._st || this._bk.concat_created)) {
              this._apl.stop(0);
            }
            if (!this._bk.concat_created) {
              this._pltkd = init(this._refkey, this._ukey, this._bk.saved_position.track_id, this._bk, reportToIrc);
            }
            this._apl.preload(this._pltkd.download_url).then(function() {
              getClosestValidDate(1e3);
            });
            var x = this._bk.saved_position.position;
            if (this._bk.concat_created) {
              x = x + add(this._bk.saved_position.track_id, this._bk);
            }
            this._apl.play(this._pltkd.download_url).then(function() {
              $scope._apl.setPosition(x);
            });
            this._pltkid = this._bk.saved_position.track_id;
          } else {
            this._apl.resume();
          }
        }
      }
    }, {
      key : "_rnPs",
      value : function listModified() {
        this._apl.pause();
      }
    }, {
      key : "_asp",
      value : function fetch() {
        if (0 != this._pltkid && void 0 !== this._bk) {
          var item = function(track_id, instance, f) {
            var result = {
              book_id : instance.id,
              track_id : track_id,
              position : Math.round(f)
            };
            /** @type {number} */
            var i = Math.round(f);
            if (instance.concat_created) {
              /** @type {number} */
              var index = 0;
              /** @type {boolean} */
              var _iteratorNormalCompletion3 = true;
              /** @type {boolean} */
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;
              try {
                var _iterator3 = instance.tracks[Symbol.iterator]();
                var $__4;
                for (; !(_iteratorNormalCompletion3 = ($__4 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var value = $__4.value;
                  if ((index = index + value.duration) >= i) {
                    result = {
                      book_id : instance.id,
                      track_id : value.id,
                      position : Math.round(i - (index - value.duration))
                    };
                    break;
                  }
                }
              } catch (err) {
                /** @type {boolean} */
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }
            }
            return result;
          }(this._pltkid, this._bk, this._apl.getPosition());
          if (null == this._bk.saved_position) {
            this._bk.saved_position = {
              book_id : item.book_id,
              track_id : item.track_id,
              position : item.position
            };
          } else {
            this._bk.saved_position.book_id = item.book_id;
            this._bk.saved_position.track_id = item.track_id;
            this._bk.saved_position.position = item.position;
          }
          (function(basicAuth, type, match) {
            /** @type {!XMLHttpRequest} */
            var xhr = new XMLHttpRequest;
            xhr.open("PUT", baseUrl + "/me/savedPosition", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("X-Biblio-Auth", "Bearer " + basicAuth);
            xhr.setRequestHeader("X-Biblio-User", type);
            xhr.send(JSON.stringify({
              book_id : match.bkid,
              track_id : match.tkid,
              position : match.pos
            }));
          })(this._refkey, this._ukey, {
            bkid : item.book_id,
            tkid : item.track_id,
            pos : item.position
          });
        }
      }
    }, {
      key : "_iE",
      value : function init() {
        var me = this;
        if (this._blk) {
          return this._apl.on(ya.music.Audio.EVENT_PLAY, function() {
            /** @type {string} */
            me._st = "play";
          }), this._apl.on(ya.music.Audio.EVENT_PAUSE, function() {
            /** @type {string} */
            me._st = "pause";
          }), this._apl.on(ya.music.Audio.EVENT_ENDED, function() {
            /** @type {string} */
            me._st = "stop";
          }), void this._apl.on(ya.music.Audio.EVENT_PROGRESS, function(offsets) {
            if (null != me._apl) {
              if (null != me._bk) {
                me._callback_playProgress(transform(me._bk, me._apl.getPosition(), offsets, true));
              } else {
                console.log("BIBLIO: book object is null");
              }
            } else {
              console.log("BIBLIO: player object is null");
            }
          });
        }
        this._apl.on(ya.music.Audio.EVENT_PLAY, function() {
          /** @type {number} */
          initializeCheckTimer = setInterval(function() {
            me._asp();
          }, 15e3);
          /** @type {string} */
          me._st = "play";
          /** @type {number} */
          _td_alert = setInterval(function() {
            me._lts += 1;
          }, 1e3);
        });
        this._apl.on(ya.music.Audio.EVENT_STOP, function() {
          clearInterval(initializeCheckTimer);
          /** @type {string} */
          me._st = "stop";
          /** @type {boolean} */
          me._floaded = false;
          clearInterval(_td_alert);
          if (me._lts > 0) {
            get(me._refkey, me._ukey, me._bk, me._lts);
            /** @type {number} */
            me._lts = 0;
          }
        });
        this._apl.on(ya.music.Audio.EVENT_PAUSE, function() {
          clearInterval(initializeCheckTimer);
          /** @type {string} */
          me._st = "pause";
          me._asp();
          clearInterval(_td_alert);
          if (me._lts > 0) {
            get(me._refkey, me._ukey, me._bk, me._lts);
            /** @type {number} */
            me._lts = 0;
          }
        });
        this._apl.on(ya.music.Audio.EVENT_ERROR, function() {
          if (null != me._pltkid) {
            me._apl.stop();
            /** @type {boolean} */
            me._floaded = false;
            clearInterval(_td_alert);
            me._rnPl(me._pltkid, true);
          }
        });
        this._apl.on(ya.music.Audio.EVENT_PROGRESS, function(offsets) {
          if (null != me._apl) {
            if (null != me._bk) {
              if (me._prgsld >= 2) {
                if (me._bk.concat_created) {
                  var store = me._pltkid;
                  if (me._pltkid = function(instance, len) {
                    /** @type {number} */
                    var i = 0;
                    /** @type {number} */
                    var oldSelectedNodeId = 0;
                    /** @type {boolean} */
                    var _iteratorNormalCompletion3 = true;
                    /** @type {boolean} */
                    var _didIteratorError8 = false;
                    var _iteratorError8 = undefined;
                    try {
                      var _iterator3 = instance.tracks[Symbol.iterator]();
                      var _step6;
                      for (; !(_iteratorNormalCompletion3 = (_step6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var node = _step6.value;
                        if ((i = i + node.duration) >= len) {
                          oldSelectedNodeId = node.id;
                          break;
                        }
                      }
                    } catch (err) {
                      /** @type {boolean} */
                      _didIteratorError8 = true;
                      _iteratorError8 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                        }
                      } finally {
                        if (_didIteratorError8) {
                          throw _iteratorError8;
                        }
                      }
                    }
                    return oldSelectedNodeId;
                  }(me._bk, offsets.position), store != me._pltkid) {
                    var result = next(store, me._bk);
                    var value = next(me._pltkid, me._bk);
                    if (result.number < value.number) {
                      me._callback_playEnded();
                    }
                  }
                }
                me._callback_playProgress(transform(me._bk, me._apl.getPosition(), offsets));
                /** @type {number} */
                me._prgsld = 0;
              } else {
                me._prgsld += 1;
              }
            } else {
              console.log("BIBLIO: book object is null");
            }
          } else {
            console.log("BIBLIO: player object is null");
          }
        });
        this._apl.on(ya.music.Audio.EVENT_ENDED, function() {
          if (clearInterval(initializeCheckTimer), me._floaded = false, me._st = "stop", clearInterval(_td_alert), me._lts > 0 && (get(me._refkey, me._ukey, me._bk, me._lts), me._lts = 0), !me._bk.concat_created) {
            var header = next(me._pltkid, me._bk);
            if (me._callback_playEnded(), null != header.next_id) {
              return void me._rnPl(header.next_id);
            }
          }
        });
      }
    }, {
      key : "_iP",
      value : function init() {
        var $TS = this;
        this._apl = new ya.music.Audio("html5");
        this._apl.initPromise().then(function() {
          if ($TS._blk) {
            $TS._apl.preload($TS._bk.audio_sample);
          }
        });
      }
    }]);
    return SearchWorkerLoader;
  }();
  /** @type {null} */
  var initializeCheckTimer = null;
  /** @type {null} */
  var _takingTooLongTimeout = null;
  /** @type {null} */
  var _td_alert = null;
}]);
/**
 * @param {string} className
 * @param {?} name
 * @return {undefined}
 */
var b_chapterSetIcon = function command(className, name) {
  $(".player--chapters[data-bid=" + className + "] .chapter__default[data-fileid=" + bo[className].getCurrentTrack() + "] .chapter__default--button").html(name);
};
/**
 * @param {string} id
 * @param {number} ratio
 * @return {undefined}
 */
var b_changeDurationData = function create(id, ratio) {
  if (bo[id].getBookPurchaseIsNeed()) {
    return;
  }
  var PANEL_WINDOW_MENU_THUMBNAIL_SIZE = bo[id].getBookMeta().duration;
  /** @type {number} */
  var candidatesWidth = ratio > 1 ? PANEL_WINDOW_MENU_THUMBNAIL_SIZE / ratio : PANEL_WINDOW_MENU_THUMBNAIL_SIZE * (2 - ratio);
  /** @type {number} */
  var value = Math.floor(candidatesWidth / 3600);
  /** @type {number} */
  var pt2 = Math.floor(candidatesWidth % 3600 / 60);
  /** @type {string} */
  var utcDayCalib = ((ratio - 1) * 100).toFixed();
  var commentElm = $(".book-duration-" + id);
  $(".hours", commentElm).text(value > 0 ? ls.i18n.pluralize(value, "time.hours_declension") : "");
  $(".minutes", commentElm).text(pt2 > 0 ? ls.i18n.pluralize(pt2, "time.minutes_declension") : "");
  if (ratio != 1) {
    $(".rate", commentElm).text("(" + (utcDayCalib > 1 ? "-" + utcDayCalib + "%" : "+" + Math.abs(utcDayCalib) + "%") + ")");
  } else {
    $(".rate", commentElm).text("");
  }
};
/**
 * @param {string} index
 * @param {number} percent
 * @return {undefined}
 */
var b_setPercent = function render(index, percent) {
  if (bo[index].getBookPurchaseIsNeed()) {
    return;
  }
  var total = bo[index].getBookMeta().duration;
  var cell_amount = bo[index].getTracksMeta().findIndex(function(timeline_mode) {
    return timeline_mode.id == bo[index].getCurrentTrack();
  });
  var sum = bo[index].getPosition();
  /** @type {number} */
  i = 0;
  for (; i < cell_amount; i++) {
    sum = sum + bo[index].getTracksMeta()[i].duration;
  }
  /** @type {number} */
  percent = Math.ceil(sum / total * 100);
  if (percent > 100) {
    /** @type {number} */
    percent = 100;
  }
  $(".book-id-" + index + " .percent-number span").text(percent + "%");
  $("article[data-bid=" + index + "] .caption__article-duration .percent-number").text(percent + "% \u00d0\u00bf\u00d1\u20ac\u00d0\u00be\u00d1\u0081\u00d0\u00bb\u00d1\u0192\u00d1\u02c6\u00d0\u00b0\u00d0\u00bd\u00d0\u00be");
  $("article[data-bid=" + index + "] .wrapper--history-menu .icon-percent").remove();
  $("article[data-bid=" + index + "] .wrapper--history-menu").prepend(icon_progress(percent == 100 ? "check" : "percent"));
  if (percent == 0) {
    $(".book-id-" + index + " .circular-chart").addClass("hidden");
  } else {
    $(".book-id-" + index + " .circular-chart").removeClass("hidden");
    $(".book-id-" + index + " .circle-path").attr({
      "stroke-dasharray" : percent + ",100"
    });
  }
};
/**
 * @param {string} a
 * @return {undefined}
 */
var b_speed_init = function init(a) {
  $(a + " .player__speed").off("click").on("click", function(event) {
    event.stopPropagation();
    var i = $(this).attr("data-bid");
    var _this = $(".mobile__popup--speed");
    if (typeof _this.slider() !== "undefined" || _this.attr("data-bid") != i) {
      _this.slider("destroy");
    }
    _this.attr("data-bid", i);
    i = $(this).attr("data-bid");
    var command_module_id = user_rates[i] || 1;
    /** @type {string} */
    var rate_value = ((command_module_id - 1) * 100).toFixed();
    if (rate_value == 0) {
      $(".speed_value", _this).html("1x");
    } else {
      $(".speed_value", _this).html(rate_value > 1 ? "+" + rate_value + "%" : rate_value + "%");
    }
    $(".mobile__popup--speed--slider").slider({
      range : "min",
      max : 2,
      min : 0,
      value : command_module_id,
      step : .05,
      classes : {
        "ui-slider-handle" : "progress__bar--pin"
      },
      animate : "fast",
      slide : function onLoad(event, data) {
        if (!bo[i]) {
          return;
        }
        bo[i].speed = data.value;
        $(".book-id-" + i + " .speed__hor").slider("value", data.value);
      }
    });
    $(".speed__control").off("click").on("click", function() {
      /** @type {number} */
      var dy = $(this).attr("val") == "plus" ? 0.05 : -0.05;
      /** @type {number} */
      user_rates[i] = parseFloat(user_rates[i]) + dy;
      $(".speed__control").removeClass("speed-max");
      if (user_rates[i] <= 0.5) {
        /** @type {number} */
        user_rates[i] = 0.5;
        $(this).addClass("speed-max");
      }
      if (user_rates[i] >= 2) {
        /** @type {number} */
        user_rates[i] = 2;
        $(this).addClass("speed-max");
      }
      bo[i].setPlaybackRate(user_rates[i]);
      $(".mobile__popup--speed--slider").slider("value", user_rates[i]);
    });
    $(".mobile__popup--speed").addClass("open");
  });
};
/**
 * @param {string} id
 * @return {undefined}
 */
var b_init_sliders = function bind(id) {
  $(".menu__player--block .progress__bar--player").slider({
    range : "min",
    value : 0,
    step : .001,
    classes : {
      "ui-slider" : "",
      "ui-slider-handle" : "progress__bar--pin",
      "ui-slider-range" : "progress__bar--progress"
    },
    animate : false,
    slide : function read(callback, options) {
      /** @type {number} */
      var duration = parseInt($(".book-id-" + id + " .progress__bar--player").attr("data-pos-start"));
      /** @type {number} */
      var min = parseInt($(".book-id-" + id + " .progress__bar--player").attr("data-pos-end"));
      /** @type {number} */
      var value = duration + (min - duration) / 100 * options.value;
      bo[id].seek(value);
      $(".book-id-" + id + " .player-time-current").html(secondsToHMS(parseInt(value)));
    }
  });
  $(".player__volume .player__slider").slider({
    range : "min",
    orientation : "vertical",
    value : user_volume * 100,
    classes : {
      "ui-slider-range" : "player__slider--value"
    },
    animate : "fast",
    slide : function update(event, ui) {
      if (!bo[id]) {
        return;
      }
      var percent = ui.value.toFixed();
      bo[id].setVolume(percent / 100);
      if (page_bid) {
        bo[page_bid].setVolume(percent / 100);
      }
      $(".volume__hor").slider("value", percent);
    }
  });
  $(".volume_value").html((user_volume * 100).toFixed() + "%");
  /** @type {number} */
  var command_module_id = $.cookie("a_rate_" + id) != null ? parseFloat($.cookie("a_rate_" + id)) : 1;
  $(".player__speed .player__slider").slider({
    range : "min",
    max : 2,
    min : 0,
    orientation : "vertical",
    value : command_module_id,
    step : .05,
    classes : {
      "ui-slider-range" : "player__slider--value"
    },
    animate : "fast",
    slide : function start(event, ui) {
      if (!bo[id]) {
        return;
      }
      bo[id].setPlaybackRate(ui.value);
      $(".book-id-" + id + " .speed__hor").slider("value", ui.value);
    }
  });
  /** @type {string} */
  var rate_value = ((command_module_id - 1) * 100).toFixed();
  if (rate_value == 0) {
    $(".book-id-" + id + " .speed_value").html("1x");
    $(".js-topic .book-id-" + id + " .speed__hor .speed_value").html("\u00d0\u00a1\u00d0\u00ba\u00d0\u00be\u00d1\u20ac\u00d0\u00be\u00d1\u0081\u00d1\u201a\u00d1\u0152");
  } else {
    $(".book-id-" + id + " .speed_value").html(rate_value > 1 ? "+" + rate_value + "%" : rate_value + "%");
  }
};
/**
 * @param {string} id
 * @return {undefined}
 */
var b_init_sliders_bookpage = function init(id) {
  $(".content__main__book--item .volume__hor").slider({
    range : "min",
    value : user_volume * 100,
    classes : {
      "ui-slider-range" : "volume__hor--track"
    },
    animate : "fast",
    slide : function init(event, ui) {
      if (!bo[id]) {
        return;
      }
      var percent = ui.value.toFixed();
      bo[id].setVolume(percent / 100);
      if (player_bid) {
        if (player_bid != id) {
          bo[player_bid].setVolume(percent / 100);
        }
        $(".player__volume .player__slider").slider("value", percent);
      }
    }
  });
  $(".volume__hor .volume_value").html((user_volume * 100).toFixed() + "%");
  $(".content__main__book--item .volume__hor--value").html((user_volume * 100).toFixed() + "%");
  /** @type {number} */
  var command_module_id = $.cookie("a_rate_" + id) != null ? parseFloat($.cookie("a_rate_" + id)) : 1;
  $(".content__main__book--item .speed__hor").slider({
    range : "min",
    max : 2,
    min : 0,
    value : command_module_id,
    step : .05,
    classes : {
      "ui-slider-range" : "speed__hor--track"
    },
    animate : "fast",
    slide : function update(event, data) {
      if (!bo[id]) {
        return;
      }
      bo[id].setPlaybackRate(data.value);
      if (player_bid) {
        $(".player__speed .player__slider").slider("value", data.value);
      }
    }
  });
  b_speed_init("article");
  $("article .player__timer").on("click", function(event) {
    event.stopPropagation();
    $(".mobile__popup--timer").addClass("open");
  });
  if ($(".book-id-" + id + " .player__wrapper .player__timer.run")[0]) {
    $("article .player__timer").addClass("run");
  }
  /** @type {string} */
  var rate_value = ((command_module_id - 1) * 100).toFixed();
  if (rate_value == 0) {
    $(".book-id-" + id + " .speed_value").html("1x");
    $(".js-topic .book-id-" + id + " .speed__hor .speed_value").html("\u00d0\u00a1\u00d0\u00ba\u00d0\u00be\u00d1\u20ac\u00d0\u00be\u00d1\u0081\u00d1\u201a\u00d1\u0152");
  } else {
    $(".book-id-" + id + " .speed_value").html(rate_value > 1 ? "+" + rate_value + "%" : rate_value + "%");
  }
};
/**
 * @param {string} index
 * @param {number} id
 * @param {!Array} a
 * @return {undefined}
 */
var b_setCurrentChapter = function next(index, id, a) {
  var k = id == 0 ? 0 : a.findIndex(function(item_obj_child2) {
    return item_obj_child2.id == id;
  });
  var dt = id == 0 ? 0 : a[k].duration;
  if (parseInt($(".player--chapters[data-bid=" + index + "] .chapter__current").attr("data-id")) != k) {
    $(".book-id-" + index + " .player-time-current").text("00:00");
    $(".book-id-" + index + " .progress__bar--player").slider("value", 0);
  }
  $(".book-id-" + index + " .player-time-duration").text(secondsToHMS(dt));
  var button = $(".book-id-" + index + " .progress__bar--player");
  button.attr("data-pos-start", 0);
  button.attr("data-pos-end", dt);
  var listOfConnections = $(".player--chapters[data-bid=" + index + "]");
  var node = $(".player--chapters[data-bid=" + index + "] .chapter__default[data-id=" + k + "]");
  $(".chapter__default--button, .chapter__default--progress, .chapter__default--time span", listOfConnections).remove();
  $(".chapter__current", listOfConnections).removeClass("chapter__current");
  $(node).addClass("chapter__current");
  $(node).prepend('<div class="chapter__default--button">' + (bo[index].getPlayerState() == "playing" ? icon_play : "") + "</div>");
  $(node).append('<div class="chapter__default--progress"></div>');
  $(".chapter__default--time", node).prepend('<span><span class="player-time-current">00:00</span> / </span>');
  $(".book-id-" + index + " .book--chapter-current-title").text($(".chapter__default--title", node).first().text());
  if (bo[index].getBookPurchaseIsNeed()) {
    $(".book-id-" + index + " .book--chapter-current").text("\u00d0\u00a4\u00d1\u20ac\u00d0\u00b0\u00d0\u00b3\u00d0\u00bc\u00d0\u00b5\u00d0\u00bd\u00d1\u201a");
  } else {
    $(".book-id-" + index + " .book--chapter-current").text("\u00d0\u00a7\u00d0\u00b0\u00d1\u0081\u00d1\u201a\u00d1\u0152 " + (k + 1) + " \u00d0\u00b8\u00d0\u00b7 " + a.length);
  }
  $(".book-id-" + index + " .content__main__book--item--chapter span").text(k + 1);
  var detailViewItem = $(".book-id-" + index + " .progress__bar--progress, .book-id-" + index + " .progress__bar--player .progress__bar--pin");
  if (a[k].duration < 100) {
    detailViewItem.addClass("smooth-transition");
  } else {
    $(".book-id-" + index + " .progress__bar--progress, .book-id-" + index + " .progress__bar--player .progress__bar--pin").removeClass("smooth-transition");
  }
  if (!bo[index].getBookPurchaseIsNeed() && bo[index].getPosition()) {
    var dx = bo[index].getPosition();
    a = bo[index].getTracksMeta();
    var j = a.findIndex(function(timeline_mode) {
      return timeline_mode.id == bo[index].getCurrentTrack();
    });
    dt = a[j].duration;
    /** @type {number} */
    var pct = dx / dt * 100 || 0;
    $(".book-id-" + index + " .player-time-current").html(secondsToHMS(parseInt(dx)));
    $(".book-id-" + index + " .progress__bar--player").slider("value", pct);
    $(".book-id-" + index + " .chapter__current .chapter__default--progress").css("width", pct + "%");
    b_setPercent(index);
  }
};
/**
 * @param {string} i
 * @return {undefined}
 */
function b_loadPlayerData(i) {
  var build = bookData[i];
  var apis = bookData[i].items;
  $(".menu__player--wrapper,.player__wrapper--bar").removeClass("unloaded");
  $(".player__title--main .wrapper, .player__wrapper--bar--caption").text(build.titleonly);
  $(".player__wrapper--bar--author").text(build.author);
  $(".player__picture").css("background-image", "url(" + build.preview + ")");
  $(".menu__player--content .cover__wrapper--image").css("background-image", "url(" + build.preview + ")");
  $(".book-id-" + i + " .book--chapter-current").text("\u00d0\u00a7\u00d0\u00b0\u00d1\u0081\u00d1\u201a\u00d1\u0152 " + (bo[i].getCurrentTrack() + 1) + " \u00d0\u00b8\u00d0\u00b7 " + apis.length);
  $(".menu__player--wrapper .tooltips, .js-book-data").empty();
  if (build.sTextAuthor) {
    $(".menu__player--wrapper .tooltips").append(build.sTextAuthor);
  }
  if (build.sTextPerformer) {
    $(".menu__player--wrapper .tooltips").append(build.sTextPerformer);
  }
  $(".menu__player--wrapper .js-vote-author").lsVote({
    urls : {
      vote : aRouter.ajax + "vote/author/"
    }
  });
  $(".menu__player--wrapper .js-vote-performer").lsVote({
    urls : {
      vote : aRouter.ajax + "vote/performer/"
    }
  });
  $(".js-book-data").append(build.sTextFav);
  $(".js-book-data .ls-favourite").lsFavourite({
    urls : {
      toggle : aRouter.ajax + "favourite/topic/"
    }
  });
  $(".js-book-data .ls-vote").lsVote({
    urls : {
      vote : aRouter.ajax + "vote/topic/"
    }
  });
  $(".menu__player--wrapper .link__backtobook").attr("href", bookData[i].bookurl);
  pjax.refresh();
  b_init_buttons(i);
  b_init_sliders(i);
  b_init_chapters(i);
  adoptButtons(i);
  b_setCurrentChapter(i, bo[i].getCurrentTrack(), apis);
}
/**
 * @param {string} i
 * @param {string} name
 * @return {undefined}
 */
var b_setChapters = function init(i, name) {
  if (name == "book") {
    /** @type {string} */
    var element = ".bookpage--chapters[data-bid=" + i + "]";
  } else {
    /** @type {string} */
    element = ".menu__player--content-chapters .global__popup--content";
    var rootDiv = $(".bookpage--chapters.player--chapters[data-bid=" + i + "]");
    if ($(".chapter__default", rootDiv).attr("data-pos")) {
      console.log("bookPlaylist already loaded, copying");
      $(element).html($(rootDiv).html());
      b_init_chapters(i);
      return;
    }
  }
  var $span = $(element + " .chapter__default");
  $span.eq(0).removeClass("chapter__current");
  var html = $span[0].outerHTML;
  $span.remove();
  $.each(bookData[i].items, function(index, data) {
    $(element).append(html).html();
    var $el = $(element + " .chapter__default").eq(index);
    if (bo[i].getBookPurchaseIsNeed()) {
      $el.addClass("chapter__hidden");
    } else {
      $el.attr("data-pos", data.duration);
      $el.attr("data-id", index);
      $el.attr("data-fileid", data.id);
    }
    $(".chapter__default--title", $(element + " .chapter__default").eq(index)).html(data.name);
    $(".chapter__default--time", $(element + " .chapter__default").eq(index)).html(secondsToHMS(data.duration));
  });
  if (bo[i].getBookPurchaseIsNeed()) {
    $(element).css("overflow-y", "hidden");
    $(element).prepend(html).html();
    var target = $(element + " .chapter__default").eq(0);
    /** @type {number} */
    demoItemDuration = parseInt(bo[i].getDuration());
    target.attr("data-pos", demoItemDuration);
    target.attr("data-id", 0);
    target.attr("data-fileid", 0);
    $(".chapter__default--title", target).html("\u00d0\u00a4\u00d1\u20ac\u00d0\u00b0\u00d0\u00b3\u00d0\u00bc\u00d0\u00b5\u00d0\u00bd\u00d1\u201a");
    $(".chapter__default--time", target).html(secondsToHMS(demoItemDuration));
  }
  b_init_chapters(i);
};
/**
 * @param {string} i
 * @return {undefined}
 */
var b_init_chapters = function init(i) {
  $(".player--chapters[data-bid=" + i + "] .chapter__default").not(".chapter__hidden").off("click").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    /** @type {number} */
    var whiteRating = parseInt($(this).attr("data-id"));
    /** @type {number} */
    var ele = parseInt($(this).attr("data-fileid"));
    if (i == player_bid) {
      if (bo[i].getCurrentTrack() == ele) {
        /** @type {number} */
        var r = 0;
        var rHeaviestRain = bo[i].getDuration();
        /** @type {number} */
        var w = (event.pageX - $(this).offset().left) / $(this).outerWidth() * 100;
        /** @type {number} */
        var end = parseInt(r + (rHeaviestRain - r) / 100 * w);
        bo[i].seek(end);
        $(".book-id-" + i + " .player-time-current").html(secondsToHMS(end - r));
        $(".chapter__default--progress", this).css("width", w + "%");
      } else {
        b_setCurrentChapter(i, ele, bo[i].getTracksMeta());
        bo[i].play(ele);
      }
    } else {
      if (bo[i].getCurrentTrack() != ele) {
        bo[i].play(ele);
      }
      b_setPlayer(i);
      bo[i].play();
    }
  });
};
/**
 * @param {string} name
 * @param {string} data
 * @return {undefined}
 */
function b_loadBookData(name, data) {
  /**
   * @param {string} name
   * @param {string} aliases
   * @return {undefined}
   */
  function command(name, aliases) {
    b_setChapters(name, aliases);
    if (aliases == "book") {
      b_init_buttons(name);
      b_init_sliders_bookpage(name);
      b_setCurrentChapter(name, bo[name].getCurrentTrack(), bo[name].getTracksMeta());
      scrollToCurrentChapter(name);
    } else {
      /** @type {string} */
      player_bid = name;
      b_loadPlayerData(name);
    }
  }
  if (bookData[name] !== undefined) {
    adoptButtons(name);
    if (!bo[name].getBookPurchaseIsNeed()) {
      $(".book--player.book-id-" + page_bid).removeClass("unloaded");
    }
    command(name, data);
    return;
  }
  ls.ajax.load(aRouter.ajax + "b/" + name, {
    bid : name,
    hash : enc_hash,
    type : "biblio"
  }, function(loadedPlugin) {
    if (!loadedPlugin.error) {
      /** @type {!Object} */
      bookData[name] = loadedPlugin;
      bookData[name].items = bo[name].getTracksMeta();
      adoptButtons(name);
      if (!bo[name].getBookPurchaseIsNeed()) {
        $(".book--player.book-id-" + page_bid).removeClass("unloaded");
      }
      command(name, data);
    } else {
      console.log("loading error");
      loadPlayerError(name);
    }
  }, {
    showProgress : false
  });
}
/**
 * @param {string} data
 * @return {undefined}
 */
var b_setPlayer = function save(data) {
  if (player_bid) {
    unloadPlayer();
  }
  $(".menu__player--wrapper,.player__wrapper--bar").addClass("book-id-" + data);
  $(".menu__player--wrapper,.player__wrapper--bar,.menu__player--wrapper .player__speed,.menu__player--content-chapters").attr("data-bid", data);
  $(".player__wrapper--bar").addClass("open");
  b_loadBookData(data, "player");
  if (data == page_bid) {
    $(".menu__player--wrapper").addClass("samepage");
  }
};
/**
 * @param {string} i
 * @return {undefined}
 */
var b_init_buttons = function postLink(i) {
  var items = bookData[i].items;
  if (bo[i].getBookPurchaseIsNeed()) {
    $(".book-id-" + i + " .shop--buttons").removeClass("hidden");
    $(".book-id-" + i + " .shop--button-buy").off("click").on("click", function(e) {
      e.preventDefault();
      if (document.body.classList.contains("layout--user-role-user")) {
        bo[i].startPurchaseBook();
      } else {
        showPopupWindow(e, "global__popup--auth");
      }
    });
    $("#comments[data-target-bid=" + i + "] .ls-comment .js-comment-reply").addClass("hidden");
  } else {
    $("article[data-bid=" + i + "] .js-vote-topic").removeClass("ls-vote--locked");
    $("#comments[data-target-bid=" + i + "] .ls-comment-form").removeClass("hidden");
    $(".book-id-" + i + " .button__player--back").off("click").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
      var index = items.findIndex(function(timeline_mode) {
        return timeline_mode.id == bo[i].getCurrentTrack();
      });
      if (index == 0) {
        bo[i].seek(0);
      } else {
        var layerId = items[index - 1].id;
        bo[i].play(layerId);
      }
    });
    $(".book-id-" + i + " .button__player--forward").off("click").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
      var begin = items.findIndex(function(timeline_mode) {
        return timeline_mode.id == bo[i].getCurrentTrack();
      });
      if (begin != items.length - 1) {
        var layerId = items[begin + 1].id;
        bo[i].play(layerId);
      }
    });
  }
  $(".book-id-" + i + " .button__player--play").off("click").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    if (i == player_bid) {
      if (bo[i].getPlayerState() == "playing") {
        bo[i].pause();
      } else {
        bo[i].play();
      }
    } else {
      b_setPlayer(i);
      bo[i].play();
    }
  });
  $(".book-id-" + i + " .button__player--back-text").off("click").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    bo[i].rw();
  });
  $(".book-id-" + i + " .button__player--forward-text").off("click").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    bo[i].ff();
  });
};
/**
 * @param {string} id
 * @return {undefined}
 */
var b_playerEvents = function init(id) {
  if (!bo[id].getBookPurchaseIsNeed()) {
    $(".container__ad.ad1,.container__ad.ad2").hide();
  }
  /** @type {number} */
  var val = $.cookie("a_rate_" + id) != null ? parseFloat($.cookie("a_rate_" + id)) : 1;
  var frames = bo[id].getTracksMeta();
  user_rates[id] = val;
  bo[id].setPlaybackRate(user_rates[id]);
  bo[id].setVolume(user_volume);
  bo[id].on(bo[id].EVENT_PLAY, function() {
    console.log("EVENT_PLAY");
    $(".book-id-" + id + " .button__player--play").addClass("playing");
    b_setCurrentChapter(id, bo[id].getCurrentTrack(), frames);
    scrollToCurrentChapter(id);
    b_chapterSetIcon(id, icon_play);
    $.removeCookie("a_lastbid", {
      path : "/"
    });
    b_setPercent(id);
    if (bo[id].getBookPurchaseIsNeed() && bo[id].getDuration()) {
      var ele = $(".book-id-" + id + " .bookpage--chapters,.book-id-" + id + " .global__popup--content");
      /** @type {number} */
      var dt = parseInt(bo[id].getDuration());
      $(".chapter__current", ele).attr("data-pos", dt);
      $(".chapter__current .chapter__default--time", ele).html(secondsToHMS(dt));
      $(".chapter__current .chapter__default--time", ele).prepend('<span><span class="player-time-current">00:00</span> / </span>');
      $(".book-id-" + id + " .player-time-duration").text(secondsToHMS(dt));
      $(".book-id-" + id + " .progress__bar--player").attr("data-pos-end", dt);
    }
    if (timerDuration) {
      if ((typeof timer === "undefined" ? "undefined" : _typeof(timer)) !== "object") {
        window.timer = new setTimer(function() {
          bo[id].pause();
          removeTimer(id);
        }, timerDuration);
      } else {
        timer.resume();
      }
    }
  });
  bo[id].on(bo[id].EVENT_PAUSE, function() {
    $(".book-id-" + id + " .button__player--play").removeClass("playing");
    scrollToCurrentChapter(id);
    b_chapterSetIcon(id, icon_pause);
    b_setPercent(id);
    if ((typeof timer === "undefined" ? "undefined" : _typeof(timer)) === "object") {
      timer.pause();
    }
  });
  bo[id].on(bo[id].EVENT_STATE, function(state) {
    if (state == "idle") {
      b_changeDurationData(id, bo[id].getPlaybackRate());
      animationUnloader(id);
    }
  });
  bo[id].on(bo[id].EVENT_PROGRESS, function(options) {
    var offset = options.position;
    if (offset <= 0) {
      return;
    }
    /** @type {number} */
    var pct = offset / options.duration * 100 || 0;
    $(".book-id-" + id + " .player-time-current").html(secondsToHMS(parseInt(offset)));
    $(".book-id-" + id + " .progress__bar--player").slider("value", pct);
    $(".book-id-" + id + " .chapter__current .chapter__default--progress").css("width", pct + "%");
  });
  bo[id].on(bo[id].EVENT_ENDED, function() {
    console.log("EVENT_ENDED");
    var i = frames.findIndex(function(timeline_mode) {
      return timeline_mode.id == bo[id].getCurrentTrack();
    });
    if (i == frames.length - 1 || bo[id].getBookPurchaseIsNeed()) {
      if (!bo[id].getBookPurchaseIsNeed()) {
        b_setPercent(id, 100);
      }
      $(".book-id-" + id + " .player-time-duration").html($(".book-id-" + id + " .player-time-current").html());
      removeTimer(id);
      $.removeCookie("a_lastbid", {
        path : "/"
      });
    } else {
      b_setCurrentChapter(id, frames[i].id, frames);
      scrollToCurrentChapter(id);
      b_chapterSetIcon(id, icon_play);
    }
  });
  bo[id].on(bo[id].EVENT_PLAYBACKRATE_CHANGE, function(canCreateDiscussions) {
    val = bo[id].getPlaybackRate().toFixed(2);
    user_rates[id] = val;
    if (val == 1) {
      $.removeCookie("a_rate_" + id, {
        path : "/"
      });
    } else {
      $.cookie("a_rate_" + id, val, {
        expires : 30,
        path : "/"
      });
    }
    /** @type {string} */
    var rate_value = ((val - 1) * 100).toFixed();
    if (rate_value == 0) {
      $(".book-id-" + id + " .speed_value, .mobile__popup--speed[data-bid=" + id + "] .speed_value").html("1x");
      $(".js-topic .book-id-" + id + " .speed__hor .speed_value").html("\u00d0\u00a1\u00d0\u00ba\u00d0\u00be\u00d1\u20ac\u00d0\u00be\u00d1\u0081\u00d1\u201a\u00d1\u0152");
    } else {
      $(".book-id-" + id + " .speed_value, .mobile__popup--speed[data-bid=" + id + "] .speed_value").html(rate_value > 1 ? "+" + rate_value + "%" : rate_value + "%");
    }
    b_changeDurationData(id, val);
  });
  bo[id].on(bo[id].EVENT_VOLUME, function(dist) {
    user_volume = dist.toFixed(2);
    $.cookie("a_volume", dist.toFixed(2), {
      expires : 365,
      path : "/"
    });
    /** @type {string} */
    var text_remaining = (dist * 100).toFixed();
    $(".volume_value").html(text_remaining + "%");
    $(".volume-size").removeClass("active");
    if (text_remaining > 10 && text_remaining < 40) {
      $(".volume-s1").addClass("active");
    } else {
      if (text_remaining >= 40 && text_remaining < 80) {
        $(".volume-s1,.volume-s2").addClass("active");
      } else {
        if (text_remaining >= 80) {
          $(".volume-s1,.volume-s2,.volume-s3").addClass("active");
        }
      }
    }
  });
};
/**
 * @param {string} i
 * @param {string} id
 * @param {string} projectileType
 * @return {undefined}
 */
var init_player_biblio = function init(i, id, projectileType) {
  if (typeof bo[i] !== "undefined") {
    animationUnloader(i);
    b_init_buttons(i);
    b_init_sliders_bookpage(i);
    b_setChapters(i, "book");
    if (!bo[i].getBookPurchaseIsNeed()) {
      $(".book-id-" + i).removeClass("unloaded");
    }
    if (bo[i].getPlayerState() == "playing") {
      $(".book-id-" + i + " .button__player--play").addClass("playing");
    }
    b_setCurrentChapter(i, bo[i].getCurrentTrack(), bookData[i].items);
    b_changeDurationData(i, bo[i].getPlaybackRate());
    adoptButtons(i);
    scrollToCurrentChapter(i);
    b_setPercent(i);
  } else {
    bo[i] = (new Biblio).init({
      book_id : id,
      referal_key : "da5e30be3ef72929ccdea6f734d8bf18bf73d3cf89bc2274607605e0f3d253bf1ed6af657f349b0aea2b028bb7cdbf81bac7",
      user_key : projectileType,
      selector : null
    });
    b_loadBookData(i, "book");
    b_playerEvents(i);
  }
};
