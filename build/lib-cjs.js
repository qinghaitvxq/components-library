'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

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

var css_248z$1 = "* {\n  box-sizing: border-box;\n}\n\n.index_btn__QMeUg {\n  background-color: red;\n  padding: 10px;\n  color: white;\n  border-radius: 10px;\n  border-style: none;\n}";
var styles$1 = {"btn":"index_btn__QMeUg"};
styleInject(css_248z$1);

function Button({
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: styles$1.btn
  }, children);
}

var css_248z = "* {\n  box-sizing: border-box;\n}\n\n.index_wrapper__jCzXY {\n  margin: 24px auto;\n}\n\n.index_userinput__nADQE {\n  width: 100%;\n  padding: 10px;\n  border-radius: 8px;\n  border: 2px solid #828080;\n  font-size: 18px;\n  outline: none;\n}\n\n.index_suggestionsList__rjQTU {\n  width: 100%;\n  padding: 0;\n  border-radius: 8px;\n  margin-top: 8px;\n  box-shadow: 0 5px 10px rgba(74, 73, 73, 0.2);\n  list-style-type: none;\n  max-height: 200px;\n  overflow: auto;\n}\n\nli {\n  padding: 12px;\n  font-size: 18px;\n  cursor: pointer;\n}\n\nli:first-child {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nli:last-child {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\nli:not(.index_selected__88fg6, :hover):nth-child(even) {\n  background-color: #e7e7e7;\n}\n\nli:not(.index_selected__88fg6, :hover):nth-child(odd) {\n  background-color: white;\n}\n\nli:hover,\n.index_selected__88fg6 {\n  background-color: #7ba5f6;\n}";
var styles = {"wrapper":"index_wrapper__jCzXY","userinput":"index_userinput__nADQE","suggestionsList":"index_suggestionsList__rjQTU","selected":"index_selected__88fg6"};
styleInject(css_248z);

function SearchInput({
  onSearch
}) {
  const [value, setValue] = React.useState("");
  const [suggests, setSuggests] = React.useState([]);

  const onInputChange = e => {
    const inputStr = e.currentTarget.value;
    setValue(inputStr);
    onSearch(inputStr).then(list => {
      setSuggests(list);
    });
  };

  const onUserSelect = item => {
    console.log(item);
    setValue(item.title);
    setSuggests([]);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.wrapper
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    className: styles.userinput,
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165",
    autoComplete: "off",
    onChange: onInputChange,
    value: value
  }), /*#__PURE__*/React__default["default"].createElement("ul", {
    className: styles.suggestionsList
  }, suggests.map(suggest => {
    return /*#__PURE__*/React__default["default"].createElement("li", {
      onClick: onUserSelect.bind(null, suggest),
      key: suggest.id
    }, suggest.title);
  })));
}

exports.Button = Button;
exports.SearchInput = SearchInput;
