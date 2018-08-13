webpackJsonp([0],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(98);

__webpack_require__(99);

var _animejs = __webpack_require__(97);

var _animejs2 = _interopRequireDefault(_animejs);

var _jquery = __webpack_require__(33);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(".arrow-link").click(function () {
    console.log('clicking');
    (0, _jquery2.default)('html, body').animate({
        scrollTop: (0, _jquery2.default)("#portfolioId-section").offset().top
    }, 500);
});

/***/ })

},[102]);