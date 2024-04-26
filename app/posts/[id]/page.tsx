import { Metadata } from "next";
import { fetchContactInfo } from "@/app/fetch/fetch-api";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "One Post Board",
  description: "This post and interesting",
  keywords: ["Posts", "Make Posts", "Application Posts", "add post"],
};

const PostInfo = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const { body } = await fetchContactInfo(id);

  if (!body) notFound();

  return (
    <div className="container mx-auto px-4">
      <p className="w-2/5 mt-4">{body}</p>
    </div>
  );
};

export default PostInfo;
