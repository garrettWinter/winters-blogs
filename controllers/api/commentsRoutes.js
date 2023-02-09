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

  console.log("about to parse the req from comments post");
  console.log(req.body.comment); // This is the comment
  console.log(req.session.user_id); // This get the user ID
  console.log(req.headers.referer);

  // Creating a new comment a book
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