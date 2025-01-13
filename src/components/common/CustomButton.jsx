const CustomButton = ({
  onClick,
  style,
  buttonStyle,
  text,
  disabled = false,
  icon,
  ...rest
}) => {
  return (
    <div className={`flex items-center justify-center rounded-[24px] ${style}`}>
      <button
        onClick={onClick}
        className={`px-6 py-2 rounded-[24px] text-white disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer ${buttonStyle}`}
        // disabled={disabled}
        {...rest}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <p className="text-[16px] font-[500]">{text}</p>
      </button>
    </div>
  );
};

export default CustomButton;
