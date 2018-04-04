'use strict';

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