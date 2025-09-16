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
    const label = document.createElement("label");

    // Container
    div.id = "div";
    div.class = "cli";
    
    // Give the region an accessible name for screen readers
    div.setAttribute("role", "region");
    div.setAttribute("aria-live", "polite");
    div.setAttribute("aria-label", "Command Line Interface");

    // Visible prompt
    span.classList.add("whois");
    span.textContent = "guest@elyseio.me:~$ ";

    // Input field
    newInput.type = "text";
    newInput.id = "input";
    newInput.setAttribute("aria-describedby", "cli-prompt");
    newInput.setAttribute("aria-label", "Enter command");

    // Hidden text node to describe the prompt for screen readers
    label.id = "cli-prompt";
    label.className = "sr-only"; // use CSS: .sr-only {position:absolute;left:-9999px;}
    label.textContent = "Terminal prompt intruder at term";
    
    // Append elements
    div.appendChild(span);
    div.appendChild(label);
    div.appendChild(newInput);
    root.appendChild(div);

    // Focus and scroll to input
    newInput.focus();
    newInput.scrollIntoView();

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


function userInput(input, div) {
    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter" || e.keyCode === 13) {
            const userInput = e.target.value.toLowerCase();
            if(userInput === "clear") {
                clear();
                return;
            }
            const span = document.createElement("span");
            span.textContent = userInput;
            div.appendChild(span);
            input.remove();
            switch(userInput) {
                case "about":
                    showAbout();
                    break;
                case "projects":
                    showProjects();
                    break
                case "email":
                    showEmail();
                    break;
                case "github":
                    showGithub();
                    break;
                case "banner":
                    createBanner();
                    break;
                case "help":
                case "?":
                    showHelp();
                    break;
                case "secret":
                    showSecret();
                    break;
                default:
                    error();
                    break;
            }
        }
    })
}


function getrr() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}


function main(){
    createBanner();
}

main();











function showSecret() {
    console.log("I wonder where the password is?");
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = "password: ";
    div.appendChild(span);

    const input = document.createElement("input");
    input.setAttribute("type", "password");

    div.appendChild(input);
    root.appendChild(div);

    // Focus after appending
    setTimeout(() => input.focus(), 0);

    input.addEventListener("keypress", (event) => {
        if(event.key === "Enter") {
            event.preventDefault(); // stop weird key propagation
            input.setAttribute("disabled", "true");
            if(event.target.value === "thepasswordisthis") {
                console.log("Gottem!");
                getrr();
                const p = document.createElement("p");
                p.textContent = "Get rickrolled!";
                div.appendChild(p);
            } else {
                const p = document.createElement("p");
                p.textContent = "Invalid password!";
                div.appendChild(p);
            }
            createCLI();
            const newInput = document.getElementById("input");
            newInput.focus();
            newInput.scrollIntoView();
        }
    });
}