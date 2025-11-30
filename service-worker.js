const CACHE_NAME = 'concreserv-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './img/truck_real.png',
  './img/truck_pixel.png',
  './img/truck_up.png',
  './img/truck_down.png',
  './img/truck_face.png',
  './snd/eat.wav',
  './snd/death.wav',
  './snd/victory.wav',
  './icons/icon-192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});