const { Post } = require('../models');

const postData = [
    { title: 'Hello World!', content: 'This is my first post.', user_id: 1 },
    { title: 'Introduction', content: 'Welcome to my blog.', user_id: 2 },
    { title: 'JavaScript Tips', content: 'Here are some useful JavaScript tips.', user_id: 3 }
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;