

var header = document.getElementById('myDiv') //select container
var btns = header.getElementsByClassName('btn'); //select btn classes

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){ //add event listener for clicked
        var current = document.getElementsByClassName('active'); //select element active class
        current[0].className = current[0].className.replace(' active', ''); //take current class and replace with ''
        this.className += ' active'; //add active class to clicked btn
    })
}


