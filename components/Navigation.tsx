"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuIcon from "../public/images/menu.png";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "works", label: "Works", path: "/works" },

    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav className=" fixed   w-full   flex flex-col  justify-center items-center  top-0 right-0  z-50 !px-3 !mt-3 !mr-2 py-2.5 h-12  ">
      <div className="w-full mx-auto px-8   flex items-center justify-end">
        <div className="justify-self-center absolute left-1/2 -translate-x-1/2 ">
          <motion.div
            className="flex items-center gap-3 !pt-5"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div className="relative bg-[#1a1d51]  ">
              <motion.h1 className="text-5xl font-bold">H</motion.h1>
              <motion.span className="text-xs absolute top-0 right-0 -translate-y-1/2 translate-x-full">
                Mark
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="w-fit  bg-white rounded-2xl  !py-2.5 !px-3 flex items-center justify-end">
          <motion.div
            className="flex  relative items-center gap-2 z-10 overflow-hidden "
            animate={{ width: isMenuOpen ? "auto" : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {navItems.map((item, index) => {
              const isActive = false;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={isMenuOpen ? "" : "pointer-events-none"}
                >
                  <motion.div
                    className=" text-right relative flex flex-col gap-0.5 cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className={`block text-base text-right text-black transition-colors !pr-8 ${
                        isActive ? "text-white" : " text-[#415598]"
                      }`}
                      animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {item.label}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="w-full h-0.5 text-white bg-white"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
          <Image
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-8 h-8 z-50 relative cursor-pointer"
            src={MenuIcon}
            alt="Menu Icon"
          />
        </motion.div>
      </div>
    </motion.nav>
  );
}
