import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbara = `py-5 px-12 md:px-24 bg-nav mt-3 rounded-xl border-0 border-solid border-transparent shadow-none flex justify-center flex-row items-center transition-all duration-700`;
const NavbarScrolled = `py-3 px-8 md:px-16 bg-nav mt-5 border border-solid border-primary-dark shadow-lg rounded-xl flex justify-center items-center flex-row transition-all duration-700`;

export default function Navbar() {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = isScrolled ? NavbarScrolled : Navbara;

  return (
    <>
      <div className="fixed top-0 left-0 z-[99] w-full flex justify-center items-center">
        <span className="block scale-150 absolute -translate-y-1/2 inset-0 bg-gradient-to-b from-amber-400/20 blur-2xl"></span>
        <motion.div
          className={navbarStyle}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="#about"
            className="text-white no-underline font-medium md:text-lg m-0 mx-2 md:mx-5 p-0 transition-all hover:text-zinc-400"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-white no-underline font-medium md:text-lg m-0 mx-2 md:mx-5 p-0 transition-all hover:text-zinc-400"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-white no-underline font-medium md:text-lg m-0 mx-2 md:mx-5 p-0 transition-all hover:text-zinc-400"
          >
            Projects
          </Link>
        </motion.div>
      </div>
    </>
  );
}
