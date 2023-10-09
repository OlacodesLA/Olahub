import { HiOutlinePencilSquare } from "react-icons/hi2";
import List from "../options/list";
import Hashtags from "../options/hashtags";

const Profile = () => {
  return (
    <div className="fixed w-[20%] ">
      <div className="bg-white rounded-2xl">
        <div className="relative">
          {/* Profile Cover */}
          <img
            src="/profile-bg.png"
            className="w-full h-14 object-cover rounded-t-2xl"
            alt="profile-cover"
          />
          <div className="flex items-start ">
            {/* Profile Image */}
            <img
              src="/me.jpg"
              className="object-cover rounded-full w-12 -translate-y-6 h-12 mx-2"
              alt=""
            />
            {/* Name & Profession */}
            <div className="pt-1">
              <div className="text-[14px] leading-3 font-semibold">
                Olajide Zaccheaus
              </div>
              <div className="text-[12px] pt-[2px] text-gray-500 font-semibold">
                Full Stack Developer
              </div>
            </div>
            {/* Percentage */}
            <div className="ml-2 flex items-center">
              <div className="ml-2 relative rounded-3xl">
                <div className="w-16 h-[2px] bg-gray-300 rounded-3xl"></div>
                <div className="absolute top-0 w-14 h-[2px] bg-purple-600 rounded-3xl"></div>
              </div>
              <div className="text-[12px] pl-1 text-purple-600 font-semibold">
                90%
              </div>
            </div>
          </div>
          {/* Edit */}
          <div className="flex ml-3 gap-2 text-gray-600 pb-2">
            <HiOutlinePencilSquare className="text-xl " />
            <div className="text-sm">Edit Profile</div>
          </div>
        </div>
      </div>
      <List />
      <Hashtags />
    </div>
  );
};

export default Profile;
