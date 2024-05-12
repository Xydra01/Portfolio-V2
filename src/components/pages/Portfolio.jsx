export default function Portfolio() {
  return (
    <div className="container">
      <h2 className="mb-4">Xydra's Portfolio</h2>
      <div className="card-container row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        <div className="mb-4">
          <div className="card bg-dark text-white">
            <img
              src="./src/assets/images/315531093-7d155bf7-8924-43d8-b6e1-3590e90b2d98.png"
              className="card-img"
              alt="MovieMania"
            ></img>
            <div className="card-img-overlay">
              <div className="card-content">
                <h5 className="card-title">MovieMania</h5>
                <p className="card-text">
                  Front-End Utilises 3rd Party APIs - HTML, CSS, Javascript
                </p>
                <a href="https://github.com/SuperRonanCraft/bootcamp-project-1">
                  <i className="bi bi-github github-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="card bg-dark text-white">
            <img
              src="./src/assets/images/20a8a169306e64d34d10a1fc2571a1eb.jpg"
              className="card-img"
              alt="..."
            ></img>
            <div className="card-img-overlay">
              <div className="card-content">
                <h5 className="card-title">My Otaku Opinions</h5>
                <p className="card-text">
                  Fullstack Web App - HTML, Bootstrap, Javascript, Sequelize
                </p>
                <a href="https://github.com/HUGODEHSIGN/my-otaku-opinions">
                  <i className="bi bi-github github-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="card bg-dark text-white">
            <img
              src="./src/assets/images/Challenge_04_Demo (1).gif"
              className="card-img"
              alt="..."
            ></img>
            <div className="card-img-overlay">
              <div className="card-content">
                <h5 className="card-title">Personal Blog</h5>
                <p className="card-text">Frontend - HTML, CSS, Javascript</p>
                <a href="github.com/Xydra01/Personal-Blog-Challenge-04">
                  <i className="bi bi-github github-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
