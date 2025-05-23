const RadioInput = ({
  name,
  label,
  options,
  defaultValue,
  required,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-[13px]">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      )}
      <div className="flex gap-8 text-sm">
        {options.map((option, index) => (
          <div className="flex items-center gap-2" key={index}>
            <input
              type="radio"
              id={`${name}_${option.value}`}
              name={name}
              value={option.value}
              defaultChecked={option.value === defaultValue}
              required={required}
              className="cursor-pointer accent-(--primary-color)"
            />
            <label htmlFor={`${name}_${option.value}`}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
