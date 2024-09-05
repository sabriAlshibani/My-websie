 icon.onclick = function () {
    document.body.classList.toggle("dark-them")
    if (document.body.classList.contains("dark-them")) {
        icon.className = "bx bx-sun"
    } else {
        icon.className = "bx bx-moon"
    }
} 
 var links = document.getElementById("links");
    var menu = document.getElementById("icon-menu");
    menu.onclick = function () {
        links.classList.toggle("links-appear")
        if (links.classList.contains("links-appear")) {
            menu.className = "bx bx-up-arrow-alt menu";
        } else {
            menu.className = "bx bx-down-arrow-alt menu";
        }
    }
    
    function loading() {
        let save = localStorage.getItem('color-mode') || 'dark-mode';
        document.body.className = save;
        localStorage.setItem('dark','bx bx-sun');
        localStorage.setItem('light','bx bx-moon');
        var dark = localStorage.getItem('dark');
        var light = localStorage.getItem('light');
        if (document.body.classList.contains("dark-them")) {
            icon.className = dark;
        } else {
            icon.className = light;
        }
    }
    function change() {
        var icon = document.getElementById("icon-mood");
        var contact = document.getElementById("contact-img");
        document.body.classList.toggle('dark-them');
        document.body.classList.toggle('light-them');
        let style = document.body.classList.contains('light-them') ? 'light-them' : 'dark-them';
        localStorage.setItem('color-mode', style);


        if (document.body.classList.contains("dark-them")) {
            icon.className = "bx bx-sun"
        } else {
            icon.className = "bx bx-moon"
        }

        if (document.body.classList.contains("dark-them")) {
            contact.src = "images/background5.jpg"
        } else {
            contact.src = "images/background2.jpg"
        }
    } 
   var menu = document.getElementById("icon-menu");
   var links = document.getElementById("links")

   menu.onclick = function() {
    links.clas
    
    sList.toggle("navbar__links-appear")
   } 

   /* API github */

/*    const username = 'sabriAlshibani'; // Replace with your GitHub username
const repositories = ['Cafe', 'Elzero-cours-summary', 'kaspar-template']; // Replace with your repositories

const container = document.getElementById('repos-container');

repositories.forEach(repo => {
  const repoUrl = `https://api.github.com/repos/${username}/${repo}`;

  fetch(repoUrl)
    .then(response => response.json())
    .then(data => {
      const repoDiv = document.createElement('div');
      repoDiv.classList.add('repo');
      repoDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.description}</p>
        <p><strong>Stars:</strong> ${data.stargazers_count}</p>
        <p><strong>Forks:</strong> ${data.forks_count}</p>
        <a href="${data.html_url}" target="_blank">View Repository</a>
      `;
      container.appendChild(repoDiv);
    })
    .catch(error => console.error('Error fetching repo data:', error));
}); */
