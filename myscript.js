const button = document.getElementById('counter');
let score = 0;

button.addEventListener('click', function(){
    score++;
    button.innerHTML= 'Play'  + score++;
})