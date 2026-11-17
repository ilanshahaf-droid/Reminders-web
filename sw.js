// minimal service worker so the page can be installed; always goes to the network (data must stay live)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { if(e.request.mode === 'navigate') e.respondWith(fetch(e.request).catch(() => new Response('אין חיבור לאינטרנט', {status:503, headers:{'Content-Type':'text/plain; charset=utf-8'}}))); });
