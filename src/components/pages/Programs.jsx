import { useState } from "react";

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Science",
    "Commercial",
    "Arts",
    "Technology",
  ];

  const programs = [
    {
      title: "Science Program",
      category: "Science",
      icon: "🧪",
      description:
        "Comprehensive science education with practical laboratory sessions in Physics, Chemistry, Biology, and Mathematics.",
      duration: "3 Years",
      students: "450+ Students",
    },
    {
      title: "Commercial Program",
      category: "Commercial",
      icon: "💼",
      description:
        "Business-oriented program covering Accounting, Economics, Commerce, and Entrepreneurship development.",
      duration: "3 Years",
      students: "320+ Students",
    },
    {
      title: "Arts Program",
      category: "Arts",
      icon: "🎨",
      description:
        "Creative and social studies focused program including Literature, Government, Languages, and Civic Education.",
      duration: "3 Years",
      students: "280+ Students",
    },
    {
      title: "ICT & Coding",
      category: "Technology",
      icon: "💻",
      description:
        "Modern technology training in coding, web development, computer operations, and digital innovation.",
      duration: "1 - 2 Years",
      students: "200+ Students",
    },
    {
      title: "Robotics Program",
      category: "Technology",
      icon: "🤖",
      description:
        "Hands-on robotics and embedded systems training to prepare students for future engineering careers.",
      duration: "1 Year",
      students: "120+ Students",
    },
    {
      title: "Leadership Program",
      category: "Arts",
      icon: "🏆",
      description:
        "Programs focused on leadership skills, public speaking, teamwork, and confidence development.",
      duration: "6 Months",
      students: "150+ Students",
    },
  ];

  const filteredPrograms =
    selectedCategory === "All"
      ? programs
      : programs.filter(
          (program) => program.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-500 via-blue-700 to-blue-950 py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-300 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-400 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
            Academic & Skill Development Programs
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            Explore Our Educational Programs
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            Discover innovative academic and professional programs designed to equip students with knowledge, creativity, leadership, and modern digital skills.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <h2 className="text-4xl font-bold">20+</h2>
              <p className="mt-2 text-slate-200">Programs Available</p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <h2 className="text-4xl font-bold">1500+</h2>
              <p className="mt-2 text-slate-200">Students Enrolled</p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <h2 className="text-4xl font-bold">45+</h2>
              <p className="mt-2 text-slate-200">Professional Teachers</p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <h2 className="text-4xl font-bold">98%</h2>
              <p className="mt-2 text-slate-200">Student Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Programs */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                About Our Programs
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
                Empowering Students Through Quality Education
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our programs are carefully designed to provide students with academic excellence, practical skills, creativity, leadership training, and career preparation.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We combine classroom learning with technology, practical projects, extracurricular activities, and real-world experiences to prepare students for future opportunities.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-sky-600">Modern Labs</h3>
                  <p className="mt-2 text-slate-600">
                    Fully equipped science and computer laboratories.
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-sky-600">Smart Learning</h3>
                  <p className="mt-2 text-slate-600">
                    Interactive and digital learning experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[36px] bg-gradient-to-br from-sky-500 to-blue-950 p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold">
                Why Our Programs Stand Out
              </h3>

              <div className="mt-8 space-y-6">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                  <h4 className="text-xl font-semibold">
                    Practical Skill Development
                  </h4>
                  <p className="mt-3 leading-7 text-slate-200">
                    Students gain hands-on experience through projects, practicals, and workshops.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                  <h4 className="text-xl font-semibold">
                    Technology Integration
                  </h4>
                  <p className="mt-3 leading-7 text-slate-200">
                    Digital learning systems and ICT programs prepare students for modern careers.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                  <h4 className="text-xl font-semibold">
                    Leadership & Creativity
                  </h4>
                  <p className="mt-3 leading-7 text-slate-200">
                    Students develop confidence, communication, and leadership abilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-2xl px-6 py-3 font-semibold transition ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-sky-500 to-blue-950 text-white shadow-xl"
                    : "bg-white text-slate-700 shadow-md hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredPrograms.map((program, index) => (
              <div
                key={index}
                className="group rounded-[32px] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-sky-500 to-blue-950 text-4xl text-white shadow-lg">
                  {program.icon}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                    {program.category}
                  </span>

                  <span className="text-sm font-medium text-slate-500">
                    {program.duration}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {program.description}
                </p>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <p className="text-sm text-slate-500">Enrollment</p>
                    <h4 className="font-bold text-slate-900">
                      {program.students}
                    </h4>
                  </div>

                  <button className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-950 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Student Benefits
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              What Students Gain From Our Programs
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
              <div className="text-5xl">📚</div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Quality Education
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Comprehensive academic programs designed for excellence.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
              <div className="text-5xl">💡</div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Innovation Skills
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Students learn creative thinking and problem-solving abilities.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
              <div className="text-5xl">🌍</div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Global Exposure
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Programs prepare students for global educational opportunities.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-lg">
              <div className="text-5xl">🚀</div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Career Preparation
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Practical training and mentorship for future careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-sky-600 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Start Your Learning Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Join our school community and gain access to modern educational programs designed for future success.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="rounded-2xl bg-white px-7 py-4 font-semibold text-blue-900 shadow-xl transition hover:scale-105 hover:bg-slate-100">
              Apply Now
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
