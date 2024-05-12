function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://github.com/Xydra01" className="github-link">
            <i className="bi bi-github github-icon"></i> GitHub
          </a>
        </div>
        <div className="mb-3">&copy; {new Date().getFullYear()} Xydra01</div>
      </div>
    </footer>
  );
}

export default Footer;
