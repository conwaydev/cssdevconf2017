"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/cssdevconf2017/index.html","0739c190ff496663a60a13fac5b5853f"],["/cssdevconf2017/static/css/main.d49ed66a.css","023309351f6b09c4ddc8160c0d62d886"],["/cssdevconf2017/static/media/C78paWQV4AAU3v0.b39e3d35.jpg","b39e3d35e37a22952000a41943dd1201"],["/cssdevconf2017/static/media/Screen Shot 2017-10-12 at 5.37.22 PM.711b0aa4.png","711b0aa4f0f165428caf8748f78653e9"],["/cssdevconf2017/static/media/Screen Shot 2017-10-12 at 5.37.34 PM.c4019782.png","c4019782f9710758a841c1cfb4cd44af"],["/cssdevconf2017/static/media/Screen Shot 2017-10-12 at 5.37.43 PM.d7fa6bff.png","d7fa6bff6c823db4437afb2e6a114372"],["/cssdevconf2017/static/media/Screen Shot 2017-10-13 at 10.41.26 AM.5961c4a3.png","5961c4a372ecc24cd75399f2f57d6f08"],["/cssdevconf2017/static/media/Screen Shot 2017-10-13 at 10.44.23 AM.ecd8b8d0.png","ecd8b8d0837779393e4cffa3eab10c90"],["/cssdevconf2017/static/media/Screen Shot 2017-10-13 at 10.48.15 AM.6904ea0f.png","6904ea0fe43148336a23e124b9afbf37"],["/cssdevconf2017/static/media/Screen Shot 2017-10-13 at 11.09.18 AM.6540248c.png","6540248c90c3e224584db204462775c1"],["/cssdevconf2017/static/media/Screen Shot 2017-10-13 at 11.24.00 AM.192afefc.png","192afefc9e2238823255373e11ff9c51"],["/cssdevconf2017/static/media/Screen Shot 2017-10-13 at 11.33.34 AM.dc27aadb.png","dc27aadbb78a944a18fee99bbc430628"],["/cssdevconf2017/static/media/Screen Shot 2017-10-13 at 11.51.04 AM.0f638d23.png","0f638d233388479fc3fac1fa13589996"],["/cssdevconf2017/static/media/beignets.afe9e4dd.jpg","afe9e4ddfea62dfbcf86aeca1882ed81"],["/cssdevconf2017/static/media/callback.f70d40f2.png","f70d40f2795470427fe43ba6d14086ba"],["/cssdevconf2017/static/media/coverage.cdee9141.jpg","cdee9141d5e6e91e0d4810c1fe053179"],["/cssdevconf2017/static/media/cubic.828843ed.png","828843ed0f0f377d707062ce60279ca3"],["/cssdevconf2017/static/media/easing.76538154.png","76538154c51d7bafa07bf4d91139e506"],["/cssdevconf2017/static/media/grid.fb3c66a7.png","fb3c66a760d196d4b2df3d135e38a4db"],["/cssdevconf2017/static/media/pantsuit.8a0055f5.png","8a0055f5a5d5ab5d7a860a57cc3856d4"],["/cssdevconf2017/static/media/parade.7e43b255.jpg","7e43b2557a4e82914f21da99c29dc55d"],["/cssdevconf2017/static/media/service-workers.7499feac.jpg","7499feac8c31524a310bdd0d0c925c6a"],["/cssdevconf2017/static/media/wrapup.99d34778.jpg","99d34778c1ac8c8f6a31469c23da1578"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/cssdevconf2017/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});