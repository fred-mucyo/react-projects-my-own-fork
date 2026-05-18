import React, { useState } from "react";
import Home from "./Home";
import { Button, Input, Card, Badge, Avatar } from "../components/ui";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getPosts, getCategories, getUsers } from "../utility/getData";
import { BookmarkIcon, SearchIcon } from "lucide-react";

export default function Posts() {
  const { posts, users, categories } = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFilter = searchParams.get("category");

  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  const displayedPosts = categoryFilter
    ? posts.filter((post) => post.categoryId === categoryFilter)
    : posts;

  const toBeDisplayed = displayedPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="flex flex-wrap justify-between gap-3 p-6 md:p-9">
        <Input
          onChange={handleChange}
          value={search}
          placeholder="Search.."
          className="border border-2 w-full md:w-72 "
        />

        <Link to=".">
          <Button className="cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">All</Button>
        </Link>

        <Link to="?category=1">
          <Button className="cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">Technology</Button>
        </Link>

        <Link to="?category=2">
          <Button className="cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">Design</Button>
        </Link>

        <Link to="?category=3">
          <Button className="cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">Career</Button>
        </Link>

        <Link to="?category=4">
          <Button className="cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">Science</Button>
        </Link>

        <Link to="?category=5">
          <Button className="cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">Culture</Button>
        </Link>
      </div>

      {toBeDisplayed.length > 0 ? (
        <div className="px-6 py-10 md:px-12 lg:px-20">
          <Card className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 bg-transparent shadow-none border-none">
            {toBeDisplayed.map((post) => {
              const author = users.find((user) => user.id === post.authorId);

              const avatar = users.find((user) => user.id === post.authorId);

              const categoriesBadge = categories.find(
                (category) => category.id === post.categoryId,
              );

              return (
                <Link to={`/posts/${post.slug}`} key={post.id}>
                  <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md">
                    <div>
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="h-56 w-full object-cover"
                      />
                    </div>

                    <div className="p-4 space-y-4">
                      <Badge>{categoriesBadge?.name}</Badge>

                      <div className="font-sans text-lg font-semibold text-stone-800">
                        {post.title}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar src={avatar?.avatar} />

                          <div className="font-medium text-sm">
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
      ) : (
        <div className="flex items-center justify-center py-40">
          <span className="inline-flex items-center gap-2 font-medium text-lg">
            Not found 😓
          </span>
        </div>
      )}
    </div>
  );
}