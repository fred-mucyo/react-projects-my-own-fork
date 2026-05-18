import React from "react";
import { useLoaderData } from "react-router-dom";
import { Avatar } from "../components/ui";
import { Link } from "react-router-dom";

function Authors() {
  const { posts, users, categories } = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
      <Link to={`/author/${user.id}`}>  <div
            key={user.id}
            className="flex items-center gap-4 p-4  border rounded-xl shadow-sm bg-white"
          >
            <Avatar src={user.avatar} />

            <div className="text-lg font-semibold text-gray-800">
              {user.name}
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Authors;