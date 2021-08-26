import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav>
      <div class='nav-wrapper  blue-grey darken-3'>
        <a href='#' class='brand-logo right'>
          React-SPA
        </a>
        <ul id='nav-mobile' class='left hide-on-med-and-down'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
