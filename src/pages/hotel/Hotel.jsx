import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from "@fortawesome/free-solid-svg-icons";
import { useState, handleMove } from "react";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
    },    
    
  ]

  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="hotelContainer">
        {open && 
         <div className="slider">
         <FontAwesomeIcon
           icon={faCircleXmark}
           className="close"
           onClick={() => setOpen(false)}
         />
         <FontAwesomeIcon
           icon={faCircleArrowLeft}
           className="arrow"
           onClick={() => handleMove("l")}
         />
         <div className="sliderWrapper">
           <img
             src={photos[slideNumber].src}
             alt=""
             className="sliderImg"
           />
         </div>
         <FontAwesomeIcon
           icon={faCircleArrowRight}
           className="arrow"
           onClick={() => handleMove("r")}
         />
       </div>
        }

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation}/>
            <span>Elton st 125 New York</span>
          </div>
          <div className="hotelDistance">
            Exellent location - 500m from center
          </div>
          <div className="hotelPriceHighlight">
            Book a stay over $233 at this property and get a free airport taxi
          </div>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img  onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute wlk from st. Florian Gate in Krakow, 
                Tower street Apartment has accommodations with air conditioning and free WiFi.
                The units come with hardwood floors and feature a fully equipped kitchenette with  
                a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer.
                A frigde is also offered, as well as an electric tea pot and a coffe machine. Popular 
                points of interest near the apartment include Cloth Hall, Main Market square and Town Hall Tower.
                the nearest airport is John Paul II International Krakow-Balice, 16.1km from Tower Street Apartments 
                and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$788</b> (9 nights)
              </h2>
              <button>Reserve or book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel