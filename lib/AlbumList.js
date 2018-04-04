'use strict';

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