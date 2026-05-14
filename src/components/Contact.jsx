function Contact() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-widest text-sky-500 font-bold">
            Contact Us
          </p>

          <h1 className="mt-5 text-6xl font-black text-blue-950">
            We Would Love To Hear From You
          </h1>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-24">

          {/* Form */}
          <div className="bg-gray-50 rounded-[40px] p-10 shadow-xl">

            <h2 className="text-4xl font-black text-blue-950">
              Send Message
            </h2>

            <div className="mt-10 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-16 rounded-2xl border border-gray-200 px-5 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-16 rounded-2xl border border-gray-200 px-5 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full rounded-2xl border border-gray-200 p-5 outline-none"
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
                Send Message
              </button>

            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Contact"
              className="
                rounded-[40px]
                shadow-2xl
                h-full
                object-cover
              "
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;