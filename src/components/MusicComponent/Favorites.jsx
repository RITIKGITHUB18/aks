import SongItem from "./SongItem";

const Favorites = ({ songs }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Your favourites</h2>
      <div className="mt-4 space-y-9 h-62 overflow-y-auto scrollbar-hide">
        {songs.map((song, index) => (
          <SongItem
            key={index}
            image={song.image}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
