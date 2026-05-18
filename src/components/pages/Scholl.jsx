export default function SecondarySchoolPage() {
  const programs = [
    {
      title: "Science Department",
      description:
        "Advanced science education with practical laboratory sessions in Physics, Chemistry, Biology, and Computer Science.",
      icon: "🧪",
    },
    {
      title: "Commercial Department",
      description:
        "Business-focused education including Accounting, Commerce, Economics, and Entrepreneurship studies.",
      icon: "💼",
    },
    {
      title: "Arts Department",
      description:
        "Creative and analytical studies in Literature, Government, Civic Education, and Languages.",
      icon: "🎨",
    },
  ];

  const features = [
    "Modern Classrooms",
    "Computer Laboratory",
    "Qualified Teachers",
    "Science Laboratories",
    "Library & Research Center",
    "Sports & Extracurricular Activities",
    "Career Guidance Programs",
    "Digital Learning Environment",
  ];

  const stats = [
    { value: "98%", label: "WAEC Success Rate" },
    { value: "45+", label: "Qualified Teachers" },
    { value: "1200+", label: "Active Students" },
    { value: "15+", label: "School Clubs" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-400 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-400 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              Excellence • Innovation • Leadership
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Secondary School Education For The Future
            </h1>

            <p className="mb-8 text-lg leading-8 text-slate-200 md:text-xl">
              We prepare students academically, socially, and technologically to excel in higher education and become future leaders through quality teaching, innovation, and discipline.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-blue-900 shadow-xl transition hover:scale-105 hover:bg-slate-100">
                Apply For Admission
              </button>

              <button className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">
                Explore Programs
              </button>
            </div>
          </div>

          <div className="mt-14 lg:mt-0">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-md"
                >
                  <h2 className="text-4xl font-bold">{stat.value}</h2>
                  <p className="mt-2 text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About Our Secondary School
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
              Building Academic Excellence With Strong Character
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our secondary school provides students with a modern and supportive learning environment where they can grow intellectually, creatively, and socially. We combine academic excellence with practical learning experiences to prepare students for universities and future careers.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg">
                    ✓
                  </div>
                  <p className="font-medium text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
              <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md">
                <h3 className="text-3xl font-bold">
                  Empowering Students Through Modern Education
                </h3>

                <p className="mt-5 leading-8 text-slate-200">
                  We focus on developing critical thinking, leadership skills, teamwork, creativity, and digital literacy to help students succeed in the modern world.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h4 className="text-xl font-semibold">Smart Learning</h4>
                    <p className="mt-2 text-slate-200">
                      Interactive learning with technology-driven teaching methods.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <h4 className="text-xl font-semibold">Leadership Training</h4>
                    <p className="mt-2 text-slate-200">
                      Students are trained to become responsible and confident future leaders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Academic Programs
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Departments & Learning Paths
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Our programs are designed to help students discover their talents and prepare for future academic and career opportunities.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl text-white shadow-lg">
                  {program.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {program.description}
                </p>

                <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Activities */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold">Sports & Activities</h3>
            <p className="mt-5 leading-8 text-slate-100">
              Students participate in football, basketball, debate competitions, music, drama, and leadership clubs.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-slate-900">
              ICT & Digital Skills
            </h3>
            <p className="mt-5 leading-8 text-slate-600">
              Our ICT training equips students with modern digital skills including coding, internet research, computer applications, and innovation projects.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold">Career Development</h3>
            <p className="mt-5 leading-8 text-slate-300">
              Career guidance programs help students identify their strengths and choose suitable academic and professional paths.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Give Your Child The Best Secondary Education Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Join a learning community focused on academic excellence, innovation, leadership, and future success.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-blue-900 shadow-xl transition hover:scale-105 hover:bg-slate-100">
              Start Registration
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">
              Contact School
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
