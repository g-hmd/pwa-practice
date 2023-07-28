var CACHE_NAME = 'pwav 0.0.2';
var urlsToCache = [
    '/pwa-practice/',
    '/pwa-practice/register.js',
    '/pwa-practice/index.css'
                  ];
//インストール
self.addEventListener('install', function (event) {
    event.waitUntil(
        self.caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

//cashロード
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
          return response ? response : fetch(event.request);
        })
      
        /*fetch(event.request).catch(function () {
            return caches.match(event.request);
        })*/
    );
});

self.addEventListener('push', function(event){
  console.log('sw event: push called');

  var notificationDataObj = event.data.json();
  var content = {
    body: notificationDataObj.body,
  };
  event.waitUntil(
    self.registration.showNotification(notificationDataObj.title, content)
  );
});
