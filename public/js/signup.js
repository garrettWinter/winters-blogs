const signupBtn = document.querySelector('#signupBtn');

//This will listen for clicks on signup button and will make to call to create a user account in the database.

const signupHandler = async (event) => {
  event.preventDefault();

  const userNamefield = document.querySelector('#userNamefield').value.trim();
  const password = document.querySelector('#passwordfield').value.trim();

  if (userNamefield && password) {
    const response = await fetch('/api/auth/new', {
      method: 'POST',
      body: JSON.stringify({ userNamefield, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

signupBtn.addEventListener("click", signupHandler);