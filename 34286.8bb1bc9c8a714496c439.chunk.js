"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34286,7184,83518,9911,32292,65149,87530,99435,21816],{7184:function(a,t,e){e(89336),e(36947),e(95021),e(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.width,r=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],n=t.match(r);if(!n)return null;var l,u=n[0],d=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(d)?function(a,t){for(var e=0;e<a.length;e++)if(a[e].test(u))return e}(d):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&a[e].test(u))return e}(d);return l=a.valueCallback?a.valueCallback(s):s,{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(u.length)}}},a.exports=t.default},83518:function(a,t,e){e(89336),e(36947),e(95021),e(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(a.matchPattern);if(!i)return null;var r=i[0],n=t.match(a.parsePattern);if(!n)return null;var l=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(r.length)}}},a.exports=t.default},34286:function(a,t,e){e(36947),e(96054);var i=e(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(e(83518)),n=i(e(7184)),l={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/[قب]/,abbreviated:/[قب]\.م\./,wide:/(قبل|بعد) الميلاد/},defaultMatchWidth:"wide",parsePatterns:{any:[/قبل/,/بعد/]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/ر[1234]/,wide:/الربع (الأول|الثاني|الثالث|الرابع)/},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[أيفمسند]/,abbreviated:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,wide:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^يناير/i,/^فبراير/i,/^مارس/i,/^أبريل/i,/^مايو/i,/^يونيو/i,/^يوليو/i,/^أغسطس/i,/^سبتمبر/i,/^أكتوبر/i,/^نوفمبر/i,/^ديسمبر/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,any:/^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ص/,pm:/^م/,midnight:/منتصف الليل/,noon:/الظهر/,afternoon:/بعد الظهر/,morning:/في الصباح/,evening:/في المساء/,night:/في الليل/}},defaultParseWidth:"any"})};t.default=l,a.exports=t.default}}]);