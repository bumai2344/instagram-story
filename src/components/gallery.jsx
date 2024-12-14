import img1 from "../assets/gallery/image1.svg";
import img2 from "../assets/gallery/image2.svg";
import img3 from "../assets/gallery/image3.svg";
import img4 from "../assets/gallery/image4.svg";
import img5 from "../assets/gallery/image5.svg";
import img6 from "../assets/gallery/image6.svg";
import img7 from "../assets/gallery/image7.svg";
import img8 from "../assets/gallery/image8.svg";
import img9 from "../assets/gallery/image9.svg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  return (
    <div className="container mx-auto w-full min-h-screen">
      <div className="grid grid-cols-3 gap-2 p-2 md:grid-cols-3 sm:grid-cols-2 lg:gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;