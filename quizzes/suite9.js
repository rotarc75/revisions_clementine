var currentQuizData = {
    title: "Suites 10 - Formules explicites (Avancé)",
    questions: [
        {
            q: "Trouve la formule explicite de la suite <strong>arithmétique</strong> avec $u_0 = -4$ et $r = 7$.",
            options: ["$u_n = -4 + 7n$", "$u_n = 7 - 4n$", "$u_n = -4 \\times 7^n$", "$u_n = 7 \\times (-4)^n$"],
            correct: "$u_n = -4 + 7n$"
        },
        {
            q: "Trouve la formule explicite de la suite <strong>géométrique</strong> avec $u_0 = 10$ et $q = 0,1$.",
            options: ["$u_n = 10 \\times 0,1^n$", "$u_n = 0,1 \\times 10^n$", "$u_n = 10 + 0,1n$", "$u_n = 0,1 + 10n$"],
            correct: "$u_n = 10 \\times 0,1^n$"
        },
        {
            q: "On lit sur une copie : $u_n = \\frac{4^n}{3}$. Que peux-tu en déduire avec certitude ?",
            options: [
                "Suite géométrique de premier terme $u_0 = \\frac{1}{3}$ et raison $q = 4$.",
                "Suite géométrique de premier terme $u_0 = 4$ et raison $q = \\frac{1}{3}$.",
                "Suite arithmétique de premier terme $u_0 = 3$ et raison $r = 4$.",
                "Suite arithmétique de premier terme $u_0 = \\frac{1}{3}$ et raison $r = 4$."
            ],
            correct: "Suite géométrique de premier terme $u_0 = \\frac{1}{3}$ et raison $q = 4$."
        },
        {
            q: "On te donne $u_n = \\frac{5 - 2n}{3}$. Quelles sont les caractéristiques de cette suite arithmétique ?",
            options: [
                "$u_0 = \\frac{5}{3}$ et $r = -\\frac{2}{3}$",
                "$u_0 = 5$ et $r = -2$",
                "$u_0 = \\frac{5}{3}$ et $r = 2$",
                "$u_0 = 5$ et $r = -\\frac{2}{3}$"
            ],
            correct: "$u_0 = \\frac{5}{3}$ et $r = -\\frac{2}{3}$"
        },
        {
            q: "Attention au décalage d'indice ! On a une suite arithmétique avec <strong>$u_1 = 5$</strong> et $r = 2$. Quelle est l'expression de $u_n$ ?",
            options: ["$u_n = 5 + (n-1) \\times 2$", "$u_n = 5 + n \\times 2$", "$u_n = 2 + (n-1) \\times 5$", "$u_n = 2 + n \\times 5$"],
            correct: "$u_n = 5 + (n-1) \\times 2$"
        },
        {
            q: "D'après la question précédente, si tu développes $u_n = 5 + 2(n-1)$, quelle est la forme simplifiée ?",
            options: ["$u_n = 2n + 3$", "$u_n = 2n + 5$", "$u_n = 2n + 4$", "$u_n = 2n - 3$"],
            correct: "$u_n = 2n + 3$"
        },
        {
            q: "Même logique en géométrique : $u_1 = 3$ et $q = 4$. Formule explicite ?",
            options: ["$u_n = 3 \\times 4^{n-1}$", "$u_n = 3 \\times 4^n$", "$u_n = 4 \\times 3^{n-1}$", "$u_n = 4 \\times 3^n$"],
            correct: "$u_n = 3 \\times 4^{n-1}$"
        },
        {
            q: "Trouve la formule de la suite qui fait : $12, 9, 6, 3...$",
            options: ["$u_n = 12 - 3n$", "$u_n = 12 \\times 3^n$", "$u_n = 12 - 4n$", "$u_n = -3 + 12n$"],
            correct: "$u_n = 12 - 3n$"
        },
        {
            q: "Trouve la formule de la suite qui fait : $-2, 4, -8, 16...$",
            options: ["$u_n = -2 \\times (-2)^n$", "$u_n = -2 \\times 2^n$", "$u_n = 2 \\times (-2)^n$", "$u_n = -2 + 6n$"],
            correct: "$u_n = -2 \\times (-2)^n$"
        },
        {
            q: "On sait que la suite est arithmétique. On donne $u_0 = 1$ et on veut calculer $u_{50}$ avec une raison $r = 0,2$. Résultat ?",
            options: ["$11$", "$10$", "$1,2$", "$50$"],
            correct: "$11$"
        }
    ]
};