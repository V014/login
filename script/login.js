function authenticate(){
    // declare variable that don't change during runtime
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if(username == "admin" && password == "admin"){
        window.location = "home.html";
    }else{
        const audio = new Audio('ping.mp3');
        audio.loop = false;
        audio.play();
        window.alert("error!");
    }
}