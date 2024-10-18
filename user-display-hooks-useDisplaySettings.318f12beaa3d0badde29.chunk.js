"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59015],{80724:function(e,n,a){a.r(n),a.d(n,{useDisplaySettings:function(){return b}});var t=a(63696),r=a(22622),s=a(46782),i=a(14847),o=a(39641),l=a(82885),u=function(e,n,a,t){return new(a||(a=Promise))((function(r,s){function i(e){try{l(t.next(e))}catch(e){s(e)}}function o(e){try{l(t.throw(e))}catch(e){s(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,o)}l((t=t.apply(e,n||[])).next())}))},c=function(e,n){var a,t,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(l){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(i=0)),i;)try{if(a=1,t&&(r=2&o[0]?t.return:o[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,o[1])).done)return r;switch(t=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e],t=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},d=function(e,n){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var t,r,s=a.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(t=s.next()).done;)i.push(t.value)}catch(e){r={error:e}}finally{try{t&&!t.done&&(a=s.return)&&a.call(s)}finally{if(r)throw r.error}}return i};function b(e){var n=this,a=e.userId,r=d((0,t.useState)(!0),2),s=r[0],o=r[1],l=d((0,t.useState)(),2),b=l[0],f=l[1],g=d((0,t.useState)(),2),y=g[0],m=g[1],v=(0,i.gf)(),S=v.__legacyApiClient__,I=v.user;return(0,t.useEffect)((function(){if(a&&I&&S)return o(!0),u(n,void 0,void 0,(function(){var e;return c(this,(function(n){switch(n.label){case 0:return[4,p({api:S,currentUser:I,userId:a})];case 1:return e=n.sent(),m(e.displaySettings),f(e.userSettings),o(!1),[2]}}))})),function(){o(!1)}}),[S,I,a]),{displaySettings:y,loading:s,saveDisplaySettings:(0,t.useCallback)((function(e){return u(n,void 0,void 0,(function(){return c(this,(function(n){return a&&b&&S?[2,h({api:S,newDisplaySettings:e,userSettings:b,userId:a})]:[2]}))}))}),[S,b,a])}}function p(e){return u(this,arguments,void 0,(function(e){var n,a,t,r,i,o=e.currentUser,u=e.userId,d=e.api;return c(this,(function(e){switch(e.label){case 0:return n=u&&u!==(null==o?void 0:o.Id)?new l.UserSettings:l.currentSettings,u&&u!==(null==o?void 0:o.Id)?[3,1]:(t=o,[3,3]);case 1:return[4,d.getUser(u)];case 2:t=e.sent(),e.label=3;case 3:return a=t,[4,n.setUserInfo(u,d)];case 4:return e.sent(),[2,{displaySettings:{customCss:n.customCss(),dashboardTheme:n.dashboardTheme()||"auto",dateTimeLocale:n.dateTimeLocale()||"auto",disableCustomCss:Boolean(n.disableCustomCss()),displayMissingEpisodes:null!==(i=null===(r=null==a?void 0:a.Configuration)||void 0===r?void 0:r.DisplayMissingEpisodes)&&void 0!==i&&i,enableBlurHash:Boolean(n.enableBlurhash()),enableFasterAnimation:Boolean(n.enableFastFadein()),enableItemDetailsBanner:Boolean(n.detailsBanner()),enableLibraryBackdrops:Boolean(n.enableBackdrops()),enableLibraryThemeSongs:Boolean(n.enableThemeSongs()),enableLibraryThemeVideos:Boolean(n.enableThemeVideos()),enableRewatchingInNextUp:Boolean(n.enableRewatchingInNextUp()),episodeImagesInNextUp:Boolean(n.useEpisodeImagesInNextUpAndResume()),language:n.language()||"auto",layout:s.A.getSavedLayout()||"auto",libraryPageSize:n.libraryPageSize(),maxDaysForNextUp:n.maxDaysForNextUp(),screensaver:n.screensaver()||"none",screensaverInterval:n.backdropScreensaverInterval(),theme:n.theme()},userSettings:n}]}}))}))}function h(e){return u(this,arguments,void 0,(function(e){var n,a,t=e.api,i=e.newDisplaySettings,l=e.userSettings,u=e.userId;return c(this,(function(e){switch(e.label){case 0:return[4,t.getUser(u)];case 1:return n=e.sent(),r.g.supports("displaylanguage")&&l.language(f(i.language)),l.customCss(f(i.customCss)),l.dashboardTheme(f(i.dashboardTheme)),l.dateTimeLocale(f(i.dateTimeLocale)),l.disableCustomCss(i.disableCustomCss),l.enableBlurhash(i.enableBlurHash),l.enableFastFadein(i.enableFasterAnimation),l.detailsBanner(i.enableItemDetailsBanner),l.enableBackdrops(i.enableLibraryBackdrops),l.enableThemeSongs(i.enableLibraryThemeSongs),l.enableThemeVideos(i.enableLibraryThemeVideos),l.enableRewatchingInNextUp(i.enableRewatchingInNextUp),l.useEpisodeImagesInNextUpAndResume(i.episodeImagesInNextUp),l.libraryPageSize(i.libraryPageSize),l.maxDaysForNextUp(i.maxDaysForNextUp),l.screensaver(f(i.screensaver)),l.backdropScreensaverInterval(i.screensaverInterval),l.theme(i.theme),s.A.setLayout(f(i.layout)),a=[o.A.setTheme(l.theme())],n.Id&&n.Configuration&&(n.Configuration.DisplayMissingEpisodes=i.displayMissingEpisodes,a.push(t.updateUserConfiguration(n.Id,n.Configuration))),[4,Promise.all(a)];case 2:return e.sent(),[2]}}))}))}function f(e){return/^(auto|none)$/.test(e)?"":e}}}]);