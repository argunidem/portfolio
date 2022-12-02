import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import Logo from '../assets/logo.png';
import { IoIosClose } from 'react-icons/io';
import { HiOutlineBars3 } from 'react-icons/hi2';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-yellow-500' : ''
      } transition duration-500 hover:text-yellow-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-blue-700';

  return (
    <nav className={`fixed top-0 z-40 w-full py-6 ${navbarBackground}`}>
      <div className='mx-auto flex w-5/6 items-center justify-between'>
        <img src={Logo} alt='logo' className='w-14' />
        {/* Desktop Nav */}
        {isAboveSmallScreens ? (
          <div className='font-opensans flex justify-between gap-16 font-semibold'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Skills'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Projects'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <HiOutlineBars3 className='text-4xl' />
          </button>
        )}
        {/* Mobile Menu Popup */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 h-full w-[300px] bg-blue-700'>
            {/* Close Icon */}
            <div className='flex justify-end p-8'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <IoIosClose className='text-5xl' />
              </button>
            </div>

            {/* Menu item */}
            <div className='text-deep-blue ml-[33%] flex flex-col gap-10 text-2xl'>
              <Link
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Skills'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
