import "../index.css";
import "../styles/Footer.css";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as Linkedin } from "../icons/linkedin.svg";
import { ReactComponent as Instagram } from "../icons/instagram.svg";
import { ReactComponent as Twitter } from "../icons/twitter.svg";
import { ReactComponent as Discord } from "../icons/discord.svg";
// import { ReactComponent as Leetcode } from "../icons/leetcode.svg";

function Footer() {
  const githubLink = "https://github.com/ani1609";
  const discordLink = "https://discordapp.com/users/754188469764358264";
  const linkedinLink =
    "https://www.linkedin.com/in/ankit-kumar-chowdhury-1b1690218";
  const instagramLink = "https://www.instagram.com/ankit.chdry/";
  const twitterLink = "https://twitter.com/AnkitCh03046966";

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="footer_container">
      <ul>
        <li onClick={() => handleLinkClick(githubLink)}>
          <Github />
        </li>
        <li onClick={() => handleLinkClick(discordLink)}>
          <Discord />
        </li>
        <li onClick={() => handleLinkClick(linkedinLink)}>
          <Linkedin />
        </li>
        <li onClick={() => handleLinkClick(instagramLink)}>
          <Instagram />
        </li>
        <li onClick={() => handleLinkClick(twitterLink)}>
          <Twitter />
        </li>
      </ul>
      <p>
        Designed by
        <a
          href="https://github.com/bchiang7"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Brittany Chiang{" "}
        </a>
        & Built by
        <a
          href="https://github.com/ani1609/resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Ankit Kr. Chowdhury
        </a>
      </p>
    </section>
  );
}

export default Footer;
