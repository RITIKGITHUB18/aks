const PlaylistItem = ({ image, title, description }) => {
  return (
    <div className="flex-shrink-0">
      <div
        className="w-48 h-48 rounded-xl bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="mt-3 text-[#FFFFFF] font-[600] text-lg leading-[24.3px] font-openSans">
        {title}
      </p>
      <p className="text-[#A5A5A5] text-sm font-[400] font-openSans">
        {description}
      </p>
    </div>
  );
};

export default PlaylistItem;
