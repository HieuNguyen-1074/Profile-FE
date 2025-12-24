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
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <p className="text-sm text-gray-600">Manhattan, New York</p>
              <p className="text-sm text-gray-600">10012</p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Name Fields */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Name (required)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 py-2 px-0 focus:border-black focus:outline-none transition-colors text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 py-2 px-0 focus:border-black focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            {/* Service Dropdown */}

            {/* Email Field */}
            <div className="!mt-2">
              <label className="block text-sm font-medium mb-2">
                Email (required)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-2 px-0 focus:border-black focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Sign Up Checkbox */}
            <div className="flex items-center gap-2 !my-2">
              <input
                type="checkbox"
                name="signUp"
                id="signUp"
                checked={formData.signUp}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <label htmlFor="signUp" className="text-sm text-gray-600">
                Sign up for news and updates
              </label>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium mb-2">Messages</label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-gray-300 py-2 px-0 focus:border-black focus:outline-none transition-colors resize-none text-sm"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="bg-black text-white !px-8 !py-3 !my-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.form>
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
              <p className="text-sm font-medium">contact@studio.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Manhattan, New York</p>
              <p className="text-sm text-gray-600">10012</p>
            </div>
          </div>

          {/* Phone and Hours */}
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">(+48) 762 864 075</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Call us: 800-NYC-123</p>
              <p className="text-sm text-gray-600">
                Monday - Friday / 9AM - 5PM
              </p>
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
