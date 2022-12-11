function authenticate(){
    // declare variable that don't change during runtime
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // if credentials are correct
    if(username == "admin" && password == "admin"){
        window.location = "./home.html";
        document.cookie = username;
    }else{
        const audio = new Audio('./sfx/ping.mp3');
        audio.loop = false;
        audio.play();
        window.alert("error!");
    }
}