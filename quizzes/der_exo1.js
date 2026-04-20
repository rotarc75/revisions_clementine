var currentQuizData = {
    type: "exercice",
    title: "Entraînement Intensif : Calcul de dérivées",
    enonce: `
        <p>Pour chaque fonction ci-dessous, déterminez l'expression de la fonction dérivée $f'$ sur l'ensemble de dérivabilité donné.
        <strong>Rappel de méthode :</strong> Identifiez d'abord s'il s'agit d'une somme, d'un produit ou d'un quotient, puis faites votre tableau $u, v, u', v'$.</p>

        <div style="background: #fdfdfd; padding: 20px; border-left: 4px solid #4f46e5; margin: 20px 0;">
            <p><strong>Série A : Formes de base</strong></p>
            <ul>
                <li>1. $f(x) = 7x^4 - 2x^3 + 5x - 11$</li>
                <li>2. $g(x) = \\frac{4}{x} + 2\\sqrt{x}$</li>
                <li>3. $h(x) = x^5 - \\frac{1}{x^2}$</li>
            </ul>

            <p><strong>Série B : Produits et Quotients</strong></p>
            <ul>
                <li>4. $k(x) = (3x - 5)\\sqrt{x}$</li>
                <li>5. $l(x) = x^2(4x^3 - 1)$</li>
                <li>6. $m(x) = \\frac{2x + 7}{3x - 4}$</li>
                <li>7. $n(x) = \\frac{x^2 - 5}{x + 1}$</li>
            </ul>

            <p><strong>Série C : Perfectionnement</strong></p>
            <ul>
                <li>8. $p(x) = \\frac{\\sqrt{x}}{x}$ (Indice : simplifiez d'abord si possible ou utilisez le quotient)</li>
                <li>9. $q(x) = \\frac{1}{x^2 + x + 1}$</li>
                <li>10. $r(x) = x\\sqrt{x}$</li>
            </ul>
        </div>

        <p style="color: #e74c3c; font-weight: bold;">
            Consigne : Effectuez ces calculs sur une feuille de brouillon. Ne cherchez pas à simplifier les résultats des produits et quotients au maximum, l'important est d'appliquer la formule correctement.
        </p>
    `
};