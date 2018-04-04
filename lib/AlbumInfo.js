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