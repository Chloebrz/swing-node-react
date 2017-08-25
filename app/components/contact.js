// Dependencies
import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <p>
                    Notre projet vous intéresse ? Vous avez une question à propos de la S'Wing ?
                    Pour toute information supplémentaire, ou afin de discuter avec l'un des
                    inventeurs, n'hésitez pas à nous contacter par mail dès maintenant.
                </p>

                <h1>Paul</h1>

                <p>
                    Paul, le grand-père, travaille sur la partie théorique de l'invention.
                    Responsable des nombreux calculs, il a déposé les brevets pour la S'Wing.
                </p>
                <p>
                    Si vous souhaitez contacter Paul, cliquez{" "}
                    <a href="mailto:polenbato@orange.fr?subject=SWING">ici</a>.
                </p>

                <h1>Fred</h1>

                <p>
                    Fred, le père, s'occupe de la mise en pratique des calculs. Il réalise la
                    construction, puis le test des différents prototypes de la S'Wing.{" "}
                    <a href="/images">Des photos et vidéos</a> sont disponibles.
                </p>
                <p>
                    Pour envoyer un mail à Fred, cliquez{" "}
                    <a href="mailto:fwifred@hotmail.fr?subject=SWING">là</a>.
                </p>

                <h1>Chloé</h1>

                <p>
                    Chloé, la fille, a réalisé le site web de S'Wing afin de présenter cette
                    invention.
                </p>
                <p>
                    Pour écrire à Chloé, c'est{" "}
                    <a href="mailto:sunshai_sun971@hotmail.com?subject=SWING">ici</a>.
                </p>
            </div>
        );
    }
}

export default Contact;
