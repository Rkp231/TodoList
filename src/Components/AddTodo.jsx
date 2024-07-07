import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

function AddTodo() {
  const storageKey = "todoKey";

  const getDataFromLocalStorage = () => {
    const getList = localStorage.getItem(storageKey);
    if (!getList) return [];
    console.log(getList);
    return JSON.parse(getList);
  };

  const [list, setList] = useState(() => getDataFromLocalStorage());
  const [activity, setActivity] = useState();

  const handleInput = (e) => {
    setActivity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prevList) => {
      const updatedList = [...prevList, activity];
      setActivity("");
      return updatedList;
    });
  };

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div className="container">
        <div className="todoInput">
          <form onSubmit={handleSubmit}>
            <h3>TODO LIST</h3>
            <input
              type="text"
              placeholder="Add Activity"
              value={activity}
              onInput={handleInput}
            />
            <button>Add Todo</button>
          </form>
        </div>

        <TodoList list={list} setList={setList} />
      </div>
    </>
  );
}

export default AddTodo;
