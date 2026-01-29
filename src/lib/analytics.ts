export function trackEvent(name: string) {
  try {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami(name);
    } else {
      // dev fallback
      // eslint-disable-next-line no-console
      console.debug("umami.track:", name);
    }
  } catch (e) {
    // ignore errors
  }
}

export default trackEvent;
