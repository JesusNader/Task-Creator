import React from "react";
import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);

    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItems,
        loading,
        error
    };

}

export { useLocalStorage };

// const defaultTasks = [
//   {
//     id: 1,
//     text: "Tarea 1",
//     completed: false,
//   },
//   {
//     id: 2,
//     text: "Tarea 2",
//     completed: true,
//   },
//   {
//     id: 3,
//     text: "Tarea 3",
//     completed: false,
//   },
//   {
//     id: 4,
//     text: "Tarea 4",
//     completed: false,
//   },
// ]

// localStorage.setItem('Tasks', JSON.stringify(defaultTasks));
// localStorage.removeItem('Tasks');