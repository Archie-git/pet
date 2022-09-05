const CACHE_VERSION = 'V-0.0.1';
const CACHE_PATHS = [
  '/',
  '/favicon.ico',
  '/manifest.json',
  '/index.bundle.js',
  '/worker.service.js',
  '/worker.message.js',
];

const getResponseFromCache = (request) => {
  return caches.open(CACHE_VERSION).then((cache) => {
    return cache.match(request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(request).then((response1) => {
        cache.put(request, response1.clone());
        return response1;
      });
    });
  });
};

self.oninstall = async () => {
  await caches.keys().then((keys) => {
    keys.forEach((item) => {
      caches.delete(item);
    });
  });
  const cache = await caches.open(CACHE_VERSION);
  await cache.addAll(CACHE_PATHS);
  await self.skipWaiting();
};

self.onactivate = async () => {
  await self.clients.claim();
};

self.onmessage = (event) => {
  console.log('chile =message=>', event);
};

// self.onfetch = (event) => {
//   const { request } = event;
//   const { pathname } = new URL(request.url);
//   const matched = CACHE_PATHS.includes(pathname) || pathname.startsWith('/js/') || /\.(png|svg)$/.test(pathname);
//   event.respondWith(matched ? getResponseFromCache(request) : fetch(request));
// };
