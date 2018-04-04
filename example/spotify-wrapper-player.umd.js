/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spotifyWrapper = __webpack_require__(11);

var _spotifyWrapper2 = _interopRequireDefault(_spotifyWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spotify = new _spotifyWrapper2.default({
  token: 'BQCFNwD3YNecIfrqQgBtFm2wHmV73wXmPDut8b29XoWRAGHR3Nb15opcWu_03WGTPj6UOcBG3WSGlQwWlYjCXK3Zh45kuAI540_ihYJx3XjaEPIivaHA6VxW4aVFqDEIcyesxA'
});

exports.default = spotify;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = playlistTrigger;
var albumTracks = document.getElementById('album-tracks');
var audioObject = null;

function playlistTrigger() {
  albumTracks.addEventListener('click', function (e) {
    var target = e.target.parentNode;

    if (target.classList.contains('active')) {
      audioObject.pause();
    } else {
      if (audioObject) {
        audioObject.pause();
      }

      audioObject = new Audio(target.getAttribute('data-track-preview'));
      audioObject.play();
      target.classList.add('active');

      audioObject.addEventListener('pause', function () {
        target.classList.remove('active');
      });
    }
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchEnterTrigger;

var _Spotify = __webpack_require__(0);

var _Spotify2 = _interopRequireDefault(_Spotify);

var _AlbumList = __webpack_require__(5);

var _AlbumList2 = _interopRequireDefault(_AlbumList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var albumList = document.getElementById('album-list');
var searchInput = document.getElementById('search-input');
var searchForm = document.getElementById('search-form');

function makeRequest() {
  _Spotify2.default.search.albums(searchInput.value).then(function (data) {
    return (0, _AlbumList2.default)(data.albums.items, albumList);
  });
}

function searchEnterTrigger() {
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    makeRequest();
  });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectAlbumTrigger;

var _Spotify = __webpack_require__(0);

var _Spotify2 = _interopRequireDefault(_Spotify);

var _AlbumInfo = __webpack_require__(4);

var _AlbumInfo2 = _interopRequireDefault(_AlbumInfo);

var _AlbumTracks = __webpack_require__(6);

var _AlbumTracks2 = _interopRequireDefault(_AlbumTracks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listAlbums = document.getElementById('album-list');
var albumInfo = document.getElementById('album-info');
var albumTracks = document.getElementById('album-tracks');

function makeRequest(albumId) {
  _Spotify2.default.album.getAlbum(albumId).then(function (data) {
    return (0, _AlbumInfo2.default)(data, albumInfo);
  }).then(function (data) {
    return (0, _AlbumTracks2.default)(data.tracks.items, albumTracks);
  });
}

function selectAlbumTrigger() {
  listAlbums.addEventListener('click', function (e) {
    var target = e.target;
    makeRequest(target.getAttribute('data-album-id'));
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbumInfo;
function createMarkup(data) {
  return "\n    <img class=\"album-image\" src=\"" + data.images[0].url + "\" alt=\"" + data.name + "\">\n    <p class=\"album-title\">" + data.name + "</p>\n    <p class=\"album-artist\">" + data.artists[0].name + "</p>\n    <p class=\"album-counter\">" + data.tracks.total + " M\xFAsicas</p>\n  ";
}

function renderAlbumInfo(data, element) {
  var markup = createMarkup(data);
  element.innerHTML = markup;

  return data;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbums;
function createMarkup(data) {
  return data.map(function (album) {
    return '\n    <div class="list-item" data-album-id="' + album.id + '">\n      <img src="' + album.images[2].url + '" alt="' + album.name + '" class="list-image" data-album-id="' + album.id + '">\n      <div class="list-description" data-album-id="' + album.id + '">\n        <p class="list-title" data-album-id="' + album.id + '">' + album.name + '</p>\n        <p class="list-subtitle" data-album-id="' + album.id + '">' + album.artists[0].name + '</p>\n      </div>\n    </div>';
  }).join('');
}

function renderAlbums(data, element) {
  var markup = createMarkup(data);

  element.innerHTML = markup;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbumTracks;

var _ConvertToHumanTime = __webpack_require__(7);

var _ConvertToHumanTime2 = _interopRequireDefault(_ConvertToHumanTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function creatingMarkup(tracks) {
  return tracks.map(function (track) {
    return '\n    <div class="music" data-track-preview="' + track.preview_url + '">\n      <p class="music-number">' + track.track_number + '</p>\n      <p class="music-title">' + track.name + '</p>\n      <p class="music-duration">' + (0, _ConvertToHumanTime2.default)(track.duration_ms) + '</p>\n    </div>';
  }).join('');
}

function renderAlbumTracks(data, element) {
  var markup = creatingMarkup(data);

  element.innerHTML = markup;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertToHumanTime;
function convertToHumanTime(duration) {
  var s = parseInt(duration / 1000 % 60, 10);
  var m = parseInt(duration / (1000 * 60) % 60, 10);

  s = s < 10 ? "0" + s : s;

  return m + ":" + s;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SearchTrigger = __webpack_require__(2);

var _SearchTrigger2 = _interopRequireDefault(_SearchTrigger);

var _SelectAlbumTrigger = __webpack_require__(3);

var _SelectAlbumTrigger2 = _interopRequireDefault(_SelectAlbumTrigger);

var _PlaylistTrigger = __webpack_require__(1);

var _PlaylistTrigger2 = _interopRequireDefault(_PlaylistTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _SearchTrigger2.default)();
(0, _SelectAlbumTrigger2.default)();
(0, _PlaylistTrigger2.default)();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;
function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(id) {
      return _this.request(_this.apiURL + "/albums/" + id);
    },
    getAlbums: function getAlbums(ids) {
      return _this.request(_this.apiURL + "/albums/?ids=" + ids);
    },
    getTracks: function getTracks(id) {
      return _this.request(_this.apiURL + "/albums/" + id + "/tracks");
    }
  };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = 'https://api.spotify.com/v1';
exports.default = API_URL;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global fetch */


var _search = __webpack_require__(12);

var _search2 = _interopRequireDefault(_search);

var _album = __webpack_require__(9);

var _album2 = _interopRequireDefault(_album);

var _config = __webpack_require__(10);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(13);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpotifyWrapper = function () {
  function SpotifyWrapper(options) {
    _classCallCheck(this, SpotifyWrapper);

    this.apiURL = options.apiURL || _config2.default;
    this.token = options.token;

    this.album = _album2.default.bind(this)();
    this.search = _search2.default.bind(this)();
  }

  _createClass(SpotifyWrapper, [{
    key: 'request',
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: '\'Bearer ' + this.token + '\''
        }
      };

      return fetch(url, headers).then(_utils2.default);
    }
  }]);

  return SpotifyWrapper;
}();

exports.default = SpotifyWrapper;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
function searcher(type, query) {
  return this.request(this.apiURL + '/search?q=' + query + '&type=' + type);
}

function search() {
  return {
    artists: searcher.bind(this, 'artist'),
    albums: searcher.bind(this, 'album'),
    tracks: searcher.bind(this, 'track'),
    playlists: searcher.bind(this, 'playlist')
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = function toJSON(data) {
  return data.json();
};
exports.default = toJSON;

/***/ })
/******/ ]);