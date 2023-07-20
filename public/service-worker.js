// This is the "Offline copy of pages" service worker

const CACHE = "quran-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.1/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

console.log("Service Worker Activated");