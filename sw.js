importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([{"revision":"a203044f0e8aaadd8bc2f1620463adc4","url":"lib/ammo.js"},{"revision":"e8e733495089086ca3e40a7ff21aa243","url":"lib/apple-icon-180x180.png"},{"revision":"5a39ab8816fccc727034de5953cb04b1","url":"lib/blueball.js"},{"revision":"c13750f74a824b62b2431cd329aae7bb","url":"lib/icon-512x512.png"},{"revision":"bd32f2a656b58f4df3d6b3eea674ef6b","url":"lib/physi.js"},{"revision":"17f80695886109e2656db01c49f163e4","url":"lib/physijs_worker.js"},{"revision":"6709509f984406891d26172b2a1ef7be","url":"lib/three.js"},{"revision":"306b165388e5f1b6b15b6a3a21279bda","url":"favicon.ico"},{"revision":"563df291e45673e559d2fb748d89b6d6","url":"index.html"},{"revision":"dd90300efb681ac9d4ec06e878fa7841","url":"manifest.webmanifest"},{"revision":"ec253f4b515a8885cc930e39b4060e5f","url":"sw.js"}]);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'lib',
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'https://pwa.danielstegen.de/',
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'https://pwa.danielstegen.de/index.html',
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'https://pwa.danielstegen.de/favicon.ico',
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'https://pwa.danielstegen.de/manifest.webmanifest',
  new workbox.strategies.CacheFirst()
);
