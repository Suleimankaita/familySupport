import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      title: "School Address",
      value: "No. 25 Education Road, Abuja, Nigeria",
      icon: "📍",
    },
    {
      title: "Phone Number",
      value: "+234 800 000 0000",
      icon: "📞",
    },
    {
      title: "Email Address",
      value: "info@schoolname.com",
      icon: "✉️",
    },
    {
      title: "Opening Hours",
      value: "Mon - Fri : 8:00AM - 4:00PM",
      icon: "⏰",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-500 via-blue-700 to-blue-950 py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-300 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
            Contact Our School
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            We Would Love To Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            Reach out to us for admissions, inquiries, support, or any information about our academic programs and school activities.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Get In Touch
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Contact Information
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our support team is always available to assist students, parents, and visitors.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-blue-900 text-3xl text-white shadow-lg">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[36px] bg-white p-8 shadow-2xl lg:p-10">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Send Message
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Let’s Talk With You
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Fill out the form below and our team will respond quickly.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />

                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />

                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                ></textarea>

                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {success && (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
                  Message sent successfully.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-blue-950 px-6 py-5 text-lg font-semibold text-white shadow-xl transition hover:scale-[1.02] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
            <div className="bg-gradient-to-r from-sky-500 to-blue-950 px-8 py-6 text-white">
              <h2 className="text-3xl font-bold">Our School Location</h2>
              <p className="mt-2 text-slate-200">
                Visit our campus and experience our environment.
              </p>
            </div>

            <div className="h-[450px] w-full overflow-hidden">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.674114228273!2d7.48929767455893!3d9.071977590990777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4fd8e4f1c9%3A0x2abcfcb3b4d5a8a0!2sAbuja!5e0!3m2!1sen!2sng!4v1716030000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* School Overview Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                About Our School
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
                A Modern Learning Environment Built For Future Leaders
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our school is committed to providing quality education that combines academic excellence, discipline, innovation, and leadership development. We create an environment where students are inspired to learn, grow, and achieve their dreams.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Through experienced teachers, modern classrooms, digital learning systems, extracurricular activities, and student-centered teaching methods, we prepare learners for higher education and future careers.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-sky-600">
                    15+
                  </h3>
                  <p className="mt-2 font-medium text-slate-700">
                    Years Of Academic Excellence
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-sky-600">
                    1,200+
                  </h3>
                  <p className="mt-2 font-medium text-slate-700">
                    Active Students
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-sky-600">
                    45+
                  </h3>
                  <p className="mt-2 font-medium text-slate-700">
                    Qualified Teachers
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6 shadow-md">
                  <h3 className="text-3xl font-bold text-sky-600">
                    98%
                  </h3>
                  <p className="mt-2 font-medium text-slate-700">
                    Examination Success Rate
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[36px] bg-gradient-to-br from-sky-500 to-blue-950 p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold">
                Why Parents Choose Our School
              </h3>

              <div className="mt-8 space-y-6">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                  <h4 className="text-xl font-semibold">
                    Modern Digital Learning
                  </h4>
                  <p className="mt-3 leading-7 text-slate-200">
                    Students learn with modern educational technology, computer laboratories, and interactive teaching systems.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                  <h4 className="text-xl font-semibold">
                    Safe & Friendly Environment
                  </h4>
                  <p className="mt-3 leading-7 text-slate-200">
                    We provide a secure and supportive environment where students feel confident, respected, and motivated.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                  <h4 className="text-xl font-semibold">
                    Skill Development Programs
                  </h4>
                  <p className="mt-3 leading-7 text-slate-200">
                    Beyond academics, students develop leadership, communication, teamwork, and innovation skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] bg-white p-10 shadow-xl">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-sky-500 to-blue-900 text-4xl text-white shadow-lg">
                🎯
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                To provide quality education that nurtures academic excellence, creativity, discipline, leadership, and moral values for lifelong success.
              </p>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-sky-500 to-blue-950 p-10 text-white shadow-2xl">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 text-4xl backdrop-blur-md">
                🚀
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                Our Vision
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-200">
                To become a leading institution recognized for educational excellence, innovation, and the development of future leaders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
