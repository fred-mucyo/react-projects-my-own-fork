import React, { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getPosts, getCategories, getUsers } from "../Fetch/getData";
import { BookmarkIcon } from "lucide-react";
import { Input } from "../components/ui";

export async function loader() {
  const [posts, users, categories] = await Promise.all([
    getPosts(),
    getUsers(),
    getCategories(),
  ]);

  return { posts, users, categories };
}

export default function Home() {
  const { posts, users, categories } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  return (
    <div className="bg-stone-50 min-h-screen px-6 py-10 md:px-12 lg:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {posts.map((post) => {
          const author = users.find((user) => user.id === post.authorId);
          const avatar = users.find((user) => user.id === post.authorId);
          const categoriesBadge = categories.find(
            (category) => category.id === post.categoryId,
          );

          return (
            <Link to="posts" key={post.id}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 ">
                <div>
                  {
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-100"
                    />
                  }
                </div>

                <div>{categoriesBadge?.name}</div>
                <div>{post.title}</div>

                <div className="flex items-center gap-2">
                  <div className="w-5 ml-3.5 rounded-2xl overflow-hidden">
                    {<img src={avatar?.avatar} />}
                  </div>
                  <div>{author?.name}</div>
                  <div className="ml-46">{post.readTime}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
