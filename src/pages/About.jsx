import './pagestyling.css';
import imageTom from '../assets/DSC06298.jpg'
function About() {


    return (
        <div className="about-page-outer-container">
            <div className="about-page-container-header">
                <h1>About</h1>
                <div className="about-page-inner-container">
                    <div className="about-image-container">
                        <img className="image-tom" src={imageTom} alt="Tom"/>
                    </div>
                    <div className="about-page-content-container">

                        <h3>Wat is een website nu zonder about pagina? </h3>
                        <p>Zelf lees ik hem bijna nooit maar wellicht heb je de moeite gedaan om hier op te klikken.</p>
                        <p> Laat ik dan toch maar wat opschrijven:  </p>
                        <p> Ik ben Tom, kom jullie wel eens tegen in de wandelgangen en bij de koffieautomaat ☕ en zelfs op zolder. </p>
                        <p> In mijn vrije tijd breng ik veel tijd door bij de poedelclub 🐩, verder zijn mijn hobby's: bingo, vissen en world of warcraft. </p>
                        <p> Maar even alle gekheid op een stokkie: ik ben serieus geïnteresseerd in deze functie en in mijn CV en motivatie zal ik dat ook laten blijken </p>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default About;