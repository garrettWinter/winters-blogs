const router = require('express').Router();
const { Comments, Posts, Users } = require('../models');

//GET Homepage Route to render the homepage

router.get('/', async (req, res) => {
    try {
        const dbblogPosts = await Posts.findAll({
            include: [
                {
                    model: Users,
                    attributes: {
                        // Making it so the passoword field is not included in the results
                        exclude: ['password']
                    }
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

//GET Dashboard Route to render the main dashboard page

router.get('/dashboard', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const dbblogPosts = await Posts.findAll({
                include: [
                    {
                        model: Users,
                        attributes: {
                            // Making it so the passoword field is not included in the results
                            exclude: ['password']
                        }
                    },
                ],
                where: {
                    post_user_id: req.session.user_id,
                },
            });
            const blogPosts = dbblogPosts.map((Posts) =>
                Posts.get({ plain: true })
            );
            res.render('dashboard', {
                blogPosts,
                loggedIn: req.session.loggedIn,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

//GET Dashboard Route to render a specific post page
router.get('/dashboard/post/:id', async (req, res) => {
    try {
        const postsData = await Posts.findAll({
            include: [
                {
                    model: Users,
                    attributes: {
                        // Making it so the passoword field is not included in the results
                        exclude: ['password']
                    }
                },
            ],
            where: { post_id: req.params.id }
        });
        const postDetails = postsData.map((posts) =>
            posts.get({ plain: true })
        );
        res.render('editPost', {
            postDetails,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
);

//GET Posts by ID Route to allow users to add comments to existing posts

router.get('/posts/:id', async (req, res) => {
    try {
        const postsData = await Posts.findAll({
            include: [
                {
                    model: Users,
                    attributes: {
                        // Making it so the passoword field is not included in the results
                        exclude: ['password']
                    }
                },
                {
                    model: Comments,
                },
            ],
            where: { post_id: req.params.id }
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
            where: { post_id: req.params.id }
        });
        const postDetails = postsData.map((posts) =>
            posts.get({ plain: true })
        );
        const commentDetails = commentsData.map((comments) =>
            comments.get({ plain: true })
        );

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
router.get('/dashboard/posts/new', async (req, res) => {
    try {
        res.render('newPost', {
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
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