let names = ["Gwen", "Vi", "Saint", "The", "Lavender", "Tost", "Anura", "Stick", "Asura", "Ariadne", "Icarus", "Bee"];
let pronouns = ["she/her", "they/them", "it/its"]


function buttonAction() {
    let button = document.getElementById("button");
    let old_name = button.innerText.split(" ")[0];
    let index = Math.floor(Math.random() * names.length);
    let new_name = names[index];
    if (new_name == old_name) {
        new_name = names[(index + 1) % names.length]
    }

    let pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

    button.innerText = `${new_name} (${pronoun})`;
}
document.getElementById("button").addEventListener("click", buttonAction);

buttonAction();