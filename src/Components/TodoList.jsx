import React from "react";

function TodoList({ list, setList }) {
  const handleRemove = (i) => {
    const listAfterRemove = list.filter((elem, id) => {
      return i != id;
    });
    setList(listAfterRemove);
  };
  const handleRemoveAllactivity = () => {
    setList([]);
  };

  return (
    <>
      <div>
        <h5>List:</h5>
      </div>
      <div>
        {list != [] &&
          list.map((data, i) => {
            return (
              <p key={i}>
                {data}
                <button onClick={() => handleRemove(i)}>Remove</button>
              </p>
            );
          })}
      </div>
      {list.length >= 2 && (
        <button onClick={handleRemoveAllactivity}>Remove All</button>
      )}
    </>
  );
}

export default TodoList;
