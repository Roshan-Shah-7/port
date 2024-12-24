const Links = ({ text }) => (
  <a className="cursor-pointer link-bracket">{text}</a>
);

export const Heading = () => {
  return (
    <header className="fixed w-full max-w-[1440px] top-[3rem] left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex items-center justify-center">
        <ul className="w-full flex justify-between items-center relative">
          <li className="relative">
            <Links text="Home" />
          </li>
          <li className="relative">
            <Links text="About" />
          </li>
          <li className="relative cursor-pointer overflow-hidden">
            <h1 className="nav-h1">{`<roshan>`}</h1>
          </li>
          <li className="relative">
            <Links text="Projects" />
          </li>
          <li className="relative">
            <Links text="Contact" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
