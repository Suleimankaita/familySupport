import { motion } from "framer-motion";
// ss
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  GraduationCap,
} from "lucide-react";
import img from "../assets/landing.jpeg";
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 pt-36 pb-24">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white shadow-lg border border-sky-100 px-5 py-2 rounded-full mb-7">
            <GraduationCap className="text-sky-500" size={18} />

            <span className="text-sm font-semibold text-blue-950">
              Welcome To Family Support School
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-black leading-tight text-blue-950">
            Building
            <span className="text-sky-500"> Future </span>
            Leaders With Modern Education
          </h1>

          {/* Description */}
          <p className="mt-7 text-lg leading-8 text-gray-600 max-w-xl">
            Family Support School provides world-class education,
            innovation, technology, discipline, and leadership skills
            to prepare students for a successful future.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <button
              className="
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-sky-500
                to-blue-900
                text-white
                font-semibold
                shadow-2xl
                hover:scale-105
                transition-all
                duration-300
                flex
                items-center
                gap-3
              "
            >
              Apply Now
              <ArrowRight size={20} />
            </button>

            <button
              className="
                px-8
                py-4
                rounded-full
                border-2
                border-sky-500
                text-sky-600
                font-semibold
                hover:bg-sky-50
                transition-all
              "
            >
              Explore Programs
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white rounded-3xl shadow-xl p-5">
              <h2 className="text-3xl font-black text-blue-950">
                5K+
              </h2>

              <p className="text-gray-500 mt-2">
                Students
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-5">
              <h2 className="text-3xl font-black text-blue-950">
                120+
              </h2>

              <p className="text-gray-500 mt-2">
                Teachers
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-5">
              <h2 className="text-3xl font-black text-blue-950">
                98%
              </h2>

              <p className="text-gray-500 mt-2">
                Success
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-5">
              <h2 className="text-3xl font-black text-blue-950">
                15+
              </h2>

              <p className="text-gray-500 mt-2">
                Awards
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* Main Image */}
          <div className="relative z-10">
            <img
            //   src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
              src={img}
              alt="Students"
              className="
                rounded-[40px]
                shadow-2xl
                object-cover
                h-[650px]
                w-full
              "
            />
          </div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              absolute
              top-10
              -left-10
              bg-white
              rounded-3xl
              shadow-2xl
              p-5
              w-60
              z-20
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">
                <BookOpen className="text-sky-500" />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Smart Learning
                </h3>

                <p className="text-sm text-gray-500">
                  Modern classrooms & ICT
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
              absolute
              bottom-10
              -right-5
              bg-white
              rounded-3xl
              shadow-2xl
              p-5
              w-64
              z-20
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ff6347]/10 flex items-center justify-center">
                <Trophy className="text-[#ff6347]" />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Excellence Awards
                </h3>

                <p className="text-sm text-gray-500">
                  Academic & leadership growth
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 3 */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="
              absolute
              bottom-44
              left-0
              bg-white
              rounded-3xl
              shadow-2xl
              p-5
              w-52
              z-20
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Users className="text-blue-900" />
              </div>

              <div>
                <h3 className="font-bold text-blue-950">
                  Community
                </h3>

                <p className="text-sm text-gray-500">
                  Strong parent support
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Hero;