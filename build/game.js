/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\n  --fg-1: #000;\n  --fg-2: #4acfef;\n  --fg-3: #caa2d2;\n}\n\nhtml, body { height: 100%; margin: 0; }\n\nbody {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  color: var(--fg-1);\n  background-color: white;\n  font-family: 'Courier New', Courier, monospace;\n}\n\nheader {\n  width: 600px;\n  height: 100px;\n  font-size: 14px;\n  border: 1px solid var(--fg-1);\n  border-bottom: none;\n}\n\nheader > button, header > span, header > div {\n  margin: 8px 8px 0 8px;\n}\n\nheader > button {\n  display: block;        \n  float: right;\n  height: 30px;\n  min-width: 50px;\n  font-weight: 300;\n  padding: 3px 9px;\n  margin-left: 4px;\n  font-size: 14px;\n  font-family: 'Courier New', Courier, monospace;\n  color: var(--fg-1);\n  background: none;\n  border: 1px solid var(--fg-1);\n  box-shadow: 2px 2px 1px  rgb(177, 135, 201);\n}\n\nheader button:hover {\n  color: var(--fg-2);\n  border: 1px solid var(--fg-3);\n}\n\nheader button:active {\n  box-shadow: none;\n  margin: 9px 8px 0px 4px;\n  box-shadow: -1px -1px 1px  rgb(76, 61, 85);\n}\n\nheader div {\n  margin-top: 76px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n}\n\nheader > span {\n  float: left;\n  clear: left;\n}\n\ncanvas {\n  display: block;\n  border: 1px solid var(--fg-1)\n}\n\n:not(button) { cursor: default; }\nbutton, a { cursor: pointer; }\n\na {\n  color: var(--fg-3);\n  text-decoration: none;\n  transition: 0.18s linear all;\n}\n\na:hover {\n  color: var(--fg-2);\n  letter-spacing: 1.1pt;\n  transition: 0.18s linear all;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/index */ "./src/types/index.ts");
/* harmony import */ var _objects_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/index */ "./src/objects/index.ts");
/* harmony import */ var _ux_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux/index */ "./src/ux/index.ts");




var GameDifficulty;
(function (GameDifficulty) {
    GameDifficulty[GameDifficulty["EASY"] = 300] = "EASY";
    GameDifficulty[GameDifficulty["MEDIUM"] = 150] = "MEDIUM";
    GameDifficulty[GameDifficulty["DIFFICULT"] = 50] = "DIFFICULT";
})(GameDifficulty || (GameDifficulty = {}));
class Game {
    static init() {
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["Canvas"].init(document.querySelector('canvas'));
        const body = document.querySelector('body');
        body.onkeyup = _ux_index__WEBPACK_IMPORTED_MODULE_3__["Controls"].onKeyUp;
        Game.ready();
    }
    static ready() {
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["Console"].init();
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["Board"].init();
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["Board"].draw();
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["GUI"].init();
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["GUI"].draw();
        Game.player = new _objects_index__WEBPACK_IMPORTED_MODULE_2__["Snake"]({ X: 0, Y: 0 });
        Game.player.direction = _types_index__WEBPACK_IMPORTED_MODULE_1__["Direction"].RIGHT;
        Game.clock = new _types_index__WEBPACK_IMPORTED_MODULE_1__["Timer"](GameDifficulty.DIFFICULT, 0, Game.onClockTick);
    }
    static start() {
        if (Game.isRunning)
            return;
        if (Game.clock.isPaused) {
            Game.pause();
            return;
        }
        Game.isRunning = true;
        Game.clock.start();
    }
    static pause() {
        if (Game.clock.isPaused) {
            Game.isRunning = true;
            Game.clock.resume();
            return;
        }
        Game.clock.pause();
        Game.isRunning = false;
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["GUI"].draw();
    }
    static reset() {
        Game.clock && Game.clock.stop(); // eslint-disable-line
        Game.isRunning = false;
        Game.ready();
    }
    static onClockTick() {
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["Controls"].processInput();
        Game.player.processTurn();
        if (Game.clock.tick === _types_index__WEBPACK_IMPORTED_MODULE_1__["ClockTick"].EVEN) {
            ++Game.coinCounter;
            if (Game.coinCounter >= 2) {
                Game.coinCounter = 0;
                if (!Math.floor(Math.random() + 0.5)) {
                    const probability = (_objects_index__WEBPACK_IMPORTED_MODULE_2__["Coin"].coinsActive + 0.5) / 5;
                    if (!Math.floor(Math.random() + probability)) {
                        if (!Math.floor(Math.random() + 0.8)) {
                            const coin = _objects_index__WEBPACK_IMPORTED_MODULE_2__["Coin"].createRandom();
                            _ux_index__WEBPACK_IMPORTED_MODULE_3__["Board"].placeAtRandom(coin);
                        }
                        else if (!Math.floor(Math.random() + 0.5)) {
                            const speedUpCoin = new _objects_index__WEBPACK_IMPORTED_MODULE_2__["SpeedCoin"](_types_index__WEBPACK_IMPORTED_MODULE_1__["Speed"].FAST);
                            _ux_index__WEBPACK_IMPORTED_MODULE_3__["Board"].placeAtRandom(speedUpCoin);
                        }
                        else {
                            const speedDownCoin = new _objects_index__WEBPACK_IMPORTED_MODULE_2__["SpeedCoin"](_types_index__WEBPACK_IMPORTED_MODULE_1__["Speed"].SLOW);
                            _ux_index__WEBPACK_IMPORTED_MODULE_3__["Board"].placeAtRandom(speedDownCoin);
                        }
                    }
                }
            }
        }
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["Board"].draw();
        _ux_index__WEBPACK_IMPORTED_MODULE_3__["GUI"].draw();
    }
}
Game.hiScore = 0;
Game.isRunning = false;
Game.coinCounter = 0;
Game.init();


/***/ }),

/***/ "./src/objects/coin.ts":
/*!*****************************!*\
  !*** ./src/objects/coin.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coin; });
/* harmony import */ var _ux_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ux/index */ "./src/ux/index.ts");

class Coin {
    constructor(value) {
        this.value = value;
        this.index = Coin.coinsIndex;
        ++Coin.coinsIndex;
        ++Coin.coinsActive;
    }
    static createRandom() {
        return new Coin(Coin.values[Math.floor(Math.random() * Coin.values.length)]);
    }
    handleCollision(snake) {
        snake.points += this.value;
        snake.maxLength += 8;
        this.destroy();
    }
    draw() {
        if (!this.position)
            return;
        const x = (this.position.X * _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize) + (_ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize / 2);
        const y = (this.position.Y * _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize) + (_ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize / 2);
        const r = (_ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize / 2) - 1;
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Canvas"].context.beginPath();
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Canvas"].context.arc(x, y, r, 0, 2 * Math.PI, false);
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Canvas"].context.strokeStyle = '#FF0';
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Canvas"].context.fillStyle = '#CC0';
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Canvas"].context.stroke();
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Canvas"].context.fill();
    }
    destroy() {
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].removeObjectAt(this.position);
        delete Coin.instances[this.index];
        --Coin.coinsActive;
    }
}
Coin.values = [200, 600, 800, 1000, 2000];
Coin.instances = {};
Coin.coinsIndex = 0;
Coin.coinsActive = 0;


/***/ }),

/***/ "./src/objects/index.ts":
/*!******************************!*\
  !*** ./src/objects/index.ts ***!
  \******************************/
/*! exports provided: Coin, Snake, SpeedCoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin */ "./src/objects/coin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coin", function() { return _coin__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ "./src/objects/snake.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return _snake__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _speedCoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speedCoin */ "./src/objects/speedCoin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeedCoin", function() { return _speedCoin__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),

/***/ "./src/objects/snake.ts":
/*!******************************!*\
  !*** ./src/objects/snake.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Snake; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.ts");
/* harmony import */ var _snakeSegment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snakeSegment */ "./src/objects/snakeSegment.ts");
/* harmony import */ var _ux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ux/index */ "./src/ux/index.ts");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/index */ "./src/types/index.ts");




class Snake extends _snakeSegment__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(position) {
        super(position);
        this.jumpDistance = 8;
        this.skipNextTurn = false;
        this.hitDetected = false;
        this.isAlive = false;
        this.speed = _types_index__WEBPACK_IMPORTED_MODULE_3__["Speed"].SLOW;
        this.direction = _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].NONE;
        this.hiScore = 0;
        this.points = 0;
        this.lives = 999;
        this.segments = [];
        this.maxLength = Snake.defaultLength;
        this.segments[0] = this;
        this.isAlive = true;
        this.name = 'nealli';
        _ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].placeObject(this, position);
    }
    jump() {
        const position = _types_index__WEBPACK_IMPORTED_MODULE_3__["Position"].copy(this.position);
        switch (this.direction) {
            case _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].UP:
                position.Y -= this.jumpDistance;
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].DOWN:
                position.Y += this.jumpDistance;
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].LEFT:
                position.X -= this.jumpDistance;
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].RIGHT:
                position.X += this.jumpDistance;
                break;
            default:
                console.log('unknown direction ', this.direction);
                break;
        }
        this.updateBoard(position);
    }
    onHitScreenEdge(edge) {
        // switch (edge) {
        //   case ScreenEdge.NORTH:
        //   case ScreenEdge.SOUTH:
        //   case ScreenEdge.EAST:
        //   case ScreenEdge.WEST:
        // }
    }
    die() {
        this.hitDetected = true;
        this.hiScore = this.points > this.hiScore ? this.points : this.hiScore;
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].hiScore = this.hiScore > _game__WEBPACK_IMPORTED_MODULE_0__["default"].hiScore ? this.hiScore : _game__WEBPACK_IMPORTED_MODULE_0__["default"].hiScore;
        if (!this.lives) {
            this.isAlive = false;
            _game__WEBPACK_IMPORTED_MODULE_0__["default"].reset();
            return;
        }
        --this.lives;
        this.destroy();
        this.position = new _types_index__WEBPACK_IMPORTED_MODULE_3__["Position"](0, 0);
        this.direction = _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].NONE;
    }
    setSpeed(speed) {
        this.speed = speed;
        this.skipNextTurn = (speed === _types_index__WEBPACK_IMPORTED_MODULE_3__["Speed"].SLOW);
    }
    processTurn() {
        if (!this.isAlive)
            return;
        // Skip every other clock tick unless moving fast
        if (this.speed !== _types_index__WEBPACK_IMPORTED_MODULE_3__["Speed"].FAST && _game__WEBPACK_IMPORTED_MODULE_0__["default"].clock.tick === _types_index__WEBPACK_IMPORTED_MODULE_3__["ClockTick"].ODD)
            return;
        // Skip 3 clock tick if moving slow
        if (this.speed === _types_index__WEBPACK_IMPORTED_MODULE_3__["Speed"].SLOW && _game__WEBPACK_IMPORTED_MODULE_0__["default"].clock.tick === _types_index__WEBPACK_IMPORTED_MODULE_3__["ClockTick"].EVEN) {
            this.skipNextTurn = !this.skipNextTurn;
            if (this.skipNextTurn)
                return;
        }
        this.hitDetected = false;
        let isMoving = true;
        const pos = _types_index__WEBPACK_IMPORTED_MODULE_3__["Position"].copy(this.position);
        switch (this.direction) {
            case _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].UP:
                pos.Y -= 1;
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].DOWN:
                pos.Y += 1;
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].LEFT:
                pos.X -= 1;
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_3__["Direction"].RIGHT:
                pos.X += 1;
                break;
            default:
                // Direction.NONE
                isMoving = false;
                break;
        }
        if (isMoving) {
            if (pos.X < 0) {
                pos.X = _ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].width - 1;
            }
            else if (pos.Y < 0) {
                pos.Y = _ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].height - 1;
            }
            else if (pos.X === _ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].width) {
                pos.X = 0;
            }
            else if (pos.Y === _ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].height) {
                pos.Y = 0;
            }
            if (_ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].grid[pos.X][pos.Y]) {
                const object = _ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].grid[pos.X][pos.Y];
                object.handleCollision(this);
            }
            if (!this.isAlive) {
                this.destroy();
            }
            else if (!this.hitDetected) {
                this.updateBoard(pos);
            }
        }
    }
    updateBoard(pos) {
        let lastPosition = _types_index__WEBPACK_IMPORTED_MODULE_3__["Position"].copy(this.position);
        for (let i = 0, s = this.segments.length; i !== s; i++) {
            const segment = this.segments[i];
            const newPosition = (i === 0) ? pos : lastPosition;
            lastPosition = segment.position;
            _ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].moveObject(segment, newPosition);
        }
        if (this.segments.length <= this.maxLength) {
            const newSegment = new _snakeSegment__WEBPACK_IMPORTED_MODULE_1__["default"](lastPosition);
            this.segments.push(newSegment);
            _ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].placeObject(newSegment, lastPosition);
        }
    }
    destroy() {
        for (let i = 0, s = this.segments.length; i !== s; i++) {
            _ux_index__WEBPACK_IMPORTED_MODULE_2__["Board"].removeObjectAt(this.segments[i].position);
        }
        this.segments = [this];
        this.maxLength = Snake.defaultLength;
    }
}
Snake.defaultLength = 12;


/***/ }),

/***/ "./src/objects/snakeSegment.ts":
/*!*************************************!*\
  !*** ./src/objects/snakeSegment.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SnakeSegment; });
/* harmony import */ var _ux_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ux/index */ "./src/ux/index.ts");

class SnakeSegment {
    constructor(position) {
        this.colorIndex = -1;
        this.position = position;
    }
    draw() {
        const sx = (this.position.X * _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize);
        const sy = (this.position.Y * _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize);
        const size = _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize;
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Canvas"].fillRect(sx, sy, size, size, this.getColor());
    }
    getColor() {
        const len = SnakeSegment.colors.length;
        this.colorIndex++;
        return SnakeSegment.colors[this.colorIndex % len];
    }
    handleCollision(snake) {
        snake.die();
    }
}
SnakeSegment.colors = [
    '#FF0000', '#FF9966',
    '#FFFA66', '#66FF66',
    '#66FFFD', '#6699FF',
    '#7966FF', '#F366FF'
];


/***/ }),

/***/ "./src/objects/speedCoin.ts":
/*!**********************************!*\
  !*** ./src/objects/speedCoin.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpeedCoin; });
/* harmony import */ var _ux_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ux/index */ "./src/ux/index.ts");

class SpeedCoin {
    constructor(speed) {
        this.speed = speed;
        this.color = SpeedCoin.colors[speed];
        this.index = SpeedCoin.itemsIndex;
        ++SpeedCoin.itemsIndex;
        ++SpeedCoin.itemsActive;
    }
    handleCollision(snake) {
        snake.setSpeed(this.speed);
        this.destroy();
    }
    draw() {
        if (!this.position)
            return;
        const x = (this.position.X * _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize) + 2;
        const y = (this.position.Y * _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize) + 2;
        const size = _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].blockSize - 4;
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Canvas"].drawRect(x, y, size, size, this.color);
    }
    destroy() {
        _ux_index__WEBPACK_IMPORTED_MODULE_0__["Board"].removeObjectAt(this.position);
        delete SpeedCoin.instances[this.index];
        --SpeedCoin.itemsActive;
    }
}
SpeedCoin.colors = ['#3366FF', '#FF1400'];
SpeedCoin.instances = {};
SpeedCoin.itemsIndex = 0;
SpeedCoin.itemsActive = 0;


/***/ }),

/***/ "./src/types/enums.ts":
/*!****************************!*\
  !*** ./src/types/enums.ts ***!
  \****************************/
/*! exports provided: GameKey, ScreenEdge, Direction, Speed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameKey", function() { return GameKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenEdge", function() { return ScreenEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speed", function() { return Speed; });
var GameKey;
(function (GameKey) {
    GameKey[GameKey["UP"] = 38] = "UP";
    GameKey[GameKey["DOWN"] = 40] = "DOWN";
    GameKey[GameKey["LEFT"] = 37] = "LEFT";
    GameKey[GameKey["RIGHT"] = 39] = "RIGHT";
    GameKey[GameKey["SPACEBAR"] = 32] = "SPACEBAR";
})(GameKey || (GameKey = {}));
var ScreenEdge;
(function (ScreenEdge) {
    ScreenEdge[ScreenEdge["NORTH"] = 0] = "NORTH";
    ScreenEdge[ScreenEdge["SOUTH"] = 1] = "SOUTH";
    ScreenEdge[ScreenEdge["EAST"] = 2] = "EAST";
    ScreenEdge[ScreenEdge["WEST"] = 3] = "WEST";
})(ScreenEdge || (ScreenEdge = {}));
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
    Direction[Direction["NONE"] = 4] = "NONE";
})(Direction || (Direction = {}));
var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 0] = "SLOW";
    Speed[Speed["FAST"] = 1] = "FAST";
    Speed[Speed["NORMAL"] = 2] = "NORMAL";
})(Speed || (Speed = {}));


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! exports provided: Position, GameKey, ScreenEdge, Direction, Speed, ClockType, ClockTick, Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position */ "./src/types/position.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _position__WEBPACK_IMPORTED_MODULE_0__["Position"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/types/enums.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameKey", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["GameKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenEdge", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["ScreenEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["Direction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Speed", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["Speed"]; });

/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ "./src/types/timer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClockType", function() { return _timer__WEBPACK_IMPORTED_MODULE_2__["ClockType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClockTick", function() { return _timer__WEBPACK_IMPORTED_MODULE_2__["ClockTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return _timer__WEBPACK_IMPORTED_MODULE_2__["Timer"]; });






/***/ }),

/***/ "./src/types/position.ts":
/*!*******************************!*\
  !*** ./src/types/position.ts ***!
  \*******************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
class Position {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    }
    static copy(position) {
        return new Position(position.X, position.Y);
    }
}


/***/ }),

/***/ "./src/types/timer.ts":
/*!****************************!*\
  !*** ./src/types/timer.ts ***!
  \****************************/
/*! exports provided: ClockType, ClockTick, Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockType", function() { return ClockType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockTick", function() { return ClockTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
var ClockType;
(function (ClockType) {
    ClockType[ClockType["TIMED"] = 0] = "TIMED";
    ClockType[ClockType["INFINITE"] = 1] = "INFINITE";
})(ClockType || (ClockType = {}));
var ClockTick;
(function (ClockTick) {
    ClockTick[ClockTick["EVEN"] = 0] = "EVEN";
    ClockTick[ClockTick["ODD"] = 1] = "ODD";
})(ClockTick || (ClockTick = {}));
class Timer {
    constructor(interval, duration, handler) {
        this.tick = ClockTick.EVEN;
        this.handler = () => { console.log('No clock event'); };
        this.onElapsed = () => {
            if (this.isPaused)
                return;
            this.tick = (this.tick === ClockTick.EVEN) ? ClockTick.ODD : ClockTick.EVEN;
            this.handler();
            if (this.type === ClockType.TIMED) {
                this.stop();
            }
        };
        this.interval = interval;
        this.handler = handler;
        this.type = (duration === 0) ? ClockType.INFINITE : ClockType.TIMED;
    }
    start() {
        this.isRunning = true;
        this.handle = (this.type === ClockType.INFINITE)
            ? window.setInterval(this.onElapsed.bind(this), this.interval)
            : window.setTimeout(this.onElapsed.bind(this), this.interval);
    }
    stop() {
        this.isRunning = false;
        return this.type === ClockType.INFINITE
            ? window.clearInterval(this.handle)
            : window.clearTimeout(this.handle);
    }
    pause() { this.isPaused = true; }
    resume() { this.isPaused = false; }
}


/***/ }),

/***/ "./src/ux/board.ts":
/*!*************************!*\
  !*** ./src/ux/board.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/index */ "./src/types/index.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/ux/canvas.ts");


class Board {
    static placeObject(object, position) {
        Board.grid[position.X][position.Y] = object;
        object.position = _types_index__WEBPACK_IMPORTED_MODULE_0__["Position"].copy(position);
    }
    static removeObjectAt(position) {
        if (position) {
            Board.grid[position.X][position.Y] = null;
        }
    }
    static moveObject(object, newPosition) {
        Board.removeObjectAt(object.position);
        Board.placeObject(object, newPosition);
    }
    static placeAtRandom(object) {
        const position = Board.generateRandomPosition();
        Board.moveObject(object, position);
    }
    static generateRandomPosition() {
        let position;
        while (!position) {
            const x = Math.floor(Math.random() * Board.width);
            const y = Math.floor(Math.random() * Board.height);
            if (!Board.grid[x][y]) {
                position = new _types_index__WEBPACK_IMPORTED_MODULE_0__["Position"](x, y);
                break;
            }
        }
        return position;
    }
    static init() {
        Board.height = _canvas__WEBPACK_IMPORTED_MODULE_1__["default"].height / Board.blockSize;
        Board.width = _canvas__WEBPACK_IMPORTED_MODULE_1__["default"].width / Board.blockSize;
        Board.grid = new Array(Board.width);
        for (let i = 0, j = Board.width; i !== j; i++) {
            Board.grid[i] = new Array(Board.height);
        }
    }
    static draw() {
        _canvas__WEBPACK_IMPORTED_MODULE_1__["default"].fill(Board.bgColor);
        for (let cx = 0; cx < Board.width; cx++) {
            for (let cy = 0; cy < Board.height; cy++) {
                if (Board.grid[cx][cy]) {
                    Board.grid[cx][cy].draw();
                }
            }
        }
    }
}
Board.bgColor = '#fff';
Board.gridColor = '#001F5C';
Board.blockSize = 8;
Board.height = 0;
Board.width = 0;


/***/ }),

/***/ "./src/ux/canvas.ts":
/*!**************************!*\
  !*** ./src/ux/canvas.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
class Canvas {
    static init(el) {
        el.height = Canvas.height;
        el.width = Canvas.width;
        Canvas.context = el.getContext('2d');
    }
    static fill(color) {
        Canvas.context.beginPath();
        Canvas.context.rect(0, 0, Canvas.width, Canvas.height);
        Canvas.context.fillStyle = color;
        Canvas.context.fill();
    }
    static fillRect(x, y, w, h, color) {
        Canvas.context.beginPath();
        Canvas.context.fillStyle = color;
        Canvas.context.fillRect(x, y, w, h);
    }
    static drawRect(x, y, w, h, color) {
        Canvas.context.beginPath();
        Canvas.context.lineWidth = 1;
        Canvas.context.strokeStyle = color;
        Canvas.context.rect(x, y, w, h);
        Canvas.context.stroke();
    }
}
Canvas.width = 600;
Canvas.height = 400;


/***/ }),

/***/ "./src/ux/console.ts":
/*!***************************!*\
  !*** ./src/ux/console.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Console; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.ts");

class Console {
    static init() {
        Console.buttons.start = document.querySelector('#start');
        Console.buttons.pause = document.querySelector('#pause');
        Console.buttons.reset = document.querySelector('#reset');
        Console.buttons.start.onclick = () => _game__WEBPACK_IMPORTED_MODULE_0__["default"].start();
        Console.buttons.pause.onclick = () => _game__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
        Console.buttons.reset.onclick = () => _game__WEBPACK_IMPORTED_MODULE_0__["default"].reset();
    }
}
Console.buttons = {
    start: null,
    pause: null,
    reset: null
};


/***/ }),

/***/ "./src/ux/controls.ts":
/*!****************************!*\
  !*** ./src/ux/controls.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controls; });
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/index */ "./src/types/index.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game */ "./src/game.ts");


class Controls {
    static processInput() {
        if (!Controls.lastKey)
            return;
        switch (Controls.lastKey) {
            case _types_index__WEBPACK_IMPORTED_MODULE_0__["GameKey"].UP:
                if (_game__WEBPACK_IMPORTED_MODULE_1__["default"].player.direction !== _types_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].DOWN) {
                    _game__WEBPACK_IMPORTED_MODULE_1__["default"].player.direction = _types_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].UP;
                }
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_0__["GameKey"].DOWN:
                if (_game__WEBPACK_IMPORTED_MODULE_1__["default"].player.direction !== _types_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].UP) {
                    _game__WEBPACK_IMPORTED_MODULE_1__["default"].player.direction = _types_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].DOWN;
                }
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_0__["GameKey"].LEFT:
                if (_game__WEBPACK_IMPORTED_MODULE_1__["default"].player.direction !== _types_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].RIGHT) {
                    _game__WEBPACK_IMPORTED_MODULE_1__["default"].player.direction = _types_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].LEFT;
                }
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_0__["GameKey"].RIGHT:
                if (_game__WEBPACK_IMPORTED_MODULE_1__["default"].player.direction !== _types_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].LEFT) {
                    _game__WEBPACK_IMPORTED_MODULE_1__["default"].player.direction = _types_index__WEBPACK_IMPORTED_MODULE_0__["Direction"].RIGHT;
                }
                break;
            case _types_index__WEBPACK_IMPORTED_MODULE_0__["GameKey"].SPACEBAR:
                _game__WEBPACK_IMPORTED_MODULE_1__["default"].player.jump();
                break;
            default:
                break;
        }
        Controls.lastKey = null;
    }
}
Controls.lastKey = null;
Controls.onKeyUp = (ev) => { Controls.lastKey = ev.keyCode; };


/***/ }),

/***/ "./src/ux/gui.ts":
/*!***********************!*\
  !*** ./src/ux/gui.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GUI; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/game.ts");

class GUI {
    static init() {
        GUI.header = document.querySelector('header');
        GUI.score = document.querySelector('#score');
        GUI.lives = document.querySelector('#lives');
        GUI.build = document.querySelector('#build');
    }
    static draw() {
        GUI.lives.innerText = _game__WEBPACK_IMPORTED_MODULE_0__["default"].isRunning
            ? `Lives: ${_game__WEBPACK_IMPORTED_MODULE_0__["default"].player.lives}`
            : 'Press Start';
        GUI.score.innerText = _game__WEBPACK_IMPORTED_MODULE_0__["default"].isRunning
            ? `Score: ${_game__WEBPACK_IMPORTED_MODULE_0__["default"].player.points}`
            : `Hi Score: ${_game__WEBPACK_IMPORTED_MODULE_0__["default"].hiScore}`;
    }
}


/***/ }),

/***/ "./src/ux/index.ts":
/*!*************************!*\
  !*** ./src/ux/index.ts ***!
  \*************************/
/*! exports provided: Canvas, Board, Console, Controls, GUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/ux/canvas.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _canvas__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/ux/board.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return _board__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/ux/controls.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return _controls__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console */ "./src/ux/console.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return _console__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gui */ "./src/ux/gui.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GUI", function() { return _gui__WEBPACK_IMPORTED_MODULE_4__["default"]; });









/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9iYTMyIiwid2VicGFjazovLy8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2NvaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvc25ha2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvc25ha2VTZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL3NwZWVkQ29pbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9wb3NpdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V4L2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy91eC9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V4L2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V4L2NvbnRyb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy91eC9ndWkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFRLENBQWdCO0lBQzdELENBQUM7SUFFTSxNQUFNLENBQUMsSUFBSTtRQUNoQixHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyw2Q0FBSSxDQUFDLFNBQVM7WUFDbEMsQ0FBQyxDQUFDLFVBQVUsNkNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQy9CLENBQUMsQ0FBQyxhQUFhO1FBRWpCLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLDZDQUFJLENBQUMsU0FBUztZQUNsQyxDQUFDLENBQUMsVUFBVSw2Q0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLGFBQWEsNkNBQUksQ0FBQyxPQUFPLEVBQUU7SUFDakMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ0Y7QUFDTTtBQUNGO0FBQ1I7QUFRdEIiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZmctMTogIzAwMDtcXG4gIC0tZmctMjogIzRhY2ZlZjtcXG4gIC0tZmctMzogI2NhYTJkMjtcXG59XFxuXFxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZnLTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZnLTEpO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuaGVhZGVyID4gYnV0dG9uLCBoZWFkZXIgPiBzcGFuLCBoZWFkZXIgPiBkaXYge1xcbiAgbWFyZ2luOiA4cHggOHB4IDAgOHB4O1xcbn1cXG5cXG5oZWFkZXIgPiBidXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7ICAgICAgICBcXG4gIGZsb2F0OiByaWdodDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBjb2xvcjogdmFyKC0tZmctMSk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmctMSk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDFweCAgcmdiKDE3NywgMTM1LCAyMDEpO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mZy0yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZnLTMpO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgbWFyZ2luOiA5cHggOHB4IDBweCA0cHg7XFxuICBib3gtc2hhZG93OiAtMXB4IC0xcHggMXB4ICByZ2IoNzYsIDYxLCA4NSk7XFxufVxcblxcbmhlYWRlciBkaXYge1xcbiAgbWFyZ2luLXRvcDogNzZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciA+IHNwYW4ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBjbGVhcjogbGVmdDtcXG59XFxuXFxuY2FudmFzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmctMSlcXG59XFxuXFxuOm5vdChidXR0b24pIHsgY3Vyc29yOiBkZWZhdWx0OyB9XFxuYnV0dG9uLCBhIHsgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tZmctMyk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjE4cyBsaW5lYXIgYWxsO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mZy0yKTtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjFwdDtcXG4gIHRyYW5zaXRpb246IDAuMThzIGxpbmVhciBhbGw7XFxufVwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0ICcuL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJ1xuaW1wb3J0IHsgQ2xvY2tUaWNrLCBUaW1lciwgRGlyZWN0aW9uLCBTcGVlZCB9IGZyb20gJy4vdHlwZXMvaW5kZXgnXG5pbXBvcnQgeyBDb2luLCBTbmFrZSwgU3BlZWRDb2luIH0gZnJvbSAnLi9vYmplY3RzL2luZGV4J1xuaW1wb3J0IHsgQm9hcmQsIENhbnZhcywgQ29uc29sZSwgQ29udHJvbHMsIEdVSSB9IGZyb20gJy4vdXgvaW5kZXgnXG5cbmVudW0gR2FtZURpZmZpY3VsdHkgeyBFQVNZID0gMzAwLCBNRURJVU0gPSAxNTAsIERJRkZJQ1VMVCA9IDUwIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIHB1YmxpYyBzdGF0aWMgY2xvY2s6IFRpbWVyXG4gIHB1YmxpYyBzdGF0aWMgcGxheWVyOiBTbmFrZVxuICBwdWJsaWMgc3RhdGljIGhpU2NvcmU6IG51bWJlciA9IDBcbiAgcHVibGljIHN0YXRpYyBpc1J1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZVxuICBwdWJsaWMgc3RhdGljIGNvaW5Db3VudGVyID0gMFxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdCgpOiB2b2lkIHtcbiAgICBDYW52YXMuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKSlcblxuICAgIGNvbnN0IGJvZHk6IEhUTUxCb2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkub25rZXl1cCA9IENvbnRyb2xzLm9uS2V5VXBcblxuICAgIEdhbWUucmVhZHkoKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZWFkeSgpOiB2b2lkIHtcbiAgICBDb25zb2xlLmluaXQoKVxuICAgIEJvYXJkLmluaXQoKVxuICAgIEJvYXJkLmRyYXcoKVxuICAgIEdVSS5pbml0KClcbiAgICBHVUkuZHJhdygpXG5cbiAgICBHYW1lLnBsYXllciA9IG5ldyBTbmFrZSh7IFg6IDAsIFk6IDAgfSlcbiAgICBHYW1lLnBsYXllci5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uUklHSFRcbiAgICBHYW1lLmNsb2NrID0gbmV3IFRpbWVyKEdhbWVEaWZmaWN1bHR5LkRJRkZJQ1VMVCwgMCwgR2FtZS5vbkNsb2NrVGljaylcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc3RhcnQoKTogdm9pZCB7XG4gICAgaWYgKEdhbWUuaXNSdW5uaW5nKSByZXR1cm5cbiAgICBpZiAoR2FtZS5jbG9jay5pc1BhdXNlZCkge1xuICAgICAgR2FtZS5wYXVzZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBHYW1lLmlzUnVubmluZyA9IHRydWVcbiAgICBHYW1lLmNsb2NrLnN0YXJ0KClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcGF1c2UoKTogdm9pZCB7XG4gICAgaWYgKEdhbWUuY2xvY2suaXNQYXVzZWQpIHtcbiAgICAgIEdhbWUuaXNSdW5uaW5nID0gdHJ1ZVxuICAgICAgR2FtZS5jbG9jay5yZXN1bWUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgR2FtZS5jbG9jay5wYXVzZSgpXG4gICAgR2FtZS5pc1J1bm5pbmcgPSBmYWxzZVxuICAgIEdVSS5kcmF3KClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVzZXQoKTogdm9pZCB7XG4gICAgR2FtZS5jbG9jayAmJiBHYW1lLmNsb2NrLnN0b3AoKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgR2FtZS5pc1J1bm5pbmcgPSBmYWxzZVxuICAgIEdhbWUucmVhZHkoKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBvbkNsb2NrVGljaygpOiB2b2lkIHtcbiAgICBDb250cm9scy5wcm9jZXNzSW5wdXQoKVxuICAgIEdhbWUucGxheWVyLnByb2Nlc3NUdXJuKClcblxuICAgIGlmIChHYW1lLmNsb2NrLnRpY2sgPT09IENsb2NrVGljay5FVkVOKSB7XG4gICAgICArK0dhbWUuY29pbkNvdW50ZXJcbiAgICAgIGlmIChHYW1lLmNvaW5Db3VudGVyID49IDIpIHtcbiAgICAgICAgR2FtZS5jb2luQ291bnRlciA9IDBcblxuICAgICAgICBpZiAoIU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSArIDAuNSkpIHtcbiAgICAgICAgICBjb25zdCBwcm9iYWJpbGl0eSA9IChDb2luLmNvaW5zQWN0aXZlICsgMC41KSAvIDVcbiAgICAgICAgICBpZiAoIU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSArIHByb2JhYmlsaXR5KSkge1xuICAgICAgICAgICAgaWYgKCFNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKyAwLjgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvaW4gPSBDb2luLmNyZWF0ZVJhbmRvbSgpXG4gICAgICAgICAgICAgIEJvYXJkLnBsYWNlQXRSYW5kb20oY29pbilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSArIDAuNSkpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BlZWRVcENvaW4gPSBuZXcgU3BlZWRDb2luKFNwZWVkLkZBU1QpXG4gICAgICAgICAgICAgIEJvYXJkLnBsYWNlQXRSYW5kb20oc3BlZWRVcENvaW4pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBzcGVlZERvd25Db2luID0gbmV3IFNwZWVkQ29pbihTcGVlZC5TTE9XKVxuICAgICAgICAgICAgICBCb2FyZC5wbGFjZUF0UmFuZG9tKHNwZWVkRG93bkNvaW4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQm9hcmQuZHJhdygpXG4gICAgR1VJLmRyYXcoKVxuICB9XG59XG5cbkdhbWUuaW5pdCgpXG4iLCJpbXBvcnQgeyBHYW1lT2JqZWN0LCBQb3NpdGlvbiB9IGZyb20gJy4uL3R5cGVzL2luZGV4J1xuaW1wb3J0IHsgQ2FudmFzLCBCb2FyZCB9IGZyb20gJy4uL3V4L2luZGV4J1xuaW1wb3J0IFNuYWtlIGZyb20gJy4vc25ha2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW4gaW1wbGVtZW50cyBHYW1lT2JqZWN0IHtcbiAgcHVibGljIHN0YXRpYyB2YWx1ZXM6IG51bWJlcltdID0gWzIwMCwgNjAwLCA4MDAsIDEwMDAsIDIwMDBdXG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2VzOiB7IFtpbmRleDogbnVtYmVyXTogQ29pbiB9ID0ge31cbiAgcHVibGljIHN0YXRpYyBjb2luc0luZGV4OiBudW1iZXIgPSAwXG4gIHB1YmxpYyBzdGF0aWMgY29pbnNBY3RpdmU6IG51bWJlciA9IDBcblxuICBwdWJsaWMgaW5kZXg6IG51bWJlclxuICBwdWJsaWMgdmFsdWU6IG51bWJlclxuICBwdWJsaWMgcG9zaXRpb246IFBvc2l0aW9uXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLmluZGV4ID0gQ29pbi5jb2luc0luZGV4XG4gICAgKytDb2luLmNvaW5zSW5kZXhcbiAgICArK0NvaW4uY29pbnNBY3RpdmVcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlUmFuZG9tKCk6IENvaW4ge1xuICAgIHJldHVybiBuZXcgQ29pbihDb2luLnZhbHVlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb2luLnZhbHVlcy5sZW5ndGgpXSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDb2xsaXNpb24oc25ha2U6IFNuYWtlKTogdm9pZCB7XG4gICAgc25ha2UucG9pbnRzICs9IHRoaXMudmFsdWVcbiAgICBzbmFrZS5tYXhMZW5ndGggKz0gOFxuICAgIHRoaXMuZGVzdHJveSgpXG4gIH1cblxuICBwdWJsaWMgZHJhdygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucG9zaXRpb24pIHJldHVyblxuXG4gICAgY29uc3QgeCA9ICh0aGlzLnBvc2l0aW9uLlggKiBCb2FyZC5ibG9ja1NpemUpICsgKEJvYXJkLmJsb2NrU2l6ZSAvIDIpXG4gICAgY29uc3QgeSA9ICh0aGlzLnBvc2l0aW9uLlkgKiBCb2FyZC5ibG9ja1NpemUpICsgKEJvYXJkLmJsb2NrU2l6ZSAvIDIpXG4gICAgY29uc3QgciA9IChCb2FyZC5ibG9ja1NpemUgLyAyKSAtIDFcblxuICAgIENhbnZhcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgQ2FudmFzLmNvbnRleHQuYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSlcbiAgICBDYW52YXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICcjRkYwJ1xuICAgIENhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjQ0MwJ1xuICAgIENhbnZhcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgQ2FudmFzLmNvbnRleHQuZmlsbCgpXG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBCb2FyZC5yZW1vdmVPYmplY3RBdCh0aGlzLnBvc2l0aW9uKVxuICAgIGRlbGV0ZSBDb2luLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuICAgIC0tQ29pbi5jb2luc0FjdGl2ZVxuICB9XG59XG4iLCJpbXBvcnQgQ29pbiBmcm9tICcuL2NvaW4nXG5pbXBvcnQgU25ha2UgZnJvbSAnLi9zbmFrZSdcbmltcG9ydCBTcGVlZENvaW4gZnJvbSAnLi9zcGVlZENvaW4nXG5cbmV4cG9ydCB7IENvaW4sIFNuYWtlLCBTcGVlZENvaW4gfVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZSdcbmltcG9ydCBTbmFrZVNlZ21lbnQgZnJvbSAnLi9zbmFrZVNlZ21lbnQnXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4uL3V4L2luZGV4J1xuaW1wb3J0IHtcbiAgU3BlZWQsXG4gIERpcmVjdGlvbixcbiAgUG9zaXRpb24sXG4gIFNjcmVlbkVkZ2UsXG4gIENsb2NrVGljayxcbiAgUGxheWVyT2JqZWN0LFxuICBHYW1lT2JqZWN0XG59IGZyb20gJy4uL3R5cGVzL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZSBleHRlbmRzIFNuYWtlU2VnbWVudCBpbXBsZW1lbnRzIFBsYXllck9iamVjdCB7XG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdExlbmd0aCA9IDEyXG4gIHB1YmxpYyBqdW1wRGlzdGFuY2U6IG51bWJlciA9IDhcblxuICBwdWJsaWMgc2tpcE5leHRUdXJuOiBib29sZWFuID0gZmFsc2VcbiAgcHVibGljIGhpdERldGVjdGVkOiBib29sZWFuID0gZmFsc2VcbiAgcHVibGljIGlzQWxpdmU6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIHB1YmxpYyBzcGVlZDogU3BlZWQgPSBTcGVlZC5TTE9XXG4gIHB1YmxpYyBkaXJlY3Rpb246IERpcmVjdGlvbiA9IERpcmVjdGlvbi5OT05FXG4gIHB1YmxpYyBwb3NpdGlvbjogUG9zaXRpb25cblxuICBwdWJsaWMgaGlTY29yZTogbnVtYmVyID0gMFxuICBwdWJsaWMgcG9pbnRzOiBudW1iZXIgPSAwXG4gIHB1YmxpYyBsaXZlczogbnVtYmVyID0gOTk5XG5cbiAgcHVibGljIG5hbWU6IHN0cmluZ1xuICBwdWJsaWMgc2VnbWVudHM6IFNuYWtlU2VnbWVudFtdID0gW11cbiAgcHVibGljIG1heExlbmd0aDogbnVtYmVyID0gU25ha2UuZGVmYXVsdExlbmd0aFxuXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHN1cGVyKHBvc2l0aW9uKVxuICAgIHRoaXMuc2VnbWVudHNbMF0gPSB0aGlzXG4gICAgdGhpcy5pc0FsaXZlID0gdHJ1ZVxuICAgIHRoaXMubmFtZSA9ICduZWFsbGknXG5cbiAgICBCb2FyZC5wbGFjZU9iamVjdCh0aGlzLCBwb3NpdGlvbilcbiAgfVxuXG4gIHB1YmxpYyBqdW1wKCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uOiBQb3NpdGlvbiA9IFBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbilcblxuICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlVQOlxuICAgICAgICBwb3NpdGlvbi5ZIC09IHRoaXMuanVtcERpc3RhbmNlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIERpcmVjdGlvbi5ET1dOOlxuICAgICAgICBwb3NpdGlvbi5ZICs9IHRoaXMuanVtcERpc3RhbmNlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIERpcmVjdGlvbi5MRUZUOlxuICAgICAgICBwb3NpdGlvbi5YIC09IHRoaXMuanVtcERpc3RhbmNlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIERpcmVjdGlvbi5SSUdIVDpcbiAgICAgICAgcG9zaXRpb24uWCArPSB0aGlzLmp1bXBEaXN0YW5jZVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coJ3Vua25vd24gZGlyZWN0aW9uICcsIHRoaXMuZGlyZWN0aW9uKVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQm9hcmQocG9zaXRpb24pXG4gIH1cblxuICBwdWJsaWMgb25IaXRTY3JlZW5FZGdlKGVkZ2U6IFNjcmVlbkVkZ2UpOiB2b2lkIHtcbiAgICAvLyBzd2l0Y2ggKGVkZ2UpIHtcbiAgICAvLyAgIGNhc2UgU2NyZWVuRWRnZS5OT1JUSDpcbiAgICAvLyAgIGNhc2UgU2NyZWVuRWRnZS5TT1VUSDpcbiAgICAvLyAgIGNhc2UgU2NyZWVuRWRnZS5FQVNUOlxuICAgIC8vICAgY2FzZSBTY3JlZW5FZGdlLldFU1Q6XG4gICAgLy8gfVxuICB9XG5cbiAgcHVibGljIGRpZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhpdERldGVjdGVkID0gdHJ1ZVxuICAgIHRoaXMuaGlTY29yZSA9IHRoaXMucG9pbnRzID4gdGhpcy5oaVNjb3JlID8gdGhpcy5wb2ludHMgOiB0aGlzLmhpU2NvcmVcbiAgICBHYW1lLmhpU2NvcmUgPSB0aGlzLmhpU2NvcmUgPiBHYW1lLmhpU2NvcmUgPyB0aGlzLmhpU2NvcmUgOiBHYW1lLmhpU2NvcmVcblxuICAgIGlmICghdGhpcy5saXZlcykge1xuICAgICAgdGhpcy5pc0FsaXZlID0gZmFsc2VcbiAgICAgIEdhbWUucmVzZXQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLS10aGlzLmxpdmVzXG4gICAgdGhpcy5kZXN0cm95KClcblxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oMCwgMClcbiAgICB0aGlzLmRpcmVjdGlvbiA9IERpcmVjdGlvbi5OT05FXG4gIH1cblxuICBwdWJsaWMgc2V0U3BlZWQoc3BlZWQ6IFNwZWVkKTogdm9pZCB7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkXG4gICAgdGhpcy5za2lwTmV4dFR1cm4gPSAoc3BlZWQgPT09IFNwZWVkLlNMT1cpXG4gIH1cblxuICBwdWJsaWMgcHJvY2Vzc1R1cm4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQWxpdmUpIHJldHVyblxuXG4gICAgLy8gU2tpcCBldmVyeSBvdGhlciBjbG9jayB0aWNrIHVubGVzcyBtb3ZpbmcgZmFzdFxuICAgIGlmICh0aGlzLnNwZWVkICE9PSBTcGVlZC5GQVNUICYmIEdhbWUuY2xvY2sudGljayA9PT0gQ2xvY2tUaWNrLk9ERCkgcmV0dXJuXG5cbiAgICAvLyBTa2lwIDMgY2xvY2sgdGljayBpZiBtb3Zpbmcgc2xvd1xuICAgIGlmICh0aGlzLnNwZWVkID09PSBTcGVlZC5TTE9XICYmIEdhbWUuY2xvY2sudGljayA9PT0gQ2xvY2tUaWNrLkVWRU4pIHtcbiAgICAgIHRoaXMuc2tpcE5leHRUdXJuID0gIXRoaXMuc2tpcE5leHRUdXJuXG4gICAgICBpZiAodGhpcy5za2lwTmV4dFR1cm4pIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaGl0RGV0ZWN0ZWQgPSBmYWxzZVxuXG4gICAgbGV0IGlzTW92aW5nID0gdHJ1ZVxuICAgIGNvbnN0IHBvczogUG9zaXRpb24gPSBQb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24pXG4gICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSBEaXJlY3Rpb24uVVA6XG4gICAgICAgIHBvcy5ZIC09IDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgRGlyZWN0aW9uLkRPV046XG4gICAgICAgIHBvcy5ZICs9IDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgRGlyZWN0aW9uLkxFRlQ6XG4gICAgICAgIHBvcy5YIC09IDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlJJR0hUOlxuICAgICAgICBwb3MuWCArPSAxXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBEaXJlY3Rpb24uTk9ORVxuICAgICAgICBpc01vdmluZyA9IGZhbHNlXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGlzTW92aW5nKSB7XG4gICAgICBpZiAocG9zLlggPCAwKSB7XG4gICAgICAgIHBvcy5YID0gQm9hcmQud2lkdGggLSAxXG4gICAgICB9IGVsc2UgaWYgKHBvcy5ZIDwgMCkge1xuICAgICAgICBwb3MuWSA9IEJvYXJkLmhlaWdodCAtIDFcbiAgICAgIH0gZWxzZSBpZiAocG9zLlggPT09IEJvYXJkLndpZHRoKSB7XG4gICAgICAgIHBvcy5YID0gMFxuICAgICAgfSBlbHNlIGlmIChwb3MuWSA9PT0gQm9hcmQuaGVpZ2h0KSB7XG4gICAgICAgIHBvcy5ZID0gMFxuICAgICAgfVxuXG4gICAgICBpZiAoQm9hcmQuZ3JpZFtwb3MuWF1bcG9zLlldKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdDogR2FtZU9iamVjdCA9IEJvYXJkLmdyaWRbcG9zLlhdW3Bvcy5ZXSBhcyBHYW1lT2JqZWN0XG4gICAgICAgIG9iamVjdC5oYW5kbGVDb2xsaXNpb24odGhpcylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaGl0RGV0ZWN0ZWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCb2FyZChwb3MpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZUJvYXJkKHBvczogUG9zaXRpb24pOiB2b2lkIHtcbiAgICBsZXQgbGFzdFBvc2l0aW9uID0gUG9zaXRpb24uY29weSh0aGlzLnBvc2l0aW9uKVxuICAgIGZvciAobGV0IGkgPSAwLCBzID0gdGhpcy5zZWdtZW50cy5sZW5ndGg7IGkgIT09IHM7IGkrKykge1xuICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMuc2VnbWVudHNbaV1cbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gKGkgPT09IDApID8gcG9zIDogbGFzdFBvc2l0aW9uXG5cbiAgICAgIGxhc3RQb3NpdGlvbiA9IHNlZ21lbnQucG9zaXRpb25cbiAgICAgIEJvYXJkLm1vdmVPYmplY3Qoc2VnbWVudCwgbmV3UG9zaXRpb24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoIDw9IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXdTZWdtZW50ID0gbmV3IFNuYWtlU2VnbWVudChsYXN0UG9zaXRpb24pXG4gICAgICB0aGlzLnNlZ21lbnRzLnB1c2gobmV3U2VnbWVudClcbiAgICAgIEJvYXJkLnBsYWNlT2JqZWN0KG5ld1NlZ21lbnQsIGxhc3RQb3NpdGlvbilcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMCwgcyA9IHRoaXMuc2VnbWVudHMubGVuZ3RoOyBpICE9PSBzOyBpKyspIHtcbiAgICAgIEJvYXJkLnJlbW92ZU9iamVjdEF0KHRoaXMuc2VnbWVudHNbaV0ucG9zaXRpb24pXG4gICAgfVxuXG4gICAgdGhpcy5zZWdtZW50cyA9IFt0aGlzXVxuICAgIHRoaXMubWF4TGVuZ3RoID0gU25ha2UuZGVmYXVsdExlbmd0aFxuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lT2JqZWN0LCBQb3NpdGlvbiB9IGZyb20gJy4uL3R5cGVzL2luZGV4J1xuaW1wb3J0IHsgQ2FudmFzLCBCb2FyZCB9IGZyb20gJy4uL3V4L2luZGV4J1xuaW1wb3J0IFNuYWtlIGZyb20gJy4vc25ha2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuYWtlU2VnbWVudCBpbXBsZW1lbnRzIEdhbWVPYmplY3Qge1xuICBwdWJsaWMgc3RhdGljIGNvbG9yczogc3RyaW5nW10gPSBbXG4gICAgJyNGRjAwMDAnLCAnI0ZGOTk2NicsXG4gICAgJyNGRkZBNjYnLCAnIzY2RkY2NicsXG4gICAgJyM2NkZGRkQnLCAnIzY2OTlGRicsXG4gICAgJyM3OTY2RkYnLCAnI0YzNjZGRidcbiAgXVxuXG4gIHB1YmxpYyBwb3NpdGlvbjogUG9zaXRpb25cbiAgcHVibGljIGNvbG9ySW5kZXg6IG51bWJlciA9IC0xXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICB9XG5cbiAgcHVibGljIGRyYXcoKTogdm9pZCB7XG4gICAgY29uc3Qgc3ggPSAodGhpcy5wb3NpdGlvbi5YICogQm9hcmQuYmxvY2tTaXplKVxuICAgIGNvbnN0IHN5ID0gKHRoaXMucG9zaXRpb24uWSAqIEJvYXJkLmJsb2NrU2l6ZSlcbiAgICBjb25zdCBzaXplID0gQm9hcmQuYmxvY2tTaXplXG5cbiAgICBDYW52YXMuZmlsbFJlY3Qoc3gsIHN5LCBzaXplLCBzaXplLCB0aGlzLmdldENvbG9yKCkpXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29sb3IoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsZW46IG51bWJlciA9IFNuYWtlU2VnbWVudC5jb2xvcnMubGVuZ3RoXG4gICAgdGhpcy5jb2xvckluZGV4KytcbiAgICByZXR1cm4gU25ha2VTZWdtZW50LmNvbG9yc1t0aGlzLmNvbG9ySW5kZXggJSBsZW5dXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ29sbGlzaW9uKHNuYWtlOiBTbmFrZSk6IHZvaWQge1xuICAgIHNuYWtlLmRpZSgpXG4gIH1cbn1cbiIsImltcG9ydCB7IEJvYXJkLCBDYW52YXMgfSBmcm9tICcuLi91eC9pbmRleCdcbmltcG9ydCB7IFNwZWVkLCBQb3NpdGlvbiB9IGZyb20gJy4uL3R5cGVzL2luZGV4J1xuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luJ1xuaW1wb3J0IFNuYWtlIGZyb20gJy4vc25ha2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWVkQ29pbiB7XG4gIHB1YmxpYyBzdGF0aWMgY29sb3JzOiBzdHJpbmdbXSA9IFsnIzMzNjZGRicsICcjRkYxNDAwJ11cbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZXM6IHsgW2luZGV4OiBudW1iZXJdOiBDb2luIH0gPSB7fVxuICBwdWJsaWMgc3RhdGljIGl0ZW1zSW5kZXg6IG51bWJlciA9IDBcbiAgcHVibGljIHN0YXRpYyBpdGVtc0FjdGl2ZTogbnVtYmVyID0gMFxuXG4gIHB1YmxpYyBpbmRleDogbnVtYmVyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nXG4gIHB1YmxpYyBzcGVlZDogU3BlZWRcbiAgcHVibGljIHBvc2l0aW9uOiBQb3NpdGlvblxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzcGVlZDogU3BlZWQpIHtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWRcbiAgICB0aGlzLmNvbG9yID0gU3BlZWRDb2luLmNvbG9yc1tzcGVlZF1cbiAgICB0aGlzLmluZGV4ID0gU3BlZWRDb2luLml0ZW1zSW5kZXhcbiAgICArK1NwZWVkQ29pbi5pdGVtc0luZGV4XG4gICAgKytTcGVlZENvaW4uaXRlbXNBY3RpdmVcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDb2xsaXNpb24oc25ha2U6IFNuYWtlKTogdm9pZCB7XG4gICAgc25ha2Uuc2V0U3BlZWQodGhpcy5zcGVlZClcbiAgICB0aGlzLmRlc3Ryb3koKVxuICB9XG5cbiAgcHVibGljIGRyYXcoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uKSByZXR1cm5cblxuICAgIGNvbnN0IHggPSAodGhpcy5wb3NpdGlvbi5YICogQm9hcmQuYmxvY2tTaXplKSArIDJcbiAgICBjb25zdCB5ID0gKHRoaXMucG9zaXRpb24uWSAqIEJvYXJkLmJsb2NrU2l6ZSkgKyAyXG4gICAgY29uc3Qgc2l6ZSA9IEJvYXJkLmJsb2NrU2l6ZSAtIDRcblxuICAgIENhbnZhcy5kcmF3UmVjdCh4LCB5LCBzaXplLCBzaXplLCB0aGlzLmNvbG9yKVxuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgQm9hcmQucmVtb3ZlT2JqZWN0QXQodGhpcy5wb3NpdGlvbilcbiAgICBkZWxldGUgU3BlZWRDb2luLmluc3RhbmNlc1t0aGlzLmluZGV4XVxuICAgIC0tU3BlZWRDb2luLml0ZW1zQWN0aXZlXG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEdhbWVLZXkge1xuICBVUCA9IDM4LFxuICBET1dOID0gNDAsXG4gIExFRlQgPSAzNyxcbiAgUklHSFQgPSAzOSxcbiAgU1BBQ0VCQVIgPSAzMlxufVxuXG5leHBvcnQgZW51bSBTY3JlZW5FZGdlIHtcbiAgTk9SVEgsXG4gIFNPVVRILFxuICBFQVNULFxuICBXRVNUXG59XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XG4gIFVQLFxuICBET1dOLFxuICBMRUZULFxuICBSSUdIVCxcbiAgTk9ORVxufVxuXG5leHBvcnQgZW51bSBTcGVlZCB7XG4gIFNMT1csXG4gIEZBU1QsXG4gIE5PUk1BTFxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wb3NpdGlvbidcbmV4cG9ydCAqIGZyb20gJy4vZW51bXMnXG5leHBvcnQgKiBmcm9tICcuL2dhbWVvYmplY3RzJ1xuZXhwb3J0ICogZnJvbSAnLi90aW1lcidcbiIsImV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XG4gIFg6IG51bWJlclxuICBZOiBudW1iZXJcblxuICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLlggPSB4XG4gICAgdGhpcy5ZID0geVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb3B5KHBvc2l0aW9uOiBQb3NpdGlvbik6IFBvc2l0aW9uIHtcbiAgICByZXR1cm4gbmV3IFBvc2l0aW9uKHBvc2l0aW9uLlgsIHBvc2l0aW9uLlkpXG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIENsb2NrVHlwZSB7IFRJTUVELCBJTkZJTklURSB9XG5cbmV4cG9ydCBlbnVtIENsb2NrVGljayB7IEVWRU4sIE9ERCB9XG5cbmV4cG9ydCBjbGFzcyBUaW1lciB7XG4gIHByaXZhdGUgaGFuZGxlOiBudW1iZXJcbiAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyXG5cbiAgcHVibGljIHR5cGU6IENsb2NrVHlwZVxuICBwdWJsaWMgdGljazogQ2xvY2tUaWNrID0gQ2xvY2tUaWNrLkVWRU5cbiAgcHVibGljIGlzUnVubmluZzogYm9vbGVhblxuICBwdWJsaWMgaXNQYXVzZWQ6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3RvcihpbnRlcnZhbDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBoYW5kbGVyOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsXG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICAgIHRoaXMudHlwZSA9IChkdXJhdGlvbiA9PT0gMCkgPyBDbG9ja1R5cGUuSU5GSU5JVEUgOiBDbG9ja1R5cGUuVElNRURcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVyOiAoKSA9PiB2b2lkID0gKCkgPT4geyBjb25zb2xlLmxvZygnTm8gY2xvY2sgZXZlbnQnKSB9XG5cbiAgcHVibGljIG9uRWxhcHNlZCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5pc1BhdXNlZCkgcmV0dXJuXG5cbiAgICB0aGlzLnRpY2sgPSAodGhpcy50aWNrID09PSBDbG9ja1RpY2suRVZFTikgPyBDbG9ja1RpY2suT0REIDogQ2xvY2tUaWNrLkVWRU5cbiAgICB0aGlzLmhhbmRsZXIoKVxuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gQ2xvY2tUeXBlLlRJTUVEKSB7XG4gICAgICB0aGlzLnN0b3AoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzUnVubmluZyA9IHRydWVcbiAgICB0aGlzLmhhbmRsZSA9ICh0aGlzLnR5cGUgPT09IENsb2NrVHlwZS5JTkZJTklURSlcbiAgICAgID8gd2luZG93LnNldEludGVydmFsKHRoaXMub25FbGFwc2VkLmJpbmQodGhpcyksIHRoaXMuaW50ZXJ2YWwpXG4gICAgICA6IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub25FbGFwc2VkLmJpbmQodGhpcyksIHRoaXMuaW50ZXJ2YWwpXG4gIH1cblxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQ2xvY2tUeXBlLklORklOSVRFXG4gICAgICA/IHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaGFuZGxlKVxuICAgICAgOiB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuaGFuZGxlKVxuICB9XG5cbiAgcHVibGljIHBhdXNlKCk6IHZvaWQgeyB0aGlzLmlzUGF1c2VkID0gdHJ1ZSB9XG5cbiAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHsgdGhpcy5pc1BhdXNlZCA9IGZhbHNlIH1cbn1cbiIsImltcG9ydCB7IERyYXdhYmxlLCBQb3NpdGlvbiB9IGZyb20gJy4uL3R5cGVzL2luZGV4J1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICBwdWJsaWMgc3RhdGljIGJnQ29sb3I6IHN0cmluZyA9ICcjZmZmJ1xuICBwdWJsaWMgc3RhdGljIGdyaWRDb2xvcjogc3RyaW5nID0gJyMwMDFGNUMnXG5cbiAgcHVibGljIHN0YXRpYyBibG9ja1NpemUgPSA4XG4gIHB1YmxpYyBzdGF0aWMgaGVpZ2h0ID0gMFxuICBwdWJsaWMgc3RhdGljIHdpZHRoID0gMFxuXG4gIHB1YmxpYyBzdGF0aWMgZ3JpZDogRHJhd2FibGVbXVtdXG5cbiAgcHVibGljIHN0YXRpYyBwbGFjZU9iamVjdChvYmplY3Q6IERyYXdhYmxlLCBwb3NpdGlvbjogUG9zaXRpb24pOiB2b2lkIHtcbiAgICBCb2FyZC5ncmlkW3Bvc2l0aW9uLlhdW3Bvc2l0aW9uLlldID0gb2JqZWN0XG4gICAgb2JqZWN0LnBvc2l0aW9uID0gUG9zaXRpb24uY29weShwb3NpdGlvbilcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlT2JqZWN0QXQocG9zaXRpb246IFBvc2l0aW9uKTogdm9pZCB7XG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICBCb2FyZC5ncmlkW3Bvc2l0aW9uLlhdW3Bvc2l0aW9uLlldID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbW92ZU9iamVjdChvYmplY3Q6IERyYXdhYmxlLCBuZXdQb3NpdGlvbjogUG9zaXRpb24pOiB2b2lkIHtcbiAgICBCb2FyZC5yZW1vdmVPYmplY3RBdChvYmplY3QucG9zaXRpb24pXG4gICAgQm9hcmQucGxhY2VPYmplY3Qob2JqZWN0LCBuZXdQb3NpdGlvbilcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcGxhY2VBdFJhbmRvbShvYmplY3Q6IERyYXdhYmxlKTogdm9pZCB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBCb2FyZC5nZW5lcmF0ZVJhbmRvbVBvc2l0aW9uKClcbiAgICBCb2FyZC5tb3ZlT2JqZWN0KG9iamVjdCwgcG9zaXRpb24pXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlUmFuZG9tUG9zaXRpb24oKTogUG9zaXRpb24ge1xuICAgIGxldCBwb3NpdGlvbjogUG9zaXRpb25cbiAgICB3aGlsZSAoIXBvc2l0aW9uKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQm9hcmQud2lkdGgpXG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQm9hcmQuaGVpZ2h0KVxuICAgICAgaWYgKCFCb2FyZC5ncmlkW3hdW3ldKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHgsIHkpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwb3NpdGlvblxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0KCk6IHZvaWQge1xuICAgIEJvYXJkLmhlaWdodCA9IENhbnZhcy5oZWlnaHQgLyBCb2FyZC5ibG9ja1NpemVcbiAgICBCb2FyZC53aWR0aCA9IENhbnZhcy53aWR0aCAvIEJvYXJkLmJsb2NrU2l6ZVxuXG4gICAgQm9hcmQuZ3JpZCA9IG5ldyBBcnJheShCb2FyZC53aWR0aClcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IEJvYXJkLndpZHRoOyBpICE9PSBqOyBpKyspIHtcbiAgICAgIEJvYXJkLmdyaWRbaV0gPSBuZXcgQXJyYXkoQm9hcmQuaGVpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZHJhdygpOiB2b2lkIHtcbiAgICBDYW52YXMuZmlsbChCb2FyZC5iZ0NvbG9yKVxuICAgIGZvciAobGV0IGN4ID0gMDsgY3ggPCBCb2FyZC53aWR0aDsgY3grKykge1xuICAgICAgZm9yIChsZXQgY3kgPSAwOyBjeSA8IEJvYXJkLmhlaWdodDsgY3krKykge1xuICAgICAgICBpZiAoQm9hcmQuZ3JpZFtjeF1bY3ldKSB7XG4gICAgICAgICAgQm9hcmQuZ3JpZFtjeF1bY3ldLmRyYXcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDYW52YXMge1xuICBwdWJsaWMgc3RhdGljIHdpZHRoOiBudW1iZXIgPSA2MDBcbiAgcHVibGljIHN0YXRpYyBoZWlnaHQ6IG51bWJlciA9IDQwMFxuICBwdWJsaWMgc3RhdGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdChlbDogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcbiAgICBlbC5oZWlnaHQgPSBDYW52YXMuaGVpZ2h0XG4gICAgZWwud2lkdGggPSBDYW52YXMud2lkdGhcbiAgICBDYW52YXMuY29udGV4dCA9IGVsLmdldENvbnRleHQoJzJkJylcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmlsbChjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgQ2FudmFzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBDYW52YXMuY29udGV4dC5yZWN0KDAsIDAsIENhbnZhcy53aWR0aCwgQ2FudmFzLmhlaWdodClcbiAgICBDYW52YXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgIENhbnZhcy5jb250ZXh0LmZpbGwoKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmaWxsUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBDYW52YXMuY29udGV4dC5iZWdpblBhdGgoKVxuICAgIENhbnZhcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgQ2FudmFzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZHJhd1JlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgQ2FudmFzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBDYW52YXMuY29udGV4dC5saW5lV2lkdGggPSAxXG4gICAgQ2FudmFzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvclxuICAgIENhbnZhcy5jb250ZXh0LnJlY3QoeCwgeSwgdywgaClcbiAgICBDYW52YXMuY29udGV4dC5zdHJva2UoKVxuICB9XG59XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lJ1xuXG5pbnRlcmZhY2UgQnV0dG9ucyB7XG4gIHN0YXJ0OiBIVE1MQnV0dG9uRWxlbWVudFxuICBwYXVzZTogSFRNTEJ1dHRvbkVsZW1lbnRcbiAgcmVzZXQ6IEhUTUxCdXR0b25FbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGUge1xuICBwdWJsaWMgc3RhdGljIGJ1dHRvbnM6IEJ1dHRvbnMgPSB7XG4gICAgc3RhcnQ6IG51bGwsXG4gICAgcGF1c2U6IG51bGwsXG4gICAgcmVzZXQ6IG51bGxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdCgpOiB2b2lkIHtcbiAgICBDb25zb2xlLmJ1dHRvbnMuc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxuICAgIENvbnNvbGUuYnV0dG9ucy5wYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXVzZScpIGFzIEhUTUxCdXR0b25FbGVtZW50XG4gICAgQ29uc29sZS5idXR0b25zLnJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnRcblxuICAgIENvbnNvbGUuYnV0dG9ucy5zdGFydC5vbmNsaWNrID0gKCk6IHZvaWQgPT4gR2FtZS5zdGFydCgpXG4gICAgQ29uc29sZS5idXR0b25zLnBhdXNlLm9uY2xpY2sgPSAoKTogdm9pZCA9PiBHYW1lLnBhdXNlKClcbiAgICBDb25zb2xlLmJ1dHRvbnMucmVzZXQub25jbGljayA9ICgpOiB2b2lkID0+IEdhbWUucmVzZXQoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3Rpb24sIEdhbWVLZXkgfSBmcm9tICcuLi90eXBlcy9pbmRleCdcbmltcG9ydCBHYW1lIGZyb20gJy4uL2dhbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xzIHtcbiAgcHVibGljIHN0YXRpYyBsYXN0S2V5OiBudW1iZXIgPSBudWxsXG5cbiAgcHVibGljIHN0YXRpYyBvbktleVVwID0gKGV2OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7IENvbnRyb2xzLmxhc3RLZXkgPSBldi5rZXlDb2RlIH1cblxuICBwdWJsaWMgc3RhdGljIHByb2Nlc3NJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAoIUNvbnRyb2xzLmxhc3RLZXkpIHJldHVyblxuXG4gICAgc3dpdGNoIChDb250cm9scy5sYXN0S2V5KSB7XG4gICAgICBjYXNlIEdhbWVLZXkuVVA6XG4gICAgICAgIGlmIChHYW1lLnBsYXllci5kaXJlY3Rpb24gIT09IERpcmVjdGlvbi5ET1dOKSB7XG4gICAgICAgICAgR2FtZS5wbGF5ZXIuZGlyZWN0aW9uID0gRGlyZWN0aW9uLlVQXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgR2FtZUtleS5ET1dOOlxuICAgICAgICBpZiAoR2FtZS5wbGF5ZXIuZGlyZWN0aW9uICE9PSBEaXJlY3Rpb24uVVApIHtcbiAgICAgICAgICBHYW1lLnBsYXllci5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uRE9XTlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIEdhbWVLZXkuTEVGVDpcbiAgICAgICAgaWYgKEdhbWUucGxheWVyLmRpcmVjdGlvbiAhPT0gRGlyZWN0aW9uLlJJR0hUKSB7XG4gICAgICAgICAgR2FtZS5wbGF5ZXIuZGlyZWN0aW9uID0gRGlyZWN0aW9uLkxFRlRcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBHYW1lS2V5LlJJR0hUOlxuICAgICAgICBpZiAoR2FtZS5wbGF5ZXIuZGlyZWN0aW9uICE9PSBEaXJlY3Rpb24uTEVGVCkge1xuICAgICAgICAgIEdhbWUucGxheWVyLmRpcmVjdGlvbiA9IERpcmVjdGlvbi5SSUdIVFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIEdhbWVLZXkuU1BBQ0VCQVI6XG4gICAgICAgIEdhbWUucGxheWVyLmp1bXAoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBDb250cm9scy5sYXN0S2V5ID0gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHVUkge1xuICBwdWJsaWMgc3RhdGljIGhlYWRlcjogSFRNTEVsZW1lbnRcbiAgcHVibGljIHN0YXRpYyBsaXZlczogSFRNTEVsZW1lbnRcbiAgcHVibGljIHN0YXRpYyBzY29yZTogSFRNTEVsZW1lbnRcbiAgcHVibGljIHN0YXRpYyBidWlsZDogSFRNTEVsZW1lbnRcblxuICBwdWJsaWMgc3RhdGljIGluaXQoKTogdm9pZCB7XG4gICAgR1VJLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpIGFzIEhUTUxFbGVtZW50XG4gICAgR1VJLnNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJykgYXMgSFRNTEVsZW1lbnRcbiAgICBHVUkubGl2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGl2ZXMnKSBhcyBIVE1MRWxlbWVudFxuICAgIEdVSS5idWlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidWlsZCcpIGFzIEhUTUxFbGVtZW50XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRyYXcoKTogdm9pZCB7XG4gICAgR1VJLmxpdmVzLmlubmVyVGV4dCA9IEdhbWUuaXNSdW5uaW5nXG4gICAgICA/IGBMaXZlczogJHtHYW1lLnBsYXllci5saXZlc31gXG4gICAgICA6ICdQcmVzcyBTdGFydCdcblxuICAgIEdVSS5zY29yZS5pbm5lclRleHQgPSBHYW1lLmlzUnVubmluZ1xuICAgICAgPyBgU2NvcmU6ICR7R2FtZS5wbGF5ZXIucG9pbnRzfWBcbiAgICAgIDogYEhpIFNjb3JlOiAke0dhbWUuaGlTY29yZX1gXG4gIH1cbn1cbiIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCdcbmltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJ1xuaW1wb3J0IENvbnNvbGUgZnJvbSAnLi9jb25zb2xlJ1xuaW1wb3J0IEdVSSBmcm9tICcuL2d1aSdcblxuZXhwb3J0IHtcbiAgQ2FudmFzLFxuICBCb2FyZCxcbiAgQ29uc29sZSxcbiAgQ29udHJvbHMsXG4gIEdVSVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==