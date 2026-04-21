document.addEventListener('DOMContentLoaded', () => {
    showCategories();
});

function showCategories() {
    const grid = document.getElementById('quiz-grid');
    grid.innerHTML = '';
    document.getElementById('home').classList.remove('hidden');
    document.getElementById('quiz-view').classList.add('hidden');

    CONFIG.categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `<div style="font-size: 2rem">${cat.icon}</div><h3>${cat.title}</h3><p>${cat.quizzes.length} module(s)</p>`;
        card.onclick = () => showQuizList(cat);
        grid.appendChild(card);
    });
}

function showQuizList(category) {
    const grid = document.getElementById('quiz-grid');
    grid.innerHTML = '';

    // Bouton de retour vers le menu principal
    const backBtn = document.createElement('div');
    backBtn.className = 'quiz-card';
    backBtn.style.borderColor = "#ddd";
    backBtn.innerHTML = `<h3>← Retour aux thèmes</h3>`;
    backBtn.onclick = showCategories;
    grid.appendChild(backBtn);

    category.quizzes.forEach(q => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `<h3>${q.title}</h3><p>Commencer</p>`;
        card.onclick = () => startQuiz(q);
        grid.appendChild(card);
    });
}

function startQuiz(quizInfo) {
    const script = document.createElement('script');
    script.src = quizInfo.file;
    script.onload = () => displayQuiz(currentQuizData);
    script.onerror = () => alert("Erreur de chargement. Vérifiez les fichiers.");
    document.body.appendChild(script);
}

// Nouvelle fonction de retour sécurisée
function goBackToQuizList() {
    document.getElementById('quiz-view').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}

function displayQuiz(data) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('quiz-view').classList.remove('hidden');
    document.getElementById('quiz-title').innerText = data.title;

    const area = document.getElementById('questions-area');
    area.innerHTML = '';
    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');

    // On efface l'ancien score s'il y en avait un
    const oldScore = document.getElementById('score-display');
    if (oldScore) oldScore.remove();

    // Cas 1 : Exercice classique
    if (data.type === "exercice") {
        area.innerHTML = `<div class="question-block" style="font-size: 1.1rem;">${data.enonce}</div>`;
        submitBtn.innerText = "J'ai terminé";
        submitBtn.style.display = "block";
        form.onsubmit = (e) => {
            e.preventDefault();
            goBackToQuizList(); // Retour au menu du thème
        };
    }
    // Cas 2 : QCM normal
    else {
        submitBtn.innerText = "Correction";
        submitBtn.style.display = "block";

        data.questions.forEach((q, i) => {
            const block = document.createElement('div');
            block.className = 'question-block';

            const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
            shuffledOptions.push("Je ne sais pas");

            block.innerHTML = `
                <p class="question-text"><strong>${i+1}.</strong> ${q.q}</p>
                <div class="options">
                    ${shuffledOptions.map(opt => `
                        <label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>
                    `).join('')}
                </div>
                <div id="feedback-q${i}" style="margin-top: 15px; font-weight: bold;" class="hidden"></div>
            `;
            area.appendChild(block);
        });
        form.onsubmit = submitQuizForm;
    }

    if (window.MathJax) MathJax.typesetPromise();
}

async function submitQuizForm(e) {
    e.preventDefault();
    const studentName = "Clémentine";
    let score = 0;
    let correctionDetails = `Copie de ${studentName}\nSujet: ${currentQuizData.title}\n\n`;

    currentQuizData.questions.forEach((qObj, index) => {
        const selectedRadio = document.querySelector(`input[name="q${index}"]:checked`);
        const selectedOption = selectedRadio ? selectedRadio.value : "Aucune réponse";
        const isCorrect = (selectedOption === qObj.correct);

        if (isCorrect) score++;

        const feedbackDiv = document.getElementById(`feedback-q${index}`);
        feedbackDiv.classList.remove('hidden');
        if (isCorrect) {
            feedbackDiv.innerHTML = `<span style="color: #27ae60;">✓ Excellente réponse !</span>`;
        } else {
            feedbackDiv.innerHTML = `<span style="color: #e74c3c;">✗ Attention. La bonne réponse était : ${qObj.correct}</span>`;
        }

        // On bloque les cases à cocher
        document.querySelectorAll(`input[name="q${index}"]`).forEach(r => r.disabled = true);

        correctionDetails += `Q${index + 1}: ${qObj.q}\nRéponse choisie : ${selectedOption} -> ${isCorrect ? "VRAI" : "FAUX"}\n\n`;
    });

    correctionDetails += `SCORE FINAL : ${score} / ${currentQuizData.questions.length}\n`;

    // Cacher le bouton "Correction"
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.style.display = 'none';

    // Afficher le score et le bouton de retour au menu
    const scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'score-display'; // Identifiant pour le nettoyer plus tard
    scoreDisplay.innerHTML = `<div style="text-align: center; margin: 20px 0; padding: 20px; background: #eef2ff; border-radius: 10px;">
        <h2 style="color: #4f46e5; margin: 0;">Score : ${score} / ${currentQuizData.questions.length}</h2>
        <button type="button" onclick="goBackToQuizList()" class="btn-primary" style="margin-top: 15px; width: auto;">Retour aux exercices</button>
    </div>`;
    document.getElementById('quiz-form').appendChild(scoreDisplay);

    if (window.MathJax) MathJax.typesetPromise();

    // Envoi silencieux par mail
    const formData = new FormData();
    formData.append("Nom", studentName);
    formData.append("Sujet", currentQuizData.title);
    formData.append("Score", `${score} / ${currentQuizData.questions.length}`);
    formData.append("Détail", correctionDetails);

    fetch(CONFIG.formspree_url, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } }).catch(() => console.log("Erreur réseau silencieuse"));
}