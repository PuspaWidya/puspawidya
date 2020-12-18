function getEnemyChoice(){
    let enemy = Math.ceil(Math.random()*9)
    
    if(enemy <= 3){
        return 'paper'
    }else if(enemy <=6 && enemy >= 4){
        return 'scissor'
    }else{
        return 'rock'
    }
}   

function getWinner(enemy,player){
    if(enemy === player){
        return 'Draw!'
    }else if(player === 'paper'){
        if(enemy === 'scissor'){
            return 'Lose you losser!'
        }else{
            return 'You are the Winner!'
        }
    }else if(player === 'scissor'){
        if(enemy === 'paper'){
            return 'You are the Winner!'
        }else{
            return 'Lose you losser!'
        }
    }else if(player === 'rock'){
        if(enemy === 'paper'){
            return 'lose you losser!'
        }else{
            return 'You are the Winner!'
        } 
    }
}


let musuh = document.querySelectorAll('li img')
musuh.forEach(function(e){
e.addEventListener('click',function(){
        let enemyChoice = getEnemyChoice()
        let playerChoice = e.className
        let hasil = getWinner(enemyChoice, playerChoice)


            let imgEnemy = document.querySelector('.img-enemy')
            imgEnemy.setAttribute('src','img/'+ enemyChoice +'.png')
        
            let info = document.querySelector('.info')
            info.innerHTML = hasil
        })
})
