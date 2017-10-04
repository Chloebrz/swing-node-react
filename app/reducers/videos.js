const videos = [
    {
        _id: "1",
        link: "swing_music",
        title: "S'Wing vent léger",
        legend:
            "Bien lancé dans un petit 3 Beaufort. Les flotteurs passent bien le clapot. Virement à 1:10."
    },
    {
        _id: "2",
        link: "historique2014",
        title: "Historique des prototypes",
        legend: "Vidéo retraçant l'évolution des prototypes de 2008 à 2014"
    },
    {
        _id: "3",
        link: "swing_a_bord",
        title: "A bord du S'Wing",
        legend: "Virement en vue embarquée (un peu long, à une main, Gopro dans l'autre...)"
    },
    {
        _id: "4",
        link: "virement",
        title: "Virement",
        legend: "Vue globale d'un virement."
    },
    {
        _id: "5",
        link: "virement_embarque",
        title: "Virement embarqué",
        legend: "Simplicité de la manœuvre."
    }
];

export default function(state = [], action) {
    switch (action.type) {
        default:
            return videos;
    }
}
