import { ReactNode } from "react";
import Header from "@/components/header";

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
