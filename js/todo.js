const toDoDiv=document.getElementById("todo")
const toDoForm=toDoDiv.querySelector("form")
const toDoInput=toDoDiv.querySelector("form input")

toDos=[]

function writeToDo(newToDo){    // 입력받은 것 적기
    const li=document.createElement("li")
    li.id=newToDo.id
    const btn=document.createElement("button")
    btn.innerText="X"
    btn.addEventListener("click",deleteToDo)
    li.innerText=newToDo.text
    li.appendChild(btn)
    toDoDiv.appendChild(li)
}

function onClickSubmit(event){
    event.preventDefault()
    const newToDo={
        text:toDoInput.value,
        id:Date.now()
    }
    writeToDo(newToDo)

    // array 및 localStorage 추가
    toDos.push(newToDo)
    localStorage.setItem("todos",JSON.stringify(toDos))

    toDoInput.value=""
}

function deleteToDo(event){
    const li=event.target.parentElement
    li.remove()
    // localStorage에서 삭제
    toDos=toDos.filter((element) => parseInt(li.id)!==element.id)
    localStorage.setItem("todos",JSON.stringify(toDos))
}


// 초기 설정

toDoForm.addEventListener("submit",onClickSubmit)

// localStorage에 있는 거 복제 및 표시
const savedToDos=localStorage.getItem("todos")
if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos)
    toDos=parsedToDos
    parsedToDos.forEach(element => {
        writeToDo(element)
    });
}