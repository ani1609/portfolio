import './Header.css';

function Header() 
{
  
  return (
    <div>
      <header>
        <h4 className='greeting'>Hi, my name is </h4>
        <h1 className='name'>Ankit Kr. Chowdhury.</h1>
        <h1 className='what-i-do'>I build things for the web.</h1>
        <p className='header-description'>
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <a href='' className='sample-button'>Dummy Button</a>
        
        
      </header>
    </div>
  );
}

export default Header;

