function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function chatTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"components\u002Fchat\u002Fchat.pug":"div.chat\n    div.chat__header Вы зашли в чат как #{user}\n    ul.chat__messages\n        each message in messages\n            div.message-box.left-img\n                div.chat__title\n                    span.chat__status\n                    span=message.sender\n                    span.chat__time=message.time\n                div.chat__text=message.text\n\n"};
;var locals_for_with = (locals || {});(function (messages, user) {;pug_debug_line = 1;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__header\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "Вы зашли в чат как ";
;pug_debug_line = 2;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = user) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cul class=\"chat__messages\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
// iterate messages
;(function(){
  var $$obj = messages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var message = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"message-box left-img\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__title\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__status\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.sender) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__time\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__text\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var message = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"message-box left-img\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__title\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__status\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.sender) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__time\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__text\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";}.call(this,"messages" in locals_for_with?locals_for_with.messages:typeof messages!=="undefined"?messages:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}