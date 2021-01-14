const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const bg = document.querySelector('.background');
const btn = document.querySelector('.start');
const scoreNum = document.querySelector('.score');
let isJumping = false;
let position = 0;




function handleKeyUp(event){
    if(event.keyCode === 32){
        
        if(!isJumping){
            jump();
        }

    }
}



function handleClick(){
    bg.style.animation = "slideRight 600s infinite linear";
    setInterval(() => {
        scoreNum.innerHTML = Number(scoreNum.innerHTML) + 1;
        
    }, 200);
    createCactus();
}

function jump(){
    isJumping = true;
    let upInterval = setInterval(()=>{
        if(position >= 220){
            clearInterval(upInterval);

            //descendo 
            let downInterval = setInterval(()=>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },20)
        }else{
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }

        dino.getElementsByClassName.bottom = position
    },20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    



    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(()=>{
        

        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.removeChild(document.body.children[1]);
            document.body.innerHTML += `<h1 class="game-over">Fim de Jogo</h1>
            <button class="play-again"onClick="window.location.href=window.location.href">Jogar de novo</button>`;
            
            
        }
        else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20)

     if(document.body.innerHTML.classList.contains("play-again") &&
     document.body.innerHTML.classList.contains("game-over"))
         setTimeout(createCactus,randomTime);
}








btn.addEventListener('click',handleClick);
document.addEventListener('keyup',handleKeyUp);


