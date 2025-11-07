export const Navbar = () => {

    // to execute: npx http-server -p 8000

  return (
    <nav className="navbar">  
        <ul>
            <li className="nav-item"><a href='#'>Dashboard</a></li>
            <li className="nav-item"><a href='#'>About Us</a></li>
            <li className="nav-item">
                <button aria-expanded="false">Apps</button>
                <ul className="sub-menu" aria-label="Apps">
                    <li><a href='#'>App 1</a></li>
                    <li><a href='#'>App 2</a></li>
                    <li><a href='#'>App 3</a></li>
                </ul>
            </li>

        </ul>
    </nav>
  );
};
  
