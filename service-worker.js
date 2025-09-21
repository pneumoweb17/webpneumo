const CACHE_NAME = "PNEUMOweb-cache-v1";
const urlsToCache = [
  "index.html",
  "pages.html",
  "result.html",
  "screening.html",
  "style.css",
  "pages.css",
  "result.css",
  "screening.css",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "logo.png",
  "background.png",
  "background2.png"
];

// Install and cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from cache first, then network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
