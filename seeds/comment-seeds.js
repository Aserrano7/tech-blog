const { Comment } = require('../models');

const commentData = [
    { comment_text: 'Great post!', user_id: 2, post_id: 1 },
    { comment_text: 'Looking forward to more content.', user_id: 3, post_id: 2 },
    { comment_text: 'Thanks for sharing!', user_id: 1, post_id: 3 }
];
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;