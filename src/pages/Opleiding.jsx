import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUniversity, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons';
import './opleidingen.css';
function Opleiding() {

    return (
        <div className="outer-container-opleidingen">
            <div className="inner-container-opleidingen">
                <h1>Opleidingen</h1>
                <p>Momenteel volg ik een software development opleiding tot fullstack developer bij Novi Hogescholen. De front-end heb ik bijna afgerond. Meteen daarna begin ik met het backend traject.</p>
                <div className="opleidingen-content-container-rows">
                    <div className="opleidingen-content-container-columns">
                        <ul>
                            <li><FontAwesomeIcon icon={faUniversity}/></li>
                            <li><FontAwesomeIcon icon={faGraduationCap}/></li>
                            <li><FontAwesomeIcon icon={faBook}/></li>
                        </ul>
                        <ul>
                            <li>Universiteit Utrecht</li>
                            <li>Master of Science</li>
                            <li>Development studies</li>
                        </ul>
                        <ul>
                            <li>Universiteit Maastricht</li>
                            <li>Master of Arts</li>
                            <li>European Studies</li>
                        </ul>
                        <ul>
                            <li>Universiteit Maastricht</li>
                            <li>Bachelor of Arts</li>
                            <li>European Studies</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );


}

export default Opleiding;