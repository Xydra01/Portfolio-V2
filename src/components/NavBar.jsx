function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <h1 className="navbar-brand me-auto">Xydra01</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <a
                className={`nav-link ${
                  currentPage === 'About' ? 'active' : ''
                }`}
                aria-current={currentPage === 'About' ? 'page' : undefined}
                href="#about"
                onClick={() => handlePageChange('About')}
              >
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className={`nav-link ${
                  currentPage === 'Portfolio' ? 'active' : ''
                }`}
                aria-current={currentPage === 'Portfolio' ? 'page' : undefined}
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className={`nav-link ${
                  currentPage === 'Contact' ? 'active' : ''
                }`}
                aria-current={currentPage === 'Contact' ? 'page' : undefined}
                href="#contact"
                onClick={() => handlePageChange('Contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
