import SocialMedia from '../components/SocialMedia';
import useMediaQuery from '../hooks/useMediaQuery';
import Tilty from 'react-tilty';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id='home'
      className='h-full gap-24 py-16 sm:py-20 md:flex md:items-center md:justify-between md:gap-8 md:py-48'
    >
      {/* Image Section */}
      <div className='z-10 mt-28 flex basis-2/5 justify-center md:order-2 md:mt-10 md:justify-end'>
        {isAboveMediumScreens ? (
          <Tilty
            speed={11000}
            style={{ transformStyle: 'preserve-3d' }}
            easing='cubic-bezier(.03,.98,.52,.99)'
          >
            <motion.img
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              style={{ transform: 'translateZ(40px)' }}
              src='assets/profile.jpg'
              alt='profile'
              className='w-full max-w-[400px] rounded-lg md:max-w-[450px]'
            />
          </Tilty>
        ) : (
          <Tilty
            speed={11000}
            style={{ transformStyle: 'preserve-3d' }}
            easing='cubic-bezier(.03,.98,.52,.99)'
          >
            <img
              style={{ transform: 'translateZ(40px)' }}
              src='assets/profile.jpg'
              alt='profile'
              className='w-full max-w-[300px] rounded-lg'
            />
          </Tilty>
        )}
      </div>

      {/* Main Section */}
      <div className='mt-12 basis-3/5 md:mt-32'>
        {/* Headings Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <p className='text-center font-playfair text-4xl font-bold xs:text-5xl sm:text-6xl md:text-start'>
            Argun Idem
          </p>

          <p className='mx-auto mt-8 mb-7 max-w-[500px] text-center text-sm md:mx-0 md:max-w-[600px] md:text-start'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            delectus quibusdam quasi consequuntur veniam, iusto nisi rem
            voluptatum labore ad?
          </p>
        </motion.div>

        {/* Call to actions */}
        <motion.div
          className='mt-5 flex justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <AnchorLink
            onClick={() => setSelectedPage('contact')}
            href='#contact'
            className='rounded-lg bg-slate-800 py-3 px-7 text-center text-[12px] font-semibold transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.01] hover:bg-white hover:text-slate-800 active:scale-95 xs:text-[16px]'
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            onClick={() => setSelectedPage('contact')}
            href='#contact'
            className='ml-7 rounded-lg bg-blue-700 py-3 px-7 text-center text-[12px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.01] hover:bg-yellow-500 hover:text-slate-800  active:scale-95 xs:text-[16px]'
          >
            <div className=''>Let's talk.</div>
          </AnchorLink>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <SocialMedia />
        </motion.div>
      </div>
    </section>
  );
};
export default Landing;
