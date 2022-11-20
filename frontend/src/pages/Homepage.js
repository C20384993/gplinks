import './Homepage.css'

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
                <img src="https://images.hollandandbarrettimages.co.uk/productimages/HB/724/045937_A.jpg" class="d-block pictures" alt="medicine 1"/>
                </div>
                <div class="carousel-item">
                <img src="https://www.opticalrooms.ie/wp-content/uploads/2017/03/Hylo-Forte-7.5-ml-Lubricating-preservative-free-eye-drops.jpg" class="d-block pictures" alt="medicine 1"/>
                </div>
                <div class="carousel-item">
                <img src="https://mclaughlins.ie/wp-content/uploads/2021/01/tensoplast.png" class="d-block pictures" alt="medicine 1"/>
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
        </div>
    );
}
export default Homepage;