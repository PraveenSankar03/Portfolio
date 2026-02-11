import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          MY PORTFOLIO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Overview
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/background">
                Background
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href='/skills'>
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
