import "./Footer.css"

export default function Footer() {
  return (
    <>
    <footer>
        <div className="upper-footer py-4">
        <div className="container text-center text-white py-5">
            <div className="row">
                <div className="footer-first col-md-4">
                    <h4>location</h4>
                    <p>2215 John Daniel Drive <br />Clark, MO 65243</p>
                </div>
                <div className="footer-mid col-md-4">
                    <h4>Around the web</h4>
                    <div className="icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="footer-last col-md-4">
                    <h4>About freelancer</h4>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Ahmed Alashmony</p>
                </div>
            </div>
        </div>
        </div>
        <div className="bootem-footer text-center text-white py-4">
            <p>Copyright © Ahmed Alashmony 2024</p>
        </div>
    </footer>
    </>
  )
}
