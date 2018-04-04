'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spotifyWrapper = require('spotify-wrapper');

var _spotifyWrapper2 = _interopRequireDefault(_spotifyWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spotify = new _spotifyWrapper2.default({
  token: 'BQCFNwD3YNecIfrqQgBtFm2wHmV73wXmPDut8b29XoWRAGHR3Nb15opcWu_03WGTPj6UOcBG3WSGlQwWlYjCXK3Zh45kuAI540_ihYJx3XjaEPIivaHA6VxW4aVFqDEIcyesxA'
});

exports.default = spotify;