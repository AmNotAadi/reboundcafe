import "server-only";

import { INSTAGRAM_FALLBACK } from "@/lib/content";

export type InstagramPost = {
  id: string;
  imageUrl: string;
  caption: string;
  permalink: string;
};

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  try {
    const token = process.env.INSTAGRAM_TOKEN;
    if (!token) {
      return INSTAGRAM_FALLBACK;
    }

    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram feed");
    }

    const data = (await response.json()) as {
      data: { id: string; caption?: string; media_url?: string; permalink?: string }[];
    };

    return data.data.slice(0, 12).map((item) => ({
      id: item.id,
      imageUrl: item.media_url ?? INSTAGRAM_FALLBACK[0]?.imageUrl,
      caption: item.caption ?? "Rebound Cafe",
      permalink: item.permalink ?? "https://www.instagram.com/reboundcafe",
    }));
  } catch (error) {
    console.error("Instagram fetch error", error);
    return INSTAGRAM_FALLBACK;
  }
}
