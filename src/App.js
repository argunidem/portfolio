import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
      const sectionsArray = ['home', 'skills', 'projects', 'contact'];
      const sections = Array.from(document.querySelector('.app').children);
      const halfOfWindowHeight = window.innerHeight / 2;
      sections.map((section, index) => {
        const topOfSection = section.getBoundingClientRect().top;
        if (topOfSection <= halfOfWindowHeight && topOfSection >= -200) {
          setSelectedPage(sectionsArray[index]);
        }
        return topOfSection;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className='app'>
        <div className='md:4/5 mx-auto min-h-screen w-5/6 lg:w-3/4'>
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>

        <div className='min-h-screen bg-white'>
          <Skills />
        </div>
        <div className='min-h-screen bg-blue-700'>
          <Projects />
        </div>
        <div className='min-h-screen'>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
