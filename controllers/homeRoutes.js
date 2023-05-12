const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blogpost, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    console.log("inside try");
    const blogPostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          exclude: ["password"],
        },
        {
          model: Comment,
        },
      ],
    });
    console.log("19");
    const blog = blogPostData.get({ plain: true });
    console.log("21");
    res.render("homepage", {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Blogpost,
        },
        {
          model: Comment,
        },
      ],
    });
    const user = userData.get({ plain: true });
    console.log(userData);
    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/profile");
      return;
    }
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
