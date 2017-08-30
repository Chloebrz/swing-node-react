// Dependencies
import React, { Component } from "react";
import ContactBox from "../partials/contactBox";

class Contact extends Component {
    render() {
        return (
            <div>
                <p>
                    Notre projet vous intéresse ? Vous avez une question à propos de la S'Wing ?
                    Pour toute information supplémentaire, ou afin de discuter avec l'un des
                    inventeurs, n'hésitez pas à nous contacter par mail dès maintenant.
                </p>

                <ContactBox
                    name="Paul"
                    desc="Paul, le grand-père, travaille sur la partie théorique de l'invention. Responsable des nombreux calculs, il a déposé les brevets pour la S'Wing."
                    emailDesc="Si vous souhaitez contacter Paul, cliquez "
                    emailAddress="polenbato@orange.fr"
                />

                <ContactBox
                    name="Fred"
                    desc="Fred, le père, s'occupe de la mise en pratique des calculs. Il réalise la construction, puis le test des différents prototypes de la S'Wing. "
                    emailDesc="Pour envoyer un mail à Fred, cliquez "
                    emailAddress="fwifred@hotmail.fr"
                >
                    <a href="/images">Des photos et vidéos</a> sont disponibles.
                </ContactBox>

                <ContactBox
                    name="Chloé"
                    desc="Chloé, la fille, a réalisé le site web de S'Wing afin de présenter cette invention."
                    emailDesc="Pour écrire à Chloé, c'est "
                    emailAddress="sunshai_sun971@hotmail.com"
                />
            </div>
        );
    }
}

export default Contact;
