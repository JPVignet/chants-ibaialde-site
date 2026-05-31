const CACHE_NAME = "chants-cache-v1";

// Installation : on met en cache les fichiers essentiels
self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "style.css"
      ]);
    })
  );
});

// Activation : on supprime les anciens caches
self.addEventListener("activate", event => {
  event.waitUntil(
    Promise.all([
      clients.claim(),
      caches.keys().then(names =>
        Promise.all(
          names
            .filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
        )
      )
    ])
  );
});

// Fetch : stratégie propre (réseau d'abord)
self.addEventListener("fetch", event => {

  // Ne pas interférer avec les requêtes non GET
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});