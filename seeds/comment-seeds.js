const { Comment } = require("../models");

const commentData = [
  {
    text: "This is such a good post",
    user_id: 2,
    blogpost_id: 1,
  },
  {
    text: "I could not agree more!",
    user_id: 1,
    blogpost_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
