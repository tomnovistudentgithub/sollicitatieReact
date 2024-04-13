import events from "../assets/workExperienceEvents.js";
import '../component/Timeline/timeline.css';
import Timeline from "../component/Timeline/Timeline.jsx";
import '../pages/werkervaring.css';

function Werkervaring() {


    return (
        <div className="outer-container-werkervaring">
            <div className="inner-container-werkervaring">
                <div className="header-content-werkervaring">
                <h1>Relevante werkervaring</h1>
                </div>
                <Timeline events={events} />

            </div>
        </div>
    )
}

export default Werkervaring;