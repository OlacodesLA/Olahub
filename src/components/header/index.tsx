import Logo from "./logo";
import Nav from "./nav";
import Search from "./search";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Logo />
        <Nav />
        <Search />
      </div>
    </div>
  );
};

export default Header;
