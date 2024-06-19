import { useEffect, useState } from "react";
import "./App.css";
import { PostType, type AllPostsResType } from "./types/CustomTypes";
import MyNavbar from "./components/MyNavbar";
import { Link } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchServer = async () => {
    const response = await fetch("http://localhost:5000/api/posts/all");
    // console.log("response :>> ", response);
    if (response.ok) {
      const result = (await response.json()) as AllPostsResType;
      // console.log("result :>> ", result);
      setPosts(result.allPosts);
    }
  };
  const formatDate = (numericDate: Date) => {
    const formattedDate = new Date(numericDate).toLocaleString("de-DE", {
      dateStyle: "full",
      timeStyle: "short",
    });
    return formattedDate;
  };

  useEffect(() => {
    fetchServer();
  }, []);
  return (
    <>
      <div>
        <h1>B.Garden</h1>
        {posts?.map((post) => {
          return (
            <Link to={post._id}>
              {/* //replace this with PostDetails */}
              {/* REVIEW include here a component representing the Post, and pass the information it needs to render as props */}
              <div key={post._id}>
                {post.name} | {formatDate(post.date)}
                <img
                  src={post.picture}
                  alt={`picture from ${post.name}`}
                  style={{ width: "300px", height: "400px" }}
                  // const setScale: (value: React.SetStateAction<1 | 5>) => void
                />
                <p>{post.comment}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default App;
