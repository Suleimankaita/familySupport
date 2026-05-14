
function Admissions() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div
          className="
            bg-gradient-to-r
            from-sky-500
            to-blue-950
            rounded-[45px]
            p-12
            lg:p-20
            text-white
            relative
            overflow-hidden
          "
        >

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>

              <p className="uppercase tracking-widest font-bold text-sky-100">
                Admissions Open
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight">
                Enroll Your Child Today
              </h2>

              <p className="mt-7 text-lg leading-8 text-sky-100">
                Give your child access to world-class education,
                innovation, leadership development, and a supportive
                learning environment.
              </p>

              <button
                className="
                  mt-10
                  bg-[#ff6347]
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  hover:scale-105
                  transition-all
                  shadow-2xl
                "
              >
                Apply For Admission
              </button>
            </div>

            {/* Right */}
            <div className="bg-white rounded-[35px] p-10 text-black shadow-2xl">

              <h3 className="text-3xl font-black text-blue-950">
                Quick Admission Form
              </h3>

              <div className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder="Parent Name"
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    outline-none
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    outline-none
                  "
                />

                <input
                  type="text"
                  placeholder="Student Name"
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    outline-none
                  "
                />

                <button
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    bg-blue-950
                    text-white
                    font-bold
                    hover:bg-sky-500
                    transition-all
                  "
                >
                  Submit Application
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Admissions;