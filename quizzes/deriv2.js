var currentQuizData = {
    title: "Dérivées - Niveau 2 (Produits et Quotients)",
    questions: [
        { q: "Formule de $(u \\times v)'$ :", options: ["$u'v + uv'$", "$u'v'$", "$u'v - uv'$", "$uv + u'v'$"], correct: "$u'v + uv'$" },
        { q: "Formule de $(\\frac{u}{v})'$ :", options: ["$\\frac{u'v - uv'}{v^2}$", "$\\frac{u'v + uv'}{v^2}$", "$\\frac{u'}{v'}$", "$\\frac{u'v - uv'}{v}$"], correct: "$\\frac{u'v - uv'}{v^2}$" },
        { q: "Soit $f(x) = x \\sqrt{x}$. On pose $u(x)=x$ et $v(x)=\\sqrt{x}$. Que vaut $u'v$ ?", options: ["$\\sqrt{x}$", "$x$", "$\\frac{1}{2\\sqrt{x}}$", "$1$"], correct: "$\\sqrt{x}$" },
        { q: "Pour $f(x) = \\frac{2x+1}{x-3}$, que vaut $u'v - uv'$ (numérateur) ?", options: ["$-7$", "$7$", "$4x-5$", "$1$"], correct: "$-7$" },
        { q: "Dérivée de $f(x) = (x+1)(x+2)$ :", options: ["$2x + 3$", "$1$", "$x^2+3x+2$", "$2$"], correct: "$2x + 3$" },
        { q: "Si $f(x) = \\frac{1}{x^2+1}$, la dérivée est de la forme $-\\frac{v'}{v^2}$. Que vaut $v'$ ?", options: ["$2x$", "$1$", "$x^2$", "$x$"], correct: "$2x$" },
        { q: "Dérivée de $f(x) = x^2 \\times x^3$ (en utilisant $(uv)'$) :", options: ["$5x^4$", "$6x^5$", "$x^5$", "$5x^5$"], correct: "$5x^4$" },
        { q: "Dans la formule du quotient, que devient le dénominateur de $f(x) = \\frac{x}{x+1}$ ?", options: ["$(x+1)^2$", "$x^2$", "$1$", "$x+1$"], correct: "$(x+1)^2$" },
        { q: "Dérivée de $f(x) = 3(x^2+2)$ :", options: ["$6x$", "$6x+6$", "$3x$", "$2x$"], correct: "$6x$" },
        { q: "Soit $f(x) = \\frac{x^2}{x}$. Quelle est sa dérivée (en simplifiant d'abord) ?", options: ["$1$", "$2x$", "$x$", "$0$"], correct: "$1$" }
    ]
};