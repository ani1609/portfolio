import '../styles/App.css';
import Navbar from './Navbar';
import Header from './Header';
import Sidebars from './Sidebars';
import About from './About';
import MajorProjects from './MajorProjects';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Sidebars/>
      <About/>
      <MajorProjects/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

