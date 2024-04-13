import React, {useState} from 'react';
import './motivatie.css';
import inviteGif from '../assets/i74.gif';
import rejectGif from '../assets/angrycat.gif';

function Motivatie() {
        const [showModal, setShowModal] = useState(false);
        const [modalContent, setModalContent] = useState('');
    const [rejectButtonText, setRejectButtonText] = useState('Kandidaat afwijzen');
    const [inviteButtonText, setInviteButtonText] = useState('Uitnodigen op gesprek');
    const handleInviteClick = () => {
        setModalContent(<><p>Beste collega, top dat je me op gesprek wilt laten komen. <br></br>Bespreek het nog even ondeling met jullie team, maar ik kom graag op gesprek! <br></br> Groet, Tom </p><img src={inviteGif} alt="Invite GIF" /></>); // Add the img tag here
        setShowModal(true);
    };

    const handleRejectClick = () => {
        setModalContent(<><h1>Computer says no!!! Broken link</h1> <p> Maar goed dat er geen backend in deze applicatie zit, want dan had ik geweten wie je was. Dan had ik de emergency user aangevraagd en je 3 salarisschalen teruggezet 😈. Nee hoor dat zou ik nooit doen... Jammer dat je me niet gekozen hebt, maar ik hoor graag waarom. </p> <img src={rejectGif} alt="Reject GIF" /></>); // Voeg de img tag hier toe
        setShowModal(true);
    };

    const handleRejectHover = () => {
        setRejectButtonText('😡');
    };

    const handleRejectMouseOut = () => {
        setRejectButtonText('Kandidaat afwijzen');
    };

    const handleInviteHover = () => {
        setInviteButtonText('😊');
    }

    const handleInviteMouseOut = () => {
        setInviteButtonText('Uitnodigen op gesprek');
    };

        return (

        <div className="outer-container-motivatie">

            <div className="quote-block quote">
                <cite>The only way to do great work is to love what you do.</cite>
                <p>– by Steve Jobs</p>
            </div>
            <div className="inner-container-motivatie">

                <div className="motivatie-content-container">
                    <p>Laat me even vooropstellen, ik probeer me hier niet te meten aan Steve Jobs. Voor mij betekent
                        'great work' niet zozeer het bereiken van top prestaties maar vooral het opgaan in iets wat
                        intrinsiek bij je past. Met mijn 40 uur werk per week kan ik me helemaal vinden in die
                        quote. </p>

                    <p>Ik ben ooit generalistisch begonnen door mijn brede interesse. En ook op het gebied van IT merk
                        ik deze eigenschap terug. Vooral dat de IT oneindig complex kan zijn zorgt voor een
                        continue uitdaging en vervult mijn leergierigheid. Zeker met de AI ontwikkelingen gaat er veel
                        veranderen, en ik blijf graag - in hoeverre dat mogelijk is in de IT - <i>ahead of the curve</i>.
                    </p>

                    <p>Vanaf het begin bij functioneel beheer heeft de technische hoek mij getrokken. Bij mijn
                        sollicitatiegesprek bij functioneel beheer gaf ik al eens aan dat coderen mij erg
                        aantrok. En jaren later stroomt het bloed nog steeds waar het niet gaan kan. Of ja: uiteindelijk
                        stroomt het toch die kant op.</p>

                    <p>Ik heb bij IM de kans gekregen om een opleiding te starten tot full stack developer en mijn
                        werkplezier is enorm toegenomen sinds ik dit steeds meer in mijn werk toepas. Samen met Caroline
                        sparren over de Java code in de Student Portal geeft veel energie. Maar ook zelf aan mijn
                        frontend project werken voor de studie. En natuurlijk met collegas om tafel zitten om ideeën uit
                        te werken. </p>

                    <p>Ik ben de IT dus alles behalve beu, maar wil er wel een nieuwe invulling aan geven. Ik zie in de
                        toekomst een rol voor me als DevOps. Een technish expert die ook direct met een gebruiker en
                        collega kan schakelen over nieuwe functionaliteit. Die samenwerkt aan het verbeteren van de
                        producten. Ik ben dus geen eenpitter.</p>

                    <p>Qua specifieke ervaring zal ik het afleggen tegen een ervaren mendix consultant. Maar het
                        voordeel dat ik meebreng is dat ik de uni al goed ken en dat ik ondanks mijn senior ervaring in
                        de IT het enthousiasme van een beginner meebreng. Ook denk ik een waardevolle bijdrage te kunnen
                        leveren aan het opzetten van het team.</p>
                    <p>Laat me maar weten of je wilt dat ik op gesprek kom! </p>
                </div>
                <div className="button-container">
                    <button className="invite-button" onClick={handleInviteClick} onMouseOver={handleInviteHover}
                            onMouseOut={handleInviteMouseOut}>{inviteButtonText}</button>

                    <button className="reject-button" onClick={handleRejectClick} onMouseOver={handleRejectHover}
                            onMouseOut={handleRejectMouseOut}>{rejectButtonText}</button>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        {modalContent}
                    </div>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            )}
        </div>
        );
}

export default Motivatie;