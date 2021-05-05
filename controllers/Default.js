'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.analyzeLayoutAsync = function analyzeLayoutAsync (req, res, next) {
  var language = req.swagger.params['language'].value;
  var pages = req.swagger.params['pages'].value;
  var readingOrder = req.swagger.params['readingOrder'].value;
  var sourcePath = req.swagger.params['sourcePath'].value;
  Default.analyzeLayoutAsync(language,pages,readingOrder,sourcePath)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.analyzeReceiptAsync = function analyzeReceiptAsync (req, res, next) {
  var includeTextDetails = req.swagger.params['includeTextDetails'].value;
  var locale = req.swagger.params['locale'].value;
  var pages = req.swagger.params['pages'].value;
  var sourcePath = req.swagger.params['sourcePath'].value;
  Default.analyzeReceiptAsync(includeTextDetails,locale,pages,sourcePath)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAnalyzeLayoutResult = function getAnalyzeLayoutResult (req, res, next) {
  var resultId = req.swagger.params['resultId'].value;
  Default.getAnalyzeLayoutResult(resultId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAnalyzeReceiptResult = function getAnalyzeReceiptResult (req, res, next) {
  var resultId = req.swagger.params['resultId'].value;
  Default.getAnalyzeReceiptResult(resultId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
