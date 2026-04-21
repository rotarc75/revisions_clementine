var currentQuizData = {
    title: "Suites 8 - Démonstrations algébriques",
    questions: [
        {
            q: "On donne $u_n = 4n - 7$. Que vaut $u_{n+1}$ après développement correct ?",
            options: ["$4n - 3$", "$4n - 6$", "$4n - 2$", "$4n - 7$"],
            correct: "$4n - 3$"
        },
        {
            q: "Avec $u_n = 4n - 7$ et $u_{n+1} = 4n - 3$, fais le calcul $u_{n+1} - u_n$.",
            options: ["$4$", "$-10$", "$8n - 10$", "$-4$"],
            correct: "$4$"
        },
        {
            q: "Un peu plus dur : $u_n = -5n + 2$. Calcule formellement $u_{n+1} - u_n$. (Rappel : $u_{n+1} = -5(n+1) + 2$)",
            options: ["$-5$", "$5$", "$-5n - 3$", "$-3$"],
            correct: "$-5$"
        },
        {
            q: "On change de type : $u_n = 7 \\times 2^n$. Que vaut $u_{n+1}$ ?",
            options: ["$7 \\times 2^{n+1}$", "$14 \\times 2^n$", "$7 \\times 2^n + 1$", "$7 \\times 3^n$"],
            correct: "$7 \\times 2^{n+1}$"
        },
        {
            q: "Simplifie le quotient $\\frac{u_{n+1}}{u_n}$ pour la suite de la question précédente ($u_n = 7 \\times 2^n$).",
            options: ["$2$", "$7$", "$14$", "$\\frac{1}{2}$"],
            correct: "$2$"
        },
        {
            q: "Simplifie au maximum la fraction $\\frac{5^{n+2}}{5^n}$. (Utilise les règles des puissances au brouillon)",
            options: ["$25$", "$5$", "$5^n$", "$10$"],
            correct: "$25$"
        },
        {
            q: "On a la suite géométrique $u_n = \\frac{3^n}{2}$. Calcule le quotient $\\frac{u_{n+1}}{u_n}$.",
            options: ["$3$", "$\\frac{3}{2}$", "$\\frac{1}{2}$", "$6$"],
            correct: "$3$"
        },
        {
            q: "Soit $u_n = n^2 - n$. Calcule proprement $u_{n+1}$ en utilisant $(n+1)^2$.",
            options: ["$n^2 + n$", "$n^2 - n + 1$", "$n^2 + 2n$", "$n^2 + n + 2$"],
            correct: "$n^2 + n$"
        },
        {
            q: "Avec $u_n = n^2 - n$ et $u_{n+1} = n^2 + n$, calcule la différence $u_{n+1} - u_n$.",
            options: ["$2n$", "$0$", "$2n^2$", "$n$"],
            correct: "$2n$"
        },
        {
            q: "Sachant que $u_{n+1} - u_n = 2n$, que conclus-tu sur la suite $u_n = n^2 - n$ ?",
            options: [
                "Elle n'est pas arithmétique car la différence dépend de $n$.",
                "Elle est arithmétique de raison $2n$.",
                "Elle est géométrique.",
                "Elle est constante."
            ],
            correct: "Elle n'est pas arithmétique car la différence dépend de $n$."
        }
    ]
};