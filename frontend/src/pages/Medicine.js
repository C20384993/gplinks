import './Medicine.css'
import pharmacy from './MedicinePics/InishPharmacy.png'
import coughSyrup from './MedicinePics/Cough_Syrup.jpg'
import paracetamol from './MedicinePics/Paracetamol.jpg'
import strepsils from './MedicinePics/Strepsils.jpg'
import deepHeat from './MedicinePics/DeepHeat.jpg'
import nasal from './MedicinePics/Nasal.jpg'
import selfTest from './MedicinePics/SelfTest.jpg'

const Medicine = () => {
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <span>
                <h1>
                    Proud parthers with Inish Pharmacy
                </h1>
                <img src={pharmacy} class="pharmacyLogo" alt="logo" />
            </span>

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">

                <div class="carousel-item active">
                    <a href="https://www.inishpharmacy.com/p/benylin-original-cough-medicine-syrup-125ml/bencough?gtagrefurl=https%3a%2f%2fwww.google.com%2f">
                        <img src= {coughSyrup} class="d-block pictures" alt="medicine 1"/>
                    </a>
                </div>

                <div class="carousel-item">
                    <a href="https://www.inishpharmacy.com/p/gsk-paracetamol-500mg-film-coated-tablets-24-pack/paracetamol-p24">
                        <img src={paracetamol} class="d-block pictures" alt="medicine 2"/>
                    </a>
                </div>

                <div class="carousel-item">
                    <a href="https://www.inishpharmacy.com/p/strepsils-honey-and-lemon-lozenges-36-pack/strepsils-9176?_sgm_campaign=product&_sgm_source=STREPSILS-9176&_sgm_action=search&_sgm_term=strep">
                        <img src={strepsils} class="d-block pictures" alt="medicine 3"/>
                    </a>
                </div>

                <div class="carousel-item">
                    <a href="https://www.inishpharmacy.com/p/deep-heat-cream/p-200039">
                        <img src={deepHeat} class="d-block pictures" alt="medicine 4"/>
                    </a>
                </div>

                <div class="carousel-item">
                    <a href="https://www.inishpharmacy.com/p/otrivine-adult-measured-dose-sinusitis-nasal-spray-10ml/otrivine-5939">
                        <img src={nasal} class="d-block pictures" alt="medicine 5"/>
                    </a>
                </div>

                <div class="carousel-item">
                    <a href="https://www.inishpharmacy.com/p/flowflex-influenza-rapid-antigen-self-test/flowflex-3479">
                        <img src={selfTest} class="d-block pictures" alt="medicine 6"/>
                    </a>
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

export default Medicine