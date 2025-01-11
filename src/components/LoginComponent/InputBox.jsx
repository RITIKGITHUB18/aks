const InputBox = ({
  style,
  type = "text",
  placeholder = "",
  value,
  onChange,
  inputStyle,
  ...rest
}) => {
  return (
    <div className={`${style}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded-[24px] ${inputStyle}`}
        style={{
          boxShadow: "inset 0px -1px 0px 0px rgba(9, 13, 20, 1)",
        }}
        {...rest}
      />
    </div>
  );
};

export default InputBox;
