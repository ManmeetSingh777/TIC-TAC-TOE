const button = document.getElementById("got")
const info = document.getElementById("information")
const block1 = document.getElementById("bl1")
const block2 = document.getElementById("bl2")
const block3 = document.getElementById("bl3")
const block4 = document.getElementById("bl4")
const block5 = document.getElementById("bl5")
const block6 = document.getElementById("bl6")
const block7 = document.getElementById("bl7")
const block8 = document.getElementById("bl8")
const block9 = document.getElementById("bl9")

button.onclick = () => {
    info.style.display = 'none';
}

const winPossibilities = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

var turn = "X";
function changeTurn() {
    turn === "X"? turn = "0": turn = "X";
}

console.log(block1) 
block1.onclick = () =>{
    if(turn === "X"){
        block1.innerHTML = "X"
        changeTurn();
    }
    else{
        block1.innerText = "0"
    }
}

console.log(block2)
block2.onclick = () =>{
    if(turn === "X"){
        block2.innerHTML = "X"
        changeTurn();
    }
    else{
        block2.innerText = "O"
    }
}

console.log(block3) 
block1.onclick = () =>{
    if(turn === "X"){
        block3.innerHTML = "X"
        changeTurn();
    }
    else{
        block3.innerText = "0"
    }
}

console.log(block4) 
block1.onclick = () =>{
    if(turn === "X"){
        block4.innerHTML = "X"
        changeTurn();
    }
    else{
        block4.innerText = "0"
    }
}

console.log(block5)
block2.onclick = () =>{
    if(turn === "X"){
        block5.innerHTML = "X"
        changeTurn();
    }
    else{
        block5.innerText = "0"
    }
}

console.log(block6) 
block1.onclick = () =>{
    if(turn === "X"){
        block6.innerHTML = "X"
        changeTurn();
    }
    else{
        block6.innerText = "0"
    }
}

console.log(block7)
block2.onclick = () =>{
    if(turn === "X"){
        block7.innerHTML = "X"
        changeTurn();
    }
    else{
        block7.innerText = "0"
    }
}

console.log(block8)
block2.onclick = () =>{
    if(turn === "X"){
        block8.innerHTML = "X"
        changeTurn();
    }
    else{
        block8.innerText = "0"
    }
}

console.log(block9)
block2.onclick = () =>{
    if(turn === "X"){
        block9.innerHTML = "X"
        changeTurn();
    }
    else{
        block9.innerText = "0"
    }
}


