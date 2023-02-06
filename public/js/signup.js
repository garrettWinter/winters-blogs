console.log("signup.js is now connected")
const signupBtn = document.querySelector('#signupBtn');

const signupHandler = async (event) => {
  event.preventDefault(); //Since this is no longer a form is this still needed?
  console.log("Click captured");

  const userNamefield = document.querySelector('#userNamefield').value.trim();
  const password = document.querySelector('#passwordfield').value.trim();

  console.log (userNamefield);
  console.log (password);
  if (userNamefield && password) {
    const response = await fetch('/api/auth/new', {
      method: 'POST',
      body: JSON.stringify({ userNamefield, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(response);
      alert('Failed to sign up.');
    }
  }
};

signupBtn.addEventListener("click", signupHandler);