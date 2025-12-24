"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import HobbitTextAnimation from "@/components/HobbitTextAnimation";
import { hobbit } from "./const";
import hummanImage from "../public/images/human.png";
import avatarImage from "../public/images/avatar.png";
import Image, { StaticImageData } from "next/image";

export default function Home() {
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);

  // Remove the second effect entirely, as all state transitions are now handled in the interval callback.
  return (
    <div className="min-h-screen relative overflow-hidden  font-momo flex justify-center w-full  mx-auto">
      {/* Animated Background Grid */}
      <motion.div
        className=" inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Navigation Component */}

      {/* Hero Section */}
      <div className="flex justify-center items-center relative">
        <div className="relative pt-32 pb-20 px-8 max-w-250 mx-auto  h-full !mt-96">
          <div className="max-w-7xl ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 z-10"
              >
                <motion.h2
                  className="text-5xl font-normal text-white !pl-34"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <motion.span
                    className="text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Hello👋,
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="text-xl">My name is</span> <br />
                    <motion.span
                      initial={{ scale: 1 }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.2 },
                      }}
                      className="font-bold  text-white underline cursor-pointer inline-block"
                    >
                      <HoverFollowImage />
                    </motion.span>
                  </motion.span>
                </motion.h2>

                <motion.div
                  className="text-base text-white leading-relaxed space-y-2"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                ></motion.div>
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="z-10 !pl-8"
              >
                <motion.h2
                  className="text-5xl font-normal  text-white"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <motion.span
                    className="text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  ></motion.span>

                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="text-xl">I am a</span> <br />
                    <motion.span
                      initial={{ scale: 1 }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.2 },
                      }}
                      className="font-bold  text-white  inline-block"
                    >
                      Front-end developer
                    </motion.span>
                  </motion.span>
                </motion.h2>

                <motion.div
                  className="text-base text-white leading-relaxed space-y-2"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                ></motion.div>
              </motion.div>
              {/* Right Content - Profile Image */}
              <motion.div
                className="fixed bottom-30 left-1/2 transform -translate-x-1/2  w-[522px] h-[590px] flex justify-center items-center"
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                onHoverStart={() => setIsHoveringProfile(true)}
                onHoverEnd={() => setIsHoveringProfile(false)}
              >
                <motion.div
                  className=""
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Profile Image Placeholder */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl shadow-2xl cursor-pointer"
                    animate={{
                      boxShadow: [
                        "0 0 60px rgba(168, 85, 247, 0.4)",
                        "0 0 80px rgba(236, 72, 153, 0.4)",
                        "0 0 60px rgba(59, 130, 246, 0.4)",
                        "0 0 80px rgba(168, 85, 247, 0.4)",
                      ],
                      scale: isHoveringProfile ? 1.02 : 1,
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Animated particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        x: [0, i % 2 ? 10 : -10, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}

                  {/* Overlay gradient effect */}
                  <motion.div
                    className="absolute inset-0 bottom-0  bg-gradient-to-t from-black/30 to-transparent rounded-3xl"
                    animate={{ opacity: isHoveringProfile ? 0.2 : 0.3 }}
                  />
                </motion.div>

                {/* Large Background Text */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  initial={{ opacity: 0, scale: 1.5, rotate: -5 }}
                  animate={{
                    opacity: 0.15,
                    scale: 1,
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    opacity: { duration: 1.2, delay: 0.5 },
                    scale: { duration: 1.2, delay: 0.5 },
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.h1
                    className="text-[12.5rem] w-screen font-black uppercase text-white leading-none text-center z-100"
                    style={{
                      WebkitTextStroke: "2px rgba(255, 255, 255, 0.35)",
                      color: "transparent",
                      letterSpacing: "-0.04em",
                    }}
                    animate={{
                      opacity: [1, 1, 1],
                      scale: [1, 1.01, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    HIEU - Mark
                  </motion.h1>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Hobby Box */}
          <motion.div
            className="absolute top-96 left-4/6 space-y-4 text-white text-sm max-w-xs"
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
            whileHover={{ scale: 1.05, x: -5 }}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-sm tracking-widest text-white/50 uppercase "
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{
                  scale: 1.05,
                  x: 5,
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <p className="my-2 flex justify-center items-center gap-2 w-fit">
                  <span className="inline-block w-14">I love </span>

                  <span className="inline-block">
                    <HobbitTextAnimation
                      texts={hobbit}
                      className="text-white font-bold"
                      typingSpeed={100}
                      deletingSpeed={80}
                      pauseDuration={2000}
                    />
                  </span>
                </p>
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute  left-40 top-60 font-bold space-y-4 text-white text-sm max-w-xs"
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
            whileHover={{ scale: 1.05, x: -5 }}
          >
            <motion.div
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-sm tracking-widest text-white uppercase "
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{
                  scale: 1.05,
                  x: 5,
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <p className="my-2 font-bold">
                  You can call me <br /> <span className="text-5xl">Mark </span>
                </p>
              </motion.p>
            </motion.div>
          </motion.div>
          {/* Work Box */}
          <motion.div
            className="absolute -bottom-20 left-4/6 space-y-4 text-white text-sm max-w-xs"
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
            whileHover={{ scale: 1.05, x: -5 }}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-sm tracking-widest text-white/50 uppercase font-['Bebas_Neue']"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{
                  scale: 1.05,
                  x: 5,
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                {/* <p className="my-2">
                  I love{" "}
                  <span className="inline-block">
                    <HobbitTextAnimation
                      texts={hobbit}
                      className="text-white font-bold"
                      typingSpeed={100}
                      deletingSpeed={80}
                      pauseDuration={2000}
                    />
                  </span>
                </p> */}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        {/* Floating Animation Elements */}
        <motion.div
          className="absolute top-40 left-20 w-20 h-20 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-32 h-32 rounded-full bg-pink-500/20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-fit top-1/2 left-1/4 w-24 h-24 rounded-full bg-blue-500/15 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 25, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="fixed bottom-50 left-1/2 transform -translate-x-1/2  w-[522px] h-[590px]"
          animate={{
            y: [0, 35, 0],
            x: [0, -15, 0],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-fit  fixed bottom-0 left-1/2 transform -translate-x-1/2"
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Profile Image Placeholder */}
          <motion.div
            animate={{
              scale: isHoveringProfile ? 1.02 : 1,
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image alt="" src={hummanImage} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function HoverFollowImage() {
  const [visible, setVisible] = useState(false);
  const [targetPos, setTargetPos] = useState({ x: -9999, y: -9999 });

  const requestRef = useRef<number | null>(null);
  const ease = 0.16;

  return (
    <div
      onMouseMove={(e) => {
        visible || setVisible(true);
        setTargetPos({
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY,
        });
      }}
      onMouseLeave={() => {
        visible && setVisible(false);
      }}
    >
      <span>HIEU</span>

      {/* Floating Image */}
      <div
        className="fixed size-[220px]"
        style={{
          display: visible ? "block" : "none",
          left: `${targetPos.x}px`,
          top: `${targetPos.y - 250}px`,
        }}
      >
        {
          <Image
            width={300}
            height={300}
            src={avatarImage}
            className={`
               w-[220px]  h-auto rounded-lg shadow-lg
            pointer-events- duration-200
         
          `}
            alt=""
          />
        }
      </div>
    </div>
  );
}
