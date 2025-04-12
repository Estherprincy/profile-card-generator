async function refreshProfiles() {
    const container = document.getElementById('profile-container');
    container.innerHTML = '';
  
    const res = await fetch('https://randomuser.me/api/?results=4');
    const data = await res.json();
  
    data.results.forEach(user => {
      const username = user.login.username;
      const linkedIn = `https://linkedin.com/in/${username}`;
      const github = `https://github.com/${username}`;
      const facebook = `https://facebook.com/${username}`;
  
      const card = document.createElement('div');
      card.classList.add('card');
  
      card.innerHTML = `
        <img class="profile" src="${user.picture.large}" alt="User Picture">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${user.location.country}</p>
        <div class="links">
          <a href="${linkedIn}" target="_blank">LinkedIn</a>
          <a href="${github}" target="_blank">GitHub</a>
          <a href="${facebook}" target="_blank">Facebook</a>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  window.onload = refreshProfiles;