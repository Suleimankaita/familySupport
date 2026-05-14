function CTA() {
  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-5xl mx-auto px-5">

        <div
          className="
            text-center
            bg-white
            rounded-[40px]
            shadow-2xl
            p-14
          "
        >

          <h2 className="text-5xl font-black text-blue-950 leading-tight">
            Ready To Build Your Child's Future?
          </h2>

          <p className="mt-7 text-lg leading-8 text-gray-500 max-w-2xl mx-auto">
            Join Family Support School today and give your child
            access to quality education and modern learning.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button
              className="
                px-8
                py-4
                rounded-full
                bg-[#ff6347]
                text-white
                font-bold
                hover:scale-105
                transition-all
              "
            >
              Apply Now
            </button>

            <button
              className="
                px-8
                py-4
                rounded-full
                border-2
                border-sky-500
                text-sky-600
                font-bold
                hover:bg-sky-50
                transition-all
              "
            >
              Contact School
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;