import avatar from "../../assets/image/avatar.svg";
import "./head.css"

export default function Head() {
  return (
    <>
    <section className="head  py-5 mt-5">
      <div className="avatar text-center py-5">
        <img src={avatar} alt="avatar" className=" mt-5" />
        <div className="star mt-5">
          <h1>Start React</h1>
          <h3><i className="fa-solid fa-star text-white"></i></h3>
          <div className="white-star position-relative"></div>
        </div>
      </div>
    </section>
    </>
  )
}
