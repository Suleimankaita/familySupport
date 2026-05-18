import { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Dumbbell,
  HeartPulse,
  Users,
  Target,
  Medal,
  Activity,
  Bike,
  Volleyball,
} from "lucide-react";

import PageHero from "../PageHero";
import CTASection from "../CTASection";

const categories = ["All", "Football", "Fitness", "Athletics", "Recreation"];

const sportsData = [
  {
    title: "Football Training Program",
    category: "Football",
    icon: <Trophy size={30} />,
    description:
      "Structured football training focusing on skills, tactics, teamwork, and competitive match preparation.",
  },
  {
    title: "Fitness & Strength Training",
    category: "Fitness",
    icon: <Dumbbell size={30} />,
    description:
      "Strength, endurance, and agility development using modern fitness techniques.",
  },
  {
    title: "Health & Wellness Education",
    category: "Fitness",
    icon: <HeartPulse size={30} />,
    description:
      "Teaching students healthy living, nutrition, and physical wellness habits.",
  },
  {
    title: "Team Building Activities",
    category: "Recreation",
    icon: <Users size={30} />,
    description:
      "Group activities that develop leadership, communication, and teamwork.",
  },
  {
    title: "Athletics & Track Events",
    category: "Athletics",
    icon: <Target size={30} />,
    description:
      "Sprinting, long-distance running, relay races, and field events.",
  },
  {
    title: "Sports Competitions",
    category: "Athletics",
    icon: <Medal size={30} />,
    description:
      "Inter-house and inter-school competitions that build confidence.",
  },
  {
    title: "Cycling & Endurance Training",
    category: "Fitness",
    icon: <Bike size={30} />,
    description:
      "Endurance and stamina development through structured cycling activities.",
  },
  {
    title: "Indoor Sports Activities",
    category: "Recreation",
    icon: <Volleyball size={30} />,
    description:
      "Indoor games like volleyball, table tennis, and badminton.",
  },
  {
    title: "Daily Physical Education",
    category: "Fitness",
    icon: <Activity size={30} />,
    description:
      "Daily PE sessions for maintaining active and healthy students.",
  },
];

export default function Sports() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? sportsData
      : sportsData.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden text-slate-800">

      {/* HERO */}
      <PageHero
        badge="Sports & Fitness"
        title="Building Strong"
        highlight="Healthy Champions"
        description="Our sports program builds discipline, teamwork, leadership, and physical excellence through structured training."
        image="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
      />

      {/* CATEGORY FILTER */}
      <section className="mt-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-sky-500 text-white border-sky-500 shadow-lg scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:text-sky-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Sports Activities
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Structured programs designed to improve physical strength, discipline, and teamwork.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filtered.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="text-sky-600">{item.icon}</div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

                <div className="mt-6 text-sm font-semibold text-sky-600">
                  {item.category}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mt-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid md:grid-cols-3 gap-6 text-center">

          {[
            { value: "12+", label: "Sports Programs" },
            { value: "20+", label: "Annual Events" },
            { value: "5+", label: "Professional Coaches" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8"
            >
              <h3 className="text-5xl font-bold text-sky-600">
                {s.value}
              </h3>
              <p className="mt-2 text-slate-600">{s.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <div className="mt-28">
        <CTASection />
      </div>

    </div>
  );
}