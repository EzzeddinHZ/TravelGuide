import "../styles/Flight.css"
import BG from "../assets/BG.jpg"


function FlightD() {
    return <div className="page">

        <div className="flight">
            <div className="TempBG">
                    <img src={BG}/>
                </div>
            <h1>Flight Details</h1>
                <div className="card">

                    <div className="Top">

                        <h2 className="Kuala" >Kuala Lumpur</h2>
                        <div className="Logo">
                            <div className="Icon">
                                <div className="Plane">
                                </div>
                            </div>
                        </div>
                        <h2 className="Dubai">Dubai</h2>    

                    </div>

                    <div className="FlightDetails">
                        <p className="Item">Carrier</p>
                        <p className="Item">Flight Number</p>
                        <h2 className="Item">Emirates Airlines</h2>
                        <h2 className="Item">EK343</h2>
                    </div>

                    <div className="Separator"></div>

                    <div className="FlightDetails">
                        <p className="Item">Departure Airport</p>
                        <p className="Item">Departure Terminal</p>
                        <h2 className="Item">Kuala Lumpur Airport</h2>
                        <h2 className="Item">2</h2>

                        <p className="Item">Departure Date</p>
                        <p className="Item">Departure Time</p>
                        <h2 className="Item">01/06/2024</h2>
                        <h2 className="Item">02:25</h2>
                    </div>

                    <div className="Separator"></div>

                    <div className="FlightDetails">
                        <p className="Item">Arrival Airport</p>
                        <p className="Item">Arrival Terminal</p>
                        <h2 className="Item">Dubai Airport</h2>
                        <h2 className="Item">3</h2>

                        <p className="Item">Arrival Date</p>
                        <p className="Item">Arrival Time</p>
                        <h2 className="Item">01/06/2024</h2>
                        <h2 className="Item">05:30</h2>
                    </div>






                    
                </div>
            <div className="bg">
            </div>
        </div>

        

    </div>
}

export default FlightD