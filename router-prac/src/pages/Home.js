import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈입니다.</p>
      <Link to="/about">소개</Link>
      <Link to="/profiles/me">ksy</Link>
      <Link to="/profiles/ho">ho</Link>
      <Link to="/articles">목록</Link>
    </div>
  );
};

export default Home;
