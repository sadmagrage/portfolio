/* var projectsSection = document.querySelector('.projects-section');
var leftArrow = document.querySelector("#left-arrow");
var showProjectsElement = document.getElementById('show_projects');

projectsSection.addEventListener('click', function() {
    showProjectsElement.classList.toggle("visible");
});

leftArrow.addEventListener('click', function() {
    showProjectsElement.classList.toggle("visible");
});

let projectsSectionHTML = "<h3>Projetos</h3>";

for (let i = 0; i < 2; i++) {
    projectsSectionHTML += `
    <div class="project-thumbnail">
        <img class="project-image" src="./images/wallpaper.webp" alt="">
    </div>
    `;
}

projectsSectionHTML += `
    <h3>Clique nos projetos para ver mais</h3>
`;


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

document.querySelector(".projects-list").innerHTML = projectsListHTML; */