import { useParams } from "react-router-dom";

const Article = () => {
  const param = useParams();
  return (
    <div>
      <h2>게시글</h2>
      <div>{param.id}</div>
    </div>
  );
};

export default Article;
