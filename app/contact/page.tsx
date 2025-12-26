"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import IgIcon from "../../public/images/icons8-instagram-96.png";
import FbIcon from "../../public/images/icons8-facebook-96.png";
import LinkinIcon from "../../public/images/icons8-linkedin-48.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    service: "",
    email: "",
    signUp: false,
    projectDescription: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen  w-full py-16 px-4 sm:px-8 flex justify-center items-center">
      <div className="max-w-7xl w-full flex justify-center items-center flex-col mx-auto">
        {/* Header */}
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl !mb-20 font-bold mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact me
        </motion.h1>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Location Info */}
        </div>

        {/* Bottom Info Section */}
        <motion.div
          className="border-t border-gray-200 !pt-8 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">hjeu1074@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Ha noi , Viet Nam</p>
            </div>
          </div>

          {/* Phone and Hours */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">(+84) 762 864 075</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Image src={LinkinIcon} width={32} height={32} alt="LinkedIn" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Image src={IgIcon} width={32} height={32} alt="Instagram" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Image src={FbIcon} width={32} height={32} alt="Facebook" />
              </motion.a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
