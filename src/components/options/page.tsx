import { HiViewGridAdd } from "react-icons/hi";
import { pageList } from "../data/page";

const Page = () => {
  return (
    <div className="mt-4">
      <div className="bg-white  rounded-2xl py-4 px-5 flex flex-col gap-3 shadow-sm shadow-gray-300">
        <ul className="flex gap-3 flex-col">
          {pageList.map((list) => {
            const { name, image } = list;
            return (
              <li key={name} className="flex gap-2 items-center">
                <img src={image} alt="" className="w-7 h-7 object-cover" />
                <p className="text-gray-600">{name}</p>
              </li>
            );
          })}
          <li className="flex gap-2 items-center">
            <div className="w-7 h-7 text-center flex items-center justify-center">
              <HiViewGridAdd className="text-xl  text-gray-600 hover:text-purple-600 cursor-pointer" />
            </div>
            <p className="text-gray-600">Add New Page</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
