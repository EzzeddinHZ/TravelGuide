import "../styles/Hotel.css"
import Hotel from "../assets/Hotel.jpg";
import BG from "../assets/BG.jpg"


function HotelD() {
    return <div className="page">
        <div className="TempBG">
                    <img src={BG}/>
                </div>

        <div className="hotel">
            <h1>Hotel Details</h1>
                <div className="card">
                    <div className="Left">
                        <img className="Image" src={Hotel}/>
                        <h2>Sheraton Imperial Kuala Lumpur Hotel</h2>
                        
                        
                        <p>Address : </p>
                        <div className="Address">
                            <div className="Location">

                            </div>
                            <a href="https://maps.app.goo.gl/sb2jeXWHtkuKM7jDA">Jin Sultan Ismail, Chow Kit, 50250 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malasia</a>
                        </div>

                        <div className="Check">
                            <div className="CheckIn">
                                <div className="CheckInTop">
                                    <p>Check In</p>
                                </div>
                                <div className="CheckInBot">
                                    <p>25/05/2024</p>
                                </div>
                            </div>

                            <div className="CheckOut">
                                <div className="CheckOutTop">
                                    <p>Check Out</p>
                                </div>
                                <div className="CheckOutBot">
                                    <p>01/06/2024</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="Right">
                        <h3>Set in the heart of Kuala Lumpur, Sheraton Imperial Kuala
                            Lumpur Hotel stands tall as a 38-story urban oasis,
                            embodying the essence of Malaysian heritage and
                            hospitality. Guests are welcomed to a family-friendly
                            environment, where comfort and safety are paramount,
                            establishing the hotel as the "Grande Dame" of Malaysia's
                            capital.</h3>
                            <h3>Distance to Monorail:</h3>
                            <p>2 min walking from Stesen Monorel Medan Tuanku</p>
                            <h3>Nearest Hospital:</h3>
                            <p>BP Healthcare @ Medan Tuanku - 5 min walking</p>
                            <h3>Nearest Grocery Stores:</h3>
                            <p>NSK Grocer Quill City Mall - 7 min walking</p>
                            <p>Sejati Biz Food - Operates 24 Hours</p>
                            <h3>Nearest Coffee shop:</h3>
                            <p>Starbucks Quill City Mall - 5 min walking</p>
                    </div>

                </div>

            <div className="bg">
            </div>
        </div>

        

    </div>
}

export default HotelD