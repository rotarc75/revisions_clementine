var currentQuizData = {
    title: "Dérivées 4 - Mélange de règles",
    questions: [
        {
            q: "Quelle est la formule stricte pour dériver une fonction de la forme $u^n$ ?",
            options: ["$n \\cdot u' \\cdot u^{n-1}$", "$n \\cdot u^{n-1}$", "$u' \\cdot u^{n-1}$", "$n \\cdot u'$"],
            correct: "$n \\cdot u' \\cdot u^{n-1}$"
        },
        {
            q: "Applique la formule précédente : $f(x) = (3x+2)^2$. Que vaut $f'(x)$ ?",
            options: ["$6(3x+2)$", "$2(3x+2)$", "$3(3x+2)^2$", "$9x^2+4$"],
            correct: "$6(3x+2)$"
        },
        {
            q: "Produit classique : $f(x) = x(2x-5)$. Fais ton produit en croix !",
            options: ["$4x-5$", "$2$", "$2x-5$", "$4x$"],
            correct: "$4x-5$"
        },
        {
            q: "Identifie la fonction $u$ : $f(x) = (5x-1)^4$. Que vaut $f'(x)$ ?",
            options: ["$20(5x-1)^3$", "$4(5x-1)^3$", "$5(5x-1)^3$", "$20x^3$"],
            correct: "$20(5x-1)^3$"
        },
        {
            q: "Dérivée d'une racine composée : $f(x) = \\sqrt{4x+3}$. (Rappel : $\\frac{u'}{2\\sqrt{u}}$)",
            options: ["$\\frac{2}{\\sqrt{4x+3}}$", "$\\frac{4}{\\sqrt{4x+3}}$", "$\\frac{1}{2\\sqrt{4x+3}}$", "$\\frac{4}{2\\sqrt{x}}$"],
            correct: "$\\frac{2}{\\sqrt{4x+3}}$"
        },
        {
            q: "Mélange : $f(x) = (x^2-1)^3$. Que vaut $u'$ pour commencer, puis $f'(x)$ ?",
            options: ["$6x(x^2-1)^2$", "$3(x^2-1)^2$", "$2x(x^2-1)^2$", "$6x(x^2-1)^3$"],
            correct: "$6x(x^2-1)^2$"
        },
        {
            q: "Quotient classique à simplifier : $f(x) = \\frac{x+2}{x-1}$. Calcule le numérateur $(u'v - uv')$.",
            options: ["$\\frac{-3}{(x-1)^2}$", "$\\frac{1}{(x-1)^2}$", "$\\frac{3}{(x-1)^2}$", "$\\frac{2x+1}{(x-1)^2}$"],
            correct: "$\\frac{-3}{(x-1)^2}$"
        },
        {
            q: "Dérivée de $f(x) = \\frac{1}{2x+1}$.",
            options: ["$\\frac{-2}{(2x+1)^2}$", "$\\frac{2}{(2x+1)^2}$", "$\\frac{-1}{(2x+1)^2}$", "$\\frac{1}{2}$"],
            correct: "$\\frac{-2}{(2x+1)^2}$"
        },
        {
            q: "Produit piégeur : $f(x) = x^2(1-x)$. Prends le temps de faire les 4 cases.",
            options: ["$2x - 3x^2$", "$2x - 2x^2$", "$2x(1-x)$", "$-2x$"],
            correct: "$2x - 3x^2$"
        },
        {
            q: "Quotient avec constante en haut : $f(x) = \\frac{3}{x^2+1}$.",
            options: ["$\\frac{-6x}{(x^2+1)^2}$", "$\\frac{6x}{(x^2+1)^2}$", "$\\frac{-3}{(x^2+1)^2}$", "$\\frac{3}{2x}$"],
            correct: "$\\frac{-6x}{(x^2+1)^2}$"
        }
    ]
};