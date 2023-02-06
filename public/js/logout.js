const logout = async () => {
  console.log("logout clicked"); //REMOVE ME
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
  console.log("in logout.js");
  document.querySelector('#logout').addEventListener('click', logout);
  