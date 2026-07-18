import type { CollectionEntry } from "astro:content";

export function filterSrCompanions<T extends CollectionEntry<"photography" | "code" | "life" | "art">>(
    posts: T[],
): T[] {
    const ids = new Set(posts.map((p) => p.id));
    return posts.filter((post) => {
        const base = post.id.replace(/\.?sr$/, "");
        return base === post.id || !ids.has(base);
    });
}
