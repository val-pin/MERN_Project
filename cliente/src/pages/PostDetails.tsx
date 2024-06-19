import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostType, SinglePostResponseType } from "../types/CustomTypes";

function PostDetails() {
  const urlParams = useParams();

  const [singlePost, setSinglePost] = useState<PostType | null>({} as PostType);

  console.log("urlParams :>> ", urlParams);

  const fetchPostDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/posts/${urlParams.post_id}`
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = (await response.json()) as SinglePostResponseType;

      console.log("data :>> ", data);

      setSinglePost(data.requestedPost);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  return (
    <div>
      <h2>post details</h2>
      {/* REVIEW insert here a component that represents the post with all the details, and pass the information needed for the render as props */}
      <img src={singlePost?.picture} alt="" />
      <p></p>
    </div>
  );
}

export default PostDetails;
