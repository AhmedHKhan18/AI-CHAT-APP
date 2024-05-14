var dummyList = [
    {name: "user2", msg: "Hi"},
    {name: "user2", msg: "Who are you?"},
    {name: "user2", msg: "I am AI"},
    {name: "user2", msg: "Nice to meet you"},
    {name: "user2", msg: "How may I help you?"},
    {name: "user2", msg: "Ok"},
    {name: "user2", msg: "You are nice person"},
    {name: "user2", msg: "Thankyou!"},
    {name: "user2", msg: "Ok"}
]
var messageList = [
    {name: "user", msg: "Hi"},
    {name: "user2", msg: "ap kon?"},
    {name: "user", msg: "ma theek ap kese ho?"},
    {name: "user2", msg: "alhamdullilah"},
    {name: "user", msg: "aur sunao"},
    {name: "user2", msg: "bs kuch nahi"},
    {name: "user", msg: "kaha pr ho"},
    {name: "user2", msg: "bahar hon"},
    {name: "user", msg: "acha"}
]

const ul = document.getElementsByTagName("ul")[0]
const message = document.getElementsByTagName("input")[0]


function handleSend(){
    if (message.value === ""){
        alert("Please enter a message!")
    }else{
        // for (let i = 0; i < messageList.length; i++) {
        //          ul.innerHTML += `<li id=${messageList[i].name === "user" ? "user" : ""}>${messageList[i].msg}</li>`
        //         }
        ul.innerHTML += `<li id="user">${message.value}</li><br>`
        setTimeout(() =>autoReply(), 1000) 
    ul.scrollTop = ul.scrollHeight;
    message.value = ""
}
}

function autoReply(){
    ul.innerHTML += `<li id="user2">${dummyList[Math.floor(Math.random()*dummyList.length)].msg}</li><br>`
    ul.scrollTop = ul.scrollHeight;
    message.value = ""
}

message.addEventListener("keyup", (e) => {
    if (e.keyCode === 13){
        handleSend()
    }
})



function checkuser(){
    let useracsess = localStorage.getItem("Username")
    let userpass = localStorage.getItem("password")
    // if (useracsess !== null && userpass !== null){
    //     window.location.pathname = "chatpage.html"
    // }else{
    //     if (useracsess === null && userpass === null){
    //     // window.location.pathname = "index.html"
    // }
    // }
    for (let i = 0; i < useracsess.length; i++) {
        if (useracsess !== null && userpass !== null){
            window.location.pathname = "chatpage.html"
        }else if (useracsess === null && userpass === null){
            window.location.pathname = "index.html"
        }
    }
}

function navigate(){
    let username = document.getElementById("Username")
    let password = document.getElementById("password")
    if(username.value !== "" && password.value !== ""){
        localStorage.setItem("Username", username.value);
        localStorage.setItem("password", password.value);
        window.location.pathname = "chatpage.html";
        alert("Login Successful");
    }else{
        alert("Please enter your email and password");
    }}

function logoutuser(){
    localStorage.removeItem("Username")
    localStorage.removeItem("password")
    window.location.pathname = "index.html"
    alert("Logout Successful")
}
console.log(localStorage.getItem("Username"));
console.log(localStorage.getItem("password"));

var input = document.getElementById("Username");
var input2 = document.getElementById("password");

input.addEventListener("keyup", (e)=> {
  if (e.keyCode === 13) {
   navigate()
  }
});
input2.addEventListener("keyup", (e)=> {
  if (e.keyCode === 13) {
   navigate()
  }
});

