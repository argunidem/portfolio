import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import { motion } from 'framer-motion';

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <motion.div
        className='md:4/5 mx-auto mb-4 min-h-screen w-5/6 lg:w-3/4'
        amount='all'
        onViewportEnter={() => setSelectedPage('home')}
      >
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </motion.div>

      <motion.div
        amount='all'
        onViewportEnter={() => setSelectedPage('skills')}
        className='my-12 min-h-screen bg-white'
      >
        <Skills />
      </motion.div>
      <motion.div
        amount='all'
        onViewportEnter={() => setSelectedPage('projects')}
        className='my-12 min-h-screen bg-blue-700'
      >
        <Projects />
      </motion.div>
    </div>
  );
}

export default App;
