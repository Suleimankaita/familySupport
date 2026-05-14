import {
  BookOpen,
  Monitor,
  Trophy,
  Users,
  Brain,
  GraduationCap,
} from "lucide-react";

import PageHero from "../PageHero";
import FeatureCard from "../FeatureCard";
import CTASection from "../CTASection";

function Primary() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 overflow-hidden">

      <PageHero
        badge="Primary Education"
        title="Empowering"
        highlight="Young Learners"
        description="Our primary school develops academic excellence, leadership, critical thinking, creativity, and digital literacy through modern educational systems and interactive learning experiences."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
      />

      {/* FEATURES */}
      <section className="mt-32">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <FeatureCard
              title="Academic Excellence"
              description="Students receive high-quality education focused on literacy, mathematics, science, and communication."
              icon={<BookOpen size={34} />}
            />

            <FeatureCard
              title="Technology Integration"
              description="Modern classrooms integrate computers, projectors, and digital learning resources."
              icon={<Monitor size={34} />}
            />

            <FeatureCard
              title="Leadership Development"
              description="Students participate in leadership programs, teamwork, and confidence-building activities."
              icon={<Users size={34} />}
            />

            <FeatureCard
              title="Critical Thinking"
              description="Interactive learning improves creativity, analytical reasoning, and problem-solving skills."
              icon={<Brain size={34} />}
            />

            <FeatureCard
              title="Student Achievement"
              description="Students participate in competitions, quizzes, and academic award programs."
              icon={<Trophy size={34} />}
            />

            <FeatureCard
              title="Future Preparation"
              description="We prepare students academically and socially for secondary education success."
              icon={<GraduationCap size={34} />}
            />

          </div>
        </div>
      </section>

      <CTASection />

    </div>
  );
}

export default Primary;