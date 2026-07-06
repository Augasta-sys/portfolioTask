const GalleryCard = ({ item }) => {
  if (item.type === "title") {
    return (
      <div
        className="bg-[#1B2129] flex items-center justify-center"
        style={{
          height: "80px",
          borderRadius: "4px",
          marginBottom: "6px",
        }}
      >
       <h2 className="font-humane text-white text-[60px]">
          Gallery
        </h2> 
      </div>
    );
  }

  return (
    <div
      style={{
        marginBottom: "6px",
      }}
    >
      <img
        src={item.image}
        alt=""
        className="w-full object-cover"
        style={{
          height: item.height,
        }}
      />
    </div>
  );
};

export default GalleryCard;