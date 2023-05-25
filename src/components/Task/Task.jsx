import React from 'react';

function Task({task, completeTask}) {
    return (
        <div>
            <input 
                className="form-check-input" 
                type="checkbox"
                checked={task.completed}          
                onChange={() => completeTask(task.id)}                 
                id={task.id} /> 
              <label 
                className={task.completed ? "form-check-label text-decoration-line-through" : "form-check-label"}
                htmlFor={task.id}>                
                {task.text}
              </label> 
        </div>
    );
}

export default Task;