console.log("newPosts.js is connected");

const newPostBtn = document.querySelector('#newPostBtn');
const newPostTitleBox = document.querySelector('#newPostTitleBox');
const newPostBodyBox = document.querySelector('#newPostBodyBox');

async function saveNewPost() {
    console.log(newPostTitleBox.value); // This would be the new posts title
    console.log(newPostBodyBox.value); // This would be the new posts title
    newPostDetails = {
        post_title: newPostTitleBox.value,
        post_body: newPostBodyBox.value
    }
    const newPost = await fetch('/api/posts/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPostDetails })
    });
    document.location.replace('/dashboard');
}

newPostBtn.addEventListener("click", saveNewPost);
