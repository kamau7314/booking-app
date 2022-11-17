import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
        <div className="Img">
        <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" 
             alt="" 
             className="siImg" />
        </div>
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
            Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">Entire Studio 1 Bedroom </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">ksh 1233</span>
                <span className="siTaxOp">Includes taxes and fees</span>    
                <button className="siCheckButton">see availability</button>           
            </div>
        </div>
    </div>
  )
}

export default SearchItem