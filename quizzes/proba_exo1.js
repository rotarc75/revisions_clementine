var currentQuizData = {
    type: "exercice",
    title: "Exercice Classique - Habitudes de Streaming",
    enonce: `
        <p>Une plateforme de streaming étudie les profils de ses abonnés. Les données montrent que :</p>
        <ul>
            <li>$60\\%$ des abonnés ont un compte "Premium", les autres ont un compte "Standard".</li>
            <li>Parmi les abonnés "Premium", $70\\%$ regardent des séries d'animation.</li>
            <li>Parmi les abonnés "Standard", $30\\%$ regardent des séries d'animation.</li>
        </ul>
        <p>On choisit un abonné au hasard. On note :</p>
        <ul>
            <li>$P$ : "l'abonné a un compte Premium"</li>
            <li>$S$ : "l'abonné a un compte Standard"</li>
            <li>$A$ : "l'abonné regarde des séries d'animation"</li>
        </ul>
        <hr style="margin: 20px 0; border: 1px solid #eee;">
        <p><strong>Questions à traiter sur votre copie (rappel : utilisez les décimales, tirez tout droit pour multiplier) :</strong></p>
        <ol>
            <li>Traduire l'énoncé en construisant un arbre de probabilités pondéré (avec des nombres décimaux).</li>
            <li>Donner, en lisant l'énoncé, la probabilité $P(P)$ et la probabilité conditionnelle $P_S(A)$.</li>
            <li>Calculer la probabilité que l'abonné ait un compte Premium ET regarde de l'animation.</li>
            <li>Démontrer, en appliquant la formule des probabilités totales, que la probabilité qu'un abonné regarde de l'animation est $P(A) = 0,54$.</li>
            <li>Calculer la probabilité de l'événement $P \\cup A$.</li>
            <li>On interroge un abonné qui regarde de l'animation. Quelle est la probabilité qu'il possède un compte Premium ? (Donner le calcul sous forme de fraction, sans simplifier).</li>
            <li>Les événements $P$ et $A$ sont-ils indépendants ? Justifiez rigoureusement par le calcul.</li>
        </ol>
        <p style="color: #e74c3c; font-weight: bold; margin-top: 20px;">
            ⚠️ Prends ton temps, applique les règles du tableau et de l'arbre. Une fois terminé, prends ta copie en photo et envoie-la directement au professeur.
        </p>
    `
};