
// Container aus HTML geholt wo die Projekte eingefügt werden müssen: <div id="project-list"></div>
const projectList = document.getElementById("project-list");

// Porjekte dynamisch als cards erstellt
projects.forEach(project => {

    const card = document.createElement("div");
    card.classList.add("project");

    const title = document.createElement("h3");
    title.innerText = project.title;

    const description = document.createElement("p");
    description.innerText = project.description;

    const image = document.createElement("img");
    image.src = project.image;

    const button = document.createElement("a");
    button.innerText = "View Project";
    button.href = project.link;
    button.classList.add("project-btn");

    // Title und description in card eingefügt
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(button);
   // card.appendChild(description);

    // Card in html-container <div id="project-list"></div> eingefügt
    projectList.appendChild(card);

});



//Skills

const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
    const card = document.createElement("div");
    card.classList.add("skill");

    const name = document.createElement("span");
    name.innerText = skill.name;

    const description = document.createElement("p");
    description.innerText = skill.description;

    // Tooltip erstellen
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = skill.description;

    card.appendChild(name);
    card.appendChild(tooltip);

    skillsList.appendChild(card);
})