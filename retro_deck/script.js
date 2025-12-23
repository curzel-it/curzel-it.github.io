// Constants
const CARD_ANIMATION_DURATION = 3000; // Must match CSS animation duration (3s)
const CARD_ANIMATION_BUFFER = 200; // Small buffer after animation completes
const TITLE_TRANSITION_DURATION = 200; // Must match CSS transition duration (0.2s)

// Deep quotes for the final state
const FINAL_QUOTES = [
    "The cards have spoken. Your journey through time reveals the path ahead.",
    "Past, present, and future converge in this moment of understanding.",
    "What was, what is, and what will be - all threads in the tapestry of your fate.",
    "The wisdom of the cards illuminates your path through the shadows of uncertainty.",
    "Three cards, three truths. The universe has shared its secrets with you."
];

// State machine
const States = {
    READY: 'ready',
    DRAWING_PAST: 'drawing_past',
    READING_PAST: 'reading_past',
    DRAWING_PRESENT: 'drawing_present',
    READING_PRESENT: 'reading_present',
    DRAWING_FUTURE: 'drawing_future',
    READING_FUTURE: 'reading_future',
    READING_SUMMARY: 'reading_summary'
};

// State
let currentState = States.READY;
let drawnCards = [];
let fullDeck = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeDeck();
    setupEventListeners();
    moveFAQSection(States.READY); // Show FAQ on initial load
});

function initializeDeck() {
    // Use the tarotCards array from tarotCards.js
    fullDeck = [...tarotCards];
}

function setupEventListeners() {
    document.getElementById('begin-btn').addEventListener('click', startReading);
    document.getElementById('next-btn').addEventListener('click', handleNext);
    document.getElementById('restart-btn').addEventListener('click', restart);

    // Shop buttons - disabled for "Coming Soon"
    // document.querySelectorAll('#ready-shop-btn, #shop-btn').forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         window.open('https://www.etsy.com/shop/bittherapy', '_blank');
    //     });
    // });
}

function startReading() {
    // Shuffle deck and draw 3 cards
    const shuffled = shuffleDeck();
    drawnCards = [];

    for (let i = 0; i < 3; i++) {
        const card = shuffled[i];
        const reversed = false; // All cards upright
        drawnCards.push({ ...card, reversed });
    }

    // Move to drawing past state
    setState(States.DRAWING_PAST);
}

function handleNext() {
    switch (currentState) {
        case States.READING_PAST:
            setState(States.DRAWING_PRESENT);
            break;
        case States.READING_PRESENT:
            setState(States.DRAWING_FUTURE);
            break;
        case States.READING_FUTURE:
            setState(States.READING_SUMMARY);
            break;
    }
}

function setState(newState) {
    currentState = newState;

    // Update title based on state
    updateTitle(newState);

    // Hide all sections
    document.getElementById('ready-state').classList.add('hidden');
    document.getElementById('drawing-state').classList.add('hidden');
    document.getElementById('reading-state').classList.add('hidden');
    document.getElementById('complete-state').classList.add('hidden');

    // Move FAQ section to appropriate container
    moveFAQSection(newState);

    switch (newState) {
        case States.READY:
            document.getElementById('ready-state').classList.remove('hidden');
            break;

        case States.DRAWING_PAST:
            showDrawingState('about your past...', drawnCards[0], States.READING_PAST);
            break;

        case States.READING_PAST:
            showReadingState(
                drawnCards[0],
                'This card represents your PAST. The foundation upon which your present stands.',
                'Are you ready to know more about the present?',
                'past'
            );
            break;

        case States.DRAWING_PRESENT:
            showDrawingState('about your present...', drawnCards[1], States.READING_PRESENT);
            break;

        case States.READING_PRESENT:
            showReadingState(
                drawnCards[1],
                'This card represents your PRESENT. The moment you inhabit now.',
                'Are you ready to glimpse your future?',
                'present'
            );
            break;

        case States.DRAWING_FUTURE:
            showDrawingState('about your future...', drawnCards[2], States.READING_FUTURE);
            break;

        case States.READING_FUTURE:
            showReadingState(
                drawnCards[2],
                'This card represents your FUTURE. The path that awaits you.',
                'Are you ready to see your complete journey?',
                'future'
            );
            break;

        case States.READING_SUMMARY:
            showCompleteState();
            break;
    }
}

function showDrawingState(text, card, nextState) {
    const section = document.getElementById('drawing-state');
    const textEl = document.getElementById('drawing-text');
    const cardContainer = document.getElementById('card-container');

    section.classList.remove('hidden');
    cardContainer.classList.remove('hidden');
    textEl.textContent = text;

    // Create animated card
    cardContainer.innerHTML = '';
    cardContainer.className = 'card-animating';
    const cardEl = createCard(card);
    cardEl.classList.add('animated-card');
    cardContainer.appendChild(cardEl);

    // After animation, move to next state
    setTimeout(() => {
        // Switch to resting state (no animation class)
        cardContainer.className = 'card-resting';
        setState(nextState);
    }, CARD_ANIMATION_DURATION + CARD_ANIMATION_BUFFER);
}

function showReadingState(card, description, question, position) {
    const section = document.getElementById('reading-state');
    const textContainer = document.getElementById('reading-text');

    section.classList.remove('hidden');

    // Get the appropriate meaning based on orientation and position
    const orientation = card.reversed ? 'reversed' : 'upright';
    const meanings = card.meanings[orientation];
    const positionMeaning = meanings[position] || meanings.general;

    // Card is already visible from drawing state, just update text
    textContainer.innerHTML = `
        <p class="reading-description">${description}</p>
        <p class="reading-meaning">${positionMeaning}</p>
        <p class="reading-question">${question}</p>
    `;
}

function showCompleteState() {
    const section = document.getElementById('complete-state');
    const cardsContainer = document.getElementById('all-cards');
    const quoteEl = document.getElementById('final-quote');
    const cardContainer = document.getElementById('card-container');

    section.classList.remove('hidden');
    cardContainer.classList.add('hidden');

    // Show all three cards
    cardsContainer.innerHTML = '';
    const labels = ['PAST', 'PRESENT', 'FUTURE'];
    drawnCards.forEach((card, i) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'card-wrapper';

        const cardEl = createCard(card);
        cardEl.classList.add('flipped');
        wrapper.appendChild(cardEl);

        const label = document.createElement('div');
        label.className = 'card-label';
        label.textContent = labels[i];
        wrapper.appendChild(label);

        cardsContainer.appendChild(wrapper);
    });

    // Show random quote
    const quote = FINAL_QUOTES[Math.floor(Math.random() * FINAL_QUOTES.length)];
    quoteEl.textContent = `"${quote}"`;
}

function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'card';

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    const back = document.createElement('div');
    back.className = 'card-face card-back pixelated';

    const front = document.createElement('div');
    front.className = 'card-face card-front';
    if (cardData.reversed) {
        front.classList.add('reversed');
    }

    const img = document.createElement('img');
    img.src = getCardImagePath(cardData);
    img.alt = cardData.name;
    img.className = 'pixelated';

    // Fallback if image doesn't load
    img.onerror = () => {
        front.innerHTML = `<div class="card-error">${cardData.name}</div>`;
    };

    front.appendChild(img);
    inner.appendChild(back);
    inner.appendChild(front);
    card.appendChild(inner);

    return card;
}

function getCardImagePath(cardData) {
    return `cards/${cardData.cardName}.png`;
}

function shuffleDeck() {
    const shuffled = [...fullDeck];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function updateTitle(state) {
    const h1 = document.querySelector('h1');
    let newTitle;

    switch (state) {
        case States.READY:
            newTitle = 'PIXEL TAROT';
            break;
        case States.DRAWING_PAST:
        case States.READING_PAST:
            newTitle = 'ABOUT YOUR PAST...';
            break;
        case States.DRAWING_PRESENT:
        case States.READING_PRESENT:
            newTitle = 'ABOUT THE PRESENT...';
            break;
        case States.DRAWING_FUTURE:
        case States.READING_FUTURE:
            newTitle = 'ABOUT YOUR FUTURE...';
            break;
        case States.READING_SUMMARY:
            newTitle = 'PAST, PRESENT AND FUTURE';
            break;
    }

    // Only animate if the title is actually changing
    if (h1.textContent !== newTitle) {
        h1.style.opacity = '0';
        setTimeout(() => {
            h1.textContent = newTitle;
            h1.style.opacity = '1';
        }, TITLE_TRANSITION_DURATION);
    }
}

function restart() {
    drawnCards = [];
    const cardContainer = document.getElementById('card-container');
    cardContainer.classList.add('hidden');
    cardContainer.innerHTML = '';
    setState(States.READY);
}

function moveFAQSection(state) {
    const faqSection = document.getElementById('faq-section');

    // Remove from current location
    if (faqSection.parentNode) {
        faqSection.style.display = 'none';
    }

    // Move to appropriate container based on state
    if (state === States.READY) {
        const container = document.getElementById('ready-faq-container');
        container.appendChild(faqSection);
        faqSection.style.display = 'block';
    } else if (state === States.READING_SUMMARY) {
        const container = document.getElementById('complete-faq-container');
        container.appendChild(faqSection);
        faqSection.style.display = 'block';
    }
}
