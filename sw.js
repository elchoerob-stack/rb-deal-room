/* RB Brand Deal Room service worker.
   Network-first for pages, so a new version lands the moment she opens it
   online; cache-first for icons. Scoped to this folder only. */
var CACHE = "rb-dealroom-v1";
var SHELL = ["./", "./index.html", "./manifest.webmanifest",
             "./icon-192.png", "./icon-512.png", "./icon-maskable.png", "./apple-touch-icon.png"];

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () {}); }));
  }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; })
                           .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  if (!url.pathname.startsWith(new URL("./", self.registration.scope).pathname)) return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      if (res && res.ok) { var clone = res.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, clone); }); }
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) { return hit || caches.match("./index.html"); });
    })
  );
});
