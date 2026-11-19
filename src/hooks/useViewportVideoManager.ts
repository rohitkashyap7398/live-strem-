import { useEffect } from 'react';

/**
 * Automatically pauses off-screen or background-tab autoPlay videos to keep
 * scrolling and animations locked at high FPS, and resumes them seamlessly
 * when scrolled back into view (respecting manual user pauses).
 */
export function useViewportVideoManager(routeKey: string) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    const pausedByObserver = new WeakSet<HTMLVideoElement>();
    const visibleVideos = new WeakSet<HTMLVideoElement>();
    const observed = new WeakSet<HTMLVideoElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && !document.hidden) {
            visibleVideos.add(video);
            if (pausedByObserver.has(video)) {
              pausedByObserver.delete(video);
              video.play().catch(() => {});
            }
          } else {
            visibleVideos.delete(video);
            if (!video.paused) {
              pausedByObserver.add(video);
              video.pause();
            }
          }
        }
      },
      { threshold: 0.05 }
    );

    const scanVideos = () => {
      document.querySelectorAll<HTMLVideoElement>('video').forEach((video) => {
        video.muted = true;
        video.defaultMuted = true;
        video.volume = 0;
      });
      const videos = document.querySelectorAll<HTMLVideoElement>('video[autoplay]:not([data-preview-video="true"])');
      videos.forEach((video) => {
        if (!observed.has(video)) {
          observed.add(video);
          observer.observe(video);
        }
      });
    };

    scanVideos();
    const timer = window.setTimeout(scanVideos, 400);

    const handleVisibilityChange = () => {
      const videos = document.querySelectorAll<HTMLVideoElement>('video[autoplay]:not([data-preview-video="true"])');
      videos.forEach((video) => {
        if (document.hidden) {
          if (!video.paused) {
            pausedByObserver.add(video);
            video.pause();
          }
        } else if (visibleVideos.has(video) && pausedByObserver.has(video)) {
          pausedByObserver.delete(video);
          video.play().catch(() => {});
        }
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [routeKey]);
}
