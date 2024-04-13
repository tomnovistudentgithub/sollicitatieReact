import React, {useEffect, useState} from 'react';
import '../Timeline/timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faFile} from "@fortawesome/free-solid-svg-icons";

function Timeline({ events }) {
    const [data, setData] = useState(events);

    useEffect(() => {
        setData(events);
    }, [events]);

    console.log(events);

    return (
        <>
            <div className="timeline">
                {events.map((event, index) => (
                    <div key={index} className="timeline-event">
                        <div className={`timeline-event-icon ${event.position}`}>
                            <span>{event.year}</span>
                            <p>{event.function}</p>
                        </div>

                        <div className="timeline-event-content">
                            <p>{event.description}</p>
                        </div>
                        <div className="timeline-event-logo">
                            <img src={event.logo} alt={event.company}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="info-and-button-timeline">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{marginRight: '10px'}}>Neem eventueel ook een kijkje op mijn</p>
                    <a href="https://www.linkedin.com/in/tomlennartz/" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>
                    <a href="/motivatie">
                        <button className="btn-werkervaring">
                            <FontAwesomeIcon icon={faFile}/> Ga naar de motivatie
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Timeline;