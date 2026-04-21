var currentQuizData = {
    title: "Suites 5 - Somme des termes (Géométrique)",
    questions: [
        {
            q: `<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 15px; margin-bottom: 20px;">
                <strong>📚 RAPPEL : LA SOMME GÉOMÉTRIQUE</strong><br>
                Pour additionner tous les étages, on utilise cette formule magique :<br><br>
                $\\text{Somme} = \\text{Premier Terme} \\times \\frac{1 - q^{\\text{Nombre de termes}}}{1 - q}$<br><br>
                ⚠️ <strong>Nombre de termes</strong> = (Dernier indice - Premier indice) + 1
                </div>
                Combien y a-t-il de termes en tout si j'additionne de $u_0$ jusqu'à $u_{10}$ ? (Applique la règle de l'encadré !)`,
            options: ["11", "10", "9", "12"],
            correct: "11"
        },
        {
            q: "Combien y a-t-il de termes si on additionne de $u_1$ jusqu'à $u_5$ ?",
            options: ["5", "4", "6", "15"],
            correct: "5"
        },
        {
            q: "On a une suite géométrique de premier terme $u_0 = 2$ et de raison $q = 3$. On veut calculer $S = u_0 + u_1 + u_2$. <br>Si tu le fais à la main, cela donne $2 + 6 + 18 = 26$. <br>Quelle expression avec la formule donne le même résultat ?",
            options: [
                "$2 \\times \\frac{1 - 3^3}{1 - 3}$",
                "$2 \\times \\frac{1 - 3^2}{1 - 3}$",
                "$3 \\times \\frac{1 - 2^3}{1 - 2}$",
                "$2 \\times \\frac{1 - 2^3}{1 - 3}$"
            ],
            correct: "$2 \\times \\frac{1 - 3^3}{1 - 3}$"
        },
        {
            q: "Suite géométrique : $u_0 = 1$ et $q = 2$. On veut la somme de $u_0$ à $u_{10}$. Quelle est la bonne formule ?",
            options: [
                "$1 \\times \\frac{1 - 2^{11}}{1 - 2}$",
                "$1 \\times \\frac{1 - 2^{10}}{1 - 2}$",
                "$1 \\times \\frac{1 - 10^2}{1 - 2}$",
                "$2 \\times \\frac{1 - 1^{11}}{1 - 1}$"
            ],
            correct: "$1 \\times \\frac{1 - 2^{11}}{1 - 2}$"
        },
        {
            q: "Suite géométrique : $u_1 = 6$ et $q = 2$. On veut la somme de $u_1$ à $u_5$. Quelle est la bonne formule ?",
            options: [
                "$6 \\times \\frac{1 - 2^5}{1 - 2}$",
                "$6 \\times \\frac{1 - 2^4}{1 - 2}$",
                "$6 \\times \\frac{1 - 2^6}{1 - 2}$",
                "$1 \\times \\frac{1 - 2^5}{1 - 2}$"
            ],
            correct: "$6 \\times \\frac{1 - 2^5}{1 - 2}$"
        },
        {
            q: "Calcule de tête la somme des 4 premiers termes de cette suite géométrique : 1, 10, 100, 1000.",
            options: ["1111", "1110", "1000", "40"],
            correct: "1111"
        },
        {
            q: "Appliquons la formule au calcul précédent ($u_0=1, q=10$, on va jusqu'à $u_3$). Laquelle est juste ?",
            options: [
                "$1 \\times \\frac{1 - 10^4}{1 - 10}$",
                "$1 \\times \\frac{1 - 10^3}{1 - 10}$",
                "$10 \\times \\frac{1 - 1^4}{1 - 10}$",
                "$1 \\times \\frac{1 - 4^{10}}{1 - 10}$"
            ],
            correct: "$1 \\times \\frac{1 - 10^4}{1 - 10}$"
        },
        {
            q: "On passe aux grands nombres, on ne peut plus le faire à la main ! Suite géométrique : $u_0 = 5$ et $q = 4$. Somme de $u_0$ à $u_{20}$.",
            options: [
                "$5 \\times \\frac{1 - 4^{21}}{1 - 4}$",
                "$5 \\times \\frac{1 - 4^{20}}{1 - 4}$",
                "$5 \\times \\frac{1 - 20^4}{1 - 4}$",
                "$4 \\times \\frac{1 - 5^{21}}{1 - 5}$"
            ],
            correct: "$5 \\times \\frac{1 - 4^{21}}{1 - 4}$"
        },
        {
            q: "Suite géométrique avec un premier terme différent : $u_3 = 10$ et $q = 0,5$. Somme de $u_3$ à $u_{15}$. <br>(Attention au nombre de termes : 15 - 3 + 1)",
            options: [
                "$10 \\times \\frac{1 - 0,5^{13}}{1 - 0,5}$",
                "$10 \\times \\frac{1 - 0,5^{12}}{1 - 0,5}$",
                "$10 \\times \\frac{1 - 0,5^{15}}{1 - 0,5}$",
                "$3 \\times \\frac{1 - 0,5^{15}}{1 - 0,5}$"
            ],
            correct: "$10 \\times \\frac{1 - 0,5^{13}}{1 - 0,5}$"
        },
        {
            q: "L'erreur fatale en examen. Que manque-t-il dans cette écriture fractionnaire : $u_0 \\times 1 - q^n / 1 - q$ ?",
            options: [
                "Des parenthèses obligatoires autour de $(1 - q^n)$ et $(1 - q)$.",
                "Il faut mettre un $+$ au lieu d'un $-$.",
                "Il faut remplacer $n$ par $n+1$.",
                "Il ne manque rien."
            ],
            correct: "Des parenthèses obligatoires autour de $(1 - q^n)$ et $(1 - q)$."
        }
    ]
};