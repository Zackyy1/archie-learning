import React from 'react'

const TodoList = () => {

    const [todos, setTodos] = React.useState([])

    const newTodo = (e) => {
        e.preventDefault()

        if (e.target.elements.todo.value.length < 1) {
            alert('Please enter a todo')
            return
        }
        const newTodo = e.target.elements.todo.value
        setTodos([...todos, newTodo])
        e.target.reset()
    }

    return (

        <div className="">
            <h1>Todo List</h1>

            <form onSubmit={(e) => newTodo(e)}>
                <input type="text" name="todo" />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>

        </div>
    )
}

export default TodoList