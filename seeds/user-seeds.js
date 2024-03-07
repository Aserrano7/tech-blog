const { User } = require('../models');

const userData = [
    { username: 'john_doe', password: 'password123' },
  { username: 'jane_smith', password: 'securepass' },
  { username: 'bob_jackson',password: '12345678' }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;