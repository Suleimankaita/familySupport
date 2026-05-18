import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import Logo from "../assets/family_logo.jpeg";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Admissions", path: "/Admissions" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 "
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-900 flex items-center justify-center shadow-lg">
            {/* <GraduationCap className="text-white" size={26} /> */}
            <img src={Logo} alt="Logo" className="w-full h-full rounded-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-blue-950">
              Family Support
            </h1>

            <p className="text-sm text-sky-600 -mt-1">
              School Portal
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="
                relative
                link
                text-blue-950
                font-medium
                transition
                hover:text-sky-500
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-tomato
                after:transition-all
                hover:after:w-full
              "
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA */}
          <Link
            to="/portal"
            className="
              bg-gradient-to-r
              from-sky-500
              to-blue-900
              text-white
              px-6
              py-3
              rounded-full
              font-semibold
              shadow-lg
              hover:scale-105
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            Student Portal
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            lg:hidden
            w-11
            h-11
            rounded-xl
            bg-sky-100
            flex
            items-center
            justify-center
            text-blue-950
          "
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ${open ? "max-h-[500px]" : "max-h-0"}
        `}
      >
        <div className="px-5 pb-6 bg-white border-t border-sky-100">
          <div className="flex flex-col gap-5 pt-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="
                  text-blue-950
                  font-medium
                  hover:text-sky-500
                  transition
                "
              >
                {link.name}
              </Link>
            ))}

            <NavLink
              to="/portal"
              className="
                mt-3
                bg-gradient-to-r
                from-sky-500
                to-blue-900
                text-white
                py-3
                rounded-full
                text-center
                font-semibold
                shadow-lg
              "
            >
              Student Portal
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;