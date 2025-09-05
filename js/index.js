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
        link: "https://github.com/elyseio/gag_bot"
    },
    {
        name: "CLI Portfolio - A terminal style portfolio buildt with vanilla HTML, CSS, and JavaScript.",
        link: "https://elyseio.me"
    }
];

function createBanner() {
    const div = document.createElement("div");
    div.innerHTML = `
        <div id="banner" class="banner">
            <div class="p-container hide" id="p-container">
                <p class="p-text crt">
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
                <img src="./img/evil-morty.png" alt="Evil Morty" width=200px />
            </div>
        </div>
    `;
    root.appendChild(div);
}

function main(){
    createBanner();
}

main();