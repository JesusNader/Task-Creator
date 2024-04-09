import React from "react";
import { TaskIcon } from './TaskIcon'

function CompleteIcon({ completed, taskComplete }) {
    return (
        <TaskIcon
            type='check'
            color={completed ? 'green' : '#fff'}
            onClick={taskComplete}
        />
    );
}

export { CompleteIcon };