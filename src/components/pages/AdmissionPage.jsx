import {
  CheckCircle,
  FileText,
  GraduationCap,
  Users,
  Shield,
} from "lucide-react";

function Admissions() {
  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 overflow-hidden">

      {/* HERO */}
      <section className="relative">

        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff6347]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 shadow-lg border border-sky-100">
              <GraduationCap className="text-sky-500" size={18} />

              <span className="text-blue-950 font-semibold">
                Admissions Open 2026
              </span>
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-blue-950">
              Give Your Child A
              <span className="text-sky-500"> Bright </span>
              Future
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
              Family Support School provides world-class education,
              leadership development, innovation, discipline, and
              a supportive environment for future leaders.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid sm:grid-cols-2 gap-5">

              <div className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-lg">
                <Shield className="text-[#ff6347]" />

                <div>
                  <h3 className="font-bold text-blue-950">
                    Safe Environment
                  </h3>

                  <p className="text-sm text-gray-500">
                    Secure learning atmosphere
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-lg">
                <Users className="text-sky-500" />

                <div>
                  <h3 className="font-bold text-blue-950">
                    Expert Teachers
                  </h3>

                  <p className="text-sm text-gray-500">
                    Highly qualified educators
                  </p>
                </div>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">

              <button
                className="
                  bg-gradient-to-r
                  from-sky-500
                  to-blue-950
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  shadow-2xl
                  hover:scale-105
                  transition-all
                "
              >
                Apply For Admission
              </button>

              <button
                className="
                  border-2
                  border-sky-500
                  text-sky-600
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  hover:bg-sky-50
                  transition-all
                "
              >
                Download Prospectus
              </button>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
              alt="Admissions"
              className="
                rounded-[40px]
                shadow-2xl
                h-[700px]
                w-full
                object-cover
              "
            />

            {/* FLOATING CARD */}
            <div
              className="
                absolute
                bottom-10
                left-1/2
                -translate-x-1/2
                bg-white
                rounded-[30px]
                shadow-2xl
                p-6
                w-[90%]
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-3xl font-black text-blue-950">
                    5,000+
                  </h3>

                  <p className="text-gray-500">
                    Active Students
                  </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center">
                  <GraduationCap className="text-sky-500" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mt-32">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-widest text-sky-500 font-bold">
              Admission Process
            </p>

            <h2 className="mt-5 text-5xl font-black text-blue-950">
              Simple Enrollment Process
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Complete the following steps to secure admission
              for your child at Family Support School.
            </p>

          </div>

          {/* PROCESS CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {[
              {
                icon: FileText,
                title: "Application Form",
                desc: "Complete the online admission application form.",
              },
              {
                icon: Users,
                title: "Interview",
                desc: "Meet with our admissions team for screening.",
              },
              {
                icon: GraduationCap,
                title: "Assessment",
                desc: "Students complete entrance assessment tests.",
              },
              {
                icon: CheckCircle,
                title: "Admission Approval",
                desc: "Receive confirmation and enrollment details.",
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-[35px]
                    p-10
                    shadow-xl
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-20
                      h-20
                      rounded-3xl
                      bg-gradient-to-br
                      from-sky-500
                      to-blue-950
                      flex
                      items-center
                      justify-center
                      shadow-xl
                    "
                  >
                    <Icon className="text-white" size={34} />
                  </div>

                  <h3 className="mt-8 text-2xl font-black text-blue-950">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-gray-500 leading-7">
                    {step.desc}
                  </p>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="mt-32">

        <div className="max-w-5xl mx-auto px-5">

          <div
            className="
              bg-white
              rounded-[45px]
              shadow-2xl
              p-10
              lg:p-16
            "
          >

            <div className="text-center">

              <h2 className="text-5xl font-black text-blue-950">
                Quick Admission Form
              </h2>

              <p className="mt-5 text-lg text-gray-500">
                Start your child's admission process today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-14">

              <input
                type="text"
                placeholder="Parent Full Name"
                className="h-16 rounded-2xl border border-gray-200 px-5 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-16 rounded-2xl border border-gray-200 px-5 outline-none"
              />

              <input
                type="text"
                placeholder="Student Name"
                className="h-16 rounded-2xl border border-gray-200 px-5 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="h-16 rounded-2xl border border-gray-200 px-5 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Additional Information"
                className="md:col-span-2 rounded-2xl border border-gray-200 p-5 outline-none"
              />

            </div>

            <button
              className="
                mt-8
                w-full
                h-16
                rounded-2xl
                bg-gradient-to-r
                from-sky-500
                to-blue-950
                text-white
                font-bold
                text-lg
                hover:scale-[1.01]
                transition-all
              "
            >
              Submit Application
            </button>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Admissions;