import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
// import { getPosts } from "../Fetch/getData";
import { Avatar , Card , Badge} from "../components/ui";

export default function PostDetail() {
  // Use the loaded data array/object
  const { posts, users, categories } = useLoaderData();
  

  // Use slug to find the specific post
  const { slug } = useParams();

  const postToDetailToDisplay = posts.filter((post) => post.slug === slug);

  return (
    <Card>
      {postToDetailToDisplay.map((post) => {
        const authorInfo = users.find((author => author.id === post.authorId));
        const categoryBadge = categories.find(cat => cat.id === post.categoryId)

        return (
          <div key={post.id}>
            <div>
              <img src={post.coverImage} alt={post.slug} />
            </div>
            <Badge>{categoryBadge.name}</Badge>
            <div>{post.title}</div>
            <div>{authorInfo.name}</div>
            <Avatar src={authorInfo.avatar}></Avatar>
            <div>{authorInfo.bio}</div>
            <div>{authorInfo.email}</div>
            <div> Read time:{post.readTime}</div>
            <div> {post.content}</div>
          </div>
        );
      })}
    </Card>
  );
}
