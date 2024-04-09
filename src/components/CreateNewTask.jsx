import React from "react";
import { TaskContext } from "../context/TaskContext";

function CreateNewTask() {
    const {
        addTask,
        setOpenModal,
    } = React.useContext(TaskContext);

    const [newTaskValue, setNewTaskValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    }

    return (
        <div className="background-opacity">
            <form className="task-form-container" onSubmit={onSubmit} >
                <label htmlFor="Task">Add the new task</label>
                <textarea
                    placeholder="Sleep"
                    value={newTaskValue}
                    id="Task"
                    onChange={onChange}
                />
                <div className="task-form-container-button">
                    <button
                        type="button"
                        className="task-form-button--cancel"
                        onClick={() => setOpenModal(false)}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="task-form-button--add">
                        Add tasks
                    </button>
                </div>
            </form>
        </div>
    );
}

export { CreateNewTask };