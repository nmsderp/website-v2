let projects = [
    {
        name: "Bost",
        id: "bost",
        url: "https://bostlegacy.ba4x.pro"
    },
    {
        name: "Ways to Hiss",
        id: "waystohiss",
        url: "https://ba4x.pro/waystohiss.html"
    },
    {
        name: "Snail IDE",
        id: "snailide",
        url: "https://snail-ide.com"
    },
    {
        name: "ZenScript",
        id: "zenscript",
        url: "https://dumo.is-a.dev/ZenScript"
    }
];

projects.forEach(proj => {
    document.write(`<button id="${proj.id}">${proj.name}</button><br><button id="${proj.id}sdesc">${proj.name} Description</button><hr>`);

    document.getElementById(proj.id).addEventListener("click", () => {
        window.location.replace(proj.url);
    });

    document.getElementById(`${proj.id}sdesc`).addEventListener("click", () => {
        if (document.getElementById(`${proj.id}desc`).style.display == "none") {
            document.getElementById(`${proj.id}desc`).style.display = "";
        } else {
            document.getElementById(`${proj.id}desc`).style.display = "none";
        }
    });
})