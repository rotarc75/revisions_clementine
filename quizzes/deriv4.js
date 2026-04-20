var currentQuizData = {
    title: "Dérivées 5 - Niveau Avancé",
    questions: [
        {
            q: "Calcule le numérateur de $f'(x)$ pour $f(x) = \\frac{2x^2}{x+3}$.",
            options: ["$\\frac{2x^2+12x}{(x+3)^2}$", "$\\frac{2x^2+6x}{(x+3)^2}$", "$\\frac{4x}{(x+3)^2}$", "$\\frac{6x^2+12x}{(x+3)^2}$"],
            correct: "$\\frac{2x^2+12x}{(x+3)^2}$"
        },
        {
            q: "Dérivée en chaîne : $f(x) = (x^2+x+1)^2$.",
            options: ["$2(2x+1)(x^2+x+1)$", "$2(x^2+x+1)$", "$(2x+1)(x^2+x+1)$", "$4x+2$"],
            correct: "$2(2x+1)(x^2+x+1)$"
        },
        {
            q: "Attention aux signes dans le numérateur : $f(x) = \\frac{x^2-x+1}{x^2+1}$.",
            options: ["$\\frac{x^2-1}{(x^2+1)^2}$", "$\\frac{x^2+1}{(x^2+1)^2}$", "$\\frac{3x^2-1}{(x^2+1)^2}$", "$\\frac{2x-1}{(x^2+1)^2}$"],
            correct: "$\\frac{x^2-1}{(x^2+1)^2}$"
        },
        {
            q: "Dérivée de puissance négative : $f(x) = \\frac{1}{(2x-3)^2}$. (Indice : $(2x-3)^{-2}$)",
            options: ["$\\frac{-4}{(2x-3)^3}$", "$\\frac{-2}{(2x-3)^3}$", "$\\frac{4}{(2x-3)^3}$", "$\\frac{-4}{(2x-3)^4}$"],
            correct: "$\\frac{-4}{(2x-3)^3}$"
        },
        {
            q: "On continue avec $u^n$ : $f(x) = (-3x+4)^5$.",
            options: ["$-15(-3x+4)^4$", "$5(-3x+4)^4$", "$15(-3x+4)^4$", "$-3(-3x+4)^4$"],
            correct: "$-15(-3x+4)^4$"
        },
        {
            q: "Racine d'un trinôme : $f(x) = \\sqrt{x^2-4x+5}$. Simplifie par 2 !",
            options: ["$\\frac{x-2}{\\sqrt{x^2-4x+5}}$", "$\\frac{2x-4}{\\sqrt{x^2-4x+5}}$", "$\\frac{x-2}{2\\sqrt{x^2-4x+5}}$", "$\\frac{1}{2\\sqrt{x^2-4x+5}}$"],
            correct: "$\\frac{x-2}{\\sqrt{x^2-4x+5}}$"
        },
        {
            q: "Produit costaud : $f(x) = (3x-1)(2x+5)^2$. On donne la forme factorisée finale :",
            options: ["$(2x+5)(18x+11)$", "$(2x+5)(18x-11)$", "$(2x+5)(6x+15)$", "$6(2x+5)$"],
            correct: "$(2x+5)(18x+11)$"
        },
        {
            q: "Produit avec racine : $f(x) = x\\sqrt{2x+1}$. Trouve le numérateur final :",
            options: ["$\\frac{3x+1}{\\sqrt{2x+1}}$", "$\\frac{2x+1}{\\sqrt{2x+1}}$", "$\\frac{x}{\\sqrt{2x+1}}$", "$\\frac{3x}{\\sqrt{2x+1}}$"],
            correct: "$\\frac{3x+1}{\\sqrt{2x+1}}$"
        },
        {
            q: "Quotient avec racine : $f(x) = \\frac{\\sqrt{x}}{x-1}$.",
            options: ["$\\frac{-x-1}{2\\sqrt{x}(x-1)^2}$", "$\\frac{x-1}{2\\sqrt{x}(x-1)^2}$", "$\\frac{-x+1}{2\\sqrt{x}(x-1)^2}$", "$\\frac{1}{2\\sqrt{x}(x-1)^2}$"],
            correct: "$\\frac{-x-1}{2\\sqrt{x}(x-1)^2}$"
        },
        {
            q: "Double produit avec factorisation (factorise par $x^2(1-2x)$ à la fin) : $f(x) = x^3 (1-2x)^2$.",
            options: ["$x^2(1-2x)(3-10x)$", "$x^2(1-2x)(3-5x)$", "$3x^2(1-2x)^2$", "$x^2(1-2x)(10x-3)$"],
            correct: "$x^2(1-2x)(3-10x)$"
        }
    ]
};