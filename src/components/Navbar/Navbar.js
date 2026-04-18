import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PAGE_ROUTES = {
  home: '/',
  work: '/projects/',
  about: '/about/',
  resume: '/resume/',
};

const Navbar = () => {
  const location = useLocation();

  const getActivePage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/projects')) return 'work';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/resume')) return 'resume';
    return 'home';
  };

  const page = getActivePage();
  const pages = ['home', 'work', 'about', 'resume'];

  return (
    <nav className="nav" data-screen-label="nav">
      <div className="nav-inner">
        <Link className="brand" to="/" style={{ textDecoration: 'none' }}>
          <span className="dot" />
          A|W
        </Link>
        <div className="nav-links">
          {pages.map((p) => (
            <Link
              key={p}
              className={'nav-link ' + (page === p ? 'is-active' : '')}
              to={PAGE_ROUTES[p]}
              style={{ textDecoration: 'none' }}
            >
              {p === 'work' ? 'Work' : p.charAt(0).toUpperCase() + p.slice(1)}
            </Link>
          ))}
        </div>
        <div className="nav-meta">
          <span className="dot-live" />
          Open to work · {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
