let random = (parseInt(Math.random()*100+1))
 const submit=document.querySelector('#subt')
 const userinput=document.querySelector('#guessfeild')
 const guessses=document.querySelector('.guessses')
 const lastresult =document.querySelector('.lastResult')
 const loworhigh=document.querySelector('.loworhigh')
 const resultparas=document.querySelector('.resultparas')

 const p = document. createElement('p')

 let prevguess = []
 let numgues = 1
 let playGame = true

 if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
         const guess=parseInt(userinput.value)
         console.log(guess);
         validateguess(guess)
    })
 }

 function validateguess(guess){
if(isNaN(guess)){
    alert('Please enter a valid number')  
}
else  if(guess<1){
    alert('Please enter a valid number more than 1')  

}
else  if(guess>100){
    alert('Please enter a number less than 100')  

}else{
    prevguess.push(guess)
    if(numgues===11){
        displayguess(guess)
        displaymesg(`Game over. Random number was ${random}`)
        endgame()
    }else{
        displayguess(guess)
        checkguess(guess)
    }
}

 }

 function checkguess(guess){
if(guess=== random){
    displaymesg(`You guessed right Bro`)
    endgame()
}else if (guess< random){
    displaymesg(`You guess is number too low `)
}else if (guess>random){
    displaymesg(`You guess is number too high `)
}
 }

function displaymesg(message){
    loworhigh.innerHTML=`<h1>${message}</h1>`

}

function displayguess(guess){
userinput.value=''
guessses.innerHTML+= `${guess},`
numgues++
lastresult.innerHTML=`${11 - numgues}`

}

function newgame(){
const newgamebutn=document.querySelector('#newgame')
newgamebutn.addEventListener('click',function(e){
     random = (parseInt(Math.random()*100+1))
prevguess=[]
numgues=1
playGame=true
guessses.innerHTML=''
lastresult.innerHTML=`${11 - numgues}`
userinput.removeAttribute('disabled')
resultparas.removeChild(p)
})
}
function endgame(){
userinput.value=''
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newgame>Start new game</h2`
resultparas.appendChild(p)
playGame=false
newgame()
}