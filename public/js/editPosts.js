console.log("editPosts.js is connected");

const updatePostBtn = document.querySelector('#updatePostBtn');
const deletePostBtn = document.querySelector('#deletePostBtn');
const updateTitleBox = document.querySelector('#updateTitleBox');
const updateBodyBox = document.querySelector('#updateBodyBox');

async function updatePost() {
    console.log(updateTitleBox.value); // This would be the new posts title
    console.log(updateBodyBox.value); // This would be the new posts title
    updatePostDetails = {
        post_title: updateTitleBox.value,
        post_body: updateBodyBox.value
    }
    const newPost = await fetch('/api/posts/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updatePostDetails })
    });
    document.location.replace('/dashboard'); // This needs to redirect back to dashboard page
}

async function deletePost() {
    const deletePost = await fetch('/api/posts/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(deletePost)
    // document.location.replace('/dashboard'); // This needs to redirect back to dashboard page
}

updatePostBtn.addEventListener("click", updatePost);
deletePostBtn.addEventListener("click", deletePost);
