
var numSquares = 6
var colors = generateRandomColors(numSquares);

   

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colordisplay");
colorDisplay.textContent = pickedColor;
var messegeDisplay = document.querySelector("#messege");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")

var easybtn = document.querySelector("#easybtn");
var mediumbtn = document.querySelector("#mediumbtn");
var hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click", function(){
        easybtn.classList.add("selected")
        hardbtn.classList.remove("selected");
       
        numSquares = 3;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
                if (colors[i]){
                        squares[i].style.background = colors[i];
                } else{
                        squares[i].style.display = "none";
                }
        }
})




hardbtn.addEventListener("click", function(){
        easybtn.classList.remove("selected")
        hardbtn.classList.add("selected");
       
        numSquares = 6;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
                
                        squares[i].style.background = colors[i];
        
                        squares[i].style.display = "block";
        }
                
})


resetButton.addEventListener("click", function(){
        //generate all new colors
  colors = generateRandomColors(numSquares);
  //choose color from the array
  pickedColor = pickColor();
  //display the color
  colorDisplay.textContent = pickColor();
  this.textContent = "New Color"
  messegeDisplay.textContent ="";
  //assign each color
  for(var i= 0; i< squares.length; i++){
          squares[i].style.background = colors[i];
  } 
  h1.style.background = "steelblue";     

})



for (var i = 0 ; i< squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //click listener to squares
    squares[i].addEventListener("click", function(){
        
    //grab color of clicked square
    var clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    
    //compare color to picked color
    if(clickedColor === pickedColor){
       messegeDisplay.textContent = "Correct!!"
       resetButton.textContent= "Play Again?";
       changeColor(clickedColor);
       h1.style.background = clickedColor;
       
    } else{
        this.style.background = "#232323";
        messegeDisplay.textContent = "Try again!!"
        
    }

    


    })

        
}

function changeColor (color){
        //loop through all the squares
        for( var i = 0; i < squares.length; i++){
        //asign given color
        squares[i].style.background = color;
        }
        

}

function pickColor(){
        var random = Math.floor(Math.random() * colors.length);
        return colors [random];
}

function generateRandomColors(num){
        //make an array
        var arr = []
        //add num random colors to array
        for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor())
        }
        //return array
        return arr;

}

function randomColor(){
        //pick a red from 0-255
        var r = Math.floor(Math.random() * 256);
        //pick a green from 0-255
        var g = Math.floor(Math.random() * 256);

        //pick a blue from 0-255
        var b = Math.floor(Math.random() * 256);

        return "rgb(" + r + ", " + g + ", " + b + ")";

}