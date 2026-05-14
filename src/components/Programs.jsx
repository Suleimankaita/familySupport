const programs = [
  {
    title: "Nursery School",
    desc: "Building strong educational foundations for young learners.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Primary School",
    desc: "Interactive and engaging education for growing children.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Secondary School",
    desc: "Preparing students for leadership and academic excellence.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
  },
];

function Programs() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div className="max-w-3xl">
            <p className="text-sky-500 font-bold uppercase tracking-widest">
              Academic Programs
            </p>

            <h2 className="mt-5 text-5xl font-black text-blue-950 leading-tight">
              Explore Our Educational Programs
            </h2>
          </div>

          <p className="text-lg text-gray-500 leading-8 max-w-xl">
            We provide quality education through modern teaching
            methods and innovative learning environments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-10">

          {programs.map((program, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-[35px]
                bg-white
                shadow-xl
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="
                    h-72
                    w-full
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold text-blue-950">
                  {program.title}
                </h3>

                <p className="mt-5 text-gray-500 leading-8">
                  {program.desc}
                </p>

                <button
                  className="
                    mt-7
                    bg-[#ff6347]
                    text-white
                    px-6
                    py-3
                    rounded-full
                    font-semibold
                    hover:scale-105
                    transition-all
                  "
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;