import { useRef, useEffect } from "react";
import { ReactComponent as FolderIcon } from "../icons/folder.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import "../index.css";
import "../styles/MinorProjectItems.css";

function MinorProjectItems(props) {
  const { minorProject } = props;
  const minorProjectRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showMinorProject");
      }
    }, options);

    const currentMinorProjectRef = minorProjectRef.current;

    if (currentMinorProjectRef) observer.observe(currentMinorProjectRef);

    return () => {
      if (currentMinorProjectRef) observer.unobserve(currentMinorProjectRef);
    };
  }, []);

  const handleGithubClick = () => {
    window.open(minorProject.github, "_blank");
  };

  return (
    <a
      href={minorProject.link}
      className="minor_project"
      target="_blank"
      ref={minorProjectRef}
      rel="noopener noreferrer"
    >
      <div className="icons">
        <div className="folder_icon">
          <FolderIcon />
        </div>
        <a
          href={minorProject.githubLink}
          className="github_icon"
          target="_blank"
          onClick={handleGithubClick}
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>

      <div className="minor_title">
        <h2>{minorProject.title}</h2>
        {minorProject.tagLine && <h4>{minorProject.tagLine}</h4>}
      </div>

      <p>{minorProject.description}</p>

      <ul>
        {minorProject.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </a>
  );
}

export default MinorProjectItems;
