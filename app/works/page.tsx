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
      title: "Qixi Festival Campaign",
      image: "https://picsum.photos/600/400?random=1",
      date: "Nov 2023",
      category: "Holiday Campaign",
      description: `<div class="project-card-vertical">
        <div class="image-container">
          <img src="https://picsum.photos/600/400?random=1" alt="Qixi Festival Campaign" />
        </div>
        <div class="content">
          <h3>Qixi Festival Campaign</h3>
          <p>A romantic visual campaign celebrating the Chinese Valentine's Day, featuring elegant typography and traditional cultural elements merged with modern design aesthetics.</p>
        </div>
      </div>`,
    },
    {
      id: 2,
      index: 1,
      title: "Brand Identity Design",
      image: "https://picsum.photos/800/600?random=2",
      date: "Nov 2023",
      category: "Branding",
      description: `<div class="project-card-horizontal">
        <img src="https://picsum.photos/800/600?random=2" alt="Brand Identity Design" class="left-img" />
        <div class="text-content">
          <h3>Brand Identity Design</h3>
          <p>Comprehensive brand identity system including logo design, color palette, typography guidelines, and brand collateral for a contemporary lifestyle brand.</p>
          <ul>
            <li>Logo Design</li>
            <li>Color System</li>
            <li>Typography</li>
          </ul>
        </div>
      </div>`,
    },
    {
      id: 3,
      title: "Mobile App UI",
      image: "https://picsum.photos/500/800?random=3",
      index: 2,
      date: "Nov 2023",
      category: "UI/UX Design",
      description: `<div class="project-grid">
        <div class="header-section">
          <h3>Mobile App UI</h3>
          <span class="category-badge">UI/UX Design</span>
        </div>
        <div class="image-gallery">
          <img src="https://picsum.photos/500/800?random=3" alt="Mobile App UI" />
        </div>
        <div class="description-text">
          <p>Intuitive mobile application interface design focused on user experience, featuring clean layouts, smooth animations, and accessible navigation patterns.</p>
        </div>
      </div>`,
    },
    {
      id: 4,
      title: "Tokyo Paralympics Closing",
      image: "https://picsum.photos/700/500?random=4",
      index: 3,
      date: "Nov 2023",
      category: "Event Poster",
      description: `<article class="project-magazine-layout">
        <figure>
          <img src="https://picsum.photos/700/500?random=4" alt="Tokyo Paralympics Closing" />
          <figcaption>Tokyo Paralympics 2023</figcaption>
        </figure>
        <section>
          <h3>Tokyo Paralympics Closing</h3>
          <p class="lead">Dynamic poster design celebrating athletic achievement and diversity.</p>
          <p>Incorporating bold colors and powerful imagery to commemorate the closing ceremony.</p>
        </section>
      </article>`,
    },
    {
      id: 5,
      title: "Ji Xianlin 110th Anniversary",
      image: "https://picsum.photos/900/600?random=5",
      index: 4,
      category: "Memorial Design",
      date: "Nov 2023",
      description: `<div class="project-split-layout">
        <div class="text-half">
          <h3>Ji Xianlin 110th Anniversary</h3>
          <p class="subtitle">Memorial Design</p>
          <p>Commemorative design honoring the legacy of renowned scholar Ji Xianlin, blending traditional Chinese aesthetics with contemporary design principles.</p>
          <div class="stats">
            <span>110 Years</span>
            <span>Legacy Design</span>
          </div>
        </div>
        <div class="image-half">
          <img src="https://picsum.photos/900/600?random=5" alt="Ji Xianlin 110th Anniversary" />
        </div>
      </div>`,
    },
    {
      id: 6,
      title: "Product Photography",
      image: "https://picsum.photos/650/450?random=6",
      index: 5,
      category: "Photography",
      date: "Nov 2023",
      description: `<div class="project-minimal">
        <img src="https://picsum.photos/650/450?random=6" alt="Product Photography" class="full-width" />
        <div class="minimal-text">
          <h3>Product Photography</h3>
          <p>Professional product photography series showcasing premium goods through creative lighting, composition, and attention to detail.</p>
        </div>
      </div>`,
    },
    {
      id: 7,
      title: "Social Media Campaign",
      image: "https://picsum.photos/750/550?random=7",
      index: 6,
      category: "Social Media",
      date: "Nov 2023",
      description: `<div class="project-overlay">
        <div class="image-wrapper">
          <img src="https://picsum.photos/750/550?random=7" alt="Social Media Campaign" />
          <div class="overlay-content">
            <h3>Social Media Campaign</h3>
            <p>Engaging social media content strategy featuring eye-catching visuals, consistent branding, and optimized formats for multiple platforms.</p>
            <div class="platforms">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </div>`,
    },
    {
      id: 8,
      title: "Anniversary Celebration",
      image: "https://picsum.photos/600/700?random=8",
      index: 7,
      category: "Event Design",
      date: "Nov 2023",
      description: `<div class="project-card-stacked">
        <header>
          <h3>Anniversary Celebration</h3>
          <p class="date">Nov 2023</p>
        </header>
        <div class="image-section">
          <img src="https://picsum.photos/600/700?random=8" alt="Anniversary Celebration" />
        </div>
        <footer>
          <p>Complete event branding and visual design for a milestone anniversary celebration, including invitations, signage, and digital displays.</p>
        </footer>
      </div>`,
    },
    {
      id: 9,
      title: "Anniversary Celebration",
      image: "https://picsum.photos/850/500?random=9",
      index: 8,
      date: "Nov 2023",
      category: "Event Design",
      description: `<div class="project-sidebar-layout">
        <aside class="sidebar">
          <h3>Anniversary Celebration</h3>
          <p class="category">Event Design</p>
          <p>Elegant event design package featuring cohesive visual elements that honor tradition while embracing modern design sensibilities.</p>
        </aside>
        <main class="main-image">
          <img src="https://picsum.photos/850/500?random=9" alt="Anniversary Celebration" />
        </main>
      </div>`,
    },
    {
      id: 10,
      title: "Anniversary Celebration",
      image: "https://picsum.photos/550/650?random=10",
      index: 9,
      date: "Nov 2023",
      category: "Event Design",
      description: `<div class="project-masonry">
        <div class="text-block">
          <h3>Anniversary Celebration</h3>
          <p>Sophisticated anniversary branding combining classic design principles with contemporary visual language for a memorable celebration.</p>
        </div>
        <div class="image-block">
          <img src="https://picsum.photos/550/650?random=10" alt="Anniversary Celebration" />
        </div>
      </div>`,
    },
    {
      id: 11,
      title: "Anniversary Celebration",
      image: "https://picsum.photos/700/600?random=11",
      index: 10,
      date: "Nov 2023",
      category: "Event Design",
      description: `<div class="project-featured">
        <div class="featured-badge">Featured Project</div>
        <img src="https://picsum.photos/700/600?random=11" alt="Anniversary Celebration" class="hero-image" />
        <div class="featured-content">
          <h3>Anniversary Celebration</h3>
          <p>Comprehensive visual identity for special anniversary event, featuring custom illustrations and refined typography throughout all materials.</p>
          <button class="view-more">View Details</button>
        </div>
      </div>`,
    },
    {
      id: 12,
      title: "Anniversary Celebration",
      image: "https://picsum.photos/800/550?random=12",
      index: 11,
      date: "Nov 2023",
      category: "Event Design",
      description: `<div class="project-timeline">
        <div class="timeline-marker">2023</div>
        <div class="content-wrapper">
          <h3>Anniversary Celebration</h3>
          <img src="https://picsum.photos/800/550?random=12" alt="Anniversary Celebration" />
          <p>Celebratory design suite creating a unified visual experience across print, digital, and environmental graphics for a landmark anniversary.</p>
          <div class="deliverables">
            <span>Print</span>
            <span>Digital</span>
            <span>Environmental</span>
          </div>
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
      </div>
      <div className=" ml-auto w-full h-screen overflow-y-auto hide-scrollbar !pl-20">
        <motion.div
          ref={projectsRef}
          className="  w-fit  h-full  flex  gap-6 flex-col
   items-center justify-center z-30"
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
