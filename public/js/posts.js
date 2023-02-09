console.log ("posts.js is connected");


const addCommentBtn = document.querySelector('#newCommentBtn');
const addCommentTextBox = document.querySelector('#addCommentTextBox');
const postIDTag = document.querySelector('#postHeader');

function saveNewComment () {
    console.log(addCommentTextBox.value); // This would be the Comment itself
    // console.log(req.session.user_id); // This would be the user_ID
    // console.log(document.getElementsByClassName("postHeader").dataset.id); //this would be the post_ID
    console.log(postIDTag.dataset.postid); //this would be the post_ID
    // .getAttribute(data)
};




















addCommentBtn.addEventListener("click", saveNewComment);