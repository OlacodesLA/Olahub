import {
  HiBookmark,
  HiChartBar,
  HiOutlineBookmark,
  HiOutlineChartBar,
  HiOutlinePlayCircle,
  HiOutlineUserPlus,
  HiPlayCircle,
  HiUserPlus,
} from "react-icons/hi2";
import {
  IoGameController,
  IoGameControllerOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";

const iconClasses = "text-2xl ";
const List = () => {
  return (
    <div className="mt-4">
      <ul className="bg-white rounded-2xl p-3 flex flex-col gap-3 shadow-sm shadow-gray-300">
        {Option.map((op) => {
          const { name, icon } = op;
          return (
            <li
              key={name}
              className="flex items-center text-gray-600 gap-4 hover:bg-purple-600 p-1 rounded-md hover:text-white cursor-pointer"
            >
              {icon}
              <div className="">{name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

const Option = [
  {
    name: "Learning",
    icon: <HiOutlinePlayCircle className={iconClasses} />,
    activeIcon: <HiPlayCircle className={iconClasses} />,
  },
  {
    name: "Insight",
    icon: <HiOutlineChartBar className={iconClasses} />,
    activeIcon: <HiChartBar className={iconClasses} />,
  },
  {
    name: "Colleagues",
    icon: <HiOutlineUserPlus className={iconClasses} />,
    activeIcon: <HiUserPlus className={iconClasses} />,
  },
  {
    name: "Bookmark",
    icon: <HiOutlineBookmark className={iconClasses} />,
    activeIcon: <HiBookmark className={iconClasses} />,
  },
  {
    name: "Games",
    icon: <IoGameControllerOutline className={iconClasses} />,
    activeIcon: <IoGameController className={iconClasses} />,
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline className={iconClasses} />,
    activeIcon: <IoSettings className={iconClasses} />,
  },
];
