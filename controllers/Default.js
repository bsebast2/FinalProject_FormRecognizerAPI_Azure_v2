'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

const { FormRecognizerClient, FormTrainingClient, AzureKeyCredential } = require("@azure/ai-form-recognizer");
const fs = require("fs");

// You will need to set these environment variables or edit the following values
//const endpoint = "<paste-your-form-recognizer-endpoint-here>";
//const apiKey = "<paste-your-form-recognizer-key-here>";

const endpoint = "https://sysintegrationfinalproject.cognitiveservices.azure.com/";
const apiKey1 = "436edc76e74a46f881674500919fdae1";
const apiKey2 = "e62f9845fa5e4b26b6824ce0daa80e2e";

const apiKey = "436edc76e74a46f881674500919fdae1";

//Authenticate a client object using the subscription variables you defined. 
//You'll use an AzureKeyCredential object, so that if needed, you can update the API key 
//without creating new client objects. You'll also create a training client object.
const trainingClient = new FormTrainingClient(endpoint, new AzureKeyCredential(apiKey));
const client = new FormRecognizerClient(endpoint, new AzureKeyCredential(apiKey));

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
