//ASI: Automatic Semicolon Insertion

let pokemonBall = "Eckes"
var student = "lars"
const age = "33"


let todolistInputField = document.getElementById("todoInputField")
let todolistSubmitButton = document.getElementById("addButton")
let todolistBody = document.getElementById("todosList")


function addTodo() {
    let todoInputValue = todolistInputField.value.trim()

    if (todoInputValue !== "") {
        let textNode = document.createTextNode(todoInputValue)

        //alert(todoInputValue)
        let newTodoBody = document.createElement("li")

        newTodoBody.classList.add("list-group-item")

        //adding a delete button
        let deleteButton = document.createElement("button")
        //add text to the body
        deleteButton.textContent = "Delete Todo"
        //add event to the button with click
        deleteButton.onclick = function () {
            //delete  the parent of the button wich ist the LI in newTodoBody
            this.parentElement.remove()
            confetti({
                // confetti Einstellungen werden hier geschrieben
            })
        }

        newTodoBody.appendChild(textNode)
        newTodoBody.appendChild(deleteButton)

        todolistBody.appendChild(newTodoBody)

        confetti({
            // confetti Einstellungen werden hier geschrieben
        })

        todolistInputField.value = ""
    }
}

todolistSubmitButton.addEventListener("click", () => {
    addTodo()
})

todolistInputField.addEventListener("keypress", (taste) => {
    if (taste.key === "Enter") {
        addTodo()
    }
})

function HelloWorld() {
    alert("hello World")
}

//HelloWorld() //Funktionen müssen zum arbeiten gerufen werden ansonsten starten sie garnicht 