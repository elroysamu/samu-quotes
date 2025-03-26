const spinner = document.getElementById('spinner');
const board = document.getElementById("board");
const board2 = document.getElementById("board2");

function getFact() {
    board2.innerHTML = "";
    spinner.style.display = 'block';
    board.innerHTML = "Samu getting your fact...";
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            spinner.style.display = 'none';
            board.innerText = data.fact;
            console.log(data.fact);
        })
        .catch(error => console.error(error));
}

function getAdvice(){
    board2.innerHTML = "";
    spinner.style.display = 'block';
    board.innerHTML = "Samu getting your advice...";
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(
        data => {
            spinner.style.display = 'none';
            board.innerText = data.slip.advice;
            console.log(data.slip.advice);
        }
    )
    .catch(error => console.log(error));
}

function getJoke(){
    board2.innerHTML = "";
    spinner.style.display = 'block';
    board.innerHTML = "Samu getting your joke...";
    fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(response => response.json())
    .then(
        data => {
            spinner.style.display = 'none';
            if(data.setup){
                board.innerHTML = data.setup;
                board2.innerHTML = data.delivery;
            }else{
                board.innerHTML = data.joke;
            }
            console.log(data);
        }
    )
    .catch(error => console.log(error));
}