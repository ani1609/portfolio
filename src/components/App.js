import { useEffect } from "react";
import Maintenance from "./Maintenance";
import Navbar from "./Navbar";
import Header from "./Header";
import Sidebars from "./Sidebars";
import About from "./About";
import Experience from "./Experience";
import MajorProjects from "./MajorProjects";
import MinorProjects from "./MinorProjects";
import Contact from "./Contact";
import Footer from "./Footer";
import TopButton from "./TopButton";
import "../styles/App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (process.env.REACT_APP_MAINTENANCE_MODE === "true") {
    return (
      <div className="App">
        <Maintenance />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <TopButton />
        <Sidebars />
        <About />
        <Experience />
        <MajorProjects />
        <MinorProjects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
