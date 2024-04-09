import React from 'react';
import { SearchTask } from '../components/SearchTask';
import { Tasks } from '../components/Tasks';
import { TasksList } from '../components/TasksList';
import { CreateTaskButton } from '../components/CreateTaskButton';
import { TasksCompleted } from '../components/TasksCompleted';
import { TasksLoading } from '../components/TasksLoading';
import { TasksError } from '../components/TasksError';
import { TasksEmpty } from '../components/TasksEmpty';
import { Modal } from '../modal/Modal';
import { TaskContext } from '../context/TaskContext';
import { CreateNewTask } from '../components/CreateNewTask';

function AppUI() {
  const {
    loading,
    error,
    searchedTasks,
    taskCompleted,
    taskDelete,
    editingTask,
    setEditingTask,
    newTaskText,
    setNewTaskText,
    taskEdit,
    saveButtonClick,
    openModal,
    setOpenModal,
  } = React.useContext(TaskContext);

  return (
    <div className="app">
      <TasksCompleted />
      <SearchTask />
      <TasksList>
        {loading && (
          <>
            <TasksLoading />
            <TasksLoading />
            <TasksLoading />
            <TasksLoading />
          </>
        )}
        {error && <TasksError />}
        {(!loading && searchedTasks.length === 0) && <TasksEmpty />}

        {searchedTasks.map((task) => (
          <Tasks
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            taskComplete={() => taskCompleted(task.id)}
            taskDelete={() => taskDelete(task.id)}
            onEdit={taskEdit} // Activa la función de editar
            editingTask={editingTask && editingTask.id === task.id} // Es un booleano que determina si una tarea específica está en modo de edición o no
            newTaskText={newTaskText} // Es el estado que contiene el nuevo texto de la tarea que se está editando
            setNewTaskText={setNewTaskText} // Actualiza el estado de 'newTaskText' con el nuevo texto de la tarea que se esta editando
            setEditingTask={setEditingTask} // Se utiliza para actualizar el estado editingTask, que representa la tarea que se está editando
            saveButtonClick={() => saveButtonClick(task.id)}
          />
        ))}
      </TasksList>
      <CreateTaskButton />

      {openModal && (
        <Modal>
          <CreateNewTask />
        </Modal>
      )}
    </div>
  )
}

export default AppUI
