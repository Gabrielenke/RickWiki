import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface ILink {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = '' }: ILink) => {
  const locationUrl = useLocation();
  return (
    <Link to={href} className={`${className} group relative `}>
      {title}

      <span
        className={`ease absolute -bottom-1.5 left-0 inline-block h-[2px] bg-white transition-[width] duration-300 group-hover:w-full ${
          locationUrl.pathname === href ? ' w-full' : 'w-0'
        } `}
      ></span>
    </Link>
  );
};

export default CustomLink;
