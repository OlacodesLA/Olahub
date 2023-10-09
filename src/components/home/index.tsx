import Others from "./others";
import Post from "./post";
import Profile from "./profile";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20">
      <div className="relative max-w-7xl mx-auto flex justify-between items-start gap-3">
        <div className="w-[25%] ">
          <Profile />
        </div>
        <div className="w-[50%] flex items-center">
          <Post />
        </div>
        <div className="w-[25%] ">
          <Others />
        </div>
      </div>
    </div>
  );
};

export default Home;
