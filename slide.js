let result = document.getElementById('result');
let button = document.getElementById('buton');
let numberguessing = document.getElementById('numberguess')
let number = Math.floor(Math.random() * 50);
let maxnumber = 50;
let life = document.getElementById('life'); //
let lif = 10; //life numver
button.addEventListener('click', function(){
   let input = document.getElementById('input').value;
    if(input == number){
        result.innerHTML = "you win"
        numberguessing.innerHTML="you win"
        numberguessing.style.color = "green"
        numberguessing.style.background = 'black'
    } else if (input < number){
        lif--
        life.innerHTML = 'life = ' + lif  ;
        result.innerHTML = "to Low"
    } else if(input > number){
        lif--
        life.innerHTML = 'life = ' + lif  ;
        result.innerHTML = "to high"
        //string check
    }  else {
        result.innerHTML = "error, please input number"
        result.style.color = 'red';
        result.style.fontSize = '40px'
    } 
    //max number checker
     if(input > maxnumber){
        result.innerHTML = "error, please between 1-50."
        result.style.color = 'red';
        result.style.fontSize = '45px'
    }
    //life checker
    if(lif==0){
    button.remove()
    numberguessing.innerHTML = "you lose"
    numberguessing.style.color = 'red'
    life.innerHTML = "GAME OVER"
    }
})

