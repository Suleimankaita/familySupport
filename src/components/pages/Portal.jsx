function Portal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-950 flex items-center justify-center px-5 py-20">

      <div className="grid lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-2xl max-w-6xl w-full">

        {/* Left */}
        <div className="hidden lg:flex flex-col justify-center bg-blue-950 text-white p-16">

          <h1 className="text-5xl font-black leading-tight">
            Welcome Back To Family Support School
          </h1>

          <p className="mt-8 text-lg leading-8 text-sky-100">
            Access student records, attendance,
            results, and educational resources.
          </p>

        </div>

        {/* Right */}
        <div className="p-10 lg:p-16">

          <h2 className="text-4xl font-black text-blue-950">
            Student Portal Login
          </h2>

          <div className="mt-10 space-y-6">

            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full
                h-16
                rounded-2xl
                border
                border-gray-200
                px-5
                outline-none
              "
            />

            <input
              type="password"
              placeholder="Password"
              className="
                w-full
                h-16
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
                h-16
                rounded-2xl
                bg-[#ff6347]
                text-white
                font-bold
                hover:scale-[1.02]
                transition-all
              "
            >
              Login
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Portal;