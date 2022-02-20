let names = ["Gwen", "Vi", "Saint", "The", "Lavender", "Tost", "Legion", "Aofie", "Anura"];

function buttonAction() {
    let button = document.getElementById("button");
    let old_name = button.innerText;
    let index = Math.floor(Math.random() * names.length);
    let new_name = names[index];
    if(new_name == old_name) {
        new_name = names[(index + 1 ) % names.length]
    }
    button.innerText = new_name;
}
document.getElementById("button").addEventListener("click", buttonAction);