import { useState } from "react";
import { X, ImageIcon } from "lucide-react";

const categories = [
  "All",
  "Nursery",
  "Primary",
  "Secondary",
  "Sports",
  "ICT",
];

/*{

    SupportsLists

    1. 


}*/

const galleryData = [
  {
    category: "Nursery",
    title: "Nursery Learning",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
  },

  {
    category: "Primary",
    title: "Primary Students",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    category: "Secondary",
    title: "Science Class",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
  },

  {
    category: "ICT",
    title: "Technology Lab",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    category: "Sports",
    title: "Football Competition",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    category: "Secondary",
    title: "Leadership Program",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [previewImage, setPreviewImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 overflow-hidden">

      {/* HERO */}
      <section className="relative">

        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center relative z-10">

          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 shadow-lg border border-sky-100">
            <ImageIcon className="text-[#ff6347]" size={18} />

            <span className="text-blue-950 font-semibold">
              Interactive Gallery
            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black text-blue-950 leading-tight">
            Explore Our
            <span className="text-sky-500"> School Activities </span>
            & Programs
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
            Browse through activities, classes, science labs,
            sports programs, ICT sessions, and student achievements.
          </p>

        </div>
      </section>

      {/* FILTERS */}
      <section className="mt-20">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="flex flex-wrap justify-center gap-4">

            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-7
                  py-3
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-sky-500 to-blue-950 text-white shadow-xl"
                      : "bg-white text-blue-950 border border-gray-200 hover:border-sky-400"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="mt-20">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredImages.map((item, index) => (
              <div
                key={index}
                onClick={() => setPreviewImage(item)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[35px]
                  shadow-xl
                  cursor-pointer
                  h-[420px]
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    flex
                    items-end
                    p-8
                  "
                >

                  <div>

                    <span
                      className="
                        inline-block
                        bg-[#ff6347]
                        text-white
                        px-4
                        py-1
                        rounded-full
                        text-sm
                        font-semibold
                      "
                    >
                      {item.category}
                    </span>

                    <h2 className="mt-5 text-3xl font-black text-white">
                      {item.title}
                    </h2>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {previewImage && (
        <div
          className="
            fixed
            inset-0
            bg-black/80
            z-50
            flex
            items-center
            justify-center
            p-5
          "
        >

          <div className="relative max-w-5xl w-full">

            {/* CLOSE */}
            <button
              onClick={() => setPreviewImage(null)}
              className="
                absolute
                top-5
                right-5
                z-20
                w-12
                h-12
                rounded-full
                bg-white
                flex
                items-center
                justify-center
              "
            >
              <X />
            </button>

            {/* IMAGE */}
            <img
              src={previewImage.image}
              alt={previewImage.title}
              className="
                w-full
                max-h-[85vh]
                object-cover
                rounded-[35px]
              "
            />

            {/* INFO */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                bg-gradient-to-t
                from-black/90
                to-transparent
                p-10
                rounded-b-[35px]
              "
            >

              <span
                className="
                  inline-block
                  bg-[#ff6347]
                  text-white
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                {previewImage.category}
              </span>

              <h2 className="mt-5 text-4xl font-black text-white">
                {previewImage.title}
              </h2>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;