function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMoleAppearanceInterval(min, max) {
    return getRandomInt(min, max);
}

function calculateScore(currentScore, increment) {
    return currentScore + increment;
}

export { getRandomInt, generateMoleAppearanceInterval, calculateScore };