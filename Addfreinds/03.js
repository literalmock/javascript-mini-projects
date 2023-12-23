var button = document.querySelector('#add');
var stat = document.querySelector('h5')
let check = 0;
button.addEventListener("click",function (){
    if (check==0){
        button.innerHTML = "Remove Freind"            
        stat.innerHTML = "Freinds"
        button.style.color = "red"
        stat.style.color = "green"
        check = 1;
    }else{
        button.innerHTML = "Add Freind"            
        stat.innerHTML = "Stranger"
        button.style.color = "green"
        stat.style.color = "red"
        check = 0;
        console.log("kok")
    }
})
