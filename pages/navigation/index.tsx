const Navigation = () => {
  return (
    <>
      <div className="navbar z-10  md:pb-24 md:pt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                {" "}
                <a href="/works">Works</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl" href="/">
            Cosmos
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="btn btn-ghost normal-case" href="/about">About</a>
            </li>
            <li>
              <a className="btn btn-ghost normal-case" href="/works">Works</a>
            </li>
            <li>
              <a className="btn btn-ghost normal-case" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn" href="/blog">Blog</a>
        </div>
      </div>
    </>
  );
};
export default Navigation;
