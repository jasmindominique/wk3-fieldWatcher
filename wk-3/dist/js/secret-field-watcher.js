"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SecretFieldWatcher = function SecretFieldWatcher(parameters) {
  _classCallCheck(this, SecretFieldWatcher);

  _defineProperty(this, "options", {});

  _defineProperty(this, "lookForFieldValue", function (evt) {
    console.log('looking');
  });

  var parametersWithDefaults = Object.assign({}, {
    name: '',
    value: '',
    backgroundColor: 'blue',
    errorMessage: ''
  }, parameters);
  var name = parametersWithDefaults.name;

  if (parametersWithDefaults.errorMessage) {
    parametersWithDefaults.backgroundColor = 'red';
  } else {
    parametersWithDefaults.backgroundColor = '';
  }

  this.options = parametersWithDefaults;
  console.log('SecretFieldWatcher ready!', parametersWithDefaults, name);

  if (name) {
    var field = document.querySelector("input[name=\"".concat(name, "\"]"));

    if (field) {
      field.addEventListener('keyup', this.lookForFieldValue);
    }
  }
};
//# sourceMappingURL=secret-field-watcher.js.map
