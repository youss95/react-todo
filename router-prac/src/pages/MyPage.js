import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    alert("마이페이지로");
    return <Navigate to="/login" replace={true} />;
  }

  return <div>mypage</div>;
};

export default MyPage;
