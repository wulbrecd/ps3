/*
* Excercise 1
*
*/

const divclick = document.getElementById('color-block');

divclick.addEventListener('click', function() {
    changeColor();
});

/*
* Then write a function that changes the text and the color inside the div
*
*/

var originalColor = '#F08080';

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(divclick.style.background){
        //change the background color using JS
        divclick.style.background = originalColor
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').innerHTML = '#F08080';

    }
    else{
        //change the background color using JS
        divclick.style.background = '#ADD8E6';
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').innerHTML = '#ADD8E6';

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
convertbtn.addEventListener('click', function(){
    convertTemp();
});

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
var fahr = parseInt(document.getElementById('f-input').value);

function convertTemp(){
    //Calculate the temperature here
    var fTemp = parseFloat(document.getElementById('f-input').value);
    var cTemp = (fTemp - 32) * (5 / 9);


    //Send the calculated temperature to HTML
    document.getElementById('c-output').innerHTML = cTemp;
}


