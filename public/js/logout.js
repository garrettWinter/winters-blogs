//This will listen for clicks on logout button and will make to call to delete the users session from the database.

const logout = async () => {
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};
document.querySelector('#logout').addEventListener('click', logout);
