const Users = require('./Users');
const Comments = require('./Comments');
const Posts = require('./Posts');



// Posts to Users table assosications to connent a User to a Post

Users.hasMany(Posts, {
    foreignKey: "user_id",
});
Posts.belongsTo(Users, {
    foreignKey: "post_user_id",
});

// Comments to Users table assosications to connent a User to a Comment
Users.hasMany(Comments, {
    foreignKey: "comment_user_id",
});


// Posts to Comments table assosications to connect a post to a comment
Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
});
Posts.hasMany(Comments, {
    foreignKey: "post_id",
});

// Comments to User table assosications to connect a post to a comment
Comments.belongsTo(Users, {
    foreignKey: 'comment_user_id',
});
Users.hasMany(Comments, {
    foreignKey: "comment_user_id",
});


module.exports = { Users, Comments, Posts };