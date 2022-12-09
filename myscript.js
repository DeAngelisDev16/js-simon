const button = document.getElementById('counter');
let score = 0;
let stopScore = false;

button.addEventListener('click', function(){
    if(!stopScore){
        if(score < 10){
            score++;
            button.innerHTML= 'PLAY' + score++;
        }else {
            
            setTimeout(() => {
                stopScore = false;
                score = 0;
                button.innerHTML= 'PLAY' + score++;
            }, 4000);
                
        }
    }
    
})

