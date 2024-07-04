import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../styles/Nav.css"

export default function Navbar() {

  return (
    <nav className="nav">

        <div className="Logo">
          <ul>
            <CustomLink to="/">
              <div className="signLogo" />
            </CustomLink>
          </ul>
        </div>
       
       <div className="mid">
        <ul>
          <li>
          <CustomLink to="/">
            <button className="Btn">
                <div className="sign" />
                <div className="text">
                     Home 
                </div>
            </button>
            </CustomLink>
          </li>

          <li>
          <CustomLink to="/flight"> 
              <button className="Btn">
                <div className="signF" />
                    <div className="text">
                      Flight Details 
                    </div>
              </button>
            </CustomLink>
          </li>

          <li>
          <CustomLink to="/hotel"> 
              <button className="Btn">
                <div className="signH" />
                    <div className="text">
                      Hotel Details 
                    </div>
              </button>
            </CustomLink>
          </li>

          <li>
          <CustomLink to="/trip"> 
              <button className="Btn">
                <div className="signT" />
                    <div className="text">
                      Trip Program 
                    </div>
              </button>
            </CustomLink>
          </li>

          <li>
          <CustomLink to="/profile"> 
              <button className="Btn">
                <div className="signP" />
                    <div className="text">
                      Profile 
                    </div>
              </button>
            </CustomLink>
          </li>  
        </ul>
      </div>

      <div className="Notification">
        <ul>
          <CustomLink to="/">
            <div className="signNotif" />
          </CustomLink>
        </ul>
      </div>





    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}