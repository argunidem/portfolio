import SocialMedia from '../components/SocialMedia';

const Footer = () => {
  return (
    <footer className='min-h-60 bg-blue-700 py-10'>
      <div className='mx-auto w-5/6'>
        <SocialMedia />
        <div className='mx-12 justify-center text-center md:flex md:justify-between'>
          <p className='font-playfair text-2xl font-semibold text-yellow-500'>
            Argun Idem
          </p>
          <p className='text-yellow-500'>
            &copy;2022 Idem. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
