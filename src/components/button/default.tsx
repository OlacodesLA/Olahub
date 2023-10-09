type Props = {
  name: string;
  click?: () => void;
};

const DefaultButton = ({ name, click }: Props) => {
  return (
    <button
      onClick={click}
      title="Connect Button"
      type="button"
      className="rounded-md px-2 py-1 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-purple-500 text-center  text-white"
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-24 bg-purple-500 text-center top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-purple-500 text-center text-sm transition duration-300 group-hover:text-white ease">
        {name}
      </span>
    </button>
  );
};

export default DefaultButton;
