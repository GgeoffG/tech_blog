const router = require("express").Router();
const { Blogpost } = require("../../models");
const withAuth = require("../../utils/auth");
router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogData = await Blogpost.create({
      main: req.body.main,
      title: req.body.title,
      date: req.body.createdAt,
    });
    res.status(200).json(newBlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Blogpost.findAll();
    res.status(200).json(err);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dbBlogData = await Blogpost.findByPk(req.params.id);

    if (!dbBlogData) {
      res.status(404).json({ message: "No Blogs match that id!" });
      return;
    }
    res.status(200).json(dbBlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateBlog = await Blogpost.update(
      {
        main: req.body.main,
        title: req.body.main,
        //   updatedAt: req.body.updatedAt
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    await Blogpost.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "successfully deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
