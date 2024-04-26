import { FC } from "react";
import Link from "next/link";
import { PostsData } from "../lib/definition-type";

type postDataProps = {
  posts: PostsData[];
};

const PostsList: FC<postDataProps> = async ({
  posts,
}): Promise<JSX.Element> => {
  return (
    <div className="container mx-auto px-4">
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id} className="mb-2">
            <Link href={`/posts/${id}`} className="text-sm sm:text-base">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
