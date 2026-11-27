import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/Login");
  };
  return (
    <div className="main-container">
      <div className="nav-container">
        <div>
          <h1>Expense Tracker</h1>
        </div>

        <div className="nav-link">
          <ul>
            <li>
              <NavLink to="/" className="links">
                Home
              </NavLink>
            </li>
          </ul>

          <ul>
            <li>
              <NavLink to="/add-expense" className="links">
                add Expense
              </NavLink>
            </li>
          </ul>

          <ul>
            <li>
              <NavLink to="/expense-items" className="links">
                Expense Items
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          <a href="" className="links logout-btn" onClick={logout}>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
