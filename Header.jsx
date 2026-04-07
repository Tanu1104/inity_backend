import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/shop">
              <button>Click Me</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
