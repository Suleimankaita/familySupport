import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Mission");
  const achievements = [
    {
      number: "15+",
      title: "Years of Excellence",
      description: "Providing quality education and student development.",
    },
    {
      number: "1,500+",
      title: "Active Students",
      description: "Students learning across multiple academic programs.",
    },
    {
      number: "50+",
      title: "Qualified Teachers",
      description: "Experienced and dedicated teaching professionals.",
    },
    {
      number: "98%",
      title: "Success Rate",
      description: "Excellent academic performance in examinations.",
    },
  ];

  const values = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      description:
        "We focus on high-quality education that prepares students for higher education and future careers.",
    },
    {
      icon: "💡",
      title: "Innovation & Technology",
      description:
        "Modern digital learning systems and ICT programs help students develop future-ready skills.",
    },
    {
      icon: "🤝",
      title: "Discipline & Integrity",
      description:
        "We build strong moral values, discipline, respect, and leadership qualities in our students.",
    },
    {
      icon: "🌍",
      title: "Community Development",
      description:
        "Our school contributes to educational growth and community development in Katsina State.",
    },
  ];

  const facilities = [
    "Modern Classrooms",
    "Science Laboratories",
    "Computer & ICT Laboratory",
    "Digital Learning Environment",
    "Library & Research Center",
    "Sports Facilities",
    "Leadership & Skill Development Programs",
    "Safe & Secure Learning Environment",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-50 text-slate-800"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-500 via-blue-700 to-blue-950 py-28 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-300 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
            About Our School
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Building Future Leaders Through Quality Education
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-200 md:text-xl">
            Located in Tudun Katsira, behind Keystone Bank Nigeria, Katsina State, our school is committed to providing modern education, leadership development, discipline, and innovation for students who are ready to succeed in the future.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-900 shadow-xl transition hover:scale-105 hover:bg-slate-100">
              Explore Programs
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">
              Contact School
            </button>
          </div>
        </div>
      </section>

      {/* School Story */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                Our Story
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                A School Dedicated To Academic Excellence & Student Growth
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                Our institution was established with the vision of transforming education in Katsina State by creating a modern learning environment where students can grow academically, socially, morally, and technologically.
              </p>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                We believe education is not only about passing examinations but also about developing responsible individuals, future leaders, innovators, and problem-solvers who can contribute positively to society.
              </p>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                Through modern teaching methods, ICT integration, extracurricular activities, and mentorship programs, we continue to empower students with the confidence and knowledge needed for future success.
              </p>
            </div>

            <div className="rounded-[40px] bg-gradient-to-br from-sky-500 to-blue-950 p-10 text-white shadow-2xl">
              <h3 className="text-4xl font-bold">
                Why Parents Trust Our School
              </h3>

              <div className="mt-10 space-y-6">
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                  <h4 className="text-2xl font-semibold">
                    Modern Learning Environment
                  </h4>
                  <p className="mt-3 leading-8 text-slate-200">
                    Students learn in well-equipped classrooms supported by digital technology and interactive teaching methods.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                  <h4 className="text-2xl font-semibold">
                    Leadership & Character Development
                  </h4>
                  <p className="mt-3 leading-8 text-slate-200">
                    We train students to become disciplined, confident, responsible, and future-ready leaders.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                  <h4 className="text-2xl font-semibold">
                    Practical Skill Development
                  </h4>
                  <p className="mt-3 leading-8 text-slate-200">
                    Students gain practical skills in technology, communication, teamwork, and creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {achievements.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                key={index}
                className="rounded-[32px] bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h2 className="text-5xl font-extrabold text-sky-600">
                  {item.number}
                </h2>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {["Mission", "Vision"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-2xl px-8 py-4 font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-sky-500 to-blue-950 text-white shadow-xl"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {activeTab === "Mission" && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[36px] bg-slate-50 p-10 shadow-xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-sky-500 to-blue-950 text-4xl text-white shadow-lg">
                🎯
              </div>

              <h2 className="mt-8 text-4xl font-bold text-slate-900">
                Our Mission
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                To provide quality education that combines academic excellence, discipline, innovation, leadership, and moral values while preparing students for future success in a rapidly changing world.
              </p>
            </motion.div>
            )}

            {activeTab === "Vision" && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[36px] bg-gradient-to-br from-sky-500 to-blue-950 p-10 text-white shadow-2xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 text-4xl backdrop-blur-md">
                🚀
              </div>

              <h2 className="mt-8 text-4xl font-bold">
                Our Vision
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-200">
                To become one of the leading educational institutions in Katsina State and Nigeria by producing innovative, responsible, and globally competitive students.
              </p>
            </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Our Core Values
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Values That Define Our Educational System
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                key={index}
                className="rounded-[32px] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-sky-500 to-blue-950 text-4xl text-white shadow-lg">
                  {value.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                School Facilities
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Modern Facilities Designed For Student Success
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                Our school provides students with a comfortable and advanced learning environment supported by modern educational facilities and student-centered resources.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {facilities.map((facility, index) => (
                  <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                key={index}
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl text-sky-700">
                      ✓
                    </div>

                    <p className="font-medium text-slate-700">
                      {facility}
                    </p>
                  </motion.div>
            ))}
              </div>
            </div>

            <div className="rounded-[40px] bg-gradient-to-br from-sky-500 to-blue-950 p-10 text-white shadow-2xl">
              <h3 className="text-4xl font-bold">
                Our Educational Approach
              </h3>

              <p className="mt-6 text-lg leading-9 text-slate-200">
                We combine traditional academic excellence with modern innovation and technology-driven education to prepare students for the future.
              </p>

              <div className="mt-10 space-y-6">
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                  <h4 className="text-2xl font-semibold">
                    Interactive Learning
                  </h4>
                  <p className="mt-3 leading-8 text-slate-200">
                    Students actively participate in practical learning experiences and collaborative activities.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                  <h4 className="text-2xl font-semibold">
                    Digital Education
                  </h4>
                  <p className="mt-3 leading-8 text-slate-200">
                    ICT integration and digital tools improve student engagement and creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[40px] bg-white shadow-2xl">
            <div className="bg-gradient-to-r from-sky-500 to-blue-950 px-10 py-8 text-white">
              <h2 className="text-4xl font-bold">
                School Location
              </h2>

              <p className="mt-3 text-lg text-slate-200">
                Tudun Katsira, behind Keystone Bank Nigeria, Katsina State.
              </p>
            </div>

            <div className="grid gap-10 p-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Accessible & Student-Friendly Environment
                </h3>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  Our school is strategically located in Tudun Katsira, Katsina State, providing students and parents with easy accessibility and a secure educational environment.
                </p>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  The school environment is designed to support learning, creativity, discipline, and student development while maintaining safety and comfort.
                </p>
              </div>

              <div className="overflow-hidden rounded-[32px] shadow-xl">
                <iframe
                  title="School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.436153245117!2d7.600000000000001!3d12.990000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b07b2d8e6c8a13%3A0x3c52d7f98c0e7d57!2sKatsina!5e0!3m2!1sen!2sng!4v1716030000000!5m2!1sen!2sng"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-sky-600 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-bold leading-tight">
            Join A School Focused On Excellence & Innovation
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-200">
            Become part of a learning community dedicated to academic excellence, leadership development, innovation, and student success.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-900 shadow-xl transition hover:scale-105 hover:bg-slate-100">
              Apply For Admission
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">
              Contact School
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
