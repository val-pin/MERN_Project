import React, { ChangeEvent, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { allPosts } from "postsController";

const Homepage = () => {
  const [posts, setPosts] = useState<any[] | null>(null);

  const getPosts = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/`);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log("posts :>> ", data);
      setPosts(data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Row></Row>
    </Container>
  );
};

export default Homepage;
