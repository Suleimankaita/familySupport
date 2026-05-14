function Secondary() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-widest text-[#ff6347] font-bold">
              Secondary School
            </p>

            <h1 className="mt-5 text-6xl font-black text-blue-950 leading-tight">
              Preparing Students For Future Success
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              We prepare students academically and professionally
              for university education, innovation, and leadership.
            </p>

            <button
              className="
                mt-10
                bg-gradient-to-r
                from-sky-500
                to-blue-950
                text-white
                px-8
                py-4
                rounded-full
                font-bold
              "
            >
              Explore Curriculum
            </button>

          </div>

          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
            alt="Secondary"
            className="
              rounded-[40px]
              shadow-2xl
              h-[650px]
              object-cover
            "
          />

        </div>
      </div>
    </div>
  );
}

export default Secondary;