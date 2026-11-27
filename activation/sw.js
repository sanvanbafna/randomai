/* Owner payment alerts: push messages arrive here even when the page is closed. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data ? e.data.text() : "" }; }
  e.waitUntil(self.registration.showNotification(d.title || "Random XP Activation", {
    body: d.body || "",
    tag: d.tag || undefined,
    renotify: !!d.tag,
    icon: "logo.png",
    badge: "logo.png",
    vibrate: [200, 100, 200],
    requireInteraction: true,
  }));
});

// Always open the owner page next to this file (randomai.in/activation/admin.html).
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = new URL("admin.html", self.registration.scope).href;
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const w of wins) {
      if (w.url.startsWith(self.registration.scope)) { await w.focus(); return; }
    }
    return self.clients.openWindow(url);
  })());
});
