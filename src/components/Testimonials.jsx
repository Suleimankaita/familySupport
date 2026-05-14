const testimonials = [
  {
    name: "Amina Yusuf",
    role: "Parent",
    text: "Family Support School transformed my child's confidence and academic performance.",
  },
  {
    name: "John Daniel",
    role: "Student",
    text: "The teachers are supportive and the learning environment is amazing.",
  },
  {
    name: "Mary Ibrahim",
    role: "Parent",
    text: "Excellent education system with modern technology and discipline.",
  },
];

function Testimonials() {
  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="text-sky-500 font-bold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="mt-5 text-5xl font-black text-blue-950 leading-tight">
            What Parents & Students Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[35px]
                p-10
                shadow-xl
                hover:shadow-2xl
                transition-all
              "
            >

              <div className="flex items-center gap-1 text-[#ff6347] text-2xl">
                ★ ★ ★ ★ ★
              </div>

              <p className="mt-8 text-gray-600 leading-8 text-lg">
                “{item.text}”
              </p>

              <div className="mt-10">

                <h3 className="text-2xl font-bold text-blue-950">
                  {item.name}
                </h3>

                <p className="mt-2 text-sky-500 font-semibold">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;