import React from "react";
import { useParams, useLoaderData, Form } from "react-router-dom";
import { Card, Avatar } from "../components/ui";
import { Heading } from "lucide-react";

function CategoriesDetail() {
  const { id } = useParams();
  const { posts, categories, users } = useLoaderData();

  const category = categories.find((cat) => cat.id === id);

  const postToDetailToDisplay = posts.filter((post) => post.categoryId === id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {postToDetailToDisplay.map((post) => {
          const authorInfo = users.find(
            (author) => author.id === post.authorId,
          );
          const categoryBadge = categories.find(
            (cat) => cat.id === post.categoryId,
          );

          return (
            <div key={post.id}>
              <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition">
                <img
                  src={post.coverImage}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4 space-y-4">
                  <div className="text-xl font-semibold">{post.title}</div>

                  <div className="flex items-center gap-3">
                    <Avatar
                      src={authorInfo.avatar}
                      className="w-10 h-10"
                    ></Avatar>

                    <div className="font-medium text-gray-700">
                      {authorInfo.name}
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    Read time: {post.readTime}
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesDetail;
