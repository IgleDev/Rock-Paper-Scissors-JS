document.addEventListener("DOMContentLoaded", start)

function start(){
    let btnSelect = document.getElementById("btnSelect")
    btnSelect.addEventListener("click", selectOption)

    let btnPlay = document.getElementById("btnPlay")
    btnPlay.addEventListener("click", playgame)
}

function selectOption(){
    let options = document.getElementById("inputselect").value
    if (options == "" || options == null){
        document.getElementById("warning").innerText = "Choose Rock, Scissors or Paper"
        document.getElementById("warning").style.color = "red"
    }

    if (options == "Rock" || options == "rock" || options == "Scissors" || options == "scissors" || options == "Paper" || options == "paper"){
        document.getElementById("warning").innerText = "You select: " + options
        document.getElementById("warning").style.color = "green"
        document.getElementById("select").textContent = options
    }else{
        document.getElementById("warning").innerText = "You only can write Rock, Scissors or Paper"
        document.getElementById("warning").style.color = "red"
    }
}

function playgame(){
    let userSelect = document.getElementById("select").innerText
    if (userSelect == "" || userSelect == null){
        document.getElementById("warning2").innerText = "You should choose Rock, Scissors or Paper"
        document.getElementById("warning2").style.color = "red"
    }else if(userSelect !== "" || userSelect !== null){
        let randomSelect = Math.floor(Math.random(1,4)*4)
        if (randomSelect === 0 || randomSelect === 1){
            document.getElementById("selectComputer").textContent = "Rock"
            let rock2 = document.getElementById("selectComputer").innerHTML
            document.getElementById("warning2").innerText = userSelect + " vs " + rock2
            document.getElementById("warning2").style.color = "green"
            if(userSelect == "Paper"){
                document.getElementById("winner").textContent =  "And The Winner is: You!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "Rock"){
                document.getElementById("winner").textContent =  "Draw, Try Again!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "Scissors"){
                document.getElementById("winner").textContent =  "And The Winner is: IA!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "paper"){
                document.getElementById("winner").textContent =  "And The Winner is: You!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "rock"){
                document.getElementById("winner").textContent =  "Draw, Try Again!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "scissors"){
                document.getElementById("winner").textContent =  "And The Winner is: IA!"
                document.getElementById("winner").style.color = "green"
            }
        }if (randomSelect === 2){
            document.getElementById("selectComputer").textContent = "Scissors"
            let scissor2 = document.getElementById("selectComputer").innerHTML
            document.getElementById("warning2").innerText = userSelect + " vs " + scissor2
            document.getElementById("warning2").style.color = "green"
            if(userSelect == "Rock"){
                document.getElementById("winner").textContent =  "And The Winner is: You!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "Scissors"){
                document.getElementById("winner").textContent =  "Draw, Try Again!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "Paper"){
                document.getElementById("winner").textContent =  "And The Winner is: IA!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "rock"){
                document.getElementById("winner").textContent =  "And The Winner is: You!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "scissors"){
                document.getElementById("winner").textContent =  "Draw, Try Again!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "paper"){
                document.getElementById("winner").textContent =  "And The Winner is: IA!"
                document.getElementById("winner").style.color = "green"
            }
        }if (randomSelect === 3){
            document.getElementById("selectComputer").textContent = "Paper"
            let paper2 = document.getElementById("selectComputer").innerHTML
            document.getElementById("warning2").innerText = userSelect + " vs " + paper2
            document.getElementById("warning2").style.color = "green"
            if(userSelect == "Scissors"){
                document.getElementById("winner").textContent =  "And The Winner is: You!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "Paper"){
                document.getElementById("winner").textContent =  "Draw, Try Again!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "Rock"){
                document.getElementById("winner").textContent =  "And The Winner is: IA!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "scissors"){
                document.getElementById("winner").textContent =  "And The Winner is: You!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "paper"){
                document.getElementById("winner").textContent =  "Draw, Try Again!"
                document.getElementById("winner").style.color = "green"
            }else if(userSelect == "rock"){
                document.getElementById("winner").textContent =  "And The Winner is: IA!"
                document.getElementById("winner").style.color = "green"
            }   
        }
    }
}