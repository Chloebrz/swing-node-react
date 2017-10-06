// Dependencies
import React from "react";

const Description = () => {
    return (
        <div>
            <h1>Etat de la technique actuelle et présentation de l'invention</h1>
            <p>
                Pour naviguer à la voile il faut maintenir l’incidence correcte de la voilure par
                rapport à la direction du vent. Les interventions sur les réglages de la voilure qui
                nécessitent des manœuvres délicates et des efforts de tension très importants sont
                limitées autant que possible. Tant que les fluctuations de direction du vent restent
                modérées on préfère dévier le bateau plutôt que de modifier les réglages de la
                voilure. En conséquence il faut intervenir fréquemment sur le cap, et la trajectoire
                vers la destination est rallongée.
            </p>
            <p>
                La poussée du vent sur les voiles incline les bateaux et augmente la traînée. Sur
                les monocoques cette inclinaison est limitée par du lest généralement suspendu à la
                quille. Cela alourdit le bateau et limite l'évolution en eaux peu profondes. Sur les
                multicoques on utilise de grands flotteurs latéraux qui n'éliminent pas le risque de
                chavirage. Les planches à voile inclinées au vent et les kitesurf tirés par
                cerf-volant bénéficient - au contraire - d’un allègement réduisant la trainée, mais
                leur pilotage acrobatique les réserve à des sportifs entraînés.
            </p>
            <p>
                Sur les gréements les plus couramment utilisés la voilure est tendue fortement entre
                le haut du mât et la bôme afin de maintenir un profil aérodynamique performant, ce
                qui implique des efforts de compression très importants sur le mât.
            </p>
            <p>
                D'autres types de voiles sont parfois disposés à l'avant, spinnaker notamment. Elles
                sont réservées aux vents portants car il est difficile de leur donner un profil
                aérodynamique performant et leur empannage implique des manœuvres délicates.
            </p>
            <p>
                Les dispositifs selon l'invention suppriment ou réduisent ces inconvénients :<br />On
                a adopté le concept pendulaire qui régit la stabilité aérodynamique des parapentes
                et deltaplanes dans le plan vertical, mais transposé dans le plan horizontal. Il
                n’est plus nécessaire de modifier le cap pour dévier la voilure, car elle pivote
                indépendamment du bateau et maintient sans intervention son incidence par rapport à
                la direction du vent.<br />
            </p>
            <p>
                La fixation pendulaire du dispositif sur le bateau, sur laquelle s’exerce la force
                de traction, est beaucoup plus basse que le centre de voilure sur les bateaux
                traditionnels. En conséquence le couple de renversement est beaucoup plus faible et
                il n’est pas nécessaire de recourir à du lest ou à de volumineux flotteurs pour
                limiter la gîte. L'inclinaison de la voilure vers l’arrière oriente la poussée du
                vent vers le haut, ce qui allège le voilier et réduit sa traînée. Les forces
                nécessaires pour maintenir le profil aérodynamique de la voile sont supportées pour
                l'essentiel par les suspentes reliées à la patte d'amarrage.
            </p>
            <p>
                L'ensemble voilure - gréement étant indépendant du bateau, il peut être déposé pour
                les manœuvres sans vent ou largué en cas de sinistre.
            </p>
            <p>
                A l’arrêt et dans les vents faibles, une structure reposant à l’avant sur de petits
                flotteurs pivotants peut supporter la voilure, mais lorsque le vent est suffisant
                elle peut être soulevée pour une navigation plus sportive.
            </p>
            <p>
                Il faut noter que les dispositifs selon l'invention ne permettent pas de virer face
                au vent. Cet inconvénient, que l’on retrouve aussi sur les anciens voiliers, les
                kitesurf, les praos et autres engins, est compensé par la facilité avec laquelle les
                diverses manœuvres peuvent être réalisées. Pour voir une démonstration en images du
                déroulement d'un empannage, cliquez <a href="#gybe">ici</a>.
            </p>

            <h1>Quelques applications de la S'Wing</h1>
            <p>
                La S'Wing permet de tracter toute sorte d'engin sur eau, sol dur, glace, neige, etc.
                La seule limite à l'utilisation de cette aile est l'imagination de son possesseur !
                Flotteurs, foils, roues, patins, skis, tout fonctionne !<br />
                La série de figure ci-dessous présente quelques exemples d'utilisation.
            </p>
            <p>
                <img
                    className="img-responsive"
                    src={require("../../images/theorie/page3.jpg")}
                    alt="Schéma S'Wing applications"
                />
            </p>

            <h1>Les avantages de la S'Wing</h1>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th />
                            <th>S'Wing</th>
                            <th>Voiliers classiques</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Bateau</td>
                            <td>Peuvent contenir flotteurs, carènes, divers bateaux</td>
                            <td>Voiliers (avec dispositifs anti gîte)</td>
                        </tr>

                        <tr>
                            <td>Gréement</td>
                            <td>Indépendant du bateau sur flotteurs annexes</td>
                            <td>Mâture, espars, agrès, intégrés au bateau</td>
                        </tr>

                        <tr>
                            <td>Voilure</td>
                            <td>Pendulaire, auto orientable</td>
                            <td>Type Marconi, foc, spi</td>
                        </tr>

                        <tr>
                            <td>Inclinaison de la voile</td>
                            <td>Selon angle désiré pour soulager le bateau</td>
                            <td>Gîte du au vent (augmente la traînée et ralentit le bateau)</td>
                        </tr>

                        <tr>
                            <td>Poussée au vent</td>
                            <td>Vers le haut (pour soulager le bateau)</td>
                            <td>Vers le bas (à cause de la gîte), augmente la traînée</td>
                        </tr>

                        <tr>
                            <td>Point d'application</td>
                            <td>Sur un pivot au niveau du pont</td>
                            <td>Au centre de la voilure (environ 1/3 de la voile)</td>
                        </tr>

                        <tr>
                            <td>Couple de renversement</td>
                            <td>Réduit</td>
                            <td>Fort (exige des dispositifs anti gîte)</td>
                        </tr>

                        <tr>
                            <td>Dispositions anti gîte</td>
                            <td>Peu concerné</td>
                            <td>
                                Lest, quille profonde, ballastage, grande largeur des multicoques
                            </td>
                        </tr>

                        <tr>
                            <td>Diverses manœuvre</td>
                            <td>3 réglages au poste de commande</td>
                            <td>Procédures complexes qui mobilisent l'équipage</td>
                        </tr>

                        <tr>
                            <td>Orientation des voiles</td>
                            <td>Automatique, sans intervention</td>
                            <td>
                                Interventions sur la barre nécessaires pour s'adapter aux
                                fluctuations du vent
                            </td>
                        </tr>

                        <tr>
                            <td>Trajectoire</td>
                            <td>Directe au cap</td>
                            <td>Rallongée par les déviations dues aux fluctuations du vent</td>
                        </tr>

                        <tr>
                            <td>Réglages des voiles</td>
                            <td>Seulement en cas de changement météorologique</td>
                            <td>Nombreux et complexes aux manœuvres et fluctuations du vent</td>
                        </tr>

                        <tr>
                            <td>Manœuvres</td>
                            <td>Leviers de commande (sans effort)</td>
                            <td>Réglages de câbles et cordages par palans ou winchs</td>
                        </tr>

                        <tr>
                            <td>Changement de bord</td>
                            <td>Stabilité peu affectée</td>
                            <td>Déplacer l'équipage et charge lourde, lofer si nécessaire</td>
                        </tr>

                        <tr>
                            <td>Virement vent de face</td>
                            <td>Empannage dynamique (petite perte au vent)</td>
                            <td>Virement bout au vent</td>
                        </tr>

                        <tr>
                            <td>Virement vent arrière</td>
                            <td>Empannage aisé, sans effort</td>
                            <td>Empannage classique</td>
                        </tr>

                        <tr>
                            <td>Spinnaker</td>
                            <td>Inutile</td>
                            <td>Gréer et régler</td>
                        </tr>

                        <tr>
                            <td>Louvoyage</td>
                            <td>Empannages dynamiques avec petite perte au vent</td>
                            <td>Virements bout au vent</td>
                        </tr>

                        <tr>
                            <td>Risques d'accrochage</td>
                            <td>Limités car bateau sans appendice</td>
                            <td>Quilles ou dérivées profondes sur hauts fonds, algues, baleines</td>
                        </tr>

                        <tr>
                            <td>Risques de retournement</td>
                            <td>Limités</td>
                            <td>Critiques sur les multicoques</td>
                        </tr>

                        <tr>
                            <td>En cas de sinistre</td>
                            <td>Voile-structure facilement larguées</td>
                            <td>Cisailler les câbles, abattre le mât, remonter la dérive</td>
                        </tr>

                        <tr>
                            <td>Sauvetage</td>
                            <td>Le bateau peut constituer une cellule de survie</td>
                            <td>Il faut une annexe de secours</td>
                        </tr>

                        <tr>
                            <td>Stockage</td>
                            <td>Voile-structure larguées sur bouée ou au sol</td>
                            <td>Voile affalée mais gréement encombrant</td>
                        </tr>

                        <tr>
                            <td>Petits déplacements</td>
                            <td>Au moteur (petit bateau sans gréement ni quille)</td>
                            <td>Voilier encombrant</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h1>Modélisation de la S'Wing</h1>
            <p>
                <img
                    className="img-responsive"
                    src={require("../../images/theorie/p_111205_1_x.png")}
                    alt="Schéma S'Wing sur structure à flotteurs annexes"
                />
            </p>
            <p>
                <img
                    className="img-responsive"
                    src={require("../../images/theorie/110927_2_pav_skipper.jpg")}
                    alt="Schéma S'Wing version aérienne"
                />
            </p>

            <h1 id="gybe">Empannage</h1>
            <p>
                <img
                    className="img-responsive"
                    src={require("../../images/theorie/120215_$_empan.png")}
                    alt="Schéma empannage"
                />
            </p>
        </div>
    );
};

export default Description;
