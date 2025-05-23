const Input = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      required
      name={name}
      placeholder={placeholder}
      className="w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border rounded-md appearance-none focus:outline-none focus:ring-[0.5px]
        border-grayBorder focus:ring-(--primary-color) focus:border-(--primary-color)"
      {...props} // Spread the rest of the props to the input element
      // This allows you to pass additional props like 'pattern', 'onChange', etc.
    />
  );
};
export default Input;
