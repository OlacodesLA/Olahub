import { HiOutlineSearch } from "react-icons/hi";
const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        title="Search"
        className="py-5 bg-gray-100 w-[200px]   focus:outline-none  h-10 rounded-2xl pl-3 text-black"
      />

      <div className="absolute top-0 right-0 px-2 bg-purple-200 h-10 rounded-r-2xl">
        <HiOutlineSearch className="text-xl translate-y-1/2" />
      </div>
    </div>
  );
};

export default Search;
