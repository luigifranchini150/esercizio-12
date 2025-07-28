let remainingTaime = document.querySelector('#remainingTime') //tempo rimanente (countdown che visualizzeremo)
let countdownInput = document.querySelector('#countdown-input') //elemento che permette all'utente di inserire i secondi
let startBtn = document.querySelector('#startBtn') //button start
let stopBtn = document.querySelector('#stopBtn') //button stop
let resetBtn = document.querySelector('#resetBtn') //button reset 
let interval; 
let counter; 
let remaingSeconds = 0


//button start
startBtn.addEventListener('click', ()=>{
       clearInterval(interval)
    counter = countdownInput.value //secondi che inserirà l'utente
    if(remaingSeconds !== 0){
    counter = remaingSeconds;


}
    interval = setInterval(() => {
        if(counter < 0){
        clearInterval(interval)
        remainingTaime.innerHTML = `tempo scaduto`
       }else{
        remainingTaime.innerHTML = counter
        counter --
       }
    }, 1000);
})
//button stop

stopBtn.addEventListener('click', ()=>{
        clearInterval(interval)
        remaingSeconds = counter
})
//button reset
resetBtn.addEventListener('click', ()=>{
countdownInput.value = ``
clearInterval(interval)
remainingTaime.innerHTML = ``

})
