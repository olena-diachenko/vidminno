const complexityTemplate = {
    easy: 50,
    medium: 75,
    hard: 100,
};

const getComplexity = value => {
    let level = null;
    if (value <= complexityTemplate.easy) {
        level = 'Easy';
    }
    if (value <= complexityTemplate.medium && value > complexityTemplate.easy) {
        level = 'Medium';
    }
    if (value <= complexityTemplate.hard && value > complexityTemplate.medium) {
        level = 'Hard';
    }
    return level;
};

export default getComplexity;
