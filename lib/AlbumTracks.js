'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderAlbumTracks;

var _ConvertToHumanTime = require('./ConvertToHumanTime');

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