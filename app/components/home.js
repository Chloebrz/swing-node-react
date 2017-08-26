// Dependencies
import React, { Component } from "react";
import style from "../css/home.css";

class Home extends Component {
    render() {
        return (
            <div className={style}>
                <img
                    className="img-responsive img-radius"
                    src={require("../images/home/home.jpg")}
                    alt="S'Wing"
                />

                <div className="row">
                    <div className="col-sm-8">
                        <h1>Imaginez un voilier totalement révolutionnaire...</h1>
                        <p>
                            Un voilier dont les voiles se règlent seules sans intervention en
                            fonction du cap choisi.<br />
                            Un voilier qui ne gîte pas, qui ne se renverse pas.<br />
                            Un voilier que le vent n’écrase pas sur l’eau, mais au contraire soulage
                            comme les kites ou les planches à voile et qui plane d’autant plus que
                            le vent forcit.
                        </p>
                    </div>

                    <div className="col-sm-3 col-sm-offset-1 sidebar-module sidebar-module-inset">
                        <h4>3 générations de Brouzes</h4>
                        <p>
                            Le grand-père : Paul, calculs et brevet<br />
                            Le père et la mère : Frédéric, construction et tests prototypes, et
                            Gisèle, soutien logistique<br />
                            Les enfants : Chloé, webmaster, et Arthur et Félix, participation aux
                            essais des prototypes
                        </p>
                    </div>
                </div>

                <br />
                <h3>Ce voilier existe !</h3>

                <p>
                    La S’WING est une aile (wing) pendulaire (swing) qui repose sur le principe d’un
                    parapente transposé sur un plan horizontal. L'équilibre aérodynamique de l'aile
                    se stabilise selon la polaire du profil en fonction du vent relatif et du
                    réglage d'assiette. Quel que soit le cap choisi, l’incidence se maintient sans
                    intervention. Pour changer de bord - vent arrière - il suffit d'inverser un
                    petit levier.
                </p>
                <p>
                    De plus, l’inclinaison de la voile au vent permet d’avoir, comme sur les
                    planches à voile ou les kites (ou le Sail Rocket), une traction ascendante sur
                    le bateau (à la différence des voiles classiques qui l’écrasent dans l’eau).<br />Cette
                    aile permet de tracter tout engin capable de maintenir un cap sur eau, sol dur,
                    glace, neige, etc., en fonction des équipements (flotteurs, foils, roues,
                    patins, skis…).
                </p>

                <h1>Le principe</h1>
                <div>
                    <p>Add video</p>
                </div>
            </div>
        );
    }
}

export default Home;
