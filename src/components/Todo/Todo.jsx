import React from 'react'
import { useState } from "react"
import './Todo.css'
import './Modal.css'
import {AiFillDelete} from 'react-icons/ai'
import {BsSaveFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
// import { confirm } from "react-confirm-box";

function Todo(){
    const [todos, setTodos] = React.useState([])
    const [todo, setTodo] = React.useState("")
    const [todoEditing, setTodoEditing] = React.useState(null)
    const [editingText, setEditingText] = React.useState("")
    const [modal, setModal] = useState(false);

    React.useEffect(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if(loadedTodos){
            setTodos(loadedTodos);
        }
    },[])

    React.useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    },[todos])


    function handleSubmit(e){
        e.preventDefault()

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        }
        if (todo === ""){
            alert("Please enter a Todo to continue.")
        } else {
        setTodos([...todos].concat(newTodo))
        setTodo("")
        }
    }
    
    function deleteTodo(id){ 
        const updatedTodos = [...todos].filter((todo) => todo.id !==id)
        setTodos(updatedTodos)
    }

    function toggleComplete (id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    function editTodo(id){
        const updatedTodos = [...todos].map((todo) => {
            if(todo.id === id){
                todo.text = editingText
            }
            return todo
        })
        setTodos(updatedTodos)
        setTodoEditing(null)
        setEditingText("")
    }

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <div className='App'>
            <form onSubmit = {handleSubmit} className="todo-message">
                <input id="new" type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
                <button type="submit" title="Add Todo"> Add Todo</button>
            </form>

            {todos.map((todo) => <div key= {todo.id}>
                <div className='todo-display'>
                    <input
                        type = "checkbox"
                        onChange = {() => toggleComplete (todo.id)}
                        checked = {todo.completed}
                        className='check-box'
                    />

                    {
                        todoEditing === todo.id?
                        (<input 
                            type = "text"
                            onChange = {(e) => setEditingText (e.target.value)}
                            value = {editingText}
                            className="output"
                        />)
                        :
                        (<div className="output"> {todo.text} </div>)
                    }
                        
                    <button className="button delete" title="Delete Todo" onClick = {() => deleteTodo (todo.id)}> <AiFillDelete /> </button>

                    {todoEditing === todo.id ? (<button className="button save" onClick={() => editTodo (todo.id)} title="Save edited Todo">< BsSaveFill /></button>) :
                    (<button className="button edit" onClick = {() => setTodoEditing (todo.id)} title="Edit Todo">< AiFillEdit /> </button>)}
                </div>

                {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay">
                                <div className="modal-content">
                                    <p>Are you sure you want to delete this Todo?</p>
                                    <div className="actions">
                                        <button onClick={toggleModal} className="goOn">Yes</button>
                                        <button onClick={toggleModal} className="neverMind">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    

            </div>)}
        </div>
    );
}

export default Todo
