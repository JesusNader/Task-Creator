import React from "react";
import { TaskContext } from "../context/TaskContext";

function CreateTaskButton() {
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TaskContext);

    return (
        <button className={`create-task-button${openModal ? '--active' : ''}`} onClick={() => {
            setOpenModal(!openModal);
        }} >+</button>
    );
}

export { CreateTaskButton };