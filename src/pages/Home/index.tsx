import { HomeContainer, GridContainer } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../../components/Post";
import { LoadComponent } from "../../components/LoadComponent";
import { api } from "../../axios/config";

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/posts");

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomeContainer>
      <h1>Últimos posts</h1>
      {isLoading ? (
        <div className="load">
          <LoadComponent />
        </div>
      ) : (
        <GridContainer>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </GridContainer>
      )}
    </HomeContainer>
  );
}
