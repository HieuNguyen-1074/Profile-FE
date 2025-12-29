"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { techs } from "@/public/const";
import Image from "next/image";

export default function Loading({
  isHidden,
  setVisible,
}: {
  isHidden: boolean;
  setVisible: (visible: boolean) => void;
}) {
  const [titleShow, setTitleShow] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (isHidden) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isHidden]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut", delay: 3 },
      }}
      className={
        "w-screen h-screen fixed top-0 left-0 bg-gradient-to-b   from-[#ffffff]  to-[#ffffff] flex items-center justify-center z-[10000]" +
        (isHidden ? "pointer-events-none" : "")
      }
    >
      {titleShow || (
        <div className="relative size-32">
          {techs.map((tech, index) => {
            return (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.1 * index,
                  },
                }}
                onAnimationComplete={
                  index === techs.length - 1
                    ? () => {
                        setTitleShow(true);
                      }
                    : undefined
                }
                key={tech.name}
                className="mx-2 absolute top-0 left-0"
              >
                <Image src={tech.icon} alt="" className="size-32" />
              </motion.div>
            );
          })}
        </div>
      )}
      {titleShow && (
        <motion.div>
          <motion.h1 className="text-5xl font-bold text-black">
            Hi , There
          </motion.h1>
        </motion.div>
      )}
    </motion.div>
  );
}
