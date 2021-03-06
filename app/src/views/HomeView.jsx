import React from "react";
import './HomeView.css'
const HomeView = () => {

    return(
        <div className="carouselDiv">
            <div className="carouselClass">
                <h1>Event tracker app where you can create upcoming events</h1>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="images/wallpaperCafe.jpg" class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item">
                        <img src="images/wallpaperCars.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="images/wallpaperDice.png" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        
        

        
    )



}

export default HomeView