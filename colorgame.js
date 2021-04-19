var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();  
    reset();
}

function setupModeButtons(){
    for (var i = 0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected"); // don't know why       
            this.textContent==="Easy" ? numSquares = 3: numSquares = 6; // don't know why
            reset();
        });
    }
}

function setupSquares(){

    for(var i = 0;i < squares.length; i++){
        squares[i].addEventListener("click", function(){
        
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                messageDisplay.textContent= "Correct";
                changeColors(clickedColor);
                h1.style.background= clickedColor;
                resetButton.textContent = "Play Again";
            }else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
         });
    }
}

function reset(){
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = ""; //按下reset後要讓message消失掉

    for(var i =0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }        
    }
    h1.style.background ="steelblue";
}

resetButton.addEventListener("click",function(){
    reset();
})


colorDisplay.textContent = pickedColor;

function changeColors(color){
    for (var i = 0; i < colors.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares= 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor= pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i< squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         } else{
//             squares[i].style.display="none";
//         }
//     }

// });

// hardBtn.addEventListener("click",function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares= 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor= pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i< squares.length; i++){
//         squares[i].style.background = colors[i];        
//         squares[i].style.display="block";
        
//     }
// });

