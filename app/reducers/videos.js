const videos = [
    {
        _id: "1",
        url: "swing_music",
        title: "S'Wing vent léger",
        legend:
            "Bien lancé dans un petit 3 Beaufort. Les flotteurs passent bien le clapot. Virement à 1:10.",
        createdAt: "59b653d201610b33c963005f"
    },
    {
        _id: "2",
        url: "historique2014",
        title: "Historique des prototypes",
        legend: "Vidéo retraçant l'évolution des prototypes de 2008 à 2014",
        createdAt: "59b653bf01610b33c963005e"
    },
    {
        _id: "3",
        url: "swing_a_bord",
        title: "A bord du S'Wing",
        legend: "Virement en vue embarquée (un peu long, à une main, Gopro dans l'autre...)",
        createdAt: "59b653bf01610b33c963005e"
    },
    {
        _id: "4",
        url: "virement",
        title: "Virement",
        legend: "Vue globale d'un virement.",
        createdAt: "59b653d201610b33c963005f"
    },
    {
        _id: "5",
        url: "virement_embarque",
        title: "Virement embarqué",
        legend: "Simplicité de la manœuvre.",
        createdAt: "59b653d201610b33c963005f"
    }
];

export default function(state = [], action) {
    switch (action.type) {
        default:
            return videos;
    }
}
