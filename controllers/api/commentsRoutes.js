const router = require('express').Router();
const { Comments } = require('../../models');

// CREATE new comment
router.post('/new', (req, res) => {
  let url = req.headers.referer;
  let split = url.split('/');

  const parsedComment = {
    comment_user_id: req.session.user_id,
    post_id: split.pop(),
    comment: req.body.comment
  };
  console.log(parsedComment);

  // Creating a new comment
  Comments.create(parsedComment)
    .then((newComment) => {
      res.status(200).json(newComment);
      console.log(newComment);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;