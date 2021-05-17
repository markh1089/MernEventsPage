const Post = require("../models/post");
const slugify = require("slugify");

exports.create = (req, res) => {
  //console.log(req.body);

  const { title, content, user } = req.body;
  const slug = slugify(title);

  // if(!title || !content) {
  //     return res.status(400).json({
  //         error:'title & content is required'
  //     })
  // }
  // res.json({
  //     message:'see server console'
  // })
  switch (true) {
    case !title:
      return res.status(400).json({ error: "Title is required" });
      break;
    case !content:
      return res.status(400).json({ error: "content is required" });
      break;
  }
  Post.create({ title, content, user, slug }, (err, post) => {
    if (err) {
      console.log(err);
      res
        .status(400)
        .json({ error: "Duplicate title. Please try an alternate" });
    }
    res.json(post);
  });
};

exports.list = (req, res) => {
  Post.find({})
  .limit(10)
  .sort({createdAt: -1})
  .exec((err, posts) => {
    if (err) console.log(err);
    res.json(posts);
  });
};
exports.read = (req, res) => {
  const{slug}=req.params
  console.log(req.params.slug)

  Post.findOne({slug:slug})

  .exec((err, posts) => {
    if (err) console.log(err);
    res.json(posts);
  });
};
