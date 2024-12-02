import React, { useState } from 'react';
import './ToDo.css';
function ToDo() {
    const [tasks, SetTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    function addTask() {
        // if the task is not empty add it 
        if (newTask.trim() !== "") {
            SetTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        SetTasks(updatedTasks);

    }
    function MoveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            SetTasks(updatedTasks);
        }
    }
    function MoveTaskDown(index) {
        if (index <tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            SetTasks(updatedTasks);
        }

    }
    return (
        <div className="To-do-list">
            <h1>To Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder='Enter a Task..'
                    value={newTask}
                    onChange={handleInputChange} />
                <button className="add-button"
                    onClick={addTask}>
                    Add
                </button>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button
                                className="move-button"
                                onClick={() => MoveTaskUp(index)}>
                                Up
                            </button>
                            <button
                                className="move-button"
                                onClick={() => MoveTaskDown(index)}>
                                Down
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}
export default ToDo
