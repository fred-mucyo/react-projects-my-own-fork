import React from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
// import { getPosts } from "../Fetch/getData";
import { Avatar, Card, Badge } from "../components/ui";

export default function PostDetail() {
  // Use the loaded data array/object
  const { posts, users, categories } = useLoaderData();

  // Use slug to find the specific post
  const { slug } = useParams();

  const postToDetailToDisplay = posts.filter(
    (post) => post.slug === slug
  );

  return (
    <Card className="max-w-4xl mx-auto p-6 rounded-2xl shadow-md">
      {postToDetailToDisplay.map((post) => {
        const authorInfo = users.find(
          (author) => author.id === post.authorId
        );

        const categoryBadge = categories.find(
          (cat) => cat.id === post.categoryId
        );

        return (
          <div key={post.id} className="space-y-6">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={post.coverImage}
                alt={post.slug}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <Link to={`/categories/${categoryBadge.id}`}>
              <Badge className="px-3 py-1 text-sm hover:font-extrabold">
                {categoryBadge.name}
              </Badge>
            </Link>

            <div className="text-3xl font-bold leading-tight">
              {post.title}
            </div>

            <div className="flex items-center gap-4 border-b pb-4">
              <Avatar
                src={authorInfo.avatar}
                className="w-14 h-14"
              ></Avatar>

              <div className="space-y-1">
                <Link to={`/author/${post.authorId}`}>
                  <div className="font-semibold text-lg hover:underline">
                    {authorInfo.name}
                  </div>
                </Link>

                <div className="text-sm text-gray-500">
                  {authorInfo.email}
                </div>
              </div>
            </div>

            <div className="text-gray-600">
              {authorInfo.bio}
            </div>

            <div className="text-sm font-medium text-gray-500">
              Read time: {post.readTime}
            </div>

            <div className="text-lg leading-8 text-720">
              {post.content}
            </div>
          </div>
        );
      })}
    </Card>
  );
}