import './Homepage.css'
import about from './Homepage_pics/AboutUs.png'
import review from './Homepage_pics/Reviews.png'
import group from './Homepage_pics/Group_Doc.png'

const Homepage = () => {
   
    return ( 
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src= {about} class="d-block pictures" alt="About us Picture"/>
                </div>

                <div class="carousel-item">
                    <img src={review} class="d-block pictures" alt="Review picture"/>
                </div>

                <div class="carousel-item">
                    <img src={group} class="d-block pictures" alt="Our proud GP's"/>
                </div>
                
            </div>
            
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

            <div>  
                <h1>
                    Contact us
                </h1>

                <p>
                    Email: GP-Links2022@gmail.com
                    <br/>
                    Phone: +353 20 916 8029
                </p>
            </div>
        </div>
    );
}
export default Homepage;