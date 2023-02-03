const Users = require('./Users');
const Comments = require('./Comments');
const Posts = require('./Posts');



// Posts to Users table assosications to connent a User to a Post
Posts.belongsTo(Users, {
    foreignKey: 'user_id',
});
Users.hasMany(Posts, {
    foreignKey: "post_user_id",
});


// Comments to Users table assosications to connent a User to a Comment
Comments.belongsTo(Users, {
    foreignKey: 'user_id',
});
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

module.exports = {Users, Comments, Posts};