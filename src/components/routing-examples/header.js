import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark  bg-dark'>
      <div className='container'>
        <span className='navbar-brand mb-0 h1'>Routing Example</span>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              {/* <NavLink to='/about' className='nav-link'>
                About
              </NavLink> */}
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link active text-danger bg-light'
                    : 'nav-link inactive'
                }
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
