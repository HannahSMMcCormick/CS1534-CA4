export function fetchUserData() {
    fetch('/users')
    .then(response => response.json())
    .then(data => {
        console.log('User data:', data);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
}
export function addUser() {
    const userData = {
      username: 'example_user',
      email: 'example@example.com',
      password: 'password123'
    };
  
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
    })
    .catch(error => {
      console.error('Error adding user:', error);
    });
}