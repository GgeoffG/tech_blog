const { Blogpost } = require("../models");

const blogData = [
  {
    title: "Why Javascript is so cool",
    main: "Javascript helps the user interface with your application, without it you wouldnt be able to do anything cool",
    user_id: 1,
  },
  {
    title: "How seeding helps test databases",
    main: "While you can manually build databases with individual inputs, seeding allows you to build one up quickly with one input.",
    user_id: 2,
  },
  {
    title: "Coding is just the best",
    main: "I just love coding so much, you can build so many cool things inside of a computer with some coding knowledge.",
    user_id: 3,
  },
];

const seedBlogpost = () => Blogpost.bulkCreate(blogData);

module.exports = seedBlogpost;
