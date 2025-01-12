import "./Portfolio.css";

import pic1 from "../../assets/image/pic1.png";
import pic2 from "../../assets/image/pic2.png";
import pic3 from "../../assets/image/pic3.png";
import pic4 from "../../assets/image/pic4.png";
import pic5 from "../../assets/image/pic5.png";
import pic6 from "../../assets/image/pic6.png";
import { useState } from "react";

export default function Portfolio() {
    const [pics] = useState([pic1, pic2, pic3, pic4, pic5, pic6]);
    const [selectedPic, setSelectedPic] = useState(null);

    const handleImageClick = (pic) => {
        setSelectedPic(pic); 
    };



    const closeLayer = () => {
        setSelectedPic(null); 
    };

    return <>
            <section className="portfolio mb-5 text-center">
                <h2 className="dark-head">PORTFOLIO</h2>
                <div className="star">
                    <h3><i className="fa-solid fa-star dark-star"></i> </h3>
                    <div className="black-star position-relative"></div>
                </div>
                <div className="iteams">
                    <div className="container">
                        <div className="row g-5">
                        {pics.map((pic, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="iteam position-relative" onClick={() => handleImageClick(pic)}>
                                    
                                    <img src={pic} className="rounded" />
                                    <div className="layer rounded position-absolute d-flex justify-content-center align-items-center ">
                                        <span><i className="fa-solid fa-plus"></i></span>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                {selectedPic && (
                    <div className="layerCard d-flex align-items-center justify-content-center position-fixed top-0 bottom-0 start-0 end-0 w-100"
                    onClick={closeLayer} >
                        <img src={selectedPic} alt="Selected" className="rounded" />
                    </div>
                )}
            </section>
        </>

}

