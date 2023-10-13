import {
  HiOutlinePhoto,
  HiOutlineCalendarDays,
  HiOutlineVideoCamera,
} from "react-icons/hi2";

import { PiArticleLight } from "react-icons/pi";
import { BsSend } from "react-icons/bs";

const iconClasses = "text-gray-600 text-xl group-hover:text-gray-900";

const AddOns = () => {
  return (
    <div className="bg-purple-100 rounded-b-2xl">
      <div className="">
        <ul className="flex justify-between w-full">
          {addIcons.map((ons, index) => {
            const { name, icon } = ons;
            return (
              <li
                key={index}
                className={`flex items-center px-6 text-gray-600 hover:text-gray-900 hover:bg-purple-300 group ${
                  index === 0 ? "rounded-bl-2xl" : ""
                }   py-5 gap-1 cursor-pointer`}
              >
                {icon}
                <p className="">{name}</p>
              </li>
            );
          })}

          <li className="flex items-center px-10 py-5 group hover:bg-purple-500 bg-purple-200 rounded-br-2xl cursor-pointer">
            <BsSend className="text-2xl group-hover:text-white text-gray-600" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddOns;

const addIcons = [
  {
    name: "Photo",
    icon: <HiOutlinePhoto className={iconClasses} />,
  },
  {
    name: "Video",
    icon: <HiOutlineVideoCamera className={iconClasses} />,
  },
  {
    name: "Event",
    icon: <HiOutlineCalendarDays className={iconClasses} />,
  },
  {
    name: "Article",
    icon: <PiArticleLight className={iconClasses} />,
  },
];
