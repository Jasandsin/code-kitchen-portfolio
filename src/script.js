
// Container aus HTML geholt wo die Projekte eingefügt werden müssen: <div id="project-list"></div>
const projectList = document.getElementById("project-list");

const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

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

    // Title und description in card eingefügt
    card.appendChild(title);
    card.appendChild(image);

    // Modal click
    card.onclick = function() {
        document.getElementById("myModal").style.display = "block";
        document.getElementById("modal-title").innerText = project.title;
        document.getElementById("modal-description").innerText = project.description;
        document.getElementById("modal-image").src = project.image;
        document.getElementById("modal-link").href = project.link;
    }

    // Card in html-container <div id="project-list"></div> eingefügt
    projectList.appendChild(card);

});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


//Skills

const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
    const card = document.createElement("div");
    card.classList.add("skill");

    const count = skill.description.split(",").length;

    if (count >= 6) {
        card.classList.add("large");
    } else if (count >= 3) {
        card.classList.add("medium");
    } else {
        card.classList.add("small");
    }

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

    //DARKANDLIGHT MODE

    function DarkAndLightMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
