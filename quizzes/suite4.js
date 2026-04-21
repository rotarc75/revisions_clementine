var currentQuizData = {
    title: "Suites 4 - Formes explicites",
    questions: [
        {
            q: `<div style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 15px; margin-bottom: 20px;">
                <strong>📚 RAPPEL DE COURS : LA FORMULE EXPLICITE</strong><br>
                C'est le passe-partout qui permet de calculer n'importe quel étage directement.<br><br>
                • <strong>Suite Arithmétique (on ajoute r) :</strong> $u_n = u_0 + n \\times r$<br>
                • <strong>Suite Géométrique (on multiplie par q) :</strong> $u_n = u_0 \\times q^n$
                </div>
                On a une suite <strong>arithmétique</strong> avec $u_0 = 5$ et de raison $r = 2$. Quelle est sa forme explicite ?`,
            options: ["$u_n = 5 + n \\times 2$", "$u_n = 5 \\times 2^n$", "$u_n = 2 + n \\times 5$", "$u_n = 5 + 2^n$"],
            correct: "$u_n = 5 + n \\times 2$"
        },
        {
            q: "On a une suite <strong>géométrique</strong> avec $u_0 = 3$ et de raison $q = 2$. Quelle est sa forme explicite ?",
            options: ["$u_n = 3 \\times 2^n$", "$u_n = 3 + n \\times 2$", "$u_n = 2 \\times 3^n$", "$u_n = 3^n \\times 2$"],
            correct: "$u_n = 3 \\times 2^n$"
        },
        {
            q: "Suite <strong>arithmétique</strong> : on part de $u_0 = 10$ et on descend de 3 à chaque étage ($r = -3$). Formule ?",
            options: ["$u_n = 10 - 3 \\times n$", "$u_n = 10 \\times (-3)^n$", "$u_n = -3 + 10 \\times n$", "$u_n = 10 - 3^n$"],
            correct: "$u_n = 10 - 3 \\times n$"
        },
        {
            q: "Suite <strong>géométrique</strong> : $u_0 = 1$ et $q = 5$. Formule ?",
            options: ["$u_n = 1 \\times 5^n$", "$u_n = 1 + n \\times 5$", "$u_n = 5 \\times 1^n$", "$u_n = 5^n + 1$"],
            correct: "$u_n = 1 \\times 5^n$"
        },
        {
            q: "Lecture inverse : On te donne la formule $u_n = 8 + n \\times 4$. Que peux-tu en déduire ?",
            options: [
                "C'est une suite arithmétique de premier terme $u_0 = 8$ et de raison $r = 4$.",
                "C'est une suite arithmétique de premier terme $u_0 = 4$ et de raison $r = 8$.",
                "C'est une suite géométrique de premier terme $u_0 = 8$ et de raison $q = 4$.",
                "C'est une suite géométrique de premier terme $u_0 = 4$ et de raison $q = 8$."
            ],
            correct: "C'est une suite arithmétique de premier terme $u_0 = 8$ et de raison $r = 4$."
        },
        {
            q: "Lecture inverse : On te donne $u_n = 7 \\times 10^n$. Que peux-tu en déduire ?",
            options: [
                "C'est une suite géométrique avec $u_0 = 7$ et $q = 10$.",
                "C'est une suite arithmétique avec $u_0 = 7$ et $r = 10$.",
                "C'est une suite géométrique avec $u_0 = 10$ et $q = 7$.",
                "C'est une suite arithmétique avec $u_0 = 10$ et $r = 7$."
            ],
            correct: "C'est une suite géométrique avec $u_0 = 7$ et $q = 10$."
        },
        {
            q: "Déduction : Une suite commence par 2, 6, 18, 54... Trouve sa formule explicite.",
            options: ["$u_n = 2 \\times 3^n$", "$u_n = 2 + n \\times 4$", "$u_n = 3 \\times 2^n$", "$u_n = 2 \\times 4^n$"],
            correct: "$u_n = 2 \\times 3^n$"
        },
        {
            q: "Déduction : Une suite commence par 20, 15, 10, 5... Trouve sa formule explicite.",
            options: ["$u_n = 20 - 5 \\times n$", "$u_n = 20 \\times 0,5^n$", "$u_n = 20 + 5 \\times n$", "$u_n = -5 + 20 \\times n$"],
            correct: "$u_n = 20 - 5 \\times n$"
        },
        {
            q: "Attention au piège classique. Laquelle de ces écritures est mathématiquement FAUSSE pour une suite arithmétique ?",
            options: ["$u_{n+1} = u_0 + n \\times r$", "$u_n = u_0 + n \\times r$", "$u_{n+1} = u_n + r$", "$u_n = u_0 + r \\times n$"],
            correct: "$u_{n+1} = u_0 + n \\times r$"
        },
        {
            q: "Si je sais que $u_n = 5 \\times 2^n$, quelle opération dois-je faire pour calculer $u_{10}$ ?",
            options: ["Je calcule $5 \\times 2^{10}$", "Je calcule $5 \\times 20$", "Je calcule $10^{10}$", "Je fais $5 + 10 \\times 2$"],
            correct: "Je calcule $5 \\times 2^{10}$"
        }
    ]
};