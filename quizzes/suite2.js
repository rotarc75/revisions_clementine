var currentQuizData = {
    title: "Suites 1bis - Calculer u_{n+1}",
    questions: [
        {
            q: "La règle d'or : pour trouver l'expression de $u_{n+1}$, que doit-on faire dans la formule de $u_n$ ?",
            options: [
                "Remplacer chaque $n$ par $(n+1)$ avec des parenthèses.",
                "Ajouter 1 à la fin de la formule.",
                "Multiplier la formule par $n+1$.",
                "Remplacer $n$ par 1."
            ],
            correct: "Remplacer chaque $n$ par $(n+1)$ avec des parenthèses."
        },
        {
            q: "Quelle est la différence fondamentale entre $u_{n+1}$ et $u_n + 1$ ?",
            options: [
                "$u_{n+1}$ est le terme suivant, $u_n + 1$ est le terme actuel auquel on ajoute 1.",
                "C'est la même chose, c'est juste une façon différente de l'écrire.",
                "$u_{n+1}$ est plus grand que $u_n + 1$.",
                "$u_n + 1$ est toujours une suite arithmétique."
            ],
            correct: "$u_{n+1}$ est le terme suivant, $u_n + 1$ est le terme actuel auquel on ajoute 1."
        },
        {
            q: "On donne $u_n = 2n$. Quelle est l'expression de $u_{n+1}$ ? (Attention au développement de $2(n+1)$ !)",
            options: ["$2n + 2$", "$2n + 1$", "$2(n) + 1$", "$n+2$"],
            correct: "$2n + 2$"
        },
        {
            q: "On donne $u_n = n + 5$. Que vaut $u_{n+1}$ ?",
            options: ["$n + 6$", "$n + 5 + 1n$", "$n + 15$", "$6n$"],
            correct: "$n + 6$"
        },
        {
            q: "Piège classique ! On donne $u_n = -3n + 4$. Que vaut $u_{n+1}$ ? (Écris $-3(n+1) + 4$ au brouillon)",
            options: ["$-3n + 1$", "$-3n + 5$", "$-3n + 7$", "$-3n - 3$"],
            correct: "$-3n + 1$"
        },
        {
            q: "On donne $u_n = 5^n$. Que vaut $u_{n+1}$ ?",
            options: ["$5^{n+1}$", "$5^n + 1$", "$6^n$", "$5 \\times n + 1$"],
            correct: "$5^{n+1}$"
        },
        {
            q: "On donne $u_n = 4 \\times 3^n$. Que vaut $u_{n+1}$ ?",
            options: ["$4 \\times 3^{n+1}$", "$4 \\times 3^n + 1$", "$12^{n+1}$", "$5 \\times 3^n$"],
            correct: "$4 \\times 3^{n+1}$"
        },
        {
            q: "Attention au carré : $u_n = n^2$. Que vaut $u_{n+1}$ ? (Il faut utiliser l'identité remarquable $(n+1)^2$)",
            options: ["$n^2 + 2n + 1$", "$n^2 + 1$", "$2n + 1$", "$n^2 + 2$"],
            correct: "$n^2 + 2n + 1$"
        },
        {
            q: "On donne $u_n = \\frac{n}{2} + 3$. Que vaut $u_{n+1}$ ?",
            options: ["$\\frac{n+1}{2} + 3$", "$\\frac{n}{2} + 4$", "$\\frac{n+4}{2}$", "$\\frac{n+1}{3}$"],
            correct: "$\\frac{n+1}{2} + 3$"
        },
        {
            q: "Ultime vérification : $u_n = 10 - 2n$. Que vaut $u_{n+1}$ ?",
            options: ["$8 - 2n$", "$12 - 2n$", "$10 - 2n + 1$", "$10 - 3n$"],
            correct: "$8 - 2n$"
        }
    ]
};