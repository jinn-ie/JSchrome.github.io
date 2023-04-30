const loginForm=document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input")
const hello=document.querySelector("#hello")

function onLoginSubmit(event){
    event.preventDefault()
    const id=loginInput.value

    localStorage.setItem("id",id)
    loginForm.classList.add("hidden")
    sayHello(id)
}

function sayHello(id){
    hello.innerText=`안녕하세요, ${id}님!`
    hello.classList.remove("hidden")
}

const savedID=localStorage.getItem("id")

if(savedID===null){
    loginForm.classList.remove("hidden")
    loginForm.addEventListener("submit",onLoginSubmit)
} else {
    sayHello(savedID)
}