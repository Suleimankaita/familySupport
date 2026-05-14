function PageHero({
  badge,
  title,
  highlight,
  description,
  image,
}) {
  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <div>

          <div
            className="
              inline-flex
              items-center
              gap-3
              bg-white
              rounded-full
              px-5
              py-2
              shadow-lg
              border
              border-sky-100
            "
          >
            <span className="text-sky-500 font-bold">
              {badge}
            </span>
          </div>

          <h1
            className="
              mt-8
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-tight
              text-blue-950
            "
          >
            {title}
            <span className="text-sky-500">
              {" "}
              {highlight}{" "}
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              className="
                bg-gradient-to-r
                from-sky-500
                to-blue-950
                text-white
                px-8
                py-4
                rounded-full
                font-bold
                shadow-xl
                hover:scale-105
                transition-all
              "
            >
              Explore More
            </button>

            <button
              className="
                border-2
                border-sky-500
                text-sky-600
                px-8
                py-4
                rounded-full
                font-bold
                hover:bg-sky-50
                transition-all
              "
            >
              Contact School
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">

          <img
            src={image}
            alt={title}
            className="
              rounded-[40px]
              shadow-2xl
              h-[700px]
              w-full
              object-cover
            "
          />

        </div>
      </div>
    </section>
  );
}

export default PageHero;