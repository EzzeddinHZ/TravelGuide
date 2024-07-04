import "../styles/Home.css"
import Batu from "../assets/Batu.jpg";
import Petronas from "../assets/Petronas.jpg";
import Gate from "../assets/Gate.jpg"
import Rafting from "../assets/Rafting.jpeg"
import Mitsui from "../assets/Mitsui.jpg"
import Sunway from "../assets/Sunway.jpg"
import KLTower from "../assets/KLTower.jpg"
import ARAS from "../assets/ARAS.jpg"
import AlAmar from "../assets/AlAmar.jpg"
import Samba from "../assets/Samba.jpg"
import Pavilion from "../assets/Pavilion.jpg"
import Avenue from "../assets/Avenue.jpg"
import BG from "../assets/BG.jpg"


function Home() {
    return <div className="page">
        <div className="Homepage">

            <div className="TempBG">
                <img src={BG}/>
            </div>

            <div className="bg">
                <h1></h1>
            </div>

            <div className="TopCards">
                <div className="Container1">
                    <div className="Top">
                        <h1>Vodafone</h1>
                        <h3>25/05/2024 - 01/06/2024</h3>
                    </div>
                    <h2> Sales Mega Contest Trip</h2>
                    <h2>Kuala Lumpur</h2>
                    
                </div>

                <div className="Container2">
                    <h1>Trip Manager</h1>
                    <div className="Manager">
                        <div className="Icon">
                        </div>
                        <div className="Info">
                            <h2>Mr. John Doe</h2>
                            <p>+201010101010</p>
                        </div>
                    </div>
                    
                </div>

                <div className="Container3">
                    <h1>Kuala Lumpur General Info</h1>
                    <h2>Average Exchange Rate</h2>
                        <div className="Exchange">
                            <p>1 USD = 4.72 MYR</p>
                            <p>1 MYR = 10.05 EGP</p>
                        </div>
                    <h2>Time Zone</h2>
                    <p>GMT +8 (6 hours ahead of Cairo)</p>

                    <h2>Weather</h2>
                    <div className="Weather">
                        <p>Average High : 32°C</p>
                        <p>Average Low : 24°C</p>
                        <p>Humidity : 74%</p>
                        <p>Rain Probability : 20%</p>
                    </div>

                    <h2>Recommended Clothing</h2>
                    <p>Light cotton clothes, sports shoes and hats</p>

                    <h2>Electricity</h2>
                    <p>240v/50Hz/Type : G</p>

                </div>
            </div>


            <h2 className="Points">    
                    Points Of Interest
                </h2>

            <div className="BotCards">
                
                <div className="Carousel">
                    <div className="cardContainer">

                        
                        <div className="card">
                            <img src={Petronas} alt="image1" />

                            <div className="cardContent">
                                <h3>Petronas Twin Towers</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>Petronas Twin Tower, Lower Ground (Concourse) Level, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Batu} alt="image1" />

                            <div className="cardContent">
                                <h3>Batu Caves</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>Gombak, 68100 Batu Caves, Selangor, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Gate} alt="image1" />

                            <div className="cardContent">
                                <h3>The Gate Of King Palace</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>Jln Tuanku Abdul Halim, Bukit Damansara, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Rafting} alt="image1" />

                            <div className="cardContent">
                                <h3>Rafting</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>Ulu river lodge II, 19 Jalan Kampung Rawa, Kampung Jahang,31600 Gopeng,Perak,Malysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Mitsui} alt="image1" />

                            <div className="cardContent">
                                <h3>Mitsui Outlet Park KLIA</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>Persiaran Komersial, 64000 Klia, Selangor, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Sunway} alt="image1" />

                            <div className="cardContent">
                                <h3>Sunway Lagoon</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>3, Jalan PJS 11/11, Bandar Sunway, 47500 Subang Jaya, Selangor, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={KLTower} alt="image1" />

                            <div className="cardContent">
                                <h3>KL Tower</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>2 Jalan Punchak, Off, Jalan P. Ramlee, 50250 Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={ARAS} alt="image1" />

                            <div className="cardContent">
                                <h3>ARAS Restaurant KL tower</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>TH02. 2 Jalan Punchak, Off, Jalan P. Ramlee, Kuala Lumpur, 50250 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={AlAmar} alt="image1" />

                            <div className="cardContent">
                                <h3>Al Amar Restaurant</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>Lot G-44, Fahrenheit88, 179, Jln Bukit Bintang, 55100 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Samba} alt="image1" />

                            <div className="cardContent">
                                <h3>Samba Restaurant</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>156, Jln Ampang, Kuala Lumpur City Centre, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Pavilion} alt="image1" />

                            <div className="cardContent">
                                <h3>Pavilion Kuala Lumpur</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src={Avenue} alt="image1" />

                            <div className="cardContent">
                                <h3>Avenue K</h3>
                                <div className="Location">
                                    <div className="Add"></div>
                                    <p>156, Jln Ampang, Kuala Lumpur City Centre, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                        </div>
                        

                    
                    </div>
                </div>




            </div>



        </div>
    </div>
}

export default Home