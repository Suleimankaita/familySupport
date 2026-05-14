const teachers = [
  {
    name: "Mrs. Sarah Johnson",
    role: "Science Teacher",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Mr. David Wilson",
    role: "Mathematics Teacher",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Mrs. Grace Michael",
    role: "English Teacher",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
];

function Teachers() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-sky-500 font-bold uppercase tracking-widest">
            Our Teachers
          </p>

          <h2 className="mt-5 text-5xl font-black text-blue-950 leading-tight">
            Meet Our Professional Educators
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-8">
            Our experienced teachers are committed to helping
            students achieve excellence academically and morally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-[35px]
                overflow-hidden
                shadow-xl
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              <div className="overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />
              </div>

              <div className="p-8 text-center">

                <h3 className="text-3xl font-bold text-blue-950">
                  {teacher.name}
                </h3>

                <p className="mt-3 text-sky-500 font-semibold">
                  {teacher.role}
                </p>

                <button
                  className="
                    mt-7
                    px-6
                    py-3
                    rounded-full
                    bg-[#ff6347]
                    text-white
                    font-semibold
                    hover:scale-105
                    transition-all
                  "
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;