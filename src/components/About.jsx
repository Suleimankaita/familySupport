function About() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-widest text-sky-500 font-bold">
              About Our School
            </p>

            <h1 className="mt-5 text-6xl font-black text-blue-950 leading-tight">
              Empowering Students For A Better Future
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Family Support School is committed to providing
              quality education, innovation, discipline, and
              leadership development for students across all levels.
            </p>

          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              alt="School"
              className="
                rounded-[40px]
                shadow-2xl
                h-[550px]
                w-full
                object-cover
              "
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-28">

          <div className="bg-white rounded-[35px] p-10 shadow-xl">

            <h2 className="text-4xl font-black text-blue-950">
              Our Mission
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              To provide excellent education that develops
              students academically, morally, socially, and
              technologically for future success.
            </p>
          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl">

            <h2 className="text-4xl font-black text-blue-950">
              Our Vision
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              To become a leading educational institution
              recognized for innovation, excellence, and
              leadership development.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;