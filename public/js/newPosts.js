const newPostBtn = document.querySelector('#newPostBtn');
const newPostTitleBox = document.querySelector('#newPostTitleBox');
const newPostBodyBox = document.querySelector('#newPostBodyBox');

//This will listen for a click on the submit new post button and will save the post, if the user leaves a field empty it will alert them on this.
async function saveNewPost() {

    if (newPostBodyBox.value == '' && newPostTitleBox.value == '') {
        window.alert("Please enter a value both the Post Title and Post Body fields and try again")
        return;
    }
    if (newPostTitleBox.value == '') {
        window.alert("Please enter a value into the post title field and try again")
        return;
    }
    if (newPostBodyBox.value == '') {
        window.alert("Please enter a value into the post body field and try again")
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