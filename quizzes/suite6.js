var currentQuizData = {
    title: "Suites 7 - Prouver la nature (Différence & Quotient)",
    questions: [
        {
            q: "Pour prouver mathématiquement qu'une suite est arithmétique, quel calcul dois-tu faire sur ta copie ?",
            options: [
                "Calculer $u_{n+1} - u_n$ et trouver un nombre constant (sans $n$).",
                "Calculer $\\frac{u_{n+1}}{u_n}$ et trouver un nombre constant.",
                "Calculer $u_1 - u_0$ et $u_2 - u_1$.",
                "Calculer $u_n - u_{n+1}$."
            ],
            correct: "Calculer $u_{n+1} - u_n$ et trouver un nombre constant (sans $n$)."
        },
        {
            q: "Pour prouver qu'une suite est géométrique, quel calcul fais-tu ?",
            options: [
                "Calculer le quotient $\\frac{u_{n+1}}{u_n}$ et trouver un nombre constant (sans $n$).",
                "Calculer $u_{n+1} - u_n$.",
                "Montrer qu'il y a des puissances dans la formule.",
                "Diviser $u_2$ par $u_1$."
            ],
            correct: "Calculer le quotient $\\frac{u_{n+1}}{u_n}$ et trouver un nombre constant (sans $n$)."
        },
        {
            q: "Soit $u_n = 5n + 2$. Tu as trouvé juste avant que $u_{n+1} = 5n + 7$. Fais le calcul : $u_{n+1} - u_n = ?$",
            options: ["$5$", "$5n + 5$", "$9$", "$7$"],
            correct: "$5$"
        },
        {
            q: "Soit $u_n = -2n + 10$ et $u_{n+1} = -2n + 8$. Fais attention aux signes avec le 'moins' devant la parenthèse : $u_{n+1} - u_n = ?$",
            options: ["$-2$", "$2$", "$-4n + 18$", "$18$"],
            correct: "$-2$"
        },
        {
            q: "Si après avoir calculé $u_{n+1} - u_n$ tu trouves $-4$, que peux-tu conclure formellement ?",
            options: [
                "La suite est arithmétique de raison $r = -4$.",
                "La suite est géométrique de raison $q = -4$.",
                "La suite n'est ni arithmétique ni géométrique.",
                "Il y a une erreur, on ne peut pas trouver un nombre négatif."
            ],
            correct: "La suite est arithmétique de raison $r = -4$."
        },
        {
            q: "Soit $u_n = n^2$. On sait que $u_{n+1} = n^2 + 2n + 1$. Que vaut $u_{n+1} - u_n$ ?",
            options: ["$2n + 1$", "$1$", "$n^2 + 1$", "$2n$"],
            correct: "$2n + 1$"
        },
        {
            q: "D'après la question précédente, $u_{n+1} - u_n = 2n + 1$. Que peux-tu en conclure sur la suite $u_n = n^2$ ?",
            options: [
                "Elle n'est pas arithmétique car le résultat dépend encore de $n$.",
                "Elle est arithmétique de raison $2n + 1$.",
                "Elle est arithmétique de raison $1$.",
                "Elle est géométrique."
            ],
            correct: "Elle n'est pas arithmétique car le résultat dépend encore de $n$."
        },
        {
            q: "Passons aux quotients. Une astuce vitale en algèbre : comment se simplifie la fraction $\\frac{7^{n+1}}{7^n}$ ?",
            options: ["$7$", "$1$", "$7^n$", "$7^{2n+1}$"],
            correct: "$7$"
        },
        {
            q: "Soit $u_n = 4 \\times 5^n$. Donc $u_{n+1} = 4 \\times 5^{n+1}$. Que vaut le quotient $\\frac{u_{n+1}}{u_n}$ ? (Simplifie les 4 en haut et en bas !)",
            options: ["$5$", "$4 \\times 5$", "$20$", "$5^n$"],
            correct: "$5$"
        },
        {
            q: "Après avoir calculé $\\frac{u_{n+1}}{u_n}$, tu trouves le nombre $3$. Conclusion ?",
            options: [
                "La suite est géométrique de raison $q = 3$.",
                "La suite est arithmétique de raison $r = 3$.",
                "C'est faux, il doit rester des $n$.",
                "La suite est constante."
            ],
            correct: "La suite est géométrique de raison $q = 3$."
        }
    ]
};