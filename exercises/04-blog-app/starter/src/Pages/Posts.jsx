import React, { useState } from "react";
import Home from "./Home";
import { Button, Input , Card , Badge , Avatar } from "../components/ui";
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
    <div>
      <div className="flex justify-between p-9">
        <Input onChange={handleChange} value={search} placeholder="Search.." />

        <Link to=".">
          <Button>All</Button>
        </Link>

        <Link to="?category=1">
          <Button>Technology</Button>
        </Link>

        <Link to="?category=2">
          <Button>Design</Button>
        </Link>

        <Link to="?category=3">
          <Button>Career</Button>
        </Link>

        <Link to="?category=4">
          <Button>Science</Button>
        </Link>

        <Link to="?category=5">
          <Button>Culture</Button>
        </Link>
      </div>

      {toBeDisplayed.length > 0 ? (
        <div className="bg-stone-50 min-h-screen px-6 py-10 md:px-12 lg:px-20">
          <Card className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {toBeDisplayed.map((post) => {
              const author = users.find((user) => user.id === post.authorId);

              const avatar = users.find((user) => user.id === post.authorId);

              const categoriesBadge = categories.find(
                (category) => category.id === post.categoryId,
              );

              return (
                <Link to={`/posts/${post.slug}`} key={post.id}>
                  <div className="bg-white overflow-hidden shadow-sm border border-stone-200">
                    <div>
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-100"
                      />
                    </div>

                    <Badge>{categoriesBadge?.name}</Badge>

                    <div className="font-sans pr-2 pl-2">{post.title}</div>

                    <div className="flex items-center gap-2">
                      {/* <div className="w-5 ml-3.5 rounded-2xl overflow-hidden"> */}
                        <Avatar src={avatar?.avatar} />
                      {/* </div> */}

                      <div className="font-medium ">{author?.name}</div>

                      <div className="ml-46">{post.readTime}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Card>
        </div>
      ) : (
        <span className="inline-flex items-center gap-2 ml-150 font-medium mt-40">
          Not found 😓
        </span>
      )}
    </div>
  );
}
