// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../' + process.env.npm_package_config_paths_source, true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
console.info('Unit test files:\n' + testsContext.keys().toString().replace(/,/g,'\n'));

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../' + process.env.npm_package_config_paths_source, true, /^(?!.*(\.spec|.\/main)).*\.js$/);
srcContext.keys().forEach(srcContext);
console.info('Source coverage files:\n' + srcContext.keys().toString().replace(/,/g,'\n'));