import Logo from "./logo";
import Nav from "./nav";
import Search from "./search";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center h-[70px] mx-4">
        <div className="w-[25%]">
          <Logo />
        </div>
        <div className="relative md:w-[50%]">
          <Nav />
        </div>
        <div className="flex justify-end w-[25%]">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
