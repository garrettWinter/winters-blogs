console.log("newPosts.js is connected");

const newPostBtn = document.querySelector('#newPostBtn');
const newPostTitleBox = document.querySelector('#newPostTitleBox');
const newPostBodyBox = document.querySelector('#newPostBodyBox');

async function saveNewPost() {

    if (newPostBodyBox.value == '' && newPostTitleBox.value == '') {
        window.alert("Please enter a value both the Post Title and Post Body feilds and try again")
        return;
    }
    console.log(newPostTitleBox.value); // This would be the new posts title
    if (newPostTitleBox.value == '') {
        window.alert("Please enter a value into the post title feild and try again")
        return;
    }
    console.log(newPostBodyBox.value); // This would be the new posts title
    if (newPostBodyBox.value == '') {
        window.alert("Please enter a value into the post body feild and try again")
        return;
    }
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
