const root = document.getElementById("root");

const helpCommands = [
    {
        command: "about",
        description: " - about me"
    },
    {
        command: "projects",
        description: " - my projects"
    },
    {
        command: "clear",
        description: " - clear terminal"
    },
    {
        command: "email",
        description: " - email me"
    },
    {
        command: "github",
        description: " - my github"
    },
    {
        command: "banner",
        description: " - display the banner"
    },
    {
        command: "help",
        description: " - list all commands"
    },
    {
        command: "secret",
        description: " - ?"
    }
];

const projects = [
    {
        name: "gag_bot - Grow A Garden Roblox bot, GUI program built with python to automate purchasing gear or eggs",
        url: "https://github.com/elyseio/gag_bot"
    },
    {
        name: "CLI Portfolio - A terminal style portfolio buildt with vanilla HTML, CSS, and JavaScript.",
        url: "https://elyseio.me"
    }
];


function createCLI() {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const newInput = document.createElement("input");

    div.setAttribute("id", "div");
    div.setAttribute("class", "cli");
    
    newInput.setAttribute("text", "text");
    newInput.setAttribute("id", "input");

    span.classList.add("whois");
    span.textContent = "guest@elyseio.me:~$ ";

    div.appendChild(span);
    div.appendChild(newInput);
    root.appendChild(div);
    document.getElementById("input").focus();
    document.getElementById("input").scrollIntoView();
    userInput(newInput, div);
}


function loadP() {
    const img = document.querySelector("img");
    function loaded() {
        const pContainer = document.getElementById('p-container');
        if(pContainer.classList.contains('hide')) {
            pContainer.classList.remove('hide');
        }
        createCLI();
        pContainer.removeAttribute('id');
    }
    if(img.complete) {
        loaded();
    } else {
        img.addEventListener('load', loaded);
    }
}


function createBanner() {
    const div = document.createElement("div");
    div.innerHTML = `
        <div id="banner" class="banner">
            <div class="p-container hide" id="p-container">
                <p class="p-text">
                Wel...welcome! You've found the portfolio o..of elyseio... (Version 1.0.0) 
                <br>
                -------
                <br>
                This is an interactive web terminal.
                <br>
                -------
                <br>
                For a list of commands, type 'help' or '?' and press enter. 
                </p>
            </div>

            <div class="img-container">
                <img src="./img/evil-morty.png" alt="Evil Morty" />
            </div>
        </div>
    `;
    root.appendChild(div);
    loadP();
}


function clear() {
    while(root.firstChild) {
        root.removeChild(root.firstChild);
    }
    createCLI();
}


function showAbout() {
    const p = document.createElement("p");
    p.textContent = `Uh hi, I'm elyseio. I'm a software developer and programmer. I love building cool stuff and learning new things.
    I also love gaming, especially on Roblox. I'm currently learning more about web development and game development.
    `;
    root.appendChild(p);
    createCLI();
}


function showProjects() {
    const div = document.createElement("div");
    div.setAttribute("class", "projects");

    for(const el of projects) {
        const p = document.createElement("p");
        const a = document.createElement("a");
        const txt = document.createTextNode(el.name);
        a.appendChild(txt);
        a.href = el.url;
        a.target = "_blank";
        p.appendChild(a);
        div.appendChild(p);
    }
    root.appendChild(div);
    createCLI();
}


function showEmail() {
    const p = document.createElement("p");
    p.innerHTML = `You can email me at: <a href="mailto:elyseio@protonmail.com">elyseio@protonmail.com</a>`;
    root.appendChild(p);
    createCLI();
}


function showGithub() {
    const p = document.createElement("p");
    p.innerHTML = `<a href="https://github.com/elyseio" target="_blank">github.com/elyseio</a>`;
    root.appendChild(p);
    createCLI();
}


function showHelp() {
    const div = document.createElement("div");
    helpCommands.map((help) => {
        const p = document.createElement("p");
        p.setAttribute("class", "p-help");

        const spanCommand = document.createElement("span");
        spanCommand.setAttribute("class", "span-command");
        spanCommand.textContent = help.command;

        const pDescription = document.createElement("p");
        pDescription.textContent = help.description;
        pDescription.setAttribute("class", "p-description");

        p.append(spanCommand, pDescription);
        div.appendChild(p);
    });
    root.appendChild(div);
    createCLI();
}


function error() {
    const p = document.createElement("p");
    p.textContent = "Command not found. Type 'help' or '?' for a list of commands.";
    root.appendChild(p);
    createCLI();
}


function main(){
    createBanner();
}

main();
