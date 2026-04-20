import { NewsHubClient } from "@/components/news/NewsHubClient";
import { getAllPostsSorted, getFeaturedPost } from "@/lib/data/news";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "News",
  description:
    "Product updates, implementation guidance, and company news from the ShareLogic team.",
  path: "/news",
});

export default function NewsPage() {
  const posts = getAllPostsSorted();
  const featured = getFeaturedPost();
  if (!featured) throw new Error("No news posts configured.");

  return (
    <>
      <NewsHubClient posts={posts} featured={featured} />
    </>
  );
}
