import * as React from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Home from "@/pages/index";
import Profile from "@/pages/profile";
import Friends from "@/pages/friends";
import Chats from "@/pages/chats";
import Notifications from "@/pages/notifications";
import Pq from "@/pages/pq";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/friends",
      element: <Friends />,
    },
    {
      path: "/chats",
      element: <Chats />,
    },
    {
      path: "/notifications",
      element: <Notifications />,
    },
    {
      path: "/pq",
      element: <Pq />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;
