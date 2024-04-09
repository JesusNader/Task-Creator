import React from "react";
import { TaskIcon } from './TaskIcon'

function DeleteIcon({ taskDelete }) {
    return (
        <TaskIcon
            type='delete'
            color='#fff'
            onClick={taskDelete}
        />
    );
}

export { DeleteIcon };