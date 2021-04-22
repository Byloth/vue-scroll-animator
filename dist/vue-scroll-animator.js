
/*!
 * Vue Scroll Animator v2.3.0-rc5 (https://byloth.github.io/vue-scroll-animator)
 *
 *  -> Copyright © 2019 - 2020, Matteo Bilotta
 *  -> Licensed under GNU v3 (https://github.com/Byloth/vue-scroll-animator/blob/master/LICENSE)
 */

VueScrollAnimator =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ScrollAnimation", function() { return /* reexport */ scroll_animation_ScrollAnimation; });
__webpack_require__.d(__webpack_exports__, "AnimationOptions", function() { return /* reexport */ /* Cannot get final name for export "AnimationOptions" in "./src/scroll-animation.ts" (known exports: default, known reexports: ) */ undefined; });
__webpack_require__.d(__webpack_exports__, "ClassAnimatorBehavior", function() { return /* reexport */ ClassAnimatorBehavior; });
__webpack_require__.d(__webpack_exports__, "BaseAnimator", function() { return /* reexport */ BaseAnimator; });
__webpack_require__.d(__webpack_exports__, "ClassAnimator", function() { return /* reexport */ ClassAnimator; });
__webpack_require__.d(__webpack_exports__, "CssPropertyAnimator", function() { return /* reexport */ CssPropertyAnimator; });
__webpack_require__.d(__webpack_exports__, "BaseAnimatorOptions", function() { return /* reexport */ /* Cannot get final name for export "BaseAnimatorOptions" in "./src/animators/base-animator.ts" (known exports: default, known reexports: ) */ undefined; });
__webpack_require__.d(__webpack_exports__, "ClassAnimatorOptions", function() { return /* reexport */ /* Cannot get final name for export "ClassAnimatorOptions" in "./src/animators/class-animator.ts" (known exports: ClassAnimatorBehavior default, known reexports: ) */ undefined; });
__webpack_require__.d(__webpack_exports__, "CssPropertyAnimatorOptions", function() { return /* reexport */ /* Cannot get final name for export "CssPropertyAnimatorOptions" in "./src/animators/css-property-animator.ts" (known exports: default, known reexports: ) */ undefined; });

// CONCATENATED MODULE: ./src/animators/base-animator.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseAnimator = /*#__PURE__*/function () {
  function BaseAnimator(options) {
    _classCallCheck(this, BaseAnimator);

    _defineProperty(this, "_lastRatioValue", void 0);

    _defineProperty(this, "_lastCanBeApplied", void 0);

    _defineProperty(this, "_target", void 0);

    _defineProperty(this, "_canBeApplied", void 0);

    this._target = options.target;

    if (options.minWidth !== undefined) {
      var minWidth = options.minWidth;

      if (options.maxWidth === undefined) {
        this._canBeApplied = function () {
          return minWidth <= window.innerWidth;
        };
      } else if (minWidth < options.maxWidth) {
        var maxWidth = options.maxWidth;

        this._canBeApplied = function () {
          var windowWidth = window.innerWidth;
          return minWidth <= windowWidth && windowWidth <= maxWidth;
        };
      } else if (minWidth === options.maxWidth) {
        this._canBeApplied = function () {
          return minWidth === window.innerWidth;
        };
      } else {
        throw new Error("'minWidth' option must be less than or equal to 'maxWidth'.");
      }
    } else if (options.maxWidth !== undefined) {
      var _maxWidth = options.maxWidth;

      this._canBeApplied = function () {
        return window.innerWidth <= _maxWidth;
      };
    } else {
      this._canBeApplied = function () {
        return true;
      };
    }
  }

  _createClass(BaseAnimator, [{
    key: "canBeApplied",
    value: function canBeApplied() {
      var canBeApplied = this._canBeApplied();

      if (canBeApplied !== this._lastCanBeApplied) {
        this._lastRatioValue = undefined;
        this._lastCanBeApplied = canBeApplied;
      }

      return canBeApplied;
    }
  }, {
    key: "update",
    value: function update(ratioValue) {
      if (ratioValue !== this._lastRatioValue) {
        this._update(ratioValue);

        this._lastRatioValue = ratioValue;
      }
    }
  }]);

  return BaseAnimator;
}();


// CONCATENATED MODULE: ./src/animators/class-animator.ts
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { class_animator_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function class_animator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function class_animator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function class_animator_createClass(Constructor, protoProps, staticProps) { if (protoProps) class_animator_defineProperties(Constructor.prototype, protoProps); if (staticProps) class_animator_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function class_animator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var ClassAnimatorBehavior;

(function (ClassAnimatorBehavior) {
  ClassAnimatorBehavior[ClassAnimatorBehavior["FROM_START"] = 0] = "FROM_START";
  ClassAnimatorBehavior[ClassAnimatorBehavior["UNTIL_START"] = 1] = "UNTIL_START";
  ClassAnimatorBehavior[ClassAnimatorBehavior["BETWEEN_START_END"] = 2] = "BETWEEN_START_END";
  ClassAnimatorBehavior[ClassAnimatorBehavior["EXCEPT_START_END"] = 3] = "EXCEPT_START_END";
  ClassAnimatorBehavior[ClassAnimatorBehavior["FROM_END"] = 4] = "FROM_END";
  ClassAnimatorBehavior[ClassAnimatorBehavior["UNTIL_END"] = 5] = "UNTIL_END";
})(ClassAnimatorBehavior || (ClassAnimatorBehavior = {}));

var ClassAnimator = /*#__PURE__*/function (_BaseAnimator) {
  _inherits(ClassAnimator, _BaseAnimator);

  var _super = _createSuper(ClassAnimator);

  function ClassAnimator(options) {
    var _this;

    class_animator_classCallCheck(this, ClassAnimator);

    options = _objectSpread(_objectSpread({}, ClassAnimator.DEFAULT_OPTIONS), options);
    _this = _super.call(this, options);

    class_animator_defineProperty(_assertThisInitialized(_this), "_lastIsActive", void 0);

    class_animator_defineProperty(_assertThisInitialized(_this), "_classesName", void 0);

    class_animator_defineProperty(_assertThisInitialized(_this), "_isActive", void 0);

    _this._classesName = options.classesName;

    if (options.behavior === ClassAnimatorBehavior.FROM_START) {
      _this._isActive = function (ratioValue) {
        return ratioValue > 0;
      };
    } else if (options.behavior === ClassAnimatorBehavior.UNTIL_START) {
      _this._isActive = function (ratioValue) {
        return ratioValue <= 0;
      };
    } else if (options.behavior === ClassAnimatorBehavior.BETWEEN_START_END) {
      _this._isActive = function (ratioValue) {
        return ratioValue > 0 && ratioValue < 1;
      };
    } else if (options.behavior === ClassAnimatorBehavior.EXCEPT_START_END) {
      _this._isActive = function (ratioValue) {
        return ratioValue <= 0 && ratioValue >= 1;
      };
    } else if (options.behavior === ClassAnimatorBehavior.FROM_END) {
      _this._isActive = function (ratioValue) {
        return ratioValue >= 1;
      };
    } else if (options.behavior === ClassAnimatorBehavior.UNTIL_END) {
      _this._isActive = function (ratioValue) {
        return ratioValue < 1;
      };
    } else {
      throw new Error("Invalid value \"".concat(options.behavior, "\" for 'behavior' option."));
    }

    return _this;
  }

  class_animator_createClass(ClassAnimator, [{
    key: "_update",
    value: function _update(ratioValue) {
      var isActive = this._isActive(ratioValue);

      if (isActive !== this._lastIsActive) {
        if (isActive === true) {
          this.addClasses();
        } else {
          this.removeClasses();
        }

        this._lastIsActive = isActive;
      }
    }
  }, {
    key: "addClasses",
    value: function addClasses() {
      var _iterator = _createForOfIteratorHelper(this._classesName),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var className = _step.value;

          this._target.classList.add(className);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "removeClasses",
    value: function removeClasses() {
      var _iterator2 = _createForOfIteratorHelper(this._classesName),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var className = _step2.value;

          this._target.classList.remove(className);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return ClassAnimator;
}(BaseAnimator);

class_animator_defineProperty(ClassAnimator, "DEFAULT_OPTIONS", {
  behavior: ClassAnimatorBehavior.FROM_START
});


// CONCATENATED MODULE: ./src/animators/css-property-animator.ts
function css_property_animator_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { css_property_animator_typeof = function _typeof(obj) { return typeof obj; }; } else { css_property_animator_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return css_property_animator_typeof(obj); }

function css_property_animator_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function css_property_animator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { css_property_animator_ownKeys(Object(source), true).forEach(function (key) { css_property_animator_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { css_property_animator_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function css_property_animator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function css_property_animator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function css_property_animator_createClass(Constructor, protoProps, staticProps) { if (protoProps) css_property_animator_defineProperties(Constructor.prototype, protoProps); if (staticProps) css_property_animator_defineProperties(Constructor, staticProps); return Constructor; }

function css_property_animator_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) css_property_animator_setPrototypeOf(subClass, superClass); }

function css_property_animator_setPrototypeOf(o, p) { css_property_animator_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return css_property_animator_setPrototypeOf(o, p); }

function css_property_animator_createSuper(Derived) { var hasNativeReflectConstruct = css_property_animator_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = css_property_animator_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = css_property_animator_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return css_property_animator_possibleConstructorReturn(this, result); }; }

function css_property_animator_possibleConstructorReturn(self, call) { if (call && (css_property_animator_typeof(call) === "object" || typeof call === "function")) { return call; } return css_property_animator_assertThisInitialized(self); }

function css_property_animator_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function css_property_animator_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function css_property_animator_getPrototypeOf(o) { css_property_animator_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return css_property_animator_getPrototypeOf(o); }

function css_property_animator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var CssPropertyAnimator = /*#__PURE__*/function (_BaseAnimator) {
  css_property_animator_inherits(CssPropertyAnimator, _BaseAnimator);

  var _super = css_property_animator_createSuper(CssPropertyAnimator);

  function CssPropertyAnimator(options) {
    var _this;

    css_property_animator_classCallCheck(this, CssPropertyAnimator);

    options = css_property_animator_objectSpread(css_property_animator_objectSpread({}, CssPropertyAnimator.DEFAULT_OPTIONS), options);
    _this = _super.call(this, options);

    css_property_animator_defineProperty(css_property_animator_assertThisInitialized(_this), "_name", void 0);

    css_property_animator_defineProperty(css_property_animator_assertThisInitialized(_this), "_unit", void 0);

    css_property_animator_defineProperty(css_property_animator_assertThisInitialized(_this), "_computeValue", void 0);

    _this._name = options.name;
    _this._unit = options.unit;

    if (options.computeValue !== undefined) {
      _this._computeValue = options.computeValue;
    } else if (options.endValue === undefined) {
      var startValue = options.startValue;

      _this._computeValue = function (ratioValue) {
        return startValue + ratioValue;
      };
    } else if (options.startValue <= options.endValue) {
      var _startValue = options.startValue;
      var difference = options.endValue - options.startValue;

      _this._computeValue = function (ratioValue) {
        return difference * ratioValue + _startValue;
      };
    } else {
      var _startValue2 = options.endValue;

      var _difference = options.startValue - options.endValue;

      _this._computeValue = function (ratioValue) {
        return _difference * (1 - ratioValue) + _startValue2;
      };
    }

    return _this;
  }

  css_property_animator_createClass(CssPropertyAnimator, [{
    key: "_update",
    value: function _update(ratioValue) {
      var propertyValue = this._computeValue(ratioValue);

      this.setCssPropertyValue("".concat(propertyValue).concat(this._unit));
    }
  }, {
    key: "getCssPropertyValue",
    value: function getCssPropertyValue() {
      return this._target.style.getPropertyValue(this._name);
    }
  }, {
    key: "setCssPropertyValue",
    value: function setCssPropertyValue(value) {
      this._target.style.setProperty(this._name, value);
    }
  }]);

  return CssPropertyAnimator;
}(BaseAnimator);

css_property_animator_defineProperty(CssPropertyAnimator, "DEFAULT_OPTIONS", {
  unit: "px"
});


// CONCATENATED MODULE: ./src/animators/index.ts






// CONCATENATED MODULE: ./src/scroll-animation.ts
function scroll_animation_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = scroll_animation_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function scroll_animation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return scroll_animation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return scroll_animation_arrayLikeToArray(o, minLen); }

function scroll_animation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function scroll_animation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function scroll_animation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { scroll_animation_ownKeys(Object(source), true).forEach(function (key) { scroll_animation_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { scroll_animation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function scroll_animation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function scroll_animation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function scroll_animation_createClass(Constructor, protoProps, staticProps) { if (protoProps) scroll_animation_defineProperties(Constructor.prototype, protoProps); if (staticProps) scroll_animation_defineProperties(Constructor, staticProps); return Constructor; }

function scroll_animation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var scroll_animation_ScrollAnimation = /*#__PURE__*/function () {
  scroll_animation_createClass(ScrollAnimation, null, [{
    key: "Normalize",
    value: function Normalize(value) {
      if (value <= 0) {
        return 0;
      } else if (value >= 1) {
        return 1;
      } else {
        return value;
      }
    }
  }]);

  function ScrollAnimation(options) {
    var _this = this;

    scroll_animation_classCallCheck(this, ScrollAnimation);

    scroll_animation_defineProperty(this, "_enabled", void 0);

    scroll_animation_defineProperty(this, "_animators", void 0);

    scroll_animation_defineProperty(this, "_lastRatio", void 0);

    scroll_animation_defineProperty(this, "_lastScrollValue", void 0);

    scroll_animation_defineProperty(this, "_computeRatio", void 0);

    scroll_animation_defineProperty(this, "_getScrollValue", void 0);

    var _options = scroll_animation_objectSpread(scroll_animation_objectSpread({}, ScrollAnimation.DEFAULT_OPTIONS), options);

    this._enabled = true;
    this._animators = [];
    this._lastRatio = 0;
    this._lastScrollValue = 0;

    var _iterator = scroll_animation_createForOfIteratorHelper(_options.classes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var classOptions = _step.value;

        this._animators.push(new ClassAnimator(scroll_animation_objectSpread({
          target: _options.target
        }, classOptions)));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = scroll_animation_createForOfIteratorHelper(_options.cssProperties),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var cssPropertyOptions = _step2.value;

        this._animators.push(new CssPropertyAnimator(scroll_animation_objectSpread({
          target: _options.target
        }, cssPropertyOptions)));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (_options.computeRatio !== undefined) {
      this._computeRatio = _options.computeRatio;
    } else if (_options.endingValue === undefined) {
      var startValue = _options.startingValue;

      if (_options.maxDifference === undefined) {
        this._computeRatio = function (scrollValue) {
          if (scrollValue <= startValue) {
            return 0;
          } else {
            return scrollValue - startValue;
          }
        };
      } else {
        var maxDifference = Math.abs(_options.maxDifference);

        this._computeRatio = function (scrollValue) {
          if (scrollValue <= startValue) {
            return 0;
          } else {
            var difference = scrollValue - _this._lastScrollValue;
            var partialRatio = difference / maxDifference;
            return ScrollAnimation.Normalize(partialRatio + _this._lastRatio);
          }
        };
      }
    } else if (_options.startingValue <= _options.endingValue) {
      var _startValue = _options.startingValue;
      var endValue = _options.endingValue;

      if (_options.maxDifference === undefined) {
        var difference = _options.endingValue - _options.startingValue;

        this._computeRatio = function (scrollValue) {
          if (scrollValue <= _startValue) {
            return 0;
          } else if (scrollValue >= endValue) {
            return 1;
          } else {
            return (scrollValue - _startValue) / difference;
          }
        };
      } else {
        var _maxDifference = Math.abs(_options.maxDifference);

        this._computeRatio = function (scrollValue) {
          if (scrollValue <= _startValue) {
            return 0;
          } else if (scrollValue >= endValue) {
            return 1;
          } else {
            var _difference = scrollValue - _this._lastScrollValue;

            var partialRatio = _difference / _maxDifference;
            return ScrollAnimation.Normalize(partialRatio + _this._lastRatio);
          }
        };
      }
    } else {
      throw new Error("'startValue' option must be less than or equal to 'endValue'.");
    }

    if (_options.orientation === "horizontal") {
      // if (element !== undefined)
      // {
      //     return element.scrollLeft;
      // }
      this._getScrollValue = function () {
        return window.pageXOffset;
      };
    } else if (_options.orientation === "vertical") {
      // if (element !== undefined)
      // {
      //     return element.scrollTop;
      // }
      this._getScrollValue = function () {
        return window.pageYOffset;
      };
    } else {
      throw new Error("'orientation' option value must be equal to \"horizontal\" or \"vertical\".");
    }

    this.update();
  }

  scroll_animation_createClass(ScrollAnimation, [{
    key: "enable",
    value: function enable() {
      this._enabled = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._enabled = false;
    }
  }, {
    key: "update",
    value: function update() {
      var scrollValue = this._getScrollValue();

      var ratio = this._computeRatio(scrollValue);

      var _iterator3 = scroll_animation_createForOfIteratorHelper(this._animators.filter(function (a) {
        return a.canBeApplied();
      })),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var animator = _step3.value;
          animator.update(ratio);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this._lastRatio = ratio;
      this._lastScrollValue = scrollValue;
    }
  }, {
    key: "isEnabled",
    get: function get() {
      return this._enabled;
    }
  }]);

  return ScrollAnimation;
}();

scroll_animation_defineProperty(scroll_animation_ScrollAnimation, "DEFAULT_OPTIONS", {
  orientation: "vertical",
  classes: [],
  cssProperties: []
});


// CONCATENATED MODULE: ./src/vue-scroll-animator.ts
function vue_scroll_animator_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = vue_scroll_animator_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function vue_scroll_animator_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return vue_scroll_animator_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vue_scroll_animator_arrayLikeToArray(o, minLen); }

function vue_scroll_animator_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function vue_scroll_animator_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vue_scroll_animator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vue_scroll_animator_ownKeys(Object(source), true).forEach(function (key) { vue_scroll_animator_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vue_scroll_animator_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function vue_scroll_animator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vue_scroll_animator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vue_scroll_animator_createClass(Constructor, protoProps, staticProps) { if (protoProps) vue_scroll_animator_defineProperties(Constructor.prototype, protoProps); if (staticProps) vue_scroll_animator_defineProperties(Constructor, staticProps); return Constructor; }

function vue_scroll_animator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// Based on: https://github.com/janpaepke/ScrollMagic
//


var vue_scroll_animator_VueScrollAnimator = /*#__PURE__*/function () {
  vue_scroll_animator_createClass(VueScrollAnimator, null, [{
    key: "install",
    value: function install(Vue, configuration) {
      var self = new VueScrollAnimator();
      self.init();

      Vue.prototype.$initScrollAnimation = function (options) {
        return self.animate.call(self, vue_scroll_animator_objectSpread({
          target: this.$el
        }, options));
      };

      Vue.prototype.$destroyScrollAnimation = function (animation) {
        self.deanimate.call(self, animation);
      };
    }
  }]);

  function VueScrollAnimator() {
    var _this = this;

    vue_scroll_animator_classCallCheck(this, VueScrollAnimator);

    vue_scroll_animator_defineProperty(this, "_isUpdating", void 0);

    vue_scroll_animator_defineProperty(this, "_requestId", void 0);

    vue_scroll_animator_defineProperty(this, "_animations", void 0);

    vue_scroll_animator_defineProperty(this, "_requestCallback", function (timestamp) {
      if (_this._isUpdating === true) {
        var _iterator = vue_scroll_animator_createForOfIteratorHelper(_this._animations.filter(function (a) {
          return a.isEnabled;
        })),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var animation = _step.value;
            animation.update();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        _this._isUpdating = false;
      }
    });

    vue_scroll_animator_defineProperty(this, "_eventListener", function (evt) {
      if (_this._isUpdating === false) {
        _this._isUpdating = true;
        _this._requestId = window.requestAnimationFrame(_this._requestCallback);
      }
    });

    this._isUpdating = false;
    this._animations = [];
  }

  vue_scroll_animator_createClass(VueScrollAnimator, [{
    key: "animate",
    value: function animate(options) {
      if (options.target === undefined) {
        throw new Error("'target' option must be correctly valorized.");
      }

      var animation = new scroll_animation_ScrollAnimation(options);

      this._animations.push(animation);

      return animation;
    }
  }, {
    key: "deanimate",
    value: function deanimate(animation) {
      this._animations = this._animations.filter(function (item) {
        return item !== animation;
      });
      animation.disable();
    }
  }, {
    key: "init",
    value: function init() {
      window.addEventListener("resize", this._eventListener, {
        capture: true,
        passive: true
      });
      window.addEventListener("scroll", this._eventListener, {
        capture: true,
        passive: true
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener("resize", this._eventListener);
      window.removeEventListener("scroll", this._eventListener);

      if (this._requestId !== undefined) {
        window.cancelAnimationFrame(this._requestId);
        this._requestId = undefined;
      }
    }
  }]);

  return VueScrollAnimator;
}();


// CONCATENATED MODULE: ./src/index.ts

/* harmony default export */ var src = __webpack_exports__["default"] = (vue_scroll_animator_VueScrollAnimator);






/***/ })
/******/ ])["default"];
//# sourceMappingURL=vue-scroll-animator.js.map