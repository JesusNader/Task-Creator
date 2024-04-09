import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = React.createContext();

function TaskProvider({ children }) {
    const {
        item: tasks,
        saveItems: saveTasks,
        loading,
        error,
    } = useLocalStorage('Tasks', []);
    const [searchTask, setSearchTask] = React.useState('');
    const [editingTask, setEditingTask] = React.useState(false);
    const [newTaskText, setNewTaskText] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTasks = tasks.filter(task => task.completed).length; // filter crea nuevo array de tareas completadas, luego a ese nuevo array le sacamos la longitud
    const totalTasks = tasks.length;
    const searchedTasks = tasks.filter((task) => {
        const taskText = task.text.toLocaleLowerCase();
        const searchText = searchTask.toLocaleLowerCase();
        return taskText.includes(searchText);
    });

    const addTask = (text) => {
        const newTasks = [...tasks];
        const lastTask = newTasks.length > 0 ? newTasks[newTasks.length - 1] : { id: 0 };
        const newId = lastTask.id + 1;
        newTasks.push({
            id: newId,
            text,
            completed: false,
        });
        saveTasks(newTasks);
    }

    const taskCompleted = (id) => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex((task) => task.id === id);
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
        saveTasks(newTasks);
    }

    const taskEdit = (id) => {
        const taskToEdit = tasks.find((task) => task.id === id);
        setEditingTask(taskToEdit);
        setNewTaskText(taskToEdit.text);
    }

    const taskDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        saveTasks(newTasks);
    }

    const saveButtonClick = (id) => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex((task) => task.id === id);

        if (editingTask && editingTask.id === id) {
            newTasks[taskIndex].text = newTaskText;
            setEditingTask(null);
            setNewTaskText('');
        }

        saveTasks(newTasks);
    }

    return (
        <TaskContext.Provider value={{
            loading,
            error,
            completedTasks,
            totalTasks,
            searchTask,
            setSearchTask,
            searchedTasks,
            addTask,
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
        }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };