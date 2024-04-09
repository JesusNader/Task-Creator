import React from "react";
import { TaskContext } from "../context/TaskContext";

function SearchTask() {
    const {
        searchTask,
        setSearchTask,
    } = React.useContext(TaskContext);

    return (
        <div className="search-task-container">
            <input
                className="search-engine"
                placeholder="Search Task"
                value={searchTask}
                onChange={(e) => {
                    setSearchTask(e.target.value);
                }}
            />
        </div>
    );
}

export { SearchTask };