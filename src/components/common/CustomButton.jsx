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
    <div className={`flex items-center justify-center ${style}`}>
      <button
        onClick={onClick}
        className={`px-6 py-2 rounded-[24px] text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed ${buttonStyle}`}
        disabled={disabled}
        {...rest}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <p className="text-[16px] font-[600]">{text}</p>
      </button>
    </div>
  );
};

export default CustomButton;
