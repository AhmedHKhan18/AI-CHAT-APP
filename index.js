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
