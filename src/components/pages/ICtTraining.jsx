import {
  Code2,
  Cpu,
  Shield,
  Brain,
  Globe,
  Database,
} from "lucide-react";

import PageHero from "../PageHero";
import FeatureCard from "../FeatureCard";
import CTASection from "../CTASection";

function ICTTraining() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 overflow-hidden">

      <PageHero
        badge="ICT & Technology"
        title="Technology Driven"
        highlight="Learning Experience"
        description="Students gain modern digital skills including programming, robotics, cybersecurity, AI fundamentals, web development, and computer literacy."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mt-32">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <FeatureCard
              title="Programming"
              description="Students learn modern programming languages and software development."
              icon={<Code2 size={34} />}
            />

            <FeatureCard
              title="Artificial Intelligence"
              description="Introduction to machine learning, AI systems, and automation."
              icon={<Brain size={34} />}
            />

            <FeatureCard
              title="Cybersecurity"
              description="Learn internet safety, digital protection, and cybersecurity basics."
              icon={<Shield size={34} />}
            />

            <FeatureCard
              title="Robotics"
              description="Hands-on robotics training and hardware programming systems."
              icon={<Cpu size={34} />}
            />

            <FeatureCard
              title="Internet Technology"
              description="Students understand modern internet systems and web technologies."
              icon={<Globe size={34} />}
            />

            <FeatureCard
              title="Database Systems"
              description="Introduction to databases, data storage, and management systems."
              icon={<Database size={34} />}
            />

          </div>
        </div>
      </section>

      <CTASection />

    </div>
  );
}

export default ICTTraining;