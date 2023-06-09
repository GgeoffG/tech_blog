const seedUsers = require("./user-seeds");
const seedComments = require("./comment-seeds");
const seedBlogpost = require("./blog-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedBlogpost();
  console.log("\n----- BLOGPOST SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
