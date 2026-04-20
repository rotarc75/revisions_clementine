var currentQuizData = {
    title: "Probabilités Totales - Niveau 1",
    questions: [
        {
            q: "On considère l'arbre suivant commençant par un nœud principal :<br><pre>  /-- A  (P = 0,6)<br>*<br>  \\-- B  (P = 0,5)</pre><br>Que peut-on dire de cette modélisation ?",
            options: [
                "L'arbre est faux car la somme des probabilités issues du nœud dépasse 1.",
                "L'arbre est juste, il est possible d'avoir P(A)=0,6 et P(B)=0,5.",
                "L'arbre est faux car 0,6 et 0,5 ne sont pas des fractions.",
                "L'arbre est juste mais incomplet."
            ],
            correct: "L'arbre est faux car la somme des probabilités issues du nœud dépasse 1."
        },
        {
            q: "Quelle est l'expression mathématique stricte de la formule des probabilités totales pour un événement $D$, avec une partition $A$ et $B$ ?",
            options: [
                "$P(D) = P(A \\cap D) + P(B \\cap D)$",
                "$P(D) = P(A \\cup D) + P(B \\cup D)$",
                "$P(D) = P_A(D) + P_B(D)$",
                "$P(D) = P(A) \\times P_A(D)$"
            ],
            correct: "$P(D) = P(A \\cap D) + P(B \\cap D)$"
        },
        {
            q: "Dans un arbre, on a calculé les extrémités suivantes : $P(A \\cap M) = 0,15$ et $P(\\overline{A} \\cap M) = 0,35$. Que vaut la probabilité totale $P(M)$ ?",
            options: ["0,50", "0,20", "0,0525", "0,15"],
            correct: "0,50"
        },
        {
            q: "On sait que $P(G) = 0,4$. L'événement $G$ est séparé en deux sous-événements : $P(F \\cap G) = 0,1$. Que vaut l'autre partie $P(\\overline{F} \\cap G)$ d'après la formule des probabilités totales ?",
            options: ["0,3", "0,5", "0,04", "0,4"],
            correct: "0,3"
        },
        {
            q: "Observez ce chemin d'arbre :<br><pre>A (0,4) --- M (0,2)</pre><br>La valeur 0,2 inscrite sur la deuxième branche représente :",
            options: [
                "La probabilité conditionnelle $P_A(M)$",
                "L'intersection $P(A \\cap M)$",
                "La probabilité totale $P(M)$",
                "La probabilité $P_M(A)$"
            ],
            correct: "La probabilité conditionnelle $P_A(M)$"
        },
        {
            q: "Pour calculer une probabilité totale, on utilise l'arbre pondéré en :",
            options: [
                "Additionnant les résultats de tous les chemins (les intersections) qui se terminent par l'événement cherché.",
                "Multipliant toutes les branches de l'arbre entre elles.",
                "Additionnant les probabilités conditionnelles à la fin de l'arbre.",
                "Multipliant le premier événement par le dernier événement."
            ],
            correct: "Additionnant les résultats de tous les chemins (les intersections) qui se terminent par l'événement cherché."
        },
        {
            q: "Un usine a trois machines A, B et C. Pour calculer la probabilité totale qu'une pièce soit défectueuse (D), il faut :",
            options: [
                "$P(A \\cap D) + P(B \\cap D) + P(C \\cap D)$",
                "$P_A(D) + P_B(D) + P_C(D)$",
                "$P(A) \\times P(B) \\times P(C) \\times P(D)$",
                "$P(D \\cap A) + P(B \\cap C)$"
            ],
            correct: "$P(A \\cap D) + P(B \\cap D) + P(C \\cap D)$"
        },
        {
            q: "Calculez la probabilité totale $P(R)$ sachant que :<br>$P(E)=0,5$<br>$P_E(R)=0,2$<br>$P(\\overline{E} \\cap R)=0,4$",
            options: ["0,5", "0,6", "0,1", "0,2"],
            correct: "0,5"
        },
        {
            q: "Dans la formule $P(S) = P(A \\cap S) + P(B \\cap S)$, que peut-on affirmer sur les événements $A$ et $B$ ?",
            options: [
                "Ils forment une partition de l'univers (ils ne peuvent pas se produire en même temps et couvrent tous les cas).",
                "Ils sont indépendants.",
                "Leur intersection est égale à 1.",
                "Ils sont incompatibles avec S."
            ],
            correct: "Ils forment une partition de l'univers (ils ne peuvent pas se produire en même temps et couvrent tous les cas)."
        },
        {
            q: "Une erreur classique consiste à écrire $P(B) = P_A(B) + P_{\\overline{A}}(B)$. Pourquoi est-ce faux ?",
            options: [
                "Parce qu'il faut additionner les intersections, et non les probabilités conditionnelles.",
                "Parce qu'il faut multiplier les probabilités conditionnelles.",
                "Parce qu'on a oublié de soustraire $P(A \\cap B)$.",
                "Ce n'est pas faux, c'est la loi des probabilités totales."
            ],
            correct: "Parce qu'il faut additionner les intersections, et non les probabilités conditionnelles."
        }
    ]
};