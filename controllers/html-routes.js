const router = require('express').Router();
const { Comments, Posts, Users } = require('../models');

//GET Homepage Route

router.get('/', async (req, res) => {
    try {
        const dbblogPosts = await Posts.findAll({
            include: [
                {
                    model: Users,
                },
            ],
        });
        const blogPosts = dbblogPosts.map((Posts) =>
            Posts.get({ plain: true })
        );
        // console.log(blogPosts[0].User.user_name);
        res.render('homepage', {
            blogPosts,
            // loggedIn: req.session.loggedIn, /////// What would this do if I enable?
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET Dashboard Route

router.get('/dashboard', async (req, res) => {
    if (req.session.loggedIn) { ///////////////////// took off the ! to make this not trigger
        res.redirect('/login');
    } else {
        try {
            const dbdDashBoard = await Posts.findAll({
                include: [
                    {
                        model: Users, ////// Need to add a exclude on password
                    },
                    {
                        model: Comments,
                    },
                ],
                // where: {user_id: req.sess.user_id} ////////// DONT THINK THIS IS RIGHT
            });
            const dashBoard = dbdDashBoard.map((Posts) =>
                Posts.get({ plain: true })
            );
            console.log(dashBoard)
            // console.log(blogPosts[0].User.user_name);
            res.render('dashboard', {
                dashBoard,
                // loggedIn: req.session.loggedIn,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

//GET Route for the Login in HTML page
router.get('/login', async (req, res) => {
    try {
        res.render('login', {
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET Route for the Sign up HTML page
router.get('/signup', async (req, res) => {
    try {
        res.render('signup', {
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;