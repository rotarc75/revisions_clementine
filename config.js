const CONFIG = {
    formspree_url: "https://formspree.io/f/mgorzbrk",
    categories: [
        {
            id: "probabilites",
            title: "Probabilités",
            icon: "🎲",
            quizzes: [
                { id: "proba_1", title: "Niveau 1 : Lecture d'arbre et intersections", file: "quizzes/probabilites1.js" },
                { id: "proba_2", title: "Niveau 2 : Conditionnelles et Indépendance", file: "quizzes/probabilites2.js" },
                { id: "exo_stream", title: "Exercice : Sujet Streaming", file: "quizzes/proba_exo1.js" },
            ]
        },
        {
            id: "derivees",
            title: "Dérivées",
            icon: "📈",
            quizzes: [
                { id: "derivees_base", title: "qcm 1", file: "quizzes/deriv1.js" },
                { id: "derivees_base", title: "qcm 2", file: "quizzes/deriv2.js" },
                { id: "derivees_base", title: "qcm 3", file: "quizzes/deriv3.js" },
                { id: "derivees_base", title: "qcm 4", file: "quizzes/deriv4.js" },
                { id: "derivees_base", title: "qcm 5", file: "quizzes/deriv5.js" },
                { id: "derivees_base", title: "Exercice 1", file: "quizzes/der_exo1.js" }
            ]
        },

        {
            id: "calculs_base",
            title: "Calculs de bases",
            icon: "🧮",
            quizzes: [
                { id: "frac1", title: "Fraction 1", file: "quizzes/fraction1.js" },
                { id: "frac2", title: "Fraction 2", file: "quizzes/fraction2.js" },
                { id: "frac3", title: "Fraction 3", file: "quizzes/fraction3.js" },
                { id: "frac4", title: "Fraction 4", file: "quizzes/fraction4.js" },
                { id: "frac5", title: "Fraction 5", file: "quizzes/fraction5.js" },
                { id: "frac6", title: "Fraction 6", file: "quizzes/fraction6.js" },
                { id: "frac7", title: "Fraction 7", file: "quizzes/fraction7.js" }

            ]
        },


        {
            id: "suite",
            title: "Suites",
            icon: "🔢",
            quizzes: [
                { id: "suite1", title: "Suites 1", file: "quizzes/suite1.js" },
                { id: "suite2", title: "Suites 2", file: "quizzes/suite2.js" },
                { id: "suite3", title: "Suites 3", file: "quizzes/suite3.js" },
                { id: "suite4", title: "Suites 4", file: "quizzes/suite4.js" },
                { id: "suite1", title: "Suites 5", file: "quizzes/suite5.js" },
                { id: "suite2", title: "Suites 6", file: "quizzes/suite6.js" },
                { id: "suite3", title: "Suites 7", file: "quizzes/suite7.js" },
                { id: "suite4", title: "Suites 8", file: "quizzes/suite8.js" },
                { id: "suite4", title: "Suites 9", file: "quizzes/suite9.js" },


            ]
        }




    ]
};