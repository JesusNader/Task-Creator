import React from "react";
import { TaskIcon } from './TaskIcon'

function EditIcon({ onEdit }) {
    return (
        <TaskIcon
            type='edit'
            color='#fff'
            onClick={onEdit}
        />
    );
}

export { EditIcon };