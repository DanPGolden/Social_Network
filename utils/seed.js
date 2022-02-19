const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log('connected');

    // Drop existing Thoughts
    await Thought.deleteMany({});

    // Drop existing users
    await User.deleteMany({});

    // Create an array of usernames/emails
    const users = [{
            username: "Dan",
            email: "berrytube@comcast.net"
        },
        {
            username: "happy",
            email: "happyboyz@aol.com"
        }
    ];

    //create an array of thoughts/usernames
    const thoughts = [{
            thoughtText: "Who opened the door?",
            username: "Mary"
        },
        {
            thoughtText: "Who let the cat in?",
            username: "Asher"
        }
    ]

    // Add usernames to the collection and await the results
    await User.collection.insertMany(users);

    // Add thoughts to the collection and await the results
    await Thought.collection.insertMany(thoughts);

    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
