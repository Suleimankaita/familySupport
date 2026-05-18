import {
//   Facebook,
//   Instagram,
//   Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* About */}
          <div>

            <h2 className="text-3xl font-black">
              Family Support
            </h2>

            <p className="mt-6 text-sky-100 leading-8">
              Family Support School provides quality education,
              leadership development, innovation, and a safe
              learning environment for future leaders.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-8">

              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6347] transition-all cursor-pointer">
                {/* <Facebook /> */}
              </div>

              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6347] transition-all cursor-pointer">
                {/* <Instagram /> */}
              </div>

              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6347] transition-all cursor-pointer">
                {/* <Twitter /> */}
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold">
              Quick Links
            </h3>

            <div className="mt-7 flex flex-col gap-5 text-sky-100">

              <a href="/" className="hover:text-[#ff6347] transition-colors">Home</a>
              <a href="/About" className="hover:text-[#ff6347] transition-colors">About Us</a>
              <a href="/Programs" className="hover:text-[#ff6347] transition-colors">Programs</a>
              <a href="/Admissions" className="hover:text-[#ff6347] transition-colors">Admissions</a>
              <a href="/Contact" className="hover:text-[#ff6347] transition-colors">Contact</a>

            </div>
          </div>

          {/* Programs */}
          <div>

            <h3 className="text-2xl font-bold">
              Programs
            </h3>

            <div className="mt-7 flex flex-col gap-5 text-sky-100">

              <a href="/Nursery" className="hover:text-[#ff6347] transition-colors">Nursery School</a>
              <a href="/Primary" className="hover:text-[#ff6347] transition-colors">Primary School</a>
              <a href="/Secondary" className="hover:text-[#ff6347] transition-colors">Secondary School</a>
              <a href="/ICTTraining" className="hover:text-[#ff6347] transition-colors">ICT Training</a>
              <a href="/Sports" className="hover:text-[#ff6347] transition-colors">Sports Activities</a>

            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-bold">
              Contact Us
            </h3>

            <div className="mt-7 flex flex-col gap-6 text-sky-100">

              <div className="flex items-start gap-4">
                <MapPin className="text-[#ff6347]" />
                <p>Lagos, Nigeria</p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#ff6347]" />
                <p>+234 800 000 0000</p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#ff6347]" />
                <p>support@familysupportschool.com</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center text-sky-100">
          © 2026 Family Support School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;