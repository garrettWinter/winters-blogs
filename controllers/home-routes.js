const router = require('express').Router();
const { Comments, Posts, Users } = require('../models');

//GET Homepage

router.get('/', async (req, res) => {
    try {
        const dbblogPosts = await Posts.findAll({
            include: [
                {
                    model: Comments, Users,
                    attributes: ['post_title', 'post_body', 'user_name'],
                },
            ],
        });

        const blogPosts = dbblogPosts.map((Posts) =>
            Posts.get({ plain: true })
        );
        res.render('homepage', {
            blogPosts,
            // loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;