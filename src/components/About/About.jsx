import "./About.css"


export default function About() {
  return (
    <>
    <section className="about text-center text-white">
        <h2 className="pt-5">About</h2>
        <div className="star ">
        <h3><i className="fa-solid fa-star text-white"></i></h3>
        <div className="white-star position-relative"></div>
        </div>
        <div className="about-info mt-4 w-75 mx-auto text-start">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-6">
                <p className="">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
            </div>
          </div>
            
        </div>
    </section>
    </>
  )
}
