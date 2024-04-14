import React from 'react';

function personalResponse(passedName) {
    console.log('passedName:', passedName);

    const nameString = passedName.name;
    const nameParts = nameString.split(' ');
    const firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1);
    const name = nameString.charAt(0).toUpperCase() + nameString.slice(1);
    let lastName = '';
    if (nameParts.length > 1) {
        lastName = nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1);
    }

    const responses = {
        'Stefan': 'Ik vond ons gesprek over de ontwikkelaarsfunctie en je visie van het team zeer interessant en daarom wil ik bij deze graag solliciteren.\n\n Als ik de kans krijg kijk ik er erg naar uit om samen te sparren en toe te werken naar mooie producten 💻👍. ',
        'Paul': 'Hoi Paul, je hebt mijn sollicitatiemail dus geopend. Mooi! Nu je nog proberen te overtuigen om me uit te nodigen 😊 \n\n Graag reageer ik hierbij dan ook op de functie. Je zult merken dat ik al een tijdje voor de universiteit werk. Toevallig ook voor de afdeling Informatie Management; ik heb zelfs het idee dat ik je al eens ben tegengekomen in de wandelgangen 😆 ',
        'Shirley': 'Hoi Vusj 😊, weer een team erbij. Knap hoor. De echte lijm van IM. Ik hoop dat ik met jullie samen dit team mag gaan vormgeven en daarbij mijn ontwikkelskills mag developen. \n\nDaarnaast wil ik uiteraard nog steeds die retro mee helpen voorbereiden :), \n\n Stel ik zou het worden waar kan ik dan mijn benen laten rusten? Geen schoenendoospoefjes meer... en dan verlaat ik ook het gezelligste bureaublok van de UM... maarja het feit dat ik toch sollicteer is genoeg motivatie lijkt me 😉  \n\n Gegroet Lennart',
        'Maureen': 'Hoi Maureen, ik begreep van Stefan dat je al UX design ervaring hebt, tof! 🎨 Ik kijk ernaar uit om samen aan een prototype of design te werken. \n\nVerder ben ik erg benieuwd naar je inhoudelijke ideëen en inzichten. Ik reageer dan ook graag op jullie functie.',
        'Cheyenne': 'Hallo Cheyenne, ik ga graag de uitdaging aan om samen de schouders te zetten onder de uitdagingen die er liggen voor de PPD portal, UM sports, Yufe, My Maastricht en het talencentrum. 💪 \n\n Ik ben zeer benieuwd naar je ideëen en geef deze graag mede vorm 💻. Daarnaast ben ik benieuwd naar je volgende theezakjeswijsheid 🍵. \n\nHierbij reageer ik dan ook graag op de functie. ',
        'Frits': 'Hey Frits, je hebt een mooie basis gelegd voor de afdelingen die nu gezamenlijk onder dit team vallen </>. \n\n Mocht ik geselecteerd worden dan hoop ik veel van je te mogen leren en elkaar beter te leren kennen! ',
    };

    let response = responses[firstName];
    if (!response) {
        response = `Hallo ${name}, jij werkt zeker niet voor team Student Connect of je hebt gewoon een nepnaampje ingegeven? Geen persoonlijk berichtje dan maar niettemin welkom! 😊`;
    }


    let responseWithLineBreaks;

    if (typeof response === 'string') {
        responseWithLineBreaks = response.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    } else {
        responseWithLineBreaks = response;
    }

    return responseWithLineBreaks;
}

export default personalResponse;