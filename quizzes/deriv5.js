var currentQuizData = {
    title: "Dérivées 6 - Le Boss Final (Expert)",
    questions: [
        {
            q: "Dérivée d'un quotient au carré (Applique $2 \\cdot u' \\cdot u$) : $f(x) = \\left( \\frac{x+1}{x-1} \\right)^2$",
            options: ["$\\frac{-4(x+1)}{(x-1)^3}$", "$\\frac{4(x+1)}{(x-1)^3}$", "$\\frac{-2}{(x-1)^2}$", "$\\frac{-4}{(x-1)^4}$"],
            correct: "$\\frac{-4(x+1)}{(x-1)^3}$"
        },
        {
            q: "Quotient dont le dénominateur est une puissance : $f(x) = \\frac{x}{(x^2+1)^2}$. Calcule $v'$ proprement puis factorise.",
            options: ["$\\frac{1-3x^2}{(x^2+1)^3}$", "$\\frac{1+3x^2}{(x^2+1)^3}$", "$\\frac{1-x^2}{(x^2+1)^3}$", "$\\frac{x^2-3}{(x^2+1)^3}$"],
            correct: "$\\frac{1-3x^2}{(x^2+1)^3}$"
        },
        {
            q: "Racine d'un quotient : $f(x) = \\sqrt{\\frac{1+x}{1-x}}$.",
            options: ["$\\frac{1}{(1-x)^2} \\sqrt{\\frac{1-x}{1+x}}$", "$\\frac{1}{(1-x)^2} \\sqrt{\\frac{1+x}{1-x}}$", "$\\frac{1}{(1-x)^2}$", "$\\frac{2}{(1-x)^2} \\sqrt{\\frac{1-x}{1+x}}$"],
            correct: "$\\frac{1}{(1-x)^2} \\sqrt{\\frac{1-x}{1+x}}$"
        },
        {
            q: "Quotient contenant une racine au dénominateur : $f(x) = \\frac{x^3}{\\sqrt{1-x^2}}$.",
            options: ["$\\frac{3x^2-2x^4}{(1-x^2)\\sqrt{1-x^2}}$", "$\\frac{3x^2-4x^4}{(1-x^2)\\sqrt{1-x^2}}$", "$\\frac{3x^2-2x^4}{\\sqrt{1-x^2}}$", "$\\frac{3x^2+2x^4}{(1-x^2)\\sqrt{1-x^2}}$"],
            correct: "$\\frac{3x^2-2x^4}{(1-x^2)\\sqrt{1-x^2}}$"
        },
        {
            q: "L'inverse d'un cube $f(x) = \\frac{1}{(3x^2-x+1)^3}$. Écris-le $(3x^2-x+1)^{-3}$ pour aller plus vite !",
            options: ["$\\frac{3(1-6x)}{(3x^2-x+1)^4}$", "$\\frac{3(6x-1)}{(3x^2-x+1)^4}$", "$\\frac{1-6x}{(3x^2-x+1)^4}$", "$\\frac{-3}{(3x^2-x+1)^4}$"],
            correct: "$\\frac{3(1-6x)}{(3x^2-x+1)^4}$"
        },
        {
            q: "Le cauchemar algébrique. Produit de deux puissances : $f(x) = (2x-1)^3 (3x+2)^4$.",
            options: ["$42x(2x-1)^2(3x+2)^3$", "$24x(2x-1)^2(3x+2)^3$", "$6(2x-1)^2(3x+2)^3$", "$42x(2x-1)^3(3x+2)^4$"],
            correct: "$42x(2x-1)^2(3x+2)^3$"
        },
        {
            q: "Des racines imbriquées : $f(x) = \\sqrt{x + \\sqrt{x}}$.",
            options: ["$\\frac{2\\sqrt{x}+1}{4\\sqrt{x}\\sqrt{x+\\sqrt{x}}}$", "$\\frac{1}{2\\sqrt{x+\\sqrt{x}}}$", "$\\frac{2\\sqrt{x}+1}{2\\sqrt{x+\\sqrt{x}}}$", "$\\frac{1}{4\\sqrt{x}\\sqrt{x+\\sqrt{x}}}$"],
            correct: "$\\frac{2\\sqrt{x}+1}{4\\sqrt{x}\\sqrt{x+\\sqrt{x}}}$"
        },
        {
            q: "Puissance d'une soustraction de fractions : $f(x) = \\left( \\frac{1}{x} - x \\right)^3$.",
            options: ["$-3 \\left( \\frac{1-x^2}{x} \\right)^2 \\left( \\frac{1+x^2}{x^2} \\right)$", "$3 \\left( \\frac{1-x^2}{x} \\right)^2 \\left( \\frac{1-x^2}{x^2} \\right)$", "$-3 \\left( \\frac{1}{x} - x \\right)^2$", "$3 \\left( \\frac{1+x^2}{x} \\right)^2$"],
            correct: "$-3 \\left( \\frac{1-x^2}{x} \\right)^2 \\left( \\frac{1+x^2}{x^2} \\right)$"
        },
        {
            q: "Produit de $x$ par un quotient au carré : $f(x) = x \\left( \\frac{x-1}{x+1} \\right)^2$. Mettez tout au même dénominateur à la fin.",
            options: ["$\\left(\\frac{x-1}{x+1}\\right) \\left[ \\frac{x^2+4x-1}{(x+1)^2} \\right]$", "$\\left(\\frac{x-1}{x+1}\\right) \\left[ \\frac{x^2-1}{(x+1)^2} \\right]$", "$\\left(\\frac{x-1}{x+1}\\right)^2$", "$\\left(\\frac{x-1}{x+1}\\right) \\left[ \\frac{x^2+2x-1}{(x+1)^2} \\right]$"],
            correct: "$\\left(\\frac{x-1}{x+1}\\right) \\left[ \\frac{x^2+4x-1}{(x+1)^2} \\right]$"
        },
        {
            q: "Quotient de puissances, il faut factoriser le numérateur par $(x-1)$ et $(x+1)^2$ pour s'en sortir : $f(x) = \\frac{(x-1)^2}{(x+1)^3}$.",
            options: ["$\\frac{(x-1)(5-x)}{(x+1)^4}$", "$\\frac{(x-1)(x-5)}{(x+1)^4}$", "$\\frac{(x-1)(5-x)}{(x+1)^6}$", "$\\frac{(x-1)^2}{(x+1)^4}$"],
            correct: "$\\frac{(x-1)(5-x)}{(x+1)^4}$"
        }
    ]
};