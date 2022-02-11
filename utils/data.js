const names = [
    'Quintin',
    'Elvia',
    'Mazie',
    'Rikki',
    'Amie',
    'Renate',
    'Talitha',
    'Tawny',
    'Gudrun',
    'Zora',
    'Veola',
    'Neila',
    'Shantelle',
    'Nicky',
    'Luna',
    'Biggs',
    'Beebo'
]

const thoughts = [
    'One frog, two frog, three frog, four',
    'I could eat Asian food everyday',
    'You should stay home if you are sick',
    'Plain glazed donuts are the superior donut',
    'Your undergraduate degree does not matter',
    'LOST DOG! Last seen on the corner of Boston and Taylor',
    'All of you people complain about the homeless, but none of you are upset at the system that made them homeless. Make it make sense!',
    'DOG FOUND! Thank you to the kind neighbors who brought my baby back to me!',
    'Tired of your morning commute? Stay home instead. Never leave.',
    'FREE SAD LIGHTS FOR ALL OF SEATTLE'
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