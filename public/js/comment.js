// This listens to see if the user has clicked the button to submit a new comment

const addCommentBtn = document.querySelector('#newCommentBtn');
const addCommentTextBox = document.querySelector('#addCommentTextBox');
const postIDTag = document.querySelector('#postHeader');

// Will gather details from the page to send a request to a create a comment to the controller.
async function saveNewComment() {
    const newComment = await fetch('/api/comments/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: addCommentTextBox.value })
    });
    document.location.reload();
}

addCommentBtn.addEventListener("click", saveNewComment);