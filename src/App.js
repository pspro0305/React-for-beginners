import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  //Get Values from local Storage on Page Load.
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Deleted", todo);
    //Delete like this not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    settodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    settodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router> 
        {/* Used for Routing */}
        <Header title="My Todos List" searchbar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
               <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}></Route>
           <Route exact path="/about">
            <About />
          </Route> 
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
