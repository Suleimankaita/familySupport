import {
  FlaskConical,
  Laptop,
  Briefcase,
  Globe,
  Shield,
  GraduationCap,
} from "lucide-react";

import PageHero from "../components/PageHero";
import FeatureCard from "../components/FeatureCard";
import CTASection from "../components/CTASection";

function Secondary() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden">

      <PageHero
        badge="Secondary Education"
        title="Preparing Students For"
        highlight="University & Leadership"
        description="Our secondary school provides advanced academic education, leadership training, science programs, technology integration, and career preparation for future success."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
      />

      {/* FEATURES */}
      <section className="mt-32">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <FeatureCard
              title="Science Programs"
              description="Advanced laboratory and science education programs for innovation and research."
              icon={<FlaskConical size={34} />}
            />

            <FeatureCard
              title="ICT Education"
              description="Students learn coding, digital skills, AI fundamentals, and modern technology."
              icon={<Laptop size={34} />}
            />

            <FeatureCard
              title="Career Development"
              description="Career guidance programs help students prepare for university and professional careers."
              icon={<Briefcase size={34} />}
            />

            <FeatureCard
              title="Global Learning"
              description="Students gain global perspectives through innovation and modern educational systems."
              icon={<Globe size={34} />}
            />

            <FeatureCard
              title="Discipline & Ethics"
              description="Strong discipline and moral education help students become responsible leaders."
              icon={<Shield size={34} />}
            />

            <FeatureCard
              title="University Preparation"
              description="Comprehensive academic programs prepare students for higher education success."
              icon={<GraduationCap size={34} />}
            />

          </div>
        </div>
      </section>

      <CTASection />

    </div>
  );
}

export default Secondary;