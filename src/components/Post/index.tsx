import { Link } from "react-router-dom";
import { IPost } from "../../pages/Home";
import { PostContainer } from "./styles";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  return (
    <PostContainer>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/post/${post.id}`} className="btn">
        Ler mais
      </Link>
    </PostContainer>
  );
}
