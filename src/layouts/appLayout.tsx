import { ReactNode } from "react";
import Header from "@/components/header";

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className="bg-primary-bg w-full h-full">
      <div className=" w-full bg-primary-bg fixed z-50 top-0">
        <div className="rounded-xl bg-white max-w-7xl mx-auto mt-2">
          <Header />
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default AppLayout;
