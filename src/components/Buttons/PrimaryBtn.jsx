const PrimaryBtn = (props) => {
  return (
    <button
      {...props}
      className="w-full bg-primaryBtn transition-colors duration-200 text-white rounded-md px-4 py-2 font-lightbold text-center cursor-pointer"
    >
      {props.text}
    </button>
  );
};
export default PrimaryBtn;
