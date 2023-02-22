console.log("login.js is now connected")
const loginBtn = document.querySelector('#loginBtn');

const loginHandler = async (event) => {
  event.preventDefault();
  console.log("Click captured");

  const userNamefield = document.querySelector('#userNamefield').value.trim();
  const password = document.querySelector('#passwordfield').value.trim();

  if (userNamefield && password) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ userNamefield, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

loginBtn.addEventListener("click", loginHandler);