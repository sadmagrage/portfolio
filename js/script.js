var projectsSection = document.querySelector('.projects-section');
var leftArrow = document.querySelector("#left-arrow");
var showProjectsElement = document.getElementById('show_projects');
var identityElement = document.querySelector("#identity");

identityElement.innerHTML = `Meu nome é Victor Goya, tenho ${parseInt((new Date().getTime() - new Date(2003, 10, 7, 8).getTime())/365/24/3600/1000)} anos.`;

projectsSection.addEventListener('click', function() {
    showProjectsElement.classList.toggle("visible");
});

leftArrow.addEventListener('click', function() {
    showProjectsElement.classList.toggle("visible");
});

let projectsSectionHTML = "<h3>Projetos</h3>";

/* const getPropertyStyle = (identifier, property) => {
    const element = document.querySelector(identifier);

    const heightStr = getComputedStyle(element)[property];
    console.log(parseInt(heightStr.substring(0, heightStr.length - 2)));
    return parseInt(heightStr.substring(0, heightStr.length - 2));
}; */

for (let i = 0; i < 2; i++) {
    projectsSectionHTML += `
    <div class="project-thumbnail">
        <img class="project-image" src="./images/wallpaper.webp" alt="">
    </div>
    `;
}

document.querySelector(".projects-section").innerHTML = projectsSectionHTML;

let projectsListHTML = "";

for (let i = 0; i < 9; i++) {
    projectsListHTML += `
    <div class="project-item">
        <img class="project-image" src="./images/wallpaper.webp" alt="">
        <div class="project-info">
            <div class="project-technologies">
                <p>java</p>
                <p>mysql</p>
            </div>
            <h2>nome</h2>
        </div>
    </div>
    `;
}

document.querySelector(".projects-list").innerHTML = projectsListHTML;