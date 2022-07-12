 "use strict"

const button = document.getElementById('convert');
const killo = document.getElementById('kilometer');
const miles = document.getElementById('miles');
var result  = document.getElementById('answer');

var operation = 1;

// miles function 
function toMiles(distance){
    const solve = (distance * 0.621371 ).toFixed(3) ; 
    const resultText = document.createTextNode(`${solve} kilometers`) ;
    result.innerHTML=`<h2> ${solve} Miles </h2>`;
   


}

// kilometer function 
function toKillos(distance){
    const solve = (distance * 1.60934 ).toFixed(3) ; 
    const resultText = document.createTextNode(`${solve} kilometers`) ;
    result.innerHTML=`<h2> ${solve} Kilometers </h2>`;
   
    
}
 
button.addEventListener('submit', function(event){
        event.preventDefault(); 
 
        const distance =  parseFloat(document.getElementById('distance').value);  // get value from input box and convert to float    

    if (distance){  ///if the value is a number
        if (operation === 1){
            
            toKillos(distance); // call miles function
          

        }
        else{

            toMiles(distance); // call kilometer function
          
       }

    }
    else{ 
        result.innerHTML=' ';   // if nothing is entered , or the value is not a number;
        alert("please enter a valid number");

    }

 
          
 
     
})

 //radio button 1 will change the operation to 0
 miles.addEventListener('change', function(event){  
    event.preventDefault(); 
    operation =1;
    console.log(operation);//for debuging
    
     


})

//radio button 2 will change the operation to 0
killo.addEventListener('change', function(event){
     event.preventDefault();

     operation = 0;

     console.log(operation); //for debuging
      

 
 })



 console.log(operation); //for debuging