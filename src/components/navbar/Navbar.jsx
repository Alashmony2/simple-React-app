import { NavLink ,Link} from "react-router-dom"
import "./nav.css"


export default function Navbar() {
  return (
    <>

    <nav
        className="navbar navbar-expand-sm navbar-dark position-fixed start-0 end-0 z-3 top-0"
    >
        <div className="container py-3">
            <Link className="navbar-brand py-4" href="/head">START REACT</Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link p-4 rounded-3" to="/about">ABOUT</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link p-4 rounded-3" to="/portfolio">PORTFOLIO</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link p-4 rounded-3" to="/contact">CONTACT</NavLink>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    </nav>
    

    </>
  )
}
