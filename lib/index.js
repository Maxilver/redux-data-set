(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash")) : factory(root["lodash"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _actions = __webpack_require__(2);

	Object.keys(_actions).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _actions[key];
	    }
	  });
	});

	var _reducer = __webpack_require__(4);

	var _reducer2 = _interopRequireDefault(_reducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reducer2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dataCollectionPush = dataCollectionPush;
	exports.dataCollectionRemove = dataCollectionRemove;
	exports.dataCollectionClean = dataCollectionClean;

	var _actionTypes = __webpack_require__(3);

	function dataCollectionPush(_ref, data) {
	  var name = _ref.name,
	      _ref$reverse = _ref.reverse,
	      reverse = _ref$reverse === undefined ? false : _ref$reverse;

	  return {
	    type: _actionTypes.DATA_SET_PUSH_ITEMS,
	    name: name,
	    data: data,
	    reverse: reverse
	  };
	}

	function dataCollectionRemove(_ref2, query) {
	  var name = _ref2.name;

	  return {
	    type: _actionTypes.DATA_SET_REMOVE_ITEMS,
	    name: name,
	    query: query
	  };
	}

	function dataCollectionClean(_ref3) {
	  var name = _ref3.name;

	  return { type: _actionTypes.DATA_SET_CLEAN_COLLECTION, name: name };
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DATA_SET_PUSH_ITEMS = exports.DATA_SET_PUSH_ITEMS = '@@redux-data-set/PUSH_ITEMS';
	var DATA_SET_REMOVE_ITEMS = exports.DATA_SET_REMOVE_ITEMS = '@@redux-data-set/REMOVE_ITEMS';

	var DATA_SET_CLEAN_COLLECTION = exports.DATA_SET_CLEAN_COLLECTION = '@@redux-data-set/CLEAN_COLLECTION';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createDataReducer;

	var _lodash = __webpack_require__(5);

	var _ = _interopRequireWildcard(_lodash);

	var _actionTypes = __webpack_require__(3);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function createDataReducer(_ref) {
	  var name = _ref.name,
	      _ref$initialState = _ref.initialState,
	      initialState = _ref$initialState === undefined ? { collection: [] } : _ref$initialState;

	  return function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    if (action.name === name) {
	      switch (action.type) {
	        case _actionTypes.DATA_SET_PUSH_ITEMS:
	          {
	            var collection = action.reverse ? _.concat(action.data, state.collection) : _.concat(state.collection, action.data);
	            return {
	              collection: collection
	            };
	          }
	        case _actionTypes.DATA_SET_REMOVE_ITEMS:
	          {
	            var _collection = _.reject(state.collection, action.query);
	            return _collection.length === state.collection.length ? state : { collection: _collection };
	          }
	        case _actionTypes.DATA_SET_CLEAN_COLLECTION:
	          {
	            return { initialState: initialState };
	          }
	        default:
	          return state;
	      }
	    }

	    return state;
	  };
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("lodash");

/***/ })
/******/ ])
});
;
//# sourceMappingURL=index.js.map