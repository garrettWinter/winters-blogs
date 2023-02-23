console.log("comment.js is connected");
// This listens to see if the user has clicked the button to sumit a new comment

const addCommentBtn = document.querySelector('#newCommentBtn');
const addCommentTextBox = document.querySelector('#addCommentTextBox');
const postIDTag = document.querySelector('#postHeader');

async function saveNewComment() {
    console.log(addCommentTextBox.value); // This would be the Comment itself
    const newComment = await fetch('/api/comments/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: addCommentTextBox.value })
    });
    document.location.reload();
}

addCommentBtn.addEventListener("click", saveNewComment);