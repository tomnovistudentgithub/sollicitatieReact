import PersonalResponse from "../component/PersonalResponse.jsx";
import './pagestyling.css';
import './welkomstbericht.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFile } from '@fortawesome/free-solid-svg-icons';

function Welkomstbericht({name}) {


    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const className = `welkomstbericht-${name.toLowerCase()}`;
    return (
        <div className={className}>
            <div className="welkomstbericht-outer-container">
                <div className="welkomstbericht-inner-container">
                    <div className="welkomstbericht-content">
                        <h2>Welkom {formattedName}!</h2>
                    </div>
                    <div className="welkomstbericht-content">
                        <PersonalResponse name={name}/>
                    </div>
                    <p> Ga naar mijn: </p>
                    <div className="button-container">
                        <a href="/werkervaring">
                            <button className="btn-welkomstbericht">
                                <FontAwesomeIcon icon={faFileAlt}/> CV
                            </button>
                        </a>
                        <a href="/motivatie">
                            <button className="btn-welkomstbericht">
                                <FontAwesomeIcon icon={faFile}/> Motivatie
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welkomstbericht;