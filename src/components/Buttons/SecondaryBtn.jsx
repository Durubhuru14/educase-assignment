const SecondaryBtn = (props) => {
  return (
    <button
      {...props}
      className="w-full bg-secondaryBtn text-primary transition-colors duration-200 px-4 py-2 rounded-md font-lightbold text-center cursor-pointer"
    >
      {props.text}
    </button>
  );
};
export default SecondaryBtn;
