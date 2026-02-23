import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-black border-bottom border-secondary">
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-dark py-3">

          {/* Logo */}
          <NavLink
            to="/"
            className="navbar-brand fw-bold fs-4"
          >
            Quiz App
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto gap-lg-3">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link px-3 rounded ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-light nav-hover"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/quizs"
                  className={({ isActive }) =>
                    `nav-link px-3 rounded ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-light nav-hover"
                    }`
                  }
                >
                  Generate Quiz
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/saved"
                  className={({ isActive }) =>
                    `nav-link px-3 rounded ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-light nav-hover"
                    }`
                  }
                >
                  Saved  Quiz
                </NavLink>
              </li>

            </ul>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;