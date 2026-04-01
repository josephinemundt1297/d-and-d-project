if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    if (!import.meta.env.PROD) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        registrations.map((registration) => registration.unregister()),
      );

      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map((key) => caches.delete(key)));
      return;
    }

    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service worker registered");
      })
      .catch((err) => {
        console.error("Service worker registration failed:", err);
      });
  });
}
