import { FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='my-10 flex justify-center gap-7 md:ml-12 md:justify-start'>
      <a
        href='https://www.linkedin.com/in/argun-i-44a689225'
        target='_blank'
        rel='noreferrer'
        className='duration-400 text-4xl transition duration-300 hover:scale-110 active:scale-95 xs:text-5xl'
      >
        <FaLinkedin />
      </a>
      <a
        href='https://www.facebook.com/hyperbboy'
        target='_blank'
        rel='noreferrer'
        className='duration-400 text-4xl transition duration-300 hover:scale-110 active:scale-95 xs:text-5xl'
      >
        <FaFacebookSquare />
      </a>
      <a
        href='https://www.instagram.com/argunkarolina'
        target='_blank'
        rel='noreferrer'
        className='duration-400 text-4xl transition duration-300 hover:scale-110 active:scale-95 xs:text-5xl'
      >
        <FaInstagram />
      </a>
    </div>
  );
};
export default SocialMedia;
