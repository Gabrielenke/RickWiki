import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface ILink {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = (Props: ILink) => {
  const locationUrl = useLocation();
  return (
    <Link to={Props.href} className={`${Props.className} group relative `}>
      {Props.title}

      <span
        className={`ease absolute -bottom-1.5 left-0 inline-block h-[2px] bg-white transition-[width] duration-300 group-hover:w-full ${
          locationUrl.pathname === Props.href ? ' w-full' : 'w-0'
        } `}
      ></span>
    </Link>
  );
};

export default CustomLink;
