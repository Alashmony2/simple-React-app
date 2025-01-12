import "./Contact.css"

export default function Contact() {
  return (
    <>
    <section id="contact" className="contact mb-5">
        <h2 className="text-center dark-head">CONTACT ME</h2>
        <div className="star ">
        <h3 className="text-center"><i className="fa-solid fa-star dark-star"></i></h3>
        <div className="black-star position-relative"></div>
        </div>
        <div className="container w-50 mt-5">
            <div className="inputs">
                <form>
                <input type="text" className="w-100 p-1 fs-5 border-0" placeholder="Name"/>
                <input type="email" className="w-100 p-1 fs-5 border-0 my-5" placeholder="Email Address"/>
                <input type="text" className="w-100 p-1 fs-5 border-0" placeholder="Phone Number"/>
                <textarea className="mt-5 w-100 p-1 fs-5 border-0" placeholder="Message"></textarea>
                <button type="button" className="btn px-4 py-3 mt-5">Send</button>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}
