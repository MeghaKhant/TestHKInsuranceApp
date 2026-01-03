/*
 * Service worker for the HK Insurance App
 *
 * This service worker implements a simple offline‑first caching strategy. When the
 * service worker is installed it pre‑caches all critical application assets so
 * that the application can load instantly even when the device is offline. On
 * activation it cleans up any old caches. During fetch events the service
 * worker responds with a cached asset if one exists, otherwise it falls back
 * to the network. If the network is unavailable and the asset hasn’t been
 * cached the request will fail. You can extend this file with more advanced
 * caching strategies (e.g. stale‑while‑revalidate) if needed.
 */

const CACHE_NAME = 'hk-insurance-cache-v3';

// List of assets to cache. These are the core files that make up the app.
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// During install, open the named cache and add all core assets to it. The
// service worker will not finish installing until the assets have been
// successfully cached.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// During activation remove any caches that do not match the current cache name.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
});

// Intercept all network requests. Respond with a cached resource if present.
// Otherwise fetch from the network. If the network request fails and there is
// no cache match, the promise will reject causing the fetch to error.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // If a cached response is found, return it. Otherwise fetch from network.
      return (
        cachedResponse ||
        fetch(event.request).catch(() => {
          // An optional enhancement would be to provide a fallback page or
          // offline notice here. For simplicity we allow the request to fail.
        })
      );
    })
  );
});