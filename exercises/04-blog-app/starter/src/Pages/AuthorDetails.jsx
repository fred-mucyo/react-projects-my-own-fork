import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { Avatar, Card } from "../components/ui";

function AuthorDetails() {
  const { posts, users, categories } = useLoaderData();
  const { id } = useParams();
  const author = users.find((user) => user.id === id);
  const postsToDisplay = posts.filter((post) => post.authorId === id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center gap-4 mb-10">
        <span className="flex gap-2">
            <Avatar src={author.avatar} />
        <span className="text-3xl font-bold">{author.name}</span>

        </span>
{/* 
        <div className="w-24 h-24 overflow-hidden ">
          
        </div> */}

        <p className="text-gray-600 max-w-2xl">{author.bio}</p>
      </div>

      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {postsToDisplay.map((post) => (
            <div
              key={post.id}
              className="rounded-xl  shadow-sm hover:shadow-md"
            >
              <img src={post.coverImage} className="w-full h-52 object-cover" />

              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{post.title}</h2>

                <p className="text-sm text-gray-500">
                  read time: {post.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default AuthorDetails;
