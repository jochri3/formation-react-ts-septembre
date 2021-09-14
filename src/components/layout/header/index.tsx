import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="nav">
        <ul className="nav-item nav-brand">
          <li>
            <Link to="/" className="nav-link">
              Acceuil
            </Link>
          </li>
        </ul>
        <ul className="nav-item nav-links">
          <li>
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link">
              Créer contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
