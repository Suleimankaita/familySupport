import { useState } from "react";
import imsecond1 from "../../assets/SPK.jpeg";
import imsecond2 from "../../assets/GroupA.jpeg";
import imsecond3  from "../../assets/interview.jpeg";
import {
  Users,
  GraduationCap,
  School,
  CheckCircle2,
  Newspaper,
  Settings,
  Award,
  BookOpen,
  Trophy,
  ShieldCheck,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";

const roles = {
  headmaster: {
    title: "Headmaster of Nursery & Primary School",
    short: "Leadership • Administration • Academic Excellence",
    gradient: "from-sky-500 via-blue-600 to-blue-950",
    badge: "Primary & Nursery Administration",
    description:
      "The Headmaster supervises the Nursery and Primary sections of the school, ensuring academic excellence, discipline, student safety, teacher performance, and modern learning standards. The administration focuses on building strong educational foundations, creativity, confidence, leadership, and moral development for young learners.",

    responsibilities: [
      "Teacher Supervision & Staff Coordination",
      "Student Admission & Registration Management",
      "Primary & Nursery Academic Planning",
      "Classroom Monitoring & Student Welfare",
      "Discipline & Moral Development",
      "Parent Communication & Academic Reporting",
    ],

    articles: [
      {
        title: "Building Strong Educational Foundations",
        content:
          "Our nursery and primary school system focuses on literacy, creativity, confidence-building, and foundational mathematics to help students develop strong learning abilities from an early stage.",
      },
      {
        title: "Interactive Learning Environment",
        content:
          "Students learn through modern teaching methods, classroom interaction, educational games, and technology-supported learning systems.",
      },
    ],

    images: [
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  junior: {
    title: "Junior Secondary School",
    short: "Growth • Discipline • Skill Development",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    badge: "JS1 - JS3 Student Development",
    description:
      "The Junior Secondary section develops academic discipline, communication skills, leadership abilities, and technological awareness. Students are guided through structured educational systems that prepare them for advanced senior secondary education.",

    responsibilities: [
      "Continuous Assessment & Assignments",
      "ICT & Technology Learning Programs",
      "Leadership & Teamwork Development",
      "Student Performance Tracking",
      "Discipline Monitoring & Attendance",
      "Extracurricular Activities & Competitions",
    ],

    articles: [
      {
        title: "Developing Leadership Through Education",
        content:
          "Students participate in debates, teamwork activities, science programs, and student leadership opportunities to improve communication and confidence.",
      },
      {
        title: "Technology & Innovation Training",
        content:
          "Junior students are introduced to computer systems, digital literacy, ICT education, and modern innovation practices.",
      },
    ],

    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  senior: {
    title: "Senior Secondary School",
    short: "Excellence • Career Growth • Future Success",
    gradient: "from-purple-600 via-indigo-600 to-blue-900",
    badge: "SS1 - SS3 Academic Excellence",
    description:
      "The Senior Secondary section prepares students for WAEC, NECO, JAMB, and higher education through advanced academic systems, practical learning, career guidance, innovation, and examination preparation.",

    responsibilities: [
      "WAEC & NECO Preparation Programs",
      "Advanced Subject Specialization",
      "University & Career Guidance",
      "Mock Examination Systems",
      "Research & Innovation Activities",
      "Academic Performance Analysis",
    ],

    articles: [
      {
        title: "Preparing Students For Higher Education",
        content:
          "Students receive advanced academic support, career mentoring, and examination preparation to succeed in university admissions and professional careers.",
      },
      {
        title: "Innovation & Career Development",
        content:
          "Senior students participate in innovation projects, entrepreneurship training, technology programs, and career guidance workshops.",
      },
    ],

    images: [
      imsecond1,
      imsecond2,
      imsecond3,
    ],
  },
};

export default function SchoolProfiles() {
    const {position}=useParams();
  const [activeRole, setActiveRole] = useState(position?.toLowerCase()?position?.toLowerCase().includes("junior") ? "junior" : "senior" : "headmaster");
  const role = roles[activeRole];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">

        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
            }}
            className="absolute top-10 left-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
            className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-5 py-2 text-sky-700 font-semibold">
              <Sparkles size={18} />
              School Administration & Academic Structure
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              Meet Our Academic
              <span className="block bg-gradient-to-r from-sky-500 to-blue-900 bg-clip-text text-transparent">
                Leadership System
              </span>
            </h1>

            <p className="mt-8 max-w-4xl mx-auto text-lg leading-9 text-slate-600">
              Our school leadership and academic structure are designed to provide students with discipline, innovation, quality education, leadership development, and future success across all educational levels.
            </p>
          </motion.div>

          {/* SWITCHER */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {Object.keys(roles).map((key) => (
              <button
                key={key}
                onClick={() => setActiveRole(key)}
                className={`rounded-2xl px-7 py-4 font-semibold transition-all duration-300 ${
                  activeRole === key
                    ? "bg-gradient-to-r from-sky-500 to-blue-900 text-white shadow-2xl scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-sky-300 hover:scale-105"
                }`}
              >
                {roles[key].title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ROLE SECTION */}
      <AnimatePresence mode="wait">

        <motion.section
          key={activeRole}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="pb-24"
        >
          <div className="max-w-7xl mx-auto px-6">

            {/* MAIN CARD */}
            <div className={`relative overflow-hidden rounded-[40px] bg-gradient-to-r ${role?.gradient} p-10 md:p-14 text-white shadow-2xl`}>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
                className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"
              />

              <div className="relative z-10">

                <div className="inline-flex rounded-full bg-white/10 px-5 py-2 backdrop-blur-md">
                  {role.badge}
                </div>

                <h2 className="mt-6 text-5xl font-extrabold leading-tight">
                  {role.title}
                </h2>

                <p className="mt-3 text-xl text-white/80">
                  {role.short}
                </p>

                <p className="mt-8 max-w-4xl text-lg leading-9 text-white/90">
                  {role.description}
                </p>

                {/* RESPONSIBILITIES */}
                <div className="mt-12 grid md:grid-cols-2 gap-5">
                  {role.responsibilities.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md"
                    >
                      <CheckCircle2 className="mt-1" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* GALLERY */}
            <div className="mt-20">
              <div className="flex items-center gap-3 mb-8">
                <School className="text-sky-600" />
                <h3 className="text-3xl font-bold text-slate-900">
                  School Environment & Activities
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {role.images.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04 }}
                    className="overflow-hidden rounded-[30px] shadow-xl"
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-80 w-full object-cover transition duration-700 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ARTICLES */}
            <div className="mt-24">

              <div className="flex items-center gap-3 mb-8">
                <Newspaper className="text-sky-600" />
                <h3 className="text-3xl font-bold text-slate-900">
                  Articles & Academic Insights
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">

                {role.articles.map((article, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="rounded-[32px] bg-white p-8 shadow-lg border border-slate-100"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-900 text-white">
                      <BookOpen />
                    </div>

                    <h4 className="mt-6 text-2xl font-bold text-slate-900">
                      {article.title}
                    </h4>

                    <p className="mt-5 leading-8 text-slate-600">
                      {article.content}
                    </p>

                    <button className="mt-6 font-semibold text-sky-600">
                      Read Full Article →
                    </button>
                  </motion.div>
                ))}

              </div>
            </div>

            {/* FEATURES */}
            <div className="mt-24 grid md:grid-cols-2 xl:grid-cols-4 gap-6">

              {[
                {
                  icon: <Settings />,
                  title: "School Management",
                  desc: "Academic and operational control systems.",
                },
                {
                  icon: <Award />,
                  title: "Student Excellence",
                  desc: "Performance tracking and achievement systems.",
                },
                {
                  icon: <Users />,
                  title: "Student Development",
                  desc: "Leadership and teamwork development.",
                },
                {
                  icon: <CalendarDays />,
                  title: "Academic Activities",
                  desc: "Events, competitions, and academic programs.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="rounded-[28px] bg-white p-8 shadow-lg border border-slate-100"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-900 text-white">
                    {item.icon}
                  </div>

                  <h4 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h4>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>
        </motion.section>

      </AnimatePresence>
    </div>
  );
}