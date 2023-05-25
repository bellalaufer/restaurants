import React from 'react';
import Task from '../Task/Task';

function TaskList({tasks, completeTask}) {
    return (
        <div className="tasks">
        <h4>Tasks: </h4>
          {tasks.map((task) => (        
            <div className="form-check" key={task.id}>              
            <Task task={task} completeTask={completeTask}/>        
            </div>      
        
        ))}
        </div>  
    );
}

export default TaskList;