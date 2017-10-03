!function(n){function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=1)}([,function(n,t,e){"use strict";var i=function(){function n(){this.getSongs(),this.getPlaylist(),this.bind()}return n.prototype.bind=function(){$(".introductionText").click(function(){$(".introductionText").toggleClass("noactive"),$(".introductionText").siblings().find("span").toggleClass("active")})},n.prototype.getSongs=function(){var t=this,e=parseInt(location.search.match(/\bid=([^&]*)/)[1],10);$.get("../songs.json").then(function(n){n.forEach(function(n){var t=$('\n            <li>\n            <a href="./song.html?id='+n.id+'">\n                <span class="listNumber">'+n.id+'</span>\n                <div class="listInformation">\n                <h3>'+n.name+'</h3>\n              <p>\n              <svg class="sq">\n                <use xlink:href="#icon-SQ"></use>\n              </svg>          \n              '+n.information+'</p>\n              </div>\n              <svg class="play">\n                <use xlink:href="#icon-play-circle"></use>\n              </svg>\n            </a>\n          </li>\n                 ');$("#lastestMusic").append(t)})}),n.prototype.getPlaylist=function(){$.get("../js/playlist.json").then(function(n){var i=n,o=i.filter(function(n){return n.id==e})[0],r=o.image,a=o.backgroundImage,s=o.title,c=o.upImage,u=o.upName,l=o.label,p=o.introduction;t.initText(s,u,l,p),t.PlaceImage(r,a,c)})}},n.prototype.PlaceImage=function(n,t,e){var i=$(".HeaderImg"),o=$('<img class="coverImage">'),r=$(".uploader"),a=$('<img class="upImage">');o[0].src=n,i.append(o),a[0].src=e,r.append(a),$(".playlistbackground").css("background-image","url("+t+")")},n.prototype.initText=function(n,t,e,i){$(".HeaderInformation > h3").text(n),$(".uploaderName").text(t);var o=e.split(",");$(".tag li").each(function(n){$(this).text(o[n])}),this.parseIntroduction(i)},n.prototype.parseIntroduction=function(n){var t=n.split("\n"),e=/^\[(.+)\]$/;t=t.map(function(n,t){var i=n.match(e);if(i)return{words:i[1]}});var i=$(".introductionText");t.map(function(n){if(n){var t=$("<span></span><br>");t.text(n.words),i.append(t)}})},{init:function(){new n}}}();n.exports=i}]);