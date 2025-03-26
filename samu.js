const spinner = document.getElementById('spinner');

function getFact() {
    const factElement = document.getElementById("board");
    spinner.style.display = 'block';
    factElement.innerHTML = "Samu getting your fact...";
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            spinner.style.display = 'none';
            factElement.innerText = data.fact;
            console.log(data.fact);
        })
        .catch(error => console.error(error));
}

function getAdvice(){
    spinner.style.display = 'block';
    const adviceElement = document.getElementById("board");
    adviceElement.innerHTML = "Samu getting your advice...";
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(
        data => {
            spinner.style.display = 'none';
            adviceElement.innerText = data.slip.advice;
            console.log(data.slip.advice);
        }
    )
}

function getJoke(){
    spinner.style.display = 'block';
    const board = document.getElementById("board");
    board.innerHTML = "Samu getting your joke...";
    fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(response => response.json())
    .then(
        data => {
            spinner.style.display = 'none';
            const board2 = document.getElementById("board2");
            if(data.setup){
                board.innerHTML = data.setup;
                board2.innerHTML = data.delivery;
            }else{
                board2.innerHTML = "";
                board.innerHTML = data.joke;
            }
            console.log(data);
        }
    )
}