// const requestUrl = 'https://api.github.com/users/MirzaAbdullahBaig'
// const xhr = new XMLHttpRequest()
// xhr.open('GET', requestUrl)
// xhr.onreadystatechange = () => {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(xhr.responseText) 
//     console.log(data);
//     console.log(data.followers, data.name, data.avatar_url)
//   }
// }
// xhr.send()

document.getElementById('search-button').addEventListener('click', searchUser);
document.getElementById('username').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchUser();
  }
});

function searchUser() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert('Please enter a GitHub username.');
    return;
  }

  const requestUrl = `https://api.github.com/users/${username}`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestUrl);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const userInfo = document.getElementById('user-info');
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        // Display user data
        userInfo.innerHTML = `
          <img src="${data.avatar_url}" alt="Avatar">
          <div class="name">${data.name ? data.name : 'No Name Available'}</div>
          <div class="followers">Followers: ${data.followers}</div>
        `;
      } else {
        userInfo.innerHTML = `<p>User not found. Please try another username.</p>`;
      }
    }
  };

  xhr.send();
}