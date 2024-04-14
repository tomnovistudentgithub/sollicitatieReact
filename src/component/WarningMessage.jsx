import React from 'react';
import './Warningmessage.css';

function WarningMessage({ closeWarning }) {
    return (
        <div className="warning-message">
            <button className="close-button" onClick={closeWarning}>X</button>
            <div className="warning-message-content">
            <p>Deze pagina is niet volledig geoptimaliseerd voor gebruik met kleinere devices, gezien ik hier niet voor
                💰 krijg en ook nog weekend wil vieren 🎉. Bekijk deze pagina op je werklaptop s.v.p.. </p>
            </div>
        </div>
    );
};

export default WarningMessage;