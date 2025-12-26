"use client";

import { motion } from "framer-motion";
import IgIcon from "../../public/images/icons8-instagram-96.png";
import FbIcon from "../../public/images/icons8-facebook-96.png";
import LinkinIcon from "../../public/images/icons8-linkedin-48.png";
import TailwindIcon from "../../public/images/icons8-tailwind-css-96.png";
import NextjsIcon from "../../public/images/icons8-nextjs-96.png";
import ReactIcon from "../../public/images/React.png";
import VsCodeIcon from "../../public/images/icons8-vs-code-96.png";
import CopilotIcon from "../../public/images/icons8-github-copilot-96.png";
import JiraIcon from "../../public/images/icons8-jira-96.png";
import GitIcon from "../../public/images/Git.png";
import JqueryIcon from "../../public/images/jquery_vertical_logo_icon_169489.png";
import ReactQueryIcon from "../../public/images/react-query-icon-2dw36yx2b016w37mbipyn.webp";
import SocketIoIcon from "../../public/images/Socket.io.png";
import TypeScriptIcon from "../../public/images/TypeScript.png";
import VueIcon from "../../public/images/Vue.js.png";
import ExpressJSIcon from "../../public/images/Express.png";
import ReduxIcon from "../../public/images/Redux.png";
import FramerMotionIcon from "../../public/images/framer-motion.png";
import ReactHookFormIcon from "../../public/images/react-hook-form-logo-only.png";
import VuetifyIcon from "../../public/images/Vuetify.png";
import ReduxSagaIcon from "../../public/images/Redux-Saga.png";
import AntdIcon from "../../public/images/ant-design.svg";
import FabricJSIcon from "../../public/images/Fabricjs.svg";
import AxiosIcon from "../../public/images/Axios.png";
import HeroUIIcon from "../../public/images/HeroUI.png";
import Avatar from "../../public/images/avatar.png";
import MUIIcon from "../../public/images/MUI.png";
import Image from "next/image";

export default function AboutPage() {
  const experience = [
    {
      period: "March 2025 - Present",
      role: "Middle- Junior Frontend Developer",

      company: "HBLAB JSC",
      description:
        "Developed responsive web applications for various clients like Singapore , Korea, Japan , focusing on modern technology stack",
      achievements: [
        "Successfully delivered 4+ client projects",
        "Established automated testing workflows",
        "Improved user satisfaction to 95%",
      ],
    },
    {
      period: "2022 - 2024",
      role: "Junior Developer",
      company: "AISolutions JSC",

      description:
        "Developed interactive user interfaces, participated in full product lifecycle from concept to launch",
      achievements: [
        "Independently completed 5 core feature modules",
        "Learned and applied modern frontend frameworks",
        "Participated in product design and requirements analysis",
      ],
    },
  ];

  const education = [
    {
      year: "2019 - 2023",
      degree: "Bachelor of Information and Technology",
      school: "Ha noi University of  Neural Resources and Environment",
      description: "Focused on software engineering and web development",
    },
  ];

  const interests = ["🎮 Coding ", "🎬 Animals ", "✈️ Traveling"];

  const techs = [
    {
      name: "React",
      icon: ReactIcon,
    },
    {
      name: "Next.js",
      icon: NextjsIcon,
    },
    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
    },
    {
      name: "Git",
      icon: GitIcon,
    },
    {
      name: "jQuery",
      icon: JqueryIcon,
    },
    {
      name: "React Query",
      icon: ReactQueryIcon,
    },
    {
      name: "Socket.io",
      icon: SocketIoIcon,
    },
    {
      name: "TypeScript",
      icon: TypeScriptIcon,
    },
    {
      name: "Vue.js",
      icon: VueIcon,
    },
    {
      name: "ExpressJS",
      icon: ExpressJSIcon,
    },
    {
      name: "Redux",
      icon: ReduxIcon,
    },
    {
      name: "Framer Motion",
      icon: FramerMotionIcon,
    },

    {
      name: "React Hook Form",
      icon: ReactHookFormIcon,
    },
    {
      name: "Vuetify",
      icon: VuetifyIcon,
    },
    {
      name: "Redux-Saga",
      icon: ReduxSagaIcon,
    },
    {
      name: "Ant Design",
      icon: AntdIcon,
    },
    {
      name: "FabricJS",
      icon: FabricJSIcon,
    },
    {
      name: "Axios",
      icon: AxiosIcon,
    },
    {
      name: "HeroUI",
      icon: HeroUIIcon,
    },
    {
      name: "MUI",
      icon: MUIIcon,
    },
  ];
  const tools = [
    {
      name: "VS Code",
      icon: VsCodeIcon,
    },
    {
      name: "Git",
      icon: GitIcon,
    },
    {
      name: "GitHub Copilot",
      icon: CopilotIcon,
    },
    {
      name: "Jira",
      icon: JiraIcon,
    },
  ];
  const languages = ["EN", "VI"];

  const portfolioLinks = [
    { name: "Link in ", icon: LinkinIcon, url: "#", color: "bg-blue-600" },
    { name: "Facebook", icon: FbIcon, url: "#", color: "bg-pink-500" },
    {
      name: "Instagram",
      url: "#",
      icon: IgIcon,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex justify-center items-center w-full ">
      <div className="pt-24 pb-20 px-4 sm:px-8 w-fit">
        <div className="max-w-6xl mx-auto flex-wrap flex ">
          <div className="w-fit h-fit fixed top-1/2 left-0 flex justify-center items-center ">
            <div className="w-[6.25rem] h-[2px] bg-black/50 "></div>
            <a
              href="/NguyenVanHieu_Mark_FrontEnd_Developer.pdf"
              download="NguyenVanHieu_Mark_FrontEnd_Developer.pdf"
              className="cursor-pointer bg-black/50 hover:bg-black/70 transition-colors px-4 py-2 rounded"
            >
              Download CV
            </a>
          </div>
          {/* Main Profile Card */}
          <motion.div
            className="grid lg:grid-cols-[auto_1fr] gap-6 !mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image */}
            <motion.div
              className=" rounded-3xl  flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-48 h-48 rounded-3xl overflow-hidden bg-gray-800">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  <Image
                    src={Avatar}
                    alt="Profile Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              className=" rounded-3xl p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-white text-2xl font-normal mb-4 leading-relaxed">
                Hi My name is Hiếu. You can call me Mark{" "}
                <span className="font-bold">I am frontend developer</span>{" "}
                focused on creating elegant, high-performance web applications
                with <span className="font-bold">3+ years</span> of development
                experience. I&apos;m passionate about learning new technologies
                and applying them to real projects. I believe good design and
                code can change the world.
              </h1>

              {/* Interests */}
              <div className="mb-6">
                <h3 className="text-white/60 text-sm mb-3">Key words</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={index}
                      className="bg-[#252525] text-white/80 px-4 py-2 rounded-lg text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "#2a2a2a" }}
                      transition={{ duration: 0.2 }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience and Education Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Experience Cards */}
            <div className="!space-y-4">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className=" rounded-3xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        {exp.role.split(" ").pop()} at {exp.company}
                      </h3>
                      <p className="text-white text-sm">{exp.role}</p>
                    </div>
                    <span className="text-white/40 text-xs bg-[#252525] px-3 py-1 rounded-lg">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1 text-white/70 text-sm">
                    {exp.achievements.slice(0, 3).map((achievement, i) => (
                      <li key={i} className="leading-relaxed">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Education Cards */}
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className=" rounded-3xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        {edu.degree.split(" ").slice(0, 2).join(" ")}
                      </h3>
                      <p className="text-white/60 text-sm">{edu.school}</p>
                    </div>
                    <span className="text-white/40 text-xs bg-[#252525] px-3 py-1 rounded-lg">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools, Languages, Portfolio Grid */}
          <div className="flex justify-between  gap-6 !mt-6">
            {/* Design Tools */}
            <motion.div
              className=" rounded-3xl p-6  w-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">
                Usage Framework & libraries
              </h3>
              <div className="flex gap-3 !pt-4 flex-wrap">
                {techs.map((tech, index) => (
                  <motion.div
                    key={index}
                    className=" p-2 rounded-lg"
                    whileHover={{ scale: 1.1, backgroundColor: "#ffff" }}
                  >
                    <Image
                      src={tech.icon}
                      width={40}
                      height={40}
                      alt={tech.name}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Editing Tools */}
            <motion.div
              className=" rounded-3xl  p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">Tools</h3>
              <div className="flex gap-3 !pt-4 flex-wrap">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className=" p-2 rounded-lg"
                    whileHover={{ scale: 1.1, backgroundColor: "#ffff" }}
                  >
                    <Image
                      src={tool.icon}
                      width={40}
                      height={40}
                      alt={tool.name}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              className=" rounded-3xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">
                Languages
              </h3>
              <div className="flex gap-3 text-2xl !pt-4 flex-wrap">
                {languages.map((flag, index) => (
                  <motion.span
                    key={index}
                    className="bg-[#252525] px-3 py-2 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {flag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Portfolio Links */}
            <motion.div
              className=" rounded-3xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">
                Portfolio
              </h3>
              <div className="grid grid-cols-2  !pt-4 ">
                {portfolioLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="w-fit"
                  >
                    <Image
                      src={link.icon}
                      width={40}
                      height={40}
                      alt={link.name}
                      className="inline-block  align-middle"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Details */}
          <motion.div
            className=" rounded-3xl !p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Details</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <motion.div
                className="flex items-center gap-2 text-white/70"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                <span>👤</span>
                <span>3+ years experience</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-white/70"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                <span>✉️</span>
                <span>hjeu1074@gmail.com</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 text-white/70"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
              >
                <span>VI</span>
                <span>Việt Nam</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
