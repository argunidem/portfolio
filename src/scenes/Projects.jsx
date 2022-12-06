import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full transition duration-600 z-30 flex flex-col justify-center items-center text-center p-16 text-white rounded-xl bg-[rgba(0,0,0,0)] hover:bg-[rgba(0,0,0,0.8)] cursor-pointer`;
  const projectTitle = title.split(' ').join('-').toLowerCase();
  return (
    <motion.div variants={projectVariant} className='relative rounded-xl'>
      <div className={`${overlayStyles} opacity-0 hover:opacity-100`}>
        <p className='font-playfair text-2xl'>{title}</p>
        <p className='mt-7'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, illum.
        </p>
      </div>
      <img
        src={`../assets/${projectTitle}.jpg`}
        alt={projectTitle}
        className='rounded-xl'
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id='projects' className='pt-56 pb-48'>
      {/* HEADINGS */}
      <motion.div
        className='mx-auto text-center md:w-2/5'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair text-4xl font-semibold'>
            PRO<span className='text-yellow-500'>JECTS</span>
          </p>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center pt-24'>
        <motion.div
          className='sm:grid sm:grid-cols-2'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project title='Project 1' />
          <Project title='Project 2' />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
