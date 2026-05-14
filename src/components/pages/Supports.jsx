import {
  Dumbbell,
  Trophy,
  HeartPulse,
  Users,
  Target,
  Medal,
} from "lucide-react";

import PageHero from "../PageHero";
import FeatureCard from "../FeatureCard";
import CTASection from "../CTASection";

function Sports() {
  return (
    <div className="bg-blue-950 min-h-screen pt-32 pb-24 overflow-hidden">

      <PageHero
        badge="Sports & Fitness"
        title="Developing Strong"
        highlight="Healthy Champions"
        description="Students participate in sports, athletics, physical fitness programs, competitions, teamwork activities, and leadership development through modern sports education."
        image="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mt-32">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <FeatureCard
              title="Football Programs"
              description="Students participate in football training and competitions."
              icon={<Trophy size={34} />}
            />

            <FeatureCard
              title="Fitness Training"
              description="Regular fitness programs improve student health and strength."
              icon={<Dumbbell size={34} />}
            />

            <FeatureCard
              title="Health Education"
              description="Students learn healthy living and physical wellness practices."
              icon={<HeartPulse size={34} />}
            />

            <FeatureCard
              title="Team Building"
              description="Sports activities improve teamwork and leadership abilities."
              icon={<Users size={34} />}
            />

            <FeatureCard
              title="Athletics"
              description="Track and field activities improve performance and discipline."
              icon={<Target size={34} />}
            />

            <FeatureCard
              title="Competitions"
              description="Students compete in local and national sports events."
              icon={<Medal size={34} />}
            />

          </div>
        </div>
      </section>

      <CTASection />

    </div>
  );
}

export default Sports;