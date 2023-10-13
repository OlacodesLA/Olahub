import APost from "../post/aPost";
import AddOns from "../post/addOns";
import PostInput from "../post/input";

const Post = () => {
  return (
    <div className="w-full h-full bg-primary-bg">
      <div className="sticky">
        <div className="bg-white rounded-2xl shadow-sm shadow-gray-300">
          <PostInput />
          <AddOns />
        </div>
        <APost />
        <APost />
        <div className="mb-[400px]"></div>
      </div>
    </div>
  );
};

export default Post;
