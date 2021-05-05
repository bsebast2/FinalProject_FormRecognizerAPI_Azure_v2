'use strict';


/**
 * Analyze Layout - Analyze Layout
 * Extract text and layout information from a given document. The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg', 'image/png' or 'image/tiff'. Alternatively, use 'application/json' type to specify the Url location of the document to be analyzed.  <br>  Supported languages: The Layout API is currently only available for Dutch, English, French, German, Italian, Japanese, Portuguese, Simplified Chinese and Spanish.
 *
 * language String The BCP-47 language code of the text in the document. Currently, only Afrikaans (‘af’), Albanian (‘sq’), Asturian (‘ast’), Basque (‘eu’), Bislama (‘bi’), Breton (‘br’), Catalan (‘ca’), Cebuano (‘ceb’), Chamorro (‘ch’), Cornish (‘kw’), Corsican (‘co’), Crimean Tatar - Latin script(‘crh’), Czech (‘cs’), Danish (‘da’), Dutch (‘nl’), English ('en'), Estonian (‘et’), Fijian (‘fj’), Filipino (‘fil’), Finnish (‘fi’), French (‘fr’), Friulian (‘fur’), Galician (‘gl’), German (‘de’), Gilbertese (‘gil’), Greenlandic (‘kl’), Haitian Creole (‘ht’), Hani (‘hni’), Hmong Daw (‘mww’), Hungarian (‘hu’), Indonesian (‘id’), Interlingua (‘ia’), Inuktitut (‘iu’), Irish (‘ga’), Italian (‘it’), Japanese (‘ja’), Javanese (‘jv’), Kabuverdianu (‘kea’), Kachin (‘kac’), Kara-Kalpak (‘kaa’), Kashubian (‘csb’), Khasi (‘kha’), Korean (‘ko’), Kurdish - Latin script (‘ku’), K’iche’ (‘quc’), Luxembourgish (‘lb’), Malay (‘ms’), Manx (‘gv’), Neapolitan (‘nap’), Norwegian (‘no’), Occitan (‘oc’), Polish (‘pl’), Portuguese (‘pt’), Romansh (‘rm’), Scots (‘sco’), Scottish Gaelic (‘gd’), simplified Chinese (‘zh-Hans’), Slovenian (‘sl’), Spanish (‘es’), Swahili (‘sw’), Swedish (‘sv’), Tatar - Latin script (‘tt’), Tetum (‘tet’), traditional Chinese (‘zh-Hant’), Turkish (‘tr’), Upper Sorbian (‘hsb’), Uzbek (‘uz’), Volapük (‘vo’), Walser (‘wae’), Western Frisian (‘fy’), Yucatec Maya (‘yua’), Zhuang (‘za’) and Zulu (‘zu’) are supported (print – seventy-three languages and handwritten – English only). Layout supports auto language identification and multilanguage documents, so only provide a language code if you would like to force the documented to be processed as that specific language. (optional)
 * pages String The page selection only leveraged for multi-page PDF and TIFF documents. Accepted input include single pages (e.g.'1, 2' -> pages 1 and 2 will be processed), finite (e.g. '2-5' -> pages 2 to 5 will be processed) and open-ended ranges (e.g. '5-' -> all the pages from page 5 will be processed & e.g. '-10' -> pages 1 to 10 will be processed). All of these can be mixed together and ranges are allowed to overlap (eg. '-5, 1, 3, 5-10' - pages 1 to 10 will be processed). The service will accept the request if it can process at least one page of the document (e.g. using '5-100' on a 5 page document is a valid input where page 5 will be processed). If no page range is provided, the entire document will be processed. (optional)
 * readingOrder String Optional parameter to specify which reading order algorithm should be applied when ordering the extract text elements. Can be either 'basic' or 'natural'. Will default to basic if not specified (optional)
 * sourcePath SourcePath .json, .pdf, .jpg, .png or .tiff type file stream. (optional)
 * returns AnalyzeOperationResult
 **/
exports.analyzeLayoutAsync = function(language,pages,readingOrder,sourcePath) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "analyzeResult" : {
    "pageResults" : [ {
      "tables" : [ {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      }, {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      } ],
      "keyValuePairs" : [ {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      }, {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      } ],
      "page" : 1,
      "clusterId" : 0
    }, {
      "tables" : [ {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      }, {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      } ],
      "keyValuePairs" : [ {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      }, {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      } ],
      "page" : 1,
      "clusterId" : 0
    } ],
    "documentResults" : [ {
      "pageRange" : [ 1, 1 ],
      "docType" : "docType",
      "fields" : {
        "key" : {
          "boundingBox" : "",
          "valueTime" : "2000-01-23T04:56:07.000+00:00",
          "valueNumber" : 1.024645700144157789424070870154537260532379150390625,
          "valueDate" : "2000-01-23T04:56:07.000+00:00",
          "valueArray" : [ null, null ],
          "type" : { },
          "valuePhoneNumber" : "valuePhoneNumber",
          "valueObject" : { },
          "valueString" : "valueString",
          "elements" : [ null, null ],
          "text" : "text",
          "page" : 1,
          "valueInteger" : 1
        }
      }
    }, {
      "pageRange" : [ 1, 1 ],
      "docType" : "docType",
      "fields" : {
        "key" : {
          "boundingBox" : "",
          "valueTime" : "2000-01-23T04:56:07.000+00:00",
          "valueNumber" : 1.024645700144157789424070870154537260532379150390625,
          "valueDate" : "2000-01-23T04:56:07.000+00:00",
          "valueArray" : [ null, null ],
          "type" : { },
          "valuePhoneNumber" : "valuePhoneNumber",
          "valueObject" : { },
          "valueString" : "valueString",
          "elements" : [ null, null ],
          "text" : "text",
          "page" : 1,
          "valueInteger" : 1
        }
      }
    } ],
    "readResults" : [ {
      "unit" : "pixel",
      "width" : 0.146581298050294517310021547018550336360931396484375,
      "angle" : 36.98842259053452607986400835216045379638671875,
      "page" : 1,
      "lines" : [ {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      }, {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      } ],
      "height" : 0.59621339166831821554382031536079011857509613037109375
    }, {
      "unit" : "pixel",
      "width" : 0.146581298050294517310021547018550336360931396484375,
      "angle" : 36.98842259053452607986400835216045379638671875,
      "page" : 1,
      "lines" : [ {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      }, {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      } ],
      "height" : 0.59621339166831821554382031536079011857509613037109375
    } ],
    "version" : "version",
    "errors" : [ {
      "message" : "message"
    }, {
      "message" : "message"
    } ]
  },
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "lastUpdatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Analyze Receipt - Analyze Receipt
 * Extract field text and semantic values from a given receipt document.  The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg', 'image/png' or 'image/tiff'. Alternatively, use 'application/json' type to specify the Url location of the document to be analyzed.    Note: this technology is currently only available for English receipts, with one receipt per page.
 *
 * includeTextDetails Boolean Include text lines and element references in the result.  Default: false. (optional)
 * locale String Locale of the receipt. Supported locales: en-AU, en-CA, en-GB, en-IN, en-US. (optional)
 * pages String The page selection for multi-page PDF and TIFF documents, to extract Receipt information from individual pages and a range of pages (like page 2, and pages 5-7) by entering the page numbers and ranges separated by commas (e.g. '2, 5-7'). If not set, all pages will  be processed. (optional)
 * sourcePath SourcePath Document containing the receipt image(s) to be analyzed. The POST body should be the raw image binary or the image URL  in JSON.<br />Additional requirements:<ul>    <li>Image format must be one of JPEG, PNG, PDF or TIFF.</li>    <li>For PDF and TIFF, only the first 200 pages are processed. <ul>        <li>For free tier subscribers, only the first 2 pages are processed.</li>      </ul>    </li>    <li>Image file size must be less than 50 MB.</li>    <li>Image dimensions must be at least 50 x 50 pixels and at most 10000 x 10000 pixels. PDF dimensions must be at most      17 x 17 inches, corresponding to Legal or A3 paper sizes and smaller.</li>  </ul> (optional)
 * returns AnalyzeOperationResult
 **/
exports.analyzeReceiptAsync = function(includeTextDetails,locale,pages,sourcePath) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "analyzeResult" : {
    "pageResults" : [ {
      "tables" : [ {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      }, {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      } ],
      "keyValuePairs" : [ {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      }, {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      } ],
      "page" : 1,
      "clusterId" : 0
    }, {
      "tables" : [ {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      }, {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      } ],
      "keyValuePairs" : [ {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      }, {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      } ],
      "page" : 1,
      "clusterId" : 0
    } ],
    "documentResults" : [ {
      "pageRange" : [ 1, 1 ],
      "docType" : "docType",
      "fields" : {
        "key" : {
          "boundingBox" : "",
          "valueTime" : "2000-01-23T04:56:07.000+00:00",
          "valueNumber" : 1.024645700144157789424070870154537260532379150390625,
          "valueDate" : "2000-01-23T04:56:07.000+00:00",
          "valueArray" : [ null, null ],
          "type" : { },
          "valuePhoneNumber" : "valuePhoneNumber",
          "valueObject" : { },
          "valueString" : "valueString",
          "elements" : [ null, null ],
          "text" : "text",
          "page" : 1,
          "valueInteger" : 1
        }
      }
    }, {
      "pageRange" : [ 1, 1 ],
      "docType" : "docType",
      "fields" : {
        "key" : {
          "boundingBox" : "",
          "valueTime" : "2000-01-23T04:56:07.000+00:00",
          "valueNumber" : 1.024645700144157789424070870154537260532379150390625,
          "valueDate" : "2000-01-23T04:56:07.000+00:00",
          "valueArray" : [ null, null ],
          "type" : { },
          "valuePhoneNumber" : "valuePhoneNumber",
          "valueObject" : { },
          "valueString" : "valueString",
          "elements" : [ null, null ],
          "text" : "text",
          "page" : 1,
          "valueInteger" : 1
        }
      }
    } ],
    "readResults" : [ {
      "unit" : "pixel",
      "width" : 0.146581298050294517310021547018550336360931396484375,
      "angle" : 36.98842259053452607986400835216045379638671875,
      "page" : 1,
      "lines" : [ {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      }, {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      } ],
      "height" : 0.59621339166831821554382031536079011857509613037109375
    }, {
      "unit" : "pixel",
      "width" : 0.146581298050294517310021547018550336360931396484375,
      "angle" : 36.98842259053452607986400835216045379638671875,
      "page" : 1,
      "lines" : [ {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      }, {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      } ],
      "height" : 0.59621339166831821554382031536079011857509613037109375
    } ],
    "version" : "version",
    "errors" : [ {
      "message" : "message"
    }, {
      "message" : "message"
    } ]
  },
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "lastUpdatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Analyze Layout - Get Analyze Layout Result
 * Track the progress and obtain the result of the analyze layout operation
 *
 * resultId String Format - uuid. Analyze operation result identifier.
 * returns AnalyzeOperationResult
 **/
exports.getAnalyzeLayoutResult = function(resultId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "analyzeResult" : {
    "pageResults" : [ {
      "tables" : [ {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      }, {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      } ],
      "keyValuePairs" : [ {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      }, {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      } ],
      "page" : 1,
      "clusterId" : 0
    }, {
      "tables" : [ {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      }, {
        "cells" : [ {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        }, {
          "rowSpan" : 1,
          "columnSpan" : 1,
          "boundingBox" : "",
          "isHeader" : false,
          "elements" : [ null, null ],
          "rowIndex" : 0,
          "columnIndex" : 0,
          "text" : "text",
          "isFooter" : false
        } ],
        "columns" : 1,
        "rows" : 1
      } ],
      "keyValuePairs" : [ {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      }, {
        "label" : "label",
        "value" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        },
        "key" : {
          "boundingBox" : "",
          "elements" : [ { }, { } ],
          "text" : "text"
        }
      } ],
      "page" : 1,
      "clusterId" : 0
    } ],
    "documentResults" : [ {
      "pageRange" : [ 1, 1 ],
      "docType" : "docType",
      "fields" : {
        "key" : {
          "boundingBox" : "",
          "valueTime" : "2000-01-23T04:56:07.000+00:00",
          "valueNumber" : 1.024645700144157789424070870154537260532379150390625,
          "valueDate" : "2000-01-23T04:56:07.000+00:00",
          "valueArray" : [ null, null ],
          "type" : { },
          "valuePhoneNumber" : "valuePhoneNumber",
          "valueObject" : { },
          "valueString" : "valueString",
          "elements" : [ null, null ],
          "text" : "text",
          "page" : 1,
          "valueInteger" : 1
        }
      }
    }, {
      "pageRange" : [ 1, 1 ],
      "docType" : "docType",
      "fields" : {
        "key" : {
          "boundingBox" : "",
          "valueTime" : "2000-01-23T04:56:07.000+00:00",
          "valueNumber" : 1.024645700144157789424070870154537260532379150390625,
          "valueDate" : "2000-01-23T04:56:07.000+00:00",
          "valueArray" : [ null, null ],
          "type" : { },
          "valuePhoneNumber" : "valuePhoneNumber",
          "valueObject" : { },
          "valueString" : "valueString",
          "elements" : [ null, null ],
          "text" : "text",
          "page" : 1,
          "valueInteger" : 1
        }
      }
    } ],
    "readResults" : [ {
      "unit" : "pixel",
      "width" : 0.146581298050294517310021547018550336360931396484375,
      "angle" : 36.98842259053452607986400835216045379638671875,
      "page" : 1,
      "lines" : [ {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      }, {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      } ],
      "height" : 0.59621339166831821554382031536079011857509613037109375
    }, {
      "unit" : "pixel",
      "width" : 0.146581298050294517310021547018550336360931396484375,
      "angle" : 36.98842259053452607986400835216045379638671875,
      "page" : 1,
      "lines" : [ {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      }, {
        "boundingBox" : "",
        "words" : [ {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        }, {
          "boundingBox" : "",
          "confidence" : { },
          "text" : "text"
        } ],
        "text" : "text"
      } ],
      "height" : 0.59621339166831821554382031536079011857509613037109375
    } ],
    "version" : "version",
    "errors" : [ {
      "message" : "message"
    }, {
      "message" : "message"
    } ]
  },
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "lastUpdatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Analyze Receipt - Get Analyze Receipt Result
 * Query the status and retrieve the result of an <a href=\"/docs/services/form-recognizer-api-v2-preview/operations/AnalyzeReceiptAsync\">Analyze Receipt</a> operation. The URL to this interface can be obtained from the 'Operation-Location' header in the <a href=\"/docs/services/form-recognizer-api-v2-preview/operations/AnalyzeReceiptAsync\">Analyze Receipt</a> response.  We recommend calling this operation no more than once a second.
 *
 * resultId String Format - uuid. Analyze operation result identifier.
 * returns AnalyzeOperationResult
 **/
exports.getAnalyzeReceiptResult = function(resultId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\r\n  \"status\": \"succeeded\",\r\n  \"createdDateTime\": \"2020-05-13T07:29:49Z\",\r\n  \"lastUpdatedDateTime\": \"2020-05-13T07:29:57Z\",\r\n  \"analyzeResult\": {\r\n      \"version\": \"2.1.0\",\r\n      \"readResults\": [\r\n          {\r\n              \"page\": 1,\r\n              \"angle\": 0.2816,\r\n              \"width\": 600,\r\n              \"height\": 1172,\r\n              \"unit\": \"pixel\"\r\n          }\r\n      ],\r\n      \"documentResults\": [\r\n          {\r\n              \"docType\": \"prebuilt:receipt\",\r\n              \"pageRange\": [\r\n                  1,\r\n                  1\r\n              ],\r\n              \"fields\": {\r\n                  \"ReceiptType\": {\r\n                      \"type\": \"string\",\r\n                      \"valueString\": \"Itemized\",\r\n                      \"confidence\": 0.878\r\n                  },\r\n                  \"MerchantName\": {\r\n                      \"type\": \"string\",\r\n                      \"valueString\": \"Contoso\",\r\n                      \"text\": \"Contoso\",\r\n                      \"boundingBox\": [\r\n                          150.1,\r\n                          97.9,\r\n                          452.2,\r\n                          120.4,\r\n                          439.1,\r\n                          296.5,\r\n                          137,\r\n                          274\r\n                      ],\r\n                      \"page\": 1,\r\n                      \"confidence\": 0.669\r\n                  },\r\n                  \"MerchantAddress\": {\r\n                      \"type\": \"string\",\r\n                      \"valueString\": \"123 Main Street Redmond, WA 98052\",\r\n                      \"text\": \"123 Main Street Redmond, WA 98052\",\r\n                      \"boundingBox\": [\r\n                          132.8,\r\n                          293,\r\n                          321.8,\r\n                          295.1,\r\n                          321,\r\n                          369.1,\r\n                          132,\r\n                          367\r\n                      ],\r\n                      \"page\": 1,\r\n                      \"confidence\": 0.994\r\n                  },\r\n                  \"MerchantPhoneNumber\": {\r\n                      \"type\": \"phoneNumber\",\r\n                      \"text\": \"123-456-7890\",\r\n                      \"boundingBox\": [\r\n                          129,\r\n                          427,\r\n                          263,\r\n                          429,\r\n                          262,\r\n                          456,\r\n                          128,\r\n                          454\r\n                      ],\r\n                      \"page\": 1,\r\n                      \"confidence\": 0.995\r\n                  },\r\n                  \"TransactionDate\": {\r\n                      \"type\": \"date\",\r\n                      \"valueDate\": \"2019-06-10\",\r\n                      \"text\": \"6/10/2019\",\r\n                      \"boundingBox\": [\r\n                          128,\r\n                          520,\r\n                          210,\r\n                          521,\r\n                          210,\r\n                          551,\r\n                          128,\r\n                          550\r\n                      ],\r\n                      \"page\": 1,\r\n                      \"confidence\": 0.995\r\n                  },\r\n                  \"TransactionTime\": {\r\n                      \"type\": \"time\",\r\n                      \"valueTime\": \"13:59:00\",\r\n                      \"text\": \"13:59\",\r\n                      \"boundingBox\": [\r\n                          216,\r\n                          521,\r\n                          269,\r\n                          521,\r\n                          269,\r\n                          550,\r\n                          216,\r\n                          551\r\n                      ],\r\n                      \"page\": 1,\r\n                      \"confidence\": 0.995\r\n                  },\r\n                  \"Items\": {\r\n                      \"type\": \"array\",\r\n                      \"valueArray\": [\r\n                          {\r\n                              \"type\": \"object\",\r\n                              \"valueObject\": {\r\n                                  \"Quantity\": {\r\n                                      \"type\": \"number\",\r\n                                      \"valueNumber\": 1,\r\n                                      \"text\": \"1\",\r\n                                      \"boundingBox\": [\r\n                                          140,\r\n                                          664,\r\n                                          149,\r\n                                          664,\r\n                                          149,\r\n                                          691,\r\n                                          140,\r\n                                          691\r\n                                      ],\r\n                                      \"page\": 1,\r\n                                      \"confidence\": 0.922\r\n                                  },\r\n                                  \"Name\": {\r\n                                      \"type\": \"string\",\r\n                                      \"valueString\": \"Surface Pro 6\",\r\n                                      \"text\": \"Surface Pro 6\",\r\n                                      \"boundingBox\": [\r\n                                          154,\r\n                                          664,\r\n                                          289,\r\n                                          664,\r\n                                          289,\r\n                                          691,\r\n                                          154,\r\n                                          691\r\n                                      ],\r\n                                      \"page\": 1,\r\n                                      \"confidence\": 0.956\r\n                                  },\r\n                                  \"TotalPrice\": {\r\n                                      \"type\": \"number\",\r\n                                      \"valueNumber\": 999,\r\n                                      \"text\": \"$999.00\",\r\n                                      \"boundingBox\": [\r\n                                          398,\r\n                                          762.7,\r\n                                          482,\r\n                                          764.5,\r\n                                          481.4,\r\n                                          791.8,\r\n                                          397.4,\r\n                                          790\r\n                                      ],\r\n                                      \"page\": 1,\r\n                                      \"confidence\": 0.984\r\n                                  }\r\n                              }\r\n                          },\r\n                          ...\r\n                      ]\r\n                  },\r\n                  \"Subtotal\": {\r\n                      \"type\": \"number\",\r\n                      \"valueNumber\": 1098.99,\r\n                      \"text\": \"1098.99\",\r\n                      \"boundingBox\": [\r\n                          407,\r\n                          962,\r\n                          483,\r\n                          960,\r\n                          484,\r\n                          987,\r\n                          408,\r\n                          989\r\n                      ],\r\n                      \"page\": 1,\r\n                      \"confidence\": 0.987\r\n                  },\r\n                  \"Total\": {\r\n                      \"type\": \"number\",\r\n                      \"valueNumber\": 1203.39,\r\n                      \"text\": \"1203.39\",\r\n                      \"boundingBox\": [\r\n                          404,\r\n                          1105,\r\n                          479,\r\n                          1112,\r\n                          476,\r\n                          1139,\r\n                          402,\r\n                          1132\r\n                      ],\r\n                      \"page\": 1,\r\n                      \"confidence\": 0.959\r\n                  },\r\n                  \"Tax\": {\r\n                      \"type\": \"number\",\r\n                      \"valueNumber\": 104.4,\r\n                      \"text\": \"$104.40\",\r\n                      \"boundingBox\": [\r\n                          415,\r\n                          1010,\r\n                          484,\r\n                          1009,\r\n                          483,\r\n                          1036,\r\n                          417,\r\n                          1038\r\n                      ],\r\n                      \"page\": 1,\r\n                      \"confidence\": 0.615\r\n                  }\r\n              }\r\n          }\r\n      ]\r\n  }\r\n}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

