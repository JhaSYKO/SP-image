var url = "<img class='size' src='https://loremflickr.com/320/240/";

var urlEnd = "'>"

var tab = [1,2,3,4,5]

var test = [];

function art(){
    document.getElementById("affichageImage").innerHTML = "";
    option = document.getElementById('option2').innerHTML;
    for(i=0; i<6; i++){
     var tof = url + option + tab[0][i] + urlEnd;
     test.push(tof);
     
    };
    document.getElementById("demo").innerHTML = test;
    
    console.log(test);
}

function art(){
    document.getElementById("affichageImage").innerHTML = "";
    option = document.getElementById('option2').innerHTML;
    document.getElementById("affichageImage").innerHTML = url + option + urlEnd;
}

function graphic(){
    document.getElementById("affichageImage").innerHTML = "";
    option = document.getElementById('option3').innerHTML;
    document.getElementById("affichageImage").innerHTML = url + option + urlEnd;
}
function hard(){
    document.getElementById("affichageImage").innerHTML = "";
    option = document.getElementById('option4').innerHTML;
    document.getElementById("affichageImage").innerHTML = url + option + urlEnd;
}
function office(){
    document.getElementById("affichageImage").innerHTML = "";
    option = document.getElementById('option5').innerHTML;
    document.getElementById("affichageImage").innerHTML = url + option + urlEnd;
}
function packaging(){
    document.getElementById("affichageImage").innerHTML = "";
    option = document.getElementById('option6').innerHTML;
    document.getElementById("affichageImage").innerHTML = url + option + urlEnd;
}
function shopping(){
    document.getElementById("affichageImage").innerHTML = "";
    option = document.getElementById('option7').innerHTML;
    document.getElementById("affichageImage").innerHTML = url + option + urlEnd;
}