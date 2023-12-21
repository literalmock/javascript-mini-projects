const clock = document.getElementById('clock')
setInterval(function (x){
    let time = new Date()
    console.log(time.toLocaleTimeString());
    clock.innerHTML = time.toLocaleTimeString();
},1000)
