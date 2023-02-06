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
        res.render('homepage', {
            blogPosts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET Dashboard Route

router.get('/dashboard', async (req, res) => {
    console.log(req.session.loggedIn);
    if (!req.session.loggedIn) { 
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
            });
            const dashBoard = dbdDashBoard.map((Posts) =>
                Posts.get({ plain: true })
            );
            res.render('dashboard', {
                dashBoard,
                loggedIn: req.session.loggedIn,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

//GET Posts by ID Route

router.get('/posts/:id', async (req, res) => {
        try {
            const postsData = await Posts.findAll({
                include: [
                    {
                        model: Users, ////// Need to add a exclude on password
                    },
                    {
                        model: Comments,
                    },
                ],
                where: {post_id: req.params.id}
            });
            const commentsData = await Comments.findAll({
                include: [
                    {
                        model: Users, ////// Need to add a exclude on password
                    },
                    {
                        model: Posts,
                    },
                ],
                where: {post_id: req.params.id}
            });
            const postDetails = postsData.map((posts) =>
                posts.get({ plain: true })
            );
            const commentDetails = commentsData.map((comments) =>
            comments.get({ plain: true })
        );
            console.log(postDetails);
            console.log(commentDetails);
            
            res.render('posts', {
                postDetails,
                commentDetails,
                loggedIn: req.session.loggedIn,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
);

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