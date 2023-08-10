import { logo } from '../assets/export';
import CustomLink from './CustomLink';

const NavBar = () => {
  return (
    <header className="mb-10 flex items-center justify-between bg-[#121212] px-5 py-5">
      <nav className="flex text-2xl text-white">
        <img className="w-32" src={logo} alt="" />
      </nav>
      <nav className="mr-10 flex gap-10 text-2xl text-white">
        <CustomLink href="/" title="Characters" />
        <CustomLink href="/Episodes" title="Episodes" />
      </nav>
    </header>
  );
};

export default NavBar;
