import React from "react";

function TasksLoading() {
    return(
        <div className="loading-task-container">
            <span className="loading-task-complete-icon"></span>
            <p className="loading-task-text">Loading tasks...</p>
            <span className="loading-task-edit-icon"></span>
            <span className="loading-task-delete-icon"></span>
        </div>
    );
}

export { TasksLoading };