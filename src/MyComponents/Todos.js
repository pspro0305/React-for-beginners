import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>
            {/* <TodoItem todo={props.todos[0]}/> This is for Static*/}
            {/* This is rendered with JS HOM for Loop */}
            {props.todos.length === 0 ? "No todos to display." :
                
                    props.todos.map((todo) => {
                        <h3>this</h3>
                        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    })
                }
        </div>
    )
}
