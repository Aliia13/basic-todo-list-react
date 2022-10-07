import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// select input value  ****
// submit button has to show input value in UI ****
// new component which will create element(div > p > Delete button > Edit button)***
// create new component, it will work for displaying the message
// new comp which will clear the whole items list

function Main() {
  const [position, setPosition] = useState({
    inputValue: "",
    clicked: false,
    todos: [],
    message: ""
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition({ ...position, message: "" });
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="container">
        <h1>TO DO LIST</h1>
        <div className="inputDiv">
          <input
            className="input"
            type="text"
            placeholder="e.g. study algorithms"
            value={position.inputValue}
            onChange={(event) =>
              setPosition({
                ...position,
                inputValue: [event.target.value]
              })
            }
          />
          <button
            className="button"
            onClick={() =>
              setPosition({
                ...position,
                todos: [...position.todos, position.inputValue],
                clicked: true,
                inputValue: "",
                message: "Added new item"
              })
            }
          >
            Submit
          </button>
        </div>
        <h3 className="message">{position.message} </h3>
        <div className="list">
          <ul className="ul">
            {position.todos.map((el, index) => (
              <div className="wrapper">
                <p>{el[0]}</p>
                <div>
                  <button
                    className="trash"
                    onClick={() =>
                      setPosition({
                        todos: position.todos.filter((el, indexTrash) =>
                          indexTrash !== index ? el : ""
                        ),
                        message: "Item is deleted"
                      })
                    }
                  >
                    Delete
                  </button>
                  <button
                    className="edit"
                    onClick={() =>
                      setPosition({
                        todos: position.todos.filter((el, indexTrash) =>
                          indexTrash !== index ? el : ""
                        ),
                        inputValue: el,
                        message: "Please, edit the value"
                      })
                    }
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div>
          {position.todos.length > 0 ? (
            <button
              className="deleteButton"
              onClick={() =>
                setPosition({
                  ...position,
                  todos: [],
                  message: "Cleared the list of items"
                })
              }
            >
              {" "}
              Clear Items
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
