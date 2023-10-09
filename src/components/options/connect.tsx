import DefaultButton from "../button/default";
import { connections } from "../data/connect";

const Connect = () => {
  return (
    <div className="mt-4">
      <div className="bg-white rounded-2xl">
        <div className=" py-4 px-5 flex flex-col gap-3">
          <p className="font-medium text-gray-700  text-sm uppercase">
            People you may know:
          </p>
          <ul className="flex flex-col justify-start gap-3 ">
            {connections.map((con) => {
              const { name, image, department } = con;
              return (
                <li key={name} className="flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <img
                      src={image}
                      className="w-10 h-10 rounded-full object-cover"
                      alt=""
                    />
                    <div className="">
                      <p className="font-bold text-black text-[15px]">{name}</p>
                      <p className="text-gray-600 text-[11px] leading-3">
                        {department}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <DefaultButton name="Connect" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-[.5px] w-full bg-gray-300 rounded-3xl"></div>
        <div
          role="button"
          className="text-[12px] text-center text-purple-600 font-semibold py-4"
        >
          See All
        </div>
      </div>
    </div>
  );
};

export default Connect;
