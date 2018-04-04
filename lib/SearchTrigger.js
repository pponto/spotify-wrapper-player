'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchEnterTrigger;

var _Spotify = require('./Spotify');

var _Spotify2 = _interopRequireDefault(_Spotify);

var _AlbumList = require('./AlbumList');

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