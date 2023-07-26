// This is the "Offline copy of pages" service worker
importScripts("https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js")

const CACHE = "quran-offline";



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