function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "* {\n  box-sizing: border-box;\n}\n\n.index_btn__QMeUg {\n  background-color: #366cd6;\n  padding: 10px;\n  color: white;\n  border-radius: 10px;\n  border-style: none;\n}";
var styles$1 = {
  "btn": "index_btn__QMeUg"
};
styleInject(css_248z$1);

function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("button", {
    className: styles$1.btn
  }, children);
}

var css_248z = "* {\n  box-sizing: border-box;\n}\n\n.index_wrapper__jCzXY {\n  margin: 24px auto;\n}\n\n.index_userinput__nADQE {\n  width: 100%;\n  padding: 10px;\n  border-radius: 8px;\n  border: 2px solid #828080;\n  font-size: 18px;\n  outline: none;\n}\n\n.index_suggestionsList__rjQTU {\n  width: 100%;\n  padding: 0;\n  border-radius: 8px;\n  margin-top: 8px;\n  box-shadow: 0 5px 10px rgba(74, 73, 73, 0.2);\n  list-style-type: none;\n  max-height: 200px;\n  overflow: auto;\n}\n\nli {\n  padding: 12px;\n  font-size: 18px;\n  cursor: pointer;\n}\n\nli:first-child {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nli:last-child {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nli:not(.index_selected__88fg6, :hover):nth-child(even) {\n  background-color: #e7e7e7;\n}\n\nli:not(.index_selected__88fg6, :hover):nth-child(odd) {\n  background-color: white;\n}\n\nli:hover,\n.index_selected__88fg6 {\n  background-color: #7ba5f6;\n}";
var styles = {
  "wrapper": "index_wrapper__jCzXY",
  "userinput": "index_userinput__nADQE",
  "suggestionsList": "index_suggestionsList__rjQTU",
  "selected": "index_selected__88fg6"
};
styleInject(css_248z);

function SearchInput(_ref2) {
  var onSearch = _ref2.onSearch;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      suggests = _useState4[0],
      setSuggests = _useState4[1];

  var onInputChange = function onInputChange(e) {
    var inputStr = e.currentTarget.value;
    setValue(inputStr);
    onSearch(inputStr).then(function (list) {
      setSuggests(list);
    });
  };

  var onUserSelect = function onUserSelect(item) {
    console.log(item);
    setValue(item.title);
    setSuggests([]);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles.wrapper
  }, /*#__PURE__*/React.createElement("input", {
    className: styles.userinput,
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165",
    autoComplete: "off",
    onChange: onInputChange,
    value: value
  }), /*#__PURE__*/React.createElement("ul", {
    className: styles.suggestionsList
  }, suggests.map(function (suggest) {
    return /*#__PURE__*/React.createElement("li", {
      onClick: onUserSelect.bind(null, suggest),
      key: suggest.id
    }, suggest.title);
  })));
}

export { Button, SearchInput };
