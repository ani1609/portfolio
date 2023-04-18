import '../styles/App.css';
import Navbar from './Navbar';
import Header from './Header';
import Sidebars from './Sidebars';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Sidebars/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

