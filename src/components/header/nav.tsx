import {
  HiHome,
  HiUsers,
  HiOutlineBookOpen,
  HiOutlineHome,
} from "react-icons/hi";
import {
  HiBookOpen,
  HiOutlineUsers,
  HiBellAlert,
  HiOutlineBellAlert,
  HiChatBubbleOvalLeftEllipsis,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiUser,
  HiOutlineUser,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useWindowSize from "@/hooks/useScreen";

const activeIconClass = "text-2xl text-purple-600 ";
const iconClass = "text-2xl text-gray-600";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isTablet } = useWindowSize({
    isMobile: 640, // Custom mobile breakpoint
    isTablet: 767, // Custom tablet breakpoint
  });

  return (
    <>
      {!isTablet && (
        <div className="max-w-md w-full mx-auto h-full">
          <div className="flex justify-between items-center h-full ">
            {Links.map((a) => {
              return (
                <div className="relative">
                  <button
                    onClick={() => navigate(a.href)}
                    className={` ${
                      location.pathname === a.href &&
                      "after:w-2 after:left-1/2  after:-translate-x-[50%] after:flex after:justify-center after:items-center  after:absolute after:content-['']  after:h-2 after:rounded-full after:bg-purple-600 after:mt-2"
                    }`}
                  >
                    {location.pathname === a.href ? (
                      <>{a.activeIcon}</>
                    ) : (
                      <>{a.icon}</>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {isTablet && (
        <div className="fixed w-full left-0 bottom-0 bg-white py-4">
          <div className="flex w-full px-4 justify-between items-center  ">
            {Links.map((a) => {
              return (
                <div className="relative">
                  <button
                    onClick={() => navigate(a.href)}
                    className={` ${
                      location.pathname === a.href
                        ? "text-purple-600 after:w-2 after:left-1/2  after:-translate-x-[50%] after:flex after:justify-center after:items-center  after:absolute after:content-['']  after:h-2 after:rounded-full after:bg-purple-600 after:mt-2"
                        : "text-gray-600"
                    }`}
                  >
                    {location.pathname === a.href ? (
                      <>{a.activeIcon}</>
                    ) : (
                      <>{a.icon}</>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

export const Links = [
  {
    name: "Home",
    href: "/",
    activeIcon: <HiHome className={activeIconClass} />,
    icon: <HiOutlineHome className={iconClass} />,
  },
  {
    name: "Users",
    href: "/friends",
    activeIcon: <HiUsers className={activeIconClass} />,
    icon: <HiOutlineUsers className={iconClass} />,
  },
  {
    name: "Book",
    href: "/pq",
    activeIcon: <HiBookOpen className={activeIconClass} />,
    icon: <HiOutlineBookOpen className={iconClass} />,
  },
  {
    name: "Notification",
    href: "/notifications",
    activeIcon: <HiBellAlert className={activeIconClass} />,
    icon: <HiOutlineBellAlert className={iconClass} />,
  },
  {
    name: "Chats",
    href: "/chats",
    activeIcon: <HiChatBubbleOvalLeftEllipsis className={activeIconClass} />,
    icon: <HiOutlineChatBubbleOvalLeftEllipsis className={iconClass} />,
  },
  {
    name: "Profile",
    href: "/profile",
    activeIcon: <HiUser className={activeIconClass} />,
    icon: <HiOutlineUser className={iconClass} />,
  },
];
