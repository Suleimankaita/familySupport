import { motion } from "framer-motion";
import {
  ShieldCheck,
  MonitorSmartphone,
  BookMarked,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    desc: "A secure and supportive learning atmosphere for every child.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Technology",
    desc: "Digital learning with smart classrooms and modern ICT tools.",
  },
  {
    icon: BookMarked,
    title: "Quality Education",
    desc: "Structured academic excellence with highly trained teachers.",
  },
  {
    icon: Users,
    title: "Strong Community",
    desc: "Parents, teachers, and students working together for success.",
  },
];

function Features() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sky-500 font-bold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-5xl font-black text-blue-950 leading-tight">
            We Provide The Best Learning Experience
          </h2>

          <p className="mt-6 text-lg text-gray-500 leading-8">
            Family Support School combines modern technology,
            discipline, innovation, and quality teaching to shape
            future leaders.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="
                  group
                  bg-gradient-to-br
                  from-white
                  to-sky-50
                  rounded-[30px]
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  border
                  border-sky-100
                "
              >

                <div
                  className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-gradient-to-br
                    from-sky-400
                    to-blue-900
                    flex
                    items-center
                    justify-center
                    shadow-xl
                  "
                >
                  <Icon className="text-white" size={34} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-blue-950">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-500 leading-7">
                  {feature.desc}
                </p>

                <div className="mt-7">
                  <button className="text-[#ff6347] font-semibold">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;