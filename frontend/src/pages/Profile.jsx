import "../styles/Profile.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import BG from "../assets/BG.jpg"

function Profile() {
    return <div className="page">

            <div className="TempBG">
                <img src={BG}/>
            </div>

        <div className="Profile">
            <h1>User Profile</h1>
            
            <div className="card">
                <div className="Icon">
                </div>

                <div className="Info">
                    <div className="Grp">
                        <h3>Username :</h3>
                        <p className="ProfileInfo">user</p>
                    </div>

                    <div className="Grp">
                        <h3>Trip code :</h3>
                        <p className="ProfileInfo">DSGFD</p>
                    </div>
                </div>

                <div className="Logout">
                    <CustomLink to = "/logout">
                        <button className="Logout-button" type="submit">
                            Logout
                        </button>
                    </CustomLink>
                    
                </div>

            </div>

            <div className="bg">
            </div>
        </div>

        

    </div>
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

export default Profile