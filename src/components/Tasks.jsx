import { CompleteIcon } from '../components/CompleteIcon';
import { EditIcon } from '../components/EditIcon';
import { DeleteIcon } from '../components/DeleteIcon';

function Tasks(props) {
  if (props.editingTask) {
    return (
      <li className={`edit-task`}>
        <input
          className='input-edit-text'
          type="text"
          value={props.newTaskText}
          onChange={(e) => props.setNewTaskText(e.target.value)}
        />
        <div className="buttons-edit-container">
          <button
            className='button-save'
            onClick={() => {
              props.saveButtonClick(props.newTaskText)
            }}>
            Save
          </button>
          <button
            className='button-cancel'
            onClick={() => props.setEditingTask(null)}>
            Cancel
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className={`tasks${props.completed ? "--complete" : ''}`}>
      <CompleteIcon
        completed={props.completed}
        taskComplete={props.taskComplete}
      />
      <p className={`task-p${props.completed ? "--complete" : ''}`}>
        {props.text}
      </p>
      <EditIcon
        onEdit={() => props.onEdit(props.id)}
      />
      <DeleteIcon
        taskDelete={props.taskDelete}
      />
    </li>
  );
}

export { Tasks };