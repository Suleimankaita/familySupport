    function CTASection() {
  return (
    <section className="mt-32">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div
          className="
            bg-gradient-to-r
            from-sky-500
            to-blue-950
            rounded-[45px]
            p-12
            lg:p-20
            text-center
            text-white
            shadow-2xl
          "
        >

          <h2 className="text-5xl font-black leading-tight">
            Ready To Join Family Support School?
          </h2>

          <p className="mt-8 text-lg text-sky-100 leading-8 max-w-3xl mx-auto">
            Begin your child's educational journey with
            world-class learning, leadership development,
            technology training, and academic excellence.
          </p>

          <button
            className="
              mt-10
              bg-white
              text-blue-950
              px-10
              py-5
              rounded-full
              font-black
              hover:scale-105
              transition-all
            "
          >
            Apply For Admission
          </button>

        </div>
      </div>
    </section>
  );
}

export default CTASection;