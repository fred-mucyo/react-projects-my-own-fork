import React, { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getPosts, getCategories, getUsers } from "../utility/getData";
import { BookmarkIcon, Car } from "lucide-react";
import { Input, Card, Avatar, Badge } from "../components/ui";

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
    <div className="min-h-screen bg-stone-50 px-6 py-10 md:px-12 lg:px-20">
      <Card className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => {
          const author = users.find((user) => user.id === post.authorId);

          const categoriesBadge = categories.find(
            (category) => category.id === post.categoryId,
          );

          return (
            <Link to="posts" key={post.id}>
              <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md">
                <div>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-60 w-full object-cover"
                  />
                </div>

                <div className="space-y-4 p-4">
                  <Badge className="w-fit">
                    {categoriesBadge?.name}
                  </Badge>

                  <div className="font-sans text-lg font-semibold text-stone-800">
                    {post.title}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar src={author?.avatar} />

                      <div className="font-medium text-stone-700">
                        {author?.name}
                      </div>
                    </div>

                    <div className="text-sm text-stone-500">
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Card>
    </div>
  );
}