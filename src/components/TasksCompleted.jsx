import React from "react";
import { TaskContext } from "../context/TaskContext";

function TasksCompleted() {
    const {
        completedTasks,
        totalTasks,
    } = React.useContext(TaskContext);

    return (
        <h1 className='info-tasks'>
            You have completed <span>{completedTasks}</span> of <span>{totalTasks}</span> tasks
        </h1>
    );
}

export { TasksCompleted };