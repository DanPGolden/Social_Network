const names = [
    'Robert',
    'Mary',
    'Jen',
    'Asher',
    
]

const thoughts = [
    'This class is driving me crazy',
    'I think Ill go on vacation in June',
    'Would like a new car',
    'The dogs are barking too loud!',
    'Will have Italian food for dinner',
    'Feeling very tired',
]

// Get a random item
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random name
const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;


// Function to generate random thoughts
const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtName: getRandomArrItem(thoughts),
        });
    }
    return results;
};


module.exports = { getRandomName, getRandomThought };