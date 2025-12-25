"use client";

import { motion, animate } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import Link from "next/link";
import emtyBoxGif from "../../public/images/emptybox.gif";
import backicon from "../../public/images/turn-left.png";
import Image from "next/image";
import parse from "html-react-parser";

let transY = 0;
export default function WorksPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [clickAnimateId, setClickAnimateId] = useState<number | null>(null);
  const [hoverProjectId, setHoverProjectId] = useState<number | null>(null);
  const [_, startTransition] = useTransition();
  let currentPositonY = 0;
  let currentPositonYImage = 0;
  const viewMoreRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  const handleTitleClick = (project: Project) => {
    imagesRef.current!.setAttribute("style", `transform: translateY(${0}px);`);
    setSelected(project);
  };

  useEffect(() => {
    if (!projectsRef.current) return;
    projectsRef.current.onmouseenter = (e) => {
      if (selected) return;
      viewMoreRef.current!.setAttribute(
        "style",
        `opacity: 1;top: ${e.clientY - 100}px; left: ${e.clientX}px;`
      );
    };
    projectsRef.current.onmousemove = (e) => {
      viewMoreRef.current!.setAttribute(
        "style",
        `opacity: 1;top: ${e.clientY - 50}px; left: ${e.clientX}px;`
      );
      if (selected) return;
      if (currentPositonY > e.clientY) {
        currentPositonYImage++;
        imagesRef.current!.setAttribute(
          "style",
          `transform: translateY(${currentPositonYImage + 300}px);`
        );
      } else {
        currentPositonYImage--;
        imagesRef.current!.setAttribute(
          "style",
          `transform: translateY(${currentPositonYImage + 300}px);`
        );
      }
      transY = currentPositonYImage;
      currentPositonY = e.clientY;
    };
    projectsRef.current.onmouseleave = (e) => {
      currentPositonYImage = 0;
      setHoverProjectId(null);
      viewMoreRef.current!.setAttribute(
        "style",
        `opacity: 0;top: 0px; left: 0px;`
      );
    };
    return () => {
      if (!projectsRef.current) return;
      projectsRef.current.onmouseenter = null;
      projectsRef.current.onmousemove = null;
      projectsRef.current.onmouseleave = null;
    };
  }, [viewMoreRef, projectsRef, selected]);

  const handleHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
  // useEffect(() => {
  //   if (clickAnimateId !== null) {
  //     const box = document.querySelector(".animating");

  //     if (box) {
  //       animate(
  //         box,
  //         {
  //           rotate: [-3, 9, -3],
  //         },
  //         {
  //           duration: 0.4,
  //           ease: "easeInOut",
  //         }
  //       ).then(() => {
  //         console.log("first");
  //         setHoverProjectId (clickAnimateId);
  //         setClickAnimateId(null);
  //       });
  //     }
  //   }
  // }, [clickAnimateId]);

  const projects = [
    {
      id: 1,
      index: 0,
      title: "Meet the Beanz | Azuki Character ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/anime-3b6ad.appspot.com/o/images%2FScreenshot_55.png?alt=media&token=8e8136de-9683-4bf1-a6f3-00985446e31d",
      date: "Nov 2023",
      category: "Personal Project ",
      video:
        "https://firebasestorage.googleapis.com/v0/b/anime-3b6ad.appspot.com/o/video%2Fbandicam%202025-12-24%2014-15-03-215.mp4?alt=media&token=6c5dffc2-9c84-4628-87d2-8e47b0c24f73",
      techs: [
        { name: "Nextjs", icon: "/images/icons8-nextjs-96.png" },
        { name: "Framer-motion", icon: "/images/framer-motion.png" },
        { name: "Firebase", icon: "/firebase.jfif" },
        { name: "Expressjs", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div className="flex flex-col"><div class="beanz-page-description">
  <h1>Meet the Beanz | Azuki Character Collection</h1>
  <p>Beanz are residents of the Garden, each with unique personalities. Meet Frida, Jay, Toshi, Link, Gus, Penny, Jelly, Ed, Johnny, and Pip - ten distinctive bean characters that have captured hearts across the community.</p>
</div>

</div>`,
    },
    {
      id: 2,
      index: 1,
      title: "Asia Restaurant",
      image:
        "https://firebasestorage.googleapis.com/v0/b/anime-3b6ad.appspot.com/o/images%2FScreenshot_56.png?alt=media&token=450dd783-cf10-4670-9a78-b6216e5b4e6b",
      date: "Nov 2023",
      category: "Personal Project ",
      video:
        "https://firebasestorage.googleapis.com/v0/b/anime-3b6ad.appspot.com/o/video%2Fbandicam%202025-12-24%2016-20-39-116.mp4?alt=media&token=4d07585f-4b8e-4953-a395-2d72ec44f458",
      techs: [
        { name: "Nextjs", icon: "/images/icons8-nextjs-96.png" },
        { name: "Framer-motion", icon: "/images/framer-motion.png" },
        { name: "Firebase", icon: "/firebase.jfif" },
        { name: "Expressjs", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div className="flex flex-col"><div class="beanz-page-description">
  <h1>Asia Restaurant</h1>
  <p>An Asian restaurant website typically features a warm, inviting design with cultural elements like bamboo motifs, Asian typography, or traditional patterns. The homepage showcases appetizing food photography of signature dishes, often with a hero section displaying the restaurant's ambiance or popular meals.</p>
</div>

</div>`,
    },
    {
      id: 3,
      index: 2,
      title: "Student-info-management",
      image:
        "https://firebasestorage.googleapis.com/v0/b/anime-3b6ad.appspot.com/o/images%2FScreenshot_57.png?alt=media&token=22121077-cddb-4f2e-bdc4-1e40a4490129",
      date: "Nov 2023",
      category: "Personal Project ",
      video:
        "https://firebasestorage.googleapis.com/v0/b/anime-3b6ad.appspot.com/o/video%2Fbandicam%202025-12-25%2015-55-28-231.mp4?alt=media&token=328e8661-12ec-4045-8c26-e78ba5e6d506",
      techs: [
        { name: "Nextjs", icon: "/images/icons8-nextjs-96.png" },
        { name: "Framer-motion", icon: "/images/framer-motion.png" },
        { name: "Firebase", icon: "/firebase.jfif" },
        { name: "Expressjs", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div className="flex flex-col"><div class="beanz-page-description">
  <h1>Student-info-management</h1>
  <p>Welcome to your comprehensive exam management dashboard. Here you can track all your upcoming examinations, review past exam performances, and monitor your academic progress throughout the semester. Stay organized by viewing detailed information about each exam including dates, times, locations, and types. For completed exams, you can access your scores and analyze your performance trends. Use this dashboard to plan your study schedule effectively and ensure you never miss an important exam. All exam information is automatically updated and synchronized with the academic calendar to keep you informed in real-time.</p>
</div>

</div>`,
    },
    {
      id: 4,
      index: 3,
      title: "AirBnb Clone",
      image:
        "https://firebasestorage.googleapis.com/v0/b/anime-3b6ad.appspot.com/o/images%2FScreenshot_58.png?alt=media&token=95e84246-5922-4238-a7d1-2979c7b045fb",
      date: "Nov 2023",
      category: "Personal Project ",
      video:
        "https://firebasestorage.googleapis.com/v0/b/anime-3b6ad.appspot.com/o/video%2Fbandicam-2025-12-25-17-15-37-634_jEvfITwQ.mp4?alt=media&token=f935ed76-abe9-4991-950c-669fef8fb188",
      techs: [
        { name: "Nextjs", icon: "/images/icons8-nextjs-96.png" },
        { name: "Framer-motion", icon: "/images/framer-motion.png" },
        { name: "Firebase", icon: "/firebase.jfif" },
        { name: "Expressjs", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div className="flex flex-col"><div class="beanz-page-description">
  <h1>AirBnb Clone</h1>
  <p>This is an AirBnb Clone project built with Next.js 13+ (App Router), React, TypeScript, and Tailwind CSS</p>
</div>

</div>`,
    },
    {
      id: 5,
      title: "NTT Medical Reservation",
      image: "",
      index: 4,
      date: "2023",
      category: "Healthcare Application",
      techs: [
        { name: "NuxtJS", icon: "/images/icons8-nextjs-96.png" },
        { name: "VueJS", icon: "/images/icons8-react-native-96.png" },
        { name: "Vuetify", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div class="project-detail">
        <h2>NTT Medical Reservation System</h2>
        <p class="project-intro">An application that facilitates the reservation process between patients and medical institutions</p>
        
        <div class="project-info">
          <h3>Project Methodology</h3>
          <p>Agile and Scrum</p>
          
          <h3>Team Size</h3>
          <p>Total: 6 members</p>
          
          <h3>Responsibilities</h3>
          <ul>
            <li>Frontend Developer - Patient mobile view module</li>
            <li>Implement UI screens based on Figma design</li>
            <li>Create common UI components</li>
            <li>Refactor the code base to enhance performance and maintainability</li>
            <li>Peer-review code according to project conventions</li>
          </ul>
          
          <h3>Technologies</h3>
          <p>NuxtJS, VueJS, SCSS, Vuetify</p>
          
          <h3>Tools</h3>
          <p>Backlog, Google Chat, GitHub</p>
        </div>
      </div>`,
    },
    {
      id: 6,
      title: "PetHealth Management System",
      image: "https://picsum.photos/750/500?random=14",
      index: 5,
      date: "2023",
      category: "Healthcare Application",
      techs: [
        { name: "ReactJS", icon: "/images/icons8-react-native-96.png" },
        { name: "Redux", icon: "/images/icons8-react-native-96.png" },
        { name: "Socket.io", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div class="project-detail">
        <h2>PetHealth Management System</h2>
        <p class="project-intro">An application designed for managing a hospital's pet care services</p>
        
        <div class="project-info">
          <h3>Project Methodology</h3>
          <p>Agile and Scrum</p>
          
          <h3>Team Size</h3>
          <p>Total: 4 members</p>
          
          <h3>Responsibilities</h3>
          <ul>
            <li>Code the modules based on Figma design</li>
            <li>Implement code functions and build reusable code</li>
            <li>Optimize front-end project performance</li>
            <li>Join daily meetings to provide direction and troubleshoot issues</li>
          </ul>
          
          <h3>Technologies</h3>
          <p>ReactJS, Axios, Redux, Socket.io, MUI</p>
          
          <h3>Tools</h3>
          <p>GitLab, Jira, Visual Studio, Source Tree</p>
        </div>
      </div>`,
    },
    {
      id: 7,
      title: "ECAPP Education Platform",
      image: "https://picsum.photos/800/500?random=15",
      index: 6,
      date: "2023",
      category: "Education Application",
      techs: [
        { name: "ReactJS", icon: "/images/icons8-react-native-96.png" },
        { name: "Redux", icon: "/images/icons8-react-native-96.png" },
        { name: "Redux-Saga", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div class="project-detail">
        <h2>ECAPP Education Platform</h2>
        <p class="project-intro">An application designed for managing students, class schedules, meetings, and assignment submissions</p>
        
        <div class="project-info">
          <h3>Project Methodology</h3>
          <p>Agile and Scrum</p>
          
          <h3>Team Size</h3>
          <p>Total: 3 members</p>
          
          <h3>Responsibilities</h3>
          <ul>
            <li>Implement code functions and build reusable code</li>
            <li>Optimize front-end project performance</li>
            <li>Collaborate with UI/UX designers</li>
            <li>Maintain and improve existing features</li>
            <li>Collaborate directly with clients to understand business needs</li>
          </ul>
          
          <h3>Technologies</h3>
          <p>ReactJS, React Hook Form, Redux, Redux-Saga</p>
          
          <h3>Tools</h3>
          <p>GitLab, Jira, Visual Studio</p>
        </div>
      </div>`,
    },
    {
      id: 8,
      title: "Simulation T-Shirt Designer",
      image: "https://picsum.photos/650/500?random=16",
      index: 7,
      date: "2023",
      category: "Design Tool",
      techs: [
        { name: "FabricJS", icon: "/images/icons8-react-native-96.png" },
        { name: "jQuery", icon: "/images/icons8-react-native-96.png" },
        { name: "SCSS", icon: "/images/icons8-tailwind-css-96.png" },
      ],
      description: `<div class="project-detail">
        <h2>Simulation T-Shirt Designer</h2>
        <p class="project-intro">An application that helps customers design their own T-shirts with provided patterns</p>
        
        <div class="project-info">
          <h3>Project Methodology</h3>
          <p>Agile and Scrum</p>
          
          <h3>Team Size</h3>
          <p>Total: 3 members</p>
          
          <h3>Responsibilities</h3>
          <ul>
            <li>Front-end Software Developer</li>
            <li>Implement interactive design features</li>
            <li>Create custom pattern manipulation tools</li>
          </ul>
          
          <h3>Technologies</h3>
          <p>FabricJS, jQuery, SCSS</p>
          
          <h3>Tools</h3>
          <p>GitLab, Jira, Visual Studio, Source Tree</p>
        </div>
      </div>`,
    },
    {
      id: 9,
      title: "Special Children Learning App",
      image: "https://picsum.photos/700/550?random=17",
      index: 8,
      date: "2023",
      category: "Education Application",
      techs: [
        { name: "ReactJS", icon: "/images/icons8-react-native-96.png" },
        { name: "Axios", icon: "/images/icons8-react-native-96.png" },
        { name: "AntD", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div class="project-detail">
        <h2>Special Children Learning App</h2>
        <p class="project-intro">An application designed for letters and simple word recognition, and basic sentence creation</p>
        
        <div class="project-info">
          <h3>Project Methodology</h3>
          <p>Agile and Scrum</p>
          
          <h3>Team Size</h3>
          <p>Total: 2 members</p>
          
          <h3>Responsibilities</h3>
          <ul>
            <li>Implement code functions and build reusable code</li>
            <li>Optimize front-end project performance</li>
            <li>Collaborate with UI/UX designers</li>
            <li>Maintain and improve existing features</li>
            <li>Collaborate directly with clients to understand business needs</li>
          </ul>
          
          <h3>Technologies</h3>
          <p>ReactJS, Axios, AntD</p>
          
          <h3>Tools</h3>
          <p>GitLab, Jira, Visual Studio, Source Tree</p>
        </div>
      </div>`,
    },
    {
      id: 10,
      title: "SystemReplace Admin",
      image: "https://picsum.photos/750/550?random=18",
      index: 9,
      date: "2023",
      category: "Admin System",
      techs: [
        { name: "Next.js", icon: "/images/icons8-nextjs-96.png" },
        { name: "React Query", icon: "/images/icons8-react-native-96.png" },
        { name: "Tailwind", icon: "/images/icons8-tailwind-css-96.png" },
      ],
      description: `<div class="project-detail">
        <h2>SystemReplace Admin System</h2>
        <p class="project-intro">An admin system that focuses on managing orders, customers, products, and more</p>
        
        <div class="project-info">
          <h3>Project Methodology</h3>
          <p>Agile and Scrum</p>
          
          <h3>Team Size</h3>
          <p>Total: 7 members</p>
          
          <h3>Responsibilities</h3>
          <ul>
            <li>Implement code functions and build reusable code</li>
            <li>Optimize front-end project performance</li>
            <li>Collaborate with UI/UX designers</li>
            <li>Maintain and improve existing features</li>
          </ul>
          
          <h3>Technologies</h3>
          <p>Next.js, React Query, Tailwind CSS</p>
          
          <h3>Tools</h3>
          <p>Git, Backlog, Visual Studio</p>
        </div>
      </div>`,
    },
    {
      id: 11,
      title: "TerminologyServer",
      image: "https://picsum.photos/800/550?random=19",
      index: 10,
      date: "2024",
      category: "Management System",
      techs: [
        { name: "Next.js", icon: "/images/icons8-nextjs-96.png" },
        { name: "React Query", icon: "/images/icons8-react-native-96.png" },
        { name: "Tailwind", icon: "/images/icons8-tailwind-css-96.png" },
        { name: "HeroUI", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div class="project-detail">
        <h2>TerminologyServer</h2>
        <p class="project-intro">The system helps users work with matching terms and managing terminology</p>
        
        <div class="project-info">
          <h3>Project Methodology</h3>
          <p>Agile and Scrum</p>
          
          <h3>Team Size</h3>
          <p>Total: 7 members</p>
          
          <h3>Responsibilities</h3>
          <ul>
            <li>Implement code functions and build reusable code</li>
            <li>Optimize front-end project performance</li>
            <li>Collaborate with UI/UX designers</li>
            <li>Maintain and improve existing features</li>
          </ul>
          
          <h3>Technologies</h3>
          <p>Next.js, React Query, Tailwind CSS, HeroUI</p>
          
          <h3>Tools</h3>
          <p>Git, Backlog, Visual Studio, Cursor</p>
        </div>
      </div>`,
    },
    {
      id: 12,
      title: "Construction Communication",
      image: "https://picsum.photos/700/500?random=20",
      index: 11,
      date: "2024",
      category: "Communication System",
      techs: [
        { name: "ReactJS", icon: "/images/icons8-react-native-96.png" },
        { name: "AWS Chime", icon: "/images/icons8-react-native-96.png" },
        { name: "MUI", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div class="project-detail">
        <h2>Construction Communication System</h2>
        <p class="project-intro">A system for video calling and messaging for construction teams</p>
        
        <div class="project-info">
          <h3>Project Methodology</h3>
          <p>Agile and Scrum</p>
          
          <h3>Team Size</h3>
          <p>Total: 4 members</p>
          
          <h3>Responsibilities</h3>
          <ul>
            <li>Implement code functions and build reusable code</li>
            <li>Optimize front-end project performance</li>
            <li>Collaborate with UI/UX designers</li>
            <li>Maintain and improve existing features</li>
          </ul>
          
          <h3>Technologies</h3>
          <p>ReactJS, Axios, MUI, AWS Chime</p>
          
          <h3>Tools</h3>
          <p>Git, Backlog, Visual Studio</p>
        </div>
      </div>`,
    },
    {
      id: 13,
      title: "ERP Mobile Selling System",
      image: "https://picsum.photos/750/500?random=21",
      index: 12,
      date: "2023",
      category: "ERP/CRM System",
      techs: [
        { name: "Vue2", icon: "/images/icons8-react-native-96.png" },
        { name: "SCSS", icon: "/images/icons8-tailwind-css-96.png" },
        { name: "Vuetify", icon: "/images/icons8-react-native-96.png" },
      ],
      description: `<div class="project-detail">
        <h2>ERP Mobile Selling System</h2>
        <p class="project-intro">ERP/CRM system for enhancing the effectiveness in selling mobile phones</p>
        
        <div class="project-info">
          <h3>Project Methodology</h3>
          <p>Agile and Scrum</p>
          
          <h3>Team Size</h3>
          <p>Total: 6 members (1 PM, 5 developers)</p>
          
          <h3>Key Modules</h3>
          <ul>
            <li><strong>Request Payment Module:</strong> Helps employees make proposal requests with role hierarchy for approval</li>
            <li><strong>Staff Transfer Module:</strong> Helps HR manage transfer processes and automate labor contract generation</li>
          </ul>
          
          <h3>Technologies</h3>
          <p>Vue2, SCSS, Vuetify</p>
          
          <h3>Tools</h3>
          <p>VSCode, Tortoise SVN</p>
        </div>
      </div>`,
    },
  ];
  const calOpacity = useMemo(() => {
    if (selected) return calcProjectWeights(projects, selected.index);
  }, [selected]);
  return (
    <div className="min-h-screen !pl-3  w-full relative overflow-y-auto flex items-start">
      {/* Navigation */}

      <div className=" w-3/6 h-[calc(100vh-40px)]  hide-scrollbar  z-0 border-box overflow-auto ">
        {selected && (
          <div
            className=" cursor-pointer !my-10 !ml-auto  !py-2 !px-5.5  bg-white rounded-4xl  h-fit w-fit "
            onClick={() => setSelected(null)}
          >
            <Image className="size-14  " alt="" src={backicon} />
          </div>
        )}
        <motion.div
          ref={imagesRef}
          className={
            hoverProjectId || selected
              ? ""
              : "hidden " +
                "relative w-full h-full !pl-16 z-0 opacity-60  flex items-center justify-center "
          }
        >
          <div className="flex justify-between w-full items-end !mb-4">
            <motion.div
              animate={
                selected
                  ? {
                      y: 0,
                      width: 80,
                      height: 53,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        duration: 2,
                      },
                    }
                  : {}
              }
            >
              <Image
                className={
                  " w-full   h-full object-cover  " +
                  (selected ? "rounded-3xl" : "")
                }
                src={
                  selected?.image ||
                  projects.find((p) => p.id === hoverProjectId)?.image ||
                  emtyBoxGif
                }
                alt="Selected Project"
                width={900}
                height={400}
              />
            </motion.div>
            <p className="text-3xl font-bold">{selected?.title}</p>
          </div>
        </motion.div>
        <div className="flex items-center justify-center">
          {parse(selected?.description || "")}
        </div>
        {selected?.video && (
          <video
            src={selected?.video}
            controls
            autoPlay
            muted
            loop
            className="w-full h-auto"
          ></video>
        )}
      </div>
      <div className=" ml-auto w-full h-screen overflow-y-auto hide-scrollbar !pl-20">
        <motion.div
          ref={projectsRef}
          className="  w-fit  h-full  flex  gap-6 flex-col
   items-start justify-start z-30"
        >
          <motion.div
            ref={viewMoreRef}
            className={`fixed z-20 w-fit h-fit bg-black  opacity-0  pointer-events-none`}
          >
            Click for view more
          </motion.div>
          {projects.map((project, index) => (
            <motion.div
              animate={{
                scale: selected && selected.id === project.id ? 1.3 : 1,
                x: selected && selected.id === project.id ? 70 : 0,
                opacity: !selected
                  ? 1
                  : selected.id === project.id
                  ? 1
                  : calOpacity
                  ? calOpacity[project.index].weight
                  : 1,
              }}
              whileHover={{
                height: 100,
              }}
              key={project.id}
              onMouseMove={() => {
                if (hoverProjectId !== project.id && !selected) {
                  startTransition(() => {
                    setHoverProjectId(project.id);
                  });
                }
              }}
              className="group   hover:!opacity-100 z-10 relative flex w-full items-center"
            >
              <div
                className="  cursor-pointer"
                onClick={() => handleTitleClick(project)}
              >
                <motion.p>{project.date}</motion.p>
                <motion.h2
                  animate={{
                    fontWeight: 700,
                  }}
                  className={`text-5xl   ${
                    clickAnimateId !== project.id ? "" : "animating"
                  }  uppercase  font-thin text-right transition-all"
                      : ""
                  } duration-300`}
                >
                  {project.title}
                </motion.h2>
                <p className={`opacity-0 group-hover:opacity-50 duration-300`}>
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selected && (
        <motion.div className=" fixed top-0 left-0 w-full h-full pointer-events-none flex items-end justify-end !pr-20 ">
          {
            <div className="  h-[calc(100vh-10px)] flex flex-col justify-center items-end  -z-10 ">
              <p className="!mb-3">Techs .</p>
              {selected?.techs?.map((tech, index) => (
                <motion.p
                  key={index}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  initial={{
                    x: 50,
                    opacity: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="text-xs font-bold flex items-center gap-3"
                >
                  {tech.icon && (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10"
                    />
                  )}
                  {tech.name}
                </motion.p>
              ))}
            </div>
          }
        </motion.div>
      )}
      <motion.div
        initial={{
          x: "100%",
        }}
        animate={{
          x: selected ? "45%" : "100%",
        }}
        className=" fixed top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center "
      >
        {
          <div className="  h-[calc(100vh-10px)] flex flex-col justify-end items-end  -z-10 ">
            <p>No .</p>
            <p className="text-9xl font-bold ">
              {selected && selected?.index < 10 ? "0" : ""}
              {selected?.index || ""}
            </p>
          </div>
        }
      </motion.div>
    </div>
  );
}
type Project = {
  id: number;
  index: number;
  title: string;
  image: string;
  date: string;
  category: string;
  description: string;
  video?: string;
  techs?: { name: string; icon?: string }[];
};

function calcProjectWeights(
  projects: Project[],
  activeIndex: number,
  step = 0.1 // chỉnh độ giảm
) {
  return projects.map((project) => {
    const distance = Math.abs(project.index - activeIndex);
    console.log(distance);
    const weight = Math.max(0, 1 - distance * step);
    console.log(Number(weight.toFixed(2)));
    return {
      ...project,
      weight: 1 - Number(weight.toFixed(2)),
    };
  });
}
