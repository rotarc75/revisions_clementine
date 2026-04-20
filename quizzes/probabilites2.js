var currentQuizData = {
    title: "Probabilités Totales - Niveau 2 (Problèmes)",
    questions: [
        {
            q: "Une maladie touche $10\\%$ de la population. Le test est positif pour $90\\%$ des malades, et positif pour $20\\%$ des non-malades. Quelle est la probabilité totale d'avoir un test positif (T) ?",
            options: [
                "$\\frac{27}{100}$",
                "$\\frac{110}{100}$",
                "$\\frac{9}{100}$",
                "$\\frac{18}{100}$"
            ],
            correct: "$\\frac{27}{100}$"
        },
        {
            q: "Dans l'exercice précédent, l'opération pour trouver le résultat $27/100$ était :",
            options: [
                "$(\\frac{10}{100} \\times \\frac{90}{100}) + (\\frac{90}{100} \\times \\frac{20}{100})$",
                "$(\\frac{10}{100} \\times \\frac{90}{100}) \\times (\\frac{90}{100} \\times \\frac{20}{100})$",
                "$\\frac{10}{100} + \\frac{90}{100} + \\frac{20}{100}$",
                "$\\frac{90}{100} + \\frac{20}{100}$"
            ],
            correct: "$(\\frac{10}{100} \\times \\frac{90}{100}) + (\\frac{90}{100} \\times \\frac{20}{100})$"
        },
        {
            q: "L'arbre d'un jeu vidéo indique que $P(\\text{Victoire}) = \\frac{40}{100}$. On sait que le joueur a choisi l'arme A ou l'arme B. Si $P(A \\cap \\text{Victoire}) = \\frac{15}{100}$, que vaut $P(B \\cap \\text{Victoire})$ ?",
            options: [
                "$\\frac{25}{100}$",
                "$\\frac{55}{100}$",
                "$\\frac{15}{100}$",
                "$\\frac{8}{100}$"
            ],
            correct: "$\\frac{25}{100}$"
        },
        {
            q: "On donne l'arbre suivant :<br><pre>  /-- A (0,5) --- D (0,2)<br>*<br>  \\-- B (0,5) --- D (0,8)</pre><br>Calculez la probabilité totale $P(D)$.",
            options: ["0,5", "1,0", "0,1", "0,4"],
            correct: "0,5"
        },
        {
            q: "Sachant que $P(D) = 0,5$ d'après la question précédente, et que $P(A \\cap D) = 0,1$, calculez la probabilité conditionnelle inversée $P_D(A)$.",
            options: ["0,2", "0,05", "5", "0,5"],
            correct: "0,2"
        },
        {
            q: "Pour calculer une probabilité conditionnelle inversée comme $P_T(M)$, la loi des probabilités totales est souvent indispensable car :",
            options: [
                "Elle permet de calculer le dénominateur $P(T)$.",
                "Elle permet de calculer le numérateur $P(M \\cap T)$.",
                "Elle prouve que les événements sont indépendants.",
                "Elle évite d'utiliser des fractions."
            ],
            correct: "Elle permet de calculer le dénominateur $P(T)$."
        },
        {
            q: "Dans un lycée, on a calculé que $P(\\text{Fille} \\cap \\text{Sport}) = \\frac{3}{10}$ et $P(\\text{Garçon} \\cap \\text{Sport}) = \\frac{4}{10}$. Que vaut $P(\\text{Sport})$ ?",
            options: ["$\\frac{7}{10}$", "$\\frac{12}{100}$", "$\\frac{1}{10}$", "$\\frac{7}{20}$"],
            correct: "$\\frac{7}{10}$"
        },
        {
            q: "Calculez le total suivant sans vous tromper sur les dénominateurs : $\\frac{12}{1000} + \\frac{4}{1000}$",
            options: [
                "$\\frac{16}{1000}$",
                "$\\frac{16}{2000}$",
                "$\\frac{48}{1000}$",
                "$\\frac{48}{1000000}$"
            ],
            correct: "$\\frac{16}{1000}$"
        },
        {
            q: "Si la probabilité totale $P(K)$ vaut $0,8$, que vaut la probabilité totale de l'événement contraire $P(\\overline{K})$ ?",
            options: ["0,2", "0,8", "1,2", "0"],
            correct: "0,2"
        },
        {
            q: "Deux usines Nord et Sud produisent le même objet. On constate que $P(\\text{Nord} \\cap \\text{Défaut}) = 0,04$. Si la probabilité totale $P(\\text{Défaut})$ est de $0,10$, que pouvez-vous affirmer ?",
            options: [
                "$P(\\text{Sud} \\cap \\text{Défaut}) = 0,06$",
                "$P_\\text{Sud}(\\text{Défaut}) = 0,06$",
                "$P(\\text{Sud}) = 0,06$",
                "Le calcul est impossible."
            ],
            correct: "$P(\\text{Sud} \\cap \\text{Défaut}) = 0,06$"
        }
    ]
};