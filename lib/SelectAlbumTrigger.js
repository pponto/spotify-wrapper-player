'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectAlbumTrigger;

var _Spotify = require('./Spotify');

var _Spotify2 = _interopRequireDefault(_Spotify);

var _AlbumInfo = require('./AlbumInfo');

var _AlbumInfo2 = _interopRequireDefault(_AlbumInfo);

var _AlbumTracks = require('./AlbumTracks');

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