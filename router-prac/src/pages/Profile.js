import { useParams } from "react-router-dom";

const data = {
  me: {
    name: "ksy",
    description: "devel",
  },
  ho: {
    name: "ho",
    description: "god",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>username: {params.username}</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필{profile}</p>
      )}
    </div>
  );
};

export default Profile;
