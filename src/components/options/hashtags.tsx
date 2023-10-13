import { HiViewGridAdd } from "react-icons/hi";
import { tags } from "../data/tags";

const Hashtags = () => {
  return (
    <div className="mt-4">
      <div className="bg-white rounded-2xl py-4 px-5 flex flex-col gap-3 shadow-sm shadow-gray-300">
        <div className="flex justify-between items-center ">
          <div className="font-medium text-sm text-gray-700">
            FOLLOWED HASHTAGS
          </div>
          <HiViewGridAdd className="text-xl text-gray-600 hover:text-purple-600 cursor-pointer" />
        </div>
        <div className="h-[1px] w-full bg-gray-300 rounded-3xl"></div>
        <div className="flex flex-wrap gap-y-2 gap-x-3">
          {tags.slice(0, 5).map((tag) => {
            return (
              <div className="p-1 bg-purple-200 font-medium rounded-md text-sm">
                #{tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hashtags;
