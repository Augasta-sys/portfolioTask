import galleryData from "../Data/galleryData";
import GalleryCard from "./GalleryCard";

const GalleryGrid = () => {
  return (
    <section
      className="bg-[#121212]"
      style={{
        paddingTop: "130px",
        paddingBottom: "60px",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        style={{
          width: "90%",
          maxWidth: "1280px",
          margin: "0 auto",
          gap: "8px",
        }}
      >
      
      <div
  className="bg-[#1B2129] flex items-center justify-center"
  style={{
    height: "100px",
    borderRadius: "6px",
  }}
>
  <h1 className="font-humane text-white text-[70px]">
    Gallery
  </h1>
</div>

{galleryData.map((item) => (
  <GalleryCard key={item.id} item={item} />
))}
      </div>
    </section>
  );
};

export default GalleryGrid;