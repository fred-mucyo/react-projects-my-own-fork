import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const {slug} = useParams()
  console.log(slug)
  return <h1>This is the post detail</h1>;
}
