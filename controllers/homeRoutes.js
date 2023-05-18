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
    const blog = blogPostData.map((blogpost) => blogpost.get({ plain: true }));
    console.log(blog.comments);
    res.render("homepage", {
      blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ["password"] },
        include: [
          {
            model: Blogpost,
          },
        ],
      });
      console.log(req.session.user_id);
      const user = userData.get({ plain: true });
      console.log(user);
      res.render("dashboard", {
        user,
        logged_in: true,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

router.get("/login", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/dashboard");
      return;
    }
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blog/:id", async (req, res) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    try {
      const blogData = await Blogpost.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ["name"],
          },

          {
            model: Comment,
            include: [{ model: User, attributes: ["name"] }],
          },
        ],
      });
      const blog = blogData.get({ plain: true });
      console.log(blog);
      res.render("blogpost", {
        blog,
        logged_in: true,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
