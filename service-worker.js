var CACHE_NAME = 'golf-club-selector-v2-1';
var FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', function(event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) { return cache.addAll(FILES); }));
});
self.addEventListener('activate', function(event) {
  event.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.map(function(key) { if (key !== CACHE_NAME) return caches.delete(key); }));
  }));
});
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) { return response || fetch(event.request); }));
});
