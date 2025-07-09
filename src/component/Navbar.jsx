import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <section>
        <nav>
          <img className="w-26 h-14" src="src/assets/apna logo.png" alt="" />

          <ul>
            <li><Link to="/results">Our Results</Link></li>
            <li><Link to="/sigma">New Sigma 8.0</Link></li>
            <li><Link to="/dsa-sheet">DSA Sheet</Link></li>
            <li><Link to="/new-course">New Course</Link></li>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
