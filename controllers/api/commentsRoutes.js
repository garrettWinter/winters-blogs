const router = require('express').Router();
const { Comments } = require('../../models');

// CREATE new comment
router.post('/new', (req, res) => {
    console.log(req.session)
    // Comments.create({
    //     post_id: TBD,
    //     comment_user_id: req.session.user_id,
    //     comment: TBD,
    // })
    //   .then((newComment) => res.status(200).json(newComment))
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(400).json(err);
    //   });
  });




  module.exports = router;