// Dependencies
import React, { Component } from "react";

class Triul extends Component {
    render() {
        return (
            <div>
                <h1>S'Wing et antécédents</h1>
                <p>
                    La S'Wing est l'aboutissement de plusieurs projets destinés à éliminer ou
                    réduire les inconvénients des voiliers actuels grâce à l'auto-orientation de la
                    voilure. Le concept utilisé sur le Triul, projet précédent, était dérivé de
                    l'équilibre aérodynamique des avions et planeurs tel que défini par Voisin :
                    "Centre de gravité en avant du centre de voilure, et empennage horizontal
                    arrière inversé", (transposé à 90 degrés pour le Triul).
                </p>
                <p>
                    La S'Wing utilise les conditions d'équilibre aérodynamique du parapente,
                    transposées du plan vertical au plan horizontal. Cette option permet d'alléger
                    le dispositif en remplaçant la voilure de type Marconi par des voiles plus
                    légères et le bateau par une petite nacelle indépendante de la voilure.
                </p>

                <h1>Le Triul : théorie et prototypes</h1>

                <p>
                    <img
                        className="img-responsive"
                        src={require("../../images/triul/Sit_Triul.png")}
                        alt="Théorie et prototype du Triul"
                    />
                </p>

                <h1>Le Triul : démonstration en vidéo</h1>
                <p className="center">
                    <video width="600" controls>
                        <source
                            src={require("../../images/triul/video_triul.mp4")}
                            type="video/mp4"
                        />
                        <source
                            src={require("../../images/triul/video_triul.webm")}
                            type="video/webm"
                        />
                        Votre navigateur ne supporte pas ces types de vidéos.
                    </video>
                </p>

                <h1>Le Triul : publications</h1>

                <p>
                    <img
                        className="img-responsive"
                        src={require("../../images/triul/Sit_publications.png")}
                        alt="Publications Triul"
                    />
                </p>

                <h1>Le Triul : brevet</h1>

                <p>
                    <img
                        className="img-responsive"
                        src={require("../../images/triul/Sit_Brev.png")}
                        alt="Brevet Triul"
                    />
                </p>
                <p>
                    Ce projet a fait l'objet d'un dépôt de brevet, le 29 octobre 1992.<br />
                    Pour accéder à ces documents, cliquez{" "}
                    <a href={require("../../images/triul/Triul_7_(S._Geneve).jpg")}>ici</a> ou{" "}
                    <a href={require("../../images/triul/Triul_6_Pct.jpg")}>là</a>.
                </p>
            </div>
        );
    }
}

export default Triul;
