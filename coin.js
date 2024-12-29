function coin() {
    
    let x = Math.random() ; 
    x = Math.floor(x * 2 + 1) ; 
    
    if(x == 1)  document.getElementsByClassName("ans")[0].innerHTML = "Tails" ; 
    else document.getElementsByClassName("ans")[0].innerHTML = "Heads" ; 
    console.log(x) ; 

}

coin() ; 





