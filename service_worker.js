var CACHE_NAME = 'pwav 0.0.2';
var urlsToCache = ['/pwa-practice/'];

self.addEventListener('install', function (event) {
    event.waitUntil(
        self.caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        /*caches.match(event.request).then((response) => {

            if (response) {
                return response;
            }
            return fetch(event.request);
        })*/
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});
