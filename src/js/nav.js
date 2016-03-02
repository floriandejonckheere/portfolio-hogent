/**
 * nav.js
 *
 * Select correct navigation link
 *
 * */

$(document).ready(function() {
  var url = window.location.href.split('/');
  var segment = url[url.length - 1];
  var page = segment.substring(0, (segment.indexOf('#') == -1 ? segment.length : segment.indexOf('#')));
console.log(segment.indexOf('#'));
  $('nav ul li a[href="' + page + '"]').parent('li').addClass('active');
});
