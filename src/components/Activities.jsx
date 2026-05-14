import {
  Trophy,
  Music,
  Monitor,
  Dumbbell,
} from "lucide-react";

const activities = [
  {
    icon: Trophy,
    title: "Sports Activities",
  },
  {
    icon: Music,
    title: "Music & Arts",
  },
  {
    icon: Monitor,
    title: "Coding Classes",
  },
  {
    icon: Dumbbell,
    title: "Fitness Programs",
  },
];

function Activities() {
  return (
    <section className="py-28 bg-gradient-to-br from-blue-950 to-sky-600 text-white">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-widest text-sky-200 font-bold">
            Student Activities
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight">
            Helping Students Grow Beyond Academics
          </h2>

          <p className="mt-6 text-lg leading-8 text-sky-100">
            We encourage creativity, innovation, leadership,
            teamwork, and healthy lifestyles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <div
                key={index}
                className="
                  bg-white/10
                  backdrop-blur-lg
                  border
                  border-white/20
                  rounded-[35px]
                  p-10
                  text-center
                  hover:bg-white/20
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-24
                    h-24
                    rounded-full
                    bg-white
                    mx-auto
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    className="text-[#ff6347]"
                    size={42}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {activity.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Activities;