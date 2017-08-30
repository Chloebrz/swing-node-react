// Dependencies
import React, { Component } from "react";

class Images extends Component {
    render() {
        return (
            <div>
                <h1>Vidéos</h1>

                <p>
                    Ce projet a commencé par la validation du concept grâce à des calculs complexes.
                    Puis a suivi la construction de prototypes de plus en plus avancés afin de
                    tester le concept en navigation. Les vidéos ci-dessous dressent un historique de
                    ces prototypes et présentent un virement sous différents angles.
                </p>
                <br />

                <div>
                    <p>Add videos</p>
                </div>

                <h1>Photos</h1>

                <p>
                    La série de photos suivante présente différentes versions du gréément et des
                    flotteurs réalisés.
                </p>
                <br />

                <div>
                    <p>Add carousel</p>
                </div>
            </div>
        );
    }
}

export default Images;
