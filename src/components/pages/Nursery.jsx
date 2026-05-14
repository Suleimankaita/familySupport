import {
  Baby,
  Puzzle,
  Music4,
  Paintbrush,
  ShieldCheck,
  Users,
} from "lucide-react";

import PageHero from "../PageHero";
import CTASection from "../CTASection";
import FeatureCard from "../FeatureCard";

function Nursery() {
  return (
    <div className="bg-pink-50 min-h-screen pt-32 pb-24 overflow-hidden">

      {/* HERO */}
      <PageHero
        badge="Nursery Education"
        title="Building Strong"
        highlight="Early Childhood Foundations"
        description="Our nursery school provides a nurturing, creative, and interactive environment where children develop communication, confidence, creativity, emotional intelligence, and foundational academic skills."
        image="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop"
      />

      {/* FEATURES */}
      <section className="mt-32">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="text-center max-w-4xl mx-auto">

            <h2 className="text-5xl font-black text-blue-950">
              Nursery Learning Experience
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Our nursery section combines play-based learning,
              creativity, and structured development programs
              to prepare children for future academic success.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            <FeatureCard
              title="Creative Learning"
              description="Children engage in storytelling, puzzles, drawing, and hands-on activities to develop imagination and creativity."
              icon={<Paintbrush size={34} />}
            />

            <FeatureCard
              title="Safe Environment"
              description="We provide a secure and child-friendly environment where children learn comfortably and confidently."
              icon={<ShieldCheck size={34} />}
            />

            <FeatureCard
              title="Social Interaction"
              description="Students develop communication, teamwork, sharing, and leadership skills through group activities."
              icon={<Users size={34} />}
            />

            <FeatureCard
              title="Music & Fun"
              description="Children participate in music, dance, and interactive entertainment activities for emotional development."
              icon={<Music4 size={34} />}
            />

            <FeatureCard
              title="Problem Solving"
              description="Interactive games and puzzles help children improve logical thinking and cognitive development."
              icon={<Puzzle size={34} />}
            />

            <FeatureCard
              title="Early Childhood Care"
              description="Our experienced teachers guide every child through personalized emotional and educational development."
              icon={<Baby size={34} />}
            />

          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="mt-32">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                number: "500+",
                title: "Happy Children",
              },
              {
                number: "25+",
                title: "Professional Teachers",
              },
              {
                number: "10+",
                title: "Creative Activities",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[40px]
                  p-12
                  text-center
                  shadow-xl
                "
              >

                <h2 className="text-6xl font-black text-pink-500">
                  {item.number}
                </h2>

                <p className="mt-4 text-xl text-gray-600">
                  {item.title}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

    </div>
  );
}

export default Nursery;