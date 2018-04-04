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