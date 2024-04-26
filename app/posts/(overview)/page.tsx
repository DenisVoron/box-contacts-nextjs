import { FC } from "react";
import { Metadata } from "next";
import { fetchPosts } from "../../fetch/fetch-api";
import PostsList from "../../components/PostsList";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Posts Board",
  description: "Make a post and become famous",
  keywords: ["Posts", "Make Posts", "Application Posts"],
};

const Posts: FC = async (): Promise<JSX.Element> => {
  const data = await fetchPosts();

  if (!data) notFound();

  return (
    <div className="container mx-auto px-4">
      <h2 className="mt-6 mb-5 text-2xl font-semibold">Posts</h2>
      <PostsList posts={data} />
    </div>
  );
};

export default Posts;
