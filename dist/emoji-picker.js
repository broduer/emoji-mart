(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["EmojiPicker"] = factory(require("react"));
	else
		root["EmojiPicker"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(1);
	
	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _components.Picker;
	  }
	});
	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _components.Emoji;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _anchors = __webpack_require__(2);
	
	Object.defineProperty(exports, 'Anchors', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_anchors).default;
	  }
	});
	
	var _category = __webpack_require__(15);
	
	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category).default;
	  }
	});
	
	var _emoji = __webpack_require__(16);
	
	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_emoji).default;
	  }
	});
	
	var _picker = __webpack_require__(18);
	
	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_picker).default;
	  }
	});
	
	var _preview = __webpack_require__(20);
	
	Object.defineProperty(exports, 'Preview', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_preview).default;
	  }
	});
	
	var _search = __webpack_require__(21);
	
	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});
	
	var _skins = __webpack_require__(23);
	
	Object.defineProperty(exports, 'Skins', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_skins).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _svgInlineReact = __webpack_require__(4);
	
	var _svgInlineReact2 = _interopRequireDefault(_svgInlineReact);
	
	var _svgs = __webpack_require__(5);
	
	var SVGs = _interopRequireWildcard(_svgs);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Anchors = function (_React$Component) {
	  _inherits(Anchors, _React$Component);
	
	  function Anchors(props) {
	    _classCallCheck(this, Anchors);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Anchors).call(this, props));
	
	    _this.state = {
	      selected: props.categories[0].name
	    };
	    return _this;
	  }
	
	  _createClass(Anchors, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var categories = _props.categories;
	      var onAnchorClick = _props.onAnchorClick;
	      var selected = this.state.selected;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-picker-anchors' },
	        categories.map(function (category, i) {
	          var name = category.name;
	
	
	          return _react2.default.createElement(
	            'span',
	            {
	              key: name,
	              title: name,
	              onClick: function onClick() {
	                return onAnchorClick(category, i);
	              },
	              className: 'emoji-picker-anchor ' + (name == selected ? 'emoji-picker-anchor-selected' : '')
	            },
	            _react2.default.createElement(_svgInlineReact2.default, { src: SVGs[name] }),
	            _react2.default.createElement('span', { className: 'emoji-picker-anchor-bar' })
	          );
	        })
	      );
	    }
	  }]);
	
	  return Anchors;
	}(_react2.default.Component);
	
	exports.default = Anchors;
	
	
	Anchors.propTypes = {
	  categories: _react2.default.PropTypes.array,
	  onAnchorClick: _react2.default.PropTypes.func
	};
	
	Anchors.defaultProps = {
	  categories: [],
	  onAnchorClick: function onAnchorClick() {}
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var DOMParser = typeof window !== 'undefined' && window.DOMParser;
	var process = process || {};
	process.env = process.env || {};
	var parserAvailable = typeof DOMParser !== 'undefined' && DOMParser.prototype != null && DOMParser.prototype.parseFromString != null;
	
	if ("production" !== process.env.NODE_ENV && !parserAvailable) {
	    console.info('<InlineSVG />: `raw` prop works only when `window.DOMParser` exists.');
	}
	
	function isParsable(src) {
	    // kinda naive but meh, ain't gonna use full-blown parser for this
	    return parserAvailable && typeof src === 'string' && src.trim().substr(0, 4) === '<svg';
	}
	
	// parse SVG string using `DOMParser`
	function parseFromSVGString(src) {
	    var parser = new DOMParser();
	    return parser.parseFromString(src, "image/svg+xml");
	}
	
	// Transform DOM prop/attr names applicable to `<svg>` element but react-limited
	function switchSVGAttrToReactProp(propName) {
	    switch (propName) {
	        case 'class':
	            return 'className';
	        default:
	            return propName;
	    }
	}
	
	var InlineSVG = (function (_React$Component) {
	    _inherits(InlineSVG, _React$Component);
	
	    _createClass(InlineSVG, null, [{
	        key: 'defaultProps',
	        value: {
	            element: 'i',
	            raw: false,
	            src: ''
	        },
	        enumerable: true
	    }, {
	        key: 'propTypes',
	        value: {
	            src: _react2['default'].PropTypes.string.isRequired,
	            element: _react2['default'].PropTypes.string,
	            raw: _react2['default'].PropTypes.bool
	        },
	        enumerable: true
	    }]);
	
	    function InlineSVG(props) {
	        _classCallCheck(this, InlineSVG);
	
	        _get(Object.getPrototypeOf(InlineSVG.prototype), 'constructor', this).call(this, props);
	        this._extractSVGProps = this._extractSVGProps.bind(this);
	    }
	
	    // Serialize `Attr` objects in `NamedNodeMap`
	
	    _createClass(InlineSVG, [{
	        key: '_serializeAttrs',
	        value: function _serializeAttrs(map) {
	            var ret = {};
	            var prop = undefined;
	            for (var i = 0; i < map.length; i++) {
	                prop = switchSVGAttrToReactProp(map[i].name);
	                ret[prop] = map[i].value;
	            }
	            return ret;
	        }
	
	        // get <svg /> element props
	    }, {
	        key: '_extractSVGProps',
	        value: function _extractSVGProps(src) {
	            var map = parseFromSVGString(src).documentElement.attributes;
	            return map.length > 0 ? this._serializeAttrs(map) : null;
	        }
	
	        // get content inside <svg> element.
	    }, {
	        key: '_stripSVG',
	        value: function _stripSVG(src) {
	            return parseFromSVGString(src).documentElement.innerHTML;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(_ref) {
	            var children = _ref.children;
	
	            if ("production" !== process.env.NODE_ENV && children != null) {
	                console.info('<InlineSVG />: `children` prop will be ignored.');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Element = undefined,
	                __html = undefined,
	                svgProps = undefined;
	            var _props = this.props;
	            var element = _props.element;
	            var raw = _props.raw;
	            var src = _props.src;
	
	            if (raw === true && isParsable(src)) {
	                Element = 'svg';
	                svgProps = this._extractSVGProps(src);
	                __html = this._stripSVG(src);
	            }
	            __html = __html || src;
	            Element = Element || element;
	            svgProps = svgProps || {};
	
	            return _react2['default'].createElement(Element, _extends({}, svgProps, this.props, { src: null, children: null,
	                dangerouslySetInnerHTML: { __html: __html } }));
	        }
	    }]);
	
	    return InlineSVG;
	})(_react2['default'].Component);
	
	exports['default'] = InlineSVG;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _activity = __webpack_require__(6);
	
	Object.defineProperty(exports, 'Activity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_activity).default;
	  }
	});
	
	var _flags = __webpack_require__(7);
	
	Object.defineProperty(exports, 'Flags', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_flags).default;
	  }
	});
	
	var _foods = __webpack_require__(8);
	
	Object.defineProperty(exports, 'Foods', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foods).default;
	  }
	});
	
	var _nature = __webpack_require__(9);
	
	Object.defineProperty(exports, 'Nature', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nature).default;
	  }
	});
	
	var _objects = __webpack_require__(10);
	
	Object.defineProperty(exports, 'Objects', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_objects).default;
	  }
	});
	
	var _people = __webpack_require__(11);
	
	Object.defineProperty(exports, 'People', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_people).default;
	  }
	});
	
	var _places = __webpack_require__(12);
	
	Object.defineProperty(exports, 'Places', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_places).default;
	  }
	});
	
	var _recent = __webpack_require__(13);
	
	Object.defineProperty(exports, 'Recent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_recent).default;
	  }
	});
	
	var _symbols = __webpack_require__(14);
	
	Object.defineProperty(exports, 'Symbols', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_symbols).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"></path></svg>"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"></path></svg>"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"></path></svg>"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"></path><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"></path></svg>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"></path><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"></path></svg>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"></path></svg>"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"></path><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"></path></svg>"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"></path><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path></svg>"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"></path></svg>"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Category = function (_React$Component) {
	  _inherits(Category, _React$Component);
	
	  function Category() {
	    _classCallCheck(this, Category);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Category).apply(this, arguments));
	  }
	
	  _createClass(Category, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.container = this.refs.container;
	      this.label = this.refs.label;
	      this.parent = this.container.parentNode;
	
	      this.margin = 0;
	      this.minMargin = 0;
	
	      this.memoizeSize();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.memoizeSize();
	    }
	  }, {
	    key: 'memoizeSize',
	    value: function memoizeSize() {
	      var _container$getBoundin = this.container.getBoundingClientRect();
	
	      var top = _container$getBoundin.top;
	      var height = _container$getBoundin.height;
	
	      var _parent$getBoundingCl = this.parent.getBoundingClientRect();
	
	      var parentTop = _parent$getBoundingCl.top;
	
	      var _label$getBoundingCli = this.label.getBoundingClientRect();
	
	      var labelHeight = _label$getBoundingCli.height;
	
	
	      this.top = top - parentTop + this.parent.scrollTop;
	      if (height > labelHeight) {
	        this.maxMargin = height - labelHeight;
	      } else {
	        this.maxMargin = 1;
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll(scrollTop) {
	      var margin = scrollTop - this.top;
	      margin = margin < this.minMargin ? this.minMargin : margin;
	      margin = margin > this.maxMargin ? this.maxMargin : margin;
	
	      if (margin == this.margin) return;
	      var name = this.props.name;
	
	
	      if (!this.props.hasStickyPosition) {
	        this.label.style.top = margin + 'px';
	      }
	
	      this.margin = margin;
	      return true;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var emojis = _props.emojis;
	      var hasStickyPosition = _props.hasStickyPosition;
	      var emojiProps = _props.emojiProps;
	      var emojis = emojis ? emojis.slice(0) : null;
	      var labelStyles = {};
	      var labelSpanStyles = {};
	      var containerStyles = {};
	
	      if (!hasStickyPosition) {
	        labelStyles = {
	          height: 28
	        };
	
	        labelSpanStyles = {
	          position: 'absolute'
	        };
	      }
	
	      if (!emojis) {
	        containerStyles = {
	          height: 1,
	          overflow: 'hidden'
	        };
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { ref: 'container', className: 'emoji-picker-category', style: containerStyles },
	        _react2.default.createElement(
	          'div',
	          { style: labelStyles, 'data-name': name, className: 'emoji-picker-category-label' },
	          _react2.default.createElement(
	            'span',
	            { style: labelSpanStyles, ref: 'label' },
	            name
	          )
	        ),
	        emojis && emojis.map(function (emoji) {
	          return _react2.default.createElement(_.Emoji, _extends({
	            key: emoji,
	            emoji: emoji
	          }, emojiProps));
	        }),
	        emojis && !emojis.length && _react2.default.createElement(
	          'div',
	          { className: 'emoji-picker-no-results' },
	          _react2.default.createElement(_.Emoji, _extends({}, emojiProps, {
	            size: 22,
	            emoji: 'sleuth_or_spy'
	          })),
	          _react2.default.createElement(
	            'span',
	            { className: 'emoji-picker-no-results-label' },
	            'No emoji found'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Category;
	}(_react2.default.Component);
	
	exports.default = Category;
	
	
	Category.propTypes = {
	  emojis: _react2.default.PropTypes.array,
	  hasStickyPosition: _react2.default.PropTypes.bool,
	  name: _react2.default.PropTypes.string.isRequired,
	  emojiProps: _react2.default.PropTypes.object.isRequired
	};
	
	Category.defaultProps = {
	  emojis: [],
	  hasStickyPosition: true
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _data = __webpack_require__(17);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SHEET_SIZE = 2624;
	var EMOJI_SIZE = 64;
	var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
	
	var Emoji = function (_React$Component) {
	  _inherits(Emoji, _React$Component);
	
	  function Emoji(props) {
	    _classCallCheck(this, Emoji);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Emoji).call(this, props));
	
	    var emojiData = _this.getEmojiData();
	    _this.hasSkinVariations = !!emojiData.skin_variations;
	    return _this;
	  }
	
	  _createClass(Emoji, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.hasSkinVariations && nextProps.skin != this.props.skin || nextProps.size != this.props.size || nextProps.sheetURL != this.props.sheetURL;
	    }
	  }, {
	    key: 'getEmojiData',
	    value: function getEmojiData() {
	      var _props = this.props;
	      var emoji = _props.emoji;
	      var skin = _props.skin;
	      var sheetURL = _props.sheetURL;
	      var emojiData = emoji;
	
	      if (typeof emoji == 'string') {
	        emojiData = _data2.default.emojis[emoji];
	      }
	
	      if (this.hasSkinVariations && skin > 1) {
	        emojiData = JSON.parse(JSON.stringify(_data2.default.emojis[emoji]));
	
	        var skinKey = SKINS[skin - 1],
	            variationKey = emojiData.unified + '-' + skinKey,
	            variationData = emojiData.skin_variations[variationKey],
	            kitMatches = sheetURL.match(/(apple|google|twitter|emojione)/),
	            kit = kitMatches[0];
	
	        if (variationData['has_img_' + kit]) {
	          emojiData.skin_tone = skin;
	
	          for (var k in variationData) {
	            var v = variationData[k];
	            emojiData[k] = v;
	          }
	        }
	      }
	
	      return emojiData;
	    }
	  }, {
	    key: 'getSheetSize',
	    value: function getSheetSize() {
	      var size = this.props.size;
	      var sheetSize = SHEET_SIZE * size / EMOJI_SIZE;
	
	      return sheetSize + 'px ' + sheetSize + 'px';
	    }
	  }, {
	    key: 'getPosition',
	    value: function getPosition(emojiData) {
	      var size = this.props.size;
	      var sheet_x = emojiData.sheet_x;
	      var sheet_y = emojiData.sheet_y;
	      var x = sheet_x * size;
	      var y = sheet_y * size;
	
	      return '-' + x + 'px -' + y + 'px';
	    }
	  }, {
	    key: 'getNative',
	    value: function getNative(emojiData) {
	      var unified = emojiData.unified;
	      var unicodes = unified.split('-');
	      var codePoints = unicodes.map(function (u) {
	        return '0x' + u;
	      });
	
	      return String.fromCodePoint.apply(String, _toConsumableArray(codePoints));
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(emojiData) {
	      var onClick = this.props.onClick;
	      var name = emojiData.name;
	      var short_names = emojiData.short_names;
	      var skin_tone = emojiData.skin_tone;
	      var text = emojiData.text;
	      var texts = emojiData.texts;
	      var unified = emojiData.unified;
	      var id = short_names[0];
	      var colons = ':' + id + ':';
	
	      texts || (texts = []);
	      if (text && !texts.length) {
	        texts = [text];
	      }
	
	      if (skin_tone) {
	        colons += ':skin-tone-' + skin_tone + ':';
	      }
	
	      onClick({
	        id: id,
	        name: name,
	        colons: colons,
	        skin: skin_tone || 1,
	        emoticons: texts,
	        native: this.getNative(emojiData)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props;
	      var sheetURL = _props2.sheetURL;
	      var size = _props2.size;
	      var onOver = _props2.onOver;
	      var onLeave = _props2.onLeave;
	      var emojiData = this.getEmojiData();
	
	      return _react2.default.createElement(
	        'span',
	        {
	          onClick: function onClick() {
	            return _this2.handleClick(emojiData);
	          },
	          onMouseEnter: function onMouseEnter() {
	            return onOver(emojiData);
	          },
	          onMouseLeave: function onMouseLeave() {
	            return onLeave(emojiData);
	          },
	          className: 'emoji-picker-emoji' },
	        _react2.default.createElement('span', { style: {
	            width: size,
	            height: size,
	            display: 'inline-block',
	            backgroundImage: 'url(' + sheetURL + ')',
	            backgroundSize: this.getSheetSize(),
	            backgroundPosition: this.getPosition(emojiData)
	          } })
	      );
	    }
	  }]);
	
	  return Emoji;
	}(_react2.default.Component);
	
	exports.default = Emoji;
	
	
	Emoji.propTypes = {
	  skin: _react2.default.PropTypes.number,
	  onOver: _react2.default.PropTypes.func,
	  onLeave: _react2.default.PropTypes.func,
	  onClick: _react2.default.PropTypes.func,
	  size: _react2.default.PropTypes.number.isRequired,
	  sheetURL: _react2.default.PropTypes.string.isRequired,
	  emoji: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]).isRequired
	};
	
	Emoji.defaultProps = {
	  skin: 1,
	  onOver: function onOver() {},
	  onLeave: function onLeave() {},
	  onClick: function onClick() {}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={"categories":[{"name":"People","emojis":["grinning","grimacing","grin","joy","smiley","smile","sweat_smile","laughing","innocent","wink","blush","slightly_smiling_face","upside_down_face","relaxed","yum","relieved","heart_eyes","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","stuck_out_tongue","money_mouth_face","nerd_face","sunglasses","hugging_face","smirk","no_mouth","neutral_face","expressionless","unamused","face_with_rolling_eyes","thinking_face","flushed","disappointed","worried","angry","rage","pensive","confused","slightly_frowning_face","white_frowning_face","persevere","confounded","tired_face","weary","triumph","open_mouth","scream","fearful","cold_sweat","hushed","frowning","anguished","cry","disappointed_relieved","sleepy","sweat","sob","dizzy_face","astonished","zipper_mouth_face","mask","face_with_thermometer","face_with_head_bandage","sleeping","zzz","hankey","smiling_imp","imp","japanese_ogre","japanese_goblin","skull","ghost","alien","robot_face","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","raised_hands","clap","wave","+1","-1","facepunch","fist","v","ok_hand","hand","open_hands","muscle","pray","point_up","point_up_2","point_down","point_left","point_right","middle_finger","raised_hand_with_fingers_splayed","the_horns","spock-hand","writing_hand","nail_care","lips","tongue","ear","nose","eye","eyes","bust_in_silhouette","busts_in_silhouette","speaking_head_in_silhouette","baby","boy","girl","man","woman","person_with_blond_hair","older_man","older_woman","man_with_gua_pi_mao","man_with_turban","cop","construction_worker","guardsman","sleuth_or_spy","santa","angel","princess","bride_with_veil","walking","runner","dancer","dancers","couple","two_men_holding_hands","two_women_holding_hands","bow","information_desk_person","no_good","ok_woman","raising_hand","person_with_pouting_face","person_frowning","haircut","massage","couple_with_heart","woman-heart-woman","man-heart-man","couplekiss","woman-kiss-woman","man-kiss-man","family","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","womans_clothes","shirt","jeans","necktie","dress","bikini","kimono","lipstick","kiss","footprints","high_heel","sandal","boot","mans_shoe","athletic_shoe","womans_hat","tophat","helmet_with_white_cross","mortar_board","crown","school_satchel","pouch","purse","handbag","briefcase","eyeglasses","dark_sunglasses","ring","closed_umbrella"]},{"name":"Nature","emojis":["dog","cat","mouse","hamster","rabbit","bear","panda_face","koala","tiger","lion_face","cow","pig","pig_nose","frog","octopus","monkey_face","see_no_evil","hear_no_evil","speak_no_evil","monkey","chicken","penguin","bird","baby_chick","hatching_chick","hatched_chick","wolf","boar","horse","unicorn_face","bee","bug","snail","beetle","ant","spider","scorpion","crab","snake","turtle","tropical_fish","fish","blowfish","dolphin","whale","whale2","crocodile","leopard","tiger2","water_buffalo","ox","cow2","dromedary_camel","camel","elephant","goat","ram","sheep","racehorse","pig2","rat","mouse2","rooster","turkey","dove_of_peace","dog2","poodle","cat2","rabbit2","chipmunk","feet","dragon","dragon_face","cactus","christmas_tree","evergreen_tree","deciduous_tree","palm_tree","seedling","herb","shamrock","four_leaf_clover","bamboo","tanabata_tree","leaves","fallen_leaf","maple_leaf","ear_of_rice","hibiscus","sunflower","rose","tulip","blossom","cherry_blossom","bouquet","mushroom","chestnut","jack_o_lantern","shell","spider_web","earth_americas","earth_africa","earth_asia","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","new_moon","waxing_crescent_moon","first_quarter_moon","moon","new_moon_with_face","full_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","sun_with_face","crescent_moon","star","star2","dizzy","sparkles","comet","sunny","mostly_sunny","partly_sunny","barely_sunny","partly_sunny_rain","cloud","rain_cloud","thunder_cloud_and_rain","lightning","zap","fire","boom","snowflake","snow_cloud","snowman","snowman_without_snow","wind_blowing_face","dash","tornado","fog","umbrella","umbrella_with_rain_drops","droplet","sweat_drops","ocean"]},{"name":"Foods","emojis":["green_apple","apple","pear","tangerine","lemon","banana","watermelon","grapes","strawberry","melon","cherries","peach","pineapple","tomato","eggplant","hot_pepper","corn","sweet_potato","honey_pot","bread","cheese_wedge","poultry_leg","meat_on_bone","fried_shrimp","egg","hamburger","fries","hotdog","pizza","spaghetti","taco","burrito","ramen","stew","fish_cake","sushi","bento","curry","rice_ball","rice","rice_cracker","oden","dango","shaved_ice","ice_cream","icecream","cake","birthday","custard","candy","lollipop","chocolate_bar","popcorn","doughnut","cookie","beer","beers","wine_glass","cocktail","tropical_drink","champagne","sake","tea","coffee","baby_bottle","fork_and_knife","knife_fork_plate"]},{"name":"Activity","emojis":["soccer","basketball","football","baseball","tennis","volleyball","rugby_football","8ball","golf","golfer","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","ice_hockey_stick_and_puck","field_hockey_stick_and_ball","cricket_bat_and_ball","ski","skier","snowboarder","ice_skate","bow_and_arrow","fishing_pole_and_fish","rowboat","swimmer","surfer","bath","person_with_ball","weight_lifter","bicyclist","mountain_bicyclist","horse_racing","man_in_business_suit_levitating","trophy","running_shirt_with_sash","sports_medal","medal","reminder_ribbon","rosette","ticket","admission_tickets","performing_arts","art","circus_tent","microphone","headphones","musical_score","musical_keyboard","saxophone","trumpet","guitar","violin","clapper","video_game","space_invader","dart","game_die","slot_machine","bowling"]},{"name":"Places","emojis":["car","taxi","blue_car","bus","trolleybus","racing_car","police_car","ambulance","fire_engine","minibus","truck","articulated_lorry","tractor","racing_motorcycle","bike","rotating_light","oncoming_police_car","oncoming_bus","oncoming_automobile","oncoming_taxi","aerial_tramway","mountain_cableway","suspension_railway","railway_car","train","monorail","bullettrain_side","bullettrain_front","light_rail","mountain_railway","steam_locomotive","train2","metro","tram","station","helicopter","small_airplane","airplane","airplane_departure","airplane_arriving","boat","motor_boat","speedboat","ferry","passenger_ship","rocket","satellite","seat","anchor","construction","fuelpump","busstop","vertical_traffic_light","traffic_light","checkered_flag","ship","ferris_wheel","roller_coaster","carousel_horse","building_construction","foggy","tokyo_tower","factory","fountain","rice_scene","mountain","snow_capped_mountain","mount_fuji","volcano","japan","camping","tent","national_park","motorway","railway_track","sunrise","sunrise_over_mountains","desert","beach_with_umbrella","desert_island","city_sunrise","city_sunset","cityscape","night_with_stars","bridge_at_night","milky_way","stars","sparkler","fireworks","rainbow","house_buildings","european_castle","japanese_castle","stadium","statue_of_liberty","house","house_with_garden","derelict_house_building","office","department_store","post_office","european_post_office","hospital","bank","hotel","convenience_store","school","love_hotel","wedding","classical_building","church","mosque","synagogue","kaaba","shinto_shrine"]},{"name":"Objects","emojis":["watch","iphone","calling","computer","keyboard","desktop_computer","printer","three_button_mouse","trackball","joystick","compression","minidisc","floppy_disk","cd","dvd","vhs","camera","camera_with_flash","video_camera","movie_camera","film_projector","film_frames","telephone_receiver","phone","pager","fax","tv","radio","studio_microphone","level_slider","control_knobs","stopwatch","timer_clock","alarm_clock","mantelpiece_clock","hourglass_flowing_sand","hourglass","satellite_antenna","battery","electric_plug","bulb","flashlight","candle","wastebasket","oil_drum","money_with_wings","dollar","yen","euro","pound","moneybag","credit_card","gem","scales","wrench","hammer","hammer_and_pick","hammer_and_wrench","pick","nut_and_bolt","gear","chains","gun","bomb","hocho","dagger_knife","crossed_swords","shield","smoking","skull_and_crossbones","coffin","funeral_urn","amphora","crystal_ball","prayer_beads","barber","alembic","telescope","microscope","hole","pill","syringe","thermometer","label","bookmark","toilet","shower","bathtub","key","old_key","couch_and_lamp","sleeping_accommodation","bed","door","bellhop_bell","frame_with_picture","world_map","umbrella_on_ground","moyai","shopping_bags","balloon","flags","ribbon","gift","confetti_ball","tada","dolls","wind_chime","crossed_flags","izakaya_lantern","email","envelope_with_arrow","incoming_envelope","e-mail","love_letter","postbox","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","package","postal_horn","inbox_tray","outbox_tray","scroll","page_with_curl","bookmark_tabs","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","page_facing_up","date","calendar","spiral_calendar_pad","card_index","card_file_box","ballot_box_with_ballot","file_cabinet","clipboard","spiral_note_pad","file_folder","open_file_folder","card_index_dividers","rolled_up_newspaper","newspaper","notebook","closed_book","green_book","blue_book","orange_book","notebook_with_decorative_cover","ledger","books","book","link","paperclip","linked_paperclips","scissors","triangular_ruler","straight_ruler","pushpin","round_pushpin","triangular_flag_on_post","waving_white_flag","waving_black_flag","closed_lock_with_key","lock","unlock","lock_with_ink_pen","lower_left_ballpoint_pen","lower_left_fountain_pen","black_nib","memo","pencil2","lower_left_crayon","lower_left_paintbrush","mag","mag_right"]},{"name":"Symbols","emojis":["heart","yellow_heart","green_heart","blue_heart","purple_heart","broken_heart","heavy_heart_exclamation_mark_ornament","two_hearts","revolving_hearts","heartbeat","heartpulse","sparkling_heart","cupid","gift_heart","heart_decoration","peace_symbol","latin_cross","star_and_crescent","om_symbol","wheel_of_dharma","star_of_david","six_pointed_star","menorah_with_nine_branches","yin_yang","orthodox_cross","place_of_worship","ophiuchus","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","id","atom_symbol","u7a7a","u5272","radioactive_sign","biohazard_sign","mobile_phone_off","vibration_mode","u6709","u7121","u7533","u55b6","u6708","eight_pointed_black_star","vs","accept","white_flower","ideograph_advantage","secret","congratulations","u5408","u6e80","u7981","a","b","ab","cl","o2","sos","no_entry","name_badge","no_entry_sign","x","o","anger","hotsprings","no_pedestrians","do_not_litter","no_bicycles","non-potable_water","underage","no_mobile_phones","exclamation","grey_exclamation","question","grey_question","bangbang","interrobang","100","low_brightness","high_brightness","trident","fleur_de_lis","part_alternation_mark","warning","children_crossing","beginner","recycle","u6307","chart","sparkle","eight_spoked_asterisk","negative_squared_cross_mark","white_check_mark","diamond_shape_with_a_dot_inside","cyclone","loop","globe_with_meridians","m","atm","sa","passport_control","customs","baggage_claim","left_luggage","wheelchair","no_smoking","wc","parking","potable_water","mens","womens","baby_symbol","restroom","put_litter_in_its_place","cinema","signal_strength","koko","ng","ok","up","cool","new","free","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","keycap_star","1234","arrow_forward","double_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","black_square_for_stop","eject","black_circle_for_record","black_right_pointing_double_triangle_with_vertical_bar","black_left_pointing_double_triangle_with_vertical_bar","fast_forward","rewind","twisted_rightwards_arrows","repeat","repeat_one","arrow_backward","arrow_up_small","arrow_down_small","arrow_double_up","arrow_double_down","arrow_right","arrow_left","arrow_up","arrow_down","arrow_upper_right","arrow_lower_right","arrow_lower_left","arrow_upper_left","arrow_up_down","left_right_arrow","arrows_counterclockwise","arrow_right_hook","leftwards_arrow_with_hook","arrow_heading_up","arrow_heading_down","hash","information_source","abc","abcd","capital_abcd","symbols","musical_note","notes","wavy_dash","curly_loop","heavy_check_mark","arrows_clockwise","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_multiplication_x","heavy_dollar_sign","currency_exchange","copyright","registered","tm","end","back","on","top","soon","ballot_box_with_check","radio_button","white_circle","black_circle","red_circle","large_blue_circle","small_orange_diamond","small_blue_diamond","large_orange_diamond","large_blue_diamond","small_red_triangle","black_small_square","white_small_square","black_large_square","white_large_square","small_red_triangle_down","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_square_button","white_square_button","speaker","sound","loud_sound","mute","mega","loudspeaker","bell","no_bell","black_joker","mahjong","spades","clubs","hearts","diamonds","flower_playing_cards","thought_balloon","right_anger_bubble","speech_balloon","left_speech_bubble","clock1","clock2","clock3","clock4","clock5","clock6","clock7","clock8","clock9","clock10","clock11","clock12","clock130","clock230","clock330","clock430","clock530","clock630","clock730","clock830","clock930","clock1030","clock1130","clock1230"]},{"name":"Flags","emojis":["flag-af","flag-ax","flag-al","flag-dz","flag-as","flag-ad","flag-ao","flag-ai","flag-aq","flag-ag","flag-ar","flag-am","flag-aw","flag-au","flag-at","flag-az","flag-bs","flag-bh","flag-bd","flag-bb","flag-by","flag-be","flag-bz","flag-bj","flag-bm","flag-bt","flag-bo","flag-bq","flag-ba","flag-bw","flag-br","flag-io","flag-vg","flag-bn","flag-bg","flag-bf","flag-bi","flag-cv","flag-kh","flag-cm","flag-ca","flag-ic","flag-ky","flag-cf","flag-td","flag-cl","flag-cn","flag-cx","flag-cc","flag-co","flag-km","flag-cg","flag-cd","flag-ck","flag-cr","flag-hr","flag-cu","flag-cw","flag-cy","flag-cz","flag-dk","flag-dj","flag-dm","flag-do","flag-ec","flag-eg","flag-sv","flag-gq","flag-er","flag-ee","flag-et","flag-eu","flag-fk","flag-fo","flag-fj","flag-fi","flag-fr","flag-gf","flag-pf","flag-tf","flag-ga","flag-gm","flag-ge","flag-de","flag-gh","flag-gi","flag-gr","flag-gl","flag-gd","flag-gp","flag-gu","flag-gt","flag-gg","flag-gn","flag-gw","flag-gy","flag-ht","flag-hn","flag-hk","flag-hu","flag-is","flag-in","flag-id","flag-ir","flag-iq","flag-ie","flag-im","flag-il","flag-it","flag-ci","flag-jm","flag-jp","flag-je","flag-jo","flag-kz","flag-ke","flag-ki","flag-xk","flag-kw","flag-kg","flag-la","flag-lv","flag-lb","flag-ls","flag-lr","flag-ly","flag-li","flag-lt","flag-lu","flag-mo","flag-mk","flag-mg","flag-mw","flag-my","flag-mv","flag-ml","flag-mt","flag-mh","flag-mq","flag-mr","flag-mu","flag-yt","flag-mx","flag-fm","flag-md","flag-mc","flag-mn","flag-me","flag-ms","flag-ma","flag-mz","flag-mm","flag-na","flag-nr","flag-np","flag-nl","flag-nc","flag-nz","flag-ni","flag-ne","flag-ng","flag-nu","flag-nf","flag-mp","flag-kp","flag-no","flag-om","flag-pk","flag-pw","flag-ps","flag-pa","flag-pg","flag-py","flag-pe","flag-ph","flag-pn","flag-pl","flag-pt","flag-pr","flag-qa","flag-re","flag-ro","flag-ru","flag-rw","flag-bl","flag-sh","flag-kn","flag-lc","flag-pm","flag-vc","flag-ws","flag-sm","flag-st","flag-sa","flag-sn","flag-rs","flag-sc","flag-sl","flag-sg","flag-sx","flag-sk","flag-si","flag-sb","flag-so","flag-za","flag-gs","flag-kr","flag-ss","flag-es","flag-lk","flag-sd","flag-sr","flag-sz","flag-se","flag-ch","flag-sy","flag-tw","flag-tj","flag-tz","flag-th","flag-tl","flag-tg","flag-tk","flag-to","flag-tt","flag-tn","flag-tr","flag-tm","flag-tc","flag-tv","flag-ug","flag-ua","flag-ae","flag-gb","flag-us","flag-vi","flag-uy","flag-uz","flag-vu","flag-va","flag-ve","flag-vn","flag-wf","flag-eh","flag-ye","flag-zm","flag-zw","flag-ac","flag-bv","flag-cp","flag-dg","flag-ea","flag-hm","flag-mf","flag-sj","flag-ta","flag-um"]}],"emojis":{"100":{"name":"Hundred Points Symbol","unified":"1F4AF","variations":[],"docomo":null,"au":"E4F2","softbank":null,"google":"FEB7B","image":"1f4af.png","sheet_x":20,"sheet_y":27,"short_name":"100","short_names":["100"],"text":null,"texts":null,"category":"Symbols","sort_order":88,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"1234":{"name":"Input Symbol for Numbers","unified":"1F522","variations":[],"docomo":null,"au":"EAFF","softbank":null,"google":"FEB7E","image":"1f522.png","sheet_x":23,"sheet_y":18,"short_name":"1234","short_names":["1234"],"text":null,"texts":null,"category":"Symbols","sort_order":146,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"grinning":{"name":"Grinning Face","unified":"1F600","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f600.png","sheet_x":26,"sheet_y":15,"short_name":"grinning","short_names":["grinning"],"text":":D","texts":null,"category":"People","sort_order":1,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heart":{"name":"Heavy Black Heart","unified":"2764","variations":["2764-FE0F"],"docomo":"E6EC","au":"E595","softbank":"E022","google":"FEB0C","image":"2764.png","sheet_x":4,"sheet_y":10,"short_name":"heart","short_names":["heart"],"text":"<3","texts":["<3"],"category":"Symbols","sort_order":1,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dog":{"name":"Dog Face","unified":"1F436","variations":[],"docomo":"E6A1","au":"E4E1","softbank":"E052","google":"FE1B7","image":"1f436.png","sheet_x":13,"sheet_y":18,"short_name":"dog","short_names":["dog"],"text":null,"texts":null,"category":"Nature","sort_order":1,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"soccer":{"name":"Soccer Ball","unified":"26BD","variations":["26BD-FE0F"],"docomo":"E656","au":"E4B6","softbank":"E018","google":"FE7D4","image":"26bd.png","sheet_x":2,"sheet_y":18,"short_name":"soccer","short_names":["soccer"],"text":null,"texts":null,"category":"Activity","sort_order":1,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"watch":{"name":"Watch","unified":"231A","variations":["231A-FE0F"],"docomo":"E71F","au":"E57A","softbank":null,"google":"FE01D","image":"231a.png","sheet_x":0,"sheet_y":14,"short_name":"watch","short_names":["watch"],"text":null,"texts":null,"category":"Objects","sort_order":1,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"green_apple":{"name":"Green Apple","unified":"1F34F","variations":[],"docomo":"E745","au":"EB5A","softbank":"E345","google":"FE05B","image":"1f34f.png","sheet_x":7,"sheet_y":16,"short_name":"green_apple","short_names":["green_apple"],"text":null,"texts":null,"category":"Foods","sort_order":1,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-af":{"name":"Regional Indicator Symbol Letters Af","unified":"1F1E6-1F1EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1eb.png","sheet_x":32,"sheet_y":36,"short_name":"flag-af","short_names":["flag-af"],"text":null,"texts":null,"category":"Flags","sort_order":1,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"car":{"name":"Automobile","unified":"1F697","variations":[],"docomo":"E65E","au":"E4B1","softbank":"E01B","google":"FE7E4","image":"1f697.png","sheet_x":29,"sheet_y":35,"short_name":"car","short_names":["car","red_car"],"text":null,"texts":null,"category":"Places","sort_order":1,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ax":{"name":"Regional Indicator Symbol Letters Ax","unified":"1F1E6-1F1FD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1fd.png","sheet_x":33,"sheet_y":7,"short_name":"flag-ax","short_names":["flag-ax"],"text":null,"texts":null,"category":"Flags","sort_order":2,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"grimacing":{"name":"Grimacing Face","unified":"1F62C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f62c.png","sheet_x":27,"sheet_y":18,"short_name":"grimacing","short_names":["grimacing"],"text":null,"texts":null,"category":"People","sort_order":2,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"taxi":{"name":"Taxi","unified":"1F695","variations":[],"docomo":"E65E","au":"E4B1","softbank":"E15A","google":"FE7EF","image":"1f695.png","sheet_x":29,"sheet_y":33,"short_name":"taxi","short_names":["taxi"],"text":null,"texts":null,"category":"Places","sort_order":2,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"iphone":{"name":"Mobile Phone","unified":"1F4F1","variations":[],"docomo":"E688","au":"E588","softbank":"E00A","google":"FE525","image":"1f4f1.png","sheet_x":22,"sheet_y":11,"short_name":"iphone","short_names":["iphone"],"text":null,"texts":null,"category":"Objects","sort_order":2,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"basketball":{"name":"Basketball and Hoop","unified":"1F3C0","variations":[],"docomo":"E658","au":"E59A","softbank":"E42A","google":"FE7D6","image":"1f3c0.png","sheet_x":10,"sheet_y":6,"short_name":"basketball","short_names":["basketball"],"text":null,"texts":null,"category":"Activity","sort_order":2,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cat":{"name":"Cat Face","unified":"1F431","variations":[],"docomo":"E6A2","au":"E4DB","softbank":"E04F","google":"FE1B8","image":"1f431.png","sheet_x":13,"sheet_y":13,"short_name":"cat","short_names":["cat"],"text":null,"texts":null,"category":"Nature","sort_order":2,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"apple":{"name":"Red Apple","unified":"1F34E","variations":[],"docomo":"E745","au":"EAB9","softbank":"E345","google":"FE051","image":"1f34e.png","sheet_x":7,"sheet_y":15,"short_name":"apple","short_names":["apple"],"text":null,"texts":null,"category":"Foods","sort_order":2,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"yellow_heart":{"name":"Yellow Heart","unified":"1F49B","variations":[],"docomo":"E6EC","au":"EAA9","softbank":"E32C","google":"FEB15","image":"1f49b.png","sheet_x":20,"sheet_y":2,"short_name":"yellow_heart","short_names":["yellow_heart"],"text":"<3","texts":null,"category":"Symbols","sort_order":2,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mouse":{"name":"Mouse Face","unified":"1F42D","variations":[],"docomo":null,"au":"E5C2","softbank":"E053","google":"FE1C2","image":"1f42d.png","sheet_x":13,"sheet_y":9,"short_name":"mouse","short_names":["mouse"],"text":null,"texts":null,"category":"Nature","sort_order":3,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pear":{"name":"Pear","unified":"1F350","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f350.png","sheet_x":7,"sheet_y":17,"short_name":"pear","short_names":["pear"],"text":null,"texts":null,"category":"Foods","sort_order":3,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"green_heart":{"name":"Green Heart","unified":"1F49A","variations":[],"docomo":"E6EC","au":"EAA8","softbank":"E32B","google":"FEB14","image":"1f49a.png","sheet_x":20,"sheet_y":1,"short_name":"green_heart","short_names":["green_heart"],"text":"<3","texts":null,"category":"Symbols","sort_order":3,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"football":{"name":"American Football","unified":"1F3C8","variations":[],"docomo":null,"au":"E4BB","softbank":"E42B","google":"FE7DD","image":"1f3c8.png","sheet_x":10,"sheet_y":24,"short_name":"football","short_names":["football"],"text":null,"texts":null,"category":"Activity","sort_order":3,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"grin":{"name":"Grinning Face with Smiling Eyes","unified":"1F601","variations":[],"docomo":"E753","au":"EB80","softbank":"E404","google":"FE333","image":"1f601.png","sheet_x":26,"sheet_y":16,"short_name":"grin","short_names":["grin"],"text":null,"texts":null,"category":"People","sort_order":3,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-al":{"name":"Regional Indicator Symbol Letters Al","unified":"1F1E6-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1f1.png","sheet_x":32,"sheet_y":39,"short_name":"flag-al","short_names":["flag-al"],"text":null,"texts":null,"category":"Flags","sort_order":3,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"calling":{"name":"Mobile Phone with Rightwards Arrow at Left","unified":"1F4F2","variations":[],"docomo":"E6CE","au":"EB08","softbank":"E104","google":"FE526","image":"1f4f2.png","sheet_x":22,"sheet_y":12,"short_name":"calling","short_names":["calling"],"text":null,"texts":null,"category":"Objects","sort_order":3,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"blue_car":{"name":"Recreational Vehicle","unified":"1F699","variations":[],"docomo":"E65F","au":"E4B1","softbank":"E42E","google":"FE7E5","image":"1f699.png","sheet_x":29,"sheet_y":37,"short_name":"blue_car","short_names":["blue_car"],"text":null,"texts":null,"category":"Places","sort_order":3,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hamster":{"name":"Hamster Face","unified":"1F439","variations":[],"docomo":null,"au":null,"softbank":"E524","google":"FE1CA","image":"1f439.png","sheet_x":13,"sheet_y":21,"short_name":"hamster","short_names":["hamster"],"text":null,"texts":null,"category":"Nature","sort_order":4,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"blue_heart":{"name":"Blue Heart","unified":"1F499","variations":[],"docomo":"E6EC","au":"EAA7","softbank":"E32A","google":"FEB13","image":"1f499.png","sheet_x":20,"sheet_y":0,"short_name":"blue_heart","short_names":["blue_heart"],"text":"<3","texts":null,"category":"Symbols","sort_order":4,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bus":{"name":"Bus","unified":"1F68C","variations":[],"docomo":"E660","au":"E4AF","softbank":"E159","google":"FE7E6","image":"1f68c.png","sheet_x":29,"sheet_y":24,"short_name":"bus","short_names":["bus"],"text":null,"texts":null,"category":"Places","sort_order":4,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"joy":{"name":"Face with Tears of Joy","unified":"1F602","variations":[],"docomo":"E72A","au":"EB64","softbank":"E412","google":"FE334","image":"1f602.png","sheet_x":26,"sheet_y":17,"short_name":"joy","short_names":["joy"],"text":null,"texts":null,"category":"People","sort_order":4,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"computer":{"name":"Personal Computer","unified":"1F4BB","variations":[],"docomo":"E716","au":"E5B8","softbank":"E00C","google":"FE538","image":"1f4bb.png","sheet_x":20,"sheet_y":39,"short_name":"computer","short_names":["computer"],"text":null,"texts":null,"category":"Objects","sort_order":4,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tangerine":{"name":"Tangerine","unified":"1F34A","variations":[],"docomo":null,"au":"EABA","softbank":"E346","google":"FE052","image":"1f34a.png","sheet_x":7,"sheet_y":11,"short_name":"tangerine","short_names":["tangerine"],"text":null,"texts":null,"category":"Foods","sort_order":4,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"baseball":{"name":"Baseball","unified":"26BE","variations":["26BE-FE0F"],"docomo":"E653","au":"E4BA","softbank":"E016","google":"FE7D1","image":"26be.png","sheet_x":2,"sheet_y":19,"short_name":"baseball","short_names":["baseball"],"text":null,"texts":null,"category":"Activity","sort_order":4,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-dz":{"name":"Regional Indicator Symbol Letters Dz","unified":"1F1E9-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e9-1f1ff.png","sheet_x":34,"sheet_y":15,"short_name":"flag-dz","short_names":["flag-dz"],"text":null,"texts":null,"category":"Flags","sort_order":4,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tennis":{"name":"Tennis Racquet and Ball","unified":"1F3BE","variations":[],"docomo":"E655","au":"E4B7","softbank":"E015","google":"FE7D3","image":"1f3be.png","sheet_x":10,"sheet_y":4,"short_name":"tennis","short_names":["tennis"],"text":null,"texts":null,"category":"Activity","sort_order":5,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"trolleybus":{"name":"Trolleybus","unified":"1F68E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f68e.png","sheet_x":29,"sheet_y":26,"short_name":"trolleybus","short_names":["trolleybus"],"text":null,"texts":null,"category":"Places","sort_order":5,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"keyboard":{"name":"Keyboard","unified":"2328","variations":["2328-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2328.png","sheet_x":0,"sheet_y":16,"short_name":"keyboard","short_names":["keyboard"],"text":null,"texts":null,"category":"Objects","sort_order":5,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rabbit":{"name":"Rabbit Face","unified":"1F430","variations":[],"docomo":null,"au":"E4D7","softbank":"E52C","google":"FE1D2","image":"1f430.png","sheet_x":13,"sheet_y":12,"short_name":"rabbit","short_names":["rabbit"],"text":null,"texts":null,"category":"Nature","sort_order":5,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-as":{"name":"Regional Indicator Symbol Letters As","unified":"1F1E6-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1f8.png","sheet_x":33,"sheet_y":3,"short_name":"flag-as","short_names":["flag-as"],"text":null,"texts":null,"category":"Flags","sort_order":5,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lemon":{"name":"Lemon","unified":"1F34B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f34b.png","sheet_x":7,"sheet_y":12,"short_name":"lemon","short_names":["lemon"],"text":null,"texts":null,"category":"Foods","sort_order":5,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"purple_heart":{"name":"Purple Heart","unified":"1F49C","variations":[],"docomo":"E6EC","au":"EAAA","softbank":"E32D","google":"FEB16","image":"1f49c.png","sheet_x":20,"sheet_y":3,"short_name":"purple_heart","short_names":["purple_heart"],"text":"<3","texts":null,"category":"Symbols","sort_order":5,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"smiley":{"name":"Smiling Face with Open Mouth","unified":"1F603","variations":[],"docomo":"E6F0","au":"E471","softbank":"E057","google":"FE330","image":"1f603.png","sheet_x":26,"sheet_y":18,"short_name":"smiley","short_names":["smiley"],"text":":)","texts":["=)","=-)"],"category":"People","sort_order":5,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"desktop_computer":{"name":"Desktop Computer","unified":"1F5A5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5a5.png","sheet_x":25,"sheet_y":31,"short_name":"desktop_computer","short_names":["desktop_computer"],"text":null,"texts":null,"category":"Objects","sort_order":6,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"racing_car":{"name":"Racing Car","unified":"1F3CE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3ce.png","sheet_x":10,"sheet_y":40,"short_name":"racing_car","short_names":["racing_car"],"text":null,"texts":null,"category":"Places","sort_order":6,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"volleyball":{"name":"Volleyball","unified":"1F3D0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d0.png","sheet_x":11,"sheet_y":1,"short_name":"volleyball","short_names":["volleyball"],"text":null,"texts":null,"category":"Activity","sort_order":6,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"banana":{"name":"Banana","unified":"1F34C","variations":[],"docomo":"E744","au":"EB35","softbank":null,"google":"FE050","image":"1f34c.png","sheet_x":7,"sheet_y":13,"short_name":"banana","short_names":["banana"],"text":null,"texts":null,"category":"Foods","sort_order":6,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bear":{"name":"Bear Face","unified":"1F43B","variations":[],"docomo":null,"au":"E5C1","softbank":"E051","google":"FE1C1","image":"1f43b.png","sheet_x":13,"sheet_y":23,"short_name":"bear","short_names":["bear"],"text":null,"texts":null,"category":"Nature","sort_order":6,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"smile":{"name":"Smiling Face with Open Mouth and Smiling Eyes","unified":"1F604","variations":[],"docomo":"E6F0","au":"E471","softbank":"E415","google":"FE338","image":"1f604.png","sheet_x":26,"sheet_y":19,"short_name":"smile","short_names":["smile"],"text":":)","texts":["C:","c:",":D",":-D"],"category":"People","sort_order":6,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ad":{"name":"Regional Indicator Symbol Letters Ad","unified":"1F1E6-1F1E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1e9.png","sheet_x":32,"sheet_y":34,"short_name":"flag-ad","short_names":["flag-ad"],"text":null,"texts":null,"category":"Flags","sort_order":6,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"broken_heart":{"name":"Broken Heart","unified":"1F494","variations":[],"docomo":"E6EE","au":"E477","softbank":"E023","google":"FEB0E","image":"1f494.png","sheet_x":19,"sheet_y":36,"short_name":"broken_heart","short_names":["broken_heart"],"text":"</3","texts":["</3"],"category":"Symbols","sort_order":6,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sweat_smile":{"name":"Smiling Face with Open Mouth and Cold Sweat","unified":"1F605","variations":[],"docomo":"E722","au":"E471-E5B1","softbank":"E415-E331","google":"FE331","image":"1f605.png","sheet_x":26,"sheet_y":20,"short_name":"sweat_smile","short_names":["sweat_smile"],"text":null,"texts":null,"category":"People","sort_order":7,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"printer":{"name":"Printer","unified":"1F5A8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5a8.png","sheet_x":25,"sheet_y":32,"short_name":"printer","short_names":["printer"],"text":null,"texts":null,"category":"Objects","sort_order":7,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rugby_football":{"name":"Rugby Football","unified":"1F3C9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3c9.png","sheet_x":10,"sheet_y":25,"short_name":"rugby_football","short_names":["rugby_football"],"text":null,"texts":null,"category":"Activity","sort_order":7,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heavy_heart_exclamation_mark_ornament":{"name":"Heavy Heart Exclamation Mark Ornament","unified":"2763","variations":["2763-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2763.png","sheet_x":4,"sheet_y":9,"short_name":"heavy_heart_exclamation_mark_ornament","short_names":["heavy_heart_exclamation_mark_ornament"],"text":null,"texts":null,"category":"Symbols","sort_order":7,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ao":{"name":"Regional Indicator Symbol Letters Ao","unified":"1F1E6-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1f4.png","sheet_x":33,"sheet_y":0,"short_name":"flag-ao","short_names":["flag-ao"],"text":null,"texts":null,"category":"Flags","sort_order":7,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"watermelon":{"name":"Watermelon","unified":"1F349","variations":[],"docomo":null,"au":"E4CD","softbank":"E348","google":"FE054","image":"1f349.png","sheet_x":7,"sheet_y":10,"short_name":"watermelon","short_names":["watermelon"],"text":null,"texts":null,"category":"Foods","sort_order":7,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"panda_face":{"name":"Panda Face","unified":"1F43C","variations":[],"docomo":null,"au":"EB46","softbank":null,"google":"FE1DF","image":"1f43c.png","sheet_x":13,"sheet_y":24,"short_name":"panda_face","short_names":["panda_face"],"text":null,"texts":null,"category":"Nature","sort_order":7,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"police_car":{"name":"Police Car","unified":"1F693","variations":[],"docomo":null,"au":"EAE1","softbank":"E432","google":"FE7F4","image":"1f693.png","sheet_x":29,"sheet_y":31,"short_name":"police_car","short_names":["police_car"],"text":null,"texts":null,"category":"Places","sort_order":7,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ambulance":{"name":"Ambulance","unified":"1F691","variations":[],"docomo":null,"au":"EAE0","softbank":"E431","google":"FE7F3","image":"1f691.png","sheet_x":29,"sheet_y":29,"short_name":"ambulance","short_names":["ambulance"],"text":null,"texts":null,"category":"Places","sort_order":8,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"grapes":{"name":"Grapes","unified":"1F347","variations":[],"docomo":null,"au":"EB34","softbank":null,"google":"FE059","image":"1f347.png","sheet_x":7,"sheet_y":8,"short_name":"grapes","short_names":["grapes"],"text":null,"texts":null,"category":"Foods","sort_order":8,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"two_hearts":{"name":"Two Hearts","unified":"1F495","variations":[],"docomo":"E6EF","au":"E478","softbank":"E327","google":"FEB0F","image":"1f495.png","sheet_x":19,"sheet_y":37,"short_name":"two_hearts","short_names":["two_hearts"],"text":null,"texts":null,"category":"Symbols","sort_order":8,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ai":{"name":"Regional Indicator Symbol Letters Ai","unified":"1F1E6-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1ee.png","sheet_x":32,"sheet_y":38,"short_name":"flag-ai","short_names":["flag-ai"],"text":null,"texts":null,"category":"Flags","sort_order":8,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"three_button_mouse":{"name":"Three Button Mouse","unified":"1F5B1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5b1.png","sheet_x":25,"sheet_y":33,"short_name":"three_button_mouse","short_names":["three_button_mouse"],"text":null,"texts":null,"category":"Objects","sort_order":8,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"8ball":{"name":"Billiards","unified":"1F3B1","variations":[],"docomo":null,"au":"EADD","softbank":"E42C","google":"FE80E","image":"1f3b1.png","sheet_x":9,"sheet_y":32,"short_name":"8ball","short_names":["8ball"],"text":null,"texts":null,"category":"Activity","sort_order":8,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"laughing":{"name":"Smiling Face with Open Mouth and Tightly-Closed Eyes","unified":"1F606","variations":[],"docomo":"E72A","au":"EAC5","softbank":"E40A","google":"FE332","image":"1f606.png","sheet_x":26,"sheet_y":21,"short_name":"laughing","short_names":["laughing","satisfied"],"text":null,"texts":[":>",":->"],"category":"People","sort_order":8,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"koala":{"name":"Koala","unified":"1F428","variations":[],"docomo":null,"au":"EB20","softbank":"E527","google":"FE1CD","image":"1f428.png","sheet_x":13,"sheet_y":4,"short_name":"koala","short_names":["koala"],"text":null,"texts":null,"category":"Nature","sort_order":8,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-aq":{"name":"Regional Indicator Symbol Letters Aq","unified":"1F1E6-1F1F6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1f6.png","sheet_x":33,"sheet_y":1,"short_name":"flag-aq","short_names":["flag-aq"],"text":null,"texts":null,"category":"Flags","sort_order":9,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"fire_engine":{"name":"Fire Engine","unified":"1F692","variations":[],"docomo":null,"au":"EADF","softbank":"E430","google":"FE7F2","image":"1f692.png","sheet_x":29,"sheet_y":30,"short_name":"fire_engine","short_names":["fire_engine"],"text":null,"texts":null,"category":"Places","sort_order":9,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"revolving_hearts":{"name":"Revolving Hearts","unified":"1F49E","variations":[],"docomo":"E6ED","au":"E5AF","softbank":"E327","google":"FEB18","image":"1f49e.png","sheet_x":20,"sheet_y":5,"short_name":"revolving_hearts","short_names":["revolving_hearts"],"text":null,"texts":null,"category":"Symbols","sort_order":9,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"golf":{"name":"Flag in Hole","unified":"26F3","variations":["26F3-FE0F"],"docomo":"E654","au":"E599","softbank":"E014","google":"FE7D2","image":"26f3.png","sheet_x":2,"sheet_y":33,"short_name":"golf","short_names":["golf"],"text":null,"texts":null,"category":"Activity","sort_order":9,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"innocent":{"name":"Smiling Face with Halo","unified":"1F607","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f607.png","sheet_x":26,"sheet_y":22,"short_name":"innocent","short_names":["innocent"],"text":null,"texts":null,"category":"People","sort_order":9,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"strawberry":{"name":"Strawberry","unified":"1F353","variations":[],"docomo":null,"au":"E4D4","softbank":"E347","google":"FE053","image":"1f353.png","sheet_x":7,"sheet_y":20,"short_name":"strawberry","short_names":["strawberry"],"text":null,"texts":null,"category":"Foods","sort_order":9,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"trackball":{"name":"Trackball","unified":"1F5B2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5b2.png","sheet_x":25,"sheet_y":34,"short_name":"trackball","short_names":["trackball"],"text":null,"texts":null,"category":"Objects","sort_order":9,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tiger":{"name":"Tiger Face","unified":"1F42F","variations":[],"docomo":null,"au":"E5C0","softbank":"E050","google":"FE1C0","image":"1f42f.png","sheet_x":13,"sheet_y":11,"short_name":"tiger","short_names":["tiger"],"text":null,"texts":null,"category":"Nature","sort_order":9,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lion_face":{"name":"Lion Face","unified":"1F981","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f981.png","sheet_x":32,"sheet_y":16,"short_name":"lion_face","short_names":["lion_face"],"text":null,"texts":null,"category":"Nature","sort_order":10,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ag":{"name":"Regional Indicator Symbol Letters Ag","unified":"1F1E6-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1ec.png","sheet_x":32,"sheet_y":37,"short_name":"flag-ag","short_names":["flag-ag"],"text":null,"texts":null,"category":"Flags","sort_order":10,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"minibus":{"name":"Minibus","unified":"1F690","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f690.png","sheet_x":29,"sheet_y":28,"short_name":"minibus","short_names":["minibus"],"text":null,"texts":null,"category":"Places","sort_order":10,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"melon":{"name":"Melon","unified":"1F348","variations":[],"docomo":null,"au":"EB32","softbank":null,"google":"FE057","image":"1f348.png","sheet_x":7,"sheet_y":9,"short_name":"melon","short_names":["melon"],"text":null,"texts":null,"category":"Foods","sort_order":10,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wink":{"name":"Winking Face","unified":"1F609","variations":[],"docomo":"E729","au":"E5C3","softbank":"E405","google":"FE347","image":"1f609.png","sheet_x":26,"sheet_y":24,"short_name":"wink","short_names":["wink"],"text":";)","texts":[";)",";-)"],"category":"People","sort_order":10,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"golfer":{"name":"Golfer","unified":"1F3CC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3cc.png","sheet_x":10,"sheet_y":38,"short_name":"golfer","short_names":["golfer"],"text":null,"texts":null,"category":"Activity","sort_order":10,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heartbeat":{"name":"Beating Heart","unified":"1F493","variations":[],"docomo":"E6ED","au":"EB75","softbank":"E327","google":"FEB0D","image":"1f493.png","sheet_x":19,"sheet_y":35,"short_name":"heartbeat","short_names":["heartbeat"],"text":null,"texts":null,"category":"Symbols","sort_order":10,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"joystick":{"name":"Joystick","unified":"1F579","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f579.png","sheet_x":25,"sheet_y":7,"short_name":"joystick","short_names":["joystick"],"text":null,"texts":null,"category":"Objects","sort_order":10,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heartpulse":{"name":"Growing Heart","unified":"1F497","variations":[],"docomo":"E6ED","au":"EB75","softbank":"E328","google":"FEB11","image":"1f497.png","sheet_x":19,"sheet_y":39,"short_name":"heartpulse","short_names":["heartpulse"],"text":null,"texts":null,"category":"Symbols","sort_order":11,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ar":{"name":"Regional Indicator Symbol Letters Ar","unified":"1F1E6-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1f7.png","sheet_x":33,"sheet_y":2,"short_name":"flag-ar","short_names":["flag-ar"],"text":null,"texts":null,"category":"Flags","sort_order":11,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"table_tennis_paddle_and_ball":{"name":"Table Tennis Paddle and Ball","unified":"1F3D3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d3.png","sheet_x":11,"sheet_y":4,"short_name":"table_tennis_paddle_and_ball","short_names":["table_tennis_paddle_and_ball"],"text":null,"texts":null,"category":"Activity","sort_order":11,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cow":{"name":"Cow Face","unified":"1F42E","variations":[],"docomo":null,"au":"EB21","softbank":"E52B","google":"FE1D1","image":"1f42e.png","sheet_x":13,"sheet_y":10,"short_name":"cow","short_names":["cow"],"text":null,"texts":null,"category":"Nature","sort_order":11,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cherries":{"name":"Cherries","unified":"1F352","variations":[],"docomo":"E742","au":"E4D2","softbank":null,"google":"FE04F","image":"1f352.png","sheet_x":7,"sheet_y":19,"short_name":"cherries","short_names":["cherries"],"text":null,"texts":null,"category":"Foods","sort_order":11,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"compression":{"name":"Compression","unified":"1F5DC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5dc.png","sheet_x":26,"sheet_y":1,"short_name":"compression","short_names":["compression"],"text":null,"texts":null,"category":"Objects","sort_order":11,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"truck":{"name":"Delivery Truck","unified":"1F69A","variations":[],"docomo":null,"au":"E4B2","softbank":"E42F","google":"FE7F1","image":"1f69a.png","sheet_x":29,"sheet_y":38,"short_name":"truck","short_names":["truck"],"text":null,"texts":null,"category":"Places","sort_order":11,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"blush":{"name":"Smiling Face with Smiling Eyes","unified":"1F60A","variations":[],"docomo":"E6F0","au":"EACD","softbank":"E056","google":"FE335","image":"1f60a.png","sheet_x":26,"sheet_y":25,"short_name":"blush","short_names":["blush"],"text":":)","texts":null,"category":"People","sort_order":11,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"slightly_smiling_face":{"name":"Slightly Smiling Face","unified":"1F642","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f642.png","sheet_x":27,"sheet_y":40,"short_name":"slightly_smiling_face","short_names":["slightly_smiling_face"],"text":null,"texts":[":)","(:",":-)"],"category":"People","sort_order":12,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pig":{"name":"Pig Face","unified":"1F437","variations":[],"docomo":"E755","au":"E4DE","softbank":"E10B","google":"FE1BF","image":"1f437.png","sheet_x":13,"sheet_y":19,"short_name":"pig","short_names":["pig"],"text":null,"texts":null,"category":"Nature","sort_order":12,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sparkling_heart":{"name":"Sparkling Heart","unified":"1F496","variations":[],"docomo":"E6EC","au":"EAA6","softbank":"E327","google":"FEB10","image":"1f496.png","sheet_x":19,"sheet_y":38,"short_name":"sparkling_heart","short_names":["sparkling_heart"],"text":null,"texts":null,"category":"Symbols","sort_order":12,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"badminton_racquet_and_shuttlecock":{"name":"Badminton Racquet and Shuttlecock","unified":"1F3F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3f8.png","sheet_x":11,"sheet_y":38,"short_name":"badminton_racquet_and_shuttlecock","short_names":["badminton_racquet_and_shuttlecock"],"text":null,"texts":null,"category":"Activity","sort_order":12,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"peach":{"name":"Peach","unified":"1F351","variations":[],"docomo":null,"au":"EB39","softbank":null,"google":"FE05A","image":"1f351.png","sheet_x":7,"sheet_y":18,"short_name":"peach","short_names":["peach"],"text":null,"texts":null,"category":"Foods","sort_order":12,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"minidisc":{"name":"Minidisc","unified":"1F4BD","variations":[],"docomo":null,"au":"E582","softbank":"E316","google":"FE53C","image":"1f4bd.png","sheet_x":21,"sheet_y":0,"short_name":"minidisc","short_names":["minidisc"],"text":null,"texts":null,"category":"Objects","sort_order":12,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"articulated_lorry":{"name":"Articulated Lorry","unified":"1F69B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f69b.png","sheet_x":29,"sheet_y":39,"short_name":"articulated_lorry","short_names":["articulated_lorry"],"text":null,"texts":null,"category":"Places","sort_order":12,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-am":{"name":"Regional Indicator Symbol Letters Am","unified":"1F1E6-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1f2.png","sheet_x":32,"sheet_y":40,"short_name":"flag-am","short_names":["flag-am"],"text":null,"texts":null,"category":"Flags","sort_order":12,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ice_hockey_stick_and_puck":{"name":"Ice Hockey Stick and Puck","unified":"1F3D2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d2.png","sheet_x":11,"sheet_y":3,"short_name":"ice_hockey_stick_and_puck","short_names":["ice_hockey_stick_and_puck"],"text":null,"texts":null,"category":"Activity","sort_order":13,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pineapple":{"name":"Pineapple","unified":"1F34D","variations":[],"docomo":null,"au":"EB33","softbank":null,"google":"FE058","image":"1f34d.png","sheet_x":7,"sheet_y":14,"short_name":"pineapple","short_names":["pineapple"],"text":null,"texts":null,"category":"Foods","sort_order":13,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-aw":{"name":"Regional Indicator Symbol Letters Aw","unified":"1F1E6-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1fc.png","sheet_x":33,"sheet_y":6,"short_name":"flag-aw","short_names":["flag-aw"],"text":null,"texts":null,"category":"Flags","sort_order":13,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pig_nose":{"name":"Pig Nose","unified":"1F43D","variations":[],"docomo":"E755","au":"EB48","softbank":"E10B","google":"FE1E0","image":"1f43d.png","sheet_x":13,"sheet_y":25,"short_name":"pig_nose","short_names":["pig_nose"],"text":null,"texts":null,"category":"Nature","sort_order":13,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"floppy_disk":{"name":"Floppy Disk","unified":"1F4BE","variations":[],"docomo":null,"au":"E562","softbank":"E316","google":"FE53D","image":"1f4be.png","sheet_x":21,"sheet_y":1,"short_name":"floppy_disk","short_names":["floppy_disk"],"text":null,"texts":null,"category":"Objects","sort_order":13,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tractor":{"name":"Tractor","unified":"1F69C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f69c.png","sheet_x":29,"sheet_y":40,"short_name":"tractor","short_names":["tractor"],"text":null,"texts":null,"category":"Places","sort_order":13,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"upside_down_face":{"name":"Upside-Down Face","unified":"1F643","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f643.png","sheet_x":28,"sheet_y":0,"short_name":"upside_down_face","short_names":["upside_down_face"],"text":null,"texts":null,"category":"People","sort_order":13,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cupid":{"name":"Heart with Arrow","unified":"1F498","variations":[],"docomo":"E6EC","au":"E4EA","softbank":"E329","google":"FEB12","image":"1f498.png","sheet_x":19,"sheet_y":40,"short_name":"cupid","short_names":["cupid"],"text":null,"texts":null,"category":"Symbols","sort_order":13,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cd":{"name":"Optical Disc","unified":"1F4BF","variations":[],"docomo":"E68C","au":"E50C","softbank":"E126","google":"FE81D","image":"1f4bf.png","sheet_x":21,"sheet_y":2,"short_name":"cd","short_names":["cd"],"text":null,"texts":null,"category":"Objects","sort_order":14,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"gift_heart":{"name":"Heart with Ribbon","unified":"1F49D","variations":[],"docomo":"E6EC","au":"EB54","softbank":"E437","google":"FEB17","image":"1f49d.png","sheet_x":20,"sheet_y":4,"short_name":"gift_heart","short_names":["gift_heart"],"text":null,"texts":null,"category":"Symbols","sort_order":14,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-au":{"name":"Regional Indicator Symbol Letters Au","unified":"1F1E6-1F1FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1fa.png","sheet_x":33,"sheet_y":5,"short_name":"flag-au","short_names":["flag-au"],"text":null,"texts":null,"category":"Flags","sort_order":14,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"field_hockey_stick_and_ball":{"name":"Field Hockey Stick and Ball","unified":"1F3D1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d1.png","sheet_x":11,"sheet_y":2,"short_name":"field_hockey_stick_and_ball","short_names":["field_hockey_stick_and_ball"],"text":null,"texts":null,"category":"Activity","sort_order":14,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tomato":{"name":"Tomato","unified":"1F345","variations":[],"docomo":null,"au":"EABB","softbank":"E349","google":"FE055","image":"1f345.png","sheet_x":7,"sheet_y":6,"short_name":"tomato","short_names":["tomato"],"text":null,"texts":null,"category":"Foods","sort_order":14,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"racing_motorcycle":{"name":"Racing Motorcycle","unified":"1F3CD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3cd.png","sheet_x":10,"sheet_y":39,"short_name":"racing_motorcycle","short_names":["racing_motorcycle"],"text":null,"texts":null,"category":"Places","sort_order":14,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"relaxed":{"name":"White Smiling Face","unified":"263A","variations":["263A-FE0F"],"docomo":"E6F0","au":"E4FB","softbank":"E414","google":"FE336","image":"263a.png","sheet_x":1,"sheet_y":25,"short_name":"relaxed","short_names":["relaxed"],"text":null,"texts":null,"category":"People","sort_order":14,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"frog":{"name":"Frog Face","unified":"1F438","variations":[],"docomo":null,"au":"E4DA","softbank":"E531","google":"FE1D7","image":"1f438.png","sheet_x":13,"sheet_y":20,"short_name":"frog","short_names":["frog"],"text":null,"texts":null,"category":"Nature","sort_order":14,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cricket_bat_and_ball":{"name":"Cricket Bat and Ball","unified":"1F3CF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3cf.png","sheet_x":11,"sheet_y":0,"short_name":"cricket_bat_and_ball","short_names":["cricket_bat_and_ball"],"text":null,"texts":null,"category":"Activity","sort_order":15,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dvd":{"name":"Dvd","unified":"1F4C0","variations":[],"docomo":"E68C","au":"E50C","softbank":"E127","google":"FE81E","image":"1f4c0.png","sheet_x":21,"sheet_y":3,"short_name":"dvd","short_names":["dvd"],"text":null,"texts":null,"category":"Objects","sort_order":15,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"octopus":{"name":"Octopus","unified":"1F419","variations":[],"docomo":null,"au":"E5C7","softbank":"E10A","google":"FE1C5","image":"1f419.png","sheet_x":12,"sheet_y":30,"short_name":"octopus","short_names":["octopus"],"text":null,"texts":null,"category":"Nature","sort_order":15,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bike":{"name":"Bicycle","unified":"1F6B2","variations":[],"docomo":"E71D","au":"E4AE","softbank":"E136","google":"FE7EB","image":"1f6b2.png","sheet_x":30,"sheet_y":26,"short_name":"bike","short_names":["bike"],"text":null,"texts":null,"category":"Places","sort_order":15,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heart_decoration":{"name":"Heart Decoration","unified":"1F49F","variations":[],"docomo":"E6F8","au":"E595","softbank":"E204","google":"FEB19","image":"1f49f.png","sheet_x":20,"sheet_y":6,"short_name":"heart_decoration","short_names":["heart_decoration"],"text":null,"texts":null,"category":"Symbols","sort_order":15,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"yum":{"name":"Face Savouring Delicious Food","unified":"1F60B","variations":[],"docomo":"E752","au":"EACD","softbank":"E056","google":"FE32B","image":"1f60b.png","sheet_x":26,"sheet_y":26,"short_name":"yum","short_names":["yum"],"text":null,"texts":null,"category":"People","sort_order":15,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"eggplant":{"name":"Aubergine","unified":"1F346","variations":[],"docomo":null,"au":"EABC","softbank":"E34A","google":"FE056","image":"1f346.png","sheet_x":7,"sheet_y":7,"short_name":"eggplant","short_names":["eggplant"],"text":null,"texts":null,"category":"Foods","sort_order":15,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-at":{"name":"Regional Indicator Symbol Letters at","unified":"1F1E6-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1f9.png","sheet_x":33,"sheet_y":4,"short_name":"flag-at","short_names":["flag-at"],"text":null,"texts":null,"category":"Flags","sort_order":15,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rotating_light":{"name":"Police Cars Revolving Light","unified":"1F6A8","variations":[],"docomo":null,"au":"EB73","softbank":"E432","google":"FE7F9","image":"1f6a8.png","sheet_x":30,"sheet_y":16,"short_name":"rotating_light","short_names":["rotating_light"],"text":null,"texts":null,"category":"Places","sort_order":16,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"monkey_face":{"name":"Monkey Face","unified":"1F435","variations":[],"docomo":null,"au":"E4D9","softbank":"E109","google":"FE1C4","image":"1f435.png","sheet_x":13,"sheet_y":17,"short_name":"monkey_face","short_names":["monkey_face"],"text":null,"texts":[":o)"],"category":"Nature","sort_order":16,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ski":{"name":"Ski and Ski Boot","unified":"1F3BF","variations":[],"docomo":"E657","au":"EAAC","softbank":"E013","google":"FE7D5","image":"1f3bf.png","sheet_x":10,"sheet_y":5,"short_name":"ski","short_names":["ski"],"text":null,"texts":null,"category":"Activity","sort_order":16,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hot_pepper":{"name":"Hot Pepper","unified":"1F336","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f336.png","sheet_x":6,"sheet_y":32,"short_name":"hot_pepper","short_names":["hot_pepper"],"text":null,"texts":null,"category":"Foods","sort_order":16,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"peace_symbol":{"name":"Peace Symbol","unified":"262E","variations":["262E-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"262e.png","sheet_x":1,"sheet_y":21,"short_name":"peace_symbol","short_names":["peace_symbol"],"text":null,"texts":null,"category":"Symbols","sort_order":16,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-az":{"name":"Regional Indicator Symbol Letters Az","unified":"1F1E6-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1ff.png","sheet_x":33,"sheet_y":8,"short_name":"flag-az","short_names":["flag-az"],"text":null,"texts":null,"category":"Flags","sort_order":16,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"relieved":{"name":"Relieved Face","unified":"1F60C","variations":[],"docomo":"E721","au":"EAC5","softbank":"E40A","google":"FE33E","image":"1f60c.png","sheet_x":26,"sheet_y":27,"short_name":"relieved","short_names":["relieved"],"text":null,"texts":null,"category":"People","sort_order":16,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"vhs":{"name":"Videocassette","unified":"1F4FC","variations":[],"docomo":null,"au":"E580","softbank":"E129","google":"FE820","image":"1f4fc.png","sheet_x":22,"sheet_y":22,"short_name":"vhs","short_names":["vhs"],"text":null,"texts":null,"category":"Objects","sort_order":16,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"oncoming_police_car":{"name":"Oncoming Police Car","unified":"1F694","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f694.png","sheet_x":29,"sheet_y":32,"short_name":"oncoming_police_car","short_names":["oncoming_police_car"],"text":null,"texts":null,"category":"Places","sort_order":17,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"corn":{"name":"Ear of Maize","unified":"1F33D","variations":[],"docomo":null,"au":"EB36","softbank":null,"google":"FE04A","image":"1f33d.png","sheet_x":6,"sheet_y":39,"short_name":"corn","short_names":["corn"],"text":null,"texts":null,"category":"Foods","sort_order":17,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"latin_cross":{"name":"Latin Cross","unified":"271D","variations":["271D-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"271d.png","sheet_x":3,"sheet_y":37,"short_name":"latin_cross","short_names":["latin_cross"],"text":null,"texts":null,"category":"Symbols","sort_order":17,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"camera":{"name":"Camera","unified":"1F4F7","variations":[],"docomo":"E681","au":"E515","softbank":"E008","google":"FE4EF","image":"1f4f7.png","sheet_x":22,"sheet_y":17,"short_name":"camera","short_names":["camera"],"text":null,"texts":null,"category":"Objects","sort_order":17,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"see_no_evil":{"name":"See-No-Evil Monkey","unified":"1F648","variations":[],"docomo":null,"au":"EB50","softbank":null,"google":"FE354","image":"1f648.png","sheet_x":28,"sheet_y":20,"short_name":"see_no_evil","short_names":["see_no_evil"],"text":null,"texts":null,"category":"Nature","sort_order":17,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heart_eyes":{"name":"Smiling Face with Heart-Shaped Eyes","unified":"1F60D","variations":[],"docomo":"E726","au":"E5C4","softbank":"E106","google":"FE327","image":"1f60d.png","sheet_x":26,"sheet_y":28,"short_name":"heart_eyes","short_names":["heart_eyes"],"text":null,"texts":null,"category":"People","sort_order":17,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bs":{"name":"Regional Indicator Symbol Letters Bs","unified":"1F1E7-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1f8.png","sheet_x":33,"sheet_y":24,"short_name":"flag-bs","short_names":["flag-bs"],"text":null,"texts":null,"category":"Flags","sort_order":17,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"skier":{"name":"Skier","unified":"26F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26f7.png","sheet_x":2,"sheet_y":36,"short_name":"skier","short_names":["skier"],"text":null,"texts":null,"category":"Activity","sort_order":17,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"oncoming_bus":{"name":"Oncoming Bus","unified":"1F68D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f68d.png","sheet_x":29,"sheet_y":25,"short_name":"oncoming_bus","short_names":["oncoming_bus"],"text":null,"texts":null,"category":"Places","sort_order":18,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"snowboarder":{"name":"Snowboarder","unified":"1F3C2","variations":[],"docomo":"E712","au":"E4B8","softbank":null,"google":"FE7D8","image":"1f3c2.png","sheet_x":10,"sheet_y":8,"short_name":"snowboarder","short_names":["snowboarder"],"text":null,"texts":null,"category":"Activity","sort_order":18,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sweet_potato":{"name":"Roasted Sweet Potato","unified":"1F360","variations":[],"docomo":null,"au":"EB3A","softbank":null,"google":"FE974","image":"1f360.png","sheet_x":7,"sheet_y":33,"short_name":"sweet_potato","short_names":["sweet_potato"],"text":null,"texts":null,"category":"Foods","sort_order":18,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hear_no_evil":{"name":"Hear-No-Evil Monkey","unified":"1F649","variations":[],"docomo":null,"au":"EB52","softbank":null,"google":"FE356","image":"1f649.png","sheet_x":28,"sheet_y":21,"short_name":"hear_no_evil","short_names":["hear_no_evil"],"text":null,"texts":null,"category":"Nature","sort_order":18,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bh":{"name":"Regional Indicator Symbol Letters Bh","unified":"1F1E7-1F1ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1ed.png","sheet_x":33,"sheet_y":15,"short_name":"flag-bh","short_names":["flag-bh"],"text":null,"texts":null,"category":"Flags","sort_order":18,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"star_and_crescent":{"name":"Star and Crescent","unified":"262A","variations":["262A-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"262a.png","sheet_x":1,"sheet_y":20,"short_name":"star_and_crescent","short_names":["star_and_crescent"],"text":null,"texts":null,"category":"Symbols","sort_order":18,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"kissing_heart":{"name":"Face Throwing a Kiss","unified":"1F618","variations":[],"docomo":"E726","au":"EACF","softbank":"E418","google":"FE32C","image":"1f618.png","sheet_x":26,"sheet_y":39,"short_name":"kissing_heart","short_names":["kissing_heart"],"text":null,"texts":null,"category":"People","sort_order":18,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"camera_with_flash":{"name":"Camera with Flash","unified":"1F4F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4f8.png","sheet_x":22,"sheet_y":18,"short_name":"camera_with_flash","short_names":["camera_with_flash"],"text":null,"texts":null,"category":"Objects","sort_order":18,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ice_skate":{"name":"Ice Skate","unified":"26F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26f8.png","sheet_x":2,"sheet_y":37,"short_name":"ice_skate","short_names":["ice_skate"],"text":null,"texts":null,"category":"Activity","sort_order":19,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"oncoming_automobile":{"name":"Oncoming Automobile","unified":"1F698","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f698.png","sheet_x":29,"sheet_y":36,"short_name":"oncoming_automobile","short_names":["oncoming_automobile"],"text":null,"texts":null,"category":"Places","sort_order":19,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"speak_no_evil":{"name":"Speak-No-Evil Monkey","unified":"1F64A","variations":[],"docomo":null,"au":"EB51","softbank":null,"google":"FE355","image":"1f64a.png","sheet_x":28,"sheet_y":22,"short_name":"speak_no_evil","short_names":["speak_no_evil"],"text":null,"texts":null,"category":"Nature","sort_order":19,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"honey_pot":{"name":"Honey Pot","unified":"1F36F","variations":[],"docomo":null,"au":"EB59","softbank":null,"google":"FE97E","image":"1f36f.png","sheet_x":8,"sheet_y":7,"short_name":"honey_pot","short_names":["honey_pot"],"text":null,"texts":null,"category":"Foods","sort_order":19,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"kissing":{"name":"Kissing Face","unified":"1F617","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f617.png","sheet_x":26,"sheet_y":38,"short_name":"kissing","short_names":["kissing"],"text":null,"texts":null,"category":"People","sort_order":19,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"video_camera":{"name":"Video Camera","unified":"1F4F9","variations":[],"docomo":"E677","au":"E57E","softbank":"E03D","google":"FE4F9","image":"1f4f9.png","sheet_x":22,"sheet_y":19,"short_name":"video_camera","short_names":["video_camera"],"text":null,"texts":null,"category":"Objects","sort_order":19,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"om_symbol":{"name":"Om Symbol","unified":"1F549","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f549.png","sheet_x":24,"sheet_y":5,"short_name":"om_symbol","short_names":["om_symbol"],"text":null,"texts":null,"category":"Symbols","sort_order":19,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bd":{"name":"Regional Indicator Symbol Letters Bd","unified":"1F1E7-1F1E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1e9.png","sheet_x":33,"sheet_y":11,"short_name":"flag-bd","short_names":["flag-bd"],"text":null,"texts":null,"category":"Flags","sort_order":19,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"monkey":{"name":"Monkey","unified":"1F412","variations":[],"docomo":null,"au":"E4D9","softbank":"E528","google":"FE1CE","image":"1f412.png","sheet_x":12,"sheet_y":23,"short_name":"monkey","short_names":["monkey"],"text":null,"texts":null,"category":"Nature","sort_order":20,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"movie_camera":{"name":"Movie Camera","unified":"1F3A5","variations":[],"docomo":"E677","au":"E517","softbank":"E03D","google":"FE801","image":"1f3a5.png","sheet_x":9,"sheet_y":20,"short_name":"movie_camera","short_names":["movie_camera"],"text":null,"texts":null,"category":"Objects","sort_order":20,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"oncoming_taxi":{"name":"Oncoming Taxi","unified":"1F696","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f696.png","sheet_x":29,"sheet_y":34,"short_name":"oncoming_taxi","short_names":["oncoming_taxi"],"text":null,"texts":null,"category":"Places","sort_order":20,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bb":{"name":"Regional Indicator Symbol Letters Bb","unified":"1F1E7-1F1E7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1e7.png","sheet_x":33,"sheet_y":10,"short_name":"flag-bb","short_names":["flag-bb"],"text":null,"texts":null,"category":"Flags","sort_order":20,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"kissing_smiling_eyes":{"name":"Kissing Face with Smiling Eyes","unified":"1F619","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f619.png","sheet_x":26,"sheet_y":40,"short_name":"kissing_smiling_eyes","short_names":["kissing_smiling_eyes"],"text":null,"texts":null,"category":"People","sort_order":20,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bread":{"name":"Bread","unified":"1F35E","variations":[],"docomo":"E74D","au":"EAAF","softbank":"E339","google":"FE964","image":"1f35e.png","sheet_x":7,"sheet_y":31,"short_name":"bread","short_names":["bread"],"text":null,"texts":null,"category":"Foods","sort_order":20,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bow_and_arrow":{"name":"Bow and Arrow","unified":"1F3F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3f9.png","sheet_x":11,"sheet_y":39,"short_name":"bow_and_arrow","short_names":["bow_and_arrow"],"text":null,"texts":null,"category":"Activity","sort_order":20,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wheel_of_dharma":{"name":"Wheel of Dharma","unified":"2638","variations":["2638-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2638.png","sheet_x":1,"sheet_y":23,"short_name":"wheel_of_dharma","short_names":["wheel_of_dharma"],"text":null,"texts":null,"category":"Symbols","sort_order":20,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"aerial_tramway":{"name":"Aerial Tramway","unified":"1F6A1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6a1.png","sheet_x":30,"sheet_y":4,"short_name":"aerial_tramway","short_names":["aerial_tramway"],"text":null,"texts":null,"category":"Places","sort_order":21,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cheese_wedge":{"name":"Cheese Wedge","unified":"1F9C0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f9c0.png","sheet_x":32,"sheet_y":20,"short_name":"cheese_wedge","short_names":["cheese_wedge"],"text":null,"texts":null,"category":"Foods","sort_order":21,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"film_projector":{"name":"Film Projector","unified":"1F4FD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4fd.png","sheet_x":22,"sheet_y":23,"short_name":"film_projector","short_names":["film_projector"],"text":null,"texts":null,"category":"Objects","sort_order":21,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fishing_pole_and_fish":{"name":"Fishing Pole and Fish","unified":"1F3A3","variations":[],"docomo":"E751","au":"EB42","softbank":"E019","google":"FE7FF","image":"1f3a3.png","sheet_x":9,"sheet_y":18,"short_name":"fishing_pole_and_fish","short_names":["fishing_pole_and_fish"],"text":null,"texts":null,"category":"Activity","sort_order":21,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"kissing_closed_eyes":{"name":"Kissing Face with Closed Eyes","unified":"1F61A","variations":[],"docomo":"E726","au":"EACE","softbank":"E417","google":"FE32D","image":"1f61a.png","sheet_x":27,"sheet_y":0,"short_name":"kissing_closed_eyes","short_names":["kissing_closed_eyes"],"text":null,"texts":null,"category":"People","sort_order":21,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"star_of_david":{"name":"Star of David","unified":"2721","variations":["2721-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2721.png","sheet_x":3,"sheet_y":38,"short_name":"star_of_david","short_names":["star_of_david"],"text":null,"texts":null,"category":"Symbols","sort_order":21,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"chicken":{"name":"Chicken","unified":"1F414","variations":[],"docomo":null,"au":"EB23","softbank":"E52E","google":"FE1D4","image":"1f414.png","sheet_x":12,"sheet_y":25,"short_name":"chicken","short_names":["chicken"],"text":null,"texts":null,"category":"Nature","sort_order":21,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-by":{"name":"Regional Indicator Symbol Letters by","unified":"1F1E7-1F1FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1fe.png","sheet_x":33,"sheet_y":28,"short_name":"flag-by","short_names":["flag-by"],"text":null,"texts":null,"category":"Flags","sort_order":21,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"six_pointed_star":{"name":"Six Pointed Star with Middle Dot","unified":"1F52F","variations":[],"docomo":null,"au":"EA8F","softbank":"E23E","google":"FE4F8","image":"1f52f.png","sheet_x":23,"sheet_y":31,"short_name":"six_pointed_star","short_names":["six_pointed_star"],"text":null,"texts":null,"category":"Symbols","sort_order":22,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"penguin":{"name":"Penguin","unified":"1F427","variations":[],"docomo":"E750","au":"E4DC","softbank":"E055","google":"FE1BC","image":"1f427.png","sheet_x":13,"sheet_y":3,"short_name":"penguin","short_names":["penguin"],"text":null,"texts":null,"category":"Nature","sort_order":22,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mountain_cableway":{"name":"Mountain Cableway","unified":"1F6A0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6a0.png","sheet_x":30,"sheet_y":3,"short_name":"mountain_cableway","short_names":["mountain_cableway"],"text":null,"texts":null,"category":"Places","sort_order":22,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"stuck_out_tongue_winking_eye":{"name":"Face with Stuck-out Tongue and Winking Eye","unified":"1F61C","variations":[],"docomo":"E728","au":"E4E7","softbank":"E105","google":"FE329","image":"1f61c.png","sheet_x":27,"sheet_y":2,"short_name":"stuck_out_tongue_winking_eye","short_names":["stuck_out_tongue_winking_eye"],"text":";p","texts":[";p",";-p",";b",";-b",";P",";-P"],"category":"People","sort_order":22,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-be":{"name":"Regional Indicator Symbol Letters Be","unified":"1F1E7-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1ea.png","sheet_x":33,"sheet_y":12,"short_name":"flag-be","short_names":["flag-be"],"text":null,"texts":null,"category":"Flags","sort_order":22,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"film_frames":{"name":"Film Frames","unified":"1F39E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f39e.png","sheet_x":9,"sheet_y":13,"short_name":"film_frames","short_names":["film_frames"],"text":null,"texts":null,"category":"Objects","sort_order":22,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"poultry_leg":{"name":"Poultry Leg","unified":"1F357","variations":[],"docomo":null,"au":"EB3C","softbank":null,"google":"FE976","image":"1f357.png","sheet_x":7,"sheet_y":24,"short_name":"poultry_leg","short_names":["poultry_leg"],"text":null,"texts":null,"category":"Foods","sort_order":22,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rowboat":{"name":"Rowboat","unified":"1F6A3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6a3.png","sheet_x":30,"sheet_y":6,"short_name":"rowboat","short_names":["rowboat"],"text":null,"texts":null,"category":"Activity","sort_order":22,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F6A3-1F3FB":{"unified":"1F6A3-1F3FB","image":"1f6a3-1f3fb.png","sheet_x":30,"sheet_y":7,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6A3-1F3FC":{"unified":"1F6A3-1F3FC","image":"1f6a3-1f3fc.png","sheet_x":30,"sheet_y":8,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6A3-1F3FD":{"unified":"1F6A3-1F3FD","image":"1f6a3-1f3fd.png","sheet_x":30,"sheet_y":9,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6A3-1F3FE":{"unified":"1F6A3-1F3FE","image":"1f6a3-1f3fe.png","sheet_x":30,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6A3-1F3FF":{"unified":"1F6A3-1F3FF","image":"1f6a3-1f3ff.png","sheet_x":30,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"menorah_with_nine_branches":{"name":"Menorah with Nine Branches","unified":"1F54E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f54e.png","sheet_x":24,"sheet_y":10,"short_name":"menorah_with_nine_branches","short_names":["menorah_with_nine_branches"],"text":null,"texts":null,"category":"Symbols","sort_order":23,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"stuck_out_tongue_closed_eyes":{"name":"Face with Stuck-out Tongue and Tightly-Closed Eyes","unified":"1F61D","variations":[],"docomo":"E728","au":"E4E7","softbank":"E409","google":"FE32A","image":"1f61d.png","sheet_x":27,"sheet_y":3,"short_name":"stuck_out_tongue_closed_eyes","short_names":["stuck_out_tongue_closed_eyes"],"text":null,"texts":null,"category":"People","sort_order":23,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bz":{"name":"Regional Indicator Symbol Letters Bz","unified":"1F1E7-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1ff.png","sheet_x":33,"sheet_y":29,"short_name":"flag-bz","short_names":["flag-bz"],"text":null,"texts":null,"category":"Flags","sort_order":23,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"swimmer":{"name":"Swimmer","unified":"1F3CA","variations":[],"docomo":null,"au":"EADE","softbank":"E42D","google":"FE7DE","image":"1f3ca.png","sheet_x":10,"sheet_y":26,"short_name":"swimmer","short_names":["swimmer"],"text":null,"texts":null,"category":"Activity","sort_order":23,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F3CA-1F3FB":{"unified":"1F3CA-1F3FB","image":"1f3ca-1f3fb.png","sheet_x":10,"sheet_y":27,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3CA-1F3FC":{"unified":"1F3CA-1F3FC","image":"1f3ca-1f3fc.png","sheet_x":10,"sheet_y":28,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3CA-1F3FD":{"unified":"1F3CA-1F3FD","image":"1f3ca-1f3fd.png","sheet_x":10,"sheet_y":29,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3CA-1F3FE":{"unified":"1F3CA-1F3FE","image":"1f3ca-1f3fe.png","sheet_x":10,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3CA-1F3FF":{"unified":"1F3CA-1F3FF","image":"1f3ca-1f3ff.png","sheet_x":10,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"bird":{"name":"Bird","unified":"1F426","variations":[],"docomo":"E74F","au":"E4E0","softbank":"E521","google":"FE1C8","image":"1f426.png","sheet_x":13,"sheet_y":2,"short_name":"bird","short_names":["bird"],"text":null,"texts":null,"category":"Nature","sort_order":23,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"telephone_receiver":{"name":"Telephone Receiver","unified":"1F4DE","variations":[],"docomo":"E687","au":"E51E","softbank":"E009","google":"FE524","image":"1f4de.png","sheet_x":21,"sheet_y":33,"short_name":"telephone_receiver","short_names":["telephone_receiver"],"text":null,"texts":null,"category":"Objects","sort_order":23,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"meat_on_bone":{"name":"Meat on Bone","unified":"1F356","variations":[],"docomo":null,"au":"E4C4","softbank":null,"google":"FE972","image":"1f356.png","sheet_x":7,"sheet_y":23,"short_name":"meat_on_bone","short_names":["meat_on_bone"],"text":null,"texts":null,"category":"Foods","sort_order":23,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"suspension_railway":{"name":"Suspension Railway","unified":"1F69F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f69f.png","sheet_x":30,"sheet_y":2,"short_name":"suspension_railway","short_names":["suspension_railway"],"text":null,"texts":null,"category":"Places","sort_order":23,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bj":{"name":"Regional Indicator Symbol Letters Bj","unified":"1F1E7-1F1EF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1ef.png","sheet_x":33,"sheet_y":17,"short_name":"flag-bj","short_names":["flag-bj"],"text":null,"texts":null,"category":"Flags","sort_order":24,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"yin_yang":{"name":"Yin Yang","unified":"262F","variations":["262F-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"262f.png","sheet_x":1,"sheet_y":22,"short_name":"yin_yang","short_names":["yin_yang"],"text":null,"texts":null,"category":"Symbols","sort_order":24,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"stuck_out_tongue":{"name":"Face with Stuck-out Tongue","unified":"1F61B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f61b.png","sheet_x":27,"sheet_y":1,"short_name":"stuck_out_tongue","short_names":["stuck_out_tongue"],"text":":p","texts":[":p",":-p",":P",":-P",":b",":-b"],"category":"People","sort_order":24,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"phone":{"name":"Black Telephone","unified":"260E","variations":["260E-FE0F"],"docomo":"E687","au":"E596","softbank":"E009","google":"FE523","image":"260e.png","sheet_x":1,"sheet_y":5,"short_name":"phone","short_names":["phone","telephone"],"text":null,"texts":null,"category":"Objects","sort_order":24,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"railway_car":{"name":"Railway Car","unified":"1F683","variations":[],"docomo":"E65B","au":"E4B5","softbank":"E01E","google":"FE7DF","image":"1f683.png","sheet_x":29,"sheet_y":15,"short_name":"railway_car","short_names":["railway_car"],"text":null,"texts":null,"category":"Places","sort_order":24,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fried_shrimp":{"name":"Fried Shrimp","unified":"1F364","variations":[],"docomo":null,"au":"EB70","softbank":null,"google":"FE97F","image":"1f364.png","sheet_x":7,"sheet_y":37,"short_name":"fried_shrimp","short_names":["fried_shrimp"],"text":null,"texts":null,"category":"Foods","sort_order":24,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"surfer":{"name":"Surfer","unified":"1F3C4","variations":[],"docomo":"E712","au":"EB41","softbank":"E017","google":"FE7DA","image":"1f3c4.png","sheet_x":10,"sheet_y":15,"short_name":"surfer","short_names":["surfer"],"text":null,"texts":null,"category":"Activity","sort_order":24,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F3C4-1F3FB":{"unified":"1F3C4-1F3FB","image":"1f3c4-1f3fb.png","sheet_x":10,"sheet_y":16,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3C4-1F3FC":{"unified":"1F3C4-1F3FC","image":"1f3c4-1f3fc.png","sheet_x":10,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3C4-1F3FD":{"unified":"1F3C4-1F3FD","image":"1f3c4-1f3fd.png","sheet_x":10,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3C4-1F3FE":{"unified":"1F3C4-1F3FE","image":"1f3c4-1f3fe.png","sheet_x":10,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3C4-1F3FF":{"unified":"1F3C4-1F3FF","image":"1f3c4-1f3ff.png","sheet_x":10,"sheet_y":20,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"baby_chick":{"name":"Baby Chick","unified":"1F424","variations":[],"docomo":"E74F","au":"E4E0","softbank":"E523","google":"FE1BA","image":"1f424.png","sheet_x":13,"sheet_y":0,"short_name":"baby_chick","short_names":["baby_chick"],"text":null,"texts":null,"category":"Nature","sort_order":24,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"egg":{"name":"Cooking","unified":"1F373","variations":[],"docomo":null,"au":"E4D1","softbank":"E147","google":"FE965","image":"1f373.png","sheet_x":8,"sheet_y":11,"short_name":"egg","short_names":["egg"],"text":null,"texts":null,"category":"Foods","sort_order":25,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bm":{"name":"Regional Indicator Symbol Letters Bm","unified":"1F1E7-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1f2.png","sheet_x":33,"sheet_y":19,"short_name":"flag-bm","short_names":["flag-bm"],"text":null,"texts":null,"category":"Flags","sort_order":25,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hatching_chick":{"name":"Hatching Chick","unified":"1F423","variations":[],"docomo":"E74F","au":"E5DB","softbank":"E523","google":"FE1DD","image":"1f423.png","sheet_x":12,"sheet_y":40,"short_name":"hatching_chick","short_names":["hatching_chick"],"text":null,"texts":null,"category":"Nature","sort_order":25,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"train":{"name":"Tram Car","unified":"1F68B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f68b.png","sheet_x":29,"sheet_y":23,"short_name":"train","short_names":["train"],"text":null,"texts":null,"category":"Places","sort_order":25,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pager":{"name":"Pager","unified":"1F4DF","variations":[],"docomo":"E65A","au":"E59B","softbank":null,"google":"FE522","image":"1f4df.png","sheet_x":21,"sheet_y":34,"short_name":"pager","short_names":["pager"],"text":null,"texts":null,"category":"Objects","sort_order":25,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bath":{"name":"Bath","unified":"1F6C0","variations":[],"docomo":"E6F7","au":"E5D8","softbank":"E13F","google":"FE505","image":"1f6c0.png","sheet_x":31,"sheet_y":14,"short_name":"bath","short_names":["bath"],"text":null,"texts":null,"category":"Activity","sort_order":25,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F6C0-1F3FB":{"unified":"1F6C0-1F3FB","image":"1f6c0-1f3fb.png","sheet_x":31,"sheet_y":15,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6C0-1F3FC":{"unified":"1F6C0-1F3FC","image":"1f6c0-1f3fc.png","sheet_x":31,"sheet_y":16,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6C0-1F3FD":{"unified":"1F6C0-1F3FD","image":"1f6c0-1f3fd.png","sheet_x":31,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6C0-1F3FE":{"unified":"1F6C0-1F3FE","image":"1f6c0-1f3fe.png","sheet_x":31,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6C0-1F3FF":{"unified":"1F6C0-1F3FF","image":"1f6c0-1f3ff.png","sheet_x":31,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"money_mouth_face":{"name":"Money-Mouth Face","unified":"1F911","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f911.png","sheet_x":32,"sheet_y":2,"short_name":"money_mouth_face","short_names":["money_mouth_face"],"text":null,"texts":null,"category":"People","sort_order":25,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"orthodox_cross":{"name":"Orthodox Cross","unified":"2626","variations":["2626-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2626.png","sheet_x":1,"sheet_y":19,"short_name":"orthodox_cross","short_names":["orthodox_cross"],"text":null,"texts":null,"category":"Symbols","sort_order":25,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hatched_chick":{"name":"Front-Facing Baby Chick","unified":"1F425","variations":[],"docomo":"E74F","au":"EB76","softbank":"E523","google":"FE1BB","image":"1f425.png","sheet_x":13,"sheet_y":1,"short_name":"hatched_chick","short_names":["hatched_chick"],"text":null,"texts":null,"category":"Nature","sort_order":26,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"place_of_worship":{"name":"Place of Worship","unified":"1F6D0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6d0.png","sheet_x":31,"sheet_y":30,"short_name":"place_of_worship","short_names":["place_of_worship"],"text":null,"texts":null,"category":"Symbols","sort_order":26,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hamburger":{"name":"Hamburger","unified":"1F354","variations":[],"docomo":"E673","au":"E4D6","softbank":"E120","google":"FE960","image":"1f354.png","sheet_x":7,"sheet_y":21,"short_name":"hamburger","short_names":["hamburger"],"text":null,"texts":null,"category":"Foods","sort_order":26,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bt":{"name":"Regional Indicator Symbol Letters Bt","unified":"1F1E7-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1f9.png","sheet_x":33,"sheet_y":25,"short_name":"flag-bt","short_names":["flag-bt"],"text":null,"texts":null,"category":"Flags","sort_order":26,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fax":{"name":"Fax Machine","unified":"1F4E0","variations":[],"docomo":"E6D0","au":"E520","softbank":"E00B","google":"FE528","image":"1f4e0.png","sheet_x":21,"sheet_y":35,"short_name":"fax","short_names":["fax"],"text":null,"texts":null,"category":"Objects","sort_order":26,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"nerd_face":{"name":"Nerd Face","unified":"1F913","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f913.png","sheet_x":32,"sheet_y":4,"short_name":"nerd_face","short_names":["nerd_face"],"text":null,"texts":null,"category":"People","sort_order":26,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"monorail":{"name":"Monorail","unified":"1F69D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f69d.png","sheet_x":30,"sheet_y":0,"short_name":"monorail","short_names":["monorail"],"text":null,"texts":null,"category":"Places","sort_order":26,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"person_with_ball":{"name":"Person with Ball","unified":"26F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26f9.png","sheet_x":2,"sheet_y":38,"short_name":"person_with_ball","short_names":["person_with_ball"],"text":null,"texts":null,"category":"Activity","sort_order":26,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"26F9-1F3FB":{"unified":"26F9-1F3FB","image":"26f9-1f3fb.png","sheet_x":2,"sheet_y":39,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"26F9-1F3FC":{"unified":"26F9-1F3FC","image":"26f9-1f3fc.png","sheet_x":2,"sheet_y":40,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"26F9-1F3FD":{"unified":"26F9-1F3FD","image":"26f9-1f3fd.png","sheet_x":3,"sheet_y":0,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"26F9-1F3FE":{"unified":"26F9-1F3FE","image":"26f9-1f3fe.png","sheet_x":3,"sheet_y":1,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"26F9-1F3FF":{"unified":"26F9-1F3FF","image":"26f9-1f3ff.png","sheet_x":3,"sheet_y":2,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"weight_lifter":{"name":"Weight Lifter","unified":"1F3CB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3cb.png","sheet_x":10,"sheet_y":32,"short_name":"weight_lifter","short_names":["weight_lifter"],"text":null,"texts":null,"category":"Activity","sort_order":27,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F3CB-1F3FB":{"unified":"1F3CB-1F3FB","image":"1f3cb-1f3fb.png","sheet_x":10,"sheet_y":33,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3CB-1F3FC":{"unified":"1F3CB-1F3FC","image":"1f3cb-1f3fc.png","sheet_x":10,"sheet_y":34,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3CB-1F3FD":{"unified":"1F3CB-1F3FD","image":"1f3cb-1f3fd.png","sheet_x":10,"sheet_y":35,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3CB-1F3FE":{"unified":"1F3CB-1F3FE","image":"1f3cb-1f3fe.png","sheet_x":10,"sheet_y":36,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3CB-1F3FF":{"unified":"1F3CB-1F3FF","image":"1f3cb-1f3ff.png","sheet_x":10,"sheet_y":37,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"sunglasses":{"name":"Smiling Face with Sunglasses","unified":"1F60E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f60e.png","sheet_x":26,"sheet_y":29,"short_name":"sunglasses","short_names":["sunglasses"],"text":null,"texts":["8)"],"category":"People","sort_order":27,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wolf":{"name":"Wolf Face","unified":"1F43A","variations":[],"docomo":"E6A1","au":"E4E1","softbank":"E52A","google":"FE1D0","image":"1f43a.png","sheet_x":13,"sheet_y":22,"short_name":"wolf","short_names":["wolf"],"text":null,"texts":null,"category":"Nature","sort_order":27,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bullettrain_side":{"name":"High-Speed Train","unified":"1F684","variations":[],"docomo":"E65D","au":"E4B0","softbank":"E435","google":"FE7E2","image":"1f684.png","sheet_x":29,"sheet_y":16,"short_name":"bullettrain_side","short_names":["bullettrain_side"],"text":null,"texts":null,"category":"Places","sort_order":27,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ophiuchus":{"name":"Ophiuchus","unified":"26CE","variations":[],"docomo":null,"au":"E49B","softbank":"E24B","google":"FE037","image":"26ce.png","sheet_x":2,"sheet_y":23,"short_name":"ophiuchus","short_names":["ophiuchus"],"text":null,"texts":null,"category":"Symbols","sort_order":27,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bo":{"name":"Regional Indicator Symbol Letters Bo","unified":"1F1E7-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1f4.png","sheet_x":33,"sheet_y":21,"short_name":"flag-bo","short_names":["flag-bo"],"text":null,"texts":null,"category":"Flags","sort_order":27,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tv":{"name":"Television","unified":"1F4FA","variations":[],"docomo":"E68A","au":"E502","softbank":"E12A","google":"FE81C","image":"1f4fa.png","sheet_x":22,"sheet_y":20,"short_name":"tv","short_names":["tv"],"text":null,"texts":null,"category":"Objects","sort_order":27,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fries":{"name":"French Fries","unified":"1F35F","variations":[],"docomo":null,"au":"EAB1","softbank":"E33B","google":"FE967","image":"1f35f.png","sheet_x":7,"sheet_y":32,"short_name":"fries","short_names":["fries"],"text":null,"texts":null,"category":"Foods","sort_order":27,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bicyclist":{"name":"Bicyclist","unified":"1F6B4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6b4.png","sheet_x":30,"sheet_y":28,"short_name":"bicyclist","short_names":["bicyclist"],"text":null,"texts":null,"category":"Activity","sort_order":28,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F6B4-1F3FB":{"unified":"1F6B4-1F3FB","image":"1f6b4-1f3fb.png","sheet_x":30,"sheet_y":29,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B4-1F3FC":{"unified":"1F6B4-1F3FC","image":"1f6b4-1f3fc.png","sheet_x":30,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B4-1F3FD":{"unified":"1F6B4-1F3FD","image":"1f6b4-1f3fd.png","sheet_x":30,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B4-1F3FE":{"unified":"1F6B4-1F3FE","image":"1f6b4-1f3fe.png","sheet_x":30,"sheet_y":32,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B4-1F3FF":{"unified":"1F6B4-1F3FF","image":"1f6b4-1f3ff.png","sheet_x":30,"sheet_y":33,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"aries":{"name":"Aries","unified":"2648","variations":["2648-FE0F"],"docomo":"E646","au":"E48F","softbank":"E23F","google":"FE02B","image":"2648.png","sheet_x":1,"sheet_y":26,"short_name":"aries","short_names":["aries"],"text":null,"texts":null,"category":"Symbols","sort_order":28,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hugging_face":{"name":"Hugging Face","unified":"1F917","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f917.png","sheet_x":32,"sheet_y":8,"short_name":"hugging_face","short_names":["hugging_face"],"text":null,"texts":null,"category":"People","sort_order":28,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bq":{"name":"Regional Indicator Symbol Letters Bq","unified":"1F1E7-1F1F6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1f6.png","sheet_x":33,"sheet_y":22,"short_name":"flag-bq","short_names":["flag-bq"],"text":null,"texts":null,"category":"Flags","sort_order":28,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"bullettrain_front":{"name":"High-Speed Train with Bullet Nose","unified":"1F685","variations":[],"docomo":"E65D","au":"E4B0","softbank":"E01F","google":"FE7E3","image":"1f685.png","sheet_x":29,"sheet_y":17,"short_name":"bullettrain_front","short_names":["bullettrain_front"],"text":null,"texts":null,"category":"Places","sort_order":28,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"radio":{"name":"Radio","unified":"1F4FB","variations":[],"docomo":null,"au":"E5B9","softbank":"E128","google":"FE81F","image":"1f4fb.png","sheet_x":22,"sheet_y":21,"short_name":"radio","short_names":["radio"],"text":null,"texts":null,"category":"Objects","sort_order":28,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hotdog":{"name":"Hot Dog","unified":"1F32D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f32d.png","sheet_x":6,"sheet_y":23,"short_name":"hotdog","short_names":["hotdog"],"text":null,"texts":null,"category":"Foods","sort_order":28,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"boar":{"name":"Boar","unified":"1F417","variations":[],"docomo":null,"au":"EB24","softbank":"E52F","google":"FE1D5","image":"1f417.png","sheet_x":12,"sheet_y":28,"short_name":"boar","short_names":["boar"],"text":null,"texts":null,"category":"Nature","sort_order":28,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"studio_microphone":{"name":"Studio Microphone","unified":"1F399","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f399.png","sheet_x":9,"sheet_y":10,"short_name":"studio_microphone","short_names":["studio_microphone"],"text":null,"texts":null,"category":"Objects","sort_order":29,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pizza":{"name":"Slice of Pizza","unified":"1F355","variations":[],"docomo":null,"au":"EB3B","softbank":null,"google":"FE975","image":"1f355.png","sheet_x":7,"sheet_y":22,"short_name":"pizza","short_names":["pizza"],"text":null,"texts":null,"category":"Foods","sort_order":29,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ba":{"name":"Regional Indicator Symbol Letters Ba","unified":"1F1E7-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1e6.png","sheet_x":33,"sheet_y":9,"short_name":"flag-ba","short_names":["flag-ba"],"text":null,"texts":null,"category":"Flags","sort_order":29,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mountain_bicyclist":{"name":"Mountain Bicyclist","unified":"1F6B5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6b5.png","sheet_x":30,"sheet_y":34,"short_name":"mountain_bicyclist","short_names":["mountain_bicyclist"],"text":null,"texts":null,"category":"Activity","sort_order":29,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F6B5-1F3FB":{"unified":"1F6B5-1F3FB","image":"1f6b5-1f3fb.png","sheet_x":30,"sheet_y":35,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B5-1F3FC":{"unified":"1F6B5-1F3FC","image":"1f6b5-1f3fc.png","sheet_x":30,"sheet_y":36,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B5-1F3FD":{"unified":"1F6B5-1F3FD","image":"1f6b5-1f3fd.png","sheet_x":30,"sheet_y":37,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B5-1F3FE":{"unified":"1F6B5-1F3FE","image":"1f6b5-1f3fe.png","sheet_x":30,"sheet_y":38,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B5-1F3FF":{"unified":"1F6B5-1F3FF","image":"1f6b5-1f3ff.png","sheet_x":30,"sheet_y":39,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"smirk":{"name":"Smirking Face","unified":"1F60F","variations":[],"docomo":"E72C","au":"EABF","softbank":"E402","google":"FE343","image":"1f60f.png","sheet_x":26,"sheet_y":30,"short_name":"smirk","short_names":["smirk"],"text":null,"texts":null,"category":"People","sort_order":29,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"light_rail":{"name":"Light Rail","unified":"1F688","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f688.png","sheet_x":29,"sheet_y":20,"short_name":"light_rail","short_names":["light_rail"],"text":null,"texts":null,"category":"Places","sort_order":29,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"horse":{"name":"Horse Face","unified":"1F434","variations":[],"docomo":"E754","au":"E4D8","softbank":"E01A","google":"FE1BE","image":"1f434.png","sheet_x":13,"sheet_y":16,"short_name":"horse","short_names":["horse"],"text":null,"texts":null,"category":"Nature","sort_order":29,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"taurus":{"name":"Taurus","unified":"2649","variations":["2649-FE0F"],"docomo":"E647","au":"E490","softbank":"E240","google":"FE02C","image":"2649.png","sheet_x":1,"sheet_y":27,"short_name":"taurus","short_names":["taurus"],"text":null,"texts":null,"category":"Symbols","sort_order":29,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"gemini":{"name":"Gemini","unified":"264A","variations":["264A-FE0F"],"docomo":"E648","au":"E491","softbank":"E241","google":"FE02D","image":"264a.png","sheet_x":1,"sheet_y":28,"short_name":"gemini","short_names":["gemini"],"text":null,"texts":null,"category":"Symbols","sort_order":30,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"horse_racing":{"name":"Horse Racing","unified":"1F3C7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3c7.png","sheet_x":10,"sheet_y":23,"short_name":"horse_racing","short_names":["horse_racing"],"text":null,"texts":null,"category":"Activity","sort_order":30,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"level_slider":{"name":"Level Slider","unified":"1F39A","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f39a.png","sheet_x":9,"sheet_y":11,"short_name":"level_slider","short_names":["level_slider"],"text":null,"texts":null,"category":"Objects","sort_order":30,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bw":{"name":"Regional Indicator Symbol Letters Bw","unified":"1F1E7-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1fc.png","sheet_x":33,"sheet_y":27,"short_name":"flag-bw","short_names":["flag-bw"],"text":null,"texts":null,"category":"Flags","sort_order":30,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"unicorn_face":{"name":"Unicorn Face","unified":"1F984","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f984.png","sheet_x":32,"sheet_y":19,"short_name":"unicorn_face","short_names":["unicorn_face"],"text":null,"texts":null,"category":"Nature","sort_order":30,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mountain_railway":{"name":"Mountain Railway","unified":"1F69E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f69e.png","sheet_x":30,"sheet_y":1,"short_name":"mountain_railway","short_names":["mountain_railway"],"text":null,"texts":null,"category":"Places","sort_order":30,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"spaghetti":{"name":"Spaghetti","unified":"1F35D","variations":[],"docomo":null,"au":"EAB5","softbank":"E33F","google":"FE96B","image":"1f35d.png","sheet_x":7,"sheet_y":30,"short_name":"spaghetti","short_names":["spaghetti"],"text":null,"texts":null,"category":"Foods","sort_order":30,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"no_mouth":{"name":"Face Without Mouth","unified":"1F636","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f636.png","sheet_x":27,"sheet_y":28,"short_name":"no_mouth","short_names":["no_mouth"],"text":null,"texts":null,"category":"People","sort_order":30,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-br":{"name":"Regional Indicator Symbol Letters Br","unified":"1F1E7-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1f7.png","sheet_x":33,"sheet_y":23,"short_name":"flag-br","short_names":["flag-br"],"text":null,"texts":null,"category":"Flags","sort_order":31,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man_in_business_suit_levitating":{"name":"Man in Business Suit Levitating","unified":"1F574","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f574.png","sheet_x":24,"sheet_y":38,"short_name":"man_in_business_suit_levitating","short_names":["man_in_business_suit_levitating"],"text":null,"texts":null,"category":"Activity","sort_order":31,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"control_knobs":{"name":"Control Knobs","unified":"1F39B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f39b.png","sheet_x":9,"sheet_y":12,"short_name":"control_knobs","short_names":["control_knobs"],"text":null,"texts":null,"category":"Objects","sort_order":31,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bee":{"name":"Honeybee","unified":"1F41D","variations":[],"docomo":null,"au":"EB57","softbank":null,"google":"FE1E1","image":"1f41d.png","sheet_x":12,"sheet_y":34,"short_name":"bee","short_names":["bee","honeybee"],"text":null,"texts":null,"category":"Nature","sort_order":31,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"neutral_face":{"name":"Neutral Face","unified":"1F610","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f610.png","sheet_x":26,"sheet_y":31,"short_name":"neutral_face","short_names":["neutral_face"],"text":null,"texts":[":|",":-|"],"category":"People","sort_order":31,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"steam_locomotive":{"name":"Steam Locomotive","unified":"1F682","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f682.png","sheet_x":29,"sheet_y":14,"short_name":"steam_locomotive","short_names":["steam_locomotive"],"text":null,"texts":null,"category":"Places","sort_order":31,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cancer":{"name":"Cancer","unified":"264B","variations":["264B-FE0F"],"docomo":"E649","au":"E492","softbank":"E242","google":"FE02E","image":"264b.png","sheet_x":1,"sheet_y":29,"short_name":"cancer","short_names":["cancer"],"text":null,"texts":null,"category":"Symbols","sort_order":31,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"taco":{"name":"Taco","unified":"1F32E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f32e.png","sheet_x":6,"sheet_y":24,"short_name":"taco","short_names":["taco"],"text":null,"texts":null,"category":"Foods","sort_order":31,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"burrito":{"name":"Burrito","unified":"1F32F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f32f.png","sheet_x":6,"sheet_y":25,"short_name":"burrito","short_names":["burrito"],"text":null,"texts":null,"category":"Foods","sort_order":32,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"expressionless":{"name":"Expressionless Face","unified":"1F611","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f611.png","sheet_x":26,"sheet_y":32,"short_name":"expressionless","short_names":["expressionless"],"text":null,"texts":null,"category":"People","sort_order":32,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"trophy":{"name":"Trophy","unified":"1F3C6","variations":[],"docomo":null,"au":"E5D3","softbank":"E131","google":"FE7DB","image":"1f3c6.png","sheet_x":10,"sheet_y":22,"short_name":"trophy","short_names":["trophy"],"text":null,"texts":null,"category":"Activity","sort_order":32,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"train2":{"name":"Train","unified":"1F686","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f686.png","sheet_x":29,"sheet_y":18,"short_name":"train2","short_names":["train2"],"text":null,"texts":null,"category":"Places","sort_order":32,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-io":{"name":"Regional Indicator Symbol Letters Io","unified":"1F1EE-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1f4.png","sheet_x":35,"sheet_y":21,"short_name":"flag-io","short_names":["flag-io"],"text":null,"texts":null,"category":"Flags","sort_order":32,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bug":{"name":"Bug","unified":"1F41B","variations":[],"docomo":null,"au":"EB1E","softbank":"E525","google":"FE1CB","image":"1f41b.png","sheet_x":12,"sheet_y":32,"short_name":"bug","short_names":["bug"],"text":null,"texts":null,"category":"Nature","sort_order":32,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"stopwatch":{"name":"Stopwatch","unified":"23F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"23f1.png","sheet_x":0,"sheet_y":26,"short_name":"stopwatch","short_names":["stopwatch"],"text":null,"texts":null,"category":"Objects","sort_order":32,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"leo":{"name":"Leo","unified":"264C","variations":["264C-FE0F"],"docomo":"E64A","au":"E493","softbank":"E243","google":"FE02F","image":"264c.png","sheet_x":1,"sheet_y":30,"short_name":"leo","short_names":["leo"],"text":null,"texts":null,"category":"Symbols","sort_order":32,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"virgo":{"name":"Virgo","unified":"264D","variations":["264D-FE0F"],"docomo":"E64B","au":"E494","softbank":"E244","google":"FE030","image":"264d.png","sheet_x":1,"sheet_y":31,"short_name":"virgo","short_names":["virgo"],"text":null,"texts":null,"category":"Symbols","sort_order":33,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"running_shirt_with_sash":{"name":"Running Shirt with Sash","unified":"1F3BD","variations":[],"docomo":"E652","au":null,"softbank":null,"google":"FE7D0","image":"1f3bd.png","sheet_x":10,"sheet_y":3,"short_name":"running_shirt_with_sash","short_names":["running_shirt_with_sash"],"text":null,"texts":null,"category":"Activity","sort_order":33,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-vg":{"name":"Regional Indicator Symbol Letters Vg","unified":"1F1FB-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fb-1f1ec.png","sheet_x":38,"sheet_y":32,"short_name":"flag-vg","short_names":["flag-vg"],"text":null,"texts":null,"category":"Flags","sort_order":33,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"metro":{"name":"Metro","unified":"1F687","variations":[],"docomo":"E65C","au":"E5BC","softbank":"E434","google":"FE7E0","image":"1f687.png","sheet_x":29,"sheet_y":19,"short_name":"metro","short_names":["metro"],"text":null,"texts":null,"category":"Places","sort_order":33,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"unamused":{"name":"Unamused Face","unified":"1F612","variations":[],"docomo":"E725","au":"EAC9","softbank":"E40E","google":"FE326","image":"1f612.png","sheet_x":26,"sheet_y":33,"short_name":"unamused","short_names":["unamused"],"text":":(","texts":null,"category":"People","sort_order":33,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"snail":{"name":"Snail","unified":"1F40C","variations":[],"docomo":"E74E","au":"EB7E","softbank":null,"google":"FE1B9","image":"1f40c.png","sheet_x":12,"sheet_y":17,"short_name":"snail","short_names":["snail"],"text":null,"texts":null,"category":"Nature","sort_order":33,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"timer_clock":{"name":"Timer Clock","unified":"23F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"23f2.png","sheet_x":0,"sheet_y":27,"short_name":"timer_clock","short_names":["timer_clock"],"text":null,"texts":null,"category":"Objects","sort_order":33,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ramen":{"name":"Steaming Bowl","unified":"1F35C","variations":[],"docomo":"E74C","au":"E5B4","softbank":"E340","google":"FE963","image":"1f35c.png","sheet_x":7,"sheet_y":29,"short_name":"ramen","short_names":["ramen"],"text":null,"texts":null,"category":"Foods","sort_order":33,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"beetle":{"name":"Lady Beetle","unified":"1F41E","variations":[],"docomo":null,"au":"EB58","softbank":null,"google":"FE1E2","image":"1f41e.png","sheet_x":12,"sheet_y":35,"short_name":"beetle","short_names":["beetle"],"text":null,"texts":null,"category":"Nature","sort_order":34,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"face_with_rolling_eyes":{"name":"Face with Rolling Eyes","unified":"1F644","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f644.png","sheet_x":28,"sheet_y":1,"short_name":"face_with_rolling_eyes","short_names":["face_with_rolling_eyes"],"text":null,"texts":null,"category":"People","sort_order":34,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"libra":{"name":"Libra","unified":"264E","variations":["264E-FE0F"],"docomo":"E64C","au":"E495","softbank":"E245","google":"FE031","image":"264e.png","sheet_x":1,"sheet_y":32,"short_name":"libra","short_names":["libra"],"text":null,"texts":null,"category":"Symbols","sort_order":34,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"stew":{"name":"Pot of Food","unified":"1F372","variations":[],"docomo":null,"au":"EABE","softbank":"E34D","google":"FE970","image":"1f372.png","sheet_x":8,"sheet_y":10,"short_name":"stew","short_names":["stew"],"text":null,"texts":null,"category":"Foods","sort_order":34,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sports_medal":{"name":"Sports Medal","unified":"1F3C5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3c5.png","sheet_x":10,"sheet_y":21,"short_name":"sports_medal","short_names":["sports_medal"],"text":null,"texts":null,"category":"Activity","sort_order":34,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bn":{"name":"Regional Indicator Symbol Letters Bn","unified":"1F1E7-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1f3.png","sheet_x":33,"sheet_y":20,"short_name":"flag-bn","short_names":["flag-bn"],"text":null,"texts":null,"category":"Flags","sort_order":34,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"alarm_clock":{"name":"Alarm Clock","unified":"23F0","variations":[],"docomo":"E6BA","au":"E594","softbank":"E02D","google":"FE02A","image":"23f0.png","sheet_x":0,"sheet_y":25,"short_name":"alarm_clock","short_names":["alarm_clock"],"text":null,"texts":null,"category":"Objects","sort_order":34,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tram":{"name":"Tram","unified":"1F68A","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f68a.png","sheet_x":29,"sheet_y":22,"short_name":"tram","short_names":["tram"],"text":null,"texts":null,"category":"Places","sort_order":34,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fish_cake":{"name":"Fish Cake with Swirl Design","unified":"1F365","variations":[],"docomo":"E643","au":"E4ED","softbank":null,"google":"FE973","image":"1f365.png","sheet_x":7,"sheet_y":38,"short_name":"fish_cake","short_names":["fish_cake"],"text":null,"texts":null,"category":"Foods","sort_order":35,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"thinking_face":{"name":"Thinking Face","unified":"1F914","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f914.png","sheet_x":32,"sheet_y":5,"short_name":"thinking_face","short_names":["thinking_face"],"text":null,"texts":null,"category":"People","sort_order":35,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"medal":{"name":"Military Medal","unified":"1F396","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f396.png","sheet_x":9,"sheet_y":8,"short_name":"medal","short_names":["medal"],"text":null,"texts":null,"category":"Activity","sort_order":35,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mantelpiece_clock":{"name":"Mantelpiece Clock","unified":"1F570","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f570.png","sheet_x":24,"sheet_y":36,"short_name":"mantelpiece_clock","short_names":["mantelpiece_clock"],"text":null,"texts":null,"category":"Objects","sort_order":35,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"station":{"name":"Station","unified":"1F689","variations":[],"docomo":null,"au":"EB6D","softbank":"E039","google":"FE7EC","image":"1f689.png","sheet_x":29,"sheet_y":21,"short_name":"station","short_names":["station"],"text":null,"texts":null,"category":"Places","sort_order":35,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bg":{"name":"Regional Indicator Symbol Letters Bg","unified":"1F1E7-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1ec.png","sheet_x":33,"sheet_y":14,"short_name":"flag-bg","short_names":["flag-bg"],"text":null,"texts":null,"category":"Flags","sort_order":35,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ant":{"name":"Ant","unified":"1F41C","variations":[],"docomo":null,"au":"E4DD","softbank":null,"google":"FE1DA","image":"1f41c.png","sheet_x":12,"sheet_y":33,"short_name":"ant","short_names":["ant"],"text":null,"texts":null,"category":"Nature","sort_order":35,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"scorpius":{"name":"Scorpius","unified":"264F","variations":["264F-FE0F"],"docomo":"E64D","au":"E496","softbank":"E246","google":"FE032","image":"264f.png","sheet_x":1,"sheet_y":33,"short_name":"scorpius","short_names":["scorpius"],"text":null,"texts":null,"category":"Symbols","sort_order":35,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sushi":{"name":"Sushi","unified":"1F363","variations":[],"docomo":null,"au":"EAB8","softbank":"E344","google":"FE96E","image":"1f363.png","sheet_x":7,"sheet_y":36,"short_name":"sushi","short_names":["sushi"],"text":null,"texts":null,"category":"Foods","sort_order":36,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flushed":{"name":"Flushed Face","unified":"1F633","variations":[],"docomo":"E72A","au":"EAC8","softbank":"E40D","google":"FE32F","image":"1f633.png","sheet_x":27,"sheet_y":25,"short_name":"flushed","short_names":["flushed"],"text":null,"texts":null,"category":"People","sort_order":36,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"spider":{"name":"Spider","unified":"1F577","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f577.png","sheet_x":25,"sheet_y":5,"short_name":"spider","short_names":["spider"],"text":null,"texts":null,"category":"Nature","sort_order":36,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"reminder_ribbon":{"name":"Reminder Ribbon","unified":"1F397","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f397.png","sheet_x":9,"sheet_y":9,"short_name":"reminder_ribbon","short_names":["reminder_ribbon"],"text":null,"texts":null,"category":"Activity","sort_order":36,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"helicopter":{"name":"Helicopter","unified":"1F681","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f681.png","sheet_x":29,"sheet_y":13,"short_name":"helicopter","short_names":["helicopter"],"text":null,"texts":null,"category":"Places","sort_order":36,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sagittarius":{"name":"Sagittarius","unified":"2650","variations":["2650-FE0F"],"docomo":"E64E","au":"E497","softbank":"E247","google":"FE033","image":"2650.png","sheet_x":1,"sheet_y":34,"short_name":"sagittarius","short_names":["sagittarius"],"text":null,"texts":null,"category":"Symbols","sort_order":36,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bf":{"name":"Regional Indicator Symbol Letters Bf","unified":"1F1E7-1F1EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1eb.png","sheet_x":33,"sheet_y":13,"short_name":"flag-bf","short_names":["flag-bf"],"text":null,"texts":null,"category":"Flags","sort_order":36,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hourglass_flowing_sand":{"name":"Hourglass with Flowing Sand","unified":"23F3","variations":[],"docomo":"E71C","au":"E47C","softbank":null,"google":"FE01B","image":"23f3.png","sheet_x":0,"sheet_y":28,"short_name":"hourglass_flowing_sand","short_names":["hourglass_flowing_sand"],"text":null,"texts":null,"category":"Objects","sort_order":36,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"small_airplane":{"name":"Small Airplane","unified":"1F6E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6e9.png","sheet_x":31,"sheet_y":37,"short_name":"small_airplane","short_names":["small_airplane"],"text":null,"texts":null,"category":"Places","sort_order":37,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rosette":{"name":"Rosette","unified":"1F3F5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3f5.png","sheet_x":11,"sheet_y":36,"short_name":"rosette","short_names":["rosette"],"text":null,"texts":null,"category":"Activity","sort_order":37,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bento":{"name":"Bento Box","unified":"1F371","variations":[],"docomo":null,"au":"EABD","softbank":"E34C","google":"FE96F","image":"1f371.png","sheet_x":8,"sheet_y":9,"short_name":"bento","short_names":["bento"],"text":null,"texts":null,"category":"Foods","sort_order":37,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"capricorn":{"name":"Capricorn","unified":"2651","variations":["2651-FE0F"],"docomo":"E64F","au":"E498","softbank":"E248","google":"FE034","image":"2651.png","sheet_x":1,"sheet_y":35,"short_name":"capricorn","short_names":["capricorn"],"text":null,"texts":null,"category":"Symbols","sort_order":37,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bi":{"name":"Regional Indicator Symbol Letters Bi","unified":"1F1E7-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1ee.png","sheet_x":33,"sheet_y":16,"short_name":"flag-bi","short_names":["flag-bi"],"text":null,"texts":null,"category":"Flags","sort_order":37,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"disappointed":{"name":"Disappointed Face","unified":"1F61E","variations":[],"docomo":"E6F2","au":"EAC0","softbank":"E058","google":"FE323","image":"1f61e.png","sheet_x":27,"sheet_y":4,"short_name":"disappointed","short_names":["disappointed"],"text":":(","texts":["):",":(",":-("],"category":"People","sort_order":37,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"scorpion":{"name":"Scorpion","unified":"1F982","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f982.png","sheet_x":32,"sheet_y":17,"short_name":"scorpion","short_names":["scorpion"],"text":null,"texts":null,"category":"Nature","sort_order":37,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hourglass":{"name":"Hourglass","unified":"231B","variations":["231B-FE0F"],"docomo":"E71C","au":"E57B","softbank":null,"google":"FE01C","image":"231b.png","sheet_x":0,"sheet_y":15,"short_name":"hourglass","short_names":["hourglass"],"text":null,"texts":null,"category":"Objects","sort_order":37,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"crab":{"name":"Crab","unified":"1F980","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f980.png","sheet_x":32,"sheet_y":15,"short_name":"crab","short_names":["crab"],"text":null,"texts":null,"category":"Nature","sort_order":38,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"satellite_antenna":{"name":"Satellite Antenna","unified":"1F4E1","variations":[],"docomo":null,"au":"E4A8","softbank":"E14B","google":"FE531","image":"1f4e1.png","sheet_x":21,"sheet_y":36,"short_name":"satellite_antenna","short_names":["satellite_antenna"],"text":null,"texts":null,"category":"Objects","sort_order":38,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"airplane":{"name":"Airplane","unified":"2708","variations":["2708-FE0F"],"docomo":"E662","au":"E4B3","softbank":"E01D","google":"FE7E9","image":"2708.png","sheet_x":3,"sheet_y":7,"short_name":"airplane","short_names":["airplane"],"text":null,"texts":null,"category":"Places","sort_order":38,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"aquarius":{"name":"Aquarius","unified":"2652","variations":["2652-FE0F"],"docomo":"E650","au":"E499","softbank":"E249","google":"FE035","image":"2652.png","sheet_x":1,"sheet_y":36,"short_name":"aquarius","short_names":["aquarius"],"text":null,"texts":null,"category":"Symbols","sort_order":38,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ticket":{"name":"Ticket","unified":"1F3AB","variations":[],"docomo":"E67E","au":"E49E","softbank":"E125","google":"FE807","image":"1f3ab.png","sheet_x":9,"sheet_y":26,"short_name":"ticket","short_names":["ticket"],"text":null,"texts":null,"category":"Activity","sort_order":38,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"worried":{"name":"Worried Face","unified":"1F61F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f61f.png","sheet_x":27,"sheet_y":5,"short_name":"worried","short_names":["worried"],"text":null,"texts":null,"category":"People","sort_order":38,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cv":{"name":"Regional Indicator Symbol Letters Cv","unified":"1F1E8-1F1FB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1fb.png","sheet_x":34,"sheet_y":4,"short_name":"flag-cv","short_names":["flag-cv"],"text":null,"texts":null,"category":"Flags","sort_order":38,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"curry":{"name":"Curry and Rice","unified":"1F35B","variations":[],"docomo":null,"au":"EAB6","softbank":"E341","google":"FE96C","image":"1f35b.png","sheet_x":7,"sheet_y":28,"short_name":"curry","short_names":["curry"],"text":null,"texts":null,"category":"Foods","sort_order":38,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pisces":{"name":"Pisces","unified":"2653","variations":["2653-FE0F"],"docomo":"E651","au":"E49A","softbank":"E24A","google":"FE036","image":"2653.png","sheet_x":1,"sheet_y":37,"short_name":"pisces","short_names":["pisces"],"text":null,"texts":null,"category":"Symbols","sort_order":39,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"airplane_departure":{"name":"Airplane Departure","unified":"1F6EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6eb.png","sheet_x":31,"sheet_y":38,"short_name":"airplane_departure","short_names":["airplane_departure"],"text":null,"texts":null,"category":"Places","sort_order":39,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-kh":{"name":"Regional Indicator Symbol Letters Kh","unified":"1F1F0-1F1ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1ed.png","sheet_x":35,"sheet_y":32,"short_name":"flag-kh","short_names":["flag-kh"],"text":null,"texts":null,"category":"Flags","sort_order":39,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"battery":{"name":"Battery","unified":"1F50B","variations":[],"docomo":null,"au":"E584","softbank":null,"google":"FE4FC","image":"1f50b.png","sheet_x":22,"sheet_y":36,"short_name":"battery","short_names":["battery"],"text":null,"texts":null,"category":"Objects","sort_order":39,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"snake":{"name":"Snake","unified":"1F40D","variations":[],"docomo":null,"au":"EB22","softbank":"E52D","google":"FE1D3","image":"1f40d.png","sheet_x":12,"sheet_y":18,"short_name":"snake","short_names":["snake"],"text":null,"texts":null,"category":"Nature","sort_order":39,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"angry":{"name":"Angry Face","unified":"1F620","variations":[],"docomo":"E6F1","au":"E472","softbank":"E059","google":"FE320","image":"1f620.png","sheet_x":27,"sheet_y":6,"short_name":"angry","short_names":["angry"],"text":null,"texts":[">:(",">:-("],"category":"People","sort_order":39,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rice_ball":{"name":"Rice Ball","unified":"1F359","variations":[],"docomo":"E749","au":"E4D5","softbank":"E342","google":"FE961","image":"1f359.png","sheet_x":7,"sheet_y":26,"short_name":"rice_ball","short_names":["rice_ball"],"text":null,"texts":null,"category":"Foods","sort_order":39,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"admission_tickets":{"name":"Admission Tickets","unified":"1F39F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f39f.png","sheet_x":9,"sheet_y":14,"short_name":"admission_tickets","short_names":["admission_tickets"],"text":null,"texts":null,"category":"Activity","sort_order":39,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"performing_arts":{"name":"Performing Arts","unified":"1F3AD","variations":[],"docomo":null,"au":"E59D","softbank":"E503","google":"FE809","image":"1f3ad.png","sheet_x":9,"sheet_y":28,"short_name":"performing_arts","short_names":["performing_arts"],"text":null,"texts":null,"category":"Activity","sort_order":40,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rage":{"name":"Pouting Face","unified":"1F621","variations":[],"docomo":"E724","au":"EB5D","softbank":"E416","google":"FE33D","image":"1f621.png","sheet_x":27,"sheet_y":7,"short_name":"rage","short_names":["rage"],"text":null,"texts":null,"category":"People","sort_order":40,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rice":{"name":"Cooked Rice","unified":"1F35A","variations":[],"docomo":"E74C","au":"EAB4","softbank":"E33E","google":"FE96A","image":"1f35a.png","sheet_x":7,"sheet_y":27,"short_name":"rice","short_names":["rice"],"text":null,"texts":null,"category":"Foods","sort_order":40,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"airplane_arriving":{"name":"Airplane Arriving","unified":"1F6EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6ec.png","sheet_x":31,"sheet_y":39,"short_name":"airplane_arriving","short_names":["airplane_arriving"],"text":null,"texts":null,"category":"Places","sort_order":40,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"id":{"name":"Squared Id","unified":"1F194","variations":[],"docomo":"E6D8","au":"EA88","softbank":"E229","google":"FEB81","image":"1f194.png","sheet_x":4,"sheet_y":40,"short_name":"id","short_names":["id"],"text":null,"texts":null,"category":"Symbols","sort_order":40,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cm":{"name":"Regional Indicator Symbol Letters Cm","unified":"1F1E8-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1f2.png","sheet_x":33,"sheet_y":39,"short_name":"flag-cm","short_names":["flag-cm"],"text":null,"texts":null,"category":"Flags","sort_order":40,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"turtle":{"name":"Turtle","unified":"1F422","variations":[],"docomo":null,"au":"E5D4","softbank":null,"google":"FE1DC","image":"1f422.png","sheet_x":12,"sheet_y":39,"short_name":"turtle","short_names":["turtle"],"text":null,"texts":null,"category":"Nature","sort_order":40,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"electric_plug":{"name":"Electric Plug","unified":"1F50C","variations":[],"docomo":null,"au":"E589","softbank":null,"google":"FE4FE","image":"1f50c.png","sheet_x":22,"sheet_y":37,"short_name":"electric_plug","short_names":["electric_plug"],"text":null,"texts":null,"category":"Objects","sort_order":40,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tropical_fish":{"name":"Tropical Fish","unified":"1F420","variations":[],"docomo":"E751","au":"EB1D","softbank":"E522","google":"FE1C9","image":"1f420.png","sheet_x":12,"sheet_y":37,"short_name":"tropical_fish","short_names":["tropical_fish"],"text":null,"texts":null,"category":"Nature","sort_order":41,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bulb":{"name":"Electric Light Bulb","unified":"1F4A1","variations":[],"docomo":"E6FB","au":"E476","softbank":"E10F","google":"FEB56","image":"1f4a1.png","sheet_x":20,"sheet_y":8,"short_name":"bulb","short_names":["bulb"],"text":null,"texts":null,"category":"Objects","sort_order":41,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pensive":{"name":"Pensive Face","unified":"1F614","variations":[],"docomo":"E720","au":"EAC0","softbank":"E403","google":"FE340","image":"1f614.png","sheet_x":26,"sheet_y":35,"short_name":"pensive","short_names":["pensive"],"text":null,"texts":null,"category":"People","sort_order":41,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rice_cracker":{"name":"Rice Cracker","unified":"1F358","variations":[],"docomo":null,"au":"EAB3","softbank":"E33D","google":"FE969","image":"1f358.png","sheet_x":7,"sheet_y":25,"short_name":"rice_cracker","short_names":["rice_cracker"],"text":null,"texts":null,"category":"Foods","sort_order":41,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"art":{"name":"Artist Palette","unified":"1F3A8","variations":[],"docomo":"E67B","au":"E59C","softbank":"E502","google":"FE804","image":"1f3a8.png","sheet_x":9,"sheet_y":23,"short_name":"art","short_names":["art"],"text":null,"texts":null,"category":"Activity","sort_order":41,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"boat":{"name":"Sailboat","unified":"26F5","variations":["26F5-FE0F"],"docomo":"E6A3","au":"E4B4","softbank":"E01C","google":"FE7EA","image":"26f5.png","sheet_x":2,"sheet_y":35,"short_name":"boat","short_names":["boat","sailboat"],"text":null,"texts":null,"category":"Places","sort_order":41,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"atom_symbol":{"name":"Atom Symbol","unified":"269B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"269b.png","sheet_x":2,"sheet_y":10,"short_name":"atom_symbol","short_names":["atom_symbol"],"text":null,"texts":null,"category":"Symbols","sort_order":41,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ca":{"name":"Regional Indicator Symbol Letters Ca","unified":"1F1E8-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1e6.png","sheet_x":33,"sheet_y":30,"short_name":"flag-ca","short_names":["flag-ca"],"text":null,"texts":null,"category":"Flags","sort_order":41,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"oden":{"name":"Oden","unified":"1F362","variations":[],"docomo":null,"au":"EAB7","softbank":"E343","google":"FE96D","image":"1f362.png","sheet_x":7,"sheet_y":35,"short_name":"oden","short_names":["oden"],"text":null,"texts":null,"category":"Foods","sort_order":42,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flashlight":{"name":"Electric Torch","unified":"1F526","variations":[],"docomo":"E6FB","au":"E583","softbank":null,"google":"FE4FB","image":"1f526.png","sheet_x":23,"sheet_y":22,"short_name":"flashlight","short_names":["flashlight"],"text":null,"texts":null,"category":"Objects","sort_order":42,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"confused":{"name":"Confused Face","unified":"1F615","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f615.png","sheet_x":26,"sheet_y":36,"short_name":"confused","short_names":["confused"],"text":null,"texts":[":\\",":-\\",":/",":-/"],"category":"People","sort_order":42,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u7a7a":{"name":"Squared Cjk Unified Ideograph-7a7a","unified":"1F233","variations":[],"docomo":"E739","au":"EA8A","softbank":"E22B","google":"FEB2F","image":"1f233.png","sheet_x":5,"sheet_y":11,"short_name":"u7a7a","short_names":["u7a7a"],"text":null,"texts":null,"category":"Symbols","sort_order":42,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"circus_tent":{"name":"Circus Tent","unified":"1F3AA","variations":[],"docomo":"E67D","au":"E59E","softbank":null,"google":"FE806","image":"1f3aa.png","sheet_x":9,"sheet_y":25,"short_name":"circus_tent","short_names":["circus_tent"],"text":null,"texts":null,"category":"Activity","sort_order":42,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"motor_boat":{"name":"Motor Boat","unified":"1F6E5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6e5.png","sheet_x":31,"sheet_y":36,"short_name":"motor_boat","short_names":["motor_boat"],"text":null,"texts":null,"category":"Places","sort_order":42,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ic":{"name":"Regional Indicator Symbol Letters Ic","unified":"1F1EE-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1e8.png","sheet_x":35,"sheet_y":15,"short_name":"flag-ic","short_names":["flag-ic"],"text":null,"texts":null,"category":"Flags","sort_order":42,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"fish":{"name":"Fish","unified":"1F41F","variations":[],"docomo":"E751","au":"E49A","softbank":"E019","google":"FE1BD","image":"1f41f.png","sheet_x":12,"sheet_y":36,"short_name":"fish","short_names":["fish"],"text":null,"texts":null,"category":"Nature","sort_order":42,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"microphone":{"name":"Microphone","unified":"1F3A4","variations":[],"docomo":"E676","au":"E503","softbank":"E03C","google":"FE800","image":"1f3a4.png","sheet_x":9,"sheet_y":19,"short_name":"microphone","short_names":["microphone"],"text":null,"texts":null,"category":"Activity","sort_order":43,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ky":{"name":"Regional Indicator Symbol Letters Ky","unified":"1F1F0-1F1FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1fe.png","sheet_x":35,"sheet_y":39,"short_name":"flag-ky","short_names":["flag-ky"],"text":null,"texts":null,"category":"Flags","sort_order":43,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"candle":{"name":"Candle","unified":"1F56F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f56f.png","sheet_x":24,"sheet_y":35,"short_name":"candle","short_names":["candle"],"text":null,"texts":null,"category":"Objects","sort_order":43,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dango":{"name":"Dango","unified":"1F361","variations":[],"docomo":null,"au":"EAB2","softbank":"E33C","google":"FE968","image":"1f361.png","sheet_x":7,"sheet_y":34,"short_name":"dango","short_names":["dango"],"text":null,"texts":null,"category":"Foods","sort_order":43,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"slightly_frowning_face":{"name":"Slightly Frowning Face","unified":"1F641","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f641.png","sheet_x":27,"sheet_y":39,"short_name":"slightly_frowning_face","short_names":["slightly_frowning_face"],"text":null,"texts":null,"category":"People","sort_order":43,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"blowfish":{"name":"Blowfish","unified":"1F421","variations":[],"docomo":"E751","au":"E4D3","softbank":"E019","google":"FE1D9","image":"1f421.png","sheet_x":12,"sheet_y":38,"short_name":"blowfish","short_names":["blowfish"],"text":null,"texts":null,"category":"Nature","sort_order":43,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u5272":{"name":"Squared Cjk Unified Ideograph-5272","unified":"1F239","variations":[],"docomo":null,"au":"EA86","softbank":"E227","google":"FEB3E","image":"1f239.png","sheet_x":5,"sheet_y":17,"short_name":"u5272","short_names":["u5272"],"text":null,"texts":null,"category":"Symbols","sort_order":43,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"speedboat":{"name":"Speedboat","unified":"1F6A4","variations":[],"docomo":"E6A3","au":"E4B4","softbank":"E135","google":"FE7EE","image":"1f6a4.png","sheet_x":30,"sheet_y":12,"short_name":"speedboat","short_names":["speedboat"],"text":null,"texts":null,"category":"Places","sort_order":43,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"white_frowning_face":{"name":"White Frowning Face","unified":"2639","variations":["2639-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2639.png","sheet_x":1,"sheet_y":24,"short_name":"white_frowning_face","short_names":["white_frowning_face"],"text":null,"texts":null,"category":"People","sort_order":44,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dolphin":{"name":"Dolphin","unified":"1F42C","variations":[],"docomo":null,"au":"EB1B","softbank":"E520","google":"FE1C7","image":"1f42c.png","sheet_x":13,"sheet_y":8,"short_name":"dolphin","short_names":["dolphin","flipper"],"text":null,"texts":null,"category":"Nature","sort_order":44,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"radioactive_sign":{"name":"Radioactive Sign","unified":"2622","variations":["2622-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2622.png","sheet_x":1,"sheet_y":17,"short_name":"radioactive_sign","short_names":["radioactive_sign"],"text":null,"texts":null,"category":"Symbols","sort_order":44,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"headphones":{"name":"Headphone","unified":"1F3A7","variations":[],"docomo":"E67A","au":"E508","softbank":"E30A","google":"FE803","image":"1f3a7.png","sheet_x":9,"sheet_y":22,"short_name":"headphones","short_names":["headphones"],"text":null,"texts":null,"category":"Activity","sort_order":44,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cf":{"name":"Regional Indicator Symbol Letters Cf","unified":"1F1E8-1F1EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1eb.png","sheet_x":33,"sheet_y":33,"short_name":"flag-cf","short_names":["flag-cf"],"text":null,"texts":null,"category":"Flags","sort_order":44,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ferry":{"name":"Ferry","unified":"26F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26f4.png","sheet_x":2,"sheet_y":34,"short_name":"ferry","short_names":["ferry"],"text":null,"texts":null,"category":"Places","sort_order":44,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wastebasket":{"name":"Wastebasket","unified":"1F5D1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5d1.png","sheet_x":25,"sheet_y":39,"short_name":"wastebasket","short_names":["wastebasket"],"text":null,"texts":null,"category":"Objects","sort_order":44,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"shaved_ice":{"name":"Shaved Ice","unified":"1F367","variations":[],"docomo":null,"au":"EAEA","softbank":"E43F","google":"FE971","image":"1f367.png","sheet_x":7,"sheet_y":40,"short_name":"shaved_ice","short_names":["shaved_ice"],"text":null,"texts":null,"category":"Foods","sort_order":44,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"whale":{"name":"Spouting Whale","unified":"1F433","variations":[],"docomo":null,"au":"E470","softbank":"E054","google":"FE1C3","image":"1f433.png","sheet_x":13,"sheet_y":15,"short_name":"whale","short_names":["whale"],"text":null,"texts":null,"category":"Nature","sort_order":45,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"oil_drum":{"name":"Oil Drum","unified":"1F6E2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6e2.png","sheet_x":31,"sheet_y":33,"short_name":"oil_drum","short_names":["oil_drum"],"text":null,"texts":null,"category":"Objects","sort_order":45,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ice_cream":{"name":"Ice Cream","unified":"1F368","variations":[],"docomo":null,"au":"EB4A","softbank":null,"google":"FE977","image":"1f368.png","sheet_x":8,"sheet_y":0,"short_name":"ice_cream","short_names":["ice_cream"],"text":null,"texts":null,"category":"Foods","sort_order":45,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"passenger_ship":{"name":"Passenger Ship","unified":"1F6F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6f3.png","sheet_x":32,"sheet_y":0,"short_name":"passenger_ship","short_names":["passenger_ship"],"text":null,"texts":null,"category":"Places","sort_order":45,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"biohazard_sign":{"name":"Biohazard Sign","unified":"2623","variations":["2623-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2623.png","sheet_x":1,"sheet_y":18,"short_name":"biohazard_sign","short_names":["biohazard_sign"],"text":null,"texts":null,"category":"Symbols","sort_order":45,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"musical_score":{"name":"Musical Score","unified":"1F3BC","variations":[],"docomo":"E6FF","au":"EACC","softbank":"E326","google":"FE81A","image":"1f3bc.png","sheet_x":10,"sheet_y":2,"short_name":"musical_score","short_names":["musical_score"],"text":null,"texts":null,"category":"Activity","sort_order":45,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"persevere":{"name":"Persevering Face","unified":"1F623","variations":[],"docomo":"E72B","au":"EAC2","softbank":"E406","google":"FE33C","image":"1f623.png","sheet_x":27,"sheet_y":9,"short_name":"persevere","short_names":["persevere"],"text":null,"texts":null,"category":"People","sort_order":45,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-td":{"name":"Regional Indicator Symbol Letters Td","unified":"1F1F9-1F1E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1e9.png","sheet_x":38,"sheet_y":8,"short_name":"flag-td","short_names":["flag-td"],"text":null,"texts":null,"category":"Flags","sort_order":45,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"icecream":{"name":"Soft Ice Cream","unified":"1F366","variations":[],"docomo":null,"au":"EAB0","softbank":"E33A","google":"FE966","image":"1f366.png","sheet_x":7,"sheet_y":39,"short_name":"icecream","short_names":["icecream"],"text":null,"texts":null,"category":"Foods","sort_order":46,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"whale2":{"name":"Whale","unified":"1F40B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f40b.png","sheet_x":12,"sheet_y":16,"short_name":"whale2","short_names":["whale2"],"text":null,"texts":null,"category":"Nature","sort_order":46,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"musical_keyboard":{"name":"Musical Keyboard","unified":"1F3B9","variations":[],"docomo":null,"au":"EB40","softbank":null,"google":"FE817","image":"1f3b9.png","sheet_x":9,"sheet_y":40,"short_name":"musical_keyboard","short_names":["musical_keyboard"],"text":null,"texts":null,"category":"Activity","sort_order":46,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"money_with_wings":{"name":"Money with Wings","unified":"1F4B8","variations":[],"docomo":null,"au":"EB5B","softbank":null,"google":"FE4E4","image":"1f4b8.png","sheet_x":20,"sheet_y":36,"short_name":"money_with_wings","short_names":["money_with_wings"],"text":null,"texts":null,"category":"Objects","sort_order":46,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"confounded":{"name":"Confounded Face","unified":"1F616","variations":[],"docomo":"E6F3","au":"EAC3","softbank":"E407","google":"FE33F","image":"1f616.png","sheet_x":26,"sheet_y":37,"short_name":"confounded","short_names":["confounded"],"text":null,"texts":null,"category":"People","sort_order":46,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rocket":{"name":"Rocket","unified":"1F680","variations":[],"docomo":null,"au":"E5C8","softbank":"E10D","google":"FE7ED","image":"1f680.png","sheet_x":29,"sheet_y":12,"short_name":"rocket","short_names":["rocket"],"text":null,"texts":null,"category":"Places","sort_order":46,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mobile_phone_off":{"name":"Mobile Phone off","unified":"1F4F4","variations":[],"docomo":null,"au":"EA91","softbank":"E251","google":"FE83A","image":"1f4f4.png","sheet_x":22,"sheet_y":14,"short_name":"mobile_phone_off","short_names":["mobile_phone_off"],"text":null,"texts":null,"category":"Symbols","sort_order":46,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cl":{"name":"Regional Indicator Symbol Letters Cl","unified":"1F1E8-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1f1.png","sheet_x":33,"sheet_y":38,"short_name":"flag-cl","short_names":["flag-cl"],"text":null,"texts":null,"category":"Flags","sort_order":46,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"satellite":{"name":"Satellite","unified":"1F6F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6f0.png","sheet_x":31,"sheet_y":40,"short_name":"satellite","short_names":["satellite"],"text":null,"texts":null,"category":"Places","sort_order":47,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cn":{"name":"Regional Indicator Symbol Letters Cn","unified":"1F1E8-1F1F3","variations":[],"docomo":null,"au":"EB11","softbank":"E513","google":"FE4ED","image":"1f1e8-1f1f3.png","sheet_x":33,"sheet_y":40,"short_name":"flag-cn","short_names":["flag-cn","cn"],"text":null,"texts":null,"category":"Flags","sort_order":47,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"crocodile":{"name":"Crocodile","unified":"1F40A","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f40a.png","sheet_x":12,"sheet_y":15,"short_name":"crocodile","short_names":["crocodile"],"text":null,"texts":null,"category":"Nature","sort_order":47,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cake":{"name":"Shortcake","unified":"1F370","variations":[],"docomo":"E74A","au":"E4D0","softbank":"E046","google":"FE962","image":"1f370.png","sheet_x":8,"sheet_y":8,"short_name":"cake","short_names":["cake"],"text":null,"texts":null,"category":"Foods","sort_order":47,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dollar":{"name":"Banknote with Dollar Sign","unified":"1F4B5","variations":[],"docomo":"E715","au":"E585","softbank":"E12F","google":"FE4E3","image":"1f4b5.png","sheet_x":20,"sheet_y":33,"short_name":"dollar","short_names":["dollar"],"text":null,"texts":null,"category":"Objects","sort_order":47,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"vibration_mode":{"name":"Vibration Mode","unified":"1F4F3","variations":[],"docomo":null,"au":"EA90","softbank":"E250","google":"FE839","image":"1f4f3.png","sheet_x":22,"sheet_y":13,"short_name":"vibration_mode","short_names":["vibration_mode"],"text":null,"texts":null,"category":"Symbols","sort_order":47,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tired_face":{"name":"Tired Face","unified":"1F62B","variations":[],"docomo":"E72B","au":"E474","softbank":"E406","google":"FE346","image":"1f62b.png","sheet_x":27,"sheet_y":17,"short_name":"tired_face","short_names":["tired_face"],"text":null,"texts":null,"category":"People","sort_order":47,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"saxophone":{"name":"Saxophone","unified":"1F3B7","variations":[],"docomo":null,"au":null,"softbank":"E040","google":"FE815","image":"1f3b7.png","sheet_x":9,"sheet_y":38,"short_name":"saxophone","short_names":["saxophone"],"text":null,"texts":null,"category":"Activity","sort_order":47,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cx":{"name":"Regional Indicator Symbol Letters Cx","unified":"1F1E8-1F1FD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1fd.png","sheet_x":34,"sheet_y":6,"short_name":"flag-cx","short_names":["flag-cx"],"text":null,"texts":null,"category":"Flags","sort_order":48,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"seat":{"name":"Seat","unified":"1F4BA","variations":[],"docomo":"E6B2","au":null,"softbank":"E11F","google":"FE537","image":"1f4ba.png","sheet_x":20,"sheet_y":38,"short_name":"seat","short_names":["seat"],"text":null,"texts":null,"category":"Places","sort_order":48,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"trumpet":{"name":"Trumpet","unified":"1F3BA","variations":[],"docomo":null,"au":"EADC","softbank":"E042","google":"FE818","image":"1f3ba.png","sheet_x":10,"sheet_y":0,"short_name":"trumpet","short_names":["trumpet"],"text":null,"texts":null,"category":"Activity","sort_order":48,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"yen":{"name":"Banknote with Yen Sign","unified":"1F4B4","variations":[],"docomo":"E6D6","au":"E57D","softbank":null,"google":"FE4E2","image":"1f4b4.png","sheet_x":20,"sheet_y":32,"short_name":"yen","short_names":["yen"],"text":null,"texts":null,"category":"Objects","sort_order":48,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"leopard":{"name":"Leopard","unified":"1F406","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f406.png","sheet_x":12,"sheet_y":11,"short_name":"leopard","short_names":["leopard"],"text":null,"texts":null,"category":"Nature","sort_order":48,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u6709":{"name":"Squared Cjk Unified Ideograph-6709","unified":"1F236","variations":[],"docomo":null,"au":null,"softbank":"E215","google":"FEB39","image":"1f236.png","sheet_x":5,"sheet_y":14,"short_name":"u6709","short_names":["u6709"],"text":null,"texts":null,"category":"Symbols","sort_order":48,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"birthday":{"name":"Birthday Cake","unified":"1F382","variations":[],"docomo":"E686","au":"E5A0","softbank":"E34B","google":"FE511","image":"1f382.png","sheet_x":8,"sheet_y":26,"short_name":"birthday","short_names":["birthday"],"text":null,"texts":null,"category":"Foods","sort_order":48,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"weary":{"name":"Weary Face","unified":"1F629","variations":[],"docomo":"E6F3","au":"EB67","softbank":"E403","google":"FE321","image":"1f629.png","sheet_x":27,"sheet_y":15,"short_name":"weary","short_names":["weary"],"text":null,"texts":null,"category":"People","sort_order":48,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tiger2":{"name":"Tiger","unified":"1F405","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f405.png","sheet_x":12,"sheet_y":10,"short_name":"tiger2","short_names":["tiger2"],"text":null,"texts":null,"category":"Nature","sort_order":49,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cc":{"name":"Regional Indicator Symbol Letters Cc","unified":"1F1E8-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1e8.png","sheet_x":33,"sheet_y":31,"short_name":"flag-cc","short_names":["flag-cc"],"text":null,"texts":null,"category":"Flags","sort_order":49,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u7121":{"name":"Squared Cjk Unified Ideograph-7121","unified":"1F21A","variations":["1F21A-FE0F"],"docomo":null,"au":null,"softbank":"E216","google":"FEB3A","image":"1f21a.png","sheet_x":5,"sheet_y":8,"short_name":"u7121","short_names":["u7121"],"text":null,"texts":null,"category":"Symbols","sort_order":49,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"euro":{"name":"Banknote with Euro Sign","unified":"1F4B6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4b6.png","sheet_x":20,"sheet_y":34,"short_name":"euro","short_names":["euro"],"text":null,"texts":null,"category":"Objects","sort_order":49,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"custard":{"name":"Custard","unified":"1F36E","variations":[],"docomo":null,"au":"EB56","softbank":null,"google":"FE97D","image":"1f36e.png","sheet_x":8,"sheet_y":6,"short_name":"custard","short_names":["custard"],"text":null,"texts":null,"category":"Foods","sort_order":49,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"triumph":{"name":"Face with Look of Triumph","unified":"1F624","variations":[],"docomo":"E753","au":"EAC1","softbank":"E404","google":"FE328","image":"1f624.png","sheet_x":27,"sheet_y":10,"short_name":"triumph","short_names":["triumph"],"text":null,"texts":null,"category":"People","sort_order":49,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"anchor":{"name":"Anchor","unified":"2693","variations":["2693-FE0F"],"docomo":"E661","au":"E4A9","softbank":"E202","google":"FE4C1","image":"2693.png","sheet_x":2,"sheet_y":5,"short_name":"anchor","short_names":["anchor"],"text":null,"texts":null,"category":"Places","sort_order":49,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"guitar":{"name":"Guitar","unified":"1F3B8","variations":[],"docomo":null,"au":"E506","softbank":"E041","google":"FE816","image":"1f3b8.png","sheet_x":9,"sheet_y":39,"short_name":"guitar","short_names":["guitar"],"text":null,"texts":null,"category":"Activity","sort_order":49,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"violin":{"name":"Violin","unified":"1F3BB","variations":[],"docomo":null,"au":"E507","softbank":null,"google":"FE819","image":"1f3bb.png","sheet_x":10,"sheet_y":1,"short_name":"violin","short_names":["violin"],"text":null,"texts":null,"category":"Activity","sort_order":50,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"construction":{"name":"Construction Sign","unified":"1F6A7","variations":[],"docomo":null,"au":"E5D7","softbank":"E137","google":"FE7F8","image":"1f6a7.png","sheet_x":30,"sheet_y":15,"short_name":"construction","short_names":["construction"],"text":null,"texts":null,"category":"Places","sort_order":50,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"water_buffalo":{"name":"Water Buffalo","unified":"1F403","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f403.png","sheet_x":12,"sheet_y":8,"short_name":"water_buffalo","short_names":["water_buffalo"],"text":null,"texts":null,"category":"Nature","sort_order":50,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"candy":{"name":"Candy","unified":"1F36C","variations":[],"docomo":null,"au":"EB4E","softbank":null,"google":"FE97B","image":"1f36c.png","sheet_x":8,"sheet_y":4,"short_name":"candy","short_names":["candy"],"text":null,"texts":null,"category":"Foods","sort_order":50,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pound":{"name":"Banknote with Pound Sign","unified":"1F4B7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4b7.png","sheet_x":20,"sheet_y":35,"short_name":"pound","short_names":["pound"],"text":null,"texts":null,"category":"Objects","sort_order":50,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-co":{"name":"Regional Indicator Symbol Letters Co","unified":"1F1E8-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1f4.png","sheet_x":34,"sheet_y":0,"short_name":"flag-co","short_names":["flag-co"],"text":null,"texts":null,"category":"Flags","sort_order":50,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"open_mouth":{"name":"Face with Open Mouth","unified":"1F62E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f62e.png","sheet_x":27,"sheet_y":20,"short_name":"open_mouth","short_names":["open_mouth"],"text":null,"texts":[":o",":-o",":O",":-O"],"category":"People","sort_order":50,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u7533":{"name":"Squared Cjk Unified Ideograph-7533","unified":"1F238","variations":[],"docomo":null,"au":null,"softbank":"E218","google":"FEB3C","image":"1f238.png","sheet_x":5,"sheet_y":16,"short_name":"u7533","short_names":["u7533"],"text":null,"texts":null,"category":"Symbols","sort_order":50,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ox":{"name":"Ox","unified":"1F402","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f402.png","sheet_x":12,"sheet_y":7,"short_name":"ox","short_names":["ox"],"text":null,"texts":null,"category":"Nature","sort_order":51,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"scream":{"name":"Face Screaming in Fear","unified":"1F631","variations":[],"docomo":"E757","au":"E5C5","softbank":"E107","google":"FE341","image":"1f631.png","sheet_x":27,"sheet_y":23,"short_name":"scream","short_names":["scream"],"text":null,"texts":null,"category":"People","sort_order":51,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-km":{"name":"Regional Indicator Symbol Letters Km","unified":"1F1F0-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1f2.png","sheet_x":35,"sheet_y":34,"short_name":"flag-km","short_names":["flag-km"],"text":null,"texts":null,"category":"Flags","sort_order":51,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clapper":{"name":"Clapper Board","unified":"1F3AC","variations":[],"docomo":"E6AC","au":"E4BE","softbank":"E324","google":"FE808","image":"1f3ac.png","sheet_x":9,"sheet_y":27,"short_name":"clapper","short_names":["clapper"],"text":null,"texts":null,"category":"Activity","sort_order":51,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u55b6":{"name":"Squared Cjk Unified Ideograph-55b6","unified":"1F23A","variations":[],"docomo":null,"au":"EA8C","softbank":"E22D","google":"FEB41","image":"1f23a.png","sheet_x":5,"sheet_y":18,"short_name":"u55b6","short_names":["u55b6"],"text":null,"texts":null,"category":"Symbols","sort_order":51,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fuelpump":{"name":"Fuel Pump","unified":"26FD","variations":["26FD-FE0F"],"docomo":"E66B","au":"E571","softbank":"E03A","google":"FE7F5","image":"26fd.png","sheet_x":3,"sheet_y":4,"short_name":"fuelpump","short_names":["fuelpump"],"text":null,"texts":null,"category":"Places","sort_order":51,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"moneybag":{"name":"Money Bag","unified":"1F4B0","variations":[],"docomo":"E715","au":"E4C7","softbank":"E12F","google":"FE4DD","image":"1f4b0.png","sheet_x":20,"sheet_y":28,"short_name":"moneybag","short_names":["moneybag"],"text":null,"texts":null,"category":"Objects","sort_order":51,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lollipop":{"name":"Lollipop","unified":"1F36D","variations":[],"docomo":null,"au":"EB4F","softbank":null,"google":"FE97C","image":"1f36d.png","sheet_x":8,"sheet_y":5,"short_name":"lollipop","short_names":["lollipop"],"text":null,"texts":null,"category":"Foods","sort_order":51,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"credit_card":{"name":"Credit Card","unified":"1F4B3","variations":[],"docomo":null,"au":"E57C","softbank":null,"google":"FE4E1","image":"1f4b3.png","sheet_x":20,"sheet_y":31,"short_name":"credit_card","short_names":["credit_card"],"text":null,"texts":null,"category":"Objects","sort_order":52,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cow2":{"name":"Cow","unified":"1F404","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f404.png","sheet_x":12,"sheet_y":9,"short_name":"cow2","short_names":["cow2"],"text":null,"texts":null,"category":"Nature","sort_order":52,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"video_game":{"name":"Video Game","unified":"1F3AE","variations":[],"docomo":"E68B","au":"E4C6","softbank":null,"google":"FE80A","image":"1f3ae.png","sheet_x":9,"sheet_y":29,"short_name":"video_game","short_names":["video_game"],"text":null,"texts":null,"category":"Activity","sort_order":52,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"busstop":{"name":"Bus Stop","unified":"1F68F","variations":[],"docomo":null,"au":"E4A7","softbank":"E150","google":"FE7E7","image":"1f68f.png","sheet_x":29,"sheet_y":27,"short_name":"busstop","short_names":["busstop"],"text":null,"texts":null,"category":"Places","sort_order":52,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"chocolate_bar":{"name":"Chocolate Bar","unified":"1F36B","variations":[],"docomo":null,"au":"EB4D","softbank":null,"google":"FE97A","image":"1f36b.png","sheet_x":8,"sheet_y":3,"short_name":"chocolate_bar","short_names":["chocolate_bar"],"text":null,"texts":null,"category":"Foods","sort_order":52,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u6708":{"name":"Squared Cjk Unified Ideograph-6708","unified":"1F237","variations":["1F237-FE0F"],"docomo":null,"au":null,"softbank":"E217","google":"FEB3B","image":"1f237.png","sheet_x":5,"sheet_y":15,"short_name":"u6708","short_names":["u6708"],"text":null,"texts":null,"category":"Symbols","sort_order":52,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fearful":{"name":"Fearful Face","unified":"1F628","variations":[],"docomo":"E757","au":"EAC6","softbank":"E40B","google":"FE33B","image":"1f628.png","sheet_x":27,"sheet_y":14,"short_name":"fearful","short_names":["fearful"],"text":null,"texts":null,"category":"People","sort_order":52,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cg":{"name":"Regional Indicator Symbol Letters Cg","unified":"1F1E8-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1ec.png","sheet_x":33,"sheet_y":34,"short_name":"flag-cg","short_names":["flag-cg"],"text":null,"texts":null,"category":"Flags","sort_order":52,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dromedary_camel":{"name":"Dromedary Camel","unified":"1F42A","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f42a.png","sheet_x":13,"sheet_y":6,"short_name":"dromedary_camel","short_names":["dromedary_camel"],"text":null,"texts":null,"category":"Nature","sort_order":53,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"popcorn":{"name":"Popcorn","unified":"1F37F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f37f.png","sheet_x":8,"sheet_y":23,"short_name":"popcorn","short_names":["popcorn"],"text":null,"texts":null,"category":"Foods","sort_order":53,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"eight_pointed_black_star":{"name":"Eight Pointed Black Star","unified":"2734","variations":["2734-FE0F"],"docomo":"E6F8","au":"E479","softbank":"E205","google":"FEB61","image":"2734.png","sheet_x":4,"sheet_y":0,"short_name":"eight_pointed_black_star","short_names":["eight_pointed_black_star"],"text":null,"texts":null,"category":"Symbols","sort_order":53,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"gem":{"name":"Gem Stone","unified":"1F48E","variations":[],"docomo":"E71B","au":"E514","softbank":"E035","google":"FE826","image":"1f48e.png","sheet_x":19,"sheet_y":30,"short_name":"gem","short_names":["gem"],"text":null,"texts":null,"category":"Objects","sort_order":53,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"space_invader":{"name":"Alien Monster","unified":"1F47E","variations":[],"docomo":null,"au":"E4EC","softbank":"E12B","google":"FE1B1","image":"1f47e.png","sheet_x":18,"sheet_y":25,"short_name":"space_invader","short_names":["space_invader"],"text":null,"texts":null,"category":"Activity","sort_order":53,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"vertical_traffic_light":{"name":"Vertical Traffic Light","unified":"1F6A6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6a6.png","sheet_x":30,"sheet_y":14,"short_name":"vertical_traffic_light","short_names":["vertical_traffic_light"],"text":null,"texts":null,"category":"Places","sort_order":53,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cold_sweat":{"name":"Face with Open Mouth and Cold Sweat","unified":"1F630","variations":[],"docomo":"E723","au":"EACB","softbank":"E40F","google":"FE325","image":"1f630.png","sheet_x":27,"sheet_y":22,"short_name":"cold_sweat","short_names":["cold_sweat"],"text":null,"texts":null,"category":"People","sort_order":53,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cd":{"name":"Regional Indicator Symbol Letters Cd","unified":"1F1E8-1F1E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1e9.png","sheet_x":33,"sheet_y":32,"short_name":"flag-cd","short_names":["flag-cd"],"text":null,"texts":null,"category":"Flags","sort_order":53,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ck":{"name":"Regional Indicator Symbol Letters Ck","unified":"1F1E8-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1f0.png","sheet_x":33,"sheet_y":37,"short_name":"flag-ck","short_names":["flag-ck"],"text":null,"texts":null,"category":"Flags","sort_order":54,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hushed":{"name":"Hushed Face","unified":"1F62F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f62f.png","sheet_x":27,"sheet_y":21,"short_name":"hushed","short_names":["hushed"],"text":null,"texts":null,"category":"People","sort_order":54,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"traffic_light":{"name":"Horizontal Traffic Light","unified":"1F6A5","variations":[],"docomo":"E66D","au":"E46A","softbank":"E14E","google":"FE7F7","image":"1f6a5.png","sheet_x":30,"sheet_y":13,"short_name":"traffic_light","short_names":["traffic_light"],"text":null,"texts":null,"category":"Places","sort_order":54,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"doughnut":{"name":"Doughnut","unified":"1F369","variations":[],"docomo":null,"au":"EB4B","softbank":null,"google":"FE978","image":"1f369.png","sheet_x":8,"sheet_y":1,"short_name":"doughnut","short_names":["doughnut"],"text":null,"texts":null,"category":"Foods","sort_order":54,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"camel":{"name":"Bactrian Camel","unified":"1F42B","variations":[],"docomo":null,"au":"EB25","softbank":"E530","google":"FE1D6","image":"1f42b.png","sheet_x":13,"sheet_y":7,"short_name":"camel","short_names":["camel"],"text":null,"texts":null,"category":"Nature","sort_order":54,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dart":{"name":"Direct Hit","unified":"1F3AF","variations":[],"docomo":null,"au":"E4C5","softbank":"E130","google":"FE80C","image":"1f3af.png","sheet_x":9,"sheet_y":30,"short_name":"dart","short_names":["dart"],"text":null,"texts":null,"category":"Activity","sort_order":54,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"scales":{"name":"Scales","unified":"2696","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2696.png","sheet_x":2,"sheet_y":7,"short_name":"scales","short_names":["scales"],"text":null,"texts":null,"category":"Objects","sort_order":54,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"vs":{"name":"Squared Vs","unified":"1F19A","variations":[],"docomo":null,"au":"E5D2","softbank":"E12E","google":"FEB32","image":"1f19a.png","sheet_x":5,"sheet_y":5,"short_name":"vs","short_names":["vs"],"text":null,"texts":null,"category":"Symbols","sort_order":54,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"elephant":{"name":"Elephant","unified":"1F418","variations":[],"docomo":null,"au":"EB1F","softbank":"E526","google":"FE1CC","image":"1f418.png","sheet_x":12,"sheet_y":29,"short_name":"elephant","short_names":["elephant"],"text":null,"texts":null,"category":"Nature","sort_order":55,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wrench":{"name":"Wrench","unified":"1F527","variations":[],"docomo":"E718","au":"E587","softbank":null,"google":"FE4C9","image":"1f527.png","sheet_x":23,"sheet_y":23,"short_name":"wrench","short_names":["wrench"],"text":null,"texts":null,"category":"Objects","sort_order":55,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"game_die":{"name":"Game Die","unified":"1F3B2","variations":[],"docomo":null,"au":"E4C8","softbank":null,"google":"FE80F","image":"1f3b2.png","sheet_x":9,"sheet_y":33,"short_name":"game_die","short_names":["game_die"],"text":null,"texts":null,"category":"Activity","sort_order":55,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"accept":{"name":"Circled Ideograph Accept","unified":"1F251","variations":[],"docomo":null,"au":"EB01","softbank":null,"google":"FEB50","image":"1f251.png","sheet_x":5,"sheet_y":20,"short_name":"accept","short_names":["accept"],"text":null,"texts":null,"category":"Symbols","sort_order":55,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cookie":{"name":"Cookie","unified":"1F36A","variations":[],"docomo":null,"au":"EB4C","softbank":null,"google":"FE979","image":"1f36a.png","sheet_x":8,"sheet_y":2,"short_name":"cookie","short_names":["cookie"],"text":null,"texts":null,"category":"Foods","sort_order":55,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cr":{"name":"Regional Indicator Symbol Letters Cr","unified":"1F1E8-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1f7.png","sheet_x":34,"sheet_y":2,"short_name":"flag-cr","short_names":["flag-cr"],"text":null,"texts":null,"category":"Flags","sort_order":55,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"checkered_flag":{"name":"Chequered Flag","unified":"1F3C1","variations":[],"docomo":"E659","au":"E4B9","softbank":"E132","google":"FE7D7","image":"1f3c1.png","sheet_x":10,"sheet_y":7,"short_name":"checkered_flag","short_names":["checkered_flag"],"text":null,"texts":null,"category":"Places","sort_order":55,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"frowning":{"name":"Frowning Face with Open Mouth","unified":"1F626","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f626.png","sheet_x":27,"sheet_y":12,"short_name":"frowning","short_names":["frowning"],"text":null,"texts":null,"category":"People","sort_order":55,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"white_flower":{"name":"White Flower","unified":"1F4AE","variations":[],"docomo":null,"au":"E4F0","softbank":null,"google":"FEB7A","image":"1f4ae.png","sheet_x":20,"sheet_y":26,"short_name":"white_flower","short_names":["white_flower"],"text":null,"texts":null,"category":"Symbols","sort_order":56,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ship":{"name":"Ship","unified":"1F6A2","variations":[],"docomo":"E661","au":"EA82","softbank":"E202","google":"FE7E8","image":"1f6a2.png","sheet_x":30,"sheet_y":5,"short_name":"ship","short_names":["ship"],"text":null,"texts":null,"category":"Places","sort_order":56,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hammer":{"name":"Hammer","unified":"1F528","variations":[],"docomo":null,"au":"E5CB","softbank":"E116","google":"FE4CA","image":"1f528.png","sheet_x":23,"sheet_y":24,"short_name":"hammer","short_names":["hammer"],"text":null,"texts":null,"category":"Objects","sort_order":56,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-hr":{"name":"Regional Indicator Symbol Letters Hr","unified":"1F1ED-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ed-1f1f7.png","sheet_x":35,"sheet_y":12,"short_name":"flag-hr","short_names":["flag-hr"],"text":null,"texts":null,"category":"Flags","sort_order":56,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"anguished":{"name":"Anguished Face","unified":"1F627","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f627.png","sheet_x":27,"sheet_y":13,"short_name":"anguished","short_names":["anguished"],"text":null,"texts":["D:"],"category":"People","sort_order":56,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"goat":{"name":"Goat","unified":"1F410","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f410.png","sheet_x":12,"sheet_y":21,"short_name":"goat","short_names":["goat"],"text":null,"texts":null,"category":"Nature","sort_order":56,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"beer":{"name":"Beer Mug","unified":"1F37A","variations":[],"docomo":"E672","au":"E4C3","softbank":"E047","google":"FE983","image":"1f37a.png","sheet_x":8,"sheet_y":18,"short_name":"beer","short_names":["beer"],"text":null,"texts":null,"category":"Foods","sort_order":56,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"slot_machine":{"name":"Slot Machine","unified":"1F3B0","variations":[],"docomo":null,"au":"E46E","softbank":"E133","google":"FE80D","image":"1f3b0.png","sheet_x":9,"sheet_y":31,"short_name":"slot_machine","short_names":["slot_machine"],"text":null,"texts":null,"category":"Activity","sort_order":56,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cu":{"name":"Regional Indicator Symbol Letters Cu","unified":"1F1E8-1F1FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1fa.png","sheet_x":34,"sheet_y":3,"short_name":"flag-cu","short_names":["flag-cu"],"text":null,"texts":null,"category":"Flags","sort_order":57,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hammer_and_pick":{"name":"Hammer and Pick","unified":"2692","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2692.png","sheet_x":2,"sheet_y":4,"short_name":"hammer_and_pick","short_names":["hammer_and_pick"],"text":null,"texts":null,"category":"Objects","sort_order":57,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"beers":{"name":"Clinking Beer Mugs","unified":"1F37B","variations":[],"docomo":"E672","au":"EA98","softbank":"E30C","google":"FE987","image":"1f37b.png","sheet_x":8,"sheet_y":19,"short_name":"beers","short_names":["beers"],"text":null,"texts":null,"category":"Foods","sort_order":57,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ferris_wheel":{"name":"Ferris Wheel","unified":"1F3A1","variations":[],"docomo":null,"au":"E46D","softbank":"E124","google":"FE7FD","image":"1f3a1.png","sheet_x":9,"sheet_y":16,"short_name":"ferris_wheel","short_names":["ferris_wheel"],"text":null,"texts":null,"category":"Places","sort_order":57,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ideograph_advantage":{"name":"Circled Ideograph Advantage","unified":"1F250","variations":[],"docomo":null,"au":"E4F7","softbank":"E226","google":"FEB3D","image":"1f250.png","sheet_x":5,"sheet_y":19,"short_name":"ideograph_advantage","short_names":["ideograph_advantage"],"text":null,"texts":null,"category":"Symbols","sort_order":57,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ram":{"name":"Ram","unified":"1F40F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f40f.png","sheet_x":12,"sheet_y":20,"short_name":"ram","short_names":["ram"],"text":null,"texts":null,"category":"Nature","sort_order":57,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cry":{"name":"Crying Face","unified":"1F622","variations":[],"docomo":"E72E","au":"EB69","softbank":"E413","google":"FE339","image":"1f622.png","sheet_x":27,"sheet_y":8,"short_name":"cry","short_names":["cry"],"text":":'(","texts":[":'("],"category":"People","sort_order":57,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bowling":{"name":"Bowling","unified":"1F3B3","variations":[],"docomo":null,"au":"EB43","softbank":null,"google":"FE810","image":"1f3b3.png","sheet_x":9,"sheet_y":34,"short_name":"bowling","short_names":["bowling"],"text":null,"texts":null,"category":"Activity","sort_order":57,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cw":{"name":"Regional Indicator Symbol Letters Cw","unified":"1F1E8-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1fc.png","sheet_x":34,"sheet_y":5,"short_name":"flag-cw","short_names":["flag-cw"],"text":null,"texts":null,"category":"Flags","sort_order":58,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"secret":{"name":"Circled Ideograph Secret","unified":"3299","variations":["3299-FE0F"],"docomo":"E734","au":"E4F1","softbank":"E315","google":"FEB2B","image":"3299.png","sheet_x":4,"sheet_y":29,"short_name":"secret","short_names":["secret"],"text":null,"texts":null,"category":"Symbols","sort_order":58,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"disappointed_relieved":{"name":"Disappointed but Relieved Face","unified":"1F625","variations":[],"docomo":"E723","au":"E5C6","softbank":"E401","google":"FE345","image":"1f625.png","sheet_x":27,"sheet_y":11,"short_name":"disappointed_relieved","short_names":["disappointed_relieved"],"text":null,"texts":null,"category":"People","sort_order":58,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hammer_and_wrench":{"name":"Hammer and Wrench","unified":"1F6E0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6e0.png","sheet_x":31,"sheet_y":31,"short_name":"hammer_and_wrench","short_names":["hammer_and_wrench"],"text":null,"texts":null,"category":"Objects","sort_order":58,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"roller_coaster":{"name":"Roller Coaster","unified":"1F3A2","variations":[],"docomo":null,"au":"EAE2","softbank":"E433","google":"FE7FE","image":"1f3a2.png","sheet_x":9,"sheet_y":17,"short_name":"roller_coaster","short_names":["roller_coaster"],"text":null,"texts":null,"category":"Places","sort_order":58,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sheep":{"name":"Sheep","unified":"1F411","variations":[],"docomo":null,"au":"E48F","softbank":"E529","google":"FE1CF","image":"1f411.png","sheet_x":12,"sheet_y":22,"short_name":"sheep","short_names":["sheep"],"text":null,"texts":null,"category":"Nature","sort_order":58,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wine_glass":{"name":"Wine Glass","unified":"1F377","variations":[],"docomo":"E756","au":"E4C1","softbank":"E044","google":"FE986","image":"1f377.png","sheet_x":8,"sheet_y":15,"short_name":"wine_glass","short_names":["wine_glass"],"text":null,"texts":null,"category":"Foods","sort_order":58,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"congratulations":{"name":"Circled Ideograph Congratulation","unified":"3297","variations":["3297-FE0F"],"docomo":null,"au":"EA99","softbank":"E30D","google":"FEB43","image":"3297.png","sheet_x":4,"sheet_y":28,"short_name":"congratulations","short_names":["congratulations"],"text":null,"texts":null,"category":"Symbols","sort_order":59,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sleepy":{"name":"Sleepy Face","unified":"1F62A","variations":[],"docomo":"E701","au":"EAC4","softbank":"E408","google":"FE342","image":"1f62a.png","sheet_x":27,"sheet_y":16,"short_name":"sleepy","short_names":["sleepy"],"text":null,"texts":null,"category":"People","sort_order":59,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"carousel_horse":{"name":"Carousel Horse","unified":"1F3A0","variations":[],"docomo":"E679","au":null,"softbank":null,"google":"FE7FC","image":"1f3a0.png","sheet_x":9,"sheet_y":15,"short_name":"carousel_horse","short_names":["carousel_horse"],"text":null,"texts":null,"category":"Places","sort_order":59,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pick":{"name":"Pick","unified":"26CF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26cf.png","sheet_x":2,"sheet_y":24,"short_name":"pick","short_names":["pick"],"text":null,"texts":null,"category":"Objects","sort_order":59,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cy":{"name":"Regional Indicator Symbol Letters Cy","unified":"1F1E8-1F1FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1fe.png","sheet_x":34,"sheet_y":7,"short_name":"flag-cy","short_names":["flag-cy"],"text":null,"texts":null,"category":"Flags","sort_order":59,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cocktail":{"name":"Cocktail Glass","unified":"1F378","variations":[],"docomo":"E671","au":"E4C2","softbank":"E044","google":"FE982","image":"1f378.png","sheet_x":8,"sheet_y":16,"short_name":"cocktail","short_names":["cocktail"],"text":null,"texts":null,"category":"Foods","sort_order":59,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"racehorse":{"name":"Horse","unified":"1F40E","variations":[],"docomo":"E754","au":"E4D8","softbank":"E134","google":"FE7DC","image":"1f40e.png","sheet_x":12,"sheet_y":19,"short_name":"racehorse","short_names":["racehorse"],"text":null,"texts":null,"category":"Nature","sort_order":59,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cz":{"name":"Regional Indicator Symbol Letters Cz","unified":"1F1E8-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1ff.png","sheet_x":34,"sheet_y":8,"short_name":"flag-cz","short_names":["flag-cz"],"text":null,"texts":null,"category":"Flags","sort_order":60,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tropical_drink":{"name":"Tropical Drink","unified":"1F379","variations":[],"docomo":"E671","au":"EB3E","softbank":"E044","google":"FE988","image":"1f379.png","sheet_x":8,"sheet_y":17,"short_name":"tropical_drink","short_names":["tropical_drink"],"text":null,"texts":null,"category":"Foods","sort_order":60,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u5408":{"name":"Squared Cjk Unified Ideograph-5408","unified":"1F234","variations":[],"docomo":"E73A","au":null,"softbank":null,"google":"FEB30","image":"1f234.png","sheet_x":5,"sheet_y":12,"short_name":"u5408","short_names":["u5408"],"text":null,"texts":null,"category":"Symbols","sort_order":60,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"nut_and_bolt":{"name":"Nut and Bolt","unified":"1F529","variations":[],"docomo":null,"au":"E581","softbank":null,"google":"FE4CB","image":"1f529.png","sheet_x":23,"sheet_y":25,"short_name":"nut_and_bolt","short_names":["nut_and_bolt"],"text":null,"texts":null,"category":"Objects","sort_order":60,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sweat":{"name":"Face with Cold Sweat","unified":"1F613","variations":[],"docomo":"E723","au":"E5C6","softbank":"E108","google":"FE344","image":"1f613.png","sheet_x":26,"sheet_y":34,"short_name":"sweat","short_names":["sweat"],"text":null,"texts":null,"category":"People","sort_order":60,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"building_construction":{"name":"Building Construction","unified":"1F3D7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d7.png","sheet_x":11,"sheet_y":8,"short_name":"building_construction","short_names":["building_construction"],"text":null,"texts":null,"category":"Places","sort_order":60,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pig2":{"name":"Pig","unified":"1F416","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f416.png","sheet_x":12,"sheet_y":27,"short_name":"pig2","short_names":["pig2"],"text":null,"texts":null,"category":"Nature","sort_order":60,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sob":{"name":"Loudly Crying Face","unified":"1F62D","variations":[],"docomo":"E72D","au":"E473","softbank":"E411","google":"FE33A","image":"1f62d.png","sheet_x":27,"sheet_y":19,"short_name":"sob","short_names":["sob"],"text":":'(","texts":null,"category":"People","sort_order":61,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u6e80":{"name":"Squared Cjk Unified Ideograph-6e80","unified":"1F235","variations":[],"docomo":"E73B","au":"EA89","softbank":"E22A","google":"FEB31","image":"1f235.png","sheet_x":5,"sheet_y":13,"short_name":"u6e80","short_names":["u6e80"],"text":null,"texts":null,"category":"Symbols","sort_order":61,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-dk":{"name":"Regional Indicator Symbol Letters Dk","unified":"1F1E9-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e9-1f1f0.png","sheet_x":34,"sheet_y":12,"short_name":"flag-dk","short_names":["flag-dk"],"text":null,"texts":null,"category":"Flags","sort_order":61,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"gear":{"name":"Gear","unified":"2699","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2699.png","sheet_x":2,"sheet_y":9,"short_name":"gear","short_names":["gear"],"text":null,"texts":null,"category":"Objects","sort_order":61,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rat":{"name":"Rat","unified":"1F400","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f400.png","sheet_x":12,"sheet_y":5,"short_name":"rat","short_names":["rat"],"text":null,"texts":null,"category":"Nature","sort_order":61,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"champagne":{"name":"Bottle with Popping Cork","unified":"1F37E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f37e.png","sheet_x":8,"sheet_y":22,"short_name":"champagne","short_names":["champagne"],"text":null,"texts":null,"category":"Foods","sort_order":61,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"foggy":{"name":"Foggy","unified":"1F301","variations":[],"docomo":"E644","au":"E598","softbank":null,"google":"FE006","image":"1f301.png","sheet_x":5,"sheet_y":22,"short_name":"foggy","short_names":["foggy"],"text":null,"texts":null,"category":"Places","sort_order":61,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tokyo_tower":{"name":"Tokyo Tower","unified":"1F5FC","variations":[],"docomo":null,"au":"E4C0","softbank":"E509","google":"FE4C4","image":"1f5fc.png","sheet_x":26,"sheet_y":11,"short_name":"tokyo_tower","short_names":["tokyo_tower"],"text":null,"texts":null,"category":"Places","sort_order":62,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dizzy_face":{"name":"Dizzy Face","unified":"1F635","variations":[],"docomo":"E6F4","au":"E5AE","softbank":"E406","google":"FE324","image":"1f635.png","sheet_x":27,"sheet_y":27,"short_name":"dizzy_face","short_names":["dizzy_face"],"text":null,"texts":null,"category":"People","sort_order":62,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sake":{"name":"Sake Bottle and Cup","unified":"1F376","variations":[],"docomo":"E74B","au":"EA97","softbank":"E30B","google":"FE985","image":"1f376.png","sheet_x":8,"sheet_y":14,"short_name":"sake","short_names":["sake"],"text":null,"texts":null,"category":"Foods","sort_order":62,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u7981":{"name":"Squared Cjk Unified Ideograph-7981","unified":"1F232","variations":[],"docomo":"E738","au":null,"softbank":null,"google":"FEB2E","image":"1f232.png","sheet_x":5,"sheet_y":10,"short_name":"u7981","short_names":["u7981"],"text":null,"texts":null,"category":"Symbols","sort_order":62,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mouse2":{"name":"Mouse","unified":"1F401","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f401.png","sheet_x":12,"sheet_y":6,"short_name":"mouse2","short_names":["mouse2"],"text":null,"texts":null,"category":"Nature","sort_order":62,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-dj":{"name":"Regional Indicator Symbol Letters Dj","unified":"1F1E9-1F1EF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e9-1f1ef.png","sheet_x":34,"sheet_y":11,"short_name":"flag-dj","short_names":["flag-dj"],"text":null,"texts":null,"category":"Flags","sort_order":62,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"chains":{"name":"Chains","unified":"26D3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26d3.png","sheet_x":2,"sheet_y":26,"short_name":"chains","short_names":["chains"],"text":null,"texts":null,"category":"Objects","sort_order":62,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"a":{"name":"Negative Squared Latin Capital Letter a","unified":"1F170","variations":["1F170-FE0F"],"docomo":null,"au":"EB26","softbank":"E532","google":"FE50B","image":"1f170.png","sheet_x":4,"sheet_y":32,"short_name":"a","short_names":["a"],"text":null,"texts":null,"category":"Symbols","sort_order":63,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tea":{"name":"Teacup Without Handle","unified":"1F375","variations":[],"docomo":"E71E","au":"EAAE","softbank":"E338","google":"FE984","image":"1f375.png","sheet_x":8,"sheet_y":13,"short_name":"tea","short_names":["tea"],"text":null,"texts":null,"category":"Foods","sort_order":63,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"gun":{"name":"Pistol","unified":"1F52B","variations":[],"docomo":null,"au":"E50A","softbank":"E113","google":"FE4F5","image":"1f52b.png","sheet_x":23,"sheet_y":27,"short_name":"gun","short_names":["gun"],"text":null,"texts":null,"category":"Objects","sort_order":63,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"astonished":{"name":"Astonished Face","unified":"1F632","variations":[],"docomo":"E6F4","au":"EACA","softbank":"E410","google":"FE322","image":"1f632.png","sheet_x":27,"sheet_y":24,"short_name":"astonished","short_names":["astonished"],"text":null,"texts":null,"category":"People","sort_order":63,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-dm":{"name":"Regional Indicator Symbol Letters Dm","unified":"1F1E9-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e9-1f1f2.png","sheet_x":34,"sheet_y":13,"short_name":"flag-dm","short_names":["flag-dm"],"text":null,"texts":null,"category":"Flags","sort_order":63,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rooster":{"name":"Rooster","unified":"1F413","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f413.png","sheet_x":12,"sheet_y":24,"short_name":"rooster","short_names":["rooster"],"text":null,"texts":null,"category":"Nature","sort_order":63,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"factory":{"name":"Factory","unified":"1F3ED","variations":[],"docomo":null,"au":"EAF9","softbank":"E508","google":"FE4C0","image":"1f3ed.png","sheet_x":11,"sheet_y":30,"short_name":"factory","short_names":["factory"],"text":null,"texts":null,"category":"Places","sort_order":63,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"coffee":{"name":"Hot Beverage","unified":"2615","variations":["2615-FE0F"],"docomo":"E670","au":"E597","softbank":"E045","google":"FE981","image":"2615.png","sheet_x":1,"sheet_y":8,"short_name":"coffee","short_names":["coffee"],"text":null,"texts":null,"category":"Foods","sort_order":64,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bomb":{"name":"Bomb","unified":"1F4A3","variations":[],"docomo":"E6FE","au":"E47A","softbank":"E311","google":"FEB58","image":"1f4a3.png","sheet_x":20,"sheet_y":10,"short_name":"bomb","short_names":["bomb"],"text":null,"texts":null,"category":"Objects","sort_order":64,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-do":{"name":"Regional Indicator Symbol Letters Do","unified":"1F1E9-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e9-1f1f4.png","sheet_x":34,"sheet_y":14,"short_name":"flag-do","short_names":["flag-do"],"text":null,"texts":null,"category":"Flags","sort_order":64,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fountain":{"name":"Fountain","unified":"26F2","variations":["26F2-FE0F"],"docomo":null,"au":"E5CF","softbank":"E121","google":"FE4BC","image":"26f2.png","sheet_x":2,"sheet_y":32,"short_name":"fountain","short_names":["fountain"],"text":null,"texts":null,"category":"Places","sort_order":64,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"turkey":{"name":"Turkey","unified":"1F983","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f983.png","sheet_x":32,"sheet_y":18,"short_name":"turkey","short_names":["turkey"],"text":null,"texts":null,"category":"Nature","sort_order":64,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"zipper_mouth_face":{"name":"Zipper-Mouth Face","unified":"1F910","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f910.png","sheet_x":32,"sheet_y":1,"short_name":"zipper_mouth_face","short_names":["zipper_mouth_face"],"text":null,"texts":null,"category":"People","sort_order":64,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"b":{"name":"Negative Squared Latin Capital Letter B","unified":"1F171","variations":["1F171-FE0F"],"docomo":null,"au":"EB27","softbank":"E533","google":"FE50C","image":"1f171.png","sheet_x":4,"sheet_y":33,"short_name":"b","short_names":["b"],"text":null,"texts":null,"category":"Symbols","sort_order":64,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mask":{"name":"Face with Medical Mask","unified":"1F637","variations":[],"docomo":null,"au":"EAC7","softbank":"E40C","google":"FE32E","image":"1f637.png","sheet_x":27,"sheet_y":29,"short_name":"mask","short_names":["mask"],"text":null,"texts":null,"category":"People","sort_order":65,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ec":{"name":"Regional Indicator Symbol Letters Ec","unified":"1F1EA-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ea-1f1e8.png","sheet_x":34,"sheet_y":17,"short_name":"flag-ec","short_names":["flag-ec"],"text":null,"texts":null,"category":"Flags","sort_order":65,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ab":{"name":"Negative Squared Ab","unified":"1F18E","variations":[],"docomo":null,"au":"EB29","softbank":"E534","google":"FE50D","image":"1f18e.png","sheet_x":4,"sheet_y":36,"short_name":"ab","short_names":["ab"],"text":null,"texts":null,"category":"Symbols","sort_order":65,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rice_scene":{"name":"Moon Viewing Ceremony","unified":"1F391","variations":[],"docomo":null,"au":"EAEF","softbank":"E446","google":"FE017","image":"1f391.png","sheet_x":9,"sheet_y":5,"short_name":"rice_scene","short_names":["rice_scene"],"text":null,"texts":null,"category":"Places","sort_order":65,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"baby_bottle":{"name":"Baby Bottle","unified":"1F37C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f37c.png","sheet_x":8,"sheet_y":20,"short_name":"baby_bottle","short_names":["baby_bottle"],"text":null,"texts":null,"category":"Foods","sort_order":65,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hocho":{"name":"Hocho","unified":"1F52A","variations":[],"docomo":null,"au":"E57F","softbank":null,"google":"FE4FA","image":"1f52a.png","sheet_x":23,"sheet_y":26,"short_name":"hocho","short_names":["hocho","knife"],"text":null,"texts":null,"category":"Objects","sort_order":65,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dove_of_peace":{"name":"Dove of Peace","unified":"1F54A","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f54a.png","sheet_x":24,"sheet_y":6,"short_name":"dove_of_peace","short_names":["dove_of_peace"],"text":null,"texts":null,"category":"Nature","sort_order":65,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cl":{"name":"Squared Cl","unified":"1F191","variations":[],"docomo":"E6DB","au":"E5AB","softbank":null,"google":"FEB84","image":"1f191.png","sheet_x":4,"sheet_y":37,"short_name":"cl","short_names":["cl"],"text":null,"texts":null,"category":"Symbols","sort_order":66,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dog2":{"name":"Dog","unified":"1F415","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f415.png","sheet_x":12,"sheet_y":26,"short_name":"dog2","short_names":["dog2"],"text":null,"texts":null,"category":"Nature","sort_order":66,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fork_and_knife":{"name":"Fork and Knife","unified":"1F374","variations":[],"docomo":"E66F","au":"E4AC","softbank":"E043","google":"FE980","image":"1f374.png","sheet_x":8,"sheet_y":12,"short_name":"fork_and_knife","short_names":["fork_and_knife"],"text":null,"texts":null,"category":"Foods","sort_order":66,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dagger_knife":{"name":"Dagger Knife","unified":"1F5E1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5e1.png","sheet_x":26,"sheet_y":4,"short_name":"dagger_knife","short_names":["dagger_knife"],"text":null,"texts":null,"category":"Objects","sort_order":66,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mountain":{"name":"Mountain","unified":"26F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26f0.png","sheet_x":2,"sheet_y":30,"short_name":"mountain","short_names":["mountain"],"text":null,"texts":null,"category":"Places","sort_order":66,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"face_with_thermometer":{"name":"Face with Thermometer","unified":"1F912","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f912.png","sheet_x":32,"sheet_y":3,"short_name":"face_with_thermometer","short_names":["face_with_thermometer"],"text":null,"texts":null,"category":"People","sort_order":66,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-eg":{"name":"Regional Indicator Symbol Letters Eg","unified":"1F1EA-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ea-1f1ec.png","sheet_x":34,"sheet_y":19,"short_name":"flag-eg","short_names":["flag-eg"],"text":null,"texts":null,"category":"Flags","sort_order":66,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"poodle":{"name":"Poodle","unified":"1F429","variations":[],"docomo":"E6A1","au":"E4DF","softbank":"E052","google":"FE1D8","image":"1f429.png","sheet_x":13,"sheet_y":5,"short_name":"poodle","short_names":["poodle"],"text":null,"texts":null,"category":"Nature","sort_order":67,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sv":{"name":"Regional Indicator Symbol Letters Sv","unified":"1F1F8-1F1FB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1fb.png","sheet_x":38,"sheet_y":2,"short_name":"flag-sv","short_names":["flag-sv"],"text":null,"texts":null,"category":"Flags","sort_order":67,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"snow_capped_mountain":{"name":"Snow Capped Mountain","unified":"1F3D4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d4.png","sheet_x":11,"sheet_y":5,"short_name":"snow_capped_mountain","short_names":["snow_capped_mountain"],"text":null,"texts":null,"category":"Places","sort_order":67,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"face_with_head_bandage":{"name":"Face with Head-Bandage","unified":"1F915","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f915.png","sheet_x":32,"sheet_y":6,"short_name":"face_with_head_bandage","short_names":["face_with_head_bandage"],"text":null,"texts":null,"category":"People","sort_order":67,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"o2":{"name":"Negative Squared Latin Capital Letter O","unified":"1F17E","variations":["1F17E-FE0F"],"docomo":null,"au":"EB28","softbank":"E535","google":"FE50E","image":"1f17e.png","sheet_x":4,"sheet_y":34,"short_name":"o2","short_names":["o2"],"text":null,"texts":null,"category":"Symbols","sort_order":67,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"knife_fork_plate":{"name":"Fork and Knife with Plate","unified":"1F37D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f37d.png","sheet_x":8,"sheet_y":21,"short_name":"knife_fork_plate","short_names":["knife_fork_plate"],"text":null,"texts":null,"category":"Foods","sort_order":67,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"crossed_swords":{"name":"Crossed Swords","unified":"2694","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2694.png","sheet_x":2,"sheet_y":6,"short_name":"crossed_swords","short_names":["crossed_swords"],"text":null,"texts":null,"category":"Objects","sort_order":67,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sos":{"name":"Squared Sos","unified":"1F198","variations":[],"docomo":null,"au":"E4E8","softbank":null,"google":"FEB4F","image":"1f198.png","sheet_x":5,"sheet_y":3,"short_name":"sos","short_names":["sos"],"text":null,"texts":null,"category":"Symbols","sort_order":68,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gq":{"name":"Regional Indicator Symbol Letters Gq","unified":"1F1EC-1F1F6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1f6.png","sheet_x":35,"sheet_y":2,"short_name":"flag-gq","short_names":["flag-gq"],"text":null,"texts":null,"category":"Flags","sort_order":68,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mount_fuji":{"name":"Mount Fuji","unified":"1F5FB","variations":[],"docomo":"E740","au":"E5BD","softbank":"E03B","google":"FE4C3","image":"1f5fb.png","sheet_x":26,"sheet_y":10,"short_name":"mount_fuji","short_names":["mount_fuji"],"text":null,"texts":null,"category":"Places","sort_order":68,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cat2":{"name":"Cat","unified":"1F408","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f408.png","sheet_x":12,"sheet_y":13,"short_name":"cat2","short_names":["cat2"],"text":null,"texts":null,"category":"Nature","sort_order":68,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"shield":{"name":"Shield","unified":"1F6E1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6e1.png","sheet_x":31,"sheet_y":32,"short_name":"shield","short_names":["shield"],"text":null,"texts":null,"category":"Objects","sort_order":68,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sleeping":{"name":"Sleeping Face","unified":"1F634","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f634.png","sheet_x":27,"sheet_y":26,"short_name":"sleeping","short_names":["sleeping"],"text":null,"texts":null,"category":"People","sort_order":68,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"volcano":{"name":"Volcano","unified":"1F30B","variations":[],"docomo":null,"au":"EB53","softbank":null,"google":"FE03A","image":"1f30b.png","sheet_x":5,"sheet_y":32,"short_name":"volcano","short_names":["volcano"],"text":null,"texts":null,"category":"Places","sort_order":69,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rabbit2":{"name":"Rabbit","unified":"1F407","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f407.png","sheet_x":12,"sheet_y":12,"short_name":"rabbit2","short_names":["rabbit2"],"text":null,"texts":null,"category":"Nature","sort_order":69,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"smoking":{"name":"Smoking Symbol","unified":"1F6AC","variations":[],"docomo":"E67F","au":"E47D","softbank":"E30E","google":"FEB1E","image":"1f6ac.png","sheet_x":30,"sheet_y":20,"short_name":"smoking","short_names":["smoking"],"text":null,"texts":null,"category":"Objects","sort_order":69,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-er":{"name":"Regional Indicator Symbol Letters Er","unified":"1F1EA-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ea-1f1f7.png","sheet_x":34,"sheet_y":21,"short_name":"flag-er","short_names":["flag-er"],"text":null,"texts":null,"category":"Flags","sort_order":69,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"zzz":{"name":"Sleeping Symbol","unified":"1F4A4","variations":[],"docomo":"E701","au":"E475","softbank":"E13C","google":"FEB59","image":"1f4a4.png","sheet_x":20,"sheet_y":11,"short_name":"zzz","short_names":["zzz"],"text":null,"texts":null,"category":"People","sort_order":69,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"no_entry":{"name":"No Entry","unified":"26D4","variations":["26D4-FE0F"],"docomo":"E72F","au":"E484","softbank":"E137","google":"FEB26","image":"26d4.png","sheet_x":2,"sheet_y":27,"short_name":"no_entry","short_names":["no_entry"],"text":null,"texts":null,"category":"Symbols","sort_order":69,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hankey":{"name":"Pile of Poo","unified":"1F4A9","variations":[],"docomo":null,"au":"E4F5","softbank":"E05A","google":"FE4F4","image":"1f4a9.png","sheet_x":20,"sheet_y":16,"short_name":"hankey","short_names":["hankey","poop","shit"],"text":null,"texts":null,"category":"People","sort_order":70,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ee":{"name":"Regional Indicator Symbol Letters Ee","unified":"1F1EA-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ea-1f1ea.png","sheet_x":34,"sheet_y":18,"short_name":"flag-ee","short_names":["flag-ee"],"text":null,"texts":null,"category":"Flags","sort_order":70,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"skull_and_crossbones":{"name":"Skull and Crossbones","unified":"2620","variations":["2620-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2620.png","sheet_x":1,"sheet_y":16,"short_name":"skull_and_crossbones","short_names":["skull_and_crossbones"],"text":null,"texts":null,"category":"Objects","sort_order":70,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"chipmunk":{"name":"Chipmunk","unified":"1F43F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f43f.png","sheet_x":13,"sheet_y":27,"short_name":"chipmunk","short_names":["chipmunk"],"text":null,"texts":null,"category":"Nature","sort_order":70,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"japan":{"name":"Silhouette of Japan","unified":"1F5FE","variations":[],"docomo":null,"au":"E572","softbank":null,"google":"FE4C7","image":"1f5fe.png","sheet_x":26,"sheet_y":13,"short_name":"japan","short_names":["japan"],"text":null,"texts":null,"category":"Places","sort_order":70,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"name_badge":{"name":"Name Badge","unified":"1F4DB","variations":[],"docomo":null,"au":"E51D","softbank":null,"google":"FE504","image":"1f4db.png","sheet_x":21,"sheet_y":30,"short_name":"name_badge","short_names":["name_badge"],"text":null,"texts":null,"category":"Symbols","sort_order":70,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"coffin":{"name":"Coffin","unified":"26B0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26b0.png","sheet_x":2,"sheet_y":16,"short_name":"coffin","short_names":["coffin"],"text":null,"texts":null,"category":"Objects","sort_order":71,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"camping":{"name":"Camping","unified":"1F3D5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d5.png","sheet_x":11,"sheet_y":6,"short_name":"camping","short_names":["camping"],"text":null,"texts":null,"category":"Places","sort_order":71,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"feet":{"name":"Paw Prints","unified":"1F43E","variations":[],"docomo":"E698","au":"E4EE","softbank":"E536","google":"FE1DB","image":"1f43e.png","sheet_x":13,"sheet_y":26,"short_name":"feet","short_names":["feet","paw_prints"],"text":null,"texts":null,"category":"Nature","sort_order":71,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-et":{"name":"Regional Indicator Symbol Letters Et","unified":"1F1EA-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ea-1f1f9.png","sheet_x":34,"sheet_y":23,"short_name":"flag-et","short_names":["flag-et"],"text":null,"texts":null,"category":"Flags","sort_order":71,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"no_entry_sign":{"name":"No Entry Sign","unified":"1F6AB","variations":[],"docomo":"E738","au":"E541","softbank":null,"google":"FEB48","image":"1f6ab.png","sheet_x":30,"sheet_y":19,"short_name":"no_entry_sign","short_names":["no_entry_sign"],"text":null,"texts":null,"category":"Symbols","sort_order":71,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"smiling_imp":{"name":"Smiling Face with Horns","unified":"1F608","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f608.png","sheet_x":26,"sheet_y":23,"short_name":"smiling_imp","short_names":["smiling_imp"],"text":null,"texts":null,"category":"People","sort_order":71,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"imp":{"name":"Imp","unified":"1F47F","variations":[],"docomo":null,"au":"E4EF","softbank":"E11A","google":"FE1B2","image":"1f47f.png","sheet_x":18,"sheet_y":26,"short_name":"imp","short_names":["imp"],"text":null,"texts":null,"category":"People","sort_order":72,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"funeral_urn":{"name":"Funeral Urn","unified":"26B1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26b1.png","sheet_x":2,"sheet_y":17,"short_name":"funeral_urn","short_names":["funeral_urn"],"text":null,"texts":null,"category":"Objects","sort_order":72,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tent":{"name":"Tent","unified":"26FA","variations":["26FA-FE0F"],"docomo":null,"au":"E5D0","softbank":"E122","google":"FE7FB","image":"26fa.png","sheet_x":3,"sheet_y":3,"short_name":"tent","short_names":["tent"],"text":null,"texts":null,"category":"Places","sort_order":72,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dragon":{"name":"Dragon","unified":"1F409","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f409.png","sheet_x":12,"sheet_y":14,"short_name":"dragon","short_names":["dragon"],"text":null,"texts":null,"category":"Nature","sort_order":72,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"x":{"name":"Cross Mark","unified":"274C","variations":[],"docomo":null,"au":"E550","softbank":"E333","google":"FEB45","image":"274c.png","sheet_x":4,"sheet_y":3,"short_name":"x","short_names":["x"],"text":null,"texts":null,"category":"Symbols","sort_order":72,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-eu":{"name":"Regional Indicator Symbol Letters Eu","unified":"1F1EA-1F1FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ea-1f1fa.png","sheet_x":34,"sheet_y":24,"short_name":"flag-eu","short_names":["flag-eu"],"text":null,"texts":null,"category":"Flags","sort_order":72,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"amphora":{"name":"Amphora","unified":"1F3FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3fa.png","sheet_x":11,"sheet_y":40,"short_name":"amphora","short_names":["amphora"],"text":null,"texts":null,"category":"Objects","sort_order":73,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"o":{"name":"Heavy Large Circle","unified":"2B55","variations":["2B55-FE0F"],"docomo":"E6A0","au":"EAAD","softbank":"E332","google":"FEB44","image":"2b55.png","sheet_x":4,"sheet_y":25,"short_name":"o","short_names":["o"],"text":null,"texts":null,"category":"Symbols","sort_order":73,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"national_park":{"name":"National Park","unified":"1F3DE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3de.png","sheet_x":11,"sheet_y":15,"short_name":"national_park","short_names":["national_park"],"text":null,"texts":null,"category":"Places","sort_order":73,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dragon_face":{"name":"Dragon Face","unified":"1F432","variations":[],"docomo":null,"au":"EB3F","softbank":null,"google":"FE1DE","image":"1f432.png","sheet_x":13,"sheet_y":14,"short_name":"dragon_face","short_names":["dragon_face"],"text":null,"texts":null,"category":"Nature","sort_order":73,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-fk":{"name":"Regional Indicator Symbol Letters Fk","unified":"1F1EB-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1eb-1f1f0.png","sheet_x":34,"sheet_y":27,"short_name":"flag-fk","short_names":["flag-fk"],"text":null,"texts":null,"category":"Flags","sort_order":73,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"japanese_ogre":{"name":"Japanese Ogre","unified":"1F479","variations":[],"docomo":null,"au":"EB44","softbank":null,"google":"FE1AC","image":"1f479.png","sheet_x":18,"sheet_y":15,"short_name":"japanese_ogre","short_names":["japanese_ogre"],"text":null,"texts":null,"category":"People","sort_order":73,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"japanese_goblin":{"name":"Japanese Goblin","unified":"1F47A","variations":[],"docomo":null,"au":"EB45","softbank":null,"google":"FE1AD","image":"1f47a.png","sheet_x":18,"sheet_y":16,"short_name":"japanese_goblin","short_names":["japanese_goblin"],"text":null,"texts":null,"category":"People","sort_order":74,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-fo":{"name":"Regional Indicator Symbol Letters Fo","unified":"1F1EB-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1eb-1f1f4.png","sheet_x":34,"sheet_y":29,"short_name":"flag-fo","short_names":["flag-fo"],"text":null,"texts":null,"category":"Flags","sort_order":74,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"motorway":{"name":"Motorway","unified":"1F6E3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6e3.png","sheet_x":31,"sheet_y":34,"short_name":"motorway","short_names":["motorway"],"text":null,"texts":null,"category":"Places","sort_order":74,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cactus":{"name":"Cactus","unified":"1F335","variations":[],"docomo":null,"au":"EA96","softbank":"E308","google":"FE048","image":"1f335.png","sheet_x":6,"sheet_y":31,"short_name":"cactus","short_names":["cactus"],"text":null,"texts":null,"category":"Nature","sort_order":74,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"anger":{"name":"Anger Symbol","unified":"1F4A2","variations":[],"docomo":"E6FC","au":"E4E5","softbank":"E334","google":"FEB57","image":"1f4a2.png","sheet_x":20,"sheet_y":9,"short_name":"anger","short_names":["anger"],"text":null,"texts":null,"category":"Symbols","sort_order":74,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"crystal_ball":{"name":"Crystal Ball","unified":"1F52E","variations":[],"docomo":null,"au":"EA8F","softbank":"E23E","google":"FE4F7","image":"1f52e.png","sheet_x":23,"sheet_y":30,"short_name":"crystal_ball","short_names":["crystal_ball"],"text":null,"texts":null,"category":"Objects","sort_order":74,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"skull":{"name":"Skull","unified":"1F480","variations":[],"docomo":null,"au":"E4F8","softbank":"E11C","google":"FE1B3","image":"1f480.png","sheet_x":18,"sheet_y":27,"short_name":"skull","short_names":["skull"],"text":null,"texts":null,"category":"People","sort_order":75,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hotsprings":{"name":"Hot Springs","unified":"2668","variations":["2668-FE0F"],"docomo":"E6F7","au":"E4BC","softbank":"E123","google":"FE7FA","image":"2668.png","sheet_x":2,"sheet_y":1,"short_name":"hotsprings","short_names":["hotsprings"],"text":null,"texts":null,"category":"Symbols","sort_order":75,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-fj":{"name":"Regional Indicator Symbol Letters Fj","unified":"1F1EB-1F1EF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1eb-1f1ef.png","sheet_x":34,"sheet_y":26,"short_name":"flag-fj","short_names":["flag-fj"],"text":null,"texts":null,"category":"Flags","sort_order":75,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"prayer_beads":{"name":"Prayer Beads","unified":"1F4FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4ff.png","sheet_x":22,"sheet_y":24,"short_name":"prayer_beads","short_names":["prayer_beads"],"text":null,"texts":null,"category":"Objects","sort_order":75,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"christmas_tree":{"name":"Christmas Tree","unified":"1F384","variations":[],"docomo":"E6A4","au":"E4C9","softbank":"E033","google":"FE512","image":"1f384.png","sheet_x":8,"sheet_y":28,"short_name":"christmas_tree","short_names":["christmas_tree"],"text":null,"texts":null,"category":"Nature","sort_order":75,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"railway_track":{"name":"Railway Track","unified":"1F6E4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6e4.png","sheet_x":31,"sheet_y":35,"short_name":"railway_track","short_names":["railway_track"],"text":null,"texts":null,"category":"Places","sort_order":75,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-fi":{"name":"Regional Indicator Symbol Letters Fi","unified":"1F1EB-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1eb-1f1ee.png","sheet_x":34,"sheet_y":25,"short_name":"flag-fi","short_names":["flag-fi"],"text":null,"texts":null,"category":"Flags","sort_order":76,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"barber":{"name":"Barber Pole","unified":"1F488","variations":[],"docomo":null,"au":"EAA2","softbank":"E320","google":"FE199","image":"1f488.png","sheet_x":19,"sheet_y":24,"short_name":"barber","short_names":["barber"],"text":null,"texts":null,"category":"Objects","sort_order":76,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ghost":{"name":"Ghost","unified":"1F47B","variations":[],"docomo":null,"au":"E4CB","softbank":"E11B","google":"FE1AE","image":"1f47b.png","sheet_x":18,"sheet_y":17,"short_name":"ghost","short_names":["ghost"],"text":null,"texts":null,"category":"People","sort_order":76,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sunrise":{"name":"Sunrise","unified":"1F305","variations":[],"docomo":"E63E","au":"EAF4","softbank":"E449","google":"FE00A","image":"1f305.png","sheet_x":5,"sheet_y":26,"short_name":"sunrise","short_names":["sunrise"],"text":null,"texts":null,"category":"Places","sort_order":76,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"evergreen_tree":{"name":"Evergreen Tree","unified":"1F332","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f332.png","sheet_x":6,"sheet_y":28,"short_name":"evergreen_tree","short_names":["evergreen_tree"],"text":null,"texts":null,"category":"Nature","sort_order":76,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"no_pedestrians":{"name":"No Pedestrians","unified":"1F6B7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6b7.png","sheet_x":31,"sheet_y":5,"short_name":"no_pedestrians","short_names":["no_pedestrians"],"text":null,"texts":null,"category":"Symbols","sort_order":76,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sunrise_over_mountains":{"name":"Sunrise over Mountains","unified":"1F304","variations":[],"docomo":"E63E","au":"EAF4","softbank":"E04D","google":"FE009","image":"1f304.png","sheet_x":5,"sheet_y":25,"short_name":"sunrise_over_mountains","short_names":["sunrise_over_mountains"],"text":null,"texts":null,"category":"Places","sort_order":77,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"alembic":{"name":"Alembic","unified":"2697","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2697.png","sheet_x":2,"sheet_y":8,"short_name":"alembic","short_names":["alembic"],"text":null,"texts":null,"category":"Objects","sort_order":77,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"alien":{"name":"Extraterrestrial Alien","unified":"1F47D","variations":[],"docomo":null,"au":"E50E","softbank":"E10C","google":"FE1B0","image":"1f47d.png","sheet_x":18,"sheet_y":24,"short_name":"alien","short_names":["alien"],"text":null,"texts":null,"category":"People","sort_order":77,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"deciduous_tree":{"name":"Deciduous Tree","unified":"1F333","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f333.png","sheet_x":6,"sheet_y":29,"short_name":"deciduous_tree","short_names":["deciduous_tree"],"text":null,"texts":null,"category":"Nature","sort_order":77,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"do_not_litter":{"name":"Do Not Litter Symbol","unified":"1F6AF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6af.png","sheet_x":30,"sheet_y":23,"short_name":"do_not_litter","short_names":["do_not_litter"],"text":null,"texts":null,"category":"Symbols","sort_order":77,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-fr":{"name":"Regional Indicator Symbol Letters Fr","unified":"1F1EB-1F1F7","variations":[],"docomo":null,"au":"EAFA","softbank":"E50D","google":"FE4E7","image":"1f1eb-1f1f7.png","sheet_x":34,"sheet_y":30,"short_name":"flag-fr","short_names":["flag-fr","fr"],"text":null,"texts":null,"category":"Flags","sort_order":77,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"telescope":{"name":"Telescope","unified":"1F52D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f52d.png","sheet_x":23,"sheet_y":29,"short_name":"telescope","short_names":["telescope"],"text":null,"texts":null,"category":"Objects","sort_order":78,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"palm_tree":{"name":"Palm Tree","unified":"1F334","variations":[],"docomo":null,"au":"E4E2","softbank":"E307","google":"FE047","image":"1f334.png","sheet_x":6,"sheet_y":30,"short_name":"palm_tree","short_names":["palm_tree"],"text":null,"texts":null,"category":"Nature","sort_order":78,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"no_bicycles":{"name":"No Bicycles","unified":"1F6B3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6b3.png","sheet_x":30,"sheet_y":27,"short_name":"no_bicycles","short_names":["no_bicycles"],"text":null,"texts":null,"category":"Symbols","sort_order":78,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"desert":{"name":"Desert","unified":"1F3DC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3dc.png","sheet_x":11,"sheet_y":13,"short_name":"desert","short_names":["desert"],"text":null,"texts":null,"category":"Places","sort_order":78,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"robot_face":{"name":"Robot Face","unified":"1F916","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f916.png","sheet_x":32,"sheet_y":7,"short_name":"robot_face","short_names":["robot_face"],"text":null,"texts":null,"category":"People","sort_order":78,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gf":{"name":"Regional Indicator Symbol Letters Gf","unified":"1F1EC-1F1EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1eb.png","sheet_x":34,"sheet_y":35,"short_name":"flag-gf","short_names":["flag-gf"],"text":null,"texts":null,"category":"Flags","sort_order":78,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"non-potable_water":{"name":"Non-Potable Water Symbol","unified":"1F6B1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6b1.png","sheet_x":30,"sheet_y":25,"short_name":"non-potable_water","short_names":["non-potable_water"],"text":null,"texts":null,"category":"Symbols","sort_order":79,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"beach_with_umbrella":{"name":"Beach with Umbrella","unified":"1F3D6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d6.png","sheet_x":11,"sheet_y":7,"short_name":"beach_with_umbrella","short_names":["beach_with_umbrella"],"text":null,"texts":null,"category":"Places","sort_order":79,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"microscope":{"name":"Microscope","unified":"1F52C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f52c.png","sheet_x":23,"sheet_y":28,"short_name":"microscope","short_names":["microscope"],"text":null,"texts":null,"category":"Objects","sort_order":79,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"seedling":{"name":"Seedling","unified":"1F331","variations":[],"docomo":"E746","au":"EB7D","softbank":"E110","google":"FE03E","image":"1f331.png","sheet_x":6,"sheet_y":27,"short_name":"seedling","short_names":["seedling"],"text":null,"texts":null,"category":"Nature","sort_order":79,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"smiley_cat":{"name":"Smiling Cat Face with Open Mouth","unified":"1F63A","variations":[],"docomo":"E6F0","au":"EB61","softbank":"E057","google":"FE348","image":"1f63a.png","sheet_x":27,"sheet_y":32,"short_name":"smiley_cat","short_names":["smiley_cat"],"text":null,"texts":null,"category":"People","sort_order":79,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pf":{"name":"Regional Indicator Symbol Letters Pf","unified":"1F1F5-1F1EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1eb.png","sheet_x":37,"sheet_y":8,"short_name":"flag-pf","short_names":["flag-pf"],"text":null,"texts":null,"category":"Flags","sort_order":79,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"herb":{"name":"Herb","unified":"1F33F","variations":[],"docomo":"E741","au":"EB82","softbank":"E110","google":"FE04E","image":"1f33f.png","sheet_x":7,"sheet_y":0,"short_name":"herb","short_names":["herb"],"text":null,"texts":null,"category":"Nature","sort_order":80,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"underage":{"name":"No One Under Eighteen Symbol","unified":"1F51E","variations":[],"docomo":null,"au":"EA83","softbank":"E207","google":"FEB25","image":"1f51e.png","sheet_x":23,"sheet_y":14,"short_name":"underage","short_names":["underage"],"text":null,"texts":null,"category":"Symbols","sort_order":80,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hole":{"name":"Hole","unified":"1F573","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f573.png","sheet_x":24,"sheet_y":37,"short_name":"hole","short_names":["hole"],"text":null,"texts":null,"category":"Objects","sort_order":80,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tf":{"name":"Regional Indicator Symbol Letters Tf","unified":"1F1F9-1F1EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1eb.png","sheet_x":38,"sheet_y":9,"short_name":"flag-tf","short_names":["flag-tf"],"text":null,"texts":null,"category":"Flags","sort_order":80,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"desert_island":{"name":"Desert Island","unified":"1F3DD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3dd.png","sheet_x":11,"sheet_y":14,"short_name":"desert_island","short_names":["desert_island"],"text":null,"texts":null,"category":"Places","sort_order":80,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"smile_cat":{"name":"Grinning Cat Face with Smiling Eyes","unified":"1F638","variations":[],"docomo":"E753","au":"EB7F","softbank":"E404","google":"FE349","image":"1f638.png","sheet_x":27,"sheet_y":30,"short_name":"smile_cat","short_names":["smile_cat"],"text":null,"texts":null,"category":"People","sort_order":80,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pill":{"name":"Pill","unified":"1F48A","variations":[],"docomo":null,"au":"EA9A","softbank":"E30F","google":"FE50A","image":"1f48a.png","sheet_x":19,"sheet_y":26,"short_name":"pill","short_names":["pill"],"text":null,"texts":null,"category":"Objects","sort_order":81,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"shamrock":{"name":"Shamrock","unified":"2618","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2618.png","sheet_x":1,"sheet_y":9,"short_name":"shamrock","short_names":["shamrock"],"text":null,"texts":null,"category":"Nature","sort_order":81,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ga":{"name":"Regional Indicator Symbol Letters Ga","unified":"1F1EC-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1e6.png","sheet_x":34,"sheet_y":31,"short_name":"flag-ga","short_names":["flag-ga"],"text":null,"texts":null,"category":"Flags","sort_order":81,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"city_sunrise":{"name":"Sunset over Buildings","unified":"1F307","variations":[],"docomo":"E63E","au":"E5DA","softbank":"E44A","google":"FE00C","image":"1f307.png","sheet_x":5,"sheet_y":28,"short_name":"city_sunrise","short_names":["city_sunrise"],"text":null,"texts":null,"category":"Places","sort_order":81,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"joy_cat":{"name":"Cat Face with Tears of Joy","unified":"1F639","variations":[],"docomo":"E72A","au":"EB63","softbank":"E412","google":"FE34A","image":"1f639.png","sheet_x":27,"sheet_y":31,"short_name":"joy_cat","short_names":["joy_cat"],"text":null,"texts":null,"category":"People","sort_order":81,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"no_mobile_phones":{"name":"No Mobile Phones","unified":"1F4F5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4f5.png","sheet_x":22,"sheet_y":15,"short_name":"no_mobile_phones","short_names":["no_mobile_phones"],"text":null,"texts":null,"category":"Symbols","sort_order":81,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heart_eyes_cat":{"name":"Smiling Cat Face with Heart-Shaped Eyes","unified":"1F63B","variations":[],"docomo":"E726","au":"EB65","softbank":"E106","google":"FE34C","image":"1f63b.png","sheet_x":27,"sheet_y":33,"short_name":"heart_eyes_cat","short_names":["heart_eyes_cat"],"text":null,"texts":null,"category":"People","sort_order":82,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"syringe":{"name":"Syringe","unified":"1F489","variations":[],"docomo":null,"au":"E510","softbank":"E13B","google":"FE509","image":"1f489.png","sheet_x":19,"sheet_y":25,"short_name":"syringe","short_names":["syringe"],"text":null,"texts":null,"category":"Objects","sort_order":82,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"exclamation":{"name":"Heavy Exclamation Mark Symbol","unified":"2757","variations":["2757-FE0F"],"docomo":"E702","au":"E482","softbank":"E021","google":"FEB04","image":"2757.png","sheet_x":4,"sheet_y":8,"short_name":"exclamation","short_names":["exclamation","heavy_exclamation_mark"],"text":null,"texts":null,"category":"Symbols","sort_order":82,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"city_sunset":{"name":"Cityscape at Dusk","unified":"1F306","variations":[],"docomo":null,"au":"E5DA","softbank":"E146","google":"FE00B","image":"1f306.png","sheet_x":5,"sheet_y":27,"short_name":"city_sunset","short_names":["city_sunset"],"text":null,"texts":null,"category":"Places","sort_order":82,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gm":{"name":"Regional Indicator Symbol Letters Gm","unified":"1F1EC-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1f2.png","sheet_x":34,"sheet_y":40,"short_name":"flag-gm","short_names":["flag-gm"],"text":null,"texts":null,"category":"Flags","sort_order":82,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"four_leaf_clover":{"name":"Four Leaf Clover","unified":"1F340","variations":[],"docomo":"E741","au":"E513","softbank":"E110","google":"FE03C","image":"1f340.png","sheet_x":7,"sheet_y":1,"short_name":"four_leaf_clover","short_names":["four_leaf_clover"],"text":null,"texts":null,"category":"Nature","sort_order":82,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"grey_exclamation":{"name":"White Exclamation Mark Ornament","unified":"2755","variations":[],"docomo":"E702","au":"E482","softbank":"E337","google":"FEB0B","image":"2755.png","sheet_x":4,"sheet_y":7,"short_name":"grey_exclamation","short_names":["grey_exclamation"],"text":null,"texts":null,"category":"Symbols","sort_order":83,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"smirk_cat":{"name":"Cat Face with Wry Smile","unified":"1F63C","variations":[],"docomo":"E753","au":"EB6A","softbank":"E404","google":"FE34F","image":"1f63c.png","sheet_x":27,"sheet_y":34,"short_name":"smirk_cat","short_names":["smirk_cat"],"text":null,"texts":null,"category":"People","sort_order":83,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"thermometer":{"name":"Thermometer","unified":"1F321","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f321.png","sheet_x":6,"sheet_y":13,"short_name":"thermometer","short_names":["thermometer"],"text":null,"texts":null,"category":"Objects","sort_order":83,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cityscape":{"name":"Cityscape","unified":"1F3D9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d9.png","sheet_x":11,"sheet_y":10,"short_name":"cityscape","short_names":["cityscape"],"text":null,"texts":null,"category":"Places","sort_order":83,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ge":{"name":"Regional Indicator Symbol Letters Ge","unified":"1F1EC-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1ea.png","sheet_x":34,"sheet_y":34,"short_name":"flag-ge","short_names":["flag-ge"],"text":null,"texts":null,"category":"Flags","sort_order":83,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bamboo":{"name":"Pine Decoration","unified":"1F38D","variations":[],"docomo":null,"au":"EAE3","softbank":"E436","google":"FE518","image":"1f38d.png","sheet_x":9,"sheet_y":1,"short_name":"bamboo","short_names":["bamboo"],"text":null,"texts":null,"category":"Nature","sort_order":83,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-de":{"name":"Regional Indicator Symbol Letters De","unified":"1F1E9-1F1EA","variations":[],"docomo":null,"au":"EB0E","softbank":"E50E","google":"FE4E8","image":"1f1e9-1f1ea.png","sheet_x":34,"sheet_y":9,"short_name":"flag-de","short_names":["flag-de","de"],"text":null,"texts":null,"category":"Flags","sort_order":84,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"night_with_stars":{"name":"Night with Stars","unified":"1F303","variations":[],"docomo":"E6B3","au":"EAF1","softbank":"E44B","google":"FE008","image":"1f303.png","sheet_x":5,"sheet_y":24,"short_name":"night_with_stars","short_names":["night_with_stars"],"text":null,"texts":null,"category":"Places","sort_order":84,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"kissing_cat":{"name":"Kissing Cat Face with Closed Eyes","unified":"1F63D","variations":[],"docomo":"E726","au":"EB60","softbank":"E418","google":"FE34B","image":"1f63d.png","sheet_x":27,"sheet_y":35,"short_name":"kissing_cat","short_names":["kissing_cat"],"text":null,"texts":null,"category":"People","sort_order":84,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tanabata_tree":{"name":"Tanabata Tree","unified":"1F38B","variations":[],"docomo":null,"au":"EB3D","softbank":null,"google":"FE521","image":"1f38b.png","sheet_x":8,"sheet_y":40,"short_name":"tanabata_tree","short_names":["tanabata_tree"],"text":null,"texts":null,"category":"Nature","sort_order":84,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"label":{"name":"Label","unified":"1F3F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3f7.png","sheet_x":11,"sheet_y":37,"short_name":"label","short_names":["label"],"text":null,"texts":null,"category":"Objects","sort_order":84,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"question":{"name":"Black Question Mark Ornament","unified":"2753","variations":[],"docomo":null,"au":"E483","softbank":"E020","google":"FEB09","image":"2753.png","sheet_x":4,"sheet_y":5,"short_name":"question","short_names":["question"],"text":null,"texts":null,"category":"Symbols","sort_order":84,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"leaves":{"name":"Leaf Fluttering in Wind","unified":"1F343","variations":[],"docomo":null,"au":"E5CD","softbank":"E447","google":"FE043","image":"1f343.png","sheet_x":7,"sheet_y":4,"short_name":"leaves","short_names":["leaves"],"text":null,"texts":null,"category":"Nature","sort_order":85,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"grey_question":{"name":"White Question Mark Ornament","unified":"2754","variations":[],"docomo":null,"au":"E483","softbank":"E336","google":"FEB0A","image":"2754.png","sheet_x":4,"sheet_y":6,"short_name":"grey_question","short_names":["grey_question"],"text":null,"texts":null,"category":"Symbols","sort_order":85,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"scream_cat":{"name":"Weary Cat Face","unified":"1F640","variations":[],"docomo":"E6F3","au":"EB66","softbank":"E403","google":"FE350","image":"1f640.png","sheet_x":27,"sheet_y":38,"short_name":"scream_cat","short_names":["scream_cat"],"text":null,"texts":null,"category":"People","sort_order":85,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bookmark":{"name":"Bookmark","unified":"1F516","variations":[],"docomo":null,"au":"EB07","softbank":null,"google":"FEB8F","image":"1f516.png","sheet_x":23,"sheet_y":6,"short_name":"bookmark","short_names":["bookmark"],"text":null,"texts":null,"category":"Objects","sort_order":85,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bridge_at_night":{"name":"Bridge at Night","unified":"1F309","variations":[],"docomo":"E6B3","au":"E4BF","softbank":"E44B","google":"FE010","image":"1f309.png","sheet_x":5,"sheet_y":30,"short_name":"bridge_at_night","short_names":["bridge_at_night"],"text":null,"texts":null,"category":"Places","sort_order":85,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gh":{"name":"Regional Indicator Symbol Letters Gh","unified":"1F1EC-1F1ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1ed.png","sheet_x":34,"sheet_y":37,"short_name":"flag-gh","short_names":["flag-gh"],"text":null,"texts":null,"category":"Flags","sort_order":85,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"milky_way":{"name":"Milky Way","unified":"1F30C","variations":[],"docomo":"E6B3","au":"EB5F","softbank":"E44B","google":"FE03B","image":"1f30c.png","sheet_x":5,"sheet_y":33,"short_name":"milky_way","short_names":["milky_way"],"text":null,"texts":null,"category":"Places","sort_order":86,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"toilet":{"name":"Toilet","unified":"1F6BD","variations":[],"docomo":"E66E","au":"E4A5","softbank":"E140","google":"FE507","image":"1f6bd.png","sheet_x":31,"sheet_y":11,"short_name":"toilet","short_names":["toilet"],"text":null,"texts":null,"category":"Objects","sort_order":86,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"crying_cat_face":{"name":"Crying Cat Face","unified":"1F63F","variations":[],"docomo":"E72E","au":"EB68","softbank":"E413","google":"FE34D","image":"1f63f.png","sheet_x":27,"sheet_y":37,"short_name":"crying_cat_face","short_names":["crying_cat_face"],"text":null,"texts":null,"category":"People","sort_order":86,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bangbang":{"name":"Double Exclamation Mark","unified":"203C","variations":["203C-FE0F"],"docomo":"E704","au":"EB30","softbank":null,"google":"FEB06","image":"203c.png","sheet_x":0,"sheet_y":2,"short_name":"bangbang","short_names":["bangbang"],"text":null,"texts":null,"category":"Symbols","sort_order":86,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fallen_leaf":{"name":"Fallen Leaf","unified":"1F342","variations":[],"docomo":"E747","au":"E5CD","softbank":"E119","google":"FE042","image":"1f342.png","sheet_x":7,"sheet_y":3,"short_name":"fallen_leaf","short_names":["fallen_leaf"],"text":null,"texts":null,"category":"Nature","sort_order":86,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gi":{"name":"Regional Indicator Symbol Letters Gi","unified":"1F1EC-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1ee.png","sheet_x":34,"sheet_y":38,"short_name":"flag-gi","short_names":["flag-gi"],"text":null,"texts":null,"category":"Flags","sort_order":86,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pouting_cat":{"name":"Pouting Cat Face","unified":"1F63E","variations":[],"docomo":"E724","au":"EB5E","softbank":"E416","google":"FE34E","image":"1f63e.png","sheet_x":27,"sheet_y":36,"short_name":"pouting_cat","short_names":["pouting_cat"],"text":null,"texts":null,"category":"People","sort_order":87,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"maple_leaf":{"name":"Maple Leaf","unified":"1F341","variations":[],"docomo":"E747","au":"E4CE","softbank":"E118","google":"FE03F","image":"1f341.png","sheet_x":7,"sheet_y":2,"short_name":"maple_leaf","short_names":["maple_leaf"],"text":null,"texts":null,"category":"Nature","sort_order":87,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gr":{"name":"Regional Indicator Symbol Letters Gr","unified":"1F1EC-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1f7.png","sheet_x":35,"sheet_y":3,"short_name":"flag-gr","short_names":["flag-gr"],"text":null,"texts":null,"category":"Flags","sort_order":87,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"interrobang":{"name":"Exclamation Question Mark","unified":"2049","variations":["2049-FE0F"],"docomo":"E703","au":"EB2F","softbank":null,"google":"FEB05","image":"2049.png","sheet_x":0,"sheet_y":3,"short_name":"interrobang","short_names":["interrobang"],"text":null,"texts":null,"category":"Symbols","sort_order":87,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"stars":{"name":"Shooting Star","unified":"1F320","variations":[],"docomo":null,"au":"E468","softbank":null,"google":"FEB6A","image":"1f320.png","sheet_x":6,"sheet_y":12,"short_name":"stars","short_names":["stars"],"text":null,"texts":null,"category":"Places","sort_order":87,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"shower":{"name":"Shower","unified":"1F6BF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6bf.png","sheet_x":31,"sheet_y":13,"short_name":"shower","short_names":["shower"],"text":null,"texts":null,"category":"Objects","sort_order":87,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"raised_hands":{"name":"Person Raising Both Hands in Celebration","unified":"1F64C","variations":[],"docomo":null,"au":"EB86","softbank":"E427","google":"FE358","image":"1f64c.png","sheet_x":28,"sheet_y":29,"short_name":"raised_hands","short_names":["raised_hands"],"text":null,"texts":null,"category":"People","sort_order":88,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F64C-1F3FB":{"unified":"1F64C-1F3FB","image":"1f64c-1f3fb.png","sheet_x":28,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64C-1F3FC":{"unified":"1F64C-1F3FC","image":"1f64c-1f3fc.png","sheet_x":28,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64C-1F3FD":{"unified":"1F64C-1F3FD","image":"1f64c-1f3fd.png","sheet_x":28,"sheet_y":32,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64C-1F3FE":{"unified":"1F64C-1F3FE","image":"1f64c-1f3fe.png","sheet_x":28,"sheet_y":33,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64C-1F3FF":{"unified":"1F64C-1F3FF","image":"1f64c-1f3ff.png","sheet_x":28,"sheet_y":34,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-gl":{"name":"Regional Indicator Symbol Letters Gl","unified":"1F1EC-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1f1.png","sheet_x":34,"sheet_y":39,"short_name":"flag-gl","short_names":["flag-gl"],"text":null,"texts":null,"category":"Flags","sort_order":88,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ear_of_rice":{"name":"Ear of Rice","unified":"1F33E","variations":[],"docomo":null,"au":null,"softbank":"E444","google":"FE049","image":"1f33e.png","sheet_x":6,"sheet_y":40,"short_name":"ear_of_rice","short_names":["ear_of_rice"],"text":null,"texts":null,"category":"Nature","sort_order":88,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sparkler":{"name":"Firework Sparkler","unified":"1F387","variations":[],"docomo":null,"au":"EAEB","softbank":"E440","google":"FE51D","image":"1f387.png","sheet_x":8,"sheet_y":36,"short_name":"sparkler","short_names":["sparkler"],"text":null,"texts":null,"category":"Places","sort_order":88,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bathtub":{"name":"Bathtub","unified":"1F6C1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6c1.png","sheet_x":31,"sheet_y":20,"short_name":"bathtub","short_names":["bathtub"],"text":null,"texts":null,"category":"Objects","sort_order":88,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hibiscus":{"name":"Hibiscus","unified":"1F33A","variations":[],"docomo":null,"au":"EA94","softbank":"E303","google":"FE045","image":"1f33a.png","sheet_x":6,"sheet_y":36,"short_name":"hibiscus","short_names":["hibiscus"],"text":null,"texts":null,"category":"Nature","sort_order":89,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gd":{"name":"Regional Indicator Symbol Letters Gd","unified":"1F1EC-1F1E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1e9.png","sheet_x":34,"sheet_y":33,"short_name":"flag-gd","short_names":["flag-gd"],"text":null,"texts":null,"category":"Flags","sort_order":89,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"key":{"name":"Key","unified":"1F511","variations":[],"docomo":"E6D9","au":"E519","softbank":"E03F","google":"FEB82","image":"1f511.png","sheet_x":23,"sheet_y":1,"short_name":"key","short_names":["key"],"text":null,"texts":null,"category":"Objects","sort_order":89,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"low_brightness":{"name":"Low Brightness Symbol","unified":"1F505","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f505.png","sheet_x":22,"sheet_y":30,"short_name":"low_brightness","short_names":["low_brightness"],"text":null,"texts":null,"category":"Symbols","sort_order":89,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fireworks":{"name":"Fireworks","unified":"1F386","variations":[],"docomo":null,"au":"E5CC","softbank":"E117","google":"FE515","image":"1f386.png","sheet_x":8,"sheet_y":35,"short_name":"fireworks","short_names":["fireworks"],"text":null,"texts":null,"category":"Places","sort_order":89,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clap":{"name":"Clapping Hands Sign","unified":"1F44F","variations":[],"docomo":null,"au":"EAD3","softbank":"E41F","google":"FEB9E","image":"1f44f.png","sheet_x":15,"sheet_y":16,"short_name":"clap","short_names":["clap"],"text":null,"texts":null,"category":"People","sort_order":89,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F44F-1F3FB":{"unified":"1F44F-1F3FB","image":"1f44f-1f3fb.png","sheet_x":15,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44F-1F3FC":{"unified":"1F44F-1F3FC","image":"1f44f-1f3fc.png","sheet_x":15,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44F-1F3FD":{"unified":"1F44F-1F3FD","image":"1f44f-1f3fd.png","sheet_x":15,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44F-1F3FE":{"unified":"1F44F-1F3FE","image":"1f44f-1f3fe.png","sheet_x":15,"sheet_y":20,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44F-1F3FF":{"unified":"1F44F-1F3FF","image":"1f44f-1f3ff.png","sheet_x":15,"sheet_y":21,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-gp":{"name":"Regional Indicator Symbol Letters Gp","unified":"1F1EC-1F1F5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1f5.png","sheet_x":35,"sheet_y":1,"short_name":"flag-gp","short_names":["flag-gp"],"text":null,"texts":null,"category":"Flags","sort_order":90,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"old_key":{"name":"Old Key","unified":"1F5DD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5dd.png","sheet_x":26,"sheet_y":2,"short_name":"old_key","short_names":["old_key"],"text":null,"texts":null,"category":"Objects","sort_order":90,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"high_brightness":{"name":"High Brightness Symbol","unified":"1F506","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f506.png","sheet_x":22,"sheet_y":31,"short_name":"high_brightness","short_names":["high_brightness"],"text":null,"texts":null,"category":"Symbols","sort_order":90,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rainbow":{"name":"Rainbow","unified":"1F308","variations":[],"docomo":null,"au":"EAF2","softbank":"E44C","google":"FE00D","image":"1f308.png","sheet_x":5,"sheet_y":29,"short_name":"rainbow","short_names":["rainbow"],"text":null,"texts":null,"category":"Places","sort_order":90,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wave":{"name":"Waving Hand Sign","unified":"1F44B","variations":[],"docomo":"E695","au":"EAD6","softbank":"E41E","google":"FEB9D","image":"1f44b.png","sheet_x":14,"sheet_y":33,"short_name":"wave","short_names":["wave"],"text":null,"texts":null,"category":"People","sort_order":90,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F44B-1F3FB":{"unified":"1F44B-1F3FB","image":"1f44b-1f3fb.png","sheet_x":14,"sheet_y":34,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44B-1F3FC":{"unified":"1F44B-1F3FC","image":"1f44b-1f3fc.png","sheet_x":14,"sheet_y":35,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44B-1F3FD":{"unified":"1F44B-1F3FD","image":"1f44b-1f3fd.png","sheet_x":14,"sheet_y":36,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44B-1F3FE":{"unified":"1F44B-1F3FE","image":"1f44b-1f3fe.png","sheet_x":14,"sheet_y":37,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44B-1F3FF":{"unified":"1F44B-1F3FF","image":"1f44b-1f3ff.png","sheet_x":14,"sheet_y":38,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"sunflower":{"name":"Sunflower","unified":"1F33B","variations":[],"docomo":null,"au":"E4E3","softbank":"E305","google":"FE046","image":"1f33b.png","sheet_x":6,"sheet_y":37,"short_name":"sunflower","short_names":["sunflower"],"text":null,"texts":null,"category":"Nature","sort_order":90,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"+1":{"name":"Thumbs Up Sign","unified":"1F44D","variations":[],"docomo":"E727","au":"E4F9","softbank":"E00E","google":"FEB97","image":"1f44d.png","sheet_x":15,"sheet_y":4,"short_name":"+1","short_names":["+1","thumbsup"],"text":null,"texts":null,"category":"People","sort_order":91,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F44D-1F3FB":{"unified":"1F44D-1F3FB","image":"1f44d-1f3fb.png","sheet_x":15,"sheet_y":5,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44D-1F3FC":{"unified":"1F44D-1F3FC","image":"1f44d-1f3fc.png","sheet_x":15,"sheet_y":6,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44D-1F3FD":{"unified":"1F44D-1F3FD","image":"1f44d-1f3fd.png","sheet_x":15,"sheet_y":7,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44D-1F3FE":{"unified":"1F44D-1F3FE","image":"1f44d-1f3fe.png","sheet_x":15,"sheet_y":8,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44D-1F3FF":{"unified":"1F44D-1F3FF","image":"1f44d-1f3ff.png","sheet_x":15,"sheet_y":9,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"couch_and_lamp":{"name":"Couch and Lamp","unified":"1F6CB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6cb.png","sheet_x":31,"sheet_y":25,"short_name":"couch_and_lamp","short_names":["couch_and_lamp"],"text":null,"texts":null,"category":"Objects","sort_order":91,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"house_buildings":{"name":"House Buildings","unified":"1F3D8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3d8.png","sheet_x":11,"sheet_y":9,"short_name":"house_buildings","short_names":["house_buildings"],"text":null,"texts":null,"category":"Places","sort_order":91,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rose":{"name":"Rose","unified":"1F339","variations":[],"docomo":null,"au":"E5BA","softbank":"E032","google":"FE041","image":"1f339.png","sheet_x":6,"sheet_y":35,"short_name":"rose","short_names":["rose"],"text":null,"texts":null,"category":"Nature","sort_order":91,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"trident":{"name":"Trident Emblem","unified":"1F531","variations":[],"docomo":"E71A","au":"E5C9","softbank":"E031","google":"FE4D2","image":"1f531.png","sheet_x":23,"sheet_y":33,"short_name":"trident","short_names":["trident"],"text":null,"texts":null,"category":"Symbols","sort_order":91,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gu":{"name":"Regional Indicator Symbol Letters Gu","unified":"1F1EC-1F1FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1fa.png","sheet_x":35,"sheet_y":6,"short_name":"flag-gu","short_names":["flag-gu"],"text":null,"texts":null,"category":"Flags","sort_order":91,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"european_castle":{"name":"European Castle","unified":"1F3F0","variations":[],"docomo":null,"au":"EAF8","softbank":"E506","google":"FE4BF","image":"1f3f0.png","sheet_x":11,"sheet_y":33,"short_name":"european_castle","short_names":["european_castle"],"text":null,"texts":null,"category":"Places","sort_order":92,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"-1":{"name":"Thumbs Down Sign","unified":"1F44E","variations":[],"docomo":"E700","au":"EAD5","softbank":"E421","google":"FEBA0","image":"1f44e.png","sheet_x":15,"sheet_y":10,"short_name":"-1","short_names":["-1","thumbsdown"],"text":null,"texts":null,"category":"People","sort_order":92,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F44E-1F3FB":{"unified":"1F44E-1F3FB","image":"1f44e-1f3fb.png","sheet_x":15,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44E-1F3FC":{"unified":"1F44E-1F3FC","image":"1f44e-1f3fc.png","sheet_x":15,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44E-1F3FD":{"unified":"1F44E-1F3FD","image":"1f44e-1f3fd.png","sheet_x":15,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44E-1F3FE":{"unified":"1F44E-1F3FE","image":"1f44e-1f3fe.png","sheet_x":15,"sheet_y":14,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44E-1F3FF":{"unified":"1F44E-1F3FF","image":"1f44e-1f3ff.png","sheet_x":15,"sheet_y":15,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"fleur_de_lis":{"name":"Fleur-De-Lis","unified":"269C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"269c.png","sheet_x":2,"sheet_y":11,"short_name":"fleur_de_lis","short_names":["fleur_de_lis"],"text":null,"texts":null,"category":"Symbols","sort_order":92,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tulip":{"name":"Tulip","unified":"1F337","variations":[],"docomo":"E743","au":"E4E4","softbank":"E304","google":"FE03D","image":"1f337.png","sheet_x":6,"sheet_y":33,"short_name":"tulip","short_names":["tulip"],"text":null,"texts":null,"category":"Nature","sort_order":92,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sleeping_accommodation":{"name":"Sleeping Accommodation","unified":"1F6CC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6cc.png","sheet_x":31,"sheet_y":26,"short_name":"sleeping_accommodation","short_names":["sleeping_accommodation"],"text":null,"texts":null,"category":"Objects","sort_order":92,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gt":{"name":"Regional Indicator Symbol Letters Gt","unified":"1F1EC-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1f9.png","sheet_x":35,"sheet_y":5,"short_name":"flag-gt","short_names":["flag-gt"],"text":null,"texts":null,"category":"Flags","sort_order":92,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"part_alternation_mark":{"name":"Part Alternation Mark","unified":"303D","variations":["303D-FE0F"],"docomo":null,"au":null,"softbank":"E12C","google":"FE81B","image":"303d.png","sheet_x":4,"sheet_y":27,"short_name":"part_alternation_mark","short_names":["part_alternation_mark"],"text":null,"texts":null,"category":"Symbols","sort_order":93,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"blossom":{"name":"Blossom","unified":"1F33C","variations":[],"docomo":null,"au":"EB49","softbank":"E305","google":"FE04D","image":"1f33c.png","sheet_x":6,"sheet_y":38,"short_name":"blossom","short_names":["blossom"],"text":null,"texts":null,"category":"Nature","sort_order":93,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bed":{"name":"Bed","unified":"1F6CF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6cf.png","sheet_x":31,"sheet_y":29,"short_name":"bed","short_names":["bed"],"text":null,"texts":null,"category":"Objects","sort_order":93,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gg":{"name":"Regional Indicator Symbol Letters Gg","unified":"1F1EC-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1ec.png","sheet_x":34,"sheet_y":36,"short_name":"flag-gg","short_names":["flag-gg"],"text":null,"texts":null,"category":"Flags","sort_order":93,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"japanese_castle":{"name":"Japanese Castle","unified":"1F3EF","variations":[],"docomo":null,"au":"EAF7","softbank":"E505","google":"FE4BE","image":"1f3ef.png","sheet_x":11,"sheet_y":32,"short_name":"japanese_castle","short_names":["japanese_castle"],"text":null,"texts":null,"category":"Places","sort_order":93,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"facepunch":{"name":"Fisted Hand Sign","unified":"1F44A","variations":[],"docomo":"E6FD","au":"E4F3","softbank":"E00D","google":"FEB96","image":"1f44a.png","sheet_x":14,"sheet_y":27,"short_name":"facepunch","short_names":["facepunch","punch"],"text":null,"texts":null,"category":"People","sort_order":93,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F44A-1F3FB":{"unified":"1F44A-1F3FB","image":"1f44a-1f3fb.png","sheet_x":14,"sheet_y":28,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44A-1F3FC":{"unified":"1F44A-1F3FC","image":"1f44a-1f3fc.png","sheet_x":14,"sheet_y":29,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44A-1F3FD":{"unified":"1F44A-1F3FD","image":"1f44a-1f3fd.png","sheet_x":14,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44A-1F3FE":{"unified":"1F44A-1F3FE","image":"1f44a-1f3fe.png","sheet_x":14,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44A-1F3FF":{"unified":"1F44A-1F3FF","image":"1f44a-1f3ff.png","sheet_x":14,"sheet_y":32,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"stadium":{"name":"Stadium","unified":"1F3DF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3df.png","sheet_x":11,"sheet_y":16,"short_name":"stadium","short_names":["stadium"],"text":null,"texts":null,"category":"Places","sort_order":94,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gn":{"name":"Regional Indicator Symbol Letters Gn","unified":"1F1EC-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1f3.png","sheet_x":35,"sheet_y":0,"short_name":"flag-gn","short_names":["flag-gn"],"text":null,"texts":null,"category":"Flags","sort_order":94,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"warning":{"name":"Warning Sign","unified":"26A0","variations":["26A0-FE0F"],"docomo":"E737","au":"E481","softbank":"E252","google":"FEB23","image":"26a0.png","sheet_x":2,"sheet_y":12,"short_name":"warning","short_names":["warning"],"text":null,"texts":null,"category":"Symbols","sort_order":94,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"door":{"name":"Door","unified":"1F6AA","variations":[],"docomo":"E714","au":null,"softbank":null,"google":"FE4F3","image":"1f6aa.png","sheet_x":30,"sheet_y":18,"short_name":"door","short_names":["door"],"text":null,"texts":null,"category":"Objects","sort_order":94,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cherry_blossom":{"name":"Cherry Blossom","unified":"1F338","variations":[],"docomo":"E748","au":"E4CA","softbank":"E030","google":"FE040","image":"1f338.png","sheet_x":6,"sheet_y":34,"short_name":"cherry_blossom","short_names":["cherry_blossom"],"text":null,"texts":null,"category":"Nature","sort_order":94,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fist":{"name":"Raised Fist","unified":"270A","variations":[],"docomo":"E693","au":"EB83","softbank":"E010","google":"FEB93","image":"270a.png","sheet_x":3,"sheet_y":9,"short_name":"fist","short_names":["fist"],"text":null,"texts":null,"category":"People","sort_order":94,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"270A-1F3FB":{"unified":"270A-1F3FB","image":"270a-1f3fb.png","sheet_x":3,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270A-1F3FC":{"unified":"270A-1F3FC","image":"270a-1f3fc.png","sheet_x":3,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270A-1F3FD":{"unified":"270A-1F3FD","image":"270a-1f3fd.png","sheet_x":3,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270A-1F3FE":{"unified":"270A-1F3FE","image":"270a-1f3fe.png","sheet_x":3,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270A-1F3FF":{"unified":"270A-1F3FF","image":"270a-1f3ff.png","sheet_x":3,"sheet_y":14,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"statue_of_liberty":{"name":"Statue of Liberty","unified":"1F5FD","variations":[],"docomo":null,"au":null,"softbank":"E51D","google":"FE4C6","image":"1f5fd.png","sheet_x":26,"sheet_y":12,"short_name":"statue_of_liberty","short_names":["statue_of_liberty"],"text":null,"texts":null,"category":"Places","sort_order":95,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"v":{"name":"Victory Hand","unified":"270C","variations":["270C-FE0F"],"docomo":"E694","au":"E5A6","softbank":"E011","google":"FEB94","image":"270c.png","sheet_x":3,"sheet_y":21,"short_name":"v","short_names":["v"],"text":null,"texts":null,"category":"People","sort_order":95,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"270C-1F3FB":{"unified":"270C-1F3FB","image":"270c-1f3fb.png","sheet_x":3,"sheet_y":22,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270C-1F3FC":{"unified":"270C-1F3FC","image":"270c-1f3fc.png","sheet_x":3,"sheet_y":23,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270C-1F3FD":{"unified":"270C-1F3FD","image":"270c-1f3fd.png","sheet_x":3,"sheet_y":24,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270C-1F3FE":{"unified":"270C-1F3FE","image":"270c-1f3fe.png","sheet_x":3,"sheet_y":25,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270C-1F3FF":{"unified":"270C-1F3FF","image":"270c-1f3ff.png","sheet_x":3,"sheet_y":26,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"children_crossing":{"name":"Children Crossing","unified":"1F6B8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6b8.png","sheet_x":31,"sheet_y":6,"short_name":"children_crossing","short_names":["children_crossing"],"text":null,"texts":null,"category":"Symbols","sort_order":95,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bouquet":{"name":"Bouquet","unified":"1F490","variations":[],"docomo":null,"au":"EA95","softbank":"E306","google":"FE828","image":"1f490.png","sheet_x":19,"sheet_y":32,"short_name":"bouquet","short_names":["bouquet"],"text":null,"texts":null,"category":"Nature","sort_order":95,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bellhop_bell":{"name":"Bellhop Bell","unified":"1F6CE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6ce.png","sheet_x":31,"sheet_y":28,"short_name":"bellhop_bell","short_names":["bellhop_bell"],"text":null,"texts":null,"category":"Objects","sort_order":95,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gw":{"name":"Regional Indicator Symbol Letters Gw","unified":"1F1EC-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1fc.png","sheet_x":35,"sheet_y":7,"short_name":"flag-gw","short_names":["flag-gw"],"text":null,"texts":null,"category":"Flags","sort_order":95,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"beginner":{"name":"Japanese Symbol for Beginner","unified":"1F530","variations":[],"docomo":null,"au":"E480","softbank":"E209","google":"FE044","image":"1f530.png","sheet_x":23,"sheet_y":32,"short_name":"beginner","short_names":["beginner"],"text":null,"texts":null,"category":"Symbols","sort_order":96,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"house":{"name":"House Building","unified":"1F3E0","variations":[],"docomo":"E663","au":"E4AB","softbank":"E036","google":"FE4B0","image":"1f3e0.png","sheet_x":11,"sheet_y":17,"short_name":"house","short_names":["house"],"text":null,"texts":null,"category":"Places","sort_order":96,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mushroom":{"name":"Mushroom","unified":"1F344","variations":[],"docomo":null,"au":"EB37","softbank":null,"google":"FE04B","image":"1f344.png","sheet_x":7,"sheet_y":5,"short_name":"mushroom","short_names":["mushroom"],"text":null,"texts":null,"category":"Nature","sort_order":96,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"frame_with_picture":{"name":"Frame with Picture","unified":"1F5BC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5bc.png","sheet_x":25,"sheet_y":35,"short_name":"frame_with_picture","short_names":["frame_with_picture"],"text":null,"texts":null,"category":"Objects","sort_order":96,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ok_hand":{"name":"Ok Hand Sign","unified":"1F44C","variations":[],"docomo":"E70B","au":"EAD4","softbank":"E420","google":"FEB9F","image":"1f44c.png","sheet_x":14,"sheet_y":39,"short_name":"ok_hand","short_names":["ok_hand"],"text":null,"texts":null,"category":"People","sort_order":96,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F44C-1F3FB":{"unified":"1F44C-1F3FB","image":"1f44c-1f3fb.png","sheet_x":14,"sheet_y":40,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44C-1F3FC":{"unified":"1F44C-1F3FC","image":"1f44c-1f3fc.png","sheet_x":15,"sheet_y":0,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44C-1F3FD":{"unified":"1F44C-1F3FD","image":"1f44c-1f3fd.png","sheet_x":15,"sheet_y":1,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44C-1F3FE":{"unified":"1F44C-1F3FE","image":"1f44c-1f3fe.png","sheet_x":15,"sheet_y":2,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F44C-1F3FF":{"unified":"1F44C-1F3FF","image":"1f44c-1f3ff.png","sheet_x":15,"sheet_y":3,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-gy":{"name":"Regional Indicator Symbol Letters Gy","unified":"1F1EC-1F1FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1fe.png","sheet_x":35,"sheet_y":8,"short_name":"flag-gy","short_names":["flag-gy"],"text":null,"texts":null,"category":"Flags","sort_order":96,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ht":{"name":"Regional Indicator Symbol Letters Ht","unified":"1F1ED-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ed-1f1f9.png","sheet_x":35,"sheet_y":13,"short_name":"flag-ht","short_names":["flag-ht"],"text":null,"texts":null,"category":"Flags","sort_order":97,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"house_with_garden":{"name":"House with Garden","unified":"1F3E1","variations":[],"docomo":"E663","au":"EB09","softbank":"E036","google":"FE4B1","image":"1f3e1.png","sheet_x":11,"sheet_y":18,"short_name":"house_with_garden","short_names":["house_with_garden"],"text":null,"texts":null,"category":"Places","sort_order":97,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"world_map":{"name":"World Map","unified":"1F5FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5fa.png","sheet_x":26,"sheet_y":9,"short_name":"world_map","short_names":["world_map"],"text":null,"texts":null,"category":"Objects","sort_order":97,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"chestnut":{"name":"Chestnut","unified":"1F330","variations":[],"docomo":null,"au":"EB38","softbank":null,"google":"FE04C","image":"1f330.png","sheet_x":6,"sheet_y":26,"short_name":"chestnut","short_names":["chestnut"],"text":null,"texts":null,"category":"Nature","sort_order":97,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hand":{"name":"Raised Hand","unified":"270B","variations":[],"docomo":"E695","au":"E5A7","softbank":"E012","google":"FEB95","image":"270b.png","sheet_x":3,"sheet_y":15,"short_name":"hand","short_names":["hand","raised_hand"],"text":null,"texts":null,"category":"People","sort_order":97,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"270B-1F3FB":{"unified":"270B-1F3FB","image":"270b-1f3fb.png","sheet_x":3,"sheet_y":16,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270B-1F3FC":{"unified":"270B-1F3FC","image":"270b-1f3fc.png","sheet_x":3,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270B-1F3FD":{"unified":"270B-1F3FD","image":"270b-1f3fd.png","sheet_x":3,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270B-1F3FE":{"unified":"270B-1F3FE","image":"270b-1f3fe.png","sheet_x":3,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270B-1F3FF":{"unified":"270B-1F3FF","image":"270b-1f3ff.png","sheet_x":3,"sheet_y":20,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"recycle":{"name":"Black Universal Recycling Symbol","unified":"267B","variations":["267B-FE0F"],"docomo":"E735","au":"EB79","softbank":null,"google":"FEB2C","image":"267b.png","sheet_x":2,"sheet_y":2,"short_name":"recycle","short_names":["recycle"],"text":null,"texts":null,"category":"Symbols","sort_order":97,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"umbrella_on_ground":{"name":"Umbrella on Ground","unified":"26F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26f1.png","sheet_x":2,"sheet_y":31,"short_name":"umbrella_on_ground","short_names":["umbrella_on_ground"],"text":null,"texts":null,"category":"Objects","sort_order":98,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"jack_o_lantern":{"name":"Jack-O-Lantern","unified":"1F383","variations":[],"docomo":null,"au":"EAEE","softbank":"E445","google":"FE51F","image":"1f383.png","sheet_x":8,"sheet_y":27,"short_name":"jack_o_lantern","short_names":["jack_o_lantern"],"text":null,"texts":null,"category":"Nature","sort_order":98,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"open_hands":{"name":"Open Hands Sign","unified":"1F450","variations":[],"docomo":"E695","au":"EAD6","softbank":"E422","google":"FEBA1","image":"1f450.png","sheet_x":15,"sheet_y":22,"short_name":"open_hands","short_names":["open_hands"],"text":null,"texts":null,"category":"People","sort_order":98,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F450-1F3FB":{"unified":"1F450-1F3FB","image":"1f450-1f3fb.png","sheet_x":15,"sheet_y":23,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F450-1F3FC":{"unified":"1F450-1F3FC","image":"1f450-1f3fc.png","sheet_x":15,"sheet_y":24,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F450-1F3FD":{"unified":"1F450-1F3FD","image":"1f450-1f3fd.png","sheet_x":15,"sheet_y":25,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F450-1F3FE":{"unified":"1F450-1F3FE","image":"1f450-1f3fe.png","sheet_x":15,"sheet_y":26,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F450-1F3FF":{"unified":"1F450-1F3FF","image":"1f450-1f3ff.png","sheet_x":15,"sheet_y":27,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"derelict_house_building":{"name":"Derelict House Building","unified":"1F3DA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3da.png","sheet_x":11,"sheet_y":11,"short_name":"derelict_house_building","short_names":["derelict_house_building"],"text":null,"texts":null,"category":"Places","sort_order":98,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"u6307":{"name":"Squared Cjk Unified Ideograph-6307","unified":"1F22F","variations":["1F22F-FE0F"],"docomo":null,"au":"EA8B","softbank":"E22C","google":"FEB40","image":"1f22f.png","sheet_x":5,"sheet_y":9,"short_name":"u6307","short_names":["u6307"],"text":null,"texts":null,"category":"Symbols","sort_order":98,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-hn":{"name":"Regional Indicator Symbol Letters Hn","unified":"1F1ED-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ed-1f1f3.png","sheet_x":35,"sheet_y":11,"short_name":"flag-hn","short_names":["flag-hn"],"text":null,"texts":null,"category":"Flags","sort_order":98,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"shell":{"name":"Spiral Shell","unified":"1F41A","variations":[],"docomo":null,"au":"EAEC","softbank":"E441","google":"FE1C6","image":"1f41a.png","sheet_x":12,"sheet_y":31,"short_name":"shell","short_names":["shell"],"text":null,"texts":null,"category":"Nature","sort_order":99,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-hk":{"name":"Regional Indicator Symbol Letters Hk","unified":"1F1ED-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ed-1f1f0.png","sheet_x":35,"sheet_y":9,"short_name":"flag-hk","short_names":["flag-hk"],"text":null,"texts":null,"category":"Flags","sort_order":99,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"moyai":{"name":"Moyai","unified":"1F5FF","variations":[],"docomo":null,"au":"EB6C","softbank":null,"google":"FE4C8","image":"1f5ff.png","sheet_x":26,"sheet_y":14,"short_name":"moyai","short_names":["moyai"],"text":null,"texts":null,"category":"Objects","sort_order":99,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"muscle":{"name":"Flexed Biceps","unified":"1F4AA","variations":[],"docomo":null,"au":"E4E9","softbank":"E14C","google":"FEB5E","image":"1f4aa.png","sheet_x":20,"sheet_y":17,"short_name":"muscle","short_names":["muscle"],"text":null,"texts":null,"category":"People","sort_order":99,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F4AA-1F3FB":{"unified":"1F4AA-1F3FB","image":"1f4aa-1f3fb.png","sheet_x":20,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F4AA-1F3FC":{"unified":"1F4AA-1F3FC","image":"1f4aa-1f3fc.png","sheet_x":20,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F4AA-1F3FD":{"unified":"1F4AA-1F3FD","image":"1f4aa-1f3fd.png","sheet_x":20,"sheet_y":20,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F4AA-1F3FE":{"unified":"1F4AA-1F3FE","image":"1f4aa-1f3fe.png","sheet_x":20,"sheet_y":21,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F4AA-1F3FF":{"unified":"1F4AA-1F3FF","image":"1f4aa-1f3ff.png","sheet_x":20,"sheet_y":22,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"chart":{"name":"Chart with Upwards Trend and Yen Sign","unified":"1F4B9","variations":[],"docomo":null,"au":"E5DC","softbank":"E14A","google":"FE4DF","image":"1f4b9.png","sheet_x":20,"sheet_y":37,"short_name":"chart","short_names":["chart"],"text":null,"texts":null,"category":"Symbols","sort_order":99,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"office":{"name":"Office Building","unified":"1F3E2","variations":[],"docomo":"E664","au":"E4AD","softbank":"E038","google":"FE4B2","image":"1f3e2.png","sheet_x":11,"sheet_y":19,"short_name":"office","short_names":["office"],"text":null,"texts":null,"category":"Places","sort_order":99,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"shopping_bags":{"name":"Shopping Bags","unified":"1F6CD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6cd.png","sheet_x":31,"sheet_y":27,"short_name":"shopping_bags","short_names":["shopping_bags"],"text":null,"texts":null,"category":"Objects","sort_order":100,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"department_store":{"name":"Department Store","unified":"1F3EC","variations":[],"docomo":null,"au":"EAF6","softbank":"E504","google":"FE4BD","image":"1f3ec.png","sheet_x":11,"sheet_y":29,"short_name":"department_store","short_names":["department_store"],"text":null,"texts":null,"category":"Places","sort_order":100,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pray":{"name":"Person with Folded Hands","unified":"1F64F","variations":[],"docomo":null,"au":"EAD2","softbank":"E41D","google":"FE35B","image":"1f64f.png","sheet_x":29,"sheet_y":6,"short_name":"pray","short_names":["pray"],"text":null,"texts":null,"category":"People","sort_order":100,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F64F-1F3FB":{"unified":"1F64F-1F3FB","image":"1f64f-1f3fb.png","sheet_x":29,"sheet_y":7,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64F-1F3FC":{"unified":"1F64F-1F3FC","image":"1f64f-1f3fc.png","sheet_x":29,"sheet_y":8,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64F-1F3FD":{"unified":"1F64F-1F3FD","image":"1f64f-1f3fd.png","sheet_x":29,"sheet_y":9,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64F-1F3FE":{"unified":"1F64F-1F3FE","image":"1f64f-1f3fe.png","sheet_x":29,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64F-1F3FF":{"unified":"1F64F-1F3FF","image":"1f64f-1f3ff.png","sheet_x":29,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-hu":{"name":"Regional Indicator Symbol Letters Hu","unified":"1F1ED-1F1FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ed-1f1fa.png","sheet_x":35,"sheet_y":14,"short_name":"flag-hu","short_names":["flag-hu"],"text":null,"texts":null,"category":"Flags","sort_order":100,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sparkle":{"name":"Sparkle","unified":"2747","variations":["2747-FE0F"],"docomo":"E6FA","au":"E46C","softbank":"E32E","google":"FEB77","image":"2747.png","sheet_x":4,"sheet_y":2,"short_name":"sparkle","short_names":["sparkle"],"text":null,"texts":null,"category":"Symbols","sort_order":100,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"spider_web":{"name":"Spider Web","unified":"1F578","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f578.png","sheet_x":25,"sheet_y":6,"short_name":"spider_web","short_names":["spider_web"],"text":null,"texts":null,"category":"Nature","sort_order":100,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"point_up":{"name":"White Up Pointing Index","unified":"261D","variations":["261D-FE0F"],"docomo":null,"au":"E4F6","softbank":"E00F","google":"FEB98","image":"261d.png","sheet_x":1,"sheet_y":10,"short_name":"point_up","short_names":["point_up"],"text":null,"texts":null,"category":"People","sort_order":101,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"261D-1F3FB":{"unified":"261D-1F3FB","image":"261d-1f3fb.png","sheet_x":1,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"261D-1F3FC":{"unified":"261D-1F3FC","image":"261d-1f3fc.png","sheet_x":1,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"261D-1F3FD":{"unified":"261D-1F3FD","image":"261d-1f3fd.png","sheet_x":1,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"261D-1F3FE":{"unified":"261D-1F3FE","image":"261d-1f3fe.png","sheet_x":1,"sheet_y":14,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"261D-1F3FF":{"unified":"261D-1F3FF","image":"261d-1f3ff.png","sheet_x":1,"sheet_y":15,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"eight_spoked_asterisk":{"name":"Eight Spoked Asterisk","unified":"2733","variations":["2733-FE0F"],"docomo":"E6F8","au":"E53E","softbank":"E206","google":"FEB62","image":"2733.png","sheet_x":3,"sheet_y":40,"short_name":"eight_spoked_asterisk","short_names":["eight_spoked_asterisk"],"text":null,"texts":null,"category":"Symbols","sort_order":101,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-is":{"name":"Regional Indicator Symbol Letters Is","unified":"1F1EE-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1f8.png","sheet_x":35,"sheet_y":24,"short_name":"flag-is","short_names":["flag-is"],"text":null,"texts":null,"category":"Flags","sort_order":101,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"post_office":{"name":"Japanese Post Office","unified":"1F3E3","variations":[],"docomo":"E665","au":"E5DE","softbank":"E153","google":"FE4B3","image":"1f3e3.png","sheet_x":11,"sheet_y":20,"short_name":"post_office","short_names":["post_office"],"text":null,"texts":null,"category":"Places","sort_order":101,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"earth_americas":{"name":"Earth Globe Americas","unified":"1F30E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f30e.png","sheet_x":5,"sheet_y":35,"short_name":"earth_americas","short_names":["earth_americas"],"text":null,"texts":null,"category":"Nature","sort_order":101,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"balloon":{"name":"Balloon","unified":"1F388","variations":[],"docomo":null,"au":"EA9B","softbank":"E310","google":"FE516","image":"1f388.png","sheet_x":8,"sheet_y":37,"short_name":"balloon","short_names":["balloon"],"text":null,"texts":null,"category":"Objects","sort_order":101,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"european_post_office":{"name":"European Post Office","unified":"1F3E4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3e4.png","sheet_x":11,"sheet_y":21,"short_name":"european_post_office","short_names":["european_post_office"],"text":null,"texts":null,"category":"Places","sort_order":102,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"point_up_2":{"name":"White Up Pointing Backhand Index","unified":"1F446","variations":[],"docomo":null,"au":"EA8D","softbank":"E22E","google":"FEB99","image":"1f446.png","sheet_x":14,"sheet_y":3,"short_name":"point_up_2","short_names":["point_up_2"],"text":null,"texts":null,"category":"People","sort_order":102,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F446-1F3FB":{"unified":"1F446-1F3FB","image":"1f446-1f3fb.png","sheet_x":14,"sheet_y":4,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F446-1F3FC":{"unified":"1F446-1F3FC","image":"1f446-1f3fc.png","sheet_x":14,"sheet_y":5,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F446-1F3FD":{"unified":"1F446-1F3FD","image":"1f446-1f3fd.png","sheet_x":14,"sheet_y":6,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F446-1F3FE":{"unified":"1F446-1F3FE","image":"1f446-1f3fe.png","sheet_x":14,"sheet_y":7,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F446-1F3FF":{"unified":"1F446-1F3FF","image":"1f446-1f3ff.png","sheet_x":14,"sheet_y":8,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"earth_africa":{"name":"Earth Globe Europe-Africa","unified":"1F30D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f30d.png","sheet_x":5,"sheet_y":34,"short_name":"earth_africa","short_names":["earth_africa"],"text":null,"texts":null,"category":"Nature","sort_order":102,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"negative_squared_cross_mark":{"name":"Negative Squared Cross Mark","unified":"274E","variations":[],"docomo":null,"au":"E551","softbank":"E333","google":"FEB46","image":"274e.png","sheet_x":4,"sheet_y":4,"short_name":"negative_squared_cross_mark","short_names":["negative_squared_cross_mark"],"text":null,"texts":null,"category":"Symbols","sort_order":102,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flags":{"name":"Carp Streamer","unified":"1F38F","variations":[],"docomo":null,"au":"EAE7","softbank":"E43B","google":"FE51C","image":"1f38f.png","sheet_x":9,"sheet_y":3,"short_name":"flags","short_names":["flags"],"text":null,"texts":null,"category":"Objects","sort_order":102,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-in":{"name":"Regional Indicator Symbol Letters in","unified":"1F1EE-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1f3.png","sheet_x":35,"sheet_y":20,"short_name":"flag-in","short_names":["flag-in"],"text":null,"texts":null,"category":"Flags","sort_order":102,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hospital":{"name":"Hospital","unified":"1F3E5","variations":[],"docomo":"E666","au":"E5DF","softbank":"E155","google":"FE4B4","image":"1f3e5.png","sheet_x":11,"sheet_y":22,"short_name":"hospital","short_names":["hospital"],"text":null,"texts":null,"category":"Places","sort_order":103,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"point_down":{"name":"White Down Pointing Backhand Index","unified":"1F447","variations":[],"docomo":null,"au":"EA8E","softbank":"E22F","google":"FEB9A","image":"1f447.png","sheet_x":14,"sheet_y":9,"short_name":"point_down","short_names":["point_down"],"text":null,"texts":null,"category":"People","sort_order":103,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F447-1F3FB":{"unified":"1F447-1F3FB","image":"1f447-1f3fb.png","sheet_x":14,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F447-1F3FC":{"unified":"1F447-1F3FC","image":"1f447-1f3fc.png","sheet_x":14,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F447-1F3FD":{"unified":"1F447-1F3FD","image":"1f447-1f3fd.png","sheet_x":14,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F447-1F3FE":{"unified":"1F447-1F3FE","image":"1f447-1f3fe.png","sheet_x":14,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F447-1F3FF":{"unified":"1F447-1F3FF","image":"1f447-1f3ff.png","sheet_x":14,"sheet_y":14,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"white_check_mark":{"name":"White Heavy Check Mark","unified":"2705","variations":[],"docomo":null,"au":"E55E","softbank":null,"google":"FEB4A","image":"2705.png","sheet_x":3,"sheet_y":6,"short_name":"white_check_mark","short_names":["white_check_mark"],"text":null,"texts":null,"category":"Symbols","sort_order":103,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ribbon":{"name":"Ribbon","unified":"1F380","variations":[],"docomo":"E684","au":"E59F","softbank":"E314","google":"FE50F","image":"1f380.png","sheet_x":8,"sheet_y":24,"short_name":"ribbon","short_names":["ribbon"],"text":null,"texts":null,"category":"Objects","sort_order":103,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"earth_asia":{"name":"Earth Globe Asia-Australia","unified":"1F30F","variations":[],"docomo":null,"au":"E5B3","softbank":null,"google":"FE039","image":"1f30f.png","sheet_x":5,"sheet_y":36,"short_name":"earth_asia","short_names":["earth_asia"],"text":null,"texts":null,"category":"Nature","sort_order":103,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-id":{"name":"Regional Indicator Symbol Letters Id","unified":"1F1EE-1F1E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1e9.png","sheet_x":35,"sheet_y":16,"short_name":"flag-id","short_names":["flag-id"],"text":null,"texts":null,"category":"Flags","sort_order":103,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"full_moon":{"name":"Full Moon Symbol","unified":"1F315","variations":[],"docomo":"E6A0","au":null,"softbank":null,"google":"FE015","image":"1f315.png","sheet_x":6,"sheet_y":1,"short_name":"full_moon","short_names":["full_moon"],"text":null,"texts":null,"category":"Nature","sort_order":104,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"point_left":{"name":"White Left Pointing Backhand Index","unified":"1F448","variations":[],"docomo":null,"au":"E4FF","softbank":"E230","google":"FEB9B","image":"1f448.png","sheet_x":14,"sheet_y":15,"short_name":"point_left","short_names":["point_left"],"text":null,"texts":null,"category":"People","sort_order":104,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F448-1F3FB":{"unified":"1F448-1F3FB","image":"1f448-1f3fb.png","sheet_x":14,"sheet_y":16,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F448-1F3FC":{"unified":"1F448-1F3FC","image":"1f448-1f3fc.png","sheet_x":14,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F448-1F3FD":{"unified":"1F448-1F3FD","image":"1f448-1f3fd.png","sheet_x":14,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F448-1F3FE":{"unified":"1F448-1F3FE","image":"1f448-1f3fe.png","sheet_x":14,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F448-1F3FF":{"unified":"1F448-1F3FF","image":"1f448-1f3ff.png","sheet_x":14,"sheet_y":20,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-ir":{"name":"Regional Indicator Symbol Letters Ir","unified":"1F1EE-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1f7.png","sheet_x":35,"sheet_y":23,"short_name":"flag-ir","short_names":["flag-ir"],"text":null,"texts":null,"category":"Flags","sort_order":104,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"gift":{"name":"Wrapped Present","unified":"1F381","variations":[],"docomo":"E685","au":"E4CF","softbank":"E112","google":"FE510","image":"1f381.png","sheet_x":8,"sheet_y":25,"short_name":"gift","short_names":["gift"],"text":null,"texts":null,"category":"Objects","sort_order":104,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bank":{"name":"Bank","unified":"1F3E6","variations":[],"docomo":"E667","au":"E4AA","softbank":"E14D","google":"FE4B5","image":"1f3e6.png","sheet_x":11,"sheet_y":23,"short_name":"bank","short_names":["bank"],"text":null,"texts":null,"category":"Places","sort_order":104,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"diamond_shape_with_a_dot_inside":{"name":"Diamond Shape with a Dot Inside","unified":"1F4A0","variations":[],"docomo":"E6F8","au":null,"softbank":null,"google":"FEB55","image":"1f4a0.png","sheet_x":20,"sheet_y":7,"short_name":"diamond_shape_with_a_dot_inside","short_names":["diamond_shape_with_a_dot_inside"],"text":null,"texts":null,"category":"Symbols","sort_order":104,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-iq":{"name":"Regional Indicator Symbol Letters Iq","unified":"1F1EE-1F1F6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1f6.png","sheet_x":35,"sheet_y":22,"short_name":"flag-iq","short_names":["flag-iq"],"text":null,"texts":null,"category":"Flags","sort_order":105,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"confetti_ball":{"name":"Confetti Ball","unified":"1F38A","variations":[],"docomo":null,"au":"E46F","softbank":null,"google":"FE520","image":"1f38a.png","sheet_x":8,"sheet_y":39,"short_name":"confetti_ball","short_names":["confetti_ball"],"text":null,"texts":null,"category":"Objects","sort_order":105,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"point_right":{"name":"White Right Pointing Backhand Index","unified":"1F449","variations":[],"docomo":null,"au":"E500","softbank":"E231","google":"FEB9C","image":"1f449.png","sheet_x":14,"sheet_y":21,"short_name":"point_right","short_names":["point_right"],"text":null,"texts":null,"category":"People","sort_order":105,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F449-1F3FB":{"unified":"1F449-1F3FB","image":"1f449-1f3fb.png","sheet_x":14,"sheet_y":22,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F449-1F3FC":{"unified":"1F449-1F3FC","image":"1f449-1f3fc.png","sheet_x":14,"sheet_y":23,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F449-1F3FD":{"unified":"1F449-1F3FD","image":"1f449-1f3fd.png","sheet_x":14,"sheet_y":24,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F449-1F3FE":{"unified":"1F449-1F3FE","image":"1f449-1f3fe.png","sheet_x":14,"sheet_y":25,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F449-1F3FF":{"unified":"1F449-1F3FF","image":"1f449-1f3ff.png","sheet_x":14,"sheet_y":26,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"cyclone":{"name":"Cyclone","unified":"1F300","variations":[],"docomo":"E643","au":"E469","softbank":"E443","google":"FE005","image":"1f300.png","sheet_x":5,"sheet_y":21,"short_name":"cyclone","short_names":["cyclone"],"text":null,"texts":null,"category":"Symbols","sort_order":105,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"waning_gibbous_moon":{"name":"Waning Gibbous Moon Symbol","unified":"1F316","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f316.png","sheet_x":6,"sheet_y":2,"short_name":"waning_gibbous_moon","short_names":["waning_gibbous_moon"],"text":null,"texts":null,"category":"Nature","sort_order":105,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hotel":{"name":"Hotel","unified":"1F3E8","variations":[],"docomo":"E669","au":"EA81","softbank":"E158","google":"FE4B7","image":"1f3e8.png","sheet_x":11,"sheet_y":25,"short_name":"hotel","short_names":["hotel"],"text":null,"texts":null,"category":"Places","sort_order":105,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"loop":{"name":"Double Curly Loop","unified":"27BF","variations":[],"docomo":"E6DF","au":null,"softbank":"E211","google":"FE82B","image":"27bf.png","sheet_x":4,"sheet_y":16,"short_name":"loop","short_names":["loop"],"text":null,"texts":null,"category":"Symbols","sort_order":106,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"convenience_store":{"name":"Convenience Store","unified":"1F3EA","variations":[],"docomo":"E66A","au":"E4A4","softbank":"E156","google":"FE4B9","image":"1f3ea.png","sheet_x":11,"sheet_y":27,"short_name":"convenience_store","short_names":["convenience_store"],"text":null,"texts":null,"category":"Places","sort_order":106,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"last_quarter_moon":{"name":"Last Quarter Moon Symbol","unified":"1F317","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f317.png","sheet_x":6,"sheet_y":3,"short_name":"last_quarter_moon","short_names":["last_quarter_moon"],"text":null,"texts":null,"category":"Nature","sort_order":106,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tada":{"name":"Party Popper","unified":"1F389","variations":[],"docomo":null,"au":"EA9C","softbank":"E312","google":"FE517","image":"1f389.png","sheet_x":8,"sheet_y":38,"short_name":"tada","short_names":["tada"],"text":null,"texts":null,"category":"Objects","sort_order":106,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"middle_finger":{"name":"Reversed Hand with Middle Finger Extended","unified":"1F595","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f595.png","sheet_x":25,"sheet_y":19,"short_name":"middle_finger","short_names":["middle_finger","reversed_hand_with_middle_finger_extended"],"text":null,"texts":null,"category":"People","sort_order":106,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F595-1F3FB":{"unified":"1F595-1F3FB","image":"1f595-1f3fb.png","sheet_x":25,"sheet_y":20,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F595-1F3FC":{"unified":"1F595-1F3FC","image":"1f595-1f3fc.png","sheet_x":25,"sheet_y":21,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F595-1F3FD":{"unified":"1F595-1F3FD","image":"1f595-1f3fd.png","sheet_x":25,"sheet_y":22,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F595-1F3FE":{"unified":"1F595-1F3FE","image":"1f595-1f3fe.png","sheet_x":25,"sheet_y":23,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F595-1F3FF":{"unified":"1F595-1F3FF","image":"1f595-1f3ff.png","sheet_x":25,"sheet_y":24,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-ie":{"name":"Regional Indicator Symbol Letters Ie","unified":"1F1EE-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1ea.png","sheet_x":35,"sheet_y":17,"short_name":"flag-ie","short_names":["flag-ie"],"text":null,"texts":null,"category":"Flags","sort_order":106,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dolls":{"name":"Japanese Dolls","unified":"1F38E","variations":[],"docomo":null,"au":"EAE4","softbank":"E438","google":"FE519","image":"1f38e.png","sheet_x":9,"sheet_y":2,"short_name":"dolls","short_names":["dolls"],"text":null,"texts":null,"category":"Objects","sort_order":107,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"globe_with_meridians":{"name":"Globe with Meridians","unified":"1F310","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f310.png","sheet_x":5,"sheet_y":37,"short_name":"globe_with_meridians","short_names":["globe_with_meridians"],"text":null,"texts":null,"category":"Symbols","sort_order":107,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-im":{"name":"Regional Indicator Symbol Letters Im","unified":"1F1EE-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1f2.png","sheet_x":35,"sheet_y":19,"short_name":"flag-im","short_names":["flag-im"],"text":null,"texts":null,"category":"Flags","sort_order":107,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"waning_crescent_moon":{"name":"Waning Crescent Moon Symbol","unified":"1F318","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f318.png","sheet_x":6,"sheet_y":4,"short_name":"waning_crescent_moon","short_names":["waning_crescent_moon"],"text":null,"texts":null,"category":"Nature","sort_order":107,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"raised_hand_with_fingers_splayed":{"name":"Raised Hand with Fingers Splayed","unified":"1F590","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f590.png","sheet_x":25,"sheet_y":13,"short_name":"raised_hand_with_fingers_splayed","short_names":["raised_hand_with_fingers_splayed"],"text":null,"texts":null,"category":"People","sort_order":107,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F590-1F3FB":{"unified":"1F590-1F3FB","image":"1f590-1f3fb.png","sheet_x":25,"sheet_y":14,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F590-1F3FC":{"unified":"1F590-1F3FC","image":"1f590-1f3fc.png","sheet_x":25,"sheet_y":15,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F590-1F3FD":{"unified":"1F590-1F3FD","image":"1f590-1f3fd.png","sheet_x":25,"sheet_y":16,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F590-1F3FE":{"unified":"1F590-1F3FE","image":"1f590-1f3fe.png","sheet_x":25,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F590-1F3FF":{"unified":"1F590-1F3FF","image":"1f590-1f3ff.png","sheet_x":25,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"school":{"name":"School","unified":"1F3EB","variations":[],"docomo":"E73E","au":"EA80","softbank":"E157","google":"FE4BA","image":"1f3eb.png","sheet_x":11,"sheet_y":28,"short_name":"school","short_names":["school"],"text":null,"texts":null,"category":"Places","sort_order":107,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"new_moon":{"name":"New Moon Symbol","unified":"1F311","variations":[],"docomo":"E69C","au":"E5A8","softbank":null,"google":"FE011","image":"1f311.png","sheet_x":5,"sheet_y":38,"short_name":"new_moon","short_names":["new_moon"],"text":null,"texts":null,"category":"Nature","sort_order":108,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"the_horns":{"name":"Sign of the Horns","unified":"1F918","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f918.png","sheet_x":32,"sheet_y":9,"short_name":"the_horns","short_names":["the_horns","sign_of_the_horns"],"text":null,"texts":null,"category":"People","sort_order":108,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F918-1F3FB":{"unified":"1F918-1F3FB","image":"1f918-1f3fb.png","sheet_x":32,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F918-1F3FC":{"unified":"1F918-1F3FC","image":"1f918-1f3fc.png","sheet_x":32,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F918-1F3FD":{"unified":"1F918-1F3FD","image":"1f918-1f3fd.png","sheet_x":32,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F918-1F3FE":{"unified":"1F918-1F3FE","image":"1f918-1f3fe.png","sheet_x":32,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F918-1F3FF":{"unified":"1F918-1F3FF","image":"1f918-1f3ff.png","sheet_x":32,"sheet_y":14,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"love_hotel":{"name":"Love Hotel","unified":"1F3E9","variations":[],"docomo":"E669-E6EF","au":"EAF3","softbank":"E501","google":"FE4B8","image":"1f3e9.png","sheet_x":11,"sheet_y":26,"short_name":"love_hotel","short_names":["love_hotel"],"text":null,"texts":null,"category":"Places","sort_order":108,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"m":{"name":"Circled Latin Capital Letter M","unified":"24C2","variations":["24C2-FE0F"],"docomo":"E65C","au":"E5BC","softbank":"E434","google":"FE7E1","image":"24c2.png","sheet_x":0,"sheet_y":32,"short_name":"m","short_names":["m"],"text":null,"texts":null,"category":"Symbols","sort_order":108,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-il":{"name":"Regional Indicator Symbol Letters Il","unified":"1F1EE-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ee-1f1f1.png","sheet_x":35,"sheet_y":18,"short_name":"flag-il","short_names":["flag-il"],"text":null,"texts":null,"category":"Flags","sort_order":108,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wind_chime":{"name":"Wind Chime","unified":"1F390","variations":[],"docomo":null,"au":"EAED","softbank":"E442","google":"FE51E","image":"1f390.png","sheet_x":9,"sheet_y":4,"short_name":"wind_chime","short_names":["wind_chime"],"text":null,"texts":null,"category":"Objects","sort_order":108,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"spock-hand":{"name":"Raised Hand with Part Between Middle and Ring Fingers","unified":"1F596","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f596.png","sheet_x":25,"sheet_y":25,"short_name":"spock-hand","short_names":["spock-hand"],"text":null,"texts":null,"category":"People","sort_order":109,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F596-1F3FB":{"unified":"1F596-1F3FB","image":"1f596-1f3fb.png","sheet_x":25,"sheet_y":26,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F596-1F3FC":{"unified":"1F596-1F3FC","image":"1f596-1f3fc.png","sheet_x":25,"sheet_y":27,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F596-1F3FD":{"unified":"1F596-1F3FD","image":"1f596-1f3fd.png","sheet_x":25,"sheet_y":28,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F596-1F3FE":{"unified":"1F596-1F3FE","image":"1f596-1f3fe.png","sheet_x":25,"sheet_y":29,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F596-1F3FF":{"unified":"1F596-1F3FF","image":"1f596-1f3ff.png","sheet_x":25,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"wedding":{"name":"Wedding","unified":"1F492","variations":[],"docomo":null,"au":"E5BB","softbank":"E43D","google":"FE82A","image":"1f492.png","sheet_x":19,"sheet_y":34,"short_name":"wedding","short_names":["wedding"],"text":null,"texts":null,"category":"Places","sort_order":109,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"atm":{"name":"Automated Teller Machine","unified":"1F3E7","variations":[],"docomo":"E668","au":"E4A3","softbank":"E154","google":"FE4B6","image":"1f3e7.png","sheet_x":11,"sheet_y":24,"short_name":"atm","short_names":["atm"],"text":null,"texts":null,"category":"Symbols","sort_order":109,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"crossed_flags":{"name":"Crossed Flags","unified":"1F38C","variations":[],"docomo":null,"au":"E5D9","softbank":"E143","google":"FE514","image":"1f38c.png","sheet_x":9,"sheet_y":0,"short_name":"crossed_flags","short_names":["crossed_flags"],"text":null,"texts":null,"category":"Objects","sort_order":109,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-it":{"name":"Regional Indicator Symbol Letters It","unified":"1F1EE-1F1F9","variations":[],"docomo":null,"au":"EB0F","softbank":"E50F","google":"FE4E9","image":"1f1ee-1f1f9.png","sheet_x":35,"sheet_y":25,"short_name":"flag-it","short_names":["flag-it","it"],"text":null,"texts":null,"category":"Flags","sort_order":109,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"waxing_crescent_moon":{"name":"Waxing Crescent Moon Symbol","unified":"1F312","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f312.png","sheet_x":5,"sheet_y":39,"short_name":"waxing_crescent_moon","short_names":["waxing_crescent_moon"],"text":null,"texts":null,"category":"Nature","sort_order":109,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"izakaya_lantern":{"name":"Izakaya Lantern","unified":"1F3EE","variations":[],"docomo":"E74B","au":"E4BD","softbank":"E30B","google":"FE4C2","image":"1f3ee.png","sheet_x":11,"sheet_y":31,"short_name":"izakaya_lantern","short_names":["izakaya_lantern","lantern"],"text":null,"texts":null,"category":"Objects","sort_order":110,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"first_quarter_moon":{"name":"First Quarter Moon Symbol","unified":"1F313","variations":[],"docomo":"E69E","au":"E5AA","softbank":"E04C","google":"FE013","image":"1f313.png","sheet_x":5,"sheet_y":40,"short_name":"first_quarter_moon","short_names":["first_quarter_moon"],"text":null,"texts":null,"category":"Nature","sort_order":110,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sa":{"name":"Squared Katakana Sa","unified":"1F202","variations":["1F202-FE0F"],"docomo":null,"au":"EA87","softbank":"E228","google":"FEB3F","image":"1f202.png","sheet_x":5,"sheet_y":7,"short_name":"sa","short_names":["sa"],"text":null,"texts":null,"category":"Symbols","sort_order":110,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"classical_building":{"name":"Classical Building","unified":"1F3DB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3db.png","sheet_x":11,"sheet_y":12,"short_name":"classical_building","short_names":["classical_building"],"text":null,"texts":null,"category":"Places","sort_order":110,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"writing_hand":{"name":"Writing Hand","unified":"270D","variations":["270D-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"270d.png","sheet_x":3,"sheet_y":27,"short_name":"writing_hand","short_names":["writing_hand"],"text":null,"texts":null,"category":"People","sort_order":110,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"270D-1F3FB":{"unified":"270D-1F3FB","image":"270d-1f3fb.png","sheet_x":3,"sheet_y":28,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270D-1F3FC":{"unified":"270D-1F3FC","image":"270d-1f3fc.png","sheet_x":3,"sheet_y":29,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270D-1F3FD":{"unified":"270D-1F3FD","image":"270d-1f3fd.png","sheet_x":3,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270D-1F3FE":{"unified":"270D-1F3FE","image":"270d-1f3fe.png","sheet_x":3,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"270D-1F3FF":{"unified":"270D-1F3FF","image":"270d-1f3ff.png","sheet_x":3,"sheet_y":32,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-ci":{"name":"Regional Indicator Symbol Letters Ci","unified":"1F1E8-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1ee.png","sheet_x":33,"sheet_y":36,"short_name":"flag-ci","short_names":["flag-ci"],"text":null,"texts":null,"category":"Flags","sort_order":110,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"moon":{"name":"Waxing Gibbous Moon Symbol","unified":"1F314","variations":[],"docomo":"E69D","au":"E5A9","softbank":"E04C","google":"FE012","image":"1f314.png","sheet_x":6,"sheet_y":0,"short_name":"moon","short_names":["moon","waxing_gibbous_moon"],"text":null,"texts":null,"category":"Nature","sort_order":111,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"church":{"name":"Church","unified":"26EA","variations":["26EA-FE0F"],"docomo":null,"au":"E5BB","softbank":"E037","google":"FE4BB","image":"26ea.png","sheet_x":2,"sheet_y":29,"short_name":"church","short_names":["church"],"text":null,"texts":null,"category":"Places","sort_order":111,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"email":{"name":"Envelope","unified":"2709","variations":["2709-FE0F"],"docomo":"E6D3","au":"E521","softbank":"E103","google":"FE529","image":"2709.png","sheet_x":3,"sheet_y":8,"short_name":"email","short_names":["email","envelope"],"text":null,"texts":null,"category":"Objects","sort_order":111,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"passport_control":{"name":"Passport Control","unified":"1F6C2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6c2.png","sheet_x":31,"sheet_y":21,"short_name":"passport_control","short_names":["passport_control"],"text":null,"texts":null,"category":"Symbols","sort_order":111,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"nail_care":{"name":"Nail Polish","unified":"1F485","variations":[],"docomo":null,"au":"EAA0","softbank":"E31D","google":"FE196","image":"1f485.png","sheet_x":19,"sheet_y":6,"short_name":"nail_care","short_names":["nail_care"],"text":null,"texts":null,"category":"People","sort_order":111,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F485-1F3FB":{"unified":"1F485-1F3FB","image":"1f485-1f3fb.png","sheet_x":19,"sheet_y":7,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F485-1F3FC":{"unified":"1F485-1F3FC","image":"1f485-1f3fc.png","sheet_x":19,"sheet_y":8,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F485-1F3FD":{"unified":"1F485-1F3FD","image":"1f485-1f3fd.png","sheet_x":19,"sheet_y":9,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F485-1F3FE":{"unified":"1F485-1F3FE","image":"1f485-1f3fe.png","sheet_x":19,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F485-1F3FF":{"unified":"1F485-1F3FF","image":"1f485-1f3ff.png","sheet_x":19,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-jm":{"name":"Regional Indicator Symbol Letters Jm","unified":"1F1EF-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ef-1f1f2.png","sheet_x":35,"sheet_y":27,"short_name":"flag-jm","short_names":["flag-jm"],"text":null,"texts":null,"category":"Flags","sort_order":111,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lips":{"name":"Mouth","unified":"1F444","variations":[],"docomo":"E6F9","au":"EAD1","softbank":"E41C","google":"FE193","image":"1f444.png","sheet_x":14,"sheet_y":1,"short_name":"lips","short_names":["lips"],"text":null,"texts":null,"category":"People","sort_order":112,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mosque":{"name":"Mosque","unified":"1F54C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f54c.png","sheet_x":24,"sheet_y":8,"short_name":"mosque","short_names":["mosque"],"text":null,"texts":null,"category":"Places","sort_order":112,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-jp":{"name":"Regional Indicator Symbol Letters Jp","unified":"1F1EF-1F1F5","variations":[],"docomo":null,"au":"E4CC","softbank":"E50B","google":"FE4E5","image":"1f1ef-1f1f5.png","sheet_x":35,"sheet_y":29,"short_name":"flag-jp","short_names":["flag-jp","jp"],"text":null,"texts":null,"category":"Flags","sort_order":112,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"new_moon_with_face":{"name":"New Moon with Face","unified":"1F31A","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f31a.png","sheet_x":6,"sheet_y":6,"short_name":"new_moon_with_face","short_names":["new_moon_with_face"],"text":null,"texts":null,"category":"Nature","sort_order":112,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"customs":{"name":"Customs","unified":"1F6C3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6c3.png","sheet_x":31,"sheet_y":22,"short_name":"customs","short_names":["customs"],"text":null,"texts":null,"category":"Symbols","sort_order":112,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"envelope_with_arrow":{"name":"Envelope with Downwards Arrow Above","unified":"1F4E9","variations":[],"docomo":"E6CF","au":"EB62","softbank":"E103","google":"FE52B","image":"1f4e9.png","sheet_x":22,"sheet_y":3,"short_name":"envelope_with_arrow","short_names":["envelope_with_arrow"],"text":null,"texts":null,"category":"Objects","sort_order":112,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"full_moon_with_face":{"name":"Full Moon with Face","unified":"1F31D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f31d.png","sheet_x":6,"sheet_y":9,"short_name":"full_moon_with_face","short_names":["full_moon_with_face"],"text":null,"texts":null,"category":"Nature","sort_order":113,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-je":{"name":"Regional Indicator Symbol Letters Je","unified":"1F1EF-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ef-1f1ea.png","sheet_x":35,"sheet_y":26,"short_name":"flag-je","short_names":["flag-je"],"text":null,"texts":null,"category":"Flags","sort_order":113,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"synagogue":{"name":"Synagogue","unified":"1F54D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f54d.png","sheet_x":24,"sheet_y":9,"short_name":"synagogue","short_names":["synagogue"],"text":null,"texts":null,"category":"Places","sort_order":113,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"baggage_claim":{"name":"Baggage Claim","unified":"1F6C4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6c4.png","sheet_x":31,"sheet_y":23,"short_name":"baggage_claim","short_names":["baggage_claim"],"text":null,"texts":null,"category":"Symbols","sort_order":113,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tongue":{"name":"Tongue","unified":"1F445","variations":[],"docomo":"E728","au":"EB47","softbank":"E409","google":"FE194","image":"1f445.png","sheet_x":14,"sheet_y":2,"short_name":"tongue","short_names":["tongue"],"text":null,"texts":null,"category":"People","sort_order":113,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"incoming_envelope":{"name":"Incoming Envelope","unified":"1F4E8","variations":[],"docomo":"E6CF","au":"E591","softbank":"E103","google":"FE52A","image":"1f4e8.png","sheet_x":22,"sheet_y":2,"short_name":"incoming_envelope","short_names":["incoming_envelope"],"text":null,"texts":null,"category":"Objects","sort_order":113,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"e-mail":{"name":"E-Mail Symbol","unified":"1F4E7","variations":[],"docomo":"E6D3","au":"EB71","softbank":"E103","google":"FEB92","image":"1f4e7.png","sheet_x":22,"sheet_y":1,"short_name":"e-mail","short_names":["e-mail"],"text":null,"texts":null,"category":"Objects","sort_order":114,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ear":{"name":"Ear","unified":"1F442","variations":[],"docomo":"E692","au":"E5A5","softbank":"E41B","google":"FE191","image":"1f442.png","sheet_x":13,"sheet_y":30,"short_name":"ear","short_names":["ear"],"text":null,"texts":null,"category":"People","sort_order":114,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F442-1F3FB":{"unified":"1F442-1F3FB","image":"1f442-1f3fb.png","sheet_x":13,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F442-1F3FC":{"unified":"1F442-1F3FC","image":"1f442-1f3fc.png","sheet_x":13,"sheet_y":32,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F442-1F3FD":{"unified":"1F442-1F3FD","image":"1f442-1f3fd.png","sheet_x":13,"sheet_y":33,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F442-1F3FE":{"unified":"1F442-1F3FE","image":"1f442-1f3fe.png","sheet_x":13,"sheet_y":34,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F442-1F3FF":{"unified":"1F442-1F3FF","image":"1f442-1f3ff.png","sheet_x":13,"sheet_y":35,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"first_quarter_moon_with_face":{"name":"First Quarter Moon with Face","unified":"1F31B","variations":[],"docomo":"E69E","au":"E489","softbank":"E04C","google":"FE016","image":"1f31b.png","sheet_x":6,"sheet_y":7,"short_name":"first_quarter_moon_with_face","short_names":["first_quarter_moon_with_face"],"text":null,"texts":null,"category":"Nature","sort_order":114,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"left_luggage":{"name":"Left Luggage","unified":"1F6C5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6c5.png","sheet_x":31,"sheet_y":24,"short_name":"left_luggage","short_names":["left_luggage"],"text":null,"texts":null,"category":"Symbols","sort_order":114,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"kaaba":{"name":"Kaaba","unified":"1F54B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f54b.png","sheet_x":24,"sheet_y":7,"short_name":"kaaba","short_names":["kaaba"],"text":null,"texts":null,"category":"Places","sort_order":114,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-jo":{"name":"Regional Indicator Symbol Letters Jo","unified":"1F1EF-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ef-1f1f4.png","sheet_x":35,"sheet_y":28,"short_name":"flag-jo","short_names":["flag-jo"],"text":null,"texts":null,"category":"Flags","sort_order":114,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-kz":{"name":"Regional Indicator Symbol Letters Kz","unified":"1F1F0-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1ff.png","sheet_x":35,"sheet_y":40,"short_name":"flag-kz","short_names":["flag-kz"],"text":null,"texts":null,"category":"Flags","sort_order":115,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wheelchair":{"name":"Wheelchair Symbol","unified":"267F","variations":["267F-FE0F"],"docomo":"E69B","au":"E47F","softbank":"E20A","google":"FEB20","image":"267f.png","sheet_x":2,"sheet_y":3,"short_name":"wheelchair","short_names":["wheelchair"],"text":null,"texts":null,"category":"Symbols","sort_order":115,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"last_quarter_moon_with_face":{"name":"Last Quarter Moon with Face","unified":"1F31C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f31c.png","sheet_x":6,"sheet_y":8,"short_name":"last_quarter_moon_with_face","short_names":["last_quarter_moon_with_face"],"text":null,"texts":null,"category":"Nature","sort_order":115,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"nose":{"name":"Nose","unified":"1F443","variations":[],"docomo":null,"au":"EAD0","softbank":"E41A","google":"FE192","image":"1f443.png","sheet_x":13,"sheet_y":36,"short_name":"nose","short_names":["nose"],"text":null,"texts":null,"category":"People","sort_order":115,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F443-1F3FB":{"unified":"1F443-1F3FB","image":"1f443-1f3fb.png","sheet_x":13,"sheet_y":37,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F443-1F3FC":{"unified":"1F443-1F3FC","image":"1f443-1f3fc.png","sheet_x":13,"sheet_y":38,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F443-1F3FD":{"unified":"1F443-1F3FD","image":"1f443-1f3fd.png","sheet_x":13,"sheet_y":39,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F443-1F3FE":{"unified":"1F443-1F3FE","image":"1f443-1f3fe.png","sheet_x":13,"sheet_y":40,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F443-1F3FF":{"unified":"1F443-1F3FF","image":"1f443-1f3ff.png","sheet_x":14,"sheet_y":0,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"love_letter":{"name":"Love Letter","unified":"1F48C","variations":[],"docomo":"E717","au":"EB78","softbank":"E103-E328","google":"FE824","image":"1f48c.png","sheet_x":19,"sheet_y":28,"short_name":"love_letter","short_names":["love_letter"],"text":null,"texts":null,"category":"Objects","sort_order":115,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"shinto_shrine":{"name":"Shinto Shrine","unified":"26E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26e9.png","sheet_x":2,"sheet_y":28,"short_name":"shinto_shrine","short_names":["shinto_shrine"],"text":null,"texts":null,"category":"Places","sort_order":115,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"no_smoking":{"name":"No Smoking Symbol","unified":"1F6AD","variations":[],"docomo":"E680","au":"E47E","softbank":"E208","google":"FEB1F","image":"1f6ad.png","sheet_x":30,"sheet_y":21,"short_name":"no_smoking","short_names":["no_smoking"],"text":null,"texts":null,"category":"Symbols","sort_order":116,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"postbox":{"name":"Postbox","unified":"1F4EE","variations":[],"docomo":"E665","au":"E51B","softbank":"E102","google":"FE52E","image":"1f4ee.png","sheet_x":22,"sheet_y":8,"short_name":"postbox","short_names":["postbox"],"text":null,"texts":null,"category":"Objects","sort_order":116,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"eye":{"name":"Eye","unified":"1F441","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f441.png","sheet_x":13,"sheet_y":29,"short_name":"eye","short_names":["eye"],"text":null,"texts":null,"category":"People","sort_order":116,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sun_with_face":{"name":"Sun with Face","unified":"1F31E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f31e.png","sheet_x":6,"sheet_y":10,"short_name":"sun_with_face","short_names":["sun_with_face"],"text":null,"texts":null,"category":"Nature","sort_order":116,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ke":{"name":"Regional Indicator Symbol Letters Ke","unified":"1F1F0-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1ea.png","sheet_x":35,"sheet_y":30,"short_name":"flag-ke","short_names":["flag-ke"],"text":null,"texts":null,"category":"Flags","sort_order":116,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mailbox_closed":{"name":"Closed Mailbox with Lowered Flag","unified":"1F4EA","variations":[],"docomo":"E665","au":"E51B","softbank":"E101","google":"FE52C","image":"1f4ea.png","sheet_x":22,"sheet_y":4,"short_name":"mailbox_closed","short_names":["mailbox_closed"],"text":null,"texts":null,"category":"Objects","sort_order":117,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ki":{"name":"Regional Indicator Symbol Letters Ki","unified":"1F1F0-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1ee.png","sheet_x":35,"sheet_y":33,"short_name":"flag-ki","short_names":["flag-ki"],"text":null,"texts":null,"category":"Flags","sort_order":117,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"eyes":{"name":"Eyes","unified":"1F440","variations":[],"docomo":"E691","au":"E5A4","softbank":"E419","google":"FE190","image":"1f440.png","sheet_x":13,"sheet_y":28,"short_name":"eyes","short_names":["eyes"],"text":null,"texts":null,"category":"People","sort_order":117,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wc":{"name":"Water Closet","unified":"1F6BE","variations":[],"docomo":"E66E","au":"E4A5","softbank":"E309","google":"FE508","image":"1f6be.png","sheet_x":31,"sheet_y":12,"short_name":"wc","short_names":["wc"],"text":null,"texts":null,"category":"Symbols","sort_order":117,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"crescent_moon":{"name":"Crescent Moon","unified":"1F319","variations":[],"docomo":"E69F","au":"E486","softbank":"E04C","google":"FE014","image":"1f319.png","sheet_x":6,"sheet_y":5,"short_name":"crescent_moon","short_names":["crescent_moon"],"text":null,"texts":null,"category":"Nature","sort_order":117,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mailbox":{"name":"Closed Mailbox with Raised Flag","unified":"1F4EB","variations":[],"docomo":"E665","au":"EB0A","softbank":"E101","google":"FE52D","image":"1f4eb.png","sheet_x":22,"sheet_y":5,"short_name":"mailbox","short_names":["mailbox"],"text":null,"texts":null,"category":"Objects","sort_order":118,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-xk":{"name":"Regional Indicator Symbol Letters Xk","unified":"1F1FD-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fd-1f1f0.png","sheet_x":38,"sheet_y":38,"short_name":"flag-xk","short_names":["flag-xk"],"text":null,"texts":null,"category":"Flags","sort_order":118,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"parking":{"name":"Negative Squared Latin Capital Letter P","unified":"1F17F","variations":["1F17F-FE0F"],"docomo":"E66C","au":"E4A6","softbank":"E14F","google":"FE7F6","image":"1f17f.png","sheet_x":4,"sheet_y":35,"short_name":"parking","short_names":["parking"],"text":null,"texts":null,"category":"Symbols","sort_order":118,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bust_in_silhouette":{"name":"Bust in Silhouette","unified":"1F464","variations":[],"docomo":"E6B1","au":null,"softbank":null,"google":"FE19A","image":"1f464.png","sheet_x":16,"sheet_y":6,"short_name":"bust_in_silhouette","short_names":["bust_in_silhouette"],"text":null,"texts":null,"category":"People","sort_order":118,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"star":{"name":"White Medium Star","unified":"2B50","variations":["2B50-FE0F"],"docomo":null,"au":"E48B","softbank":"E32F","google":"FEB68","image":"2b50.png","sheet_x":4,"sheet_y":24,"short_name":"star","short_names":["star"],"text":null,"texts":null,"category":"Nature","sort_order":118,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"star2":{"name":"Glowing Star","unified":"1F31F","variations":[],"docomo":null,"au":"E48B","softbank":"E335","google":"FEB69","image":"1f31f.png","sheet_x":6,"sheet_y":11,"short_name":"star2","short_names":["star2"],"text":null,"texts":null,"category":"Nature","sort_order":119,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mailbox_with_mail":{"name":"Open Mailbox with Raised Flag","unified":"1F4EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4ec.png","sheet_x":22,"sheet_y":6,"short_name":"mailbox_with_mail","short_names":["mailbox_with_mail"],"text":null,"texts":null,"category":"Objects","sort_order":119,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"potable_water":{"name":"Potable Water Symbol","unified":"1F6B0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6b0.png","sheet_x":30,"sheet_y":24,"short_name":"potable_water","short_names":["potable_water"],"text":null,"texts":null,"category":"Symbols","sort_order":119,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"busts_in_silhouette":{"name":"Busts in Silhouette","unified":"1F465","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f465.png","sheet_x":16,"sheet_y":7,"short_name":"busts_in_silhouette","short_names":["busts_in_silhouette"],"text":null,"texts":null,"category":"People","sort_order":119,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-kw":{"name":"Regional Indicator Symbol Letters Kw","unified":"1F1F0-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1fc.png","sheet_x":35,"sheet_y":38,"short_name":"flag-kw","short_names":["flag-kw"],"text":null,"texts":null,"category":"Flags","sort_order":119,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mens":{"name":"Mens Symbol","unified":"1F6B9","variations":[],"docomo":null,"au":null,"softbank":"E138","google":"FEB33","image":"1f6b9.png","sheet_x":31,"sheet_y":7,"short_name":"mens","short_names":["mens"],"text":null,"texts":null,"category":"Symbols","sort_order":120,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dizzy":{"name":"Dizzy Symbol","unified":"1F4AB","variations":[],"docomo":null,"au":"EB5C","softbank":"E407","google":"FEB5F","image":"1f4ab.png","sheet_x":20,"sheet_y":23,"short_name":"dizzy","short_names":["dizzy"],"text":null,"texts":null,"category":"Nature","sort_order":120,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"speaking_head_in_silhouette":{"name":"Speaking Head in Silhouette","unified":"1F5E3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5e3.png","sheet_x":26,"sheet_y":5,"short_name":"speaking_head_in_silhouette","short_names":["speaking_head_in_silhouette"],"text":null,"texts":null,"category":"People","sort_order":120,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-kg":{"name":"Regional Indicator Symbol Letters Kg","unified":"1F1F0-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1ec.png","sheet_x":35,"sheet_y":31,"short_name":"flag-kg","short_names":["flag-kg"],"text":null,"texts":null,"category":"Flags","sort_order":120,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mailbox_with_no_mail":{"name":"Open Mailbox with Lowered Flag","unified":"1F4ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4ed.png","sheet_x":22,"sheet_y":7,"short_name":"mailbox_with_no_mail","short_names":["mailbox_with_no_mail"],"text":null,"texts":null,"category":"Objects","sort_order":120,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sparkles":{"name":"Sparkles","unified":"2728","variations":[],"docomo":"E6FA","au":"EAAB","softbank":"E32E","google":"FEB60","image":"2728.png","sheet_x":3,"sheet_y":39,"short_name":"sparkles","short_names":["sparkles"],"text":null,"texts":null,"category":"Nature","sort_order":121,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"baby":{"name":"Baby","unified":"1F476","variations":[],"docomo":null,"au":"EB18","softbank":"E51A","google":"FE1A9","image":"1f476.png","sheet_x":17,"sheet_y":38,"short_name":"baby","short_names":["baby"],"text":null,"texts":null,"category":"People","sort_order":121,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F476-1F3FB":{"unified":"1F476-1F3FB","image":"1f476-1f3fb.png","sheet_x":17,"sheet_y":39,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F476-1F3FC":{"unified":"1F476-1F3FC","image":"1f476-1f3fc.png","sheet_x":17,"sheet_y":40,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F476-1F3FD":{"unified":"1F476-1F3FD","image":"1f476-1f3fd.png","sheet_x":18,"sheet_y":0,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F476-1F3FE":{"unified":"1F476-1F3FE","image":"1f476-1f3fe.png","sheet_x":18,"sheet_y":1,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F476-1F3FF":{"unified":"1F476-1F3FF","image":"1f476-1f3ff.png","sheet_x":18,"sheet_y":2,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"package":{"name":"Package","unified":"1F4E6","variations":[],"docomo":"E685","au":"E51F","softbank":"E112","google":"FE535","image":"1f4e6.png","sheet_x":22,"sheet_y":0,"short_name":"package","short_names":["package"],"text":null,"texts":null,"category":"Objects","sort_order":121,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"womens":{"name":"Womens Symbol","unified":"1F6BA","variations":[],"docomo":null,"au":null,"softbank":"E139","google":"FEB34","image":"1f6ba.png","sheet_x":31,"sheet_y":8,"short_name":"womens","short_names":["womens"],"text":null,"texts":null,"category":"Symbols","sort_order":121,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-la":{"name":"Regional Indicator Symbol Letters La","unified":"1F1F1-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1e6.png","sheet_x":36,"sheet_y":0,"short_name":"flag-la","short_names":["flag-la"],"text":null,"texts":null,"category":"Flags","sort_order":121,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"baby_symbol":{"name":"Baby Symbol","unified":"1F6BC","variations":[],"docomo":null,"au":"EB18","softbank":"E13A","google":"FEB35","image":"1f6bc.png","sheet_x":31,"sheet_y":10,"short_name":"baby_symbol","short_names":["baby_symbol"],"text":null,"texts":null,"category":"Symbols","sort_order":122,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-lv":{"name":"Regional Indicator Symbol Letters Lv","unified":"1F1F1-1F1FB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1fb.png","sheet_x":36,"sheet_y":9,"short_name":"flag-lv","short_names":["flag-lv"],"text":null,"texts":null,"category":"Flags","sort_order":122,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"postal_horn":{"name":"Postal Horn","unified":"1F4EF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4ef.png","sheet_x":22,"sheet_y":9,"short_name":"postal_horn","short_names":["postal_horn"],"text":null,"texts":null,"category":"Objects","sort_order":122,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"comet":{"name":"Comet","unified":"2604","variations":["2604-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2604.png","sheet_x":1,"sheet_y":4,"short_name":"comet","short_names":["comet"],"text":null,"texts":null,"category":"Nature","sort_order":122,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"boy":{"name":"Boy","unified":"1F466","variations":[],"docomo":"E6F0","au":"E4FC","softbank":"E001","google":"FE19B","image":"1f466.png","sheet_x":16,"sheet_y":8,"short_name":"boy","short_names":["boy"],"text":null,"texts":null,"category":"People","sort_order":122,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F466-1F3FB":{"unified":"1F466-1F3FB","image":"1f466-1f3fb.png","sheet_x":16,"sheet_y":9,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F466-1F3FC":{"unified":"1F466-1F3FC","image":"1f466-1f3fc.png","sheet_x":16,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F466-1F3FD":{"unified":"1F466-1F3FD","image":"1f466-1f3fd.png","sheet_x":16,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F466-1F3FE":{"unified":"1F466-1F3FE","image":"1f466-1f3fe.png","sheet_x":16,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F466-1F3FF":{"unified":"1F466-1F3FF","image":"1f466-1f3ff.png","sheet_x":16,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"restroom":{"name":"Restroom","unified":"1F6BB","variations":[],"docomo":"E66E","au":"E4A5","softbank":"E151","google":"FE506","image":"1f6bb.png","sheet_x":31,"sheet_y":9,"short_name":"restroom","short_names":["restroom"],"text":null,"texts":null,"category":"Symbols","sort_order":123,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-lb":{"name":"Regional Indicator Symbol Letters Lb","unified":"1F1F1-1F1E7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1e7.png","sheet_x":36,"sheet_y":1,"short_name":"flag-lb","short_names":["flag-lb"],"text":null,"texts":null,"category":"Flags","sort_order":123,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"inbox_tray":{"name":"Inbox Tray","unified":"1F4E5","variations":[],"docomo":null,"au":"E593","softbank":null,"google":"FE534","image":"1f4e5.png","sheet_x":21,"sheet_y":40,"short_name":"inbox_tray","short_names":["inbox_tray"],"text":null,"texts":null,"category":"Objects","sort_order":123,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sunny":{"name":"Black Sun with Rays","unified":"2600","variations":["2600-FE0F"],"docomo":"E63E","au":"E488","softbank":"E04A","google":"FE000","image":"2600.png","sheet_x":1,"sheet_y":0,"short_name":"sunny","short_names":["sunny"],"text":null,"texts":null,"category":"Nature","sort_order":123,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"girl":{"name":"Girl","unified":"1F467","variations":[],"docomo":"E6F0","au":"E4FA","softbank":"E002","google":"FE19C","image":"1f467.png","sheet_x":16,"sheet_y":14,"short_name":"girl","short_names":["girl"],"text":null,"texts":null,"category":"People","sort_order":123,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F467-1F3FB":{"unified":"1F467-1F3FB","image":"1f467-1f3fb.png","sheet_x":16,"sheet_y":15,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F467-1F3FC":{"unified":"1F467-1F3FC","image":"1f467-1f3fc.png","sheet_x":16,"sheet_y":16,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F467-1F3FD":{"unified":"1F467-1F3FD","image":"1f467-1f3fd.png","sheet_x":16,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F467-1F3FE":{"unified":"1F467-1F3FE","image":"1f467-1f3fe.png","sheet_x":16,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F467-1F3FF":{"unified":"1F467-1F3FF","image":"1f467-1f3ff.png","sheet_x":16,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"man":{"name":"Man","unified":"1F468","variations":[],"docomo":"E6F0","au":"E4FC","softbank":"E004","google":"FE19D","image":"1f468.png","sheet_x":16,"sheet_y":20,"short_name":"man","short_names":["man"],"text":null,"texts":null,"category":"People","sort_order":124,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F468-1F3FB":{"unified":"1F468-1F3FB","image":"1f468-1f3fb.png","sheet_x":16,"sheet_y":21,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F468-1F3FC":{"unified":"1F468-1F3FC","image":"1f468-1f3fc.png","sheet_x":16,"sheet_y":22,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F468-1F3FD":{"unified":"1F468-1F3FD","image":"1f468-1f3fd.png","sheet_x":16,"sheet_y":23,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F468-1F3FE":{"unified":"1F468-1F3FE","image":"1f468-1f3fe.png","sheet_x":16,"sheet_y":24,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F468-1F3FF":{"unified":"1F468-1F3FF","image":"1f468-1f3ff.png","sheet_x":16,"sheet_y":25,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"put_litter_in_its_place":{"name":"Put Litter in Its Place Symbol","unified":"1F6AE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f6ae.png","sheet_x":30,"sheet_y":22,"short_name":"put_litter_in_its_place","short_names":["put_litter_in_its_place"],"text":null,"texts":null,"category":"Symbols","sort_order":124,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mostly_sunny":{"name":"White Sun with Small Cloud","unified":"1F324","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f324.png","sheet_x":6,"sheet_y":14,"short_name":"mostly_sunny","short_names":["mostly_sunny","sun_small_cloud"],"text":null,"texts":null,"category":"Nature","sort_order":124,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ls":{"name":"Regional Indicator Symbol Letters Ls","unified":"1F1F1-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1f8.png","sheet_x":36,"sheet_y":6,"short_name":"flag-ls","short_names":["flag-ls"],"text":null,"texts":null,"category":"Flags","sort_order":124,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"outbox_tray":{"name":"Outbox Tray","unified":"1F4E4","variations":[],"docomo":null,"au":"E592","softbank":null,"google":"FE533","image":"1f4e4.png","sheet_x":21,"sheet_y":39,"short_name":"outbox_tray","short_names":["outbox_tray"],"text":null,"texts":null,"category":"Objects","sort_order":124,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cinema":{"name":"Cinema","unified":"1F3A6","variations":[],"docomo":"E677","au":"E517","softbank":"E507","google":"FE802","image":"1f3a6.png","sheet_x":9,"sheet_y":21,"short_name":"cinema","short_names":["cinema"],"text":null,"texts":null,"category":"Symbols","sort_order":125,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-lr":{"name":"Regional Indicator Symbol Letters Lr","unified":"1F1F1-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1f7.png","sheet_x":36,"sheet_y":5,"short_name":"flag-lr","short_names":["flag-lr"],"text":null,"texts":null,"category":"Flags","sort_order":125,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"scroll":{"name":"Scroll","unified":"1F4DC","variations":[],"docomo":"E70A","au":"E55F","softbank":null,"google":"FE4FD","image":"1f4dc.png","sheet_x":21,"sheet_y":31,"short_name":"scroll","short_names":["scroll"],"text":null,"texts":null,"category":"Objects","sort_order":125,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"partly_sunny":{"name":"Sun Behind Cloud","unified":"26C5","variations":["26C5-FE0F"],"docomo":"E63E-E63F","au":"E48E","softbank":"E04A-E049","google":"FE00F","image":"26c5.png","sheet_x":2,"sheet_y":21,"short_name":"partly_sunny","short_names":["partly_sunny"],"text":null,"texts":null,"category":"Nature","sort_order":125,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"woman":{"name":"Woman","unified":"1F469","variations":[],"docomo":"E6F0","au":"E4FA","softbank":"E005","google":"FE19E","image":"1f469.png","sheet_x":16,"sheet_y":26,"short_name":"woman","short_names":["woman"],"text":null,"texts":null,"category":"People","sort_order":125,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F469-1F3FB":{"unified":"1F469-1F3FB","image":"1f469-1f3fb.png","sheet_x":16,"sheet_y":27,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F469-1F3FC":{"unified":"1F469-1F3FC","image":"1f469-1f3fc.png","sheet_x":16,"sheet_y":28,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F469-1F3FD":{"unified":"1F469-1F3FD","image":"1f469-1f3fd.png","sheet_x":16,"sheet_y":29,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F469-1F3FE":{"unified":"1F469-1F3FE","image":"1f469-1f3fe.png","sheet_x":16,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F469-1F3FF":{"unified":"1F469-1F3FF","image":"1f469-1f3ff.png","sheet_x":16,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"signal_strength":{"name":"Antenna with Bars","unified":"1F4F6","variations":[],"docomo":null,"au":"EA84","softbank":"E20B","google":"FE838","image":"1f4f6.png","sheet_x":22,"sheet_y":16,"short_name":"signal_strength","short_names":["signal_strength"],"text":null,"texts":null,"category":"Symbols","sort_order":126,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"person_with_blond_hair":{"name":"Person with Blond Hair","unified":"1F471","variations":[],"docomo":null,"au":"EB13","softbank":"E515","google":"FE1A4","image":"1f471.png","sheet_x":17,"sheet_y":8,"short_name":"person_with_blond_hair","short_names":["person_with_blond_hair"],"text":null,"texts":null,"category":"People","sort_order":126,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F471-1F3FB":{"unified":"1F471-1F3FB","image":"1f471-1f3fb.png","sheet_x":17,"sheet_y":9,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F471-1F3FC":{"unified":"1F471-1F3FC","image":"1f471-1f3fc.png","sheet_x":17,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F471-1F3FD":{"unified":"1F471-1F3FD","image":"1f471-1f3fd.png","sheet_x":17,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F471-1F3FE":{"unified":"1F471-1F3FE","image":"1f471-1f3fe.png","sheet_x":17,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F471-1F3FF":{"unified":"1F471-1F3FF","image":"1f471-1f3ff.png","sheet_x":17,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"barely_sunny":{"name":"White Sun Behind Cloud","unified":"1F325","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f325.png","sheet_x":6,"sheet_y":15,"short_name":"barely_sunny","short_names":["barely_sunny","sun_behind_cloud"],"text":null,"texts":null,"category":"Nature","sort_order":126,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"page_with_curl":{"name":"Page with Curl","unified":"1F4C3","variations":[],"docomo":"E689","au":"E561","softbank":"E301","google":"FE540","image":"1f4c3.png","sheet_x":21,"sheet_y":6,"short_name":"page_with_curl","short_names":["page_with_curl"],"text":null,"texts":null,"category":"Objects","sort_order":126,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ly":{"name":"Regional Indicator Symbol Letters Ly","unified":"1F1F1-1F1FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1fe.png","sheet_x":36,"sheet_y":10,"short_name":"flag-ly","short_names":["flag-ly"],"text":null,"texts":null,"category":"Flags","sort_order":126,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bookmark_tabs":{"name":"Bookmark Tabs","unified":"1F4D1","variations":[],"docomo":"E689","au":"EB0B","softbank":"E301","google":"FE552","image":"1f4d1.png","sheet_x":21,"sheet_y":20,"short_name":"bookmark_tabs","short_names":["bookmark_tabs"],"text":null,"texts":null,"category":"Objects","sort_order":127,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-li":{"name":"Regional Indicator Symbol Letters Li","unified":"1F1F1-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1ee.png","sheet_x":36,"sheet_y":3,"short_name":"flag-li","short_names":["flag-li"],"text":null,"texts":null,"category":"Flags","sort_order":127,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"older_man":{"name":"Older Man","unified":"1F474","variations":[],"docomo":null,"au":"EB16","softbank":"E518","google":"FE1A7","image":"1f474.png","sheet_x":17,"sheet_y":26,"short_name":"older_man","short_names":["older_man"],"text":null,"texts":null,"category":"People","sort_order":127,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F474-1F3FB":{"unified":"1F474-1F3FB","image":"1f474-1f3fb.png","sheet_x":17,"sheet_y":27,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F474-1F3FC":{"unified":"1F474-1F3FC","image":"1f474-1f3fc.png","sheet_x":17,"sheet_y":28,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F474-1F3FD":{"unified":"1F474-1F3FD","image":"1f474-1f3fd.png","sheet_x":17,"sheet_y":29,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F474-1F3FE":{"unified":"1F474-1F3FE","image":"1f474-1f3fe.png","sheet_x":17,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F474-1F3FF":{"unified":"1F474-1F3FF","image":"1f474-1f3ff.png","sheet_x":17,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"partly_sunny_rain":{"name":"White Sun Behind Cloud with Rain","unified":"1F326","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f326.png","sheet_x":6,"sheet_y":16,"short_name":"partly_sunny_rain","short_names":["partly_sunny_rain","sun_behind_rain_cloud"],"text":null,"texts":null,"category":"Nature","sort_order":127,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"koko":{"name":"Squared Katakana Koko","unified":"1F201","variations":[],"docomo":null,"au":null,"softbank":"E203","google":"FEB24","image":"1f201.png","sheet_x":5,"sheet_y":6,"short_name":"koko","short_names":["koko"],"text":null,"texts":null,"category":"Symbols","sort_order":127,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bar_chart":{"name":"Bar Chart","unified":"1F4CA","variations":[],"docomo":null,"au":"E574","softbank":"E14A","google":"FE54A","image":"1f4ca.png","sheet_x":21,"sheet_y":13,"short_name":"bar_chart","short_names":["bar_chart"],"text":null,"texts":null,"category":"Objects","sort_order":128,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cloud":{"name":"Cloud","unified":"2601","variations":["2601-FE0F"],"docomo":"E63F","au":"E48D","softbank":"E049","google":"FE001","image":"2601.png","sheet_x":1,"sheet_y":1,"short_name":"cloud","short_names":["cloud"],"text":null,"texts":null,"category":"Nature","sort_order":128,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ng":{"name":"Squared Ng","unified":"1F196","variations":[],"docomo":"E72F","au":null,"softbank":null,"google":"FEB28","image":"1f196.png","sheet_x":5,"sheet_y":1,"short_name":"ng","short_names":["ng"],"text":null,"texts":null,"category":"Symbols","sort_order":128,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-lt":{"name":"Regional Indicator Symbol Letters Lt","unified":"1F1F1-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1f9.png","sheet_x":36,"sheet_y":7,"short_name":"flag-lt","short_names":["flag-lt"],"text":null,"texts":null,"category":"Flags","sort_order":128,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"older_woman":{"name":"Older Woman","unified":"1F475","variations":[],"docomo":null,"au":"EB17","softbank":"E519","google":"FE1A8","image":"1f475.png","sheet_x":17,"sheet_y":32,"short_name":"older_woman","short_names":["older_woman"],"text":null,"texts":null,"category":"People","sort_order":128,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F475-1F3FB":{"unified":"1F475-1F3FB","image":"1f475-1f3fb.png","sheet_x":17,"sheet_y":33,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F475-1F3FC":{"unified":"1F475-1F3FC","image":"1f475-1f3fc.png","sheet_x":17,"sheet_y":34,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F475-1F3FD":{"unified":"1F475-1F3FD","image":"1f475-1f3fd.png","sheet_x":17,"sheet_y":35,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F475-1F3FE":{"unified":"1F475-1F3FE","image":"1f475-1f3fe.png","sheet_x":17,"sheet_y":36,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F475-1F3FF":{"unified":"1F475-1F3FF","image":"1f475-1f3ff.png","sheet_x":17,"sheet_y":37,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"rain_cloud":{"name":"Cloud with Rain","unified":"1F327","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f327.png","sheet_x":6,"sheet_y":17,"short_name":"rain_cloud","short_names":["rain_cloud"],"text":null,"texts":null,"category":"Nature","sort_order":129,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-lu":{"name":"Regional Indicator Symbol Letters Lu","unified":"1F1F1-1F1FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1fa.png","sheet_x":36,"sheet_y":8,"short_name":"flag-lu","short_names":["flag-lu"],"text":null,"texts":null,"category":"Flags","sort_order":129,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"chart_with_upwards_trend":{"name":"Chart with Upwards Trend","unified":"1F4C8","variations":[],"docomo":null,"au":"E575","softbank":"E14A","google":"FE54B","image":"1f4c8.png","sheet_x":21,"sheet_y":11,"short_name":"chart_with_upwards_trend","short_names":["chart_with_upwards_trend"],"text":null,"texts":null,"category":"Objects","sort_order":129,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ok":{"name":"Squared Ok","unified":"1F197","variations":[],"docomo":"E70B","au":"E5AD","softbank":"E24D","google":"FEB27","image":"1f197.png","sheet_x":5,"sheet_y":2,"short_name":"ok","short_names":["ok"],"text":null,"texts":null,"category":"Symbols","sort_order":129,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man_with_gua_pi_mao":{"name":"Man with Gua Pi Mao","unified":"1F472","variations":[],"docomo":null,"au":"EB14","softbank":"E516","google":"FE1A5","image":"1f472.png","sheet_x":17,"sheet_y":14,"short_name":"man_with_gua_pi_mao","short_names":["man_with_gua_pi_mao"],"text":null,"texts":null,"category":"People","sort_order":129,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F472-1F3FB":{"unified":"1F472-1F3FB","image":"1f472-1f3fb.png","sheet_x":17,"sheet_y":15,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F472-1F3FC":{"unified":"1F472-1F3FC","image":"1f472-1f3fc.png","sheet_x":17,"sheet_y":16,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F472-1F3FD":{"unified":"1F472-1F3FD","image":"1f472-1f3fd.png","sheet_x":17,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F472-1F3FE":{"unified":"1F472-1F3FE","image":"1f472-1f3fe.png","sheet_x":17,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F472-1F3FF":{"unified":"1F472-1F3FF","image":"1f472-1f3ff.png","sheet_x":17,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"thunder_cloud_and_rain":{"name":"Thunder Cloud and Rain","unified":"26C8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26c8.png","sheet_x":2,"sheet_y":22,"short_name":"thunder_cloud_and_rain","short_names":["thunder_cloud_and_rain"],"text":null,"texts":null,"category":"Nature","sort_order":130,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"up":{"name":"Squared Up with Exclamation Mark","unified":"1F199","variations":[],"docomo":null,"au":"E50F","softbank":"E213","google":"FEB37","image":"1f199.png","sheet_x":5,"sheet_y":4,"short_name":"up","short_names":["up"],"text":null,"texts":null,"category":"Symbols","sort_order":130,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man_with_turban":{"name":"Man with Turban","unified":"1F473","variations":[],"docomo":null,"au":"EB15","softbank":"E517","google":"FE1A6","image":"1f473.png","sheet_x":17,"sheet_y":20,"short_name":"man_with_turban","short_names":["man_with_turban"],"text":null,"texts":null,"category":"People","sort_order":130,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F473-1F3FB":{"unified":"1F473-1F3FB","image":"1f473-1f3fb.png","sheet_x":17,"sheet_y":21,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F473-1F3FC":{"unified":"1F473-1F3FC","image":"1f473-1f3fc.png","sheet_x":17,"sheet_y":22,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F473-1F3FD":{"unified":"1F473-1F3FD","image":"1f473-1f3fd.png","sheet_x":17,"sheet_y":23,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F473-1F3FE":{"unified":"1F473-1F3FE","image":"1f473-1f3fe.png","sheet_x":17,"sheet_y":24,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F473-1F3FF":{"unified":"1F473-1F3FF","image":"1f473-1f3ff.png","sheet_x":17,"sheet_y":25,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"chart_with_downwards_trend":{"name":"Chart with Downwards Trend","unified":"1F4C9","variations":[],"docomo":null,"au":"E576","softbank":null,"google":"FE54C","image":"1f4c9.png","sheet_x":21,"sheet_y":12,"short_name":"chart_with_downwards_trend","short_names":["chart_with_downwards_trend"],"text":null,"texts":null,"category":"Objects","sort_order":130,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mo":{"name":"Regional Indicator Symbol Letters Mo","unified":"1F1F2-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f4.png","sheet_x":36,"sheet_y":22,"short_name":"flag-mo","short_names":["flag-mo"],"text":null,"texts":null,"category":"Flags","sort_order":130,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"page_facing_up":{"name":"Page Facing Up","unified":"1F4C4","variations":[],"docomo":"E689","au":"E569","softbank":"E301","google":"FE541","image":"1f4c4.png","sheet_x":21,"sheet_y":7,"short_name":"page_facing_up","short_names":["page_facing_up"],"text":null,"texts":null,"category":"Objects","sort_order":131,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cool":{"name":"Squared Cool","unified":"1F192","variations":[],"docomo":null,"au":"EA85","softbank":"E214","google":"FEB38","image":"1f192.png","sheet_x":4,"sheet_y":38,"short_name":"cool","short_names":["cool"],"text":null,"texts":null,"category":"Symbols","sort_order":131,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lightning":{"name":"Cloud with Lightning","unified":"1F329","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f329.png","sheet_x":6,"sheet_y":19,"short_name":"lightning","short_names":["lightning","lightning_cloud"],"text":null,"texts":null,"category":"Nature","sort_order":131,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mk":{"name":"Regional Indicator Symbol Letters Mk","unified":"1F1F2-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f0.png","sheet_x":36,"sheet_y":18,"short_name":"flag-mk","short_names":["flag-mk"],"text":null,"texts":null,"category":"Flags","sort_order":131,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"cop":{"name":"Police Officer","unified":"1F46E","variations":[],"docomo":null,"au":"E5DD","softbank":"E152","google":"FE1A1","image":"1f46e.png","sheet_x":16,"sheet_y":36,"short_name":"cop","short_names":["cop"],"text":null,"texts":null,"category":"People","sort_order":131,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F46E-1F3FB":{"unified":"1F46E-1F3FB","image":"1f46e-1f3fb.png","sheet_x":16,"sheet_y":37,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F46E-1F3FC":{"unified":"1F46E-1F3FC","image":"1f46e-1f3fc.png","sheet_x":16,"sheet_y":38,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F46E-1F3FD":{"unified":"1F46E-1F3FD","image":"1f46e-1f3fd.png","sheet_x":16,"sheet_y":39,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F46E-1F3FE":{"unified":"1F46E-1F3FE","image":"1f46e-1f3fe.png","sheet_x":16,"sheet_y":40,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F46E-1F3FF":{"unified":"1F46E-1F3FF","image":"1f46e-1f3ff.png","sheet_x":17,"sheet_y":0,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-mg":{"name":"Regional Indicator Symbol Letters Mg","unified":"1F1F2-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1ec.png","sheet_x":36,"sheet_y":16,"short_name":"flag-mg","short_names":["flag-mg"],"text":null,"texts":null,"category":"Flags","sort_order":132,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"date":{"name":"Calendar","unified":"1F4C5","variations":[],"docomo":null,"au":"E563","softbank":null,"google":"FE542","image":"1f4c5.png","sheet_x":21,"sheet_y":8,"short_name":"date","short_names":["date"],"text":null,"texts":null,"category":"Objects","sort_order":132,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"new":{"name":"Squared New","unified":"1F195","variations":[],"docomo":"E6DD","au":"E5B5","softbank":"E212","google":"FEB36","image":"1f195.png","sheet_x":5,"sheet_y":0,"short_name":"new","short_names":["new"],"text":null,"texts":null,"category":"Symbols","sort_order":132,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"zap":{"name":"High Voltage Sign","unified":"26A1","variations":["26A1-FE0F"],"docomo":"E642","au":"E487","softbank":"E13D","google":"FE004","image":"26a1.png","sheet_x":2,"sheet_y":13,"short_name":"zap","short_names":["zap"],"text":null,"texts":null,"category":"Nature","sort_order":132,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"construction_worker":{"name":"Construction Worker","unified":"1F477","variations":[],"docomo":null,"au":"EB19","softbank":"E51B","google":"FE1AA","image":"1f477.png","sheet_x":18,"sheet_y":3,"short_name":"construction_worker","short_names":["construction_worker"],"text":null,"texts":null,"category":"People","sort_order":132,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F477-1F3FB":{"unified":"1F477-1F3FB","image":"1f477-1f3fb.png","sheet_x":18,"sheet_y":4,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F477-1F3FC":{"unified":"1F477-1F3FC","image":"1f477-1f3fc.png","sheet_x":18,"sheet_y":5,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F477-1F3FD":{"unified":"1F477-1F3FD","image":"1f477-1f3fd.png","sheet_x":18,"sheet_y":6,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F477-1F3FE":{"unified":"1F477-1F3FE","image":"1f477-1f3fe.png","sheet_x":18,"sheet_y":7,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F477-1F3FF":{"unified":"1F477-1F3FF","image":"1f477-1f3ff.png","sheet_x":18,"sheet_y":8,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"guardsman":{"name":"Guardsman","unified":"1F482","variations":[],"docomo":null,"au":null,"softbank":"E51E","google":"FE1B5","image":"1f482.png","sheet_x":18,"sheet_y":34,"short_name":"guardsman","short_names":["guardsman"],"text":null,"texts":null,"category":"People","sort_order":133,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F482-1F3FB":{"unified":"1F482-1F3FB","image":"1f482-1f3fb.png","sheet_x":18,"sheet_y":35,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F482-1F3FC":{"unified":"1F482-1F3FC","image":"1f482-1f3fc.png","sheet_x":18,"sheet_y":36,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F482-1F3FD":{"unified":"1F482-1F3FD","image":"1f482-1f3fd.png","sheet_x":18,"sheet_y":37,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F482-1F3FE":{"unified":"1F482-1F3FE","image":"1f482-1f3fe.png","sheet_x":18,"sheet_y":38,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F482-1F3FF":{"unified":"1F482-1F3FF","image":"1f482-1f3ff.png","sheet_x":18,"sheet_y":39,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"fire":{"name":"Fire","unified":"1F525","variations":[],"docomo":null,"au":"E47B","softbank":"E11D","google":"FE4F6","image":"1f525.png","sheet_x":23,"sheet_y":21,"short_name":"fire","short_names":["fire"],"text":null,"texts":null,"category":"Nature","sort_order":133,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"free":{"name":"Squared Free","unified":"1F193","variations":[],"docomo":"E6D7","au":"E578","softbank":null,"google":"FEB21","image":"1f193.png","sheet_x":4,"sheet_y":39,"short_name":"free","short_names":["free"],"text":null,"texts":null,"category":"Symbols","sort_order":133,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mw":{"name":"Regional Indicator Symbol Letters Mw","unified":"1F1F2-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1fc.png","sheet_x":36,"sheet_y":30,"short_name":"flag-mw","short_names":["flag-mw"],"text":null,"texts":null,"category":"Flags","sort_order":133,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"calendar":{"name":"Tear-off Calendar","unified":"1F4C6","variations":[],"docomo":null,"au":"E56A","softbank":null,"google":"FE549","image":"1f4c6.png","sheet_x":21,"sheet_y":9,"short_name":"calendar","short_names":["calendar"],"text":null,"texts":null,"category":"Objects","sort_order":133,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"spiral_calendar_pad":{"name":"Spiral Calendar Pad","unified":"1F5D3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5d3.png","sheet_x":26,"sheet_y":0,"short_name":"spiral_calendar_pad","short_names":["spiral_calendar_pad"],"text":null,"texts":null,"category":"Objects","sort_order":134,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"boom":{"name":"Collision Symbol","unified":"1F4A5","variations":[],"docomo":"E705","au":"E5B0","softbank":null,"google":"FEB5A","image":"1f4a5.png","sheet_x":20,"sheet_y":12,"short_name":"boom","short_names":["boom","collision"],"text":null,"texts":null,"category":"Nature","sort_order":134,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-my":{"name":"Regional Indicator Symbol Letters My","unified":"1F1F2-1F1FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1fe.png","sheet_x":36,"sheet_y":32,"short_name":"flag-my","short_names":["flag-my"],"text":null,"texts":null,"category":"Flags","sort_order":134,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"zero":{"name":"Keycap 0","unified":"0030-20E3","variations":["0030-FE0F-20E3"],"docomo":"E6EB","au":"E5AC","softbank":"E225","google":"FE837","image":"0030-20e3.png","sheet_x":32,"sheet_y":23,"short_name":"zero","short_names":["zero"],"text":null,"texts":null,"category":"Symbols","sort_order":134,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sleuth_or_spy":{"name":"Sleuth or Spy","unified":"1F575","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f575.png","sheet_x":24,"sheet_y":39,"short_name":"sleuth_or_spy","short_names":["sleuth_or_spy"],"text":null,"texts":null,"category":"People","sort_order":134,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F575-1F3FB":{"unified":"1F575-1F3FB","image":"1f575-1f3fb.png","sheet_x":24,"sheet_y":40,"has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_emojione":true},"1F575-1F3FC":{"unified":"1F575-1F3FC","image":"1f575-1f3fc.png","sheet_x":25,"sheet_y":0,"has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_emojione":true},"1F575-1F3FD":{"unified":"1F575-1F3FD","image":"1f575-1f3fd.png","sheet_x":25,"sheet_y":1,"has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_emojione":true},"1F575-1F3FE":{"unified":"1F575-1F3FE","image":"1f575-1f3fe.png","sheet_x":25,"sheet_y":2,"has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_emojione":true},"1F575-1F3FF":{"unified":"1F575-1F3FF","image":"1f575-1f3ff.png","sheet_x":25,"sheet_y":3,"has_img_apple":true,"has_img_google":false,"has_img_twitter":false,"has_img_emojione":true}}},"one":{"name":"Keycap 1","unified":"0031-20E3","variations":["0031-FE0F-20E3"],"docomo":"E6E2","au":"E522","softbank":"E21C","google":"FE82E","image":"0031-20e3.png","sheet_x":32,"sheet_y":24,"short_name":"one","short_names":["one"],"text":null,"texts":null,"category":"Symbols","sort_order":135,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"santa":{"name":"Father Christmas","unified":"1F385","variations":[],"docomo":null,"au":"EAF0","softbank":"E448","google":"FE513","image":"1f385.png","sheet_x":8,"sheet_y":29,"short_name":"santa","short_names":["santa"],"text":null,"texts":null,"category":"People","sort_order":135,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F385-1F3FB":{"unified":"1F385-1F3FB","image":"1f385-1f3fb.png","sheet_x":8,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F385-1F3FC":{"unified":"1F385-1F3FC","image":"1f385-1f3fc.png","sheet_x":8,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F385-1F3FD":{"unified":"1F385-1F3FD","image":"1f385-1f3fd.png","sheet_x":8,"sheet_y":32,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F385-1F3FE":{"unified":"1F385-1F3FE","image":"1f385-1f3fe.png","sheet_x":8,"sheet_y":33,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F385-1F3FF":{"unified":"1F385-1F3FF","image":"1f385-1f3ff.png","sheet_x":8,"sheet_y":34,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"card_index":{"name":"Card Index","unified":"1F4C7","variations":[],"docomo":"E683","au":"E56C","softbank":"E148","google":"FE54D","image":"1f4c7.png","sheet_x":21,"sheet_y":10,"short_name":"card_index","short_names":["card_index"],"text":null,"texts":null,"category":"Objects","sort_order":135,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"snowflake":{"name":"Snowflake","unified":"2744","variations":["2744-FE0F"],"docomo":null,"au":"E48A","softbank":null,"google":"FE00E","image":"2744.png","sheet_x":4,"sheet_y":1,"short_name":"snowflake","short_names":["snowflake"],"text":null,"texts":null,"category":"Nature","sort_order":135,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mv":{"name":"Regional Indicator Symbol Letters Mv","unified":"1F1F2-1F1FB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1fb.png","sheet_x":36,"sheet_y":29,"short_name":"flag-mv","short_names":["flag-mv"],"text":null,"texts":null,"category":"Flags","sort_order":135,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"snow_cloud":{"name":"Cloud with Snow","unified":"1F328","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f328.png","sheet_x":6,"sheet_y":18,"short_name":"snow_cloud","short_names":["snow_cloud"],"text":null,"texts":null,"category":"Nature","sort_order":136,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"angel":{"name":"Baby Angel","unified":"1F47C","variations":[],"docomo":null,"au":"E5BF","softbank":"E04E","google":"FE1AF","image":"1f47c.png","sheet_x":18,"sheet_y":18,"short_name":"angel","short_names":["angel"],"text":null,"texts":null,"category":"People","sort_order":136,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F47C-1F3FB":{"unified":"1F47C-1F3FB","image":"1f47c-1f3fb.png","sheet_x":18,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F47C-1F3FC":{"unified":"1F47C-1F3FC","image":"1f47c-1f3fc.png","sheet_x":18,"sheet_y":20,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F47C-1F3FD":{"unified":"1F47C-1F3FD","image":"1f47c-1f3fd.png","sheet_x":18,"sheet_y":21,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F47C-1F3FE":{"unified":"1F47C-1F3FE","image":"1f47c-1f3fe.png","sheet_x":18,"sheet_y":22,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F47C-1F3FF":{"unified":"1F47C-1F3FF","image":"1f47c-1f3ff.png","sheet_x":18,"sheet_y":23,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"two":{"name":"Keycap 2","unified":"0032-20E3","variations":["0032-FE0F-20E3"],"docomo":"E6E3","au":"E523","softbank":"E21D","google":"FE82F","image":"0032-20e3.png","sheet_x":32,"sheet_y":25,"short_name":"two","short_names":["two"],"text":null,"texts":null,"category":"Symbols","sort_order":136,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"card_file_box":{"name":"Card File Box","unified":"1F5C3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5c3.png","sheet_x":25,"sheet_y":37,"short_name":"card_file_box","short_names":["card_file_box"],"text":null,"texts":null,"category":"Objects","sort_order":136,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ml":{"name":"Regional Indicator Symbol Letters Ml","unified":"1F1F2-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f1.png","sheet_x":36,"sheet_y":19,"short_name":"flag-ml","short_names":["flag-ml"],"text":null,"texts":null,"category":"Flags","sort_order":136,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"three":{"name":"Keycap 3","unified":"0033-20E3","variations":["0033-FE0F-20E3"],"docomo":"E6E4","au":"E524","softbank":"E21E","google":"FE830","image":"0033-20e3.png","sheet_x":32,"sheet_y":26,"short_name":"three","short_names":["three"],"text":null,"texts":null,"category":"Symbols","sort_order":137,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"princess":{"name":"Princess","unified":"1F478","variations":[],"docomo":null,"au":"EB1A","softbank":"E51C","google":"FE1AB","image":"1f478.png","sheet_x":18,"sheet_y":9,"short_name":"princess","short_names":["princess"],"text":null,"texts":null,"category":"People","sort_order":137,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F478-1F3FB":{"unified":"1F478-1F3FB","image":"1f478-1f3fb.png","sheet_x":18,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F478-1F3FC":{"unified":"1F478-1F3FC","image":"1f478-1f3fc.png","sheet_x":18,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F478-1F3FD":{"unified":"1F478-1F3FD","image":"1f478-1f3fd.png","sheet_x":18,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F478-1F3FE":{"unified":"1F478-1F3FE","image":"1f478-1f3fe.png","sheet_x":18,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F478-1F3FF":{"unified":"1F478-1F3FF","image":"1f478-1f3ff.png","sheet_x":18,"sheet_y":14,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"snowman":{"name":"Snowman","unified":"2603","variations":["2603-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2603.png","sheet_x":1,"sheet_y":3,"short_name":"snowman","short_names":["snowman"],"text":null,"texts":null,"category":"Nature","sort_order":137,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ballot_box_with_ballot":{"name":"Ballot Box with Ballot","unified":"1F5F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5f3.png","sheet_x":26,"sheet_y":8,"short_name":"ballot_box_with_ballot","short_names":["ballot_box_with_ballot"],"text":null,"texts":null,"category":"Objects","sort_order":137,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mt":{"name":"Regional Indicator Symbol Letters Mt","unified":"1F1F2-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f9.png","sheet_x":36,"sheet_y":27,"short_name":"flag-mt","short_names":["flag-mt"],"text":null,"texts":null,"category":"Flags","sort_order":137,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"file_cabinet":{"name":"File Cabinet","unified":"1F5C4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5c4.png","sheet_x":25,"sheet_y":38,"short_name":"file_cabinet","short_names":["file_cabinet"],"text":null,"texts":null,"category":"Objects","sort_order":138,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bride_with_veil":{"name":"Bride with Veil","unified":"1F470","variations":[],"docomo":null,"au":"EAE9","softbank":null,"google":"FE1A3","image":"1f470.png","sheet_x":17,"sheet_y":2,"short_name":"bride_with_veil","short_names":["bride_with_veil"],"text":null,"texts":null,"category":"People","sort_order":138,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F470-1F3FB":{"unified":"1F470-1F3FB","image":"1f470-1f3fb.png","sheet_x":17,"sheet_y":3,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F470-1F3FC":{"unified":"1F470-1F3FC","image":"1f470-1f3fc.png","sheet_x":17,"sheet_y":4,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F470-1F3FD":{"unified":"1F470-1F3FD","image":"1f470-1f3fd.png","sheet_x":17,"sheet_y":5,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F470-1F3FE":{"unified":"1F470-1F3FE","image":"1f470-1f3fe.png","sheet_x":17,"sheet_y":6,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F470-1F3FF":{"unified":"1F470-1F3FF","image":"1f470-1f3ff.png","sheet_x":17,"sheet_y":7,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-mh":{"name":"Regional Indicator Symbol Letters Mh","unified":"1F1F2-1F1ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1ed.png","sheet_x":36,"sheet_y":17,"short_name":"flag-mh","short_names":["flag-mh"],"text":null,"texts":null,"category":"Flags","sort_order":138,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"snowman_without_snow":{"name":"Snowman Without Snow","unified":"26C4","variations":["26C4-FE0F"],"docomo":"E641","au":"E485","softbank":"E048","google":"FE003","image":"26c4.png","sheet_x":2,"sheet_y":20,"short_name":"snowman_without_snow","short_names":["snowman_without_snow"],"text":null,"texts":null,"category":"Nature","sort_order":138,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"four":{"name":"Keycap 4","unified":"0034-20E3","variations":["0034-FE0F-20E3"],"docomo":"E6E5","au":"E525","softbank":"E21F","google":"FE831","image":"0034-20e3.png","sheet_x":32,"sheet_y":27,"short_name":"four","short_names":["four"],"text":null,"texts":null,"category":"Symbols","sort_order":138,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clipboard":{"name":"Clipboard","unified":"1F4CB","variations":[],"docomo":"E689","au":"E564","softbank":"E301","google":"FE548","image":"1f4cb.png","sheet_x":21,"sheet_y":14,"short_name":"clipboard","short_names":["clipboard"],"text":null,"texts":null,"category":"Objects","sort_order":139,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wind_blowing_face":{"name":"Wind Blowing Face","unified":"1F32C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f32c.png","sheet_x":6,"sheet_y":22,"short_name":"wind_blowing_face","short_names":["wind_blowing_face"],"text":null,"texts":null,"category":"Nature","sort_order":139,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"five":{"name":"Keycap 5","unified":"0035-20E3","variations":["0035-FE0F-20E3"],"docomo":"E6E6","au":"E526","softbank":"E220","google":"FE832","image":"0035-20e3.png","sheet_x":32,"sheet_y":28,"short_name":"five","short_names":["five"],"text":null,"texts":null,"category":"Symbols","sort_order":139,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"walking":{"name":"Pedestrian","unified":"1F6B6","variations":[],"docomo":"E733","au":"EB72","softbank":"E201","google":"FE7F0","image":"1f6b6.png","sheet_x":30,"sheet_y":40,"short_name":"walking","short_names":["walking"],"text":null,"texts":null,"category":"People","sort_order":139,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F6B6-1F3FB":{"unified":"1F6B6-1F3FB","image":"1f6b6-1f3fb.png","sheet_x":31,"sheet_y":0,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B6-1F3FC":{"unified":"1F6B6-1F3FC","image":"1f6b6-1f3fc.png","sheet_x":31,"sheet_y":1,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B6-1F3FD":{"unified":"1F6B6-1F3FD","image":"1f6b6-1f3fd.png","sheet_x":31,"sheet_y":2,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B6-1F3FE":{"unified":"1F6B6-1F3FE","image":"1f6b6-1f3fe.png","sheet_x":31,"sheet_y":3,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F6B6-1F3FF":{"unified":"1F6B6-1F3FF","image":"1f6b6-1f3ff.png","sheet_x":31,"sheet_y":4,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-mq":{"name":"Regional Indicator Symbol Letters Mq","unified":"1F1F2-1F1F6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f6.png","sheet_x":36,"sheet_y":24,"short_name":"flag-mq","short_names":["flag-mq"],"text":null,"texts":null,"category":"Flags","sort_order":139,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"six":{"name":"Keycap 6","unified":"0036-20E3","variations":["0036-FE0F-20E3"],"docomo":"E6E7","au":"E527","softbank":"E221","google":"FE833","image":"0036-20e3.png","sheet_x":32,"sheet_y":29,"short_name":"six","short_names":["six"],"text":null,"texts":null,"category":"Symbols","sort_order":140,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dash":{"name":"Dash Symbol","unified":"1F4A8","variations":[],"docomo":"E708","au":"E4F4","softbank":"E330","google":"FEB5D","image":"1f4a8.png","sheet_x":20,"sheet_y":15,"short_name":"dash","short_names":["dash"],"text":null,"texts":null,"category":"Nature","sort_order":140,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mr":{"name":"Regional Indicator Symbol Letters Mr","unified":"1F1F2-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f7.png","sheet_x":36,"sheet_y":25,"short_name":"flag-mr","short_names":["flag-mr"],"text":null,"texts":null,"category":"Flags","sort_order":140,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"runner":{"name":"Runner","unified":"1F3C3","variations":[],"docomo":"E733","au":"E46B","softbank":"E115","google":"FE7D9","image":"1f3c3.png","sheet_x":10,"sheet_y":9,"short_name":"runner","short_names":["runner","running"],"text":null,"texts":null,"category":"People","sort_order":140,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F3C3-1F3FB":{"unified":"1F3C3-1F3FB","image":"1f3c3-1f3fb.png","sheet_x":10,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3C3-1F3FC":{"unified":"1F3C3-1F3FC","image":"1f3c3-1f3fc.png","sheet_x":10,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3C3-1F3FD":{"unified":"1F3C3-1F3FD","image":"1f3c3-1f3fd.png","sheet_x":10,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3C3-1F3FE":{"unified":"1F3C3-1F3FE","image":"1f3c3-1f3fe.png","sheet_x":10,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F3C3-1F3FF":{"unified":"1F3C3-1F3FF","image":"1f3c3-1f3ff.png","sheet_x":10,"sheet_y":14,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"spiral_note_pad":{"name":"Spiral Note Pad","unified":"1F5D2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5d2.png","sheet_x":25,"sheet_y":40,"short_name":"spiral_note_pad","short_names":["spiral_note_pad"],"text":null,"texts":null,"category":"Objects","sort_order":140,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"seven":{"name":"Keycap 7","unified":"0037-20E3","variations":["0037-FE0F-20E3"],"docomo":"E6E8","au":"E528","softbank":"E222","google":"FE834","image":"0037-20e3.png","sheet_x":32,"sheet_y":30,"short_name":"seven","short_names":["seven"],"text":null,"texts":null,"category":"Symbols","sort_order":141,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tornado":{"name":"Cloud with Tornado","unified":"1F32A","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f32a.png","sheet_x":6,"sheet_y":20,"short_name":"tornado","short_names":["tornado","tornado_cloud"],"text":null,"texts":null,"category":"Nature","sort_order":141,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"file_folder":{"name":"File Folder","unified":"1F4C1","variations":[],"docomo":null,"au":"E58F","softbank":null,"google":"FE543","image":"1f4c1.png","sheet_x":21,"sheet_y":4,"short_name":"file_folder","short_names":["file_folder"],"text":null,"texts":null,"category":"Objects","sort_order":141,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mu":{"name":"Regional Indicator Symbol Letters Mu","unified":"1F1F2-1F1FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1fa.png","sheet_x":36,"sheet_y":28,"short_name":"flag-mu","short_names":["flag-mu"],"text":null,"texts":null,"category":"Flags","sort_order":141,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dancer":{"name":"Dancer","unified":"1F483","variations":[],"docomo":null,"au":"EB1C","softbank":"E51F","google":"FE1B6","image":"1f483.png","sheet_x":18,"sheet_y":40,"short_name":"dancer","short_names":["dancer"],"text":null,"texts":null,"category":"People","sort_order":141,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F483-1F3FB":{"unified":"1F483-1F3FB","image":"1f483-1f3fb.png","sheet_x":19,"sheet_y":0,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F483-1F3FC":{"unified":"1F483-1F3FC","image":"1f483-1f3fc.png","sheet_x":19,"sheet_y":1,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F483-1F3FD":{"unified":"1F483-1F3FD","image":"1f483-1f3fd.png","sheet_x":19,"sheet_y":2,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F483-1F3FE":{"unified":"1F483-1F3FE","image":"1f483-1f3fe.png","sheet_x":19,"sheet_y":3,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F483-1F3FF":{"unified":"1F483-1F3FF","image":"1f483-1f3ff.png","sheet_x":19,"sheet_y":4,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"open_file_folder":{"name":"Open File Folder","unified":"1F4C2","variations":[],"docomo":null,"au":"E590","softbank":null,"google":"FE544","image":"1f4c2.png","sheet_x":21,"sheet_y":5,"short_name":"open_file_folder","short_names":["open_file_folder"],"text":null,"texts":null,"category":"Objects","sort_order":142,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"eight":{"name":"Keycap 8","unified":"0038-20E3","variations":["0038-FE0F-20E3"],"docomo":"E6E9","au":"E529","softbank":"E223","google":"FE835","image":"0038-20e3.png","sheet_x":32,"sheet_y":31,"short_name":"eight","short_names":["eight"],"text":null,"texts":null,"category":"Symbols","sort_order":142,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fog":{"name":"Fog","unified":"1F32B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f32b.png","sheet_x":6,"sheet_y":21,"short_name":"fog","short_names":["fog"],"text":null,"texts":null,"category":"Nature","sort_order":142,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dancers":{"name":"Woman with Bunny Ears","unified":"1F46F","variations":[],"docomo":null,"au":"EADB","softbank":"E429","google":"FE1A2","image":"1f46f.png","sheet_x":17,"sheet_y":1,"short_name":"dancers","short_names":["dancers"],"text":null,"texts":null,"category":"People","sort_order":142,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-yt":{"name":"Regional Indicator Symbol Letters Yt","unified":"1F1FE-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fe-1f1f9.png","sheet_x":38,"sheet_y":40,"short_name":"flag-yt","short_names":["flag-yt"],"text":null,"texts":null,"category":"Flags","sort_order":142,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"flag-mx":{"name":"Regional Indicator Symbol Letters Mx","unified":"1F1F2-1F1FD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1fd.png","sheet_x":36,"sheet_y":31,"short_name":"flag-mx","short_names":["flag-mx"],"text":null,"texts":null,"category":"Flags","sort_order":143,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"card_index_dividers":{"name":"Card Index Dividers","unified":"1F5C2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5c2.png","sheet_x":25,"sheet_y":36,"short_name":"card_index_dividers","short_names":["card_index_dividers"],"text":null,"texts":null,"category":"Objects","sort_order":143,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"couple":{"name":"Man and Woman Holding Hands","unified":"1F46B","variations":[],"docomo":null,"au":null,"softbank":"E428","google":"FE1A0","image":"1f46b.png","sheet_x":16,"sheet_y":33,"short_name":"couple","short_names":["couple","man_and_woman_holding_hands"],"text":null,"texts":null,"category":"People","sort_order":143,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"umbrella":{"name":"Umbrella","unified":"2602","variations":["2602-FE0F"],"docomo":null,"au":null,"softbank":null,"google":null,"image":"2602.png","sheet_x":1,"sheet_y":2,"short_name":"umbrella","short_names":["umbrella"],"text":null,"texts":null,"category":"Nature","sort_order":143,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"nine":{"name":"Keycap 9","unified":"0039-20E3","variations":["0039-FE0F-20E3"],"docomo":"E6EA","au":"E52A","softbank":"E224","google":"FE836","image":"0039-20e3.png","sheet_x":32,"sheet_y":32,"short_name":"nine","short_names":["nine"],"text":null,"texts":null,"category":"Symbols","sort_order":143,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rolled_up_newspaper":{"name":"Rolled-Up Newspaper","unified":"1F5DE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5de.png","sheet_x":26,"sheet_y":3,"short_name":"rolled_up_newspaper","short_names":["rolled_up_newspaper"],"text":null,"texts":null,"category":"Objects","sort_order":144,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-fm":{"name":"Regional Indicator Symbol Letters Fm","unified":"1F1EB-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1eb-1f1f2.png","sheet_x":34,"sheet_y":28,"short_name":"flag-fm","short_names":["flag-fm"],"text":null,"texts":null,"category":"Flags","sort_order":144,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"umbrella_with_rain_drops":{"name":"Umbrella with Rain Drops","unified":"2614","variations":["2614-FE0F"],"docomo":"E640","au":"E48C","softbank":"E04B","google":"FE002","image":"2614.png","sheet_x":1,"sheet_y":7,"short_name":"umbrella_with_rain_drops","short_names":["umbrella_with_rain_drops"],"text":null,"texts":null,"category":"Nature","sort_order":144,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"two_men_holding_hands":{"name":"Two Men Holding Hands","unified":"1F46C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f46c.png","sheet_x":16,"sheet_y":34,"short_name":"two_men_holding_hands","short_names":["two_men_holding_hands"],"text":null,"texts":null,"category":"People","sort_order":144,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"keycap_ten":{"name":"Keycap Ten","unified":"1F51F","variations":[],"docomo":null,"au":"E52B","softbank":null,"google":"FE83B","image":"1f51f.png","sheet_x":23,"sheet_y":15,"short_name":"keycap_ten","short_names":["keycap_ten"],"text":null,"texts":null,"category":"Symbols","sort_order":144,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"newspaper":{"name":"Newspaper","unified":"1F4F0","variations":[],"docomo":null,"au":"E58B","softbank":null,"google":"FE822","image":"1f4f0.png","sheet_x":22,"sheet_y":10,"short_name":"newspaper","short_names":["newspaper"],"text":null,"texts":null,"category":"Objects","sort_order":145,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"keycap_star":{"name":"Keycap Star","unified":"002A-20E3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"002a-20e3.png","sheet_x":32,"sheet_y":22,"short_name":"keycap_star","short_names":["keycap_star"],"text":null,"texts":null,"category":"Symbols","sort_order":145,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-md":{"name":"Regional Indicator Symbol Letters Md","unified":"1F1F2-1F1E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1e9.png","sheet_x":36,"sheet_y":13,"short_name":"flag-md","short_names":["flag-md"],"text":null,"texts":null,"category":"Flags","sort_order":145,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"two_women_holding_hands":{"name":"Two Women Holding Hands","unified":"1F46D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f46d.png","sheet_x":16,"sheet_y":35,"short_name":"two_women_holding_hands","short_names":["two_women_holding_hands"],"text":null,"texts":null,"category":"People","sort_order":145,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"droplet":{"name":"Droplet","unified":"1F4A7","variations":[],"docomo":"E707","au":"E4E6","softbank":"E331","google":"FEB5C","image":"1f4a7.png","sheet_x":20,"sheet_y":14,"short_name":"droplet","short_names":["droplet"],"text":null,"texts":null,"category":"Nature","sort_order":145,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bow":{"name":"Person Bowing Deeply","unified":"1F647","variations":[],"docomo":null,"au":"EAD9","softbank":"E426","google":"FE353","image":"1f647.png","sheet_x":28,"sheet_y":14,"short_name":"bow","short_names":["bow"],"text":null,"texts":null,"category":"People","sort_order":146,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F647-1F3FB":{"unified":"1F647-1F3FB","image":"1f647-1f3fb.png","sheet_x":28,"sheet_y":15,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F647-1F3FC":{"unified":"1F647-1F3FC","image":"1f647-1f3fc.png","sheet_x":28,"sheet_y":16,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F647-1F3FD":{"unified":"1F647-1F3FD","image":"1f647-1f3fd.png","sheet_x":28,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F647-1F3FE":{"unified":"1F647-1F3FE","image":"1f647-1f3fe.png","sheet_x":28,"sheet_y":18,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F647-1F3FF":{"unified":"1F647-1F3FF","image":"1f647-1f3ff.png","sheet_x":28,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"notebook":{"name":"Notebook","unified":"1F4D3","variations":[],"docomo":"E683","au":"E56B","softbank":"E148","google":"FE545","image":"1f4d3.png","sheet_x":21,"sheet_y":22,"short_name":"notebook","short_names":["notebook"],"text":null,"texts":null,"category":"Objects","sort_order":146,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sweat_drops":{"name":"Splashing Sweat Symbol","unified":"1F4A6","variations":[],"docomo":"E706","au":"E5B1","softbank":"E331","google":"FEB5B","image":"1f4a6.png","sheet_x":20,"sheet_y":13,"short_name":"sweat_drops","short_names":["sweat_drops"],"text":null,"texts":null,"category":"Nature","sort_order":146,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mc":{"name":"Regional Indicator Symbol Letters Mc","unified":"1F1F2-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1e8.png","sheet_x":36,"sheet_y":12,"short_name":"flag-mc","short_names":["flag-mc"],"text":null,"texts":null,"category":"Flags","sort_order":146,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"closed_book":{"name":"Closed Book","unified":"1F4D5","variations":[],"docomo":"E683","au":"E568","softbank":"E148","google":"FE502","image":"1f4d5.png","sheet_x":21,"sheet_y":24,"short_name":"closed_book","short_names":["closed_book"],"text":null,"texts":null,"category":"Objects","sort_order":147,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mn":{"name":"Regional Indicator Symbol Letters Mn","unified":"1F1F2-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f3.png","sheet_x":36,"sheet_y":21,"short_name":"flag-mn","short_names":["flag-mn"],"text":null,"texts":null,"category":"Flags","sort_order":147,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_forward":{"name":"Black Right-Pointing Triangle","unified":"25B6","variations":["25B6-FE0F"],"docomo":null,"au":"E52E","softbank":"E23A","google":"FEAFC","image":"25b6.png","sheet_x":0,"sheet_y":35,"short_name":"arrow_forward","short_names":["arrow_forward"],"text":null,"texts":null,"category":"Symbols","sort_order":147,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"information_desk_person":{"name":"Information Desk Person","unified":"1F481","variations":[],"docomo":null,"au":null,"softbank":"E253","google":"FE1B4","image":"1f481.png","sheet_x":18,"sheet_y":28,"short_name":"information_desk_person","short_names":["information_desk_person"],"text":null,"texts":null,"category":"People","sort_order":147,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F481-1F3FB":{"unified":"1F481-1F3FB","image":"1f481-1f3fb.png","sheet_x":18,"sheet_y":29,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F481-1F3FC":{"unified":"1F481-1F3FC","image":"1f481-1f3fc.png","sheet_x":18,"sheet_y":30,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F481-1F3FD":{"unified":"1F481-1F3FD","image":"1f481-1f3fd.png","sheet_x":18,"sheet_y":31,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F481-1F3FE":{"unified":"1F481-1F3FE","image":"1f481-1f3fe.png","sheet_x":18,"sheet_y":32,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F481-1F3FF":{"unified":"1F481-1F3FF","image":"1f481-1f3ff.png","sheet_x":18,"sheet_y":33,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"ocean":{"name":"Water Wave","unified":"1F30A","variations":[],"docomo":"E73F","au":"EB7C","softbank":"E43E","google":"FE038","image":"1f30a.png","sheet_x":5,"sheet_y":31,"short_name":"ocean","short_names":["ocean"],"text":null,"texts":null,"category":"Nature","sort_order":147,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"double_vertical_bar":{"name":"Double Vertical Bar","unified":"23F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"23f8.png","sheet_x":0,"sheet_y":29,"short_name":"double_vertical_bar","short_names":["double_vertical_bar"],"text":null,"texts":null,"category":"Symbols","sort_order":148,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"green_book":{"name":"Green Book","unified":"1F4D7","variations":[],"docomo":"E683","au":"E565","softbank":"E148","google":"FE4FF","image":"1f4d7.png","sheet_x":21,"sheet_y":26,"short_name":"green_book","short_names":["green_book"],"text":null,"texts":null,"category":"Objects","sort_order":148,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"no_good":{"name":"Face with No Good Gesture","unified":"1F645","variations":[],"docomo":"E72F","au":"EAD7","softbank":"E423","google":"FE351","image":"1f645.png","sheet_x":28,"sheet_y":2,"short_name":"no_good","short_names":["no_good"],"text":null,"texts":null,"category":"People","sort_order":148,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F645-1F3FB":{"unified":"1F645-1F3FB","image":"1f645-1f3fb.png","sheet_x":28,"sheet_y":3,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F645-1F3FC":{"unified":"1F645-1F3FC","image":"1f645-1f3fc.png","sheet_x":28,"sheet_y":4,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F645-1F3FD":{"unified":"1F645-1F3FD","image":"1f645-1f3fd.png","sheet_x":28,"sheet_y":5,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F645-1F3FE":{"unified":"1F645-1F3FE","image":"1f645-1f3fe.png","sheet_x":28,"sheet_y":6,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F645-1F3FF":{"unified":"1F645-1F3FF","image":"1f645-1f3ff.png","sheet_x":28,"sheet_y":7,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"flag-me":{"name":"Regional Indicator Symbol Letters Me","unified":"1F1F2-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1ea.png","sheet_x":36,"sheet_y":14,"short_name":"flag-me","short_names":["flag-me"],"text":null,"texts":null,"category":"Flags","sort_order":148,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ms":{"name":"Regional Indicator Symbol Letters Ms","unified":"1F1F2-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f8.png","sheet_x":36,"sheet_y":26,"short_name":"flag-ms","short_names":["flag-ms"],"text":null,"texts":null,"category":"Flags","sort_order":149,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ok_woman":{"name":"Face with Ok Gesture","unified":"1F646","variations":[],"docomo":"E70B","au":"EAD8","softbank":"E424","google":"FE352","image":"1f646.png","sheet_x":28,"sheet_y":8,"short_name":"ok_woman","short_names":["ok_woman"],"text":null,"texts":null,"category":"People","sort_order":149,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F646-1F3FB":{"unified":"1F646-1F3FB","image":"1f646-1f3fb.png","sheet_x":28,"sheet_y":9,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F646-1F3FC":{"unified":"1F646-1F3FC","image":"1f646-1f3fc.png","sheet_x":28,"sheet_y":10,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F646-1F3FD":{"unified":"1F646-1F3FD","image":"1f646-1f3fd.png","sheet_x":28,"sheet_y":11,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F646-1F3FE":{"unified":"1F646-1F3FE","image":"1f646-1f3fe.png","sheet_x":28,"sheet_y":12,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F646-1F3FF":{"unified":"1F646-1F3FF","image":"1f646-1f3ff.png","sheet_x":28,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"blue_book":{"name":"Blue Book","unified":"1F4D8","variations":[],"docomo":"E683","au":"E566","softbank":"E148","google":"FE500","image":"1f4d8.png","sheet_x":21,"sheet_y":27,"short_name":"blue_book","short_names":["blue_book"],"text":null,"texts":null,"category":"Objects","sort_order":149,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_right_pointing_triangle_with_double_vertical_bar":{"name":"Black Right-Pointing Triangle with Double Vertical Bar","unified":"23EF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"23ef.png","sheet_x":0,"sheet_y":24,"short_name":"black_right_pointing_triangle_with_double_vertical_bar","short_names":["black_right_pointing_triangle_with_double_vertical_bar"],"text":null,"texts":null,"category":"Symbols","sort_order":149,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"raising_hand":{"name":"Happy Person Raising One Hand","unified":"1F64B","variations":[],"docomo":null,"au":"EB85","softbank":"E012","google":"FE357","image":"1f64b.png","sheet_x":28,"sheet_y":23,"short_name":"raising_hand","short_names":["raising_hand"],"text":null,"texts":null,"category":"People","sort_order":150,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F64B-1F3FB":{"unified":"1F64B-1F3FB","image":"1f64b-1f3fb.png","sheet_x":28,"sheet_y":24,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64B-1F3FC":{"unified":"1F64B-1F3FC","image":"1f64b-1f3fc.png","sheet_x":28,"sheet_y":25,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64B-1F3FD":{"unified":"1F64B-1F3FD","image":"1f64b-1f3fd.png","sheet_x":28,"sheet_y":26,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64B-1F3FE":{"unified":"1F64B-1F3FE","image":"1f64b-1f3fe.png","sheet_x":28,"sheet_y":27,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64B-1F3FF":{"unified":"1F64B-1F3FF","image":"1f64b-1f3ff.png","sheet_x":28,"sheet_y":28,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"black_square_for_stop":{"name":"Black Square for Stop","unified":"23F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"23f9.png","sheet_x":0,"sheet_y":30,"short_name":"black_square_for_stop","short_names":["black_square_for_stop"],"text":null,"texts":null,"category":"Symbols","sort_order":150,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"orange_book":{"name":"Orange Book","unified":"1F4D9","variations":[],"docomo":"E683","au":"E567","softbank":"E148","google":"FE501","image":"1f4d9.png","sheet_x":21,"sheet_y":28,"short_name":"orange_book","short_names":["orange_book"],"text":null,"texts":null,"category":"Objects","sort_order":150,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ma":{"name":"Regional Indicator Symbol Letters Ma","unified":"1F1F2-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1e6.png","sheet_x":36,"sheet_y":11,"short_name":"flag-ma","short_names":["flag-ma"],"text":null,"texts":null,"category":"Flags","sort_order":150,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mz":{"name":"Regional Indicator Symbol Letters Mz","unified":"1F1F2-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1ff.png","sheet_x":36,"sheet_y":33,"short_name":"flag-mz","short_names":["flag-mz"],"text":null,"texts":null,"category":"Flags","sort_order":151,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"notebook_with_decorative_cover":{"name":"Notebook with Decorative Cover","unified":"1F4D4","variations":[],"docomo":"E683","au":"E49D","softbank":"E148","google":"FE547","image":"1f4d4.png","sheet_x":21,"sheet_y":23,"short_name":"notebook_with_decorative_cover","short_names":["notebook_with_decorative_cover"],"text":null,"texts":null,"category":"Objects","sort_order":151,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"person_with_pouting_face":{"name":"Person with Pouting Face","unified":"1F64E","variations":[],"docomo":"E6F1","au":"EB88","softbank":"E416","google":"FE35A","image":"1f64e.png","sheet_x":29,"sheet_y":0,"short_name":"person_with_pouting_face","short_names":["person_with_pouting_face"],"text":null,"texts":null,"category":"People","sort_order":151,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F64E-1F3FB":{"unified":"1F64E-1F3FB","image":"1f64e-1f3fb.png","sheet_x":29,"sheet_y":1,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64E-1F3FC":{"unified":"1F64E-1F3FC","image":"1f64e-1f3fc.png","sheet_x":29,"sheet_y":2,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64E-1F3FD":{"unified":"1F64E-1F3FD","image":"1f64e-1f3fd.png","sheet_x":29,"sheet_y":3,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64E-1F3FE":{"unified":"1F64E-1F3FE","image":"1f64e-1f3fe.png","sheet_x":29,"sheet_y":4,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64E-1F3FF":{"unified":"1F64E-1F3FF","image":"1f64e-1f3ff.png","sheet_x":29,"sheet_y":5,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"eject":{"name":"Eject Symbol","unified":"23CF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"23cf.png","sheet_x":0,"sheet_y":17,"short_name":"eject","short_names":["eject"],"text":null,"texts":null,"category":"Symbols","sort_order":151,"has_img_apple":false,"has_img_google":true,"has_img_twitter":false,"has_img_emojione":false},"black_circle_for_record":{"name":"Black Circle for Record","unified":"23FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"23fa.png","sheet_x":0,"sheet_y":31,"short_name":"black_circle_for_record","short_names":["black_circle_for_record"],"text":null,"texts":null,"category":"Symbols","sort_order":152,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mm":{"name":"Regional Indicator Symbol Letters Mm","unified":"1F1F2-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f2.png","sheet_x":36,"sheet_y":20,"short_name":"flag-mm","short_names":["flag-mm"],"text":null,"texts":null,"category":"Flags","sort_order":152,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"person_frowning":{"name":"Person Frowning","unified":"1F64D","variations":[],"docomo":"E6F3","au":"EB87","softbank":"E403","google":"FE359","image":"1f64d.png","sheet_x":28,"sheet_y":35,"short_name":"person_frowning","short_names":["person_frowning"],"text":null,"texts":null,"category":"People","sort_order":152,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F64D-1F3FB":{"unified":"1F64D-1F3FB","image":"1f64d-1f3fb.png","sheet_x":28,"sheet_y":36,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64D-1F3FC":{"unified":"1F64D-1F3FC","image":"1f64d-1f3fc.png","sheet_x":28,"sheet_y":37,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64D-1F3FD":{"unified":"1F64D-1F3FD","image":"1f64d-1f3fd.png","sheet_x":28,"sheet_y":38,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64D-1F3FE":{"unified":"1F64D-1F3FE","image":"1f64d-1f3fe.png","sheet_x":28,"sheet_y":39,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F64D-1F3FF":{"unified":"1F64D-1F3FF","image":"1f64d-1f3ff.png","sheet_x":28,"sheet_y":40,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"ledger":{"name":"Ledger","unified":"1F4D2","variations":[],"docomo":"E683","au":"E56E","softbank":"E148","google":"FE54F","image":"1f4d2.png","sheet_x":21,"sheet_y":21,"short_name":"ledger","short_names":["ledger"],"text":null,"texts":null,"category":"Objects","sort_order":152,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-na":{"name":"Regional Indicator Symbol Letters Na","unified":"1F1F3-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1e6.png","sheet_x":36,"sheet_y":34,"short_name":"flag-na","short_names":["flag-na"],"text":null,"texts":null,"category":"Flags","sort_order":153,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"haircut":{"name":"Haircut","unified":"1F487","variations":[],"docomo":"E675","au":"EAA1","softbank":"E31F","google":"FE198","image":"1f487.png","sheet_x":19,"sheet_y":18,"short_name":"haircut","short_names":["haircut"],"text":null,"texts":null,"category":"People","sort_order":153,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F487-1F3FB":{"unified":"1F487-1F3FB","image":"1f487-1f3fb.png","sheet_x":19,"sheet_y":19,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F487-1F3FC":{"unified":"1F487-1F3FC","image":"1f487-1f3fc.png","sheet_x":19,"sheet_y":20,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F487-1F3FD":{"unified":"1F487-1F3FD","image":"1f487-1f3fd.png","sheet_x":19,"sheet_y":21,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F487-1F3FE":{"unified":"1F487-1F3FE","image":"1f487-1f3fe.png","sheet_x":19,"sheet_y":22,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F487-1F3FF":{"unified":"1F487-1F3FF","image":"1f487-1f3ff.png","sheet_x":19,"sheet_y":23,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"books":{"name":"Books","unified":"1F4DA","variations":[],"docomo":"E683","au":"E56F","softbank":"E148","google":"FE503","image":"1f4da.png","sheet_x":21,"sheet_y":29,"short_name":"books","short_names":["books"],"text":null,"texts":null,"category":"Objects","sort_order":153,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_right_pointing_double_triangle_with_vertical_bar":{"name":"Black Right-Pointing Double Triangle with Vertical Bar","unified":"23ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"23ed.png","sheet_x":0,"sheet_y":22,"short_name":"black_right_pointing_double_triangle_with_vertical_bar","short_names":["black_right_pointing_double_triangle_with_vertical_bar"],"text":null,"texts":null,"category":"Symbols","sort_order":153,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"book":{"name":"Open Book","unified":"1F4D6","variations":[],"docomo":"E683","au":"E49F","softbank":"E148","google":"FE546","image":"1f4d6.png","sheet_x":21,"sheet_y":25,"short_name":"book","short_names":["book","open_book"],"text":null,"texts":null,"category":"Objects","sort_order":154,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-nr":{"name":"Regional Indicator Symbol Letters Nr","unified":"1F1F3-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1f7.png","sheet_x":37,"sheet_y":2,"short_name":"flag-nr","short_names":["flag-nr"],"text":null,"texts":null,"category":"Flags","sort_order":154,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_left_pointing_double_triangle_with_vertical_bar":{"name":"Black Left-Pointing Double Triangle with Vertical Bar","unified":"23EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"23ee.png","sheet_x":0,"sheet_y":23,"short_name":"black_left_pointing_double_triangle_with_vertical_bar","short_names":["black_left_pointing_double_triangle_with_vertical_bar"],"text":null,"texts":null,"category":"Symbols","sort_order":154,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"massage":{"name":"Face Massage","unified":"1F486","variations":[],"docomo":null,"au":"E50B","softbank":"E31E","google":"FE197","image":"1f486.png","sheet_x":19,"sheet_y":12,"short_name":"massage","short_names":["massage"],"text":null,"texts":null,"category":"People","sort_order":154,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true,"skin_variations":{"1F486-1F3FB":{"unified":"1F486-1F3FB","image":"1f486-1f3fb.png","sheet_x":19,"sheet_y":13,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F486-1F3FC":{"unified":"1F486-1F3FC","image":"1f486-1f3fc.png","sheet_x":19,"sheet_y":14,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F486-1F3FD":{"unified":"1F486-1F3FD","image":"1f486-1f3fd.png","sheet_x":19,"sheet_y":15,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F486-1F3FE":{"unified":"1F486-1F3FE","image":"1f486-1f3fe.png","sheet_x":19,"sheet_y":16,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"1F486-1F3FF":{"unified":"1F486-1F3FF","image":"1f486-1f3ff.png","sheet_x":19,"sheet_y":17,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}},"couple_with_heart":{"name":"Couple with Heart","unified":"1F491","variations":[],"docomo":"E6ED","au":"EADA","softbank":"E425","google":"FE829","image":"1f491.png","sheet_x":19,"sheet_y":33,"short_name":"couple_with_heart","short_names":["couple_with_heart"],"text":null,"texts":null,"category":"People","sort_order":155,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"fast_forward":{"name":"Black Right-Pointing Double Triangle","unified":"23E9","variations":[],"docomo":null,"au":"E530","softbank":"E23C","google":"FEAFE","image":"23e9.png","sheet_x":0,"sheet_y":18,"short_name":"fast_forward","short_names":["fast_forward"],"text":null,"texts":null,"category":"Symbols","sort_order":155,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-np":{"name":"Regional Indicator Symbol Letters Np","unified":"1F1F3-1F1F5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1f5.png","sheet_x":37,"sheet_y":1,"short_name":"flag-np","short_names":["flag-np"],"text":null,"texts":null,"category":"Flags","sort_order":155,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"link":{"name":"Link Symbol","unified":"1F517","variations":[],"docomo":null,"au":"E58A","softbank":null,"google":"FEB4B","image":"1f517.png","sheet_x":23,"sheet_y":7,"short_name":"link","short_names":["link"],"text":null,"texts":null,"category":"Objects","sort_order":155,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"paperclip":{"name":"Paperclip","unified":"1F4CE","variations":[],"docomo":"E730","au":"E4A0","softbank":null,"google":"FE53A","image":"1f4ce.png","sheet_x":21,"sheet_y":17,"short_name":"paperclip","short_names":["paperclip"],"text":null,"texts":null,"category":"Objects","sort_order":156,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"rewind":{"name":"Black Left-Pointing Double Triangle","unified":"23EA","variations":[],"docomo":null,"au":"E52F","softbank":"E23D","google":"FEAFF","image":"23ea.png","sheet_x":0,"sheet_y":19,"short_name":"rewind","short_names":["rewind"],"text":null,"texts":null,"category":"Symbols","sort_order":156,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"woman-heart-woman":{"name":"Woman Heart Woman","unified":"1F469-200D-2764-FE0F-200D-1F469","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f469-200d-2764-fe0f-200d-1f469.png","sheet_x":39,"sheet_y":19,"short_name":"woman-heart-woman","short_names":["woman-heart-woman"],"text":null,"texts":null,"category":"People","sort_order":156,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":false},"flag-nl":{"name":"Regional Indicator Symbol Letters Nl","unified":"1F1F3-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1f1.png","sheet_x":36,"sheet_y":40,"short_name":"flag-nl","short_names":["flag-nl"],"text":null,"texts":null,"category":"Flags","sort_order":156,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"linked_paperclips":{"name":"Linked Paperclips","unified":"1F587","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f587.png","sheet_x":25,"sheet_y":8,"short_name":"linked_paperclips","short_names":["linked_paperclips"],"text":null,"texts":null,"category":"Objects","sort_order":157,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-heart-man":{"name":"Man Heart Man","unified":"1F468-200D-2764-FE0F-200D-1F468","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-2764-fe0f-200d-1f468.png","sheet_x":39,"sheet_y":12,"short_name":"man-heart-man","short_names":["man-heart-man"],"text":null,"texts":null,"category":"People","sort_order":157,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":false},"flag-nc":{"name":"Regional Indicator Symbol Letters Nc","unified":"1F1F3-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1e8.png","sheet_x":36,"sheet_y":35,"short_name":"flag-nc","short_names":["flag-nc"],"text":null,"texts":null,"category":"Flags","sort_order":157,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"twisted_rightwards_arrows":{"name":"Twisted Rightwards Arrows","unified":"1F500","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f500.png","sheet_x":22,"sheet_y":25,"short_name":"twisted_rightwards_arrows","short_names":["twisted_rightwards_arrows"],"text":null,"texts":null,"category":"Symbols","sort_order":157,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"couplekiss":{"name":"Kiss","unified":"1F48F","variations":[],"docomo":"E6F9","au":"E5CA","softbank":"E111","google":"FE827","image":"1f48f.png","sheet_x":19,"sheet_y":31,"short_name":"couplekiss","short_names":["couplekiss"],"text":null,"texts":null,"category":"People","sort_order":158,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-nz":{"name":"Regional Indicator Symbol Letters Nz","unified":"1F1F3-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1ff.png","sheet_x":37,"sheet_y":4,"short_name":"flag-nz","short_names":["flag-nz"],"text":null,"texts":null,"category":"Flags","sort_order":158,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"scissors":{"name":"Black Scissors","unified":"2702","variations":["2702-FE0F"],"docomo":"E675","au":"E516","softbank":"E313","google":"FE53E","image":"2702.png","sheet_x":3,"sheet_y":5,"short_name":"scissors","short_names":["scissors"],"text":null,"texts":null,"category":"Objects","sort_order":158,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"repeat":{"name":"Clockwise Rightwards and Leftwards Open Circle Arrows","unified":"1F501","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f501.png","sheet_x":22,"sheet_y":26,"short_name":"repeat","short_names":["repeat"],"text":null,"texts":null,"category":"Symbols","sort_order":158,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"repeat_one":{"name":"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay","unified":"1F502","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f502.png","sheet_x":22,"sheet_y":27,"short_name":"repeat_one","short_names":["repeat_one"],"text":null,"texts":null,"category":"Symbols","sort_order":159,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ni":{"name":"Regional Indicator Symbol Letters Ni","unified":"1F1F3-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1ee.png","sheet_x":36,"sheet_y":39,"short_name":"flag-ni","short_names":["flag-ni"],"text":null,"texts":null,"category":"Flags","sort_order":159,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"woman-kiss-woman":{"name":"Woman Kiss Woman","unified":"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469.png","sheet_x":39,"sheet_y":20,"short_name":"woman-kiss-woman","short_names":["woman-kiss-woman"],"text":null,"texts":null,"category":"People","sort_order":159,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":false},"triangular_ruler":{"name":"Triangular Ruler","unified":"1F4D0","variations":[],"docomo":null,"au":"E4A2","softbank":null,"google":"FE551","image":"1f4d0.png","sheet_x":21,"sheet_y":19,"short_name":"triangular_ruler","short_names":["triangular_ruler"],"text":null,"texts":null,"category":"Objects","sort_order":159,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"straight_ruler":{"name":"Straight Ruler","unified":"1F4CF","variations":[],"docomo":null,"au":"E570","softbank":null,"google":"FE550","image":"1f4cf.png","sheet_x":21,"sheet_y":18,"short_name":"straight_ruler","short_names":["straight_ruler"],"text":null,"texts":null,"category":"Objects","sort_order":160,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ne":{"name":"Regional Indicator Symbol Letters Ne","unified":"1F1F3-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1ea.png","sheet_x":36,"sheet_y":36,"short_name":"flag-ne","short_names":["flag-ne"],"text":null,"texts":null,"category":"Flags","sort_order":160,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-kiss-man":{"name":"Man Kiss Man","unified":"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468.png","sheet_x":39,"sheet_y":13,"short_name":"man-kiss-man","short_names":["man-kiss-man"],"text":null,"texts":null,"category":"People","sort_order":160,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":false},"arrow_backward":{"name":"Black Left-Pointing Triangle","unified":"25C0","variations":["25C0-FE0F"],"docomo":null,"au":"E52D","softbank":"E23B","google":"FEAFD","image":"25c0.png","sheet_x":0,"sheet_y":36,"short_name":"arrow_backward","short_names":["arrow_backward"],"text":null,"texts":null,"category":"Symbols","sort_order":160,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_up_small":{"name":"Up-Pointing Small Red Triangle","unified":"1F53C","variations":[],"docomo":null,"au":"E543","softbank":null,"google":"FEB01","image":"1f53c.png","sheet_x":24,"sheet_y":3,"short_name":"arrow_up_small","short_names":["arrow_up_small"],"text":null,"texts":null,"category":"Symbols","sort_order":161,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ng":{"name":"Regional Indicator Symbol Letters Ng","unified":"1F1F3-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1ec.png","sheet_x":36,"sheet_y":38,"short_name":"flag-ng","short_names":["flag-ng"],"text":null,"texts":null,"category":"Flags","sort_order":161,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"family":{"name":"Family","unified":"1F46A","variations":["1F468-200D-1F469-200D-1F466"],"docomo":null,"au":"E501","softbank":null,"google":"FE19F","image":"1f46a.png","sheet_x":16,"sheet_y":32,"short_name":"family","short_names":["family","man-woman-boy"],"text":null,"texts":null,"category":"People","sort_order":161,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pushpin":{"name":"Pushpin","unified":"1F4CC","variations":[],"docomo":null,"au":"E56D","softbank":null,"google":"FE54E","image":"1f4cc.png","sheet_x":21,"sheet_y":15,"short_name":"pushpin","short_names":["pushpin"],"text":null,"texts":null,"category":"Objects","sort_order":161,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-woman-girl":{"name":"Man Woman Girl","unified":"1F468-200D-1F469-200D-1F467","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-1f469-200d-1f467.png","sheet_x":39,"sheet_y":9,"short_name":"man-woman-girl","short_names":["man-woman-girl"],"text":null,"texts":null,"category":"People","sort_order":162,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"round_pushpin":{"name":"Round Pushpin","unified":"1F4CD","variations":[],"docomo":null,"au":"E560","softbank":null,"google":"FE53F","image":"1f4cd.png","sheet_x":21,"sheet_y":16,"short_name":"round_pushpin","short_names":["round_pushpin"],"text":null,"texts":null,"category":"Objects","sort_order":162,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_down_small":{"name":"Down-Pointing Small Red Triangle","unified":"1F53D","variations":[],"docomo":null,"au":"E542","softbank":null,"google":"FEB00","image":"1f53d.png","sheet_x":24,"sheet_y":4,"short_name":"arrow_down_small","short_names":["arrow_down_small"],"text":null,"texts":null,"category":"Symbols","sort_order":162,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-nu":{"name":"Regional Indicator Symbol Letters Nu","unified":"1F1F3-1F1FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1fa.png","sheet_x":37,"sheet_y":3,"short_name":"flag-nu","short_names":["flag-nu"],"text":null,"texts":null,"category":"Flags","sort_order":162,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-nf":{"name":"Regional Indicator Symbol Letters Nf","unified":"1F1F3-1F1EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1eb.png","sheet_x":36,"sheet_y":37,"short_name":"flag-nf","short_names":["flag-nf"],"text":null,"texts":null,"category":"Flags","sort_order":163,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"triangular_flag_on_post":{"name":"Triangular Flag on Post","unified":"1F6A9","variations":[],"docomo":"E6DE","au":"EB2C","softbank":null,"google":"FEB22","image":"1f6a9.png","sheet_x":30,"sheet_y":17,"short_name":"triangular_flag_on_post","short_names":["triangular_flag_on_post"],"text":null,"texts":null,"category":"Objects","sort_order":163,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-woman-girl-boy":{"name":"Man Woman Girl Boy","unified":"1F468-200D-1F469-200D-1F467-200D-1F466","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-1f469-200d-1f467-200d-1f466.png","sheet_x":39,"sheet_y":10,"short_name":"man-woman-girl-boy","short_names":["man-woman-girl-boy"],"text":null,"texts":null,"category":"People","sort_order":163,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_double_up":{"name":"Black Up-Pointing Double Triangle","unified":"23EB","variations":[],"docomo":null,"au":"E545","softbank":null,"google":"FEB03","image":"23eb.png","sheet_x":0,"sheet_y":20,"short_name":"arrow_double_up","short_names":["arrow_double_up"],"text":null,"texts":null,"category":"Symbols","sort_order":163,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-woman-boy-boy":{"name":"Man Woman Boy Boy","unified":"1F468-200D-1F469-200D-1F466-200D-1F466","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-1f469-200d-1f466-200d-1f466.png","sheet_x":39,"sheet_y":8,"short_name":"man-woman-boy-boy","short_names":["man-woman-boy-boy"],"text":null,"texts":null,"category":"People","sort_order":164,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mp":{"name":"Regional Indicator Symbol Letters Mp","unified":"1F1F2-1F1F5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1f5.png","sheet_x":36,"sheet_y":23,"short_name":"flag-mp","short_names":["flag-mp"],"text":null,"texts":null,"category":"Flags","sort_order":164,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"waving_white_flag":{"name":"Waving White Flag","unified":"1F3F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3f3.png","sheet_x":11,"sheet_y":34,"short_name":"waving_white_flag","short_names":["waving_white_flag"],"text":null,"texts":null,"category":"Objects","sort_order":164,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_double_down":{"name":"Black Down-Pointing Double Triangle","unified":"23EC","variations":[],"docomo":null,"au":"E544","softbank":null,"google":"FEB02","image":"23ec.png","sheet_x":0,"sheet_y":21,"short_name":"arrow_double_down","short_names":["arrow_double_down"],"text":null,"texts":null,"category":"Symbols","sort_order":164,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-woman-girl-girl":{"name":"Man Woman Girl Girl","unified":"1F468-200D-1F469-200D-1F467-200D-1F467","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-1f469-200d-1f467-200d-1f467.png","sheet_x":39,"sheet_y":11,"short_name":"man-woman-girl-girl","short_names":["man-woman-girl-girl"],"text":null,"texts":null,"category":"People","sort_order":165,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-kp":{"name":"Regional Indicator Symbol Letters Kp","unified":"1F1F0-1F1F5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1f5.png","sheet_x":35,"sheet_y":36,"short_name":"flag-kp","short_names":["flag-kp"],"text":null,"texts":null,"category":"Flags","sort_order":165,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"waving_black_flag":{"name":"Waving Black Flag","unified":"1F3F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3f4.png","sheet_x":11,"sheet_y":35,"short_name":"waving_black_flag","short_names":["waving_black_flag"],"text":null,"texts":null,"category":"Objects","sort_order":165,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_right":{"name":"Black Rightwards Arrow","unified":"27A1","variations":["27A1-FE0F"],"docomo":null,"au":"E552","softbank":"E234","google":"FEAFA","image":"27a1.png","sheet_x":4,"sheet_y":14,"short_name":"arrow_right","short_names":["arrow_right"],"text":null,"texts":null,"category":"Symbols","sort_order":165,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-no":{"name":"Regional Indicator Symbol Letters No","unified":"1F1F3-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f3-1f1f4.png","sheet_x":37,"sheet_y":0,"short_name":"flag-no","short_names":["flag-no"],"text":null,"texts":null,"category":"Flags","sort_order":166,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"woman-woman-boy":{"name":"Woman Woman Boy","unified":"1F469-200D-1F469-200D-1F466","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f469-200d-1f469-200d-1f466.png","sheet_x":39,"sheet_y":14,"short_name":"woman-woman-boy","short_names":["woman-woman-boy"],"text":null,"texts":null,"category":"People","sort_order":166,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_left":{"name":"Leftwards Black Arrow","unified":"2B05","variations":["2B05-FE0F"],"docomo":null,"au":"E553","softbank":"E235","google":"FEAFB","image":"2b05.png","sheet_x":4,"sheet_y":19,"short_name":"arrow_left","short_names":["arrow_left"],"text":null,"texts":null,"category":"Symbols","sort_order":166,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"closed_lock_with_key":{"name":"Closed Lock with Key","unified":"1F510","variations":[],"docomo":"E6D9","au":"EAFC","softbank":"E144","google":"FEB8A","image":"1f510.png","sheet_x":23,"sheet_y":0,"short_name":"closed_lock_with_key","short_names":["closed_lock_with_key"],"text":null,"texts":null,"category":"Objects","sort_order":166,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-om":{"name":"Regional Indicator Symbol Letters Om","unified":"1F1F4-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f4-1f1f2.png","sheet_x":37,"sheet_y":5,"short_name":"flag-om","short_names":["flag-om"],"text":null,"texts":null,"category":"Flags","sort_order":167,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lock":{"name":"Lock","unified":"1F512","variations":[],"docomo":"E6D9","au":"E51C","softbank":"E144","google":"FEB86","image":"1f512.png","sheet_x":23,"sheet_y":2,"short_name":"lock","short_names":["lock"],"text":null,"texts":null,"category":"Objects","sort_order":167,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_up":{"name":"Upwards Black Arrow","unified":"2B06","variations":["2B06-FE0F"],"docomo":null,"au":"E53F","softbank":"E232","google":"FEAF8","image":"2b06.png","sheet_x":4,"sheet_y":20,"short_name":"arrow_up","short_names":["arrow_up"],"text":null,"texts":null,"category":"Symbols","sort_order":167,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"woman-woman-girl":{"name":"Woman Woman Girl","unified":"1F469-200D-1F469-200D-1F467","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f469-200d-1f469-200d-1f467.png","sheet_x":39,"sheet_y":16,"short_name":"woman-woman-girl","short_names":["woman-woman-girl"],"text":null,"texts":null,"category":"People","sort_order":167,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_down":{"name":"Downwards Black Arrow","unified":"2B07","variations":["2B07-FE0F"],"docomo":null,"au":"E540","softbank":"E233","google":"FEAF9","image":"2b07.png","sheet_x":4,"sheet_y":21,"short_name":"arrow_down","short_names":["arrow_down"],"text":null,"texts":null,"category":"Symbols","sort_order":168,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pk":{"name":"Regional Indicator Symbol Letters Pk","unified":"1F1F5-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1f0.png","sheet_x":37,"sheet_y":11,"short_name":"flag-pk","short_names":["flag-pk"],"text":null,"texts":null,"category":"Flags","sort_order":168,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"woman-woman-girl-boy":{"name":"Woman Woman Girl Boy","unified":"1F469-200D-1F469-200D-1F467-200D-1F466","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f469-200d-1f469-200d-1f467-200d-1f466.png","sheet_x":39,"sheet_y":17,"short_name":"woman-woman-girl-boy","short_names":["woman-woman-girl-boy"],"text":null,"texts":null,"category":"People","sort_order":168,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"unlock":{"name":"Open Lock","unified":"1F513","variations":[],"docomo":"E6D9","au":"E51C","softbank":"E145","google":"FEB87","image":"1f513.png","sheet_x":23,"sheet_y":3,"short_name":"unlock","short_names":["unlock"],"text":null,"texts":null,"category":"Objects","sort_order":168,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"woman-woman-boy-boy":{"name":"Woman Woman Boy Boy","unified":"1F469-200D-1F469-200D-1F466-200D-1F466","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f469-200d-1f469-200d-1f466-200d-1f466.png","sheet_x":39,"sheet_y":15,"short_name":"woman-woman-boy-boy","short_names":["woman-woman-boy-boy"],"text":null,"texts":null,"category":"People","sort_order":169,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lock_with_ink_pen":{"name":"Lock with Ink Pen","unified":"1F50F","variations":[],"docomo":"E6D9","au":"EB0C","softbank":"E144","google":"FEB90","image":"1f50f.png","sheet_x":22,"sheet_y":40,"short_name":"lock_with_ink_pen","short_names":["lock_with_ink_pen"],"text":null,"texts":null,"category":"Objects","sort_order":169,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pw":{"name":"Regional Indicator Symbol Letters Pw","unified":"1F1F5-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1fc.png","sheet_x":37,"sheet_y":18,"short_name":"flag-pw","short_names":["flag-pw"],"text":null,"texts":null,"category":"Flags","sort_order":169,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_upper_right":{"name":"North East Arrow","unified":"2197","variations":["2197-FE0F"],"docomo":"E678","au":"E555","softbank":"E236","google":"FEAF0","image":"2197.png","sheet_x":0,"sheet_y":9,"short_name":"arrow_upper_right","short_names":["arrow_upper_right"],"text":null,"texts":null,"category":"Symbols","sort_order":169,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"woman-woman-girl-girl":{"name":"Woman Woman Girl Girl","unified":"1F469-200D-1F469-200D-1F467-200D-1F467","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f469-200d-1f469-200d-1f467-200d-1f467.png","sheet_x":39,"sheet_y":18,"short_name":"woman-woman-girl-girl","short_names":["woman-woman-girl-girl"],"text":null,"texts":null,"category":"People","sort_order":170,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_lower_right":{"name":"South East Arrow","unified":"2198","variations":["2198-FE0F"],"docomo":"E696","au":"E54D","softbank":"E238","google":"FEAF1","image":"2198.png","sheet_x":0,"sheet_y":10,"short_name":"arrow_lower_right","short_names":["arrow_lower_right"],"text":null,"texts":null,"category":"Symbols","sort_order":170,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lower_left_ballpoint_pen":{"name":"Lower Left Ballpoint Pen","unified":"1F58A","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f58a.png","sheet_x":25,"sheet_y":9,"short_name":"lower_left_ballpoint_pen","short_names":["lower_left_ballpoint_pen"],"text":null,"texts":null,"category":"Objects","sort_order":170,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ps":{"name":"Regional Indicator Symbol Letters Ps","unified":"1F1F5-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1f8.png","sheet_x":37,"sheet_y":16,"short_name":"flag-ps","short_names":["flag-ps"],"text":null,"texts":null,"category":"Flags","sort_order":170,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pa":{"name":"Regional Indicator Symbol Letters Pa","unified":"1F1F5-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1e6.png","sheet_x":37,"sheet_y":6,"short_name":"flag-pa","short_names":["flag-pa"],"text":null,"texts":null,"category":"Flags","sort_order":171,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lower_left_fountain_pen":{"name":"Lower Left Fountain Pen","unified":"1F58B","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f58b.png","sheet_x":25,"sheet_y":10,"short_name":"lower_left_fountain_pen","short_names":["lower_left_fountain_pen"],"text":null,"texts":null,"category":"Objects","sort_order":171,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_lower_left":{"name":"South West Arrow","unified":"2199","variations":["2199-FE0F"],"docomo":"E6A5","au":"E556","softbank":"E239","google":"FEAF3","image":"2199.png","sheet_x":0,"sheet_y":11,"short_name":"arrow_lower_left","short_names":["arrow_lower_left"],"text":null,"texts":null,"category":"Symbols","sort_order":171,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-man-boy":{"name":"Man Man Boy","unified":"1F468-200D-1F468-200D-1F466","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-1f468-200d-1f466.png","sheet_x":39,"sheet_y":3,"short_name":"man-man-boy","short_names":["man-man-boy"],"text":null,"texts":null,"category":"People","sort_order":171,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_nib":{"name":"Black Nib","unified":"2712","variations":["2712-FE0F"],"docomo":"E6AE","au":"EB03","softbank":null,"google":"FE536","image":"2712.png","sheet_x":3,"sheet_y":34,"short_name":"black_nib","short_names":["black_nib"],"text":null,"texts":null,"category":"Objects","sort_order":172,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pg":{"name":"Regional Indicator Symbol Letters Pg","unified":"1F1F5-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1ec.png","sheet_x":37,"sheet_y":9,"short_name":"flag-pg","short_names":["flag-pg"],"text":null,"texts":null,"category":"Flags","sort_order":172,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_upper_left":{"name":"North West Arrow","unified":"2196","variations":["2196-FE0F"],"docomo":"E697","au":"E54C","softbank":"E237","google":"FEAF2","image":"2196.png","sheet_x":0,"sheet_y":8,"short_name":"arrow_upper_left","short_names":["arrow_upper_left"],"text":null,"texts":null,"category":"Symbols","sort_order":172,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-man-girl":{"name":"Man Man Girl","unified":"1F468-200D-1F468-200D-1F467","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-1f468-200d-1f467.png","sheet_x":39,"sheet_y":5,"short_name":"man-man-girl","short_names":["man-man-girl"],"text":null,"texts":null,"category":"People","sort_order":172,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-man-girl-boy":{"name":"Man Man Girl Boy","unified":"1F468-200D-1F468-200D-1F467-200D-1F466","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-1f468-200d-1f467-200d-1f466.png","sheet_x":39,"sheet_y":6,"short_name":"man-man-girl-boy","short_names":["man-man-girl-boy"],"text":null,"texts":null,"category":"People","sort_order":173,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_up_down":{"name":"Up Down Arrow","unified":"2195","variations":["2195-FE0F"],"docomo":"E73D","au":"EB7B","softbank":null,"google":"FEAF7","image":"2195.png","sheet_x":0,"sheet_y":7,"short_name":"arrow_up_down","short_names":["arrow_up_down"],"text":null,"texts":null,"category":"Symbols","sort_order":173,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"memo":{"name":"Memo","unified":"1F4DD","variations":[],"docomo":"E689","au":"EA92","softbank":"E301","google":"FE527","image":"1f4dd.png","sheet_x":21,"sheet_y":32,"short_name":"memo","short_names":["memo","pencil"],"text":null,"texts":null,"category":"Objects","sort_order":173,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-py":{"name":"Regional Indicator Symbol Letters Py","unified":"1F1F5-1F1FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1fe.png","sheet_x":37,"sheet_y":19,"short_name":"flag-py","short_names":["flag-py"],"text":null,"texts":null,"category":"Flags","sort_order":173,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pe":{"name":"Regional Indicator Symbol Letters Pe","unified":"1F1F5-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1ea.png","sheet_x":37,"sheet_y":7,"short_name":"flag-pe","short_names":["flag-pe"],"text":null,"texts":null,"category":"Flags","sort_order":174,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pencil2":{"name":"Pencil","unified":"270F","variations":["270F-FE0F"],"docomo":"E719","au":"E4A1","softbank":"E301","google":"FE539","image":"270f.png","sheet_x":3,"sheet_y":33,"short_name":"pencil2","short_names":["pencil2"],"text":null,"texts":null,"category":"Objects","sort_order":174,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-man-boy-boy":{"name":"Man Man Boy Boy","unified":"1F468-200D-1F468-200D-1F466-200D-1F466","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-1f468-200d-1f466-200d-1f466.png","sheet_x":39,"sheet_y":4,"short_name":"man-man-boy-boy","short_names":["man-man-boy-boy"],"text":null,"texts":null,"category":"People","sort_order":174,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"left_right_arrow":{"name":"Left Right Arrow","unified":"2194","variations":["2194-FE0F"],"docomo":"E73C","au":"EB7A","softbank":null,"google":"FEAF6","image":"2194.png","sheet_x":0,"sheet_y":6,"short_name":"left_right_arrow","short_names":["left_right_arrow"],"text":null,"texts":null,"category":"Symbols","sort_order":174,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"man-man-girl-girl":{"name":"Man Man Girl Girl","unified":"1F468-200D-1F468-200D-1F467-200D-1F467","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f468-200d-1f468-200d-1f467-200d-1f467.png","sheet_x":39,"sheet_y":7,"short_name":"man-man-girl-girl","short_names":["man-man-girl-girl"],"text":null,"texts":null,"category":"People","sort_order":175,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrows_counterclockwise":{"name":"Anticlockwise Downwards and Upwards Open Circle Arrows","unified":"1F504","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f504.png","sheet_x":22,"sheet_y":29,"short_name":"arrows_counterclockwise","short_names":["arrows_counterclockwise"],"text":null,"texts":null,"category":"Symbols","sort_order":175,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ph":{"name":"Regional Indicator Symbol Letters Ph","unified":"1F1F5-1F1ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1ed.png","sheet_x":37,"sheet_y":10,"short_name":"flag-ph","short_names":["flag-ph"],"text":null,"texts":null,"category":"Flags","sort_order":175,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lower_left_crayon":{"name":"Lower Left Crayon","unified":"1F58D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f58d.png","sheet_x":25,"sheet_y":12,"short_name":"lower_left_crayon","short_names":["lower_left_crayon"],"text":null,"texts":null,"category":"Objects","sort_order":175,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"womans_clothes":{"name":"Womans Clothes","unified":"1F45A","variations":[],"docomo":"E70E","au":"E50D","softbank":"E006","google":"FE4DB","image":"1f45a.png","sheet_x":15,"sheet_y":37,"short_name":"womans_clothes","short_names":["womans_clothes"],"text":null,"texts":null,"category":"People","sort_order":176,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lower_left_paintbrush":{"name":"Lower Left Paintbrush","unified":"1F58C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f58c.png","sheet_x":25,"sheet_y":11,"short_name":"lower_left_paintbrush","short_names":["lower_left_paintbrush"],"text":null,"texts":null,"category":"Objects","sort_order":176,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pn":{"name":"Regional Indicator Symbol Letters Pn","unified":"1F1F5-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1f3.png","sheet_x":37,"sheet_y":14,"short_name":"flag-pn","short_names":["flag-pn"],"text":null,"texts":null,"category":"Flags","sort_order":176,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_right_hook":{"name":"Rightwards Arrow with Hook","unified":"21AA","variations":["21AA-FE0F"],"docomo":null,"au":"E55C","softbank":null,"google":"FEB88","image":"21aa.png","sheet_x":0,"sheet_y":13,"short_name":"arrow_right_hook","short_names":["arrow_right_hook"],"text":null,"texts":null,"category":"Symbols","sort_order":176,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"leftwards_arrow_with_hook":{"name":"Leftwards Arrow with Hook","unified":"21A9","variations":["21A9-FE0F"],"docomo":"E6DA","au":"E55D","softbank":null,"google":"FEB83","image":"21a9.png","sheet_x":0,"sheet_y":12,"short_name":"leftwards_arrow_with_hook","short_names":["leftwards_arrow_with_hook"],"text":null,"texts":null,"category":"Symbols","sort_order":177,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mag":{"name":"Left-Pointing Magnifying Glass","unified":"1F50D","variations":[],"docomo":"E6DC","au":"E518","softbank":"E114","google":"FEB85","image":"1f50d.png","sheet_x":22,"sheet_y":38,"short_name":"mag","short_names":["mag"],"text":null,"texts":null,"category":"Objects","sort_order":177,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pl":{"name":"Regional Indicator Symbol Letters Pl","unified":"1F1F5-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1f1.png","sheet_x":37,"sheet_y":12,"short_name":"flag-pl","short_names":["flag-pl"],"text":null,"texts":null,"category":"Flags","sort_order":177,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"shirt":{"name":"T-Shirt","unified":"1F455","variations":[],"docomo":"E70E","au":"E5B6","softbank":"E006","google":"FE4CF","image":"1f455.png","sheet_x":15,"sheet_y":32,"short_name":"shirt","short_names":["shirt","tshirt"],"text":null,"texts":null,"category":"People","sort_order":177,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pt":{"name":"Regional Indicator Symbol Letters Pt","unified":"1F1F5-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1f9.png","sheet_x":37,"sheet_y":17,"short_name":"flag-pt","short_names":["flag-pt"],"text":null,"texts":null,"category":"Flags","sort_order":178,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"jeans":{"name":"Jeans","unified":"1F456","variations":[],"docomo":"E711","au":"EB77","softbank":null,"google":"FE4D0","image":"1f456.png","sheet_x":15,"sheet_y":33,"short_name":"jeans","short_names":["jeans"],"text":null,"texts":null,"category":"People","sort_order":178,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mag_right":{"name":"Right-Pointing Magnifying Glass","unified":"1F50E","variations":[],"docomo":"E6DC","au":"EB05","softbank":"E114","google":"FEB8D","image":"1f50e.png","sheet_x":22,"sheet_y":39,"short_name":"mag_right","short_names":["mag_right"],"text":null,"texts":null,"category":"Objects","sort_order":178,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_heading_up":{"name":"Arrow Pointing Rightwards Then Curving Upwards","unified":"2934","variations":["2934-FE0F"],"docomo":"E6F5","au":"EB2D","softbank":"E236","google":"FEAF4","image":"2934.png","sheet_x":4,"sheet_y":17,"short_name":"arrow_heading_up","short_names":["arrow_heading_up"],"text":null,"texts":null,"category":"Symbols","sort_order":178,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"necktie":{"name":"Necktie","unified":"1F454","variations":[],"docomo":null,"au":"EA93","softbank":"E302","google":"FE4D3","image":"1f454.png","sheet_x":15,"sheet_y":31,"short_name":"necktie","short_names":["necktie"],"text":null,"texts":null,"category":"People","sort_order":179,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pr":{"name":"Regional Indicator Symbol Letters Pr","unified":"1F1F5-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1f7.png","sheet_x":37,"sheet_y":15,"short_name":"flag-pr","short_names":["flag-pr"],"text":null,"texts":null,"category":"Flags","sort_order":179,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrow_heading_down":{"name":"Arrow Pointing Rightwards Then Curving Downwards","unified":"2935","variations":["2935-FE0F"],"docomo":"E700","au":"EB2E","softbank":"E238","google":"FEAF5","image":"2935.png","sheet_x":4,"sheet_y":18,"short_name":"arrow_heading_down","short_names":["arrow_heading_down"],"text":null,"texts":null,"category":"Symbols","sort_order":179,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dress":{"name":"Dress","unified":"1F457","variations":[],"docomo":null,"au":"EB6B","softbank":"E319","google":"FE4D5","image":"1f457.png","sheet_x":15,"sheet_y":34,"short_name":"dress","short_names":["dress"],"text":null,"texts":null,"category":"People","sort_order":180,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-qa":{"name":"Regional Indicator Symbol Letters Qa","unified":"1F1F6-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f6-1f1e6.png","sheet_x":37,"sheet_y":20,"short_name":"flag-qa","short_names":["flag-qa"],"text":null,"texts":null,"category":"Flags","sort_order":180,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hash":{"name":"Hash Key","unified":"0023-20E3","variations":["0023-FE0F-20E3"],"docomo":"E6E0","au":"EB84","softbank":"E210","google":"FE82C","image":"0023-20e3.png","sheet_x":32,"sheet_y":21,"short_name":"hash","short_names":["hash"],"text":null,"texts":null,"category":"Symbols","sort_order":180,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-re":{"name":"Regional Indicator Symbol Letters Re","unified":"1F1F7-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f7-1f1ea.png","sheet_x":37,"sheet_y":21,"short_name":"flag-re","short_names":["flag-re"],"text":null,"texts":null,"category":"Flags","sort_order":181,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"bikini":{"name":"Bikini","unified":"1F459","variations":[],"docomo":null,"au":"EAA4","softbank":"E322","google":"FE4DA","image":"1f459.png","sheet_x":15,"sheet_y":36,"short_name":"bikini","short_names":["bikini"],"text":null,"texts":null,"category":"People","sort_order":181,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"information_source":{"name":"Information Source","unified":"2139","variations":["2139-FE0F"],"docomo":null,"au":"E533","softbank":null,"google":"FEB47","image":"2139.png","sheet_x":0,"sheet_y":5,"short_name":"information_source","short_names":["information_source"],"text":null,"texts":null,"category":"Symbols","sort_order":181,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"kimono":{"name":"Kimono","unified":"1F458","variations":[],"docomo":null,"au":"EAA3","softbank":"E321","google":"FE4D9","image":"1f458.png","sheet_x":15,"sheet_y":35,"short_name":"kimono","short_names":["kimono"],"text":null,"texts":null,"category":"People","sort_order":182,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"abc":{"name":"Input Symbol for Latin Letters","unified":"1F524","variations":[],"docomo":null,"au":"EB55","softbank":null,"google":"FEB80","image":"1f524.png","sheet_x":23,"sheet_y":20,"short_name":"abc","short_names":["abc"],"text":null,"texts":null,"category":"Symbols","sort_order":182,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ro":{"name":"Regional Indicator Symbol Letters Ro","unified":"1F1F7-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f7-1f1f4.png","sheet_x":37,"sheet_y":22,"short_name":"flag-ro","short_names":["flag-ro"],"text":null,"texts":null,"category":"Flags","sort_order":182,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"lipstick":{"name":"Lipstick","unified":"1F484","variations":[],"docomo":"E710","au":"E509","softbank":"E31C","google":"FE195","image":"1f484.png","sheet_x":19,"sheet_y":5,"short_name":"lipstick","short_names":["lipstick"],"text":null,"texts":null,"category":"People","sort_order":183,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ru":{"name":"Regional Indicator Symbol Letters Ru","unified":"1F1F7-1F1FA","variations":[],"docomo":null,"au":"E5D6","softbank":"E512","google":"FE4EC","image":"1f1f7-1f1fa.png","sheet_x":37,"sheet_y":24,"short_name":"flag-ru","short_names":["flag-ru","ru"],"text":null,"texts":null,"category":"Flags","sort_order":183,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"abcd":{"name":"Input Symbol for Latin Small Letters","unified":"1F521","variations":[],"docomo":null,"au":"EAFE","softbank":null,"google":"FEB7D","image":"1f521.png","sheet_x":23,"sheet_y":17,"short_name":"abcd","short_names":["abcd"],"text":null,"texts":null,"category":"Symbols","sort_order":183,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"kiss":{"name":"Kiss Mark","unified":"1F48B","variations":[],"docomo":"E6F9","au":"E4EB","softbank":"E003","google":"FE823","image":"1f48b.png","sheet_x":19,"sheet_y":27,"short_name":"kiss","short_names":["kiss"],"text":null,"texts":[":*",":-*"],"category":"People","sort_order":184,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"capital_abcd":{"name":"Input Symbol for Latin Capital Letters","unified":"1F520","variations":[],"docomo":null,"au":"EAFD","softbank":null,"google":"FEB7C","image":"1f520.png","sheet_x":23,"sheet_y":16,"short_name":"capital_abcd","short_names":["capital_abcd"],"text":null,"texts":null,"category":"Symbols","sort_order":184,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-rw":{"name":"Regional Indicator Symbol Letters Rw","unified":"1F1F7-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f7-1f1fc.png","sheet_x":37,"sheet_y":25,"short_name":"flag-rw","short_names":["flag-rw"],"text":null,"texts":null,"category":"Flags","sort_order":184,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"footprints":{"name":"Footprints","unified":"1F463","variations":[],"docomo":"E698","au":"EB2A","softbank":"E536","google":"FE553","image":"1f463.png","sheet_x":16,"sheet_y":5,"short_name":"footprints","short_names":["footprints"],"text":null,"texts":null,"category":"People","sort_order":185,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bl":{"name":"Regional Indicator Symbol Letters Bl","unified":"1F1E7-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1f1.png","sheet_x":33,"sheet_y":18,"short_name":"flag-bl","short_names":["flag-bl"],"text":null,"texts":null,"category":"Flags","sort_order":185,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"symbols":{"name":"Input Symbol for Symbols","unified":"1F523","variations":[],"docomo":null,"au":"EB00","softbank":null,"google":"FEB7F","image":"1f523.png","sheet_x":23,"sheet_y":19,"short_name":"symbols","short_names":["symbols"],"text":null,"texts":null,"category":"Symbols","sort_order":185,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"high_heel":{"name":"High-Heeled Shoe","unified":"1F460","variations":[],"docomo":"E674","au":"E51A","softbank":"E13E","google":"FE4D6","image":"1f460.png","sheet_x":16,"sheet_y":2,"short_name":"high_heel","short_names":["high_heel"],"text":null,"texts":null,"category":"People","sort_order":186,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"musical_note":{"name":"Musical Note","unified":"1F3B5","variations":[],"docomo":"E6F6","au":"E5BE","softbank":"E03E","google":"FE813","image":"1f3b5.png","sheet_x":9,"sheet_y":36,"short_name":"musical_note","short_names":["musical_note"],"text":null,"texts":null,"category":"Symbols","sort_order":186,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sh":{"name":"Regional Indicator Symbol Letters Sh","unified":"1F1F8-1F1ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1ed.png","sheet_x":37,"sheet_y":32,"short_name":"flag-sh","short_names":["flag-sh"],"text":null,"texts":null,"category":"Flags","sort_order":186,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"flag-kn":{"name":"Regional Indicator Symbol Letters Kn","unified":"1F1F0-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f0-1f1f3.png","sheet_x":35,"sheet_y":35,"short_name":"flag-kn","short_names":["flag-kn"],"text":null,"texts":null,"category":"Flags","sort_order":187,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"notes":{"name":"Multiple Musical Notes","unified":"1F3B6","variations":[],"docomo":"E6FF","au":"E505","softbank":"E326","google":"FE814","image":"1f3b6.png","sheet_x":9,"sheet_y":37,"short_name":"notes","short_names":["notes"],"text":null,"texts":null,"category":"Symbols","sort_order":187,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sandal":{"name":"Womans Sandal","unified":"1F461","variations":[],"docomo":"E674","au":"E51A","softbank":"E31A","google":"FE4D7","image":"1f461.png","sheet_x":16,"sheet_y":3,"short_name":"sandal","short_names":["sandal"],"text":null,"texts":null,"category":"People","sort_order":187,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"boot":{"name":"Womans Boots","unified":"1F462","variations":[],"docomo":null,"au":"EA9F","softbank":"E31B","google":"FE4D8","image":"1f462.png","sheet_x":16,"sheet_y":4,"short_name":"boot","short_names":["boot"],"text":null,"texts":null,"category":"People","sort_order":188,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"wavy_dash":{"name":"Wavy Dash","unified":"3030","variations":["3030-FE0F"],"docomo":"E709","au":null,"softbank":null,"google":"FEB07","image":"3030.png","sheet_x":4,"sheet_y":26,"short_name":"wavy_dash","short_names":["wavy_dash"],"text":null,"texts":null,"category":"Symbols","sort_order":188,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-lc":{"name":"Regional Indicator Symbol Letters Lc","unified":"1F1F1-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1e8.png","sheet_x":36,"sheet_y":2,"short_name":"flag-lc","short_names":["flag-lc"],"text":null,"texts":null,"category":"Flags","sort_order":188,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-pm":{"name":"Regional Indicator Symbol Letters Pm","unified":"1F1F5-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f5-1f1f2.png","sheet_x":37,"sheet_y":13,"short_name":"flag-pm","short_names":["flag-pm"],"text":null,"texts":null,"category":"Flags","sort_order":189,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"mans_shoe":{"name":"Mans Shoe","unified":"1F45E","variations":[],"docomo":"E699","au":"E5B7","softbank":"E007","google":"FE4CC","image":"1f45e.png","sheet_x":16,"sheet_y":0,"short_name":"mans_shoe","short_names":["mans_shoe","shoe"],"text":null,"texts":null,"category":"People","sort_order":189,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"curly_loop":{"name":"Curly Loop","unified":"27B0","variations":[],"docomo":"E70A","au":"EB31","softbank":null,"google":"FEB08","image":"27b0.png","sheet_x":4,"sheet_y":15,"short_name":"curly_loop","short_names":["curly_loop"],"text":null,"texts":null,"category":"Symbols","sort_order":189,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-vc":{"name":"Regional Indicator Symbol Letters Vc","unified":"1F1FB-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fb-1f1e8.png","sheet_x":38,"sheet_y":30,"short_name":"flag-vc","short_names":["flag-vc"],"text":null,"texts":null,"category":"Flags","sort_order":190,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heavy_check_mark":{"name":"Heavy Check Mark","unified":"2714","variations":["2714-FE0F"],"docomo":null,"au":"E557","softbank":null,"google":"FEB49","image":"2714.png","sheet_x":3,"sheet_y":35,"short_name":"heavy_check_mark","short_names":["heavy_check_mark"],"text":null,"texts":null,"category":"Symbols","sort_order":190,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"athletic_shoe":{"name":"Athletic Shoe","unified":"1F45F","variations":[],"docomo":"E699","au":"EB2B","softbank":"E007","google":"FE4CD","image":"1f45f.png","sheet_x":16,"sheet_y":1,"short_name":"athletic_shoe","short_names":["athletic_shoe"],"text":null,"texts":null,"category":"People","sort_order":190,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"womans_hat":{"name":"Womans Hat","unified":"1F452","variations":[],"docomo":null,"au":"EA9E","softbank":"E318","google":"FE4D4","image":"1f452.png","sheet_x":15,"sheet_y":29,"short_name":"womans_hat","short_names":["womans_hat"],"text":null,"texts":null,"category":"People","sort_order":191,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ws":{"name":"Regional Indicator Symbol Letters Ws","unified":"1F1FC-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fc-1f1f8.png","sheet_x":38,"sheet_y":37,"short_name":"flag-ws","short_names":["flag-ws"],"text":null,"texts":null,"category":"Flags","sort_order":191,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"arrows_clockwise":{"name":"Clockwise Downwards and Upwards Open Circle Arrows","unified":"1F503","variations":[],"docomo":"E735","au":"EB0D","softbank":null,"google":"FEB91","image":"1f503.png","sheet_x":22,"sheet_y":28,"short_name":"arrows_clockwise","short_names":["arrows_clockwise"],"text":null,"texts":null,"category":"Symbols","sort_order":191,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heavy_plus_sign":{"name":"Heavy Plus Sign","unified":"2795","variations":[],"docomo":null,"au":"E53C","softbank":null,"google":"FEB51","image":"2795.png","sheet_x":4,"sheet_y":11,"short_name":"heavy_plus_sign","short_names":["heavy_plus_sign"],"text":null,"texts":null,"category":"Symbols","sort_order":192,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tophat":{"name":"Top Hat","unified":"1F3A9","variations":[],"docomo":"E67C","au":"EAF5","softbank":"E503","google":"FE805","image":"1f3a9.png","sheet_x":9,"sheet_y":24,"short_name":"tophat","short_names":["tophat"],"text":null,"texts":null,"category":"People","sort_order":192,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sm":{"name":"Regional Indicator Symbol Letters Sm","unified":"1F1F8-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1f2.png","sheet_x":37,"sheet_y":37,"short_name":"flag-sm","short_names":["flag-sm"],"text":null,"texts":null,"category":"Flags","sort_order":192,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"helmet_with_white_cross":{"name":"Helmet with White Cross","unified":"26D1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"26d1.png","sheet_x":2,"sheet_y":25,"short_name":"helmet_with_white_cross","short_names":["helmet_with_white_cross"],"text":null,"texts":null,"category":"People","sort_order":193,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heavy_minus_sign":{"name":"Heavy Minus Sign","unified":"2796","variations":[],"docomo":null,"au":"E53D","softbank":null,"google":"FEB52","image":"2796.png","sheet_x":4,"sheet_y":12,"short_name":"heavy_minus_sign","short_names":["heavy_minus_sign"],"text":null,"texts":null,"category":"Symbols","sort_order":193,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-st":{"name":"Regional Indicator Symbol Letters St","unified":"1F1F8-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1f9.png","sheet_x":38,"sheet_y":1,"short_name":"flag-st","short_names":["flag-st"],"text":null,"texts":null,"category":"Flags","sort_order":193,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sa":{"name":"Regional Indicator Symbol Letters Sa","unified":"1F1F8-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1e6.png","sheet_x":37,"sheet_y":26,"short_name":"flag-sa","short_names":["flag-sa"],"text":null,"texts":null,"category":"Flags","sort_order":194,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heavy_division_sign":{"name":"Heavy Division Sign","unified":"2797","variations":[],"docomo":null,"au":"E554","softbank":null,"google":"FEB54","image":"2797.png","sheet_x":4,"sheet_y":13,"short_name":"heavy_division_sign","short_names":["heavy_division_sign"],"text":null,"texts":null,"category":"Symbols","sort_order":194,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mortar_board":{"name":"Graduation Cap","unified":"1F393","variations":[],"docomo":null,"au":"EAE5","softbank":"E439","google":"FE51A","image":"1f393.png","sheet_x":9,"sheet_y":7,"short_name":"mortar_board","short_names":["mortar_board"],"text":null,"texts":null,"category":"People","sort_order":194,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sn":{"name":"Regional Indicator Symbol Letters Sn","unified":"1F1F8-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1f3.png","sheet_x":37,"sheet_y":38,"short_name":"flag-sn","short_names":["flag-sn"],"text":null,"texts":null,"category":"Flags","sort_order":195,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heavy_multiplication_x":{"name":"Heavy Multiplication X","unified":"2716","variations":["2716-FE0F"],"docomo":null,"au":"E54F","softbank":"E333","google":"FEB53","image":"2716.png","sheet_x":3,"sheet_y":36,"short_name":"heavy_multiplication_x","short_names":["heavy_multiplication_x"],"text":null,"texts":null,"category":"Symbols","sort_order":195,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"crown":{"name":"Crown","unified":"1F451","variations":[],"docomo":"E71A","au":"E5C9","softbank":"E10E","google":"FE4D1","image":"1f451.png","sheet_x":15,"sheet_y":28,"short_name":"crown","short_names":["crown"],"text":null,"texts":null,"category":"People","sort_order":195,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"school_satchel":{"name":"School Satchel","unified":"1F392","variations":[],"docomo":null,"au":"EAE6","softbank":"E43A","google":"FE51B","image":"1f392.png","sheet_x":9,"sheet_y":6,"short_name":"school_satchel","short_names":["school_satchel"],"text":null,"texts":null,"category":"People","sort_order":196,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-rs":{"name":"Regional Indicator Symbol Letters Rs","unified":"1F1F7-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f7-1f1f8.png","sheet_x":37,"sheet_y":23,"short_name":"flag-rs","short_names":["flag-rs"],"text":null,"texts":null,"category":"Flags","sort_order":196,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"heavy_dollar_sign":{"name":"Heavy Dollar Sign","unified":"1F4B2","variations":[],"docomo":"E715","au":"E579","softbank":"E12F","google":"FE4E0","image":"1f4b2.png","sheet_x":20,"sheet_y":30,"short_name":"heavy_dollar_sign","short_names":["heavy_dollar_sign"],"text":null,"texts":null,"category":"Symbols","sort_order":196,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sc":{"name":"Regional Indicator Symbol Letters Sc","unified":"1F1F8-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1e8.png","sheet_x":37,"sheet_y":28,"short_name":"flag-sc","short_names":["flag-sc"],"text":null,"texts":null,"category":"Flags","sort_order":197,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"currency_exchange":{"name":"Currency Exchange","unified":"1F4B1","variations":[],"docomo":null,"au":null,"softbank":"E149","google":"FE4DE","image":"1f4b1.png","sheet_x":20,"sheet_y":29,"short_name":"currency_exchange","short_names":["currency_exchange"],"text":null,"texts":null,"category":"Symbols","sort_order":197,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"pouch":{"name":"Pouch","unified":"1F45D","variations":[],"docomo":"E6AD","au":null,"softbank":null,"google":"FE4F1","image":"1f45d.png","sheet_x":15,"sheet_y":40,"short_name":"pouch","short_names":["pouch"],"text":null,"texts":null,"category":"People","sort_order":197,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"purse":{"name":"Purse","unified":"1F45B","variations":[],"docomo":"E70F","au":"E504","softbank":null,"google":"FE4DC","image":"1f45b.png","sheet_x":15,"sheet_y":38,"short_name":"purse","short_names":["purse"],"text":null,"texts":null,"category":"People","sort_order":198,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sl":{"name":"Regional Indicator Symbol Letters Sl","unified":"1F1F8-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1f1.png","sheet_x":37,"sheet_y":36,"short_name":"flag-sl","short_names":["flag-sl"],"text":null,"texts":null,"category":"Flags","sort_order":198,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"copyright":{"name":"Copyright Sign","unified":"00A9","variations":["00A9-FE0F"],"docomo":"E731","au":"E558","softbank":"E24E","google":"FEB29","image":"00a9.png","sheet_x":0,"sheet_y":0,"short_name":"copyright","short_names":["copyright"],"text":null,"texts":null,"category":"Symbols","sort_order":198,"has_img_apple":true,"has_img_google":true,"has_img_twitter":false,"has_img_emojione":true},"handbag":{"name":"Handbag","unified":"1F45C","variations":[],"docomo":"E682","au":"E49C","softbank":"E323","google":"FE4F0","image":"1f45c.png","sheet_x":15,"sheet_y":39,"short_name":"handbag","short_names":["handbag"],"text":null,"texts":null,"category":"People","sort_order":199,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sg":{"name":"Regional Indicator Symbol Letters Sg","unified":"1F1F8-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1ec.png","sheet_x":37,"sheet_y":31,"short_name":"flag-sg","short_names":["flag-sg"],"text":null,"texts":null,"category":"Flags","sort_order":199,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"registered":{"name":"Registered Sign","unified":"00AE","variations":["00AE-FE0F"],"docomo":"E736","au":"E559","softbank":"E24F","google":"FEB2D","image":"00ae.png","sheet_x":0,"sheet_y":1,"short_name":"registered","short_names":["registered"],"text":null,"texts":null,"category":"Symbols","sort_order":199,"has_img_apple":true,"has_img_google":true,"has_img_twitter":false,"has_img_emojione":true},"briefcase":{"name":"Briefcase","unified":"1F4BC","variations":[],"docomo":"E682","au":"E5CE","softbank":"E11E","google":"FE53B","image":"1f4bc.png","sheet_x":20,"sheet_y":40,"short_name":"briefcase","short_names":["briefcase"],"text":null,"texts":null,"category":"People","sort_order":200,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sx":{"name":"Regional Indicator Symbol Letters Sx","unified":"1F1F8-1F1FD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1fd.png","sheet_x":38,"sheet_y":3,"short_name":"flag-sx","short_names":["flag-sx"],"text":null,"texts":null,"category":"Flags","sort_order":200,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"tm":{"name":"Trade Mark Sign","unified":"2122","variations":["2122-FE0F"],"docomo":"E732","au":"E54E","softbank":"E537","google":"FEB2A","image":"2122.png","sheet_x":0,"sheet_y":4,"short_name":"tm","short_names":["tm"],"text":null,"texts":null,"category":"Symbols","sort_order":200,"has_img_apple":true,"has_img_google":true,"has_img_twitter":false,"has_img_emojione":true},"flag-sk":{"name":"Regional Indicator Symbol Letters Sk","unified":"1F1F8-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1f0.png","sheet_x":37,"sheet_y":35,"short_name":"flag-sk","short_names":["flag-sk"],"text":null,"texts":null,"category":"Flags","sort_order":201,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"eyeglasses":{"name":"Eyeglasses","unified":"1F453","variations":[],"docomo":"E69A","au":"E4FE","softbank":null,"google":"FE4CE","image":"1f453.png","sheet_x":15,"sheet_y":30,"short_name":"eyeglasses","short_names":["eyeglasses"],"text":null,"texts":null,"category":"People","sort_order":201,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"end":{"name":"End with Leftwards Arrow Above","unified":"1F51A","variations":[],"docomo":"E6B9","au":null,"softbank":null,"google":"FE01A","image":"1f51a.png","sheet_x":23,"sheet_y":10,"short_name":"end","short_names":["end"],"text":null,"texts":null,"category":"Symbols","sort_order":201,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"dark_sunglasses":{"name":"Dark Sunglasses","unified":"1F576","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f576.png","sheet_x":25,"sheet_y":4,"short_name":"dark_sunglasses","short_names":["dark_sunglasses"],"text":null,"texts":null,"category":"People","sort_order":202,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-si":{"name":"Regional Indicator Symbol Letters Si","unified":"1F1F8-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1ee.png","sheet_x":37,"sheet_y":33,"short_name":"flag-si","short_names":["flag-si"],"text":null,"texts":null,"category":"Flags","sort_order":202,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"back":{"name":"Back with Leftwards Arrow Above","unified":"1F519","variations":[],"docomo":null,"au":"EB06","softbank":"E235","google":"FEB8E","image":"1f519.png","sheet_x":23,"sheet_y":9,"short_name":"back","short_names":["back"],"text":null,"texts":null,"category":"Symbols","sort_order":202,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"ring":{"name":"Ring","unified":"1F48D","variations":[],"docomo":"E71B","au":"E514","softbank":"E034","google":"FE825","image":"1f48d.png","sheet_x":19,"sheet_y":29,"short_name":"ring","short_names":["ring"],"text":null,"texts":null,"category":"People","sort_order":203,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sb":{"name":"Regional Indicator Symbol Letters Sb","unified":"1F1F8-1F1E7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1e7.png","sheet_x":37,"sheet_y":27,"short_name":"flag-sb","short_names":["flag-sb"],"text":null,"texts":null,"category":"Flags","sort_order":203,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"on":{"name":"On with Exclamation Mark with Left Right Arrow Above","unified":"1F51B","variations":[],"docomo":"E6B8","au":null,"softbank":null,"google":"FE019","image":"1f51b.png","sheet_x":23,"sheet_y":11,"short_name":"on","short_names":["on"],"text":null,"texts":null,"category":"Symbols","sort_order":203,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"top":{"name":"Top with Upwards Arrow Above","unified":"1F51D","variations":[],"docomo":null,"au":null,"softbank":"E24C","google":"FEB42","image":"1f51d.png","sheet_x":23,"sheet_y":13,"short_name":"top","short_names":["top"],"text":null,"texts":null,"category":"Symbols","sort_order":204,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-so":{"name":"Regional Indicator Symbol Letters so","unified":"1F1F8-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1f4.png","sheet_x":37,"sheet_y":39,"short_name":"flag-so","short_names":["flag-so"],"text":null,"texts":null,"category":"Flags","sort_order":204,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"closed_umbrella":{"name":"Closed Umbrella","unified":"1F302","variations":[],"docomo":"E645","au":"EAE8","softbank":"E43C","google":"FE007","image":"1f302.png","sheet_x":5,"sheet_y":23,"short_name":"closed_umbrella","short_names":["closed_umbrella"],"text":null,"texts":null,"category":"People","sort_order":204,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-za":{"name":"Regional Indicator Symbol Letters Za","unified":"1F1FF-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ff-1f1e6.png","sheet_x":39,"sheet_y":0,"short_name":"flag-za","short_names":["flag-za"],"text":null,"texts":null,"category":"Flags","sort_order":205,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"soon":{"name":"Soon with Rightwards Arrow Above","unified":"1F51C","variations":[],"docomo":"E6B7","au":null,"softbank":null,"google":"FE018","image":"1f51c.png","sheet_x":23,"sheet_y":12,"short_name":"soon","short_names":["soon"],"text":null,"texts":null,"category":"Symbols","sort_order":205,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gs":{"name":"Regional Indicator Symbol Letters Gs","unified":"1F1EC-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ec-1f1f8.png","sheet_x":35,"sheet_y":4,"short_name":"flag-gs","short_names":["flag-gs"],"text":null,"texts":null,"category":"Flags","sort_order":206,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"ballot_box_with_check":{"name":"Ballot Box with Check","unified":"2611","variations":["2611-FE0F"],"docomo":null,"au":"EB02","softbank":null,"google":"FEB8B","image":"2611.png","sheet_x":1,"sheet_y":6,"short_name":"ballot_box_with_check","short_names":["ballot_box_with_check"],"text":null,"texts":null,"category":"Symbols","sort_order":206,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"radio_button":{"name":"Radio Button","unified":"1F518","variations":[],"docomo":null,"au":"EB04","softbank":null,"google":"FEB8C","image":"1f518.png","sheet_x":23,"sheet_y":8,"short_name":"radio_button","short_names":["radio_button"],"text":null,"texts":null,"category":"Symbols","sort_order":207,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-kr":{"name":"Regional Indicator Symbol Letters Kr","unified":"1F1F0-1F1F7","variations":[],"docomo":null,"au":"EB12","softbank":"E514","google":"FE4EE","image":"1f1f0-1f1f7.png","sheet_x":35,"sheet_y":37,"short_name":"flag-kr","short_names":["flag-kr","kr"],"text":null,"texts":null,"category":"Flags","sort_order":207,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ss":{"name":"Regional Indicator Symbol Letters Ss","unified":"1F1F8-1F1F8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1f8.png","sheet_x":38,"sheet_y":0,"short_name":"flag-ss","short_names":["flag-ss"],"text":null,"texts":null,"category":"Flags","sort_order":208,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"white_circle":{"name":"Medium White Circle","unified":"26AA","variations":["26AA-FE0F"],"docomo":"E69C","au":"E53A","softbank":"E219","google":"FEB65","image":"26aa.png","sheet_x":2,"sheet_y":14,"short_name":"white_circle","short_names":["white_circle"],"text":null,"texts":null,"category":"Symbols","sort_order":208,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-es":{"name":"Regional Indicator Symbol Letters Es","unified":"1F1EA-1F1F8","variations":[],"docomo":null,"au":"E5D5","softbank":"E511","google":"FE4EB","image":"1f1ea-1f1f8.png","sheet_x":34,"sheet_y":22,"short_name":"flag-es","short_names":["flag-es","es"],"text":null,"texts":null,"category":"Flags","sort_order":209,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_circle":{"name":"Medium Black Circle","unified":"26AB","variations":["26AB-FE0F"],"docomo":"E69C","au":"E53B","softbank":"E219","google":"FEB66","image":"26ab.png","sheet_x":2,"sheet_y":15,"short_name":"black_circle","short_names":["black_circle"],"text":null,"texts":null,"category":"Symbols","sort_order":209,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-lk":{"name":"Regional Indicator Symbol Letters Lk","unified":"1F1F1-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f1-1f1f0.png","sheet_x":36,"sheet_y":4,"short_name":"flag-lk","short_names":["flag-lk"],"text":null,"texts":null,"category":"Flags","sort_order":210,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"red_circle":{"name":"Large Red Circle","unified":"1F534","variations":[],"docomo":"E69C","au":"E54A","softbank":"E219","google":"FEB63","image":"1f534.png","sheet_x":23,"sheet_y":36,"short_name":"red_circle","short_names":["red_circle"],"text":null,"texts":null,"category":"Symbols","sort_order":210,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sd":{"name":"Regional Indicator Symbol Letters Sd","unified":"1F1F8-1F1E9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1e9.png","sheet_x":37,"sheet_y":29,"short_name":"flag-sd","short_names":["flag-sd"],"text":null,"texts":null,"category":"Flags","sort_order":211,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"large_blue_circle":{"name":"Large Blue Circle","unified":"1F535","variations":[],"docomo":"E69C","au":"E54B","softbank":"E21A","google":"FEB64","image":"1f535.png","sheet_x":23,"sheet_y":37,"short_name":"large_blue_circle","short_names":["large_blue_circle"],"text":null,"texts":null,"category":"Symbols","sort_order":211,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"small_orange_diamond":{"name":"Small Orange Diamond","unified":"1F538","variations":[],"docomo":null,"au":"E536","softbank":"E21B","google":"FEB75","image":"1f538.png","sheet_x":23,"sheet_y":40,"short_name":"small_orange_diamond","short_names":["small_orange_diamond"],"text":null,"texts":null,"category":"Symbols","sort_order":212,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sr":{"name":"Regional Indicator Symbol Letters Sr","unified":"1F1F8-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1f7.png","sheet_x":37,"sheet_y":40,"short_name":"flag-sr","short_names":["flag-sr"],"text":null,"texts":null,"category":"Flags","sort_order":212,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"small_blue_diamond":{"name":"Small Blue Diamond","unified":"1F539","variations":[],"docomo":null,"au":"E537","softbank":"E21B","google":"FEB76","image":"1f539.png","sheet_x":24,"sheet_y":0,"short_name":"small_blue_diamond","short_names":["small_blue_diamond"],"text":null,"texts":null,"category":"Symbols","sort_order":213,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sz":{"name":"Regional Indicator Symbol Letters Sz","unified":"1F1F8-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1ff.png","sheet_x":38,"sheet_y":5,"short_name":"flag-sz","short_names":["flag-sz"],"text":null,"texts":null,"category":"Flags","sort_order":213,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"large_orange_diamond":{"name":"Large Orange Diamond","unified":"1F536","variations":[],"docomo":null,"au":"E546","softbank":"E21B","google":"FEB73","image":"1f536.png","sheet_x":23,"sheet_y":38,"short_name":"large_orange_diamond","short_names":["large_orange_diamond"],"text":null,"texts":null,"category":"Symbols","sort_order":214,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-se":{"name":"Regional Indicator Symbol Letters Se","unified":"1F1F8-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1ea.png","sheet_x":37,"sheet_y":30,"short_name":"flag-se","short_names":["flag-se"],"text":null,"texts":null,"category":"Flags","sort_order":214,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ch":{"name":"Regional Indicator Symbol Letters Ch","unified":"1F1E8-1F1ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1ed.png","sheet_x":33,"sheet_y":35,"short_name":"flag-ch","short_names":["flag-ch"],"text":null,"texts":null,"category":"Flags","sort_order":215,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"large_blue_diamond":{"name":"Large Blue Diamond","unified":"1F537","variations":[],"docomo":null,"au":"E547","softbank":"E21B","google":"FEB74","image":"1f537.png","sheet_x":23,"sheet_y":39,"short_name":"large_blue_diamond","short_names":["large_blue_diamond"],"text":null,"texts":null,"category":"Symbols","sort_order":215,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sy":{"name":"Regional Indicator Symbol Letters Sy","unified":"1F1F8-1F1FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1fe.png","sheet_x":38,"sheet_y":4,"short_name":"flag-sy","short_names":["flag-sy"],"text":null,"texts":null,"category":"Flags","sort_order":216,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"small_red_triangle":{"name":"Up-Pointing Red Triangle","unified":"1F53A","variations":[],"docomo":null,"au":"E55A","softbank":null,"google":"FEB78","image":"1f53a.png","sheet_x":24,"sheet_y":1,"short_name":"small_red_triangle","short_names":["small_red_triangle"],"text":null,"texts":null,"category":"Symbols","sort_order":216,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tw":{"name":"Regional Indicator Symbol Letters Tw","unified":"1F1F9-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1fc.png","sheet_x":38,"sheet_y":21,"short_name":"flag-tw","short_names":["flag-tw"],"text":null,"texts":null,"category":"Flags","sort_order":217,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_small_square":{"name":"Black Small Square","unified":"25AA","variations":["25AA-FE0F"],"docomo":null,"au":"E532","softbank":"E21A","google":"FEB6E","image":"25aa.png","sheet_x":0,"sheet_y":33,"short_name":"black_small_square","short_names":["black_small_square"],"text":null,"texts":null,"category":"Symbols","sort_order":217,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"white_small_square":{"name":"White Small Square","unified":"25AB","variations":["25AB-FE0F"],"docomo":null,"au":"E531","softbank":"E21B","google":"FEB6D","image":"25ab.png","sheet_x":0,"sheet_y":34,"short_name":"white_small_square","short_names":["white_small_square"],"text":null,"texts":null,"category":"Symbols","sort_order":218,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tj":{"name":"Regional Indicator Symbol Letters Tj","unified":"1F1F9-1F1EF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1ef.png","sheet_x":38,"sheet_y":12,"short_name":"flag-tj","short_names":["flag-tj"],"text":null,"texts":null,"category":"Flags","sort_order":218,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_large_square":{"name":"Black Large Square","unified":"2B1B","variations":["2B1B-FE0F"],"docomo":null,"au":"E549","softbank":"E21A","google":"FEB6C","image":"2b1b.png","sheet_x":4,"sheet_y":22,"short_name":"black_large_square","short_names":["black_large_square"],"text":null,"texts":null,"category":"Symbols","sort_order":219,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tz":{"name":"Regional Indicator Symbol Letters Tz","unified":"1F1F9-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1ff.png","sheet_x":38,"sheet_y":22,"short_name":"flag-tz","short_names":["flag-tz"],"text":null,"texts":null,"category":"Flags","sort_order":219,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"white_large_square":{"name":"White Large Square","unified":"2B1C","variations":["2B1C-FE0F"],"docomo":null,"au":"E548","softbank":"E21B","google":"FEB6B","image":"2b1c.png","sheet_x":4,"sheet_y":23,"short_name":"white_large_square","short_names":["white_large_square"],"text":null,"texts":null,"category":"Symbols","sort_order":220,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-th":{"name":"Regional Indicator Symbol Letters Th","unified":"1F1F9-1F1ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1ed.png","sheet_x":38,"sheet_y":11,"short_name":"flag-th","short_names":["flag-th"],"text":null,"texts":null,"category":"Flags","sort_order":220,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tl":{"name":"Regional Indicator Symbol Letters Tl","unified":"1F1F9-1F1F1","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1f1.png","sheet_x":38,"sheet_y":14,"short_name":"flag-tl","short_names":["flag-tl"],"text":null,"texts":null,"category":"Flags","sort_order":221,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"small_red_triangle_down":{"name":"Down-Pointing Red Triangle","unified":"1F53B","variations":[],"docomo":null,"au":"E55B","softbank":null,"google":"FEB79","image":"1f53b.png","sheet_x":24,"sheet_y":2,"short_name":"small_red_triangle_down","short_names":["small_red_triangle_down"],"text":null,"texts":null,"category":"Symbols","sort_order":221,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tg":{"name":"Regional Indicator Symbol Letters Tg","unified":"1F1F9-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1ec.png","sheet_x":38,"sheet_y":10,"short_name":"flag-tg","short_names":["flag-tg"],"text":null,"texts":null,"category":"Flags","sort_order":222,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_medium_square":{"name":"Black Medium Square","unified":"25FC","variations":["25FC-FE0F"],"docomo":null,"au":"E539","softbank":"E21A","google":"FEB72","image":"25fc.png","sheet_x":0,"sheet_y":38,"short_name":"black_medium_square","short_names":["black_medium_square"],"text":null,"texts":null,"category":"Symbols","sort_order":222,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tk":{"name":"Regional Indicator Symbol Letters Tk","unified":"1F1F9-1F1F0","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1f0.png","sheet_x":38,"sheet_y":13,"short_name":"flag-tk","short_names":["flag-tk"],"text":null,"texts":null,"category":"Flags","sort_order":223,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"white_medium_square":{"name":"White Medium Square","unified":"25FB","variations":["25FB-FE0F"],"docomo":null,"au":"E538","softbank":"E21B","google":"FEB71","image":"25fb.png","sheet_x":0,"sheet_y":37,"short_name":"white_medium_square","short_names":["white_medium_square"],"text":null,"texts":null,"category":"Symbols","sort_order":223,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-to":{"name":"Regional Indicator Symbol Letters to","unified":"1F1F9-1F1F4","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1f4.png","sheet_x":38,"sheet_y":17,"short_name":"flag-to","short_names":["flag-to"],"text":null,"texts":null,"category":"Flags","sort_order":224,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_medium_small_square":{"name":"Black Medium Small Square","unified":"25FE","variations":["25FE-FE0F"],"docomo":null,"au":"E535","softbank":"E21A","google":"FEB70","image":"25fe.png","sheet_x":0,"sheet_y":40,"short_name":"black_medium_small_square","short_names":["black_medium_small_square"],"text":null,"texts":null,"category":"Symbols","sort_order":224,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"white_medium_small_square":{"name":"White Medium Small Square","unified":"25FD","variations":["25FD-FE0F"],"docomo":null,"au":"E534","softbank":"E21B","google":"FEB6F","image":"25fd.png","sheet_x":0,"sheet_y":39,"short_name":"white_medium_small_square","short_names":["white_medium_small_square"],"text":null,"texts":null,"category":"Symbols","sort_order":225,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tt":{"name":"Regional Indicator Symbol Letters Tt","unified":"1F1F9-1F1F9","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1f9.png","sheet_x":38,"sheet_y":19,"short_name":"flag-tt","short_names":["flag-tt"],"text":null,"texts":null,"category":"Flags","sort_order":225,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_square_button":{"name":"Black Square Button","unified":"1F532","variations":[],"docomo":"E69C","au":"E54B","softbank":"E21A","google":"FEB64","image":"1f532.png","sheet_x":23,"sheet_y":34,"short_name":"black_square_button","short_names":["black_square_button"],"text":null,"texts":null,"category":"Symbols","sort_order":226,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tn":{"name":"Regional Indicator Symbol Letters Tn","unified":"1F1F9-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1f3.png","sheet_x":38,"sheet_y":16,"short_name":"flag-tn","short_names":["flag-tn"],"text":null,"texts":null,"category":"Flags","sort_order":226,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tr":{"name":"Regional Indicator Symbol Letters Tr","unified":"1F1F9-1F1F7","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1f7.png","sheet_x":38,"sheet_y":18,"short_name":"flag-tr","short_names":["flag-tr"],"text":null,"texts":null,"category":"Flags","sort_order":227,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"white_square_button":{"name":"White Square Button","unified":"1F533","variations":[],"docomo":"E69C","au":"E54B","softbank":"E21B","google":"FEB67","image":"1f533.png","sheet_x":23,"sheet_y":35,"short_name":"white_square_button","short_names":["white_square_button"],"text":null,"texts":null,"category":"Symbols","sort_order":227,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tm":{"name":"Regional Indicator Symbol Letters Tm","unified":"1F1F9-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1f2.png","sheet_x":38,"sheet_y":15,"short_name":"flag-tm","short_names":["flag-tm"],"text":null,"texts":null,"category":"Flags","sort_order":228,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"speaker":{"name":"Speaker","unified":"1F508","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f508.png","sheet_x":22,"sheet_y":33,"short_name":"speaker","short_names":["speaker"],"text":null,"texts":null,"category":"Symbols","sort_order":228,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tc":{"name":"Regional Indicator Symbol Letters Tc","unified":"1F1F9-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1e8.png","sheet_x":38,"sheet_y":7,"short_name":"flag-tc","short_names":["flag-tc"],"text":null,"texts":null,"category":"Flags","sort_order":229,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"sound":{"name":"Speaker with One Sound Wave","unified":"1F509","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f509.png","sheet_x":22,"sheet_y":34,"short_name":"sound","short_names":["sound"],"text":null,"texts":null,"category":"Symbols","sort_order":229,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-tv":{"name":"Regional Indicator Symbol Letters Tv","unified":"1F1F9-1F1FB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1fb.png","sheet_x":38,"sheet_y":20,"short_name":"flag-tv","short_names":["flag-tv"],"text":null,"texts":null,"category":"Flags","sort_order":230,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"loud_sound":{"name":"Speaker with Three Sound Waves","unified":"1F50A","variations":[],"docomo":null,"au":"E511","softbank":"E141","google":"FE821","image":"1f50a.png","sheet_x":22,"sheet_y":35,"short_name":"loud_sound","short_names":["loud_sound"],"text":null,"texts":null,"category":"Symbols","sort_order":230,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mute":{"name":"Speaker with Cancellation Stroke","unified":"1F507","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f507.png","sheet_x":22,"sheet_y":32,"short_name":"mute","short_names":["mute"],"text":null,"texts":null,"category":"Symbols","sort_order":231,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ug":{"name":"Regional Indicator Symbol Letters Ug","unified":"1F1FA-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fa-1f1ec.png","sheet_x":38,"sheet_y":24,"short_name":"flag-ug","short_names":["flag-ug"],"text":null,"texts":null,"category":"Flags","sort_order":231,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ua":{"name":"Regional Indicator Symbol Letters Ua","unified":"1F1FA-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fa-1f1e6.png","sheet_x":38,"sheet_y":23,"short_name":"flag-ua","short_names":["flag-ua"],"text":null,"texts":null,"category":"Flags","sort_order":232,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mega":{"name":"Cheering Megaphone","unified":"1F4E3","variations":[],"docomo":null,"au":"E511","softbank":"E317","google":"FE530","image":"1f4e3.png","sheet_x":21,"sheet_y":38,"short_name":"mega","short_names":["mega"],"text":null,"texts":null,"category":"Symbols","sort_order":232,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ae":{"name":"Regional Indicator Symbol Letters Ae","unified":"1F1E6-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1ea.png","sheet_x":32,"sheet_y":35,"short_name":"flag-ae","short_names":["flag-ae"],"text":null,"texts":null,"category":"Flags","sort_order":233,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"loudspeaker":{"name":"Public Address Loudspeaker","unified":"1F4E2","variations":[],"docomo":null,"au":"E511","softbank":"E142","google":"FE52F","image":"1f4e2.png","sheet_x":21,"sheet_y":37,"short_name":"loudspeaker","short_names":["loudspeaker"],"text":null,"texts":null,"category":"Symbols","sort_order":233,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"bell":{"name":"Bell","unified":"1F514","variations":[],"docomo":"E713","au":"E512","softbank":"E325","google":"FE4F2","image":"1f514.png","sheet_x":23,"sheet_y":4,"short_name":"bell","short_names":["bell"],"text":null,"texts":null,"category":"Symbols","sort_order":234,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-gb":{"name":"Regional Indicator Symbol Letters Gb","unified":"1F1EC-1F1E7","variations":[],"docomo":null,"au":"EB10","softbank":"E510","google":"FE4EA","image":"1f1ec-1f1e7.png","sheet_x":34,"sheet_y":32,"short_name":"flag-gb","short_names":["flag-gb","gb","uk"],"text":null,"texts":null,"category":"Flags","sort_order":234,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-us":{"name":"Regional Indicator Symbol Letters Us","unified":"1F1FA-1F1F8","variations":[],"docomo":null,"au":"E573","softbank":"E50C","google":"FE4E6","image":"1f1fa-1f1f8.png","sheet_x":38,"sheet_y":26,"short_name":"flag-us","short_names":["flag-us","us"],"text":null,"texts":null,"category":"Flags","sort_order":235,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"no_bell":{"name":"Bell with Cancellation Stroke","unified":"1F515","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f515.png","sheet_x":23,"sheet_y":5,"short_name":"no_bell","short_names":["no_bell"],"text":null,"texts":null,"category":"Symbols","sort_order":235,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-vi":{"name":"Regional Indicator Symbol Letters Vi","unified":"1F1FB-1F1EE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fb-1f1ee.png","sheet_x":38,"sheet_y":33,"short_name":"flag-vi","short_names":["flag-vi"],"text":null,"texts":null,"category":"Flags","sort_order":236,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"black_joker":{"name":"Playing Card Black Joker","unified":"1F0CF","variations":[],"docomo":null,"au":"EB6F","softbank":null,"google":"FE812","image":"1f0cf.png","sheet_x":4,"sheet_y":31,"short_name":"black_joker","short_names":["black_joker"],"text":null,"texts":null,"category":"Symbols","sort_order":236,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"mahjong":{"name":"Mahjong Tile Red Dragon","unified":"1F004","variations":["1F004-FE0F"],"docomo":null,"au":"E5D1","softbank":"E12D","google":"FE80B","image":"1f004.png","sheet_x":4,"sheet_y":30,"short_name":"mahjong","short_names":["mahjong"],"text":null,"texts":null,"category":"Symbols","sort_order":237,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-uy":{"name":"Regional Indicator Symbol Letters Uy","unified":"1F1FA-1F1FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fa-1f1fe.png","sheet_x":38,"sheet_y":27,"short_name":"flag-uy","short_names":["flag-uy"],"text":null,"texts":null,"category":"Flags","sort_order":237,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"spades":{"name":"Black Spade Suit","unified":"2660","variations":["2660-FE0F"],"docomo":"E68E","au":"E5A1","softbank":"E20E","google":"FEB1B","image":"2660.png","sheet_x":1,"sheet_y":38,"short_name":"spades","short_names":["spades"],"text":null,"texts":null,"category":"Symbols","sort_order":238,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-uz":{"name":"Regional Indicator Symbol Letters Uz","unified":"1F1FA-1F1FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fa-1f1ff.png","sheet_x":38,"sheet_y":28,"short_name":"flag-uz","short_names":["flag-uz"],"text":null,"texts":null,"category":"Flags","sort_order":238,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clubs":{"name":"Black Club Suit","unified":"2663","variations":["2663-FE0F"],"docomo":"E690","au":"E5A3","softbank":"E20F","google":"FEB1D","image":"2663.png","sheet_x":1,"sheet_y":39,"short_name":"clubs","short_names":["clubs"],"text":null,"texts":null,"category":"Symbols","sort_order":239,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-vu":{"name":"Regional Indicator Symbol Letters Vu","unified":"1F1FB-1F1FA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fb-1f1fa.png","sheet_x":38,"sheet_y":35,"short_name":"flag-vu","short_names":["flag-vu"],"text":null,"texts":null,"category":"Flags","sort_order":239,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"hearts":{"name":"Black Heart Suit","unified":"2665","variations":["2665-FE0F"],"docomo":"E68D","au":"EAA5","softbank":"E20C","google":"FEB1A","image":"2665.png","sheet_x":1,"sheet_y":40,"short_name":"hearts","short_names":["hearts"],"text":null,"texts":null,"category":"Symbols","sort_order":240,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-va":{"name":"Regional Indicator Symbol Letters Va","unified":"1F1FB-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fb-1f1e6.png","sheet_x":38,"sheet_y":29,"short_name":"flag-va","short_names":["flag-va"],"text":null,"texts":null,"category":"Flags","sort_order":240,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"diamonds":{"name":"Black Diamond Suit","unified":"2666","variations":["2666-FE0F"],"docomo":"E68F","au":"E5A2","softbank":"E20D","google":"FEB1C","image":"2666.png","sheet_x":2,"sheet_y":0,"short_name":"diamonds","short_names":["diamonds"],"text":null,"texts":null,"category":"Symbols","sort_order":241,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ve":{"name":"Regional Indicator Symbol Letters Ve","unified":"1F1FB-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fb-1f1ea.png","sheet_x":38,"sheet_y":31,"short_name":"flag-ve","short_names":["flag-ve"],"text":null,"texts":null,"category":"Flags","sort_order":241,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-vn":{"name":"Regional Indicator Symbol Letters Vn","unified":"1F1FB-1F1F3","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fb-1f1f3.png","sheet_x":38,"sheet_y":34,"short_name":"flag-vn","short_names":["flag-vn"],"text":null,"texts":null,"category":"Flags","sort_order":242,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flower_playing_cards":{"name":"Flower Playing Cards","unified":"1F3B4","variations":[],"docomo":null,"au":"EB6E","softbank":null,"google":"FE811","image":"1f3b4.png","sheet_x":9,"sheet_y":35,"short_name":"flower_playing_cards","short_names":["flower_playing_cards"],"text":null,"texts":null,"category":"Symbols","sort_order":242,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"thought_balloon":{"name":"Thought Balloon","unified":"1F4AD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f4ad.png","sheet_x":20,"sheet_y":25,"short_name":"thought_balloon","short_names":["thought_balloon"],"text":null,"texts":null,"category":"Symbols","sort_order":243,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-wf":{"name":"Regional Indicator Symbol Letters Wf","unified":"1F1FC-1F1EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fc-1f1eb.png","sheet_x":38,"sheet_y":36,"short_name":"flag-wf","short_names":["flag-wf"],"text":null,"texts":null,"category":"Flags","sort_order":243,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"flag-eh":{"name":"Regional Indicator Symbol Letters Eh","unified":"1F1EA-1F1ED","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ea-1f1ed.png","sheet_x":34,"sheet_y":20,"short_name":"flag-eh","short_names":["flag-eh"],"text":null,"texts":null,"category":"Flags","sort_order":244,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"right_anger_bubble":{"name":"Right Anger Bubble","unified":"1F5EF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5ef.png","sheet_x":26,"sheet_y":7,"short_name":"right_anger_bubble","short_names":["right_anger_bubble"],"text":null,"texts":null,"category":"Symbols","sort_order":244,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"speech_balloon":{"name":"Speech Balloon","unified":"1F4AC","variations":[],"docomo":null,"au":"E4FD","softbank":null,"google":"FE532","image":"1f4ac.png","sheet_x":20,"sheet_y":24,"short_name":"speech_balloon","short_names":["speech_balloon"],"text":null,"texts":null,"category":"Symbols","sort_order":245,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ye":{"name":"Regional Indicator Symbol Letters Ye","unified":"1F1FE-1F1EA","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fe-1f1ea.png","sheet_x":38,"sheet_y":39,"short_name":"flag-ye","short_names":["flag-ye"],"text":null,"texts":null,"category":"Flags","sort_order":245,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"left_speech_bubble":{"name":"Left Speech Bubble","unified":"1F5E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f5e8.png","sheet_x":26,"sheet_y":6,"short_name":"left_speech_bubble","short_names":["left_speech_bubble"],"text":null,"texts":null,"category":"Symbols","sort_order":246,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":false},"flag-zm":{"name":"Regional Indicator Symbol Letters Zm","unified":"1F1FF-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ff-1f1f2.png","sheet_x":39,"sheet_y":1,"short_name":"flag-zm","short_names":["flag-zm"],"text":null,"texts":null,"category":"Flags","sort_order":246,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock1":{"name":"Clock Face One Oclock","unified":"1F550","variations":[],"docomo":"E6BA","au":"E594","softbank":"E024","google":"FE01E","image":"1f550.png","sheet_x":24,"sheet_y":11,"short_name":"clock1","short_names":["clock1"],"text":null,"texts":null,"category":"Symbols","sort_order":247,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-zw":{"name":"Regional Indicator Symbol Letters Zw","unified":"1F1FF-1F1FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ff-1f1fc.png","sheet_x":39,"sheet_y":2,"short_name":"flag-zw","short_names":["flag-zw"],"text":null,"texts":null,"category":"Flags","sort_order":247,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ac":{"name":"Regional Indicator Symbol Letters Ac","unified":"1F1E6-1F1E8","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e6-1f1e8.png","sheet_x":32,"sheet_y":33,"short_name":"flag-ac","short_names":["flag-ac"],"text":null,"texts":null,"category":"Flags","sort_order":248,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"clock2":{"name":"Clock Face Two Oclock","unified":"1F551","variations":[],"docomo":"E6BA","au":"E594","softbank":"E025","google":"FE01F","image":"1f551.png","sheet_x":24,"sheet_y":12,"short_name":"clock2","short_names":["clock2"],"text":null,"texts":null,"category":"Symbols","sort_order":248,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-bv":{"name":"Regional Indicator Symbol Letters Bv","unified":"1F1E7-1F1FB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e7-1f1fb.png","sheet_x":33,"sheet_y":26,"short_name":"flag-bv","short_names":["flag-bv"],"text":null,"texts":null,"category":"Flags","sort_order":249,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"clock3":{"name":"Clock Face Three Oclock","unified":"1F552","variations":[],"docomo":"E6BA","au":"E594","softbank":"E026","google":"FE020","image":"1f552.png","sheet_x":24,"sheet_y":13,"short_name":"clock3","short_names":["clock3"],"text":null,"texts":null,"category":"Symbols","sort_order":249,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-cp":{"name":"Regional Indicator Symbol Letters Cp","unified":"1F1E8-1F1F5","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e8-1f1f5.png","sheet_x":34,"sheet_y":1,"short_name":"flag-cp","short_names":["flag-cp"],"text":null,"texts":null,"category":"Flags","sort_order":250,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"clock4":{"name":"Clock Face Four Oclock","unified":"1F553","variations":[],"docomo":"E6BA","au":"E594","softbank":"E027","google":"FE021","image":"1f553.png","sheet_x":24,"sheet_y":14,"short_name":"clock4","short_names":["clock4"],"text":null,"texts":null,"category":"Symbols","sort_order":250,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock5":{"name":"Clock Face Five Oclock","unified":"1F554","variations":[],"docomo":"E6BA","au":"E594","softbank":"E028","google":"FE022","image":"1f554.png","sheet_x":24,"sheet_y":15,"short_name":"clock5","short_names":["clock5"],"text":null,"texts":null,"category":"Symbols","sort_order":251,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-dg":{"name":"Regional Indicator Symbol Letters Dg","unified":"1F1E9-1F1EC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1e9-1f1ec.png","sheet_x":34,"sheet_y":10,"short_name":"flag-dg","short_names":["flag-dg"],"text":null,"texts":null,"category":"Flags","sort_order":251,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"clock6":{"name":"Clock Face Six Oclock","unified":"1F555","variations":[],"docomo":"E6BA","au":"E594","softbank":"E029","google":"FE023","image":"1f555.png","sheet_x":24,"sheet_y":16,"short_name":"clock6","short_names":["clock6"],"text":null,"texts":null,"category":"Symbols","sort_order":252,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-ea":{"name":"Regional Indicator Symbol Letters Ea","unified":"1F1EA-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ea-1f1e6.png","sheet_x":34,"sheet_y":16,"short_name":"flag-ea","short_names":["flag-ea"],"text":null,"texts":null,"category":"Flags","sort_order":252,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"flag-hm":{"name":"Regional Indicator Symbol Letters Hm","unified":"1F1ED-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1ed-1f1f2.png","sheet_x":35,"sheet_y":10,"short_name":"flag-hm","short_names":["flag-hm"],"text":null,"texts":null,"category":"Flags","sort_order":253,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"clock7":{"name":"Clock Face Seven Oclock","unified":"1F556","variations":[],"docomo":"E6BA","au":"E594","softbank":"E02A","google":"FE024","image":"1f556.png","sheet_x":24,"sheet_y":17,"short_name":"clock7","short_names":["clock7"],"text":null,"texts":null,"category":"Symbols","sort_order":253,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-mf":{"name":"Regional Indicator Symbol Letters Mf","unified":"1F1F2-1F1EB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f2-1f1eb.png","sheet_x":36,"sheet_y":15,"short_name":"flag-mf","short_names":["flag-mf"],"text":null,"texts":null,"category":"Flags","sort_order":254,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"clock8":{"name":"Clock Face Eight Oclock","unified":"1F557","variations":[],"docomo":"E6BA","au":"E594","softbank":"E02B","google":"FE025","image":"1f557.png","sheet_x":24,"sheet_y":18,"short_name":"clock8","short_names":["clock8"],"text":null,"texts":null,"category":"Symbols","sort_order":254,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock9":{"name":"Clock Face Nine Oclock","unified":"1F558","variations":[],"docomo":"E6BA","au":"E594","softbank":"E02C","google":"FE026","image":"1f558.png","sheet_x":24,"sheet_y":19,"short_name":"clock9","short_names":["clock9"],"text":null,"texts":null,"category":"Symbols","sort_order":255,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-sj":{"name":"Regional Indicator Symbol Letters Sj","unified":"1F1F8-1F1EF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f8-1f1ef.png","sheet_x":37,"sheet_y":34,"short_name":"flag-sj","short_names":["flag-sj"],"text":null,"texts":null,"category":"Flags","sort_order":255,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"flag-ta":{"name":"Regional Indicator Symbol Letters Ta","unified":"1F1F9-1F1E6","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1f9-1f1e6.png","sheet_x":38,"sheet_y":6,"short_name":"flag-ta","short_names":["flag-ta"],"text":null,"texts":null,"category":"Flags","sort_order":256,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"clock10":{"name":"Clock Face Ten Oclock","unified":"1F559","variations":[],"docomo":"E6BA","au":"E594","softbank":"E02D","google":"FE027","image":"1f559.png","sheet_x":24,"sheet_y":20,"short_name":"clock10","short_names":["clock10"],"text":null,"texts":null,"category":"Symbols","sort_order":256,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"flag-um":{"name":"Regional Indicator Symbol Letters Um","unified":"1F1FA-1F1F2","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f1fa-1f1f2.png","sheet_x":38,"sheet_y":25,"short_name":"flag-um","short_names":["flag-um"],"text":null,"texts":null,"category":"Flags","sort_order":257,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"clock11":{"name":"Clock Face Eleven Oclock","unified":"1F55A","variations":[],"docomo":"E6BA","au":"E594","softbank":"E02E","google":"FE028","image":"1f55a.png","sheet_x":24,"sheet_y":21,"short_name":"clock11","short_names":["clock11"],"text":null,"texts":null,"category":"Symbols","sort_order":257,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock12":{"name":"Clock Face Twelve Oclock","unified":"1F55B","variations":[],"docomo":"E6BA","au":"E594","softbank":"E02F","google":"FE029","image":"1f55b.png","sheet_x":24,"sheet_y":22,"short_name":"clock12","short_names":["clock12"],"text":null,"texts":null,"category":"Symbols","sort_order":258,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock130":{"name":"Clock Face One-Thirty","unified":"1F55C","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f55c.png","sheet_x":24,"sheet_y":23,"short_name":"clock130","short_names":["clock130"],"text":null,"texts":null,"category":"Symbols","sort_order":259,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock230":{"name":"Clock Face Two-Thirty","unified":"1F55D","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f55d.png","sheet_x":24,"sheet_y":24,"short_name":"clock230","short_names":["clock230"],"text":null,"texts":null,"category":"Symbols","sort_order":260,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock330":{"name":"Clock Face Three-Thirty","unified":"1F55E","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f55e.png","sheet_x":24,"sheet_y":25,"short_name":"clock330","short_names":["clock330"],"text":null,"texts":null,"category":"Symbols","sort_order":261,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock430":{"name":"Clock Face Four-Thirty","unified":"1F55F","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f55f.png","sheet_x":24,"sheet_y":26,"short_name":"clock430","short_names":["clock430"],"text":null,"texts":null,"category":"Symbols","sort_order":262,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock530":{"name":"Clock Face Five-Thirty","unified":"1F560","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f560.png","sheet_x":24,"sheet_y":27,"short_name":"clock530","short_names":["clock530"],"text":null,"texts":null,"category":"Symbols","sort_order":263,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock630":{"name":"Clock Face Six-Thirty","unified":"1F561","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f561.png","sheet_x":24,"sheet_y":28,"short_name":"clock630","short_names":["clock630"],"text":null,"texts":null,"category":"Symbols","sort_order":264,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock730":{"name":"Clock Face Seven-Thirty","unified":"1F562","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f562.png","sheet_x":24,"sheet_y":29,"short_name":"clock730","short_names":["clock730"],"text":null,"texts":null,"category":"Symbols","sort_order":265,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock830":{"name":"Clock Face Eight-Thirty","unified":"1F563","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f563.png","sheet_x":24,"sheet_y":30,"short_name":"clock830","short_names":["clock830"],"text":null,"texts":null,"category":"Symbols","sort_order":266,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock930":{"name":"Clock Face Nine-Thirty","unified":"1F564","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f564.png","sheet_x":24,"sheet_y":31,"short_name":"clock930","short_names":["clock930"],"text":null,"texts":null,"category":"Symbols","sort_order":267,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock1030":{"name":"Clock Face Ten-Thirty","unified":"1F565","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f565.png","sheet_x":24,"sheet_y":32,"short_name":"clock1030","short_names":["clock1030"],"text":null,"texts":null,"category":"Symbols","sort_order":268,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock1130":{"name":"Clock Face Eleven-Thirty","unified":"1F566","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f566.png","sheet_x":24,"sheet_y":33,"short_name":"clock1130","short_names":["clock1130"],"text":null,"texts":null,"category":"Symbols","sort_order":269,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true},"clock1230":{"name":"Clock Face Twelve-Thirty","unified":"1F567","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f567.png","sheet_x":24,"sheet_y":34,"short_name":"clock1230","short_names":["clock1230"],"text":null,"texts":null,"category":"Symbols","sort_order":270,"has_img_apple":true,"has_img_google":true,"has_img_twitter":true,"has_img_emojione":true}},"skins":{"skin-tone-2":{"name":"Emoji Modifier Fitzpatrick Type-1-2","unified":"1F3FB","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3fb.png","sheet_x":12,"sheet_y":0,"short_name":"skin-tone-2","short_names":["skin-tone-2"],"text":null,"texts":null,"category":"Skin Tones","sort_order":1,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"skin-tone-3":{"name":"Emoji Modifier Fitzpatrick Type-3","unified":"1F3FC","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3fc.png","sheet_x":12,"sheet_y":1,"short_name":"skin-tone-3","short_names":["skin-tone-3"],"text":null,"texts":null,"category":"Skin Tones","sort_order":2,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"skin-tone-4":{"name":"Emoji Modifier Fitzpatrick Type-4","unified":"1F3FD","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3fd.png","sheet_x":12,"sheet_y":2,"short_name":"skin-tone-4","short_names":["skin-tone-4"],"text":null,"texts":null,"category":"Skin Tones","sort_order":3,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"skin-tone-5":{"name":"Emoji Modifier Fitzpatrick Type-5","unified":"1F3FE","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3fe.png","sheet_x":12,"sheet_y":3,"short_name":"skin-tone-5","short_names":["skin-tone-5"],"text":null,"texts":null,"category":"Skin Tones","sort_order":4,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true},"skin-tone-6":{"name":"Emoji Modifier Fitzpatrick Type-6","unified":"1F3FF","variations":[],"docomo":null,"au":null,"softbank":null,"google":null,"image":"1f3ff.png","sheet_x":12,"sheet_y":4,"short_name":"skin-tone-6","short_names":["skin-tone-6"],"text":null,"texts":null,"category":"Skin Tones","sort_order":5,"has_img_apple":true,"has_img_google":false,"has_img_twitter":true,"has_img_emojione":true}}};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(19);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _data = __webpack_require__(17);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _ = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DEFAULT_CATEGORIES = [{ name: 'Recent', emojis: null }].concat(_data2.default.categories);
	
	var Picker = function (_React$Component) {
	  _inherits(Picker, _React$Component);
	
	  function Picker(props) {
	    _classCallCheck(this, Picker);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Picker).call(this, props));
	
	    _this.testStickyPosition();
	
	    _this.state = {
	      categories: DEFAULT_CATEGORIES,
	      skin: props.skin
	    };
	    return _this;
	  }
	
	  _createClass(Picker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      this.setState({ skin: props.skin });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.handleScroll();
	    }
	  }, {
	    key: 'testStickyPosition',
	    value: function testStickyPosition() {
	      var stickyTestElement = document.createElement('div');
	      var _arr = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var prefix = _arr[_i];
	        stickyTestElement.style.position = prefix + 'sticky';
	      }
	
	      this.hasStickyPosition = !!stickyTestElement.style.position.length;
	    }
	  }, {
	    key: 'handleEmojiOver',
	    value: function handleEmojiOver(emoji) {
	      var preview = this.refs.preview;
	
	      preview.setState({ emoji: emoji });
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'handleEmojiLeave',
	    value: function handleEmojiLeave(emoji) {
	      var _this2 = this;
	
	      this.leaveTimeout = setTimeout(function () {
	        var preview = _this2.refs.preview;
	
	        preview.setState({ emoji: null });
	      }, 16);
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      if (!this.waitingForPaint) {
	        this.waitingForPaint = true;
	        window.requestAnimationFrame(this.handleScrollPaint.bind(this));
	      }
	    }
	  }, {
	    key: 'handleScrollPaint',
	    value: function handleScrollPaint() {
	      this.waitingForPaint = false;
	
	      var target = this.refs.scroll;
	      var scrollTop = target.scrollTop;
	      var scrollingDown = scrollTop > (this.scrollTop || 0);
	      var activeCategory = null;
	      var categories = this.state.categories;
	
	
	      for (var i = 0, l = categories.length; i < l; i++) {
	        var ii = scrollingDown ? categories.length - 1 - i : i,
	            category = categories[ii],
	            component = this.refs['category-' + ii];
	
	        if (component) {
	          var active = component.handleScroll(scrollTop);
	          if (active && !activeCategory) {
	            activeCategory = category;
	          }
	        }
	      }
	
	      if (activeCategory) {
	        var anchors = this.refs.anchors;
	        var _activeCategory = activeCategory;
	        var categoryName = _activeCategory.name;
	
	
	        if (anchors.state.selected != categoryName) {
	          anchors.setState({ selected: categoryName });
	        }
	      }
	
	      this.scrollTop = scrollTop;
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(emojis) {
	      if (emojis == null) {
	        this.setState({ categories: DEFAULT_CATEGORIES });
	      } else {
	        this.setState({ categories: [{
	            name: 'Search Results',
	            emojis: emojis
	          }] });
	      }
	    }
	  }, {
	    key: 'handleAnchorClick',
	    value: function handleAnchorClick(category, i) {
	      var component = this.refs['category-' + i];
	      var _refs = this.refs;
	      var scroll = _refs.scroll;
	      var anchors = _refs.anchors;
	
	
	      if (component) {
	        var top = component.top;
	
	
	        if (i == 0) {
	          top = 0;
	        } else {
	          top += 1;
	        }
	
	        scroll.scrollTop = top;
	      }
	    }
	  }, {
	    key: 'handleSkinChange',
	    value: function handleSkinChange(skin) {
	      this.setState({ skin: skin });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props;
	      var perLine = _props.perLine;
	      var emojiSize = _props.emojiSize;
	      var sheetURL = _props.sheetURL;
	      var skin = this.state.skin;
	      var width = perLine * (emojiSize + 12) + 12 + 2;
	
	      return _react2.default.createElement(
	        'div',
	        { style: { width: width }, className: 'emoji-picker' },
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-picker-bar' },
	          _react2.default.createElement(_.Anchors, {
	            ref: 'anchors',
	            categories: DEFAULT_CATEGORIES,
	            onAnchorClick: this.handleAnchorClick.bind(this)
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'scroll', className: 'emoji-picker-scroll', onScroll: this.handleScroll.bind(this) },
	          _react2.default.createElement(_.Search, {
	            onSearch: this.handleSearch.bind(this)
	          }),
	          this.state.categories.map(function (category, i) {
	            return _react2.default.createElement(_.Category, {
	              ref: 'category-' + i,
	              key: category.name,
	              name: category.name,
	              emojis: category.emojis,
	              hasStickyPosition: _this3.hasStickyPosition,
	              emojiProps: {
	                skin: skin,
	                size: emojiSize,
	                sheetURL: sheetURL,
	                onOver: _this3.handleEmojiOver.bind(_this3),
	                onLeave: _this3.handleEmojiLeave.bind(_this3),
	                onClick: _this3.props.onClick
	              }
	            });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-picker-bar' },
	          _react2.default.createElement(_.Preview, {
	            ref: 'preview',
	            emojiProps: {
	              size: 38,
	              sheetURL: sheetURL
	            },
	            skinsProps: {
	              skin: skin,
	              onChange: this.handleSkinChange.bind(this)
	            }
	          })
	        )
	      );
	    }
	  }]);
	
	  return Picker;
	}(_react2.default.Component);
	
	exports.default = Picker;
	
	
	Picker.propTypes = {
	  onClick: _react2.default.PropTypes.func,
	  skin: _react2.default.PropTypes.number,
	  perLine: _react2.default.PropTypes.number,
	  emojiSize: _react2.default.PropTypes.number,
	  sheetURL: _react2.default.PropTypes.string.isRequired
	};
	
	Picker.defaultProps = {
	  onClick: function onClick() {},
	  emojiSize: 24,
	  perLine: 9,
	  skin: 1
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	
	// MIT license
	
	(function () {
	    var lastTime = 0;
	    var vendors = ['ms', 'moz', 'webkit', 'o'];
	    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	    }
	
	    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
	        var currTime = new Date().getTime();
	        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	        var id = window.setTimeout(function () {
	            callback(currTime + timeToCall);
	        }, timeToCall);
	        lastTime = currTime + timeToCall;
	        return id;
	    };
	
	    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
	        clearTimeout(id);
	    };
	})();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Preview = function (_React$Component) {
	  _inherits(Preview, _React$Component);
	
	  function Preview(props) {
	    _classCallCheck(this, Preview);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Preview).call(this, props));
	
	    _this.state = { emoji: null };
	    return _this;
	  }
	
	  _createClass(Preview, [{
	    key: 'render',
	    value: function render() {
	      var emoji = this.state.emoji;
	      var _props = this.props;
	      var emojiProps = _props.emojiProps;
	      var skinsProps = _props.skinsProps;
	
	
	      if (emoji) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-picker-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-picker-preview-emoji' },
	            _react2.default.createElement(_.Emoji, _extends({
	              key: emoji.short_name || emoji,
	              emoji: emoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-picker-preview-data' },
	            _react2.default.createElement(
	              'span',
	              { className: 'emoji-picker-preview-name' },
	              emoji.name
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'span',
	              { className: 'emoji-picker-preview-shortnames' },
	              emoji.short_names.map(function (short_name) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: short_name, className: 'emoji-picker-preview-shortname' },
	                  ':',
	                  short_name,
	                  ':'
	                );
	              })
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-picker-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-picker-preview-emoji' },
	            _react2.default.createElement(_.Emoji, _extends({
	              emoji: 'tophat'
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-picker-preview-data' },
	            _react2.default.createElement(
	              'span',
	              { className: 'emoji-picker-title-label' },
	              'EmojiPicker'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-picker-preview-skins' },
	            _react2.default.createElement(_.Skins, skinsProps)
	          )
	        );
	      }
	    }
	  }]);
	
	  return Preview;
	}(_react2.default.Component);
	
	exports.default = Preview;
	
	
	Preview.propTypes = {
	  emojiProps: _react2.default.PropTypes.object.isRequired,
	  skinsProps: _react2.default.PropTypes.object.isRequired
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lunr = __webpack_require__(22);
	
	var _lunr2 = _interopRequireDefault(_lunr);
	
	var _data = __webpack_require__(17);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);
	
	  function Search(props) {
	    _classCallCheck(this, Search);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));
	
	    _this.buildIndex();
	    return _this;
	  }
	
	  _createClass(Search, [{
	    key: 'buildIndex',
	    value: function buildIndex() {
	      this.index = (0, _lunr2.default)(function () {
	        this.field('short_name', { boost: 2 });
	        this.field('name');
	
	        this.ref('short_name');
	      });
	
	      for (var emoji in _data2.default.emojis) {
	        var emojiData = _data2.default.emojis[emoji];
	        var short_name = emojiData.short_name;
	        var name = emojiData.name;
	
	
	        this.index.add({ short_name: short_name, name: name });
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange() {
	      var input = this.refs.input;
	      var value = input.value;
	      var results = null;
	
	      if (value.length) {
	        results = this.index.search(value).map(function (result) {
	          return result.ref;
	        });
	      }
	
	      this.props.onSearch(results);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', {
	        ref: 'input',
	        type: 'text',
	        onChange: this.handleChange.bind(this),
	        placeholder: 'Search',
	        className: 'emoji-picker-search'
	      });
	    }
	  }]);
	
	  return Search;
	}(_react2.default.Component);
	
	exports.default = Search;
	
	
	Search.propTypes = {
	  onSearch: _react2.default.PropTypes.func
	};
	
	Search.defaultProps = {
	  onSearch: function onSearch() {}
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.7.1
	 * Copyright (C) 2016 Oliver Nightingale
	 * @license MIT
	 */
	
	;(function(){
	
	/**
	 * Convenience function for instantiating a new lunr index and configuring it
	 * with the default pipeline functions and the passed config function.
	 *
	 * When using this convenience function a new index will be created with the
	 * following functions already in the pipeline:
	 *
	 * lunr.StopWordFilter - filters out any stop words before they enter the
	 * index
	 *
	 * lunr.stemmer - stems the tokens before entering the index.
	 *
	 * Example:
	 *
	 *     var idx = lunr(function () {
	 *       this.field('title', 10)
	 *       this.field('tags', 100)
	 *       this.field('body')
	 *       
	 *       this.ref('cid')
	 *       
	 *       this.pipeline.add(function () {
	 *         // some custom pipeline function
	 *       })
	 *       
	 *     })
	 *
	 * @param {Function} config A function that will be called with the new instance
	 * of the lunr.Index as both its context and first parameter. It can be used to
	 * customize the instance of new lunr.Index.
	 * @namespace
	 * @module
	 * @returns {lunr.Index}
	 *
	 */
	var lunr = function (config) {
	  var idx = new lunr.Index
	
	  idx.pipeline.add(
	    lunr.trimmer,
	    lunr.stopWordFilter,
	    lunr.stemmer
	  )
	
	  if (config) config.call(idx, idx)
	
	  return idx
	}
	
	lunr.version = "0.7.1"
	/*!
	 * lunr.utils
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * A namespace containing utils for the rest of the lunr library
	 */
	lunr.utils = {}
	
	/**
	 * Print a warning message to the console.
	 *
	 * @param {String} message The message to be printed.
	 * @memberOf Utils
	 */
	lunr.utils.warn = (function (global) {
	  return function (message) {
	    if (global.console && console.warn) {
	      console.warn(message)
	    }
	  }
	})(this)
	
	/**
	 * Convert an object to a string.
	 *
	 * In the case of `null` and `undefined` the function returns
	 * the empty string, in all other cases the result of calling
	 * `toString` on the passed object is returned.
	 *
	 * @param {Any} obj The object to convert to a string.
	 * @return {String} string representation of the passed object.
	 * @memberOf Utils
	 */
	lunr.utils.asString = function (obj) {
	  if (obj === void 0 || obj === null) {
	    return ""
	  } else {
	    return obj.toString()
	  }
	}
	/*!
	 * lunr.EventEmitter
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * lunr.EventEmitter is an event emitter for lunr. It manages adding and removing event handlers and triggering events and their handlers.
	 *
	 * @constructor
	 */
	lunr.EventEmitter = function () {
	  this.events = {}
	}
	
	/**
	 * Binds a handler function to a specific event(s).
	 *
	 * Can bind a single function to many different events in one call.
	 *
	 * @param {String} [eventName] The name(s) of events to bind this function to.
	 * @param {Function} fn The function to call when an event is fired.
	 * @memberOf EventEmitter
	 */
	lunr.EventEmitter.prototype.addListener = function () {
	  var args = Array.prototype.slice.call(arguments),
	      fn = args.pop(),
	      names = args
	
	  if (typeof fn !== "function") throw new TypeError ("last argument must be a function")
	
	  names.forEach(function (name) {
	    if (!this.hasHandler(name)) this.events[name] = []
	    this.events[name].push(fn)
	  }, this)
	}
	
	/**
	 * Removes a handler function from a specific event.
	 *
	 * @param {String} eventName The name of the event to remove this function from.
	 * @param {Function} fn The function to remove from an event.
	 * @memberOf EventEmitter
	 */
	lunr.EventEmitter.prototype.removeListener = function (name, fn) {
	  if (!this.hasHandler(name)) return
	
	  var fnIndex = this.events[name].indexOf(fn)
	  this.events[name].splice(fnIndex, 1)
	
	  if (!this.events[name].length) delete this.events[name]
	}
	
	/**
	 * Calls all functions bound to the given event.
	 *
	 * Additional data can be passed to the event handler as arguments to `emit`
	 * after the event name.
	 *
	 * @param {String} eventName The name of the event to emit.
	 * @memberOf EventEmitter
	 */
	lunr.EventEmitter.prototype.emit = function (name) {
	  if (!this.hasHandler(name)) return
	
	  var args = Array.prototype.slice.call(arguments, 1)
	
	  this.events[name].forEach(function (fn) {
	    fn.apply(undefined, args)
	  })
	}
	
	/**
	 * Checks whether a handler has ever been stored against an event.
	 *
	 * @param {String} eventName The name of the event to check.
	 * @private
	 * @memberOf EventEmitter
	 */
	lunr.EventEmitter.prototype.hasHandler = function (name) {
	  return name in this.events
	}
	
	/*!
	 * lunr.tokenizer
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * A function for splitting a string into tokens ready to be inserted into
	 * the search index. Uses `lunr.tokenizer.seperator` to split strings, change
	 * the value of this property to change how strings are split into tokens.
	 *
	 * @module
	 * @param {String} obj The string to convert into tokens
	 * @see lunr.tokenizer.seperator
	 * @returns {Array}
	 */
	lunr.tokenizer = function (obj) {
	  if (!arguments.length || obj == null || obj == undefined) return []
	  if (Array.isArray(obj)) return obj.map(function (t) { return lunr.utils.asString(t).toLowerCase() })
	
	  return obj.toString().trim().toLowerCase().split(lunr.tokenizer.seperator)
	}
	
	/**
	 * The sperator used to split a string into tokens. Override this property to change the behaviour of
	 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
	 *
	 * @static
	 * @see lunr.tokenizer
	 */
	lunr.tokenizer.seperator = /[\s\-]+/
	
	/**
	 * Loads a previously serialised tokenizer.
	 *
	 * A tokenizer function to be loaded must already be registered with lunr.tokenizer.
	 * If the serialised tokenizer has not been registered then an error will be thrown.
	 *
	 * @param {String} label The label of the serialised tokenizer.
	 * @returns {Function}
	 * @memberOf tokenizer
	 */
	lunr.tokenizer.load = function (label) {
	  var fn = this.registeredFunctions[label]
	
	  if (!fn) {
	    throw new Error('Cannot load un-registered function: ' + label)
	  }
	
	  return fn
	}
	
	lunr.tokenizer.label = 'default'
	
	lunr.tokenizer.registeredFunctions = {
	  'default': lunr.tokenizer
	}
	
	/**
	 * Register a tokenizer function.
	 *
	 * Functions that are used as tokenizers should be registered if they are to be used with a serialised index.
	 *
	 * Registering a function does not add it to an index, functions must still be associated with a specific index for them to be used when indexing and searching documents.
	 *
	 * @param {Function} fn The function to register.
	 * @param {String} label The label to register this function with
	 * @memberOf tokenizer
	 */
	lunr.tokenizer.registerFunction = function (fn, label) {
	  if (label in this.registeredFunctions) {
	    lunr.utils.warn('Overwriting existing tokenizer: ' + label)
	  }
	
	  fn.label = label
	  this.registeredFunctions[label] = fn
	}
	/*!
	 * lunr.Pipeline
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * lunr.Pipelines maintain an ordered list of functions to be applied to all
	 * tokens in documents entering the search index and queries being ran against
	 * the index.
	 *
	 * An instance of lunr.Index created with the lunr shortcut will contain a
	 * pipeline with a stop word filter and an English language stemmer. Extra
	 * functions can be added before or after either of these functions or these
	 * default functions can be removed.
	 *
	 * When run the pipeline will call each function in turn, passing a token, the
	 * index of that token in the original list of all tokens and finally a list of
	 * all the original tokens.
	 *
	 * The output of functions in the pipeline will be passed to the next function
	 * in the pipeline. To exclude a token from entering the index the function
	 * should return undefined, the rest of the pipeline will not be called with
	 * this token.
	 *
	 * For serialisation of pipelines to work, all functions used in an instance of
	 * a pipeline should be registered with lunr.Pipeline. Registered functions can
	 * then be loaded. If trying to load a serialised pipeline that uses functions
	 * that are not registered an error will be thrown.
	 *
	 * If not planning on serialising the pipeline then registering pipeline functions
	 * is not necessary.
	 *
	 * @constructor
	 */
	lunr.Pipeline = function () {
	  this._stack = []
	}
	
	lunr.Pipeline.registeredFunctions = {}
	
	/**
	 * Register a function with the pipeline.
	 *
	 * Functions that are used in the pipeline should be registered if the pipeline
	 * needs to be serialised, or a serialised pipeline needs to be loaded.
	 *
	 * Registering a function does not add it to a pipeline, functions must still be
	 * added to instances of the pipeline for them to be used when running a pipeline.
	 *
	 * @param {Function} fn The function to check for.
	 * @param {String} label The label to register this function with
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.registerFunction = function (fn, label) {
	  if (label in this.registeredFunctions) {
	    lunr.utils.warn('Overwriting existing registered function: ' + label)
	  }
	
	  fn.label = label
	  lunr.Pipeline.registeredFunctions[fn.label] = fn
	}
	
	/**
	 * Warns if the function is not registered as a Pipeline function.
	 *
	 * @param {Function} fn The function to check for.
	 * @private
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
	  var isRegistered = fn.label && (fn.label in this.registeredFunctions)
	
	  if (!isRegistered) {
	    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
	  }
	}
	
	/**
	 * Loads a previously serialised pipeline.
	 *
	 * All functions to be loaded must already be registered with lunr.Pipeline.
	 * If any function from the serialised data has not been registered then an
	 * error will be thrown.
	 *
	 * @param {Object} serialised The serialised pipeline to load.
	 * @returns {lunr.Pipeline}
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.load = function (serialised) {
	  var pipeline = new lunr.Pipeline
	
	  serialised.forEach(function (fnName) {
	    var fn = lunr.Pipeline.registeredFunctions[fnName]
	
	    if (fn) {
	      pipeline.add(fn)
	    } else {
	      throw new Error('Cannot load un-registered function: ' + fnName)
	    }
	  })
	
	  return pipeline
	}
	
	/**
	 * Adds new functions to the end of the pipeline.
	 *
	 * Logs a warning if the function has not been registered.
	 *
	 * @param {Function} functions Any number of functions to add to the pipeline.
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.prototype.add = function () {
	  var fns = Array.prototype.slice.call(arguments)
	
	  fns.forEach(function (fn) {
	    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
	    this._stack.push(fn)
	  }, this)
	}
	
	/**
	 * Adds a single function after a function that already exists in the
	 * pipeline.
	 *
	 * Logs a warning if the function has not been registered.
	 *
	 * @param {Function} existingFn A function that already exists in the pipeline.
	 * @param {Function} newFn The new function to add to the pipeline.
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.prototype.after = function (existingFn, newFn) {
	  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)
	
	  var pos = this._stack.indexOf(existingFn)
	  if (pos == -1) {
	    throw new Error('Cannot find existingFn')
	  }
	
	  pos = pos + 1
	  this._stack.splice(pos, 0, newFn)
	}
	
	/**
	 * Adds a single function before a function that already exists in the
	 * pipeline.
	 *
	 * Logs a warning if the function has not been registered.
	 *
	 * @param {Function} existingFn A function that already exists in the pipeline.
	 * @param {Function} newFn The new function to add to the pipeline.
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.prototype.before = function (existingFn, newFn) {
	  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)
	
	  var pos = this._stack.indexOf(existingFn)
	  if (pos == -1) {
	    throw new Error('Cannot find existingFn')
	  }
	
	  this._stack.splice(pos, 0, newFn)
	}
	
	/**
	 * Removes a function from the pipeline.
	 *
	 * @param {Function} fn The function to remove from the pipeline.
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.prototype.remove = function (fn) {
	  var pos = this._stack.indexOf(fn)
	  if (pos == -1) {
	    return
	  }
	
	  this._stack.splice(pos, 1)
	}
	
	/**
	 * Runs the current list of functions that make up the pipeline against the
	 * passed tokens.
	 *
	 * @param {Array} tokens The tokens to run through the pipeline.
	 * @returns {Array}
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.prototype.run = function (tokens) {
	  var out = [],
	      tokenLength = tokens.length,
	      stackLength = this._stack.length
	
	  for (var i = 0; i < tokenLength; i++) {
	    var token = tokens[i]
	
	    for (var j = 0; j < stackLength; j++) {
	      token = this._stack[j](token, i, tokens)
	      if (token === void 0 || token === '') break
	    };
	
	    if (token !== void 0 && token !== '') out.push(token)
	  };
	
	  return out
	}
	
	/**
	 * Resets the pipeline by removing any existing processors.
	 *
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.prototype.reset = function () {
	  this._stack = []
	}
	
	/**
	 * Returns a representation of the pipeline ready for serialisation.
	 *
	 * Logs a warning if the function has not been registered.
	 *
	 * @returns {Array}
	 * @memberOf Pipeline
	 */
	lunr.Pipeline.prototype.toJSON = function () {
	  return this._stack.map(function (fn) {
	    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
	
	    return fn.label
	  })
	}
	/*!
	 * lunr.Vector
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * lunr.Vectors implement vector related operations for
	 * a series of elements.
	 *
	 * @constructor
	 */
	lunr.Vector = function () {
	  this._magnitude = null
	  this.list = undefined
	  this.length = 0
	}
	
	/**
	 * lunr.Vector.Node is a simple struct for each node
	 * in a lunr.Vector.
	 *
	 * @private
	 * @param {Number} The index of the node in the vector.
	 * @param {Object} The data at this node in the vector.
	 * @param {lunr.Vector.Node} The node directly after this node in the vector.
	 * @constructor
	 * @memberOf Vector
	 */
	lunr.Vector.Node = function (idx, val, next) {
	  this.idx = idx
	  this.val = val
	  this.next = next
	}
	
	/**
	 * Inserts a new value at a position in a vector.
	 *
	 * @param {Number} The index at which to insert a value.
	 * @param {Object} The object to insert in the vector.
	 * @memberOf Vector.
	 */
	lunr.Vector.prototype.insert = function (idx, val) {
	  this._magnitude = undefined;
	  var list = this.list
	
	  if (!list) {
	    this.list = new lunr.Vector.Node (idx, val, list)
	    return this.length++
	  }
	
	  if (idx < list.idx) {
	    this.list = new lunr.Vector.Node (idx, val, list)
	    return this.length++
	  }
	
	  var prev = list,
	      next = list.next
	
	  while (next != undefined) {
	    if (idx < next.idx) {
	      prev.next = new lunr.Vector.Node (idx, val, next)
	      return this.length++
	    }
	
	    prev = next, next = next.next
	  }
	
	  prev.next = new lunr.Vector.Node (idx, val, next)
	  return this.length++
	}
	
	/**
	 * Calculates the magnitude of this vector.
	 *
	 * @returns {Number}
	 * @memberOf Vector
	 */
	lunr.Vector.prototype.magnitude = function () {
	  if (this._magnitude) return this._magnitude
	  var node = this.list,
	      sumOfSquares = 0,
	      val
	
	  while (node) {
	    val = node.val
	    sumOfSquares += val * val
	    node = node.next
	  }
	
	  return this._magnitude = Math.sqrt(sumOfSquares)
	}
	
	/**
	 * Calculates the dot product of this vector and another vector.
	 *
	 * @param {lunr.Vector} otherVector The vector to compute the dot product with.
	 * @returns {Number}
	 * @memberOf Vector
	 */
	lunr.Vector.prototype.dot = function (otherVector) {
	  var node = this.list,
	      otherNode = otherVector.list,
	      dotProduct = 0
	
	  while (node && otherNode) {
	    if (node.idx < otherNode.idx) {
	      node = node.next
	    } else if (node.idx > otherNode.idx) {
	      otherNode = otherNode.next
	    } else {
	      dotProduct += node.val * otherNode.val
	      node = node.next
	      otherNode = otherNode.next
	    }
	  }
	
	  return dotProduct
	}
	
	/**
	 * Calculates the cosine similarity between this vector and another
	 * vector.
	 *
	 * @param {lunr.Vector} otherVector The other vector to calculate the
	 * similarity with.
	 * @returns {Number}
	 * @memberOf Vector
	 */
	lunr.Vector.prototype.similarity = function (otherVector) {
	  return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude())
	}
	/*!
	 * lunr.SortedSet
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * lunr.SortedSets are used to maintain an array of uniq values in a sorted
	 * order.
	 *
	 * @constructor
	 */
	lunr.SortedSet = function () {
	  this.length = 0
	  this.elements = []
	}
	
	/**
	 * Loads a previously serialised sorted set.
	 *
	 * @param {Array} serialisedData The serialised set to load.
	 * @returns {lunr.SortedSet}
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.load = function (serialisedData) {
	  var set = new this
	
	  set.elements = serialisedData
	  set.length = serialisedData.length
	
	  return set
	}
	
	/**
	 * Inserts new items into the set in the correct position to maintain the
	 * order.
	 *
	 * @param {Object} The objects to add to this set.
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.prototype.add = function () {
	  var i, element
	
	  for (i = 0; i < arguments.length; i++) {
	    element = arguments[i]
	    if (~this.indexOf(element)) continue
	    this.elements.splice(this.locationFor(element), 0, element)
	  }
	
	  this.length = this.elements.length
	}
	
	/**
	 * Converts this sorted set into an array.
	 *
	 * @returns {Array}
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.prototype.toArray = function () {
	  return this.elements.slice()
	}
	
	/**
	 * Creates a new array with the results of calling a provided function on every
	 * element in this sorted set.
	 *
	 * Delegates to Array.prototype.map and has the same signature.
	 *
	 * @param {Function} fn The function that is called on each element of the
	 * set.
	 * @param {Object} ctx An optional object that can be used as the context
	 * for the function fn.
	 * @returns {Array}
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.prototype.map = function (fn, ctx) {
	  return this.elements.map(fn, ctx)
	}
	
	/**
	 * Executes a provided function once per sorted set element.
	 *
	 * Delegates to Array.prototype.forEach and has the same signature.
	 *
	 * @param {Function} fn The function that is called on each element of the
	 * set.
	 * @param {Object} ctx An optional object that can be used as the context
	 * @memberOf SortedSet
	 * for the function fn.
	 */
	lunr.SortedSet.prototype.forEach = function (fn, ctx) {
	  return this.elements.forEach(fn, ctx)
	}
	
	/**
	 * Returns the index at which a given element can be found in the
	 * sorted set, or -1 if it is not present.
	 *
	 * @param {Object} elem The object to locate in the sorted set.
	 * @returns {Number}
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.prototype.indexOf = function (elem) {
	  var start = 0,
	      end = this.elements.length,
	      sectionLength = end - start,
	      pivot = start + Math.floor(sectionLength / 2),
	      pivotElem = this.elements[pivot]
	
	  while (sectionLength > 1) {
	    if (pivotElem === elem) return pivot
	
	    if (pivotElem < elem) start = pivot
	    if (pivotElem > elem) end = pivot
	
	    sectionLength = end - start
	    pivot = start + Math.floor(sectionLength / 2)
	    pivotElem = this.elements[pivot]
	  }
	
	  if (pivotElem === elem) return pivot
	
	  return -1
	}
	
	/**
	 * Returns the position within the sorted set that an element should be
	 * inserted at to maintain the current order of the set.
	 *
	 * This function assumes that the element to search for does not already exist
	 * in the sorted set.
	 *
	 * @param {Object} elem The elem to find the position for in the set
	 * @returns {Number}
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.prototype.locationFor = function (elem) {
	  var start = 0,
	      end = this.elements.length,
	      sectionLength = end - start,
	      pivot = start + Math.floor(sectionLength / 2),
	      pivotElem = this.elements[pivot]
	
	  while (sectionLength > 1) {
	    if (pivotElem < elem) start = pivot
	    if (pivotElem > elem) end = pivot
	
	    sectionLength = end - start
	    pivot = start + Math.floor(sectionLength / 2)
	    pivotElem = this.elements[pivot]
	  }
	
	  if (pivotElem > elem) return pivot
	  if (pivotElem < elem) return pivot + 1
	}
	
	/**
	 * Creates a new lunr.SortedSet that contains the elements in the intersection
	 * of this set and the passed set.
	 *
	 * @param {lunr.SortedSet} otherSet The set to intersect with this set.
	 * @returns {lunr.SortedSet}
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.prototype.intersect = function (otherSet) {
	  var intersectSet = new lunr.SortedSet,
	      i = 0, j = 0,
	      a_len = this.length, b_len = otherSet.length,
	      a = this.elements, b = otherSet.elements
	
	  while (true) {
	    if (i > a_len - 1 || j > b_len - 1) break
	
	    if (a[i] === b[j]) {
	      intersectSet.add(a[i])
	      i++, j++
	      continue
	    }
	
	    if (a[i] < b[j]) {
	      i++
	      continue
	    }
	
	    if (a[i] > b[j]) {
	      j++
	      continue
	    }
	  };
	
	  return intersectSet
	}
	
	/**
	 * Makes a copy of this set
	 *
	 * @returns {lunr.SortedSet}
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.prototype.clone = function () {
	  var clone = new lunr.SortedSet
	
	  clone.elements = this.toArray()
	  clone.length = clone.elements.length
	
	  return clone
	}
	
	/**
	 * Creates a new lunr.SortedSet that contains the elements in the union
	 * of this set and the passed set.
	 *
	 * @param {lunr.SortedSet} otherSet The set to union with this set.
	 * @returns {lunr.SortedSet}
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.prototype.union = function (otherSet) {
	  var longSet, shortSet, unionSet
	
	  if (this.length >= otherSet.length) {
	    longSet = this, shortSet = otherSet
	  } else {
	    longSet = otherSet, shortSet = this
	  }
	
	  unionSet = longSet.clone()
	
	  for(var i = 0, shortSetElements = shortSet.toArray(); i < shortSetElements.length; i++){
	    unionSet.add(shortSetElements[i])
	  }
	
	  return unionSet
	}
	
	/**
	 * Returns a representation of the sorted set ready for serialisation.
	 *
	 * @returns {Array}
	 * @memberOf SortedSet
	 */
	lunr.SortedSet.prototype.toJSON = function () {
	  return this.toArray()
	}
	/*!
	 * lunr.Index
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * lunr.Index is object that manages a search index.  It contains the indexes
	 * and stores all the tokens and document lookups.  It also provides the main
	 * user facing API for the library.
	 *
	 * @constructor
	 */
	lunr.Index = function () {
	  this._fields = []
	  this._ref = 'id'
	  this.pipeline = new lunr.Pipeline
	  this.documentStore = new lunr.Store
	  this.tokenStore = new lunr.TokenStore
	  this.corpusTokens = new lunr.SortedSet
	  this.eventEmitter =  new lunr.EventEmitter
	  this.tokenizerFn = lunr.tokenizer
	
	  this._idfCache = {}
	
	  this.on('add', 'remove', 'update', (function () {
	    this._idfCache = {}
	  }).bind(this))
	}
	
	/**
	 * Bind a handler to events being emitted by the index.
	 *
	 * The handler can be bound to many events at the same time.
	 *
	 * @param {String} [eventName] The name(s) of events to bind the function to.
	 * @param {Function} fn The serialised set to load.
	 * @memberOf Index
	 */
	lunr.Index.prototype.on = function () {
	  var args = Array.prototype.slice.call(arguments)
	  return this.eventEmitter.addListener.apply(this.eventEmitter, args)
	}
	
	/**
	 * Removes a handler from an event being emitted by the index.
	 *
	 * @param {String} eventName The name of events to remove the function from.
	 * @param {Function} fn The serialised set to load.
	 * @memberOf Index
	 */
	lunr.Index.prototype.off = function (name, fn) {
	  return this.eventEmitter.removeListener(name, fn)
	}
	
	/**
	 * Loads a previously serialised index.
	 *
	 * Issues a warning if the index being imported was serialised
	 * by a different version of lunr.
	 *
	 * @param {Object} serialisedData The serialised set to load.
	 * @returns {lunr.Index}
	 * @memberOf Index
	 */
	lunr.Index.load = function (serialisedData) {
	  if (serialisedData.version !== lunr.version) {
	    lunr.utils.warn('version mismatch: current ' + lunr.version + ' importing ' + serialisedData.version)
	  }
	
	  var idx = new this
	
	  idx._fields = serialisedData.fields
	  idx._ref = serialisedData.ref
	
	  idx.tokenizer = lunr.tokenizer.load(serialisedData.tokenizer)
	  idx.documentStore = lunr.Store.load(serialisedData.documentStore)
	  idx.tokenStore = lunr.TokenStore.load(serialisedData.tokenStore)
	  idx.corpusTokens = lunr.SortedSet.load(serialisedData.corpusTokens)
	  idx.pipeline = lunr.Pipeline.load(serialisedData.pipeline)
	
	  return idx
	}
	
	/**
	 * Adds a field to the list of fields that will be searchable within documents
	 * in the index.
	 *
	 * An optional boost param can be passed to affect how much tokens in this field
	 * rank in search results, by default the boost value is 1.
	 *
	 * Fields should be added before any documents are added to the index, fields
	 * that are added after documents are added to the index will only apply to new
	 * documents added to the index.
	 *
	 * @param {String} fieldName The name of the field within the document that
	 * should be indexed
	 * @param {Number} boost An optional boost that can be applied to terms in this
	 * field.
	 * @returns {lunr.Index}
	 * @memberOf Index
	 */
	lunr.Index.prototype.field = function (fieldName, opts) {
	  var opts = opts || {},
	      field = { name: fieldName, boost: opts.boost || 1 }
	
	  this._fields.push(field)
	  return this
	}
	
	/**
	 * Sets the property used to uniquely identify documents added to the index,
	 * by default this property is 'id'.
	 *
	 * This should only be changed before adding documents to the index, changing
	 * the ref property without resetting the index can lead to unexpected results.
	 *
	 * The value of ref can be of any type but it _must_ be stably comparable and
	 * orderable.
	 *
	 * @param {String} refName The property to use to uniquely identify the
	 * documents in the index.
	 * @param {Boolean} emitEvent Whether to emit add events, defaults to true
	 * @returns {lunr.Index}
	 * @memberOf Index
	 */
	lunr.Index.prototype.ref = function (refName) {
	  this._ref = refName
	  return this
	}
	
	/**
	 * Sets the tokenizer used for this index.
	 *
	 * By default the index will use the default tokenizer, lunr.tokenizer. The tokenizer
	 * should only be changed before adding documents to the index. Changing the tokenizer
	 * without re-building the index can lead to unexpected results.
	 *
	 * @param {Function} fn The function to use as a tokenizer.
	 * @returns {lunr.Index}
	 * @memberOf Index
	 */
	lunr.Index.prototype.tokenizer = function (fn) {
	  var isRegistered = fn.label && (fn.label in lunr.tokenizer.registeredFunctions)
	
	  if (!isRegistered) {
	    lunr.utils.warn('Function is not a registered tokenizer. This may cause problems when serialising the index')
	  }
	
	  this.tokenizerFn = fn
	  return this
	}
	
	/**
	 * Add a document to the index.
	 *
	 * This is the way new documents enter the index, this function will run the
	 * fields from the document through the index's pipeline and then add it to
	 * the index, it will then show up in search results.
	 *
	 * An 'add' event is emitted with the document that has been added and the index
	 * the document has been added to. This event can be silenced by passing false
	 * as the second argument to add.
	 *
	 * @param {Object} doc The document to add to the index.
	 * @param {Boolean} emitEvent Whether or not to emit events, default true.
	 * @memberOf Index
	 */
	lunr.Index.prototype.add = function (doc, emitEvent) {
	  var docTokens = {},
	      allDocumentTokens = new lunr.SortedSet,
	      docRef = doc[this._ref],
	      emitEvent = emitEvent === undefined ? true : emitEvent
	
	  this._fields.forEach(function (field) {
	    var fieldTokens = this.pipeline.run(this.tokenizerFn(doc[field.name]))
	
	    docTokens[field.name] = fieldTokens
	
	    for (var i = 0; i < fieldTokens.length; i++) {
	      var token = fieldTokens[i]
	      allDocumentTokens.add(token)
	      this.corpusTokens.add(token)
	    }
	  }, this)
	
	  this.documentStore.set(docRef, allDocumentTokens)
	
	  for (var i = 0; i < allDocumentTokens.length; i++) {
	    var token = allDocumentTokens.elements[i]
	    var tf = 0;
	
	    for (var j = 0; j < this._fields.length; j++){
	      var field = this._fields[j]
	      var fieldTokens = docTokens[field.name]
	      var fieldLength = fieldTokens.length
	
	      if (!fieldLength) continue
	
	      var tokenCount = 0
	      for (var k = 0; k < fieldLength; k++){
	        if (fieldTokens[k] === token){
	          tokenCount++
	        }
	      }
	
	      tf += (tokenCount / fieldLength * field.boost)
	    }
	
	    this.tokenStore.add(token, { ref: docRef, tf: tf })
	  };
	
	  if (emitEvent) this.eventEmitter.emit('add', doc, this)
	}
	
	/**
	 * Removes a document from the index.
	 *
	 * To make sure documents no longer show up in search results they can be
	 * removed from the index using this method.
	 *
	 * The document passed only needs to have the same ref property value as the
	 * document that was added to the index, they could be completely different
	 * objects.
	 *
	 * A 'remove' event is emitted with the document that has been removed and the index
	 * the document has been removed from. This event can be silenced by passing false
	 * as the second argument to remove.
	 *
	 * @param {Object} doc The document to remove from the index.
	 * @param {Boolean} emitEvent Whether to emit remove events, defaults to true
	 * @memberOf Index
	 */
	lunr.Index.prototype.remove = function (doc, emitEvent) {
	  var docRef = doc[this._ref],
	      emitEvent = emitEvent === undefined ? true : emitEvent
	
	  if (!this.documentStore.has(docRef)) return
	
	  var docTokens = this.documentStore.get(docRef)
	
	  this.documentStore.remove(docRef)
	
	  docTokens.forEach(function (token) {
	    this.tokenStore.remove(token, docRef)
	  }, this)
	
	  if (emitEvent) this.eventEmitter.emit('remove', doc, this)
	}
	
	/**
	 * Updates a document in the index.
	 *
	 * When a document contained within the index gets updated, fields changed,
	 * added or removed, to make sure it correctly matched against search queries,
	 * it should be updated in the index.
	 *
	 * This method is just a wrapper around `remove` and `add`
	 *
	 * An 'update' event is emitted with the document that has been updated and the index.
	 * This event can be silenced by passing false as the second argument to update. Only
	 * an update event will be fired, the 'add' and 'remove' events of the underlying calls
	 * are silenced.
	 *
	 * @param {Object} doc The document to update in the index.
	 * @param {Boolean} emitEvent Whether to emit update events, defaults to true
	 * @see Index.prototype.remove
	 * @see Index.prototype.add
	 * @memberOf Index
	 */
	lunr.Index.prototype.update = function (doc, emitEvent) {
	  var emitEvent = emitEvent === undefined ? true : emitEvent
	
	  this.remove(doc, false)
	  this.add(doc, false)
	
	  if (emitEvent) this.eventEmitter.emit('update', doc, this)
	}
	
	/**
	 * Calculates the inverse document frequency for a token within the index.
	 *
	 * @param {String} token The token to calculate the idf of.
	 * @see Index.prototype.idf
	 * @private
	 * @memberOf Index
	 */
	lunr.Index.prototype.idf = function (term) {
	  var cacheKey = "@" + term
	  if (Object.prototype.hasOwnProperty.call(this._idfCache, cacheKey)) return this._idfCache[cacheKey]
	
	  var documentFrequency = this.tokenStore.count(term),
	      idf = 1
	
	  if (documentFrequency > 0) {
	    idf = 1 + Math.log(this.documentStore.length / documentFrequency)
	  }
	
	  return this._idfCache[cacheKey] = idf
	}
	
	/**
	 * Searches the index using the passed query.
	 *
	 * Queries should be a string, multiple words are allowed and will lead to an
	 * AND based query, e.g. `idx.search('foo bar')` will run a search for
	 * documents containing both 'foo' and 'bar'.
	 *
	 * All query tokens are passed through the same pipeline that document tokens
	 * are passed through, so any language processing involved will be run on every
	 * query term.
	 *
	 * Each query term is expanded, so that the term 'he' might be expanded to
	 * 'hello' and 'help' if those terms were already included in the index.
	 *
	 * Matching documents are returned as an array of objects, each object contains
	 * the matching document ref, as set for this index, and the similarity score
	 * for this document against the query.
	 *
	 * @param {String} query The query to search the index with.
	 * @returns {Object}
	 * @see Index.prototype.idf
	 * @see Index.prototype.documentVector
	 * @memberOf Index
	 */
	lunr.Index.prototype.search = function (query) {
	  var queryTokens = this.pipeline.run(this.tokenizerFn(query)),
	      queryVector = new lunr.Vector,
	      documentSets = [],
	      fieldBoosts = this._fields.reduce(function (memo, f) { return memo + f.boost }, 0)
	
	  var hasSomeToken = queryTokens.some(function (token) {
	    return this.tokenStore.has(token)
	  }, this)
	
	  if (!hasSomeToken) return []
	
	  queryTokens
	    .forEach(function (token, i, tokens) {
	      var tf = 1 / tokens.length * this._fields.length * fieldBoosts,
	          self = this
	
	      var set = this.tokenStore.expand(token).reduce(function (memo, key) {
	        var pos = self.corpusTokens.indexOf(key),
	            idf = self.idf(key),
	            similarityBoost = 1,
	            set = new lunr.SortedSet
	
	        // if the expanded key is not an exact match to the token then
	        // penalise the score for this key by how different the key is
	        // to the token.
	        if (key !== token) {
	          var diff = Math.max(3, key.length - token.length)
	          similarityBoost = 1 / Math.log(diff)
	        }
	
	        // calculate the query tf-idf score for this token
	        // applying an similarityBoost to ensure exact matches
	        // these rank higher than expanded terms
	        if (pos > -1) queryVector.insert(pos, tf * idf * similarityBoost)
	
	        // add all the documents that have this key into a set
	        // ensuring that the type of key is preserved
	        var matchingDocuments = self.tokenStore.get(key),
	            refs = Object.keys(matchingDocuments),
	            refsLen = refs.length
	
	        for (var i = 0; i < refsLen; i++) {
	          set.add(matchingDocuments[refs[i]].ref)
	        }
	
	        return memo.union(set)
	      }, new lunr.SortedSet)
	
	      documentSets.push(set)
	    }, this)
	
	  var documentSet = documentSets.reduce(function (memo, set) {
	    return memo.intersect(set)
	  })
	
	  return documentSet
	    .map(function (ref) {
	      return { ref: ref, score: queryVector.similarity(this.documentVector(ref)) }
	    }, this)
	    .sort(function (a, b) {
	      return b.score - a.score
	    })
	}
	
	/**
	 * Generates a vector containing all the tokens in the document matching the
	 * passed documentRef.
	 *
	 * The vector contains the tf-idf score for each token contained in the
	 * document with the passed documentRef.  The vector will contain an element
	 * for every token in the indexes corpus, if the document does not contain that
	 * token the element will be 0.
	 *
	 * @param {Object} documentRef The ref to find the document with.
	 * @returns {lunr.Vector}
	 * @private
	 * @memberOf Index
	 */
	lunr.Index.prototype.documentVector = function (documentRef) {
	  var documentTokens = this.documentStore.get(documentRef),
	      documentTokensLength = documentTokens.length,
	      documentVector = new lunr.Vector
	
	  for (var i = 0; i < documentTokensLength; i++) {
	    var token = documentTokens.elements[i],
	        tf = this.tokenStore.get(token)[documentRef].tf,
	        idf = this.idf(token)
	
	    documentVector.insert(this.corpusTokens.indexOf(token), tf * idf)
	  };
	
	  return documentVector
	}
	
	/**
	 * Returns a representation of the index ready for serialisation.
	 *
	 * @returns {Object}
	 * @memberOf Index
	 */
	lunr.Index.prototype.toJSON = function () {
	  return {
	    version: lunr.version,
	    fields: this._fields,
	    ref: this._ref,
	    tokenizer: this.tokenizerFn.label,
	    documentStore: this.documentStore.toJSON(),
	    tokenStore: this.tokenStore.toJSON(),
	    corpusTokens: this.corpusTokens.toJSON(),
	    pipeline: this.pipeline.toJSON()
	  }
	}
	
	/**
	 * Applies a plugin to the current index.
	 *
	 * A plugin is a function that is called with the index as its context.
	 * Plugins can be used to customise or extend the behaviour the index
	 * in some way. A plugin is just a function, that encapsulated the custom
	 * behaviour that should be applied to the index.
	 *
	 * The plugin function will be called with the index as its argument, additional
	 * arguments can also be passed when calling use. The function will be called
	 * with the index as its context.
	 *
	 * Example:
	 *
	 *     var myPlugin = function (idx, arg1, arg2) {
	 *       // `this` is the index to be extended
	 *       // apply any extensions etc here.
	 *     }
	 *
	 *     var idx = lunr(function () {
	 *       this.use(myPlugin, 'arg1', 'arg2')
	 *     })
	 *
	 * @param {Function} plugin The plugin to apply.
	 * @memberOf Index
	 */
	lunr.Index.prototype.use = function (plugin) {
	  var args = Array.prototype.slice.call(arguments, 1)
	  args.unshift(this)
	  plugin.apply(this, args)
	}
	/*!
	 * lunr.Store
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * lunr.Store is a simple key-value store used for storing sets of tokens for
	 * documents stored in index.
	 *
	 * @constructor
	 * @module
	 */
	lunr.Store = function () {
	  this.store = {}
	  this.length = 0
	}
	
	/**
	 * Loads a previously serialised store
	 *
	 * @param {Object} serialisedData The serialised store to load.
	 * @returns {lunr.Store}
	 * @memberOf Store
	 */
	lunr.Store.load = function (serialisedData) {
	  var store = new this
	
	  store.length = serialisedData.length
	  store.store = Object.keys(serialisedData.store).reduce(function (memo, key) {
	    memo[key] = lunr.SortedSet.load(serialisedData.store[key])
	    return memo
	  }, {})
	
	  return store
	}
	
	/**
	 * Stores the given tokens in the store against the given id.
	 *
	 * @param {Object} id The key used to store the tokens against.
	 * @param {Object} tokens The tokens to store against the key.
	 * @memberOf Store
	 */
	lunr.Store.prototype.set = function (id, tokens) {
	  if (!this.has(id)) this.length++
	  this.store[id] = tokens
	}
	
	/**
	 * Retrieves the tokens from the store for a given key.
	 *
	 * @param {Object} id The key to lookup and retrieve from the store.
	 * @returns {Object}
	 * @memberOf Store
	 */
	lunr.Store.prototype.get = function (id) {
	  return this.store[id]
	}
	
	/**
	 * Checks whether the store contains a key.
	 *
	 * @param {Object} id The id to look up in the store.
	 * @returns {Boolean}
	 * @memberOf Store
	 */
	lunr.Store.prototype.has = function (id) {
	  return id in this.store
	}
	
	/**
	 * Removes the value for a key in the store.
	 *
	 * @param {Object} id The id to remove from the store.
	 * @memberOf Store
	 */
	lunr.Store.prototype.remove = function (id) {
	  if (!this.has(id)) return
	
	  delete this.store[id]
	  this.length--
	}
	
	/**
	 * Returns a representation of the store ready for serialisation.
	 *
	 * @returns {Object}
	 * @memberOf Store
	 */
	lunr.Store.prototype.toJSON = function () {
	  return {
	    store: this.store,
	    length: this.length
	  }
	}
	
	/*!
	 * lunr.stemmer
	 * Copyright (C) 2016 Oliver Nightingale
	 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
	 */
	
	/**
	 * lunr.stemmer is an english language stemmer, this is a JavaScript
	 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
	 *
	 * @module
	 * @param {String} str The string to stem
	 * @returns {String}
	 * @see lunr.Pipeline
	 */
	lunr.stemmer = (function(){
	  var step2list = {
	      "ational" : "ate",
	      "tional" : "tion",
	      "enci" : "ence",
	      "anci" : "ance",
	      "izer" : "ize",
	      "bli" : "ble",
	      "alli" : "al",
	      "entli" : "ent",
	      "eli" : "e",
	      "ousli" : "ous",
	      "ization" : "ize",
	      "ation" : "ate",
	      "ator" : "ate",
	      "alism" : "al",
	      "iveness" : "ive",
	      "fulness" : "ful",
	      "ousness" : "ous",
	      "aliti" : "al",
	      "iviti" : "ive",
	      "biliti" : "ble",
	      "logi" : "log"
	    },
	
	    step3list = {
	      "icate" : "ic",
	      "ative" : "",
	      "alize" : "al",
	      "iciti" : "ic",
	      "ical" : "ic",
	      "ful" : "",
	      "ness" : ""
	    },
	
	    c = "[^aeiou]",          // consonant
	    v = "[aeiouy]",          // vowel
	    C = c + "[^aeiouy]*",    // consonant sequence
	    V = v + "[aeiou]*",      // vowel sequence
	
	    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
	    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
	    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
	    s_v = "^(" + C + ")?" + v;                   // vowel in stem
	
	  var re_mgr0 = new RegExp(mgr0);
	  var re_mgr1 = new RegExp(mgr1);
	  var re_meq1 = new RegExp(meq1);
	  var re_s_v = new RegExp(s_v);
	
	  var re_1a = /^(.+?)(ss|i)es$/;
	  var re2_1a = /^(.+?)([^s])s$/;
	  var re_1b = /^(.+?)eed$/;
	  var re2_1b = /^(.+?)(ed|ing)$/;
	  var re_1b_2 = /.$/;
	  var re2_1b_2 = /(at|bl|iz)$/;
	  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
	  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");
	
	  var re_1c = /^(.+?[^aeiou])y$/;
	  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
	
	  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
	
	  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
	  var re2_4 = /^(.+?)(s|t)(ion)$/;
	
	  var re_5 = /^(.+?)e$/;
	  var re_5_1 = /ll$/;
	  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");
	
	  var porterStemmer = function porterStemmer(w) {
	    var   stem,
	      suffix,
	      firstch,
	      re,
	      re2,
	      re3,
	      re4;
	
	    if (w.length < 3) { return w; }
	
	    firstch = w.substr(0,1);
	    if (firstch == "y") {
	      w = firstch.toUpperCase() + w.substr(1);
	    }
	
	    // Step 1a
	    re = re_1a
	    re2 = re2_1a;
	
	    if (re.test(w)) { w = w.replace(re,"$1$2"); }
	    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }
	
	    // Step 1b
	    re = re_1b;
	    re2 = re2_1b;
	    if (re.test(w)) {
	      var fp = re.exec(w);
	      re = re_mgr0;
	      if (re.test(fp[1])) {
	        re = re_1b_2;
	        w = w.replace(re,"");
	      }
	    } else if (re2.test(w)) {
	      var fp = re2.exec(w);
	      stem = fp[1];
	      re2 = re_s_v;
	      if (re2.test(stem)) {
	        w = stem;
	        re2 = re2_1b_2;
	        re3 = re3_1b_2;
	        re4 = re4_1b_2;
	        if (re2.test(w)) {  w = w + "e"; }
	        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
	        else if (re4.test(w)) { w = w + "e"; }
	      }
	    }
	
	    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
	    re = re_1c;
	    if (re.test(w)) {
	      var fp = re.exec(w);
	      stem = fp[1];
	      w = stem + "i";
	    }
	
	    // Step 2
	    re = re_2;
	    if (re.test(w)) {
	      var fp = re.exec(w);
	      stem = fp[1];
	      suffix = fp[2];
	      re = re_mgr0;
	      if (re.test(stem)) {
	        w = stem + step2list[suffix];
	      }
	    }
	
	    // Step 3
	    re = re_3;
	    if (re.test(w)) {
	      var fp = re.exec(w);
	      stem = fp[1];
	      suffix = fp[2];
	      re = re_mgr0;
	      if (re.test(stem)) {
	        w = stem + step3list[suffix];
	      }
	    }
	
	    // Step 4
	    re = re_4;
	    re2 = re2_4;
	    if (re.test(w)) {
	      var fp = re.exec(w);
	      stem = fp[1];
	      re = re_mgr1;
	      if (re.test(stem)) {
	        w = stem;
	      }
	    } else if (re2.test(w)) {
	      var fp = re2.exec(w);
	      stem = fp[1] + fp[2];
	      re2 = re_mgr1;
	      if (re2.test(stem)) {
	        w = stem;
	      }
	    }
	
	    // Step 5
	    re = re_5;
	    if (re.test(w)) {
	      var fp = re.exec(w);
	      stem = fp[1];
	      re = re_mgr1;
	      re2 = re_meq1;
	      re3 = re3_5;
	      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
	        w = stem;
	      }
	    }
	
	    re = re_5_1;
	    re2 = re_mgr1;
	    if (re.test(w) && re2.test(w)) {
	      re = re_1b_2;
	      w = w.replace(re,"");
	    }
	
	    // and turn initial Y back to y
	
	    if (firstch == "y") {
	      w = firstch.toLowerCase() + w.substr(1);
	    }
	
	    return w;
	  };
	
	  return porterStemmer;
	})();
	
	lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
	/*!
	 * lunr.stopWordFilter
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
	 * list of stop words.
	 *
	 * The built in lunr.stopWordFilter is built using this generator and can be used
	 * to generate custom stopWordFilters for applications or non English languages.
	 *
	 * @module
	 * @param {Array} token The token to pass through the filter
	 * @returns {Function}
	 * @see lunr.Pipeline
	 * @see lunr.stopWordFilter
	 */
	lunr.generateStopWordFilter = function (stopWords) {
	  var words = stopWords.reduce(function (memo, stopWord) {
	    memo[stopWord] = stopWord
	    return memo
	  }, {})
	
	  return function (token) {
	    if (token && words[token] !== token) return token
	  }
	}
	
	/**
	 * lunr.stopWordFilter is an English language stop word list filter, any words
	 * contained in the list will not be passed through the filter.
	 *
	 * This is intended to be used in the Pipeline. If the token does not pass the
	 * filter then undefined will be returned.
	 *
	 * @module
	 * @param {String} token The token to pass through the filter
	 * @returns {String}
	 * @see lunr.Pipeline
	 */
	lunr.stopWordFilter = lunr.generateStopWordFilter([
	  'a',
	  'able',
	  'about',
	  'across',
	  'after',
	  'all',
	  'almost',
	  'also',
	  'am',
	  'among',
	  'an',
	  'and',
	  'any',
	  'are',
	  'as',
	  'at',
	  'be',
	  'because',
	  'been',
	  'but',
	  'by',
	  'can',
	  'cannot',
	  'could',
	  'dear',
	  'did',
	  'do',
	  'does',
	  'either',
	  'else',
	  'ever',
	  'every',
	  'for',
	  'from',
	  'get',
	  'got',
	  'had',
	  'has',
	  'have',
	  'he',
	  'her',
	  'hers',
	  'him',
	  'his',
	  'how',
	  'however',
	  'i',
	  'if',
	  'in',
	  'into',
	  'is',
	  'it',
	  'its',
	  'just',
	  'least',
	  'let',
	  'like',
	  'likely',
	  'may',
	  'me',
	  'might',
	  'most',
	  'must',
	  'my',
	  'neither',
	  'no',
	  'nor',
	  'not',
	  'of',
	  'off',
	  'often',
	  'on',
	  'only',
	  'or',
	  'other',
	  'our',
	  'own',
	  'rather',
	  'said',
	  'say',
	  'says',
	  'she',
	  'should',
	  'since',
	  'so',
	  'some',
	  'than',
	  'that',
	  'the',
	  'their',
	  'them',
	  'then',
	  'there',
	  'these',
	  'they',
	  'this',
	  'tis',
	  'to',
	  'too',
	  'twas',
	  'us',
	  'wants',
	  'was',
	  'we',
	  'were',
	  'what',
	  'when',
	  'where',
	  'which',
	  'while',
	  'who',
	  'whom',
	  'why',
	  'will',
	  'with',
	  'would',
	  'yet',
	  'you',
	  'your'
	])
	
	lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
	/*!
	 * lunr.trimmer
	 * Copyright (C) 2016 Oliver Nightingale
	 */
	
	/**
	 * lunr.trimmer is a pipeline function for trimming non word
	 * characters from the begining and end of tokens before they
	 * enter the index.
	 *
	 * This implementation may not work correctly for non latin
	 * characters and should either be removed or adapted for use
	 * with languages with non-latin characters.
	 *
	 * @module
	 * @param {String} token The token to pass through the filter
	 * @returns {String}
	 * @see lunr.Pipeline
	 */
	lunr.trimmer = function (token) {
	  return token.replace(/^\W+/, '').replace(/\W+$/, '')
	}
	
	lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
	/*!
	 * lunr.stemmer
	 * Copyright (C) 2016 Oliver Nightingale
	 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
	 */
	
	/**
	 * lunr.TokenStore is used for efficient storing and lookup of the reverse
	 * index of token to document ref.
	 *
	 * @constructor
	 */
	lunr.TokenStore = function () {
	  this.root = { docs: {} }
	  this.length = 0
	}
	
	/**
	 * Loads a previously serialised token store
	 *
	 * @param {Object} serialisedData The serialised token store to load.
	 * @returns {lunr.TokenStore}
	 * @memberOf TokenStore
	 */
	lunr.TokenStore.load = function (serialisedData) {
	  var store = new this
	
	  store.root = serialisedData.root
	  store.length = serialisedData.length
	
	  return store
	}
	
	/**
	 * Adds a new token doc pair to the store.
	 *
	 * By default this function starts at the root of the current store, however
	 * it can start at any node of any token store if required.
	 *
	 * @param {String} token The token to store the doc under
	 * @param {Object} doc The doc to store against the token
	 * @param {Object} root An optional node at which to start looking for the
	 * correct place to enter the doc, by default the root of this lunr.TokenStore
	 * is used.
	 * @memberOf TokenStore
	 */
	lunr.TokenStore.prototype.add = function (token, doc, root) {
	  var root = root || this.root,
	      key = token.charAt(0),
	      rest = token.slice(1)
	
	  if (!(key in root)) root[key] = {docs: {}}
	
	  if (rest.length === 0) {
	    root[key].docs[doc.ref] = doc
	    this.length += 1
	    return
	  } else {
	    return this.add(rest, doc, root[key])
	  }
	}
	
	/**
	 * Checks whether this key is contained within this lunr.TokenStore.
	 *
	 * By default this function starts at the root of the current store, however
	 * it can start at any node of any token store if required.
	 *
	 * @param {String} token The token to check for
	 * @param {Object} root An optional node at which to start
	 * @memberOf TokenStore
	 */
	lunr.TokenStore.prototype.has = function (token) {
	  if (!token) return false
	
	  var node = this.root
	
	  for (var i = 0; i < token.length; i++) {
	    if (!node[token.charAt(i)]) return false
	
	    node = node[token.charAt(i)]
	  }
	
	  return true
	}
	
	/**
	 * Retrieve a node from the token store for a given token.
	 *
	 * By default this function starts at the root of the current store, however
	 * it can start at any node of any token store if required.
	 *
	 * @param {String} token The token to get the node for.
	 * @param {Object} root An optional node at which to start.
	 * @returns {Object}
	 * @see TokenStore.prototype.get
	 * @memberOf TokenStore
	 */
	lunr.TokenStore.prototype.getNode = function (token) {
	  if (!token) return {}
	
	  var node = this.root
	
	  for (var i = 0; i < token.length; i++) {
	    if (!node[token.charAt(i)]) return {}
	
	    node = node[token.charAt(i)]
	  }
	
	  return node
	}
	
	/**
	 * Retrieve the documents for a node for the given token.
	 *
	 * By default this function starts at the root of the current store, however
	 * it can start at any node of any token store if required.
	 *
	 * @param {String} token The token to get the documents for.
	 * @param {Object} root An optional node at which to start.
	 * @returns {Object}
	 * @memberOf TokenStore
	 */
	lunr.TokenStore.prototype.get = function (token, root) {
	  return this.getNode(token, root).docs || {}
	}
	
	lunr.TokenStore.prototype.count = function (token, root) {
	  return Object.keys(this.get(token, root)).length
	}
	
	/**
	 * Remove the document identified by ref from the token in the store.
	 *
	 * By default this function starts at the root of the current store, however
	 * it can start at any node of any token store if required.
	 *
	 * @param {String} token The token to get the documents for.
	 * @param {String} ref The ref of the document to remove from this token.
	 * @param {Object} root An optional node at which to start.
	 * @returns {Object}
	 * @memberOf TokenStore
	 */
	lunr.TokenStore.prototype.remove = function (token, ref) {
	  if (!token) return
	  var node = this.root
	
	  for (var i = 0; i < token.length; i++) {
	    if (!(token.charAt(i) in node)) return
	    node = node[token.charAt(i)]
	  }
	
	  delete node.docs[ref]
	}
	
	/**
	 * Find all the possible suffixes of the passed token using tokens
	 * currently in the store.
	 *
	 * @param {String} token The token to expand.
	 * @returns {Array}
	 * @memberOf TokenStore
	 */
	lunr.TokenStore.prototype.expand = function (token, memo) {
	  var root = this.getNode(token),
	      docs = root.docs || {},
	      memo = memo || []
	
	  if (Object.keys(docs).length) memo.push(token)
	
	  Object.keys(root)
	    .forEach(function (key) {
	      if (key === 'docs') return
	
	      memo.concat(this.expand(token + key, memo))
	    }, this)
	
	  return memo
	}
	
	/**
	 * Returns a representation of the token store ready for serialisation.
	 *
	 * @returns {Object}
	 * @memberOf TokenStore
	 */
	lunr.TokenStore.prototype.toJSON = function () {
	  return {
	    root: this.root,
	    length: this.length
	  }
	}
	
	  /**
	   * export the module via AMD, CommonJS or as a browser global
	   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
	   */
	  ;(function (root, factory) {
	    if (true) {
	      // AMD. Register as an anonymous module.
	      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	    } else if (typeof exports === 'object') {
	      /**
	       * Node. Does not work with strict CommonJS, but
	       * only CommonJS-like enviroments that support module.exports,
	       * like Node.
	       */
	      module.exports = factory()
	    } else {
	      // Browser globals (root is window)
	      root.lunr = factory()
	    }
	  }(this, function () {
	    /**
	     * Just return a value to define the module export.
	     * This example returns an object, but the module
	     * can return a function as the exported value.
	     */
	    return lunr
	  }))
	})();


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Skins = function (_React$Component) {
	  _inherits(Skins, _React$Component);
	
	  function Skins(props) {
	    _classCallCheck(this, Skins);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Skins).call(this, props));
	
	    _this.state = {
	      opened: false
	    };
	    return _this;
	  }
	
	  _createClass(Skins, [{
	    key: 'handleClick',
	    value: function handleClick(skin) {
	      var onChange = this.props.onChange;
	
	
	      if (!this.state.opened) {
	        this.setState({ opened: true });
	      } else {
	        onChange(skin);
	        this.setState({ opened: false });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var skin = this.props.skin;
	      var opened = this.state.opened;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-picker-skin-swatches ' + (opened ? 'emoji-picker-skin-swatches-opened' : '') },
	          Array(6).fill().map(function (_, i) {
	            var skinTone = i + 1,
	                selected = skinTone == skin;
	
	            return _react2.default.createElement(
	              'span',
	              { key: 'skin-tone-' + skinTone, className: 'emoji-picker-skin-swatch ' + (selected ? 'emoji-picker-skin-swatch-selected' : '') },
	              _react2.default.createElement('span', {
	                onClick: function onClick() {
	                  return _this2.handleClick(skinTone);
	                },
	                className: 'emoji-picker-skin emoji-picker-skin-tone-' + skinTone })
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Skins;
	}(_react2.default.Component);
	
	exports.default = Skins;
	
	
	Skins.propTypes = {
	  onChange: _react2.default.PropTypes.func,
	  skin: _react2.default.PropTypes.number.isRequired
	};
	
	Skins.defaultProps = {
	  onChange: function onChange() {}
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=emoji-picker.js.map