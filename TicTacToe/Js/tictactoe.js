let music = new Audio('../music/music.mp3');
let gameover = new Audio('../music/gameover(2).mp3')
let turnSound = new Audio('../music/mouseclick.mp3');
let num = 0; // variable for checking if there are any moves left player
let turn = 'X';

// to change the turn of user
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Check if someone wins 
function checkWin() {
    let boxtext = document.getElementsByClassName('boxcontent');
    let wins = [[0, 1, 2, 0, 5, 0],
                [3, 4, 5, 0, 15, 0],
                [6, 7, 8, 0, 25, 0],
                [0, 3, 6, -10, 15, 90],
                [1, 4, 7, 0, 15, 90],
                [2, 5, 8, 10, 15, 90],
                [0, 4, 8, 0, 15, 45],
                [2, 4, 6, 0, 15, 135],
               ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
            isgameover = true
            gameover.play();
            music.pause();
            num = 0;
        }
    })
}

// Game Logic 
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxcontent');
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '' ) {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            turnSound.play();
            document.querySelector('.info').innerText = "Turn for " + turn;
            checkWin();
            ++num;
        }if(num===9){
            num = 0;
            document.querySelector('.info').innerText = "Draw"
            isgameover = true;
            gameover.play();
            music.pause();
        }

    })
});

// Reset
// music.play();
reset.addEventListener('click', () => {
    num = 0;
    music.play();
    let boxtexts = document.querySelectorAll('.boxcontent');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
