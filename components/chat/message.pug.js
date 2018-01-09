function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function messageTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"components\u002Fchat\u002Fmessage.pug":"- var date = new Date(time);\n- var hours = date.getHours();\n- var minutes = date.getMinutes();\n\n\nli(id=key).message-box.left-img\n\tdiv.chat__title\n\t\tspan.chat__status\n\t\tspan #{user}\n\t\tspan.chat__time #{hours \u003E 10 ? hours : '0' + hours}:#{minutes \u003E 10 ? minutes : '0' + minutes}\n\t\tdiv.chat__text #{text}\n\t\t\tif url\n\t\t\t\ta(target='blank', href=url)\n\t\t\t\t\timg.chat__img(src=url)\n"};
;var locals_for_with = (locals || {});(function (Date, key, text, time, url, user) {;pug_debug_line = 1;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
var date = new Date(time);
;pug_debug_line = 2;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
var hours = date.getHours();
;pug_debug_line = 3;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
var minutes = date.getMinutes();
;pug_debug_line = 6;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"message-box left-img\""+pug_attr("id", key, true, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__title\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__status\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 9;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = user) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__time\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = hours > 10 ? hours : '0' + hours) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + ":";
;pug_debug_line = 10;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = minutes > 10 ? minutes : '0' + minutes) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__text\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = text) ? "" : pug_interp));
;pug_debug_line = 12;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
if (url) {
;pug_debug_line = 13;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + "\u003Ca" + (" target=\"blank\""+pug_attr("href", url, true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "components\u002Fchat\u002Fmessage.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"chat__img\""+pug_attr("src", url, true, false)) + "\u002F\u003E\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";}.call(this,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"key" in locals_for_with?locals_for_with.key:typeof key!=="undefined"?key:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined,"time" in locals_for_with?locals_for_with.time:typeof time!=="undefined"?time:undefined,"url" in locals_for_with?locals_for_with.url:typeof url!=="undefined"?url:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}