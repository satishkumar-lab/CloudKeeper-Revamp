/** Extract YouTube video ID from common watch / short URLs. */
export function getYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace(/^\//, "");
      return id || null;
    }
  } catch {
    return null;
  }

  return null;
}

export function getYouTubeEmbedUrl(url: string, autoplay = true): string | null {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;

  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    rel: "0",
    modestbranding: "1",
    enablejsapi: "1",
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
