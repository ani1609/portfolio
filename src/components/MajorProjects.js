import { useRef, useEffect } from "react";
import MajorProjectsItems from "./MajorProjectsItems";
import UiAstraImage from "../images/ui-astra.webp";
import SpendwiseImage from "../images/spendwise.webp";
import ConversifyImage from "../images/conversify.webp";
import "../index.css";
import "../styles/MajorProjects.css";

function MajorProjects() {
  const MajorProjects = [
    {
      id: 1,
      title: "UI Astra",
      status: "Industry Level Project",
      description:
        "A versatile UI library featuring reusable, customizable components built on top of Radix Primitives, and an integrated icon library, AstraIcons, for streamlined and efficient web development.",
      image: UiAstraImage,
      techStack: ["GSAP", "Next.js", "RadixUI", "Tailwind CSS", "Typescript"],
      github: "https://github.com/uiastra",
      link: "https://uiastra.com",
    },
    {
      id: 2,
      title: "Conversify",
      status: "Under Development",
      description:
        "End-to-End Encrypted Chat App: Seamlessly integrating the OpenPGP library, this MERN-based application ensures secure and private messaging with real-time chat capabilities, prioritizing communication privacy and offering a seamless user experience.",
      image: ConversifyImage,
      techStack: [
        "Express",
        "MongoDB",
        "Multer",
        "OpenPGP",
        "React",
        "Socket.io",
      ],
      github: "https://github.com/ani1609/Conversify",
      link: "https://github.com/ani1609/Conversify",
    },
    {
      id: 3,
      title: "Spendwise",
      status: "KWoC '23, IIT KGP Triumph",
      description:
        "A user-friendly expense tracker app empowering individuals to effortlessly manage and analyze their financial transactions, fostering effective budgeting and financial awareness.",
      image: SpendwiseImage,
      techStack: ["ApexCharts", "React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/ani1609/Spendwise",
      link: "https://spendwise-two.vercel.app/",
    },
  ];

  const MajorProjectHeadingRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showMajorProjectsHeading");
      }
    }, options);

    const currentMajorProjectHeadingRef = MajorProjectHeadingRef.current;

    if (currentMajorProjectHeadingRef)
      observer.observe(currentMajorProjectHeadingRef);

    return () => {
      if (currentMajorProjectHeadingRef)
        observer.unobserve(currentMajorProjectHeadingRef);
    };
  }, []);

  return (
    <section className="major_projects_parent">
      <h1 ref={MajorProjectHeadingRef}>Some Things I've Built</h1>
      {MajorProjects.map((MajorProject) => {
        return (
          <MajorProjectsItems
            MajorProject={MajorProject}
            key={MajorProject.id}
          />
        );
      })}
    </section>
  );
}

export default MajorProjects;
