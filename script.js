const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y"];
const vowels = ["a", "e", "i", "o", "u"];
const chars = [];

const output = document.querySelector("#output");

const submit = document.querySelector("#submit").addEventListener("click", (chars) => {
    let wordArray = [];
    const input = document.querySelector("#input").value;
    chars = input.split("");
    const grid = document.querySelector("#grid-container");
    grid.textContent = "";

    for (let i = 0; i < 40; i++) {
        chars.forEach(char => {
            if (char == "c" || char == "C") {
                wordArray.push(consonants[Math.floor(Math.random() * consonants.length)]);
            } else if (char == "v" || char == "V") {
                wordArray.push(vowels[Math.floor(Math.random() * vowels.length)]);
            }
        });
        wordString = wordArray.join("");
        const div = document.createElement("div");
        div.className = "grid-item";
        div.textContent = wordString;
        grid.appendChild(div);
        wordArray = [];
    };
});

