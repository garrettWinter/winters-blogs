const router = require('express').Router();
const { Posts } = require('../../models');

// Route to create a new post
router.post('/new', (req, res) => {
  const parsedPost = {
    post_user_id: req.session.user_id,
    post_title: req.body.newPostDetails.post_title,
    post_body: req.body.newPostDetails.post_body
  };
  console.log(parsedPost);

  // Creating a new post in the DB
  Posts.create(parsedPost)
    .then((newPost) => {
      res.status(200).json(newPost);
      console.log(newPost);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Route to update an existing post
router.post('/update', (req, res) => {
  let url = req.headers.referer;
  let split = url.split('/');
  const parsedPostID = split.pop();

  Posts.update(
    {
      post_title: req.body.updatePostDetails.post_title,
      post_body: req.body.updatePostDetails.post_body
    },
    {
      where: {
        post_id: parsedPostID,
      },
    }
  )
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Route to update an existing post
router.delete('/delete', (req, res) => {
  let url = req.headers.referer;
  let split = url.split('/');
  const parsedPostID = split.pop();
  console.log("attempting to delete Post ID: " + parsedPostID);
  // Deleteing post from the DB
  Posts.destroy({
    where: {
      post_id: parsedPostID,
    },
  }
  )
    .then((deletedPost) => {
      res.json(deletedPost);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


module.exports = router;