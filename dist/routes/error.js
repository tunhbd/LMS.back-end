"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleError = void 0;

var _response = require("../defines/response");

const handleError = (req, res) => {
  console.log('error', req.error);
  res.status(200).json(new _response.LMSResponse(req.error, null));
};

exports.handleError = handleError;