var p1_games_won = 0; //(p1 is x, p2 is o)
var p2_games_won = 0;
var turn = 0; //turn: 0 means X, 1 means O
var p1_num_moves = 0
var p2_num_moves = 0
var minRemoveX = 1
var minRemoveO = 1
var numRemove = ""
var wait = 1 //1 is wait for new or reset button to press, 0 means free to place a move
var playAgainstAI = 0 //1: play against AI
var found = 0
var random = 0
var numChosen = 0
var winner = 0 //1 means winner has been found
var tick = 0 //1 means checkbox has been ticked
var maxTime
var playerTime
var moveTime = 3
var necessaryRemoveFirst = 1 // 1 means need to remove
let a = [
    ['-', 0], //[x or o, x or o's _th move]
    ['-', 0],
    ['-', 0],
    ['-', 0],
    ['-', 0],
    ['-', 0],
    ['-', 0],
    ['-', 0],
    ['-', 0],
]

function twoMin(){
    document.getElementById("winner").innerHTML = "2 min has passed by. No winner."
    clearInterval(playerTime)
    wait = 1
    document.getElementById("newGame").addEventListener("click", startGame)
    document.getElementById("resetGame").addEventListener("click", resetGame)
}

function playerTurn(){
    if(moveTime > 0){
        --moveTime
        document.getElementById("timer").innerHTML = moveTime
    }
    else if(moveTime == 0){
        if(turn == 0){
            necessaryRemoveFirst = 0
            alert("Out of time. X's turn has been skipped.")
        }
        else{
            necessaryRemoveFirst = 0
            alert("Out of time. O's turn has been skipped.")
        }
        moveTime = 4
        if(turn == 0){
            turn = 1
            renderGame()
        }
        else{
            turn = 0
            renderGame()
        }
        if (playAgainstAI == 1){
            AImove()
        }
    }
}

function startGame(){
    moveTime = 3
    document.getElementById("timer").innerHTML = moveTime
    maxTime = setTimeout(twoMin, 120000)
    clearInterval(playerTime)
    playerTime = setInterval(playerTurn, 700)
    turn = 0
    a = [
        ['-', 0], //[x or o, x or o's _th move]
        ['-', 0],
        ['-', 0],
        ['-', 0],
        ['-', 0],
        ['-', 0],
        ['-', 0],
        ['-', 0],
        ['-', 0],
    ]
    minRemoveX = 1
    minRemoveO = 1
    p1_num_moves = 0
    p2_num_moves = 0
    wait = 0
    document.getElementById("winner").innerHTML = ""
    winner = 0
    for(i = 0; i < a.length; ++i){
        if(i == 0){
            numRemove = ".one"
        }
        else if(i == 1){
            numRemove = ".two"
        }
        else if(i == 2){
            numRemove = ".three"
        }
        else if(i == 3){
            numRemove = ".four"
        }
        else if(i == 4){
            numRemove = ".five"
        }
        else if(i == 5){
            numRemove = ".six"
        }
        else if(i == 6){
            numRemove = ".seven"
        }
        else if(i == 7){
            numRemove = ".eight"
        }
        else if(i == 8){
            numRemove = ".nine"
        }
        parent = document.querySelector(numRemove)
        child = parent.querySelector(".xo")
        $(child).text("")
    }
    renderGame()
}

function resetGame(){
    p1_games_won = 0
    p2_games_won = 0
    startGame()
}

function waitNewOrReset(){
    document.getElementById("newGame").addEventListener("click", startGame)
    document.getElementById("resetGame").addEventListener("click", resetGame)
}

function renderGame(){
    if(turn == 1){
        if( (p1_num_moves >= 5) && (necessaryRemoveFirst == 1)){ //5th move
            for(i = 0; i < a.length; ++i){
                if(a[i][0] == 'X'){
                    if (a[i][1] == minRemoveX){
                        if(i == 0){
                            numRemove = ".one"
                        }
                        else if(i == 1){
                            numRemove = ".two"
                        }
                        else if(i == 2){
                            numRemove = ".three"
                        }
                        else if(i == 3){
                            numRemove = ".four"
                        }
                        else if(i == 4){
                            numRemove = ".five"
                        }
                        else if(i == 5){
                            numRemove = ".six"
                        }
                        else if(i == 6){
                            numRemove = ".seven"
                        }
                        else if(i == 7){
                            numRemove = ".eight"
                        }
                        else if(i == 8){
                            numRemove = ".nine"
                        }
                        parent = document.querySelector(numRemove)
                        child = parent.querySelector(".xo")
                        $(child).text("")
                        a[i][0] = '-'
                        a[i][1] = 0
                    }
                }
            }
            ++minRemoveX
        }
    }
    else{
        if( (p2_num_moves >= 5) && (necessaryRemoveFirst == 1) ){ //5th move
            for(i = 0; i < a.length; ++i){
                if(a[i][0] == 'O'){
                    if (a[i][1] == minRemoveO){
                        if(i == 0){
                            numRemove = ".one"
                        }
                        else if(i == 1){
                            numRemove = ".two"
                        }
                        else if(i == 2){
                            numRemove = ".three"
                        }
                        else if(i == 3){
                            numRemove = ".four"
                        }
                        else if(i == 4){
                            numRemove = ".five"
                        }
                        else if(i == 5){
                            numRemove = ".six"
                        }
                        else if(i == 6){
                            numRemove = ".seven"
                        }
                        else if(i == 7){
                            numRemove = ".eight"
                        }
                        else if(i == 8){
                            numRemove = ".nine"
                        }
                        parent = document.querySelector(numRemove)
                        child = parent.querySelector(".xo")
                        $(child).text("")
                        a[i][0] = '-'
                        a[i][1] = 0
                    }
                }
            }
            ++minRemoveO
        }
    }
    if(
        ((a[0][0] == 'X') && (a[1][0] == 'X') && (a[2][0] == 'X')) ||
        ((a[3][0] == 'X') && (a[4][0] == 'X') && (a[5][0] == 'X')) ||
        ((a[6][0] == 'X') && (a[7][0] == 'X') && (a[8][0] == 'X')) ||
        ((a[0][0] == 'X') && (a[3][0] == 'X') && (a[6][0] == 'X')) ||
        ((a[1][0] == 'X') && (a[4][0] == 'X') && (a[7][0] == 'X')) ||
        ((a[2][0] == 'X') && (a[5][0] == 'X') && (a[8][0] == 'X')) ||
        ((a[0][0] == 'X') && (a[4][0] == 'X') && (a[8][0] == 'X')) ||
        ((a[2][0] == 'X') && (a[4][0] == 'X') && (a[6][0] == 'X'))
    )
    {
        ++p1_games_won
        winner = 1
        clearTimeout(maxTime)
        clearInterval(playerTime)
        document.getElementById("winner").innerHTML = "X has won!"
        wait = 1
        waitNewOrReset()
    }
    if(
        ((a[0][0] == 'O') && (a[1][0] == 'O') && (a[2][0] == 'O')) ||
        ((a[3][0] == 'O') && (a[4][0] == 'O') && (a[5][0] == 'O')) ||
        ((a[6][0] == 'O') && (a[7][0] == 'O') && (a[8][0] == 'O')) ||
        ((a[0][0] == 'O') && (a[3][0] == 'O') && (a[6][0] == 'O')) ||
        ((a[1][0] == 'O') && (a[4][0] == 'O') && (a[7][0] == 'O')) ||
        ((a[2][0] == 'O') && (a[5][0] == 'O') && (a[8][0] == 'O')) ||
        ((a[0][0] == 'O') && (a[4][0] == 'O') && (a[8][0] == 'O')) ||
        ((a[2][0] == 'O') && (a[4][0] == 'O') && (a[6][0] == 'O'))
    )
    {
        ++p2_games_won
        winner = 1
        clearTimeout(maxTime)
        clearInterval(playerTime)
        document.getElementById("winner").innerHTML = "O has won!"
        wait = 1
        waitNewOrReset()
    }
    document.getElementById("x_score").innerHTML = "X: " + p1_games_won
    document.getElementById("o_score").innerHTML = "O: " + p2_games_won
    if(turn == 0){
        document.getElementById("displayPlayer").innerHTML = "X"
    }
    else{
        document.getElementById("displayPlayer").innerHTML = "O"
    }
    document.getElementById("newGame").addEventListener("click", startGame)
    document.getElementById("resetGame").addEventListener("click", resetGame)

}

function AImove(){
    found = 0
    random = Math.floor((Math.random()*9));
    if(winner != 1){
        while(found != 1){
            if(a[random][0]=='-'){
                found = 1
                a[random][0] = 'O'
                a[random][1] = ++p2_num_moves
                if(random == 0){
                    numChosen = ".one"
                }
                else if(random == 1){
                    numChosen = ".two"
                }
                else if(random == 2){
                    numChosen = ".three"
                }
                else if(random == 3){
                    numChosen = ".four"
                }
                else if(random == 4){
                    numChosen = ".five"
                }
                else if(random == 5){
                    numChosen = ".six"
                }
                else if(random == 6){
                    numChosen = ".seven"
                }
                else if(random == 7){
                    numChosen = ".eight"
                }
                else if(random == 8){
                    numChosen = ".nine"
                }
                parent = document.querySelector(numChosen)
                child = parent.querySelector(".xo")
                $(child).text("O")
            }
            else{
                random = Math.floor((Math.random()*9));
            }
        } 
        turn = (turn + 1) % 2
        necessaryRemoveFirst = 1
        renderGame()
    }
}

$(function () {

    $(".one").click(function(){
        if(wait != 1){
            if(a[0][0] == '-'){ //empty
                necessaryRemoveFirst = 1
                if (turn == 0){
                    a[0][0] = 'X'
                    a[0][1] = ++p1_num_moves
                    parent = document.querySelector(".one")
                    child = parent.querySelector(".xo")
                    $(child).text("X")
                }
                else{
                    a[0][0] = 'O'
                    a[0][1] = ++p2_num_moves
                    parent = document.querySelector(".one")
                    child = parent.querySelector(".xo")
                    $(child).text("O")
                }
                if (moveTime > 0){
                    clearInterval(playerTime)
                    moveTime = 4
                    playerTime = setInterval(playerTurn, 700)
                }
                turn = (turn + 1) % 2
                renderGame()
                if(playAgainstAI == 1){
                    AImove()
                }
            }
        }
    });
    
    $(".two").click(function(){
        if(wait != 1){
            if(a[1][0] == '-'){ //empty
                necessaryRemoveFirst = 1
                if (turn == 0){
                    a[1][0] = 'X'
                    a[1][1] = ++p1_num_moves
                    parent = document.querySelector(".two")
                    child = parent.querySelector(".xo")
                    $(child).text("X")
                }
                else{
                    a[1][0] = 'O'
                    a[1][1] = ++p2_num_moves
                    parent = document.querySelector(".two")
                    child = parent.querySelector(".xo")
                    $(child).text("O")
                }
                if (moveTime > 0){
                    clearInterval(playerTime)
                    moveTime = 4
                    playerTime = setInterval(playerTurn, 700)
                }
                turn = (turn + 1) % 2
                renderGame()
                if(playAgainstAI == 1){
                    AImove()
                }
            }
        }
    });

    $(".three").click(function(){
        if(wait != 1){
            if(a[2][0] == '-'){ //empty
                necessaryRemoveFirst = 1
                if (turn == 0){
                    a[2][0] = 'X'
                    a[2][1] = ++p1_num_moves
                    parent = document.querySelector(".three")
                    child = parent.querySelector(".xo")
                    $(child).text("X")
                }
                else{
                    a[2][0] = 'O'
                    a[2][1] = ++p2_num_moves
                    parent = document.querySelector(".three")
                    child = parent.querySelector(".xo")
                    $(child).text("O")
                }
                if (moveTime > 0){
                    clearInterval(playerTime)
                    moveTime = 4
                    playerTime = setInterval(playerTurn, 700)
                }
                turn = (turn + 1) % 2
                renderGame()
                if(playAgainstAI == 1){
                    AImove()
                }
            }
        }
    });

    $(".four").click(function(){
        if(wait != 1){
            if(a[3][0] == '-'){ //empty
                necessaryRemoveFirst = 1
                if (turn == 0){
                    a[3][0] = 'X'
                    a[3][1] = ++p1_num_moves
                    parent = document.querySelector(".four")
                    child = parent.querySelector(".xo")
                    $(child).text("X")
                }
                else{
                    a[3][0] = 'O'
                    a[3][1] = ++p2_num_moves
                    parent = document.querySelector(".four")
                    child = parent.querySelector(".xo")
                    $(child).text("O")
                }
                if (moveTime > 0){
                    clearInterval(playerTime)
                    moveTime = 4
                    playerTime = setInterval(playerTurn, 700)
                }
                turn = (turn + 1) % 2
                renderGame()
                if(playAgainstAI == 1){
                    AImove()
                }
            }
        }
    });

    $(".five").click(function(){
        if(wait != 1){
            if(a[4][0] == '-'){ //empty
                necessaryRemoveFirst = 1
                if (turn == 0){
                    a[4][0] = 'X'
                    a[4][1] = ++p1_num_moves
                    parent = document.querySelector(".five")
                    child = parent.querySelector(".xo")
                    $(child).text("X")
                }
                else{
                    a[4][0] = 'O'
                    a[4][1] = ++p2_num_moves
                    parent = document.querySelector(".five")
                    child = parent.querySelector(".xo")
                    $(child).text("O")
                }
                if (moveTime > 0){
                    clearInterval(playerTime)
                    moveTime = 4
                    playerTime = setInterval(playerTurn, 700)
                }
                turn = (turn + 1) % 2
                renderGame()
                if(playAgainstAI == 1){
                    AImove()
                }
            }
        }
    });

    $(".six").click(function(){
        if(wait != 1){
            if(a[5][0] == '-'){ //empty
                necessaryRemoveFirst = 1
                if (turn == 0){
                    a[5][0] = 'X'
                    a[5][1] = ++p1_num_moves
                    parent = document.querySelector(".six")
                    child = parent.querySelector(".xo")
                    $(child).text("X")
                }
                else{
                    a[5][0] = 'O'
                    a[5][1] = ++p2_num_moves
                    parent = document.querySelector(".six")
                    child = parent.querySelector(".xo")
                    $(child).text("O")
                }
                if (moveTime > 0){
                    clearInterval(playerTime)
                    moveTime = 4
                    playerTime = setInterval(playerTurn, 700)
                }
                turn = (turn + 1) % 2
                renderGame()
                if(playAgainstAI == 1){
                    AImove()
                }
            }
        }
    });

    $(".seven").click(function(){
        if(wait != 1){
            if(a[6][0] == '-'){ //empty
                necessaryRemoveFirst = 1
                if (turn == 0){
                    a[6][0] = 'X'
                    a[6][1] = ++p1_num_moves
                    parent = document.querySelector(".seven")
                    child = parent.querySelector(".xo")
                    $(child).text("X")
                }
                else{
                    a[6][0] = 'O'
                    a[6][1] = ++p2_num_moves
                    parent = document.querySelector(".seven")
                    child = parent.querySelector(".xo")
                    $(child).text("O")
                }
                if (moveTime > 0){
                    clearInterval(playerTime)
                    moveTime = 4
                    playerTime = setInterval(playerTurn, 700)
                }
                turn = (turn + 1) % 2
                renderGame()
                if(playAgainstAI == 1){
                    AImove()
                }
            }
        }
    });

    $(".eight").click(function(){
        if(wait != 1){
            if(a[7][0] == '-'){ //empty
                necessaryRemoveFirst = 1
                if (turn == 0){
                    a[7][0] = 'X'
                    a[7][1] = ++p1_num_moves
                    parent = document.querySelector(".eight")
                    child = parent.querySelector(".xo")
                    $(child).text("X")
                }
                else{
                    a[7][0] = 'O'
                    a[7][1] = ++p2_num_moves
                    parent = document.querySelector(".eight")
                    child = parent.querySelector(".xo")
                    $(child).text("O")
                }
                if (moveTime > 0){
                    clearInterval(playerTime)
                    moveTime = 4
                    playerTime = setInterval(playerTurn, 700)
                }
                turn = (turn + 1) % 2
                renderGame()
                if(playAgainstAI == 1){
                    AImove()
                }
            }
        }
    });

    $(".nine").click(function(){
        if(wait != 1){
            if(a[8][0] == '-'){ //empty
                necessaryRemoveFirst = 1
                if (turn == 0){
                    a[8][0] = 'X'
                    a[8][1] = ++p1_num_moves
                    parent = document.querySelector(".nine")
                    child = parent.querySelector(".xo")
                    $(child).text("X")
                }
                else{
                    a[8][0] = 'O'
                    a[8][1] = ++p2_num_moves
                    parent = document.querySelector(".nine")
                    child = parent.querySelector(".xo")
                    $(child).text("O")
                }
                if (moveTime > 0){
                    clearInterval(playerTime)
                    moveTime = 4
                    playerTime = setInterval(playerTurn, 700)
                }
                turn = (turn + 1) % 2
                renderGame()
                if(playAgainstAI == 1){
                    AImove()
                }
            }
        }
    });

})

function playAI(){
    if(tick == 0){ //to determine if checkbox is being ticked or unticked
        tick = 1
        clearTimeout(maxTime)
        resetGame()
        playAgainstAI=1
    }
    else{
        tick = 0
        clearTimeout(maxTime)
        resetGame()
        playAgainstAI=0
    }
}

document.getElementById("checkbox").addEventListener("change", playAI)

startGame()